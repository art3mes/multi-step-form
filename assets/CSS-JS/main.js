console.log("l;,mao");
const heading="Select your plan";
const subHeading="You have the option of monthly or yearly billing.";

function handleSubmit(event){
    event.preventDefault();
    console.log("ok");
    // $(".button-left").css('display','flex');     //go back button reappear

    $(".header-top").text(heading);
    $(".header-bottom").text(subHeading);

    $(".step1-body").css('display','none');
    $(".step2-body").css('display','flex');
    $(".global").css('display','flex');
    
}