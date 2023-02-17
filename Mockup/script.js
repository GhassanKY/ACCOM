

/*Verificar si el input tiene mas de 9 digitos, esta verificacion se puede realizar con expresiones regulares*/
$(document).ready(function () {
  $('form').submit(function (event) {

    event.preventDefault();
    var telefono = $('#telefono').val();
    var checkbox = $('#checkbox').prop('checked');
    var modal = $('#modal');
    var closeModal = $('#closeModal');
    const verificacion = /^\+34([6|7|8|9]{1}[0-9]{8})$/;

    if (telefono.length >= 9 && checkbox == true && verificacion.test(telefono)) {
      $('#telefono').removeClass('inp-contact-error');
      $('#telefono').addClass('inp-contact-correct');
      modal.hide();
    } else {
      $('#telefono').removeClass('inp-contact-correct');
      $('#telefono').addClass('inp-contact-error');
      modal.show();
    }

    closeModal.click(function () {
      modal.hide();
    });
    
  });
});


/*Carrousel Slick - Jquery*/
var slider = $('.single-item');


$(window).on('resize', function () {
  if ($(this).width() >= 1000) {
    if (slider.hasClass('slick-initialized')) {
      slider.slick('unslick');
    }
  } else {
    if (!slider.hasClass('slick-initialized')) {
      slider.slick();
    }
  }
});

/*Codigo en Javascript

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    var telefono = document.querySelector('#telefono').value;
    var checkbox = document.querySelector('#checkbox').checked;
    var modal = document.querySelector('#modal');
    var closeModal = document.querySelector('#closeModal');
    const verificacion = /^\+34([6|7|8|9]{1}[0-9]{8})$/;

    if (telefono.length >= 9 && checkbox == true && verificacion.test(telefono)) {
      document.querySelector('#telefono').classList.remove('inp-contact-error');
      document.querySelector('#telefono').classList.add('inp-contact-correct');
      modal.style.display = 'none';
    } else {
      document.querySelector('#telefono').classList.remove('inp-contact-correct');
      document.querySelector('#telefono').classList.add('inp-contact-error');
      modal.style.display = 'block';
    }

    closeModal.addEventListener('click', function () {
      modal.style.display = 'none';
    });
  });
});

var slider = document.querySelector('.single-item');

window.addEventListener('resize', function () {
  if (window.innerWidth >= 1000) {
    if (slider.classList.contains('slick-initialized')) {
      $(slider).slick('unslick');
    }
  } else {
    if (!slider.classList.contains('slick-initialized')) {
      $(slider).slick();
    }
  }
});



*/