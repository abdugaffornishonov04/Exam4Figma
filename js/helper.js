function getCardsAksii( product ) {

  const pMainCard = document.createElement( "div" );
  pMainCard.className = "promotion-card";

  const pMainCardImgBox = document.createElement( "div" );
  pMainCardImgBox.className = "promotion-card__img";
  const pMainCardImgBoxImg = document.createElement( "img" );
  pMainCardImgBoxImg.src = product.images[ 0 ];
  pMainCardImgBoxImg.alt = product.name;
  pMainCardImgBoxImg.className = "goods-img-pr";
  const pMainCardImgBoxImgLike = document.createElement( "img" );
  pMainCardImgBoxImgLike.src = "/images/promotioncardlike.svg";
  pMainCardImgBoxImgLike.alt = "Like";
  pMainCardImgBoxImgLike.className = "prcardlike";
  const pMainCardImgBoxP = document.createElement( "p" );
  pMainCardImgBoxP.innerHTML = `${product.discount}%  `;
  pMainCardImgBoxP.className = "pcarddisc";
  pMainCardImgBox.append( pMainCardImgBoxImg, pMainCardImgBoxImgLike, pMainCardImgBoxP );

  const pMainCardInfo = document.createElement( "div" );
  pMainCardInfo.className = "promotion-card__info";

  const pMainCardInfoPrice = document.createElement( "div" );
  pMainCardInfoPrice.className = "promotion-card__info__price";
  const pMainCardInfoPriceSpan1 = document.createElement( "span" );
  pMainCardInfoPriceSpan1.className = "p-c-i-span1";
  const pMainCardInfoPriceSpan1P1 = document.createElement( "p" );
  pMainCardInfoPriceSpan1P1.innerHTML = `${product.price}₽`;
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
  pMainCardInfoText.innerHTML = `${product.description}`;

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
  const pMainCardInfoBtnA = document.createElement( "a" );
  pMainCardInfoBtnA.href = "./korzinka.html";
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