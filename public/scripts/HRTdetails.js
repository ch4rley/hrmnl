// DISPLAY APPROPRIATE HRT INPUT FIELDS
let detailsE = document.querySelector('#hrtDetailsE');
let detailsT = document.querySelector('#hrtDetailsT');
let detailsP = document.querySelector('#hrtDetailsP');
let details = document.querySelector('#hrtDetails');

let E = document.querySelector('#checkboxE');
let T = document.querySelector('#checkboxT');
let P = document.querySelector('#checkboxP');

// function will hide hrt details by default when other details show
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

// show HRT details input fields for estrogen, if user clicks on estrogen, and hide basic details input fields, if they are not already hidden
const showHrtDetailsE = function(e) {
  detailsE.classList.toggle('open');
  // hideDefaultHrtDetails();
  console.log(e);
};

// show HRT details input fields for testosterone, if user clicks on testosterone, and hide basic details input fields, if they are not already hidden
const showHrtDetailsT = function(e) {
  detailsT.classList.toggle('open');
  // hideDefaultHrtDetails();
  console.log(e);
};

const showHrtDetailsP = function(e) {
  detailsP.classList.toggle('open');
  // hideDefaultHrtDetails();
  console.log(e);
};

E.addEventListener('click', showHrtDetailsE);
T.addEventListener('click', showHrtDetailsT);
P.addEventListener('click', showHrtDetailsP);
