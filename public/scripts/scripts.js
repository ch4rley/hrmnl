// MODAL BUTTON

// let modalBtn = document.getElementById('modal-btn');
// let modal = document.querySelector('.modal');
// let closeBtn = document.querySelector('.close-btn');
// modalBtn.onclick = function(){
//   modal.style.display = 'block';
// };
// closeBtn.onclick = function(){
//   modal.style.display = 'none';
// };
// window.onclick = function(e){
//   if(e.target == modal){
//     modal.style.display = 'none';
//   };
// };

let detailsE = document.querySelector('#hrtDetailsE');
let detailsT = document.querySelector('#hrtDetailsT');
let detailsP = document.querySelector('#hrtDetailsP');
let details = document.querySelector('#hrtDetails');

let E = document.querySelector('#checkboxE');
let T = document.querySelector('#testosterone');
let P = document.querySelector('#progesterone');

const showHrtDetailsE = function(e) {
  detailsE.classList.toggle('open');
  details.classList.toggle('hidden');

  console.log(e);
};

E.addEventListener('click', showHrtDetailsE);


