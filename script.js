
$(document).ready(function(){
$(".profile_container").show();
$(".skill_container").hide();
$(".portfolio_container").hide();
$(".contact_container").hide();
setActiveTab('#profile-btn')

console.log('connected');

$("#profile-btn").click(function() {
setActiveTab('#profile-btn')
console.log('Profile clicked');
$(".profile_container").show();
$(".skill_container").hide();
$(".portfolio_container").hide();
$(".contact_container").hide();
})

$("#skills-btn").click(function() {
setActiveTab('#skills-btn')
console.log('Skills clicked');
$(".profile_container").hide();
$(".skill_container").show();
$(".portfolio_container").hide();
$(".contact_container").hide();
})

$("#portfolio-btn").click(function() {
setActiveTab('#portfolio-btn')
console.log('Portfolio clicked');
$(".profile_container").hide();
$(".skill_container").hide();
$(".portfolio_container").show();
$(".contact_container").hide();
})

$("#contact-btn").click(function() {
setActiveTab('#contact-btn')
console.log('Contact clicked');
$(".profile_container").hide();
$(".skill_container").hide();
$(".portfolio_container").hide();
$(".contact_container").show();
})

})
function setActiveTab(id){
console.log(id+' recieved')
$(".active-tab").removeClass("active-tab")
$(id).addClass("active-tab")
}

function showNext(i){
console.log('reached shownext ' + i)
switch(i){
case 2:         
    setActiveTab('#skills-btn')
    console.log('Skills clicked');
    $(".profile_container").hide();
    $(".skill_container").show();
    $(".portfolio_container").hide();
    $(".contact_container").hide();
    break;
case 3:
    setActiveTab('#portfolio-btn')
    console.log('Portfolio clicked');
    $(".profile_container").hide();
    $(".skill_container").hide();
    $(".portfolio_container").show();
    $(".contact_container").hide();
    break;
case 4: 
    setActiveTab('#contact-btn')
    console.log('Contact clicked');
    $(".profile_container").hide();
    $(".skill_container").hide();
    $(".portfolio_container").hide();
    $(".contact_container").show();
    break;
default:
    console.log('error while switching tab from js')
}
}
