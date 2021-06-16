



var btnAbrirPopup = document.getElementById('bton-owner'),
overlay = document.getElementById('overlay'),
popup = document.getElementById('popup'),
btnCerrarPopup = document.getElementById('btn-cerrar-popup');


btnAbrirPopup.addEventListener('click', function(){
overlay.classList.add('active');
popup.classList.add('active');

});

btnCerrarPopup.addEventListener('click', function(e){
e.preventDefault();
overlay.classList.remove('active');
popup.classList.remove('active');
});



btnAbrirPopupVet = document.getElementById('bton-vet'),
overlayVet = document.getElementById('overlayVet'),
popupVet = document.getElementById('popupVet'),
btnCerrarPopupVet = document.getElementById('btn-cerrar-popupVet');

btnAbrirPopupVet.addEventListener('click', function(){
overlayVet.classList.add('active');
popupVet.classList.add('active');
});
btnCerrarPopupVet.addEventListener('click', function(e){
e.preventDefault();
overlayVet.classList.remove('active');
popupVet.classList.remove('active');
});
