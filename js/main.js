// const ccdMain = document.querySelector( ".c-d-d-main" );

// function getccDText(pr) {
//   const ccdMainA = document.createElement("a");
//   ccdMainA.className = ".c-d-d-main-a";
//   ccdMainA.innerHTML = `${pr.category}`;

//   return ccdMainA;
// }

// product.map((pr) => {
//   let card = getccDText(pr);
//   ccdMain.append(card)
// })







////btn-click-list start
const cDropBtn = document.querySelector( ".category-dropdown-a" );

function dDownActivate() {
  dBOfDropDown = document.querySelector( ".c-d-d-wrapper" );

  dBOfDropDown.classList.toggle( "c-d-d-wrapper-d-b" )
}
cDropBtn.addEventListener( "click", dDownActivate );
////btn-click-list end