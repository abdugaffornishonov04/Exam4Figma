const prMainRow = document.querySelector(".pr-row");
const prSearchInput = document.querySelector(".pr-search-input");

let search = "";

function mainProductGetter(product){

let check = cart.find((pr) => pr.id === product.id)

  const prMainCard = document.createElement( "div" );
  prMainCard.className = "popular-card";

  const prMainCardImgBox = document.createElement( "div" );
  prMainCardImgBox.className = "popular-card__img";
  const prMainCardImgBoxImg = document.createElement( "img" );
  prMainCardImgBoxImg.src = product.images[ 0 ];
  prMainCardImgBoxImg.alt = product.name;
  prMainCardImgBoxImg.className = "popular-card__imgg";
  const prMainCardImgBoxLike = document.createElement( "img" );
  prMainCardImgBoxLike.src = "./images/promotioncardlike.svg";
  prMainCardImgBoxLike.alt = "Like";
  prMainCardImgBoxLike.className = "pr-card-like";
  prMainCardImgBox.append( prMainCardImgBoxImg, prMainCardImgBoxLike );

  const prMainCardInfo = document.createElement( "div" );
  prMainCardInfo.className = "popular-card__info";
  const prMainCardInfoFirstP = document.createElement( "p" );
  prMainCardInfoFirstP.className = "popular-card__price";
  prMainCardInfoFirstP.innerHTML = `${product.price} ₽`
  const prMainCardInfoSecondP = document.createElement( "p" );
  prMainCardInfoSecondP.className = "popular-card__text";
  prMainCardInfoSecondP.innerHTML = `${product.description}`;
  const prMainCardRatings = document.createElement( "div" );
  prMainCardRatings.className = "popular-card__ratings";
  const prMainCardInfoRatingsImg1 = document.createElement( "img" );
  prMainCardInfoRatingsImg1.src = "./images/starfill.svg";
  prMainCardInfoRatingsImg1.alt = "an img";
  const prMainCardInfoRatingsImg2 = document.createElement( "img" );
  prMainCardInfoRatingsImg2.src = "./images/starfill.svg";
  prMainCardInfoRatingsImg2.alt = "an img";
  const prMainCardInfoRatingsImg3 = document.createElement( "img" );
  prMainCardInfoRatingsImg3.src = "./images/starfill.svg";
  prMainCardInfoRatingsImg3.alt = "an img";
  const prMainCardInfoRatingsImg4 = document.createElement( "img" );
  prMainCardInfoRatingsImg4.src = "./images/starfill.svg";
  prMainCardInfoRatingsImg4.alt = "an img";
  const prMainCardInfoRatingsImg5 = document.createElement( "img" );
  prMainCardInfoRatingsImg5.src = "./images/starhalfempty.svg";
  prMainCardInfoRatingsImg5.alt = "an img";
  prMainCardRatings.append( prMainCardInfoRatingsImg1,
    prMainCardInfoRatingsImg2,
    prMainCardInfoRatingsImg3,
    prMainCardInfoRatingsImg4,
    prMainCardInfoRatingsImg5 );

  const prMainCardButton = document.createElement( "div" );
  prMainCardButton.className = "popular-card__info__button";
  prMainCardButton.className = check ? "active-card" : "popular-card__info__button";
  const prMainCardButtonLink = document.createElement( "a" );
  // prMainCardButtonLink.href = "./korzinka.html";
  prMainCardButtonLink.innerHTML = "В корзину";
  prMainCardButton.append( prMainCardButtonLink );

  prMainCardButton.addEventListener("click",() => addToCart(product.id))

  prMainCardInfo.append( prMainCardInfoFirstP,
    prMainCardInfoSecondP,
    prMainCardRatings,
    prMainCardButton );

  prMainCard.append( prMainCardImgBox, prMainCardInfo );
  
  return prMainCard;
}

function addToCart( id ) {
  let product = products.find( ( pr ) => pr.id === id );
  let check = cart.find( ( pr ) => pr.id === id )

  if ( check ) {
    cart = cart.map( ( pr ) => {
      if ( pr.id === id ) {
        pr.quantity++
      }
      return pr;
    } )
  } else {
    product.quantity = 1;
    cart.push( product )
  }
  localStorage.setItem( "cart", JSON.stringify( cart ) )
  getCardTotal()
}

    products.map( ( product ) => {
      let card = mainProductGetter( product );
      prMainRow.append( card );
    } ); 








