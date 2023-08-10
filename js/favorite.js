const favMainRow = document.querySelector( ".favorites-row" );
const favPriceRow = document.querySelector( ".favorites-price-row" );

function getFavCards( { id, images, name, price, description, quantity } ) {
  return `
  <div class="favorites-card">
          <div class="favorites-card-img">
            <img src="${images[ 0 ]}" alt="an img">
          </div>
          <div class="favorites-card-content">
            <h3 class="favorites-card-title">${name}</h3>
            <p class="favorites-card-price">${price}$</p>
            <p class="favorites-card-desc">${description}</p>
            <div class="k-c-btns">
              <button class="k-c-btns-1" onClick="decQuantity(${id})">-</button>
              <span>${quantity}</span>
              <button class="k-c-btns-2" onClick="addQuantity(${id})">+</button>
            </div>
          </div>
    </div>
  `

}


function getFavProdc() {
  favMainRow.innerHTML = "";
  like.map( ( pr ) => {
    favMainRow.innerHTML += getFavCards( pr )
  } )
}



getFavProdc()

function addQuantity( id ) {
  like = like.map( ( pr ) => {
    if ( pr.id === id ) {
      pr.quantity++;
    }
    return pr;
  } )
  localStorage.setItem( "like", JSON.stringify( like ) )
  getFavProdc()
}


function decQuantity( id ) {
  let product = like.find( ( pr ) => pr.id === id );
  if ( product.quantity === 1 ) {
    let isDelete = confirm( "Dou You actually want to delete this product from your cart?" )
    if ( isDelete ) {
      like = like.filter( ( pr ) => pr.id !== id )
      getCardTotal()
    }
  } else {
    like = like.map( ( pr ) => {
      if ( pr.id === id ) {
        pr.quantity--;
      }
      return pr;
    } )

  }
  localStorage.setItem( "like", JSON.stringify( like ) )
  getFavProdc()
}

////toCountTotalPrice


let totalPrice = 0;

function cardsPGetter() {
  cart.forEach( ( pr ) => {
    totalPrice += pr.price;
  } );
  return totalPrice;
}