// ~~~~ MODAL BUTTON ~~~~
// ---- for sign up/register ----
// let modalBtnSignup = document.getElementById('modal-btn-signup');
// let modalSignup = document.querySelector('.modal-signup');
// let closeBtn = document.querySelector('.modal-signup .close-btn');
// modalBtnSignup.onclick = function(){
//   modalSignup.style.display = 'block';
// };
// closeBtn.onclick = function(){
//   modalSignup.style.display = 'none';
// };
// window.onclick = function(e){
//   if(e.target == modalSignup){
//     modalSignup.style.display = 'none';
//   };
// };
// ---- for log in ----
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

// ~~~ ATTEMPTS AT GETTING SELECTED HORMONE (value of selected option of select dropdown)
// ---- for log page ----
// const getSelectedHormone = () => {
//   const selectedHormone = document.getElementById('hrtHormone');
//   const thisHormone = select.options[select.selectedIndex].text;
//   console.log(thisHormone + 'works');
//   return selectedHormone;
// };
// getSelectedHormone();

// const selectHormone = document.querySelector('select#hrtHormone');

// selectHormone.addEventListener('change', (e) => {
//   const details = document.querySelector('div.hormoneDetails');
//   details.id = e.target.value;
// });

// function will hide hrt details by default when other details show
// #### we decided this was not necessary or helpful #####
// const hideDefaultHrtDetails = () => {
//   if(details.classList.contains('hidden') === false) {
//     details.classList.toggle('hidden');
//   } else {
//     if(
//       detailsE.classList.contains('open') === false
//       &&
//       detailsT.classList.contains('open') === false
//       &&
//       detailsP.classList.contains('open') === false) {
//         details.classList.toggle('hidden');
//       };
//   }
// };


// ~~~~ ACCORDION ~~~~
// ---- history page ----
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


// ~~~~ DISPLAY APPROPRIATE HRT INPUT FIELDS ~~~~
// ---- create profile + edit profile pages ----

let detailsE = document.querySelector('#hrtDetailsE');
let detailsT = document.querySelector('#hrtDetailsT');
let detailsP = document.querySelector('#hrtDetailsP');
// let details = document.querySelector('#hrtDetails');

let E = document.querySelector('#checkboxE');
let T = document.querySelector('#checkboxT');
let P = document.querySelector('#checkboxP');

// show HRT details input fields for estrogen, if user clicks on estrogen
const showHrtDetailsE = function(e) {
  detailsE.classList.toggle('open');
  // hideDefaultHrtDetails();
  console.log(e);
};

// show HRT details input fields for testosterone, if user clicks on testosterone
const showHrtDetailsT = function(e) {
  detailsT.classList.toggle('open');
  // hideDefaultHrtDetails();
  console.log(e);
};
// show HRT details input fields for progesterone, if user clicks on progesterone
const showHrtDetailsP = function(e) {
  detailsP.classList.toggle('open');
  // hideDefaultHrtDetails();
  console.log(e);
};

// event listeners for checkbox click to toggle appropriate hrt details
E.addEventListener('click', showHrtDetailsE);
T.addEventListener('click', showHrtDetailsT);
P.addEventListener('click', showHrtDetailsP);