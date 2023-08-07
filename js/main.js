////btn-click-list start
const cDropBtn = document.querySelector( ".category-dropdown-a" );

function dDownActivate() {
  dBOfDropDown = document.querySelector( ".c-d-d-wrapper" );

  dBOfDropDown.classList.toggle( "c-d-d-wrapper-d-b" )
}
cDropBtn.addEventListener( "click", dDownActivate );
////btn-click-list end