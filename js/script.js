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
  
  const nameTest = /[\w\W]/.test(nameEntered);
  const emailTest = /^[^@]+@[^@.]+\.[a-z]+$/gim.test(emailEntered);
  
  


  if (nameTest !== true){

    
    $('#name-hint').show();
    $('#name').addClass("not-valid error border");
    event.preventDefault();
    
  }
  

  if (emailTest !== true){

    
    $('#email-hint').show();
    $('#email').addClass("not-valid error border");
    event.preventDefault();
    
  }



})

