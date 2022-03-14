

// Валидация для Email
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const INPUT = document.querySelector('input');
function validateEmail(value) {
  return EMAIL_REGEXP.test(value);
}
function updateInput() {
  if (validateEmail(INPUT.value)) INPUT.style.borderColor = 'green';
  else INPUT.style.borderColor = 'red';
  
}
INPUT.addEventListener('input', updateInput);







// Закрыть попап
$('.js-close-thank-you').click(function() { // по клику на крестик
	$('.js-overlay-thank-you').fadeOut();
});

$(document).mouseup(function (e) { // по клику вне попапа
	var popup = $('.popup');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-thank-you').fadeOut();
	}
});



var modal = document.getElementById('pop');

var form = document.querySelector('#myForm');

form.addEventListener('submit', function(evt) {
  evt.preventDefault();

  var formData = {
    email: document.querySelector('input[name="email"]').value
  };

  var request = new XMLHttpRequest();

  request.addEventListener('load', function() {

    modal.style.display = "block";

    

  });

  request.open('POST', '/send.php', true);
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  request.send('&email=' + encodeURIComponent(formData.email));
});


