//Get 'name' input and use .focus()

$('#name').focus()


//hide the text feild in job role
// set eventlistener to listen if other is selected.  If selected show text feild 

$('#other-job-role').hide()
$('#title').on('click',function(){

if($('#title option:selected').val()==='other'){

    $('#other-job-role').show()}

    else{
         $('#other-job-role').hide()
        }

})





// disabled the "color" dropdown menu

$('#color').prop("disabled", true)

const color = $('#color')

const design = $('#design')

const colorOptions = $('#color option')



design.on('change', function(event){

    color.prop("disabled", false)
    
    colorOptions.each(function(){

        if( event.target.value === $(this).attr('data-theme')){
            $(this).show()

        }else{
            $(this).hide()
        }


    })
   
       
    }

)

let totalCost = 0

$('#activities').on('change', function(activity){

  let activityCost = +activity.target.getAttribute('data-cost')
  
  if (activity.target.checked){

    totalCost+= activityCost
    
  }if (activity.target.checked === false){

    totalCost-=activityCost

  }

  $("#activities-cost").text('$' + totalCost)

})

/////////////////////////////////////////////////////

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
}

});

//////////////////////////////////////////////////////

$("form").on('submit', function(event){
  
  let nameEntered = $('#name').val();
  let emailEntered = $('#email').val();
  let ccEntered = $('#cc-num').val()
  let zipEntered = $('#zip').val();
  let cvvEntered = $('#cvv').val();
  
  const nameTest = /[\w\W]/.test(nameEntered);
  const emailTest = /^[^@]+@[^@.]+\.[a-z]+$/gim.test(emailEntered);
  const ccTest = /^[0-9]{13,16}$/.test(ccEntered)
  const zipTest = /^[0-9]{5}$/.test(zipEntered)
  const cvvTest = /^[0-9]{3}$/.test(cvvEntered)


  if(nameTest=== true){

    $("[for=name]").addClass('valid')

  }

 else if (nameTest !== true){

    
    $('#name-hint').show();
    $("[for=name]").addClass("not-valid error border");
    event.preventDefault();
    
  }
  

  if(emailTest=== true){

    $("[for=email]").addClass('valid')

  }

 else if (emailTest !== true){

    
    $('#email-hint').show();
    $("[for=email]").addClass("not-valid error border");
    event.preventDefault();
    
  }



  if(ccTest=== true){

    $("[for=cc-num]").addClass('valid')

  } else if (ccTest !== true){

    
    $('#cc-hint').show();
    $("[for=cc-num]").addClass("not-valid error border");
    event.preventDefault();
    

  }

  if (zipTest === true){


    $('[for=zip]').addClass("valid");
    
  }else if (zipTest !== true) {

  
    $('#zip-hint').show();
    $('[for=zip]').addClass("not-valid error border");
    event.preventDefault();
  }



  if (cvvTest === true){


    $('[for=cvv]').addClass("valid");
    
  }else if (cvvTest !== true){

    
    $('#cvv-hint').show();
    $('[for=cvv]').addClass("not-valid error border");
    event.preventDefault();
    
  }



})

