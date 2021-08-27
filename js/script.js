//Allows name feild to be in focus on page load.

$('#name').focus();


// this hides the inout feild for 'other job role' and shows it once 'other job role' is selected

$('#other-job-role').hide();
$('#title').on('click',function(){

if($('#title option:selected').val()==='other'){

    $('#other-job-role').show();
  
  }

    else{
         $('#other-job-role').hide();
        };

});





// this section disables the "color" dropdown menu and creates variables to store the color and design menu elements 
//as well as the color options avalible

$('#color').prop("disabled", true);

const color = $('#color');

const design = $('#design');

const colorOptions = $('#color option');


//this event listener listens for a change on the 't shirt design element' and enables the color box if once design is selected is selected.
// it also updates to shows the appropriate colors for the design chosen.

design.on('change', function(event){

  color.prop("disabled", false);

    colorOptions.each(function(){

    
      if( event.target.value === $(this).attr('data-theme')){

          $(this).show();
          $(this).prop('selected' ,'selected');
          
          
            
        }else{
            $(this).hide();
            
        };


    });
   
       
    }
  
);


// this section listens for changes on the activity feild set.  
//If a checkbox is selected/deselcted, it adds or subtracts the approptiate value from the total price and shows it at the bottom of the section

let totalCost = 0;

$('#activities').on('change', function(activity){

  let activityCost = +activity.target.getAttribute('data-cost')
  
  if (activity.target.checked){

    totalCost+= activityCost;
    
  }if (activity.target.checked === false){

    totalCost-=activityCost;

  };

  $("#activities-cost").text('$' + totalCost);

});



// This section hides all payment options other than credit card on page load
// it also listens for changes and shows the appropriate information based on the input selected

$('#paypal').hide();

$('#bitcoin').hide();

$('#payment option[value = "credit-card"]').attr('selected','selected');

$('#payment').on('change', function(paymentOption){
  
let paymentOptionSelected = paymentOption.target.value;

if(paymentOptionSelected === 'paypal'){
  $('#paypal').show();
  $('#credit-card').hide();
  $('#bitcoin').hide();

} else if(paymentOptionSelected === 'bitcoin'){
  $('#bitcoin').show();
  $('#credit-card').hide();
  $('#paypal').hide();

}else if(paymentOptionSelected === 'credit-card'){
  $('#credit-card').show();
  $('#bitcoin').hide();
  $('#paypal').hide();
};

});



// this event listener uses the form element and uses the submit event to listen for input on the form
// when the form is submited, I have used regular expressions to test if the required feild meets the desired criteria 
// if the desired criteria is met, a checkmark will appear, if not a color inicator as well as a message explaining the desired input appears.
// the form will only submit once all input information matches the desired input




$("form").on('submit', function(event){
  
  let nameEntered = $('#name').val();
  let emailEntered = $('#email').val();
  let ccEntered = $('#cc-num').val()
  let zipEntered = $('#zip').val();
  let cvvEntered = $('#cvv').val();
  
  
  let activitiesChecked=$("input:checked").prop('checked');
  
  const nameTest = /[\w\W]/.test(nameEntered);
  const emailTest = /^[^@]+@[^@.]+\.[a-z]+$/gim.test(emailEntered);
  const ccTest = /^[0-9]{13,16}$/.test(ccEntered);
  const zipTest = /^[0-9]{5}$/.test(zipEntered);
  const cvvTest = /^[0-9]{3}$/.test(cvvEntered);



  if(nameTest=== true){

    $("[for=name]").addClass('valid');
    $("[for=name]").removeClass("not-valid error-border");
    $('#name-hint').hide();
  }

 else if (nameTest !== true){

    
    $('#name-hint').show();
    $("[for=name]").addClass("not-valid error-border");
    event.preventDefault();
    
  }
  

  if(emailTest=== true){

    $("[for=email]").addClass('valid');
    $("[for=email]").removeClass("not-valid error-border");
    $('#email-hint').hide();

  }

 else if (emailTest !== true){

    
    $('#email-hint').show();
    $("[for=email]").addClass("not-valid error-border");
    event.preventDefault();
    
  }



  if(ccTest=== true ){

    $("[for=cc-num]").addClass('valid');
    $("[for=cc-num]").removeClass("not-valid error-border");
    $('#cc-hint').hide();

  } else if (($('#payment option:selected').val()==='credit-card')&&ccTest !== true){

    
    $('#cc-hint').show();
    $("[for=cc-num]").addClass("not-valid error-border");
    event.preventDefault();
    

  }

  if (zipTest === true){


    $('[for=zip]').addClass("valid");
    $('[for=zip]').removeClass("not-valid error-border");
    $('#zip-hint').hide();
    
  }else if (($('#payment option:selected').val()==='credit-card')&&zipTest !== true) {

  
    $('#zip-hint').show();
    $('[for=zip]').addClass("not-valid error-border");
    event.preventDefault();
  }



  if (cvvTest === true ){


    $('[for=cvv]').addClass("valid");
    $('[for=cvv]').removeClass("not-valid error-border");
    $('#cvv-hint').hide();
    
    
  }else if (($('#payment option:selected').val()==='credit-card')&&cvvTest !== true){

    
    $('#cvv-hint').show();
    $('[for=cvv]').addClass("not-valid error-border");
    event.preventDefault();
    
  }


  if(activitiesChecked === true){

    $('legend').eq(2).addClass('valid');
    $('legend').eq(2).removeClass('not-valid error-border ');
    $('#activities-hint').hide();


  }else if (activitiesChecked !==true){

    event.preventDefault();
    $('legend').eq(2).addClass('not-valid error-border ');
    $('#activities-hint').show();
  };


  



});


//this section adds focus indicatiors to the activites section so the user knows where they are on the page when tabbng through.



const checkBoxes = $('[type = checkbox]')

for (let i = 0; i<checkBoxes.length; i++){

$('[type = checkbox]').focus( function(focus){
  
  if(focus.target.value=== 'on'){
    $(this).parent().addClass('focus')

  };
  
  $('[type = checkbox]').blur(function(blur){

    if(blur.target.value=== 'on'){
      $(this).parent().removeClass('focus')
  
    };

  });
  
  

})};



