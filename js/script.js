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



