console.log("l;,mao");
const heading_step2="Select your plan";
const subHeading_step2="You have the option of monthly or yearly billing.";

const heading_step3="Pick add-ons";
const subHeading_step3="Add-ons help enhance your gaming experience";

const heading_step4="Finishing up";
const subHeading_step4="Double-check everything before confirming.";

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

function toggleCheckbox(checkboxNumber) {       //toggling checkbox when clicked anywhere
    var checkbox = document.getElementById("checkbox" + checkboxNumber);
    checkbox.checked = !checkbox.checked;
  }
  