// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap.min
//= require_tree .

$(document).ready(function(){
    $('#new-voter-btn').click(function(){
        $("div[class='modal fade']").modal();
    });
});

// $(document).ready(function() {

// });
// $(document).ready(function() {
// 	$('#new-voter-form-submit-btn').on('click', function() { $('#new-voter-form').submit(); });
// });

var $form = $('#new-voter-form');
function submitForm(){
	var $firstname = $('#form-first-name'),
	$lastname = $('#form-last-name'),
	$address = $('#form-address'),
	$city = $('#form-city'),
	$state = $('#form-state'),
	$zip = $('#form-zip'),
	$alert = $('.alert');

	// These are form validations. Alerting the user if he/she has a validation error

	if($firstname.val() == ""){
		$firstname.css({"border-color": "#ff0000", 
	             "border-width":"3px", 
	             "border-style":"solid"})
	$form.append('<div class="alert alert--error">Please enter a First Name</div>');
	}else if($lastname.val() == ""){
		$alert.html("");
		$lastname.css({"border-color": "#ff0000", 
	             "border-width":"3px", 
	             "border-style":"solid"})
	$form.append('<div class="alert alert--error">Please enter a Last Name</div>');
	}else if($city.val() == ""){
		$alert.html("");
		$city.css({"border-color": "#ff0000", 
	             "border-width":"3px", 
	             "border-style":"solid"})
	$form.append('<div class="alert alert--error">Please enter a City</div>');
	}else if($state.val() == ""){
		$alert.html("");
		$state.css({"border-color": "#ff0000", 
	             "border-width":"3px", 
	             "border-style":"solid"})
	$form.append('<div class="alert alert--error">Please enter a State</div>');
	}else if($zip.val() == ""){
		$alert.html("");
		$zip.css({"border-color": "#ff0000", 
	             "border-width":"3px", 
	             "border-style":"solid"})
	$form.append('<div class="alert alert--error">Please enter a Zip Code</div>');
	}else{

		$.ajax({
			url: '/voters',
			data: $form.serialize(),
			dataType: 'html',
			type: 'POST',
			success: function(){
				$('.modal-body').append('<div class="alert alert--success">Voter successfully added!</div>')
				alert("casdfasdf");
				$('#mymodal').modal('hide');


			}
		});
	};
}












