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
	$zip = $('#form-zip');

	$.ajax({
		url: '/voters',
		data: $form.serialize(),
		dataType: 'html',
		type: 'POST',
		success: function(){
			$('.modal-body').append('<div class="alert alert--success">Voter successfully added!</div>')
			alert("casdfasdf");
			$("div[class='modal fade']").modal();	

		}
	});
}












