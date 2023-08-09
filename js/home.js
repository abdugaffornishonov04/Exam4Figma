//////AKSII MAP

const pMainRow = document.querySelector( ".promotion-bottom" );

function getCardsAksii( {id,name,category,description,price,rating,discount,images} ) {

  const pMainCard = document.createElement( "div" );
  pMainCard.className = "promotion-card";

  const pMainCardImgBox = document.createElement( "div" );
  pMainCardImgBox.className = "promotion-card__img";
  const pMainCardImgBoxImg = document.createElement( "img" );
  pMainCardImgBoxImg.src = images[ 0 ];
  pMainCardImgBoxImg.alt = name;
  pMainCardImgBoxImg.className = "goods-img-pr";
  const pMainCardImgBoxImgLike = document.createElement( "img" );
  pMainCardImgBoxImgLike.src = "/images/promotioncardlike.svg";
  pMainCardImgBoxImgLike.alt = "Like";
  pMainCardImgBoxImgLike.className = "prcardlike";
  const pMainCardImgBoxP = document.createElement( "p" );
  pMainCardImgBoxP.innerHTML = `${discount}%  `;
  pMainCardImgBoxP.className = "pcarddisc";
  pMainCardImgBox.append( pMainCardImgBoxImg, pMainCardImgBoxImgLike, pMainCardImgBoxP );

  const pMainCardInfo = document.createElement( "div" );
  pMainCardInfo.className = "promotion-card__info";

  const pMainCardInfoPrice = document.createElement( "div" );
  pMainCardInfoPrice.className = "promotion-card__info__price";
  const pMainCardInfoPriceSpan1 = document.createElement( "span" );
  pMainCardInfoPriceSpan1.className = "p-c-i-span1";
  const pMainCardInfoPriceSpan1P1 = document.createElement( "p" );
  pMainCardInfoPriceSpan1P1.innerHTML = `${price}₽`;
  const pMainCardInfoPriceSpan1P2 = document.createElement( "p" );
  pMainCardInfoPriceSpan1P2.innerHTML = "С картой";
  const pMainCardInfoPriceSpan2 = document.createElement( "span" );
  pMainCardInfoPriceSpan2.className = "p-c-i-span";
  const pMainCardInfoPriceSpan2P1 = document.createElement( "p" );
  pMainCardInfoPriceSpan2P1.innerHTML = "50,50 ₽";
  const pMainCardInfoPriceSpan2P2 = document.createElement( "p" );
  pMainCardInfoPriceSpan2P2.innerHTML = "Обычная";

  const pMainCardInfoText = document.createElement( "p" );
  pMainCardInfoText.className = "promotion-card__info__text";
  pMainCardInfoText.innerHTML = `${description}`;

  const pMainCardInfoRating = document.createElement( "div" );
  pMainCardInfoRating.className = "promotion-card__info__rating";
  const pMainCardInfoRatingImg1 = document.createElement( "img" );
  pMainCardInfoRatingImg1.src = "./images/starfill.svg";
  pMainCardInfoRatingImg1.alt = "an img";
  const pMainCardInfoRatingImg2 = document.createElement( "img" );
  pMainCardInfoRatingImg2.src = "./images/starfill.svg";
  pMainCardInfoRatingImg2.alt = "an img";
  const pMainCardInfoRatingImg3 = document.createElement( "img" );
  pMainCardInfoRatingImg3.src = "./images/starfill.svg";
  pMainCardInfoRatingImg3.alt = "an img";
  const pMainCardInfoRatingImg4 = document.createElement( "img" );
  pMainCardInfoRatingImg4.src = "./images/starfill.svg";
  pMainCardInfoRatingImg4.alt = "an img";
  const pMainCardInfoRatingImg5 = document.createElement( "img" );
  pMainCardInfoRatingImg5.src = "./images/starhalfempty.svg";
  pMainCardInfoRatingImg5.alt = "an img";
  pMainCardInfoRating.append( pMainCardInfoRatingImg1,
    pMainCardInfoRatingImg2,
    pMainCardInfoRatingImg3,
    pMainCardInfoRatingImg4,
    pMainCardInfoRatingImg5 );

  const pMainCardInfoBtn = document.createElement( "button" );
  pMainCardInfoBtn.className = "promotion-card__info__button";
  pMainCardInfoBtn.onclick = function () {
    addToCart( id );
  };
  const pMainCardInfoBtnA = document.createElement( "a" );
  pMainCardInfoBtnA.innerHTML = "В корзину";
  pMainCardInfoBtn.append( pMainCardInfoBtnA );

  pMainCardInfoPriceSpan1.append( pMainCardInfoPriceSpan1P1, pMainCardInfoPriceSpan1P2 );
  pMainCardInfoPriceSpan2.append( pMainCardInfoPriceSpan2P1, pMainCardInfoPriceSpan2P2 );
  pMainCardInfoPrice.append( pMainCardInfoPriceSpan1, pMainCardInfoPriceSpan2 );
  pMainCardInfo.append( pMainCardInfoPrice, pMainCardInfoText, pMainCardInfoRating, pMainCardInfoBtn );

  pMainCardInfo.addEventListener( "click", function () {

  } )


  pMainCard.append( pMainCardImgBox, pMainCardInfo );
  return pMainCard;

}

let pHomeMain = products.filter( ( pr ) => pr.discount ).slice( -4 );

pHomeMain.map( ( product ) => {
  let card = getCardsAksii( product );
  pMainRow.append( card );
} );


////NOVINKI MAP

const novinkiiMainRow = document.querySelector( ".news-bottom" );


function getCardsNovinki({ id, name, category, description, price, rating, discount, images} ) {
  const nMainCard = document.createElement( "div" );
  nMainCard.className = "news-card";

  const nMainCardImgBox = document.createElement( "div" );
  nMainCardImgBox.className = "news-card__img";
  const nMainCardImgBoxImg = document.createElement( "img" );
  nMainCardImgBoxImg.src = images[ 0 ];
  nMainCardImgBoxImg.alt = name;
  nMainCardImgBoxImg.className = "news-card__imgg";
  const nMainCardImgBoxImgLike = document.createElement( "img" );
  nMainCardImgBoxImgLike.src = "./images/promotioncardlike.svg";
  nMainCardImgBoxImgLike.alt = "Like";
  nMainCardImgBoxImgLike.className = "news-card__like";
  nMainCardImgBox.append( nMainCardImgBoxImg, nMainCardImgBoxImgLike );

  const nMainCardInfo = document.createElement( "div" );
  nMainCardInfo.className = "news-card__info";
  const nMainCardInfoFirstP = document.createElement( "p" );
  nMainCardInfoFirstP.className = "news-card__price";
  nMainCardInfoFirstP.innerHTML = `${price} ₽`
  const nMainCardSecondP = document.createElement( "p" );
  nMainCardSecondP.className = "news-card__text";
  nMainCardSecondP.innerHTML = `${description}`;
  const nMainCardRatings = document.createElement( "div" );
  nMainCardRatings.className = "news-card__ratings";
  const nMainCardInfoRatingImg1 = document.createElement( "img" );
  nMainCardInfoRatingImg1.src = "./images/starfill.svg";
  nMainCardInfoRatingImg1.alt = "an img";
  const nMainCardInfoRatingImg2 = document.createElement( "img" );
  nMainCardInfoRatingImg2.src = "./images/starfill.svg";
  nMainCardInfoRatingImg2.alt = "an img";
  const nMainCardInfoRatingImg3 = document.createElement( "img" );
  nMainCardInfoRatingImg3.src = "./images/starfill.svg";
  nMainCardInfoRatingImg3.alt = "an img";
  const nMainCardInfoRatingImg4 = document.createElement( "img" );
  nMainCardInfoRatingImg4.src = "./images/starfill.svg";
  nMainCardInfoRatingImg4.alt = "an img";
  const nMainCardInfoRatingImg5 = document.createElement( "img" );
  nMainCardInfoRatingImg5.src = "./images/starhalfempty.svg";
  nMainCardInfoRatingImg5.alt = "an img";
  nMainCardRatings.append( nMainCardInfoRatingImg1,
    nMainCardInfoRatingImg2,
    nMainCardInfoRatingImg3,
    nMainCardInfoRatingImg4,
    nMainCardInfoRatingImg5 );

  const nMainCardButton = document.createElement( "div" );
  nMainCardButton.className = "news-card__info__button";
  nMainCardButton.onclick = function () {
    addToCart( id );
  };
  const nMainCardButtonLink = document.createElement( "a" );
  nMainCardButtonLink.innerHTML = "В корзину";
  nMainCardButton.append( nMainCardButtonLink );

  nMainCardInfo.append( nMainCardInfoFirstP,
    nMainCardSecondP,
    nMainCardRatings,
    nMainCardButton );

  nMainCard.append( nMainCardImgBox, nMainCardInfo );

  return nMainCard;

}

const novinkiiCards = products.slice( -4 );

novinkiiCards.map( ( product ) => {
  let card = getCardsNovinki( product );
  novinkiiMainRow.append( card );
} );

////POKUPALI RANSHEE MAP

const popMainRow = document.querySelector( ".popular-bottom" )



function getCardsPopular( {id, name, category, description, price, rating, discount, images} ) {
  const popMainCard = document.createElement( "div" );
  popMainCard.className = "popular-card";

  const popMainCardImgBox = document.createElement( "div" );
  popMainCardImgBox.className = "popular-card__img";
  const popMainCardImgBoxImg = document.createElement( "img" );
  popMainCardImgBoxImg.src = images[ 0 ];
  popMainCardImgBoxImg.alt = name;
  popMainCardImgBoxImg.className = "popular-card__imgg";
  const popMainCardImgBoxLike = document.createElement( "img" );
  popMainCardImgBoxLike.src = "./images/promotioncardlike.svg";
  popMainCardImgBoxLike.alt = "Like";
  popMainCardImgBoxLike.className = "news-card__like";
  popMainCardImgBox.append( popMainCardImgBoxImg, popMainCardImgBoxLike );

  const popMainCardInfo = document.createElement( "div" );
  popMainCardInfo.className = "popular-card__info";
  const popMainCardInfoFirstP = document.createElement( "p" );
  popMainCardInfoFirstP.className = "popular-card__price";
  popMainCardInfoFirstP.innerHTML = `${price} ₽`
  const popMainCardInfoSecondP = document.createElement( "p" );
  popMainCardInfoSecondP.className = "popular-card__text";
  popMainCardInfoSecondP.innerHTML = `${description}`;
  const popMainCardRatings = document.createElement( "div" );
  popMainCardRatings.className = "popular-card__ratings";
  const popMainCardInfoRatingsImg1 = document.createElement( "img" );
  popMainCardInfoRatingsImg1.src = "./images/starfill.svg";
  popMainCardInfoRatingsImg1.alt = "an img";
  const popMainCardInfoRatingsImg2 = document.createElement( "img" );
  popMainCardInfoRatingsImg2.src = "./images/starfill.svg";
  popMainCardInfoRatingsImg2.alt = "an img";
  const popMainCardInfoRatingsImg3 = document.createElement( "img" );
  popMainCardInfoRatingsImg3.src = "./images/starfill.svg";
  popMainCardInfoRatingsImg3.alt = "an img";
  const popMainCardInfoRatingsImg4 = document.createElement( "img" );
  popMainCardInfoRatingsImg4.src = "./images/starfill.svg";
  popMainCardInfoRatingsImg4.alt = "an img";
  const popMainCardInfoRatingsImg5 = document.createElement( "img" );
  popMainCardInfoRatingsImg5.src = "./images/starhalfempty.svg";
  popMainCardInfoRatingsImg5.alt = "an img";
  popMainCardRatings.append( popMainCardInfoRatingsImg1,
    popMainCardInfoRatingsImg2,
    popMainCardInfoRatingsImg3,
    popMainCardInfoRatingsImg4,
    popMainCardInfoRatingsImg5 );

  const popMainCardButton = document.createElement( "div" );
  popMainCardButton.className = "popular-card__info__button";
  popMainCardButton.onclick = function () {
    addToCart( id );
  };
  const popMainCardButtonLink = document.createElement( "a" );
  popMainCardButtonLink.innerHTML = "В корзину";
  popMainCardButton.append( popMainCardButtonLink );

  popMainCardInfo.append( popMainCardInfoFirstP,
    popMainCardInfoSecondP,
    popMainCardRatings,
    popMainCardButton );

  popMainCard.append( popMainCardImgBox, popMainCardInfo );

  return popMainCard;

}

const popSortObj = products.sort( ( a, b ) => b.ratings - a.ratings );

const popMainRatingfour = popSortObj.slice( 0, 4 );

popMainRatingfour.map( ( pr ) => {
  let card = getCardsPopular( pr );
  popMainRow.append( card )
} )


////SPECIAL PRILOJENIE
const specialMainRow = document.querySelector( ".special-bottom" );

const specialPrilojeniaData = [
  {
    title: "Оформите карту «Северяночка»",
    text: "И получайте бонусы при покупке в магазинах и на сайте",
    image: "./images/soapimg.png",
  },
  {
    title: "Покупайте акционные товары",
    text: "И получайте вдвое больше бонусов",
    image: "./images/basketimg.png",
  },
]

const spMainRow = document.querySelector( ".special-bottom" );

function specialCardGetter( product ) {
  const spMainCard = document.createElement( "div" );
  spMainCard.className = "special-b__card1";

  const spMainCardContent = document.createElement( "div" );
  spMainCardContent.className = "special-b__card1__content";
  const spMainCardContentTitle = document.createElement( "h4" );
  spMainCardContentTitle.className = "special-b__card1__content__title";
  spMainCardContentTitle.innerHTML = `${product.title}`;
  const spMainCardContentP = document.createElement( "p" );
  spMainCardContentP.className = "special-b__card1__content__text";
  spMainCardContentP.innerHTML = `${product.text}`;
  spMainCardContent.append( spMainCardContentTitle, spMainCardContentP );

  const spMainCardImgBox = document.createElement( "div" );
  spMainCardImgBox.className = "special-b__card1__img";
  const spMainCardImgBoxImg = document.createElement( "img" );
  spMainCardImgBoxImg.src = `${product.image}`;
  spMainCardImgBoxImg.alt = "an img";
  spMainCardImgBox.append( spMainCardImgBoxImg );

  spMainCard.append( spMainCardContent, spMainCardImgBox );
  spMainCard.style
  return spMainCard;

}

specialPrilojeniaData.map( ( product ) => {
  let card = specialCardGetter( product );
  spMainRow.append( card );
} )

////MAGAZINE AP TAB

const tabButtons = document.querySelectorAll( ".m-a-p-btn" );
const tabContents = document.querySelectorAll( ".magazine-ap-tab-content" );

let tabActive = 0;


function getTabContents() {
  tabContents.forEach( ( el, i ) => {
    if ( i !== tabActive ) {
      el.style.display = "none";
      tabButtons[ i ].classList.remove( "active-tab" );
    } else {
      el.style.display = "block";
      tabButtons[ i ].classList.add( "active-tab" );
    }
  } );
}

getTabContents();

tabButtons.forEach( ( el, i ) => {
  el.addEventListener( "click", function () {
    tabActive = i;
    getTabContents();
  } )
} );


/////ARTICLES MAP

const arMainRow = document.querySelector( ".articles-bottom" );

const articlesArray = [
  {
    image: "./images/articlescardimg3.png",
    subtext: "05.03.2021",
    title: "Режим использования масок и перчаток на территории магазинов",
    text: `Подробная информация о режимах использования масок и перчаток на территории магазинов 'ЛЕНТА'
      Информация обновляется
      каждый будний день.`,
    buttonText: "Подробнее",
  },
  {
    image: "./images/articlescardimg2.png",
    subtext: "05.03.2021",
    title: "Весеннее настроение для каждой",
    text: ` 8 Марта – это не просто Международный женский день, это ещё день тюльпанов, приятных сюрпризов и
      праздничных тёплых
      пожеланий.`,
    buttonText: "Подробнее",
  },
  {
    image: "./images/articlescardimg1.png",
    subtext: "22.02.2020",
    title: "ЗОЖ или ФАСТФУД. А вы на чьей стороне? Голосуем!",
    text: `Голосуйте за любимые категории, выбирайте категорию-победителя в мобильном приложении и получайте
      кешбэк 10% баллами в
      апреле!`,
    buttonText: "Подробнее",
  },
];

function articlCardGetter( arr ) {
  const arMainCard = document.createElement( "div" );
  arMainCard.className = "articles-card";

  const arMainCardImgBox = document.createElement( "div" );
  arMainCardImgBox.className = "articles-card__imgbox";
  const arMainCardImgBoxImg = document.createElement( "img" );
  arMainCardImgBoxImg.src = `${arr.image}`
  arMainCardImgBoxImg.alt = "an img";
  arMainCardImgBox.append( arMainCardImgBoxImg );

  const arMainCardInfo = document.createElement( "div" );
  arMainCardInfo.className = "articles-card__infos";

  const arMainCardInfoP1 = document.createElement( "p" );
  arMainCardInfoP1.className = "articles-card__subtext";
  arMainCardInfoP1.innerHTML = `${arr.subtext}`;
  const arMainCardInfoTitle = document.createElement( "h4" );
  arMainCardInfoTitle.className = "articles-card__title";
  arMainCardInfoTitle.innerHTML = `${arr.title}`;
  const arMainCardInfoP2 = document.createElement( "p" );
  arMainCardInfoP2.className = "articles-card__text";
  arMainCardInfoP2.innerHTML = `${arr.text}`;
  const arMainCardInfoButton = document.createElement( "button" );
  arMainCardInfoButton.className = "articles-card__btn";
  const arMainCardInfoButtonA = document.createElement( "a" );
  arMainCardInfoButtonA.href = `./contact.html`;
  arMainCardInfoButtonA.innerHTML = `${arr.buttonText}`
  arMainCardInfoButton.append( arMainCardInfoButtonA );

  arMainCardInfo.append(
    arMainCardInfoP1,
    arMainCardInfoTitle,
    arMainCardInfoP2,
    arMainCardInfoButton
  );

  arMainCard.append( arMainCardImgBox, arMainCardInfo )

  return arMainCard;
}

articlesArray.map((el) => {
  let card = articlCardGetter(el);
  arMainRow.append(card);
})



////cart

const prAdCartBtn = document.querySelector( ".promotion-card__info__button" );
const nwAdCartBtn = document.querySelector( ".news-card__info__button" );
const popAdCartBtn = document.querySelector( ".popular-card__info__button" );

function addToCart(id){
  let product = products.find((pr) => pr.id === id);
  let check = cart.find((pr) => pr.id === id)

  if(check){
    cart = cart.map((pr) => {
      if(pr.id === id ){
        pr.quantity++
      }
      return pr;
    })
  }else{
    product.quantity = 1;
    cart.push(product)
  }
  localStorage.setItem("cart", JSON.stringify(cart))
  getCardTotal()
}





