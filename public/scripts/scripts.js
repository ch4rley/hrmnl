// MODAL BUTTON

let modalBtnSignup = document.getElementById('modal-btn-signup');
let modalSignup = document.querySelector('.modal-signup');
let closeBtn = document.querySelector('.modal-signup .close-btn');
modalBtnSignup.onclick = function(){
  modalSignup.style.display = 'block';
};
closeBtn.onclick = function(){
  modalSignup.style.display = 'none';
};
window.onclick = function(e){
  if(e.target == modalSignup){
    modalSignup.style.display = 'none';
  };
};

// let modalBtnLogin = document.getElementById('modal-btn-login');
// let modalLogin = document.querySelector('.modal-login');
// let closeBtn = document.querySelector('.modal-login .close-btn');
// modalBtnLogin.onclick = function(){
//   modalLogin.style.display = 'block';
// };
// closeBtn.onclick = function(){
//   modalLogin.style.display = 'none';
// };
// window.onclick = function(e){
//   if(e.target == modalLogin){
//     modalLogin.style.display = 'none';
//   };
// };


// DISPLAY APPROPRIATE HRT INPUT FIELDS
let detailsE = document.querySelector('#hrtDetailsE');
let detailsT = document.querySelector('#hrtDetailsT');
let detailsP = document.querySelector('#hrtDetailsP');
let details = document.querySelector('#hrtDetails');

let E = document.querySelector('#checkboxE');
let T = document.querySelector('#checkboxT');
let P = document.querySelector('#checkboxP');

// function will hide hrt details by default when other details show
const hideDefaultHrtDetails = () => {
  if(details.classList.contains('hidden') === false) {
    details.classList.toggle('hidden');
  } else {
    if(
      detailsE.classList.contains('open') === false
      &&
      detailsT.classList.contains('open') === false
      &&
      detailsP.classList.contains('open') === false) {
        details.classList.toggle('hidden');
      };
  }
};

// // show HRT details input fields for estrogen, if user clicks on estrogen, and hide basic details input fields, if they are not already hidden
const showHrtDetailsE = function(e) {
  detailsE.classList.toggle('open');
  hideDefaultHrtDetails();
  console.log(e);
};

// // show HRT details input fields for testosterone, if user clicks on testosterone, and hide basic details input fields, if they are not already hidden
const showHrtDetailsT = function(e) {
  detailsT.classList.toggle('open');
  hideDefaultHrtDetails();
  console.log(e);
};

const showHrtDetailsP = function(e) {
  detailsP.classList.toggle('open');
  hideDefaultHrtDetails();
  console.log(e);
};

E.addEventListener('click', showHrtDetailsE);
T.addEventListener('click', showHrtDetailsT);
P.addEventListener('click', showHrtDetailsP);


