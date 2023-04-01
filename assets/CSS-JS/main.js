console.log("l;,mao");
const heading_step1="Personal info";
const subHeading_step1="Please provide your name, email address, and phone number.";

const heading_step2="Select your plan";
const subHeading_step2="You have the option of monthly or yearly billing.";

const heading_step3="Pick add-ons";
const subHeading_step3="Add-ons help enhance your gaming experience";

const heading_step4="Finishing up";
const subHeading_step4="Double-check everything before confirming.";

let pageNo=1;

function pageChangerForward(){
   pageNo++;
    switch(pageNo){
        case 1:
            pageNo1();
            break;
        case 2:
            pageNo2();
            break;
        case 3:
            pageNo3();
            break;
        case 4:
            pageNo4();
    }
    if(pageNo==5){
        finalPage();
    }

}
function pageChangerBackward(){
    pageNo--;
    switch(pageNo){
        case 1:
            pageNo1();
            break;
        case 2:
            pageNo2();
            break;
        case 3:
            pageNo3();
            break;
        case 4:
            pageNo4();
    }
}
function pageNo1(){
    $(".header-top").text(heading_step1);
    $(".header-bottom").text(subHeading_step1);

    $(".step1-body").css('display','flex');
    $(".step2-body").css('display','none');
    $(".step3-body").css('display','none');
    $(".step4-body").css('display','none');
    $(".global").css('display','none');
}

function pageNo2(){
    
    console.log("2");
    // $(".button-left").css('display','flex');     //go back button reappear

    $(".header-top").text(heading_step2);
    $(".header-bottom").text(subHeading_step2);

    $(".step1-body").css('display','none');
    $(".step2-body").css('display','flex');
    $(".step3-body").css('display','none');
    $(".step4-body").css('display','none');
    $(".global").css('display','flex');
    pageNo=2;            //submit button is pressed. now on page 2
}
function pageNo3(){
    console.log("3");
    $(".header-top").text(heading_step3);
    $(".header-bottom").text(subHeading_step3);

    $(".step1-body").css('display','none');
    $(".step2-body").css('display','none');
    $(".step3-body").css('display','flex');
    $(".step4-body").css('display','none');
   // $(".global").css('display','flex');
}

function pageNo4(){
    console.log("4");
    $(".header-top").text(heading_step4);
    $(".header-bottom").text(subHeading_step4);

    $(".step1-body").css('display','none');
    $(".step2-body").css('display','none');
    $(".step3-body").css('display','none');
    $(".step4-body").css('display','flex');
    //$(".global").css('display','flex');
}
function finalPage(){
    console.log("5");
    $(".main-header").css('display','none');
    $(".step1-body").css('display','none');
    $(".step2-body").css('display','none');
    $(".step3-body").css('display','none');
    $(".step4-body").css('display','none');
    $(".final-step").css('display','flex');
    $(".global").css('display','none');
}

function preventDefaults(event){
    event.preventDefault();
}




function toggleCheckbox(checkboxNumber) {       //toggling checkbox when clicked anywhere
    var checkbox = document.getElementById("checkbox" + checkboxNumber);
    checkbox.checked = !checkbox.checked;
  }

  let flag='m';
function toggleMonthYear(){
    if(flag=='m'){
        $(".plan-yearly").css('display','flex');
        flag='y';
    }
    else{
        $(".plan-yearly").css('display','none');
        flag='m';
    }

}