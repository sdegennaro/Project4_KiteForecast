$(function() {
  console.log('scripts loaded...');
  bindMyAccountLink();
});

bindMyAccountLink = function(){
  $("#my-account-link").on("click",function(){
    makeDisplayed($("#account-info-form"));
  });
};
