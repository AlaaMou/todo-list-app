$(document).ready(function(){


// Done
$('ul').on('click','li', function(){
	$(this).toggleClass('done')
})

// Delete Todo
$('ul').on('click','span', function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
})

// Add New Todo
$('input[type="text"]').on('keypress', function(){
	if ( event.which == 13 ) {
	var todos = $('#todos');	
    var newTodo = $(this).val();
    $(this).val(''); /* return the input value empty again */
    todos.append('<li><span ><i class="fas fa-trash"></i></span> ' + newTodo + '</li>');
  }
})

// Plus Button
$('#plusBtn').on('click', function(){
	$('input[type="text"]').fadeToggle();
})

// Green
$('#green').on('click', function(){
	$('#main-box').css('background', '#122115');
})

// Blue
$('#blue').on('click', function(){  
	$('#main-box').css('background', '#05204c');
})

// Red
$('#red').on('click', function(){
	$('#main-box').css('background', '#440808');
})

// Dark
$('#dark').on('click', function(){
	$('#main-box').css('background', '#343a40');
})

// colors
$('#colors').on('click','span', function(){
	// make all span display 
	$('span').css('display', 'inline-block');
	// hide the clicked span
	$(this).css('display','none');
})



var i = 0;
var txt = 'Get It Done!';
var speed = 200;
function typeWriter() {
  if (i < txt.length) {
	  
    document.getElementById("quote").innerHTML += txt.charAt(i);
    i++;
	  
     //  Using jQuery  
     //  var quote = "";
     //  quote +=   txt.charAt(i); 
     //  $('#quote').html(quote);
     
    // Using Vanilla JS 
    setTimeout(typeWriter, speed);
  }
};

typeWriter();

})
