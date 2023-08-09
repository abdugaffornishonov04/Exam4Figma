const korMainRow = document.querySelector( ".korzinka-row" );
const korPriceRow = document.querySelector( ".korzinka-price-row" );

function getKorCards( { id, images, name, price, description, quantity } ) {
  return `
  <div class="korzinka-card">
          <div class="korzinka-card-img">
            <img src="${images[ 0 ]}" alt="an img">
          </div>
          <div class="korzinka-card-content">
            <h3 class="korzinka-card-title">${name}</h3>
            <p class="korzinka-card-price">${price}$</p>
            <p class="korzinka-card-desc">${description}</p>
            <div class="k-c-btns">
              <button class="k-c-btns-1" onClick="decQuantity(${id})">-</button>
              <span>${quantity}</span>
              <button class="k-c-btns-2" onClick="addQuantity(${id})">+</button>
            </div>
          </div>
    </div>
  `

}


function getKorProdc() {
  korMainRow.innerHTML = "";
  cart.map( ( pr ) => {
    korMainRow.innerHTML += getKorCards( pr )
  } )
}

getKorProdc()

function addQuantity( id ) {
  cart = cart.map( ( pr ) => {
    if ( pr.id === id ) {
      pr.quantity++;
    }
    return pr;
  } )
  localStorage.setItem( "cart", JSON.stringify( cart ) )
  getKorProdc()
}


function decQuantity( id ) {
  let product = cart.find( ( pr ) => pr.id === id );
  if ( product.quantity === 1 ) {
    let isDelete = confirm( "Dou You actually want to delete this product from your cart?" )
    if ( isDelete ) {
      cart = cart.filter( ( pr ) => pr.id !== id )
      getCardTotal() 
    }
  } else {
    cart = cart.map( ( pr ) => {
      if ( pr.id === id ) {
        pr.quantity--;
      }
      return pr;
    } )

  }
  localStorage.setItem( "cart", JSON.stringify( cart ) )
  getKorProdc()
}

////toCountTotalPrice


let totalPrice = 0;

function cardsPGetter() {
  cart.forEach( ( pr ) => {
    totalPrice += pr.price;
  } );
  return totalPrice;
}

////toGetDiscount

// const discountedItems = cart.filter( ( item ) => item.discount );

// let totalCartDiscnt = 0;

// for(el of discountedItems){
//   totalCartDiscnt += el.discount
// }
// console.log(Math.floor(cardsPGetter() / totalCartDiscnt));



// function getKorCardsPrice( pr, totalPrice ) {
//   return `
//   <div class="korzinka-cards-price">
//       <p class="kor-cards-num">
//         <span>${pr.length + 1} товара </span>
//         <span></span>
//       </p>
//       <p class="kor-cards-discount">
//         <span>Скидка</span>
//         <span>${pr.discount}</span>
//       </p>
//       <p class="kor-cards-all">
//         <span>Итог</span>
//         <span>${totalPrice}</span>
//       </p>
//       <button class="kor-cards-submit"></button>
//     </div>`
// }

// function getKorProdc() {
//   korPriceRow.innerHTML = "";
//   cart.map( ( pr ) => {
//     korPriceRow.innerHTML += getKorCardsPrice( pr, totalPrice )
//   } )
// }


