console.log("l;,mao");
const heading_step2="Select your plan";
const subHeading_step2="You have the option of monthly or yearly billing.";

const heading_step3="Pick add-ons";
const subHeading_step3="Add-ons help enhance your gaming experience";

function handleSubmit(event){
    event.preventDefault();
    console.log("ok");
    // $(".button-left").css('display','flex');     //go back button reappear

    $(".header-top").text(heading_step2);
    $(".header-bottom").text(subHeading_step2);

    $(".step1-body").css('display','none');
    $(".step2-body").css('display','flex');
    $(".global").css('display','flex');
    
}