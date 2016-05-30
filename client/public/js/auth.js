$(function() {
  console.log('Auth loaded...');
  auth.bindLoginForm();
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
      email : email,
      password: password
    }
  };

  $.post('/api/users', payload)
    .done(auth.signUpSuccess)
    .fail(auth.signUpFailure)
};



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
  // auth.setLoggedInState();
};

auth.loginFailure = function(jqXHR){
  if( jqXHR == 401 ){
    auth.showAlert("Invalid Credentials");
  }
};


// Multi purpose functions
auth.showAlert = function(msg){
  $("#alert-msg").text(msg).fadeIn(1000, function(){
    $(this).fadeOut(1000);
  })
};
