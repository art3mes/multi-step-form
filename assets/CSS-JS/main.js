console.log("l;,mao");
const heading_step1="Personal info";
const subHeading_step1="Please provide your name, email address, and phone number.";

const heading_step2="Select your plan";
const subHeading_step2="You have the option of monthly or yearly billing.";

const heading_step3="Pick add-ons";
const subHeading_step3="Add-ons help enhance your gaming experience";

const heading_step4="Finishing up";
const subHeading_step4="Double-check everything before confirming.";

const plans={
    Arcade:9,
    Advanced:12,
    Pro:15,
    'Online Service':1,
    'Larger Storage':2,
    'Customizable Profile':2
};

let priceArray=[];
let monthYearFlag=0;    //0 means month format

let pageNo=1;

///////////////////////////////////////////////////////////////////////////////

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
            finalSummary();
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

////////////////////////////////////////////////////////////////////////////////

function pageNo1(){
    console.log(pageNo);
    
    footerRightButtonTextColor()
    $(".header-top").text(heading_step1);
    $(".header-bottom").text(subHeading_step1);

    $(".sidebar-step:nth-of-type(1) .step-left").addClass("active");
    $(".sidebar-step:nth-of-type(2) .step-left").removeClass("active");
    $(".sidebar-step:nth-of-type(3) .step-left").removeClass("active");
    $(".sidebar-step:nth-of-type(4) .step-left").removeClass("active");

    $(".step1-body").css('display','flex');
    $(".step2-body").css('display','none');
    $(".step3-body").css('display','none');
    $(".step4-body").css('display','none');
    $(".global").css('display','none');
}

function pageNo2(){
    pageNo=2;            //submit button is pressed. now on page 2
    console.log(pageNo);
    
    footerRightButtonTextColor()
    // $(".button-left").css('display','flex');     //go back button reappear

    $(".sidebar-step:nth-of-type(1) .step-left").removeClass("active");
    $(".sidebar-step:nth-of-type(2) .step-left").addClass("active");
    $(".sidebar-step:nth-of-type(3) .step-left").removeClass("active");
    $(".sidebar-step:nth-of-type(4) .step-left").removeClass("active");

    $(".header-top").text(heading_step2);
    $(".header-bottom").text(subHeading_step2);
    
    $(".step1-body").css('display','none');
    $(".step2-body").css('display','flex');
    $(".step3-body").css('display','none');
    $(".step4-body").css('display','none');
    $(".global").css('display','flex');
    
}
function pageNo3(){
    console.log(pageNo);
    footerRightButtonTextColor()
    $(".header-top").text(heading_step3);
    $(".header-bottom").text(subHeading_step3);

    $(".sidebar-step:nth-of-type(1) .step-left").removeClass("active");
    $(".sidebar-step:nth-of-type(2) .step-left").removeClass("active");
    $(".sidebar-step:nth-of-type(3) .step-left").addClass("active");
    $(".sidebar-step:nth-of-type(4) .step-left").removeClass("active");
   // $(".step1-body").css('display','none');
    $(".step2-body").css('display','none');
    $(".step3-body").css('display','flex');
    $(".step4-body").css('display','none');
   // $(".global").css('display','flex');
}
function pageNo4(){
    console.log(pageNo);
    
    footerRightButtonTextColor()
    $(".header-top").text(heading_step4);
    $(".header-bottom").text(subHeading_step4);

    $(".sidebar-step:nth-of-type(1) .step-left").removeClass("active");
    $(".sidebar-step:nth-of-type(2) .step-left").removeClass("active");
    $(".sidebar-step:nth-of-type(3) .step-left").removeClass("active");
    $(".sidebar-step:nth-of-type(4) .step-left").addClass("active");
  //  $(".step1-body").css('display','none');
  //  $(".step2-body").css('display','none');
    $(".step3-body").css('display','none');
    $(".step4-body").css('display','flex');
    //$(".global").css('display','flex');
}
function finalPage(){
    console.log(pageNo);
    $(".main-header").css('display','none');
    // $(".step1-body").css('display','none');
    // $(".step2-body").css('display','none');
    // $(".step3-body").css('display','none');
    $(".step4-body").css('display','none');
    $(".final-step").css('display','flex');
    $(".global").css('display','none');
}

/////////////////////////////////////////////////////////////////////////////

function preventDefaults(event){
    event.preventDefault();
}
function footerRightButtonTextColor(){
    if (pageNo===4){
        $(".footer-buttons .button-right button").text("Confirm");
        $(".footer-buttons .button-right button").css("background-color","#938dff")
    }
    else{
        $(".footer-buttons .button-right button").text("Next Step");
        $(".footer-buttons .button-right button").css("background-color","#03285b")
    }
}
let flag='m';
function toggleMonthYear(){
    if(flag=='m'){
        $(".plan-yearly").css('display','flex');
        $(".plan-one .plan-cost").text("$90/yr");
        $(".plan-two .plan-cost").text("$120/yr");
        $(".plan-three .plan-cost").text("$150/yr");

        $(".add-on1 .add-onCost").text("$10/yr");
        $(".add-on2 .add-onCost").text("$20/yr");
        $(".add-on3 .add-onCost").text("$20/yr");
        flag='y';
        monthYearFlag=1;  // year format
    }
    else{
        $(".plan-yearly").css('display','none');
        $(".plan-one .plan-cost").text("$9/mo");
        $(".plan-two .plan-cost").text("$12/mo");
        $(".plan-three .plan-cost").text("$15/mo");

        $(".add-on1 .add-onCost").text("$1/mo");
        $(".add-on2 .add-onCost").text("$2/mo");
        $(".add-on3 .add-onCost").text("$2/mo");
        flag='m';
        monthYearFlag=0; //month flag
    }

}
function planSelector(event){
    priceArray=[];
    uncheckAll();         //if plan is changed, uncheck all checkboxes of step 3
    if(event.className==="plan-one"){
        priceArray.push("Arcade");
    }
    else if(event.className==="plan-two"){
        priceArray.push("Advanced");
    }
    else{
        priceArray.push("Pro");
    }
    console.log(priceArray);

    let plans=["plan-one","plan-two","plan-three"];
    for(let a=0;a<plans.length;a++){
        $("."+plans[a]).removeClass("selected-plan");
    }
    $("."+event.className).addClass("selected-plan");
    
}
let flagAddon=0,flagAddon1=0,flagAddon2=0; //0 = new value
function addOnSelector(event){
    console.log(event.className);
     
    if(event.className==="add-on1"){
        if(flagAddon==0){
          priceArray.push("Online Service");  
          flagAddon=1;
        }
        else{
            arrayPopper("Online Service",priceArray);
            flagAddon=0;
        }
    }
    else if(event.className==="add-on2"){
        if(flagAddon1==0){
            priceArray.push("Larger Storage");  
            flagAddon1=1;
          }
          else{
              arrayPopper("Larger Storage",priceArray);
              flagAddon1=0;
          }
        
    }
    else{
        if(flagAddon2==0){
            priceArray.push("Customizable Profile");  
            flagAddon2=1;
          }
          else{
              arrayPopper("Customizable Profile",priceArray);
              flagAddon2=0;
          }
        
    }
    console.log(priceArray);
}
function arrayPopper(itemName,array){
    const index = array.indexOf(itemName);
    if (index > -1) { // only splice array when item is found
    array.splice(index, 1); // 2nd parameter means remove one item only
    }
}
function toggleCheckbox(checkboxNumber) {       //toggling checkbox when clicked anywhere
    var checkbox = document.getElementById("checkbox" + checkboxNumber);
    checkbox.checked = !checkbox.checked;
}
function uncheckAll() {
    var checkboxes = document.querySelectorAll('.step3-body input[type=checkbox]');
    for (var i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = false;
    }
    flagAddon=0,flagAddon1=0,flagAddon2=0;
}
function finalSummary(){
    let sumTotal=0;
    for(let a=0;a<priceArray.length;a++){
        if( plans.hasOwnProperty(priceArray[a]) ) {             //top base plan
            sumTotal=sumTotal+plans[priceArray[a]];
            if(monthYearFlag==1){
                $(".info-top-r1-left-top").text(priceArray[a]+" (Yearly)");
                $(".info-top-r1-right").text("$"+plans[priceArray[a]]*10+"/yr");
            }
            else{
                 $(".info-top-r1-left-top").text(priceArray[a]+" (Monthly)");
                 $(".info-top-r1-right").text("$"+plans[priceArray[a]]+"/mo");
            }
        }
        break;
    }
    for(let a=0;a<3;a++){                 //making the divs that are gone, reappear again
        $(".info-top-r"+(a+2)).css('display','flex');
    }
    
    for(let a=0;a<3;a++){              //add-ons
        if(a<priceArray.length-1){
            sumTotal=sumTotal+plans[priceArray[a+1]];
            if(monthYearFlag==0){
                $(".info-top-r"+(a+2)+" .info-top-r-right").text("$"+plans[priceArray[a+1]]+"/mo");
            }
            else{
                $(".info-top-r"+(a+2)+" .info-top-r-right").text("$"+plans[priceArray[a+1]]*10+"/yr");
            }
            $(".info-top-r"+(a+2)+" .info-top-r-left").text(priceArray[a+1]);
        }
        else{               //disappearing unused divs
            $(".info-top-r"+(a+2)).css('display','none');
        }
    }
    if(monthYearFlag==0){
        $(".info-bottom .info-bottom-r-right").text("$"+sumTotal+"/mo");
        $(".info-bottom .info-bottom-r-left").text("Total (per month)");
    }
    else{
        $(".info-bottom .info-bottom-r-left").text("Total (per year)");
        $(".info-bottom .info-bottom-r-right").text("$"+sumTotal*10+"/yr");
    }
    console.log(priceArray);
}