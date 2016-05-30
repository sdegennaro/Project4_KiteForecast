$(function() {
  console.log('Auth loaded...');
  auth.checkLoggedInStatus();
  auth.bindLoginForm();
  auth.bindSignUpForm();
  // auth.bindSwitchFormLinks();
  auth.bindLogoutLink();
});

var auth = auth || {};

// Functions for Sign Up
auth.submitSignUpForm = function(){
  var $form    = $('#sign-up-form');
  var username = $form.find('[name=username]').val();
  var password = $form.find('[name=password]').val();
  var confirm  = $form.find('[name=password_confirm]').val();

  if (confirm !== password) {
    return auth.showAlert("Passwords do not match!");
  }

  var payload = {
    user: {
      username: username,
      password: password
    }
  };

  $.post('/api/users', payload)
    .done(auth.signUpSuccess)
    .fail(auth.signUpFailure)
};

auth.bindSignUpForm = function(){
  $('#sign-up-form').on('submit', function(e) {
    e.preventDefault();
    auth.submitSignUpForm();
  });
};

auth.signUpSuccess = function(data, status, jqXHR) {
  console.log(data, status, jqXHR);
  // should show a success alert
}

auth.signUpFailure = function(jqXHR) {
  auth.showAlert("There was an error. Try again!");
}

// Functions for Log In
auth.bindLoginForm = function(){
  $("#log-in-form").on("submit", function(e){
    e.preventDefault();
    auth.submitLoginForm();
  });
};

auth.submitLoginForm = function(){
  var $form = $("#log-in-form");
  var username = $form.find("[name=username]").val();
  var password = $form.find("[name=password]").val();

  var payload = {
    username: username,
    password: password
  };

  $.post('/api/auth', payload)
    .done(auth.loginSuccess)
    .fail(auth.loginFailure);
};

auth.loginSuccess = function( data, status, jqXHR){
  Cookies.set("jwt_token", data.token);
  auth.setLoggedInState();
};

auth.loginFailure = function(jqXHR){
  if( jqXHR == 401 ){
    auth.showAlert("Invalid Credentials");
  }
};

auth.setLoggedInState = function(){
  // $(".forms.container").hide();
  // $("#logged-in-content").fadeIn(1000);
  $("body").css("background-color","green")
  auth.users.init();
};


// Multi purpose functions
auth.showAlert = function(msg){
  $("#alert-msg").text(msg).fadeIn(1000, function(){
    $(this).fadeOut(1000);
  })
};

auth.users = {
  init: function(){
      auth.users.getAll()
        .done(function(users){
          auth.users.renderUsers(users);
        })
        .fail( function(jqXHR){
            console.log(jqHXR);
        });
  },
  getAll: function(){
    return $.getJSON("/api/users");
  },
  renderUsers: function(users){
    var $container = $("#users-container");
    users.forEach( function(user){
      var $user = $("<li>");
      $user.html("Username: " + user.username);
      $container.append($user);
    });
  }
};

auth.bindLogoutLink = function(){
  $("#log-out-link").on("click", function(e){
    console.log("click");
    Cookies.remove("jwt_token");
    auth.checkLoggedInStatus();
  } );
};

auth.checkLoggedInStatus= function(){
  var token = auth.getToken();
  if(token){
    auth.setLoggedInState();
  } else {
    auth.setLoggedOutState();
  }
};

auth.getToken = function(){
  return Cookies.get("jwt_token");
}

///// TODO Design Logged Out vs Logged IN State

auth.setLoggedOutState = function() {
  $("body").css("background-color","red")
  // $('#logged-in-content').hide();
  // $('.forms.container').fadeIn(1000);
}
