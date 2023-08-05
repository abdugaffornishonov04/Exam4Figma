function getCards( product ) {
  const pMainRow = document.querySelector( ".promotion-bottom" );

  const pMainCard = document.createElement( "div" );
  pMainCard.className = "promotion-card";

  const pMainCardImgBox = document.createElement("div");
  pMainCardImgBox.className = "promotion-card__img";
  const pMainCardImgBoxImg = document.createElement("img");
  pMainCardImgBoxImg.src = `${product.images[0]}`;
  pMainCardImgBoxImg.alt = `${product.name}`;
  pMainCardImgBoxImg.className = "goods-img-pr";
  const pMainCardImgBoxImgLike = document.createElement("img");
  pMainCardImgBoxImgLike.src = "/images/promotioncardlike.svg";
  pMainCardImgBoxImgLike.alt = "Like";
  pMainCardImgBoxImgLike.className = "prcardlike";
  const pMainCardImgBoxP = document.createElement("p");
  pMainCardImgBoxP.innerHTML = "-50%";
  pMainCardImgBoxP.className = "pcarddisc";
  pMainCardImgBox.append( pMainCardImgBoxImg, pMainCardImgBoxImgLike, pMainCardImgBoxP );

  const pMainCardInfo = document.createElement("div");
  pMainCardInfo.className = "promotion-card__info";
  const pMainCardInfoPrice = document.createElement("div");
  pMainCardInfoPrice.className = "promotion-card__info__price";
  const pMainCardInfoPriceSpan1 = document.createElement("span");
  pMainCardInfoPriceSpan1.className = "p-c-i-span1";
  const pMainCardInfoPriceSpan1P1 = document.createElement("p");
  pMainCardInfoPriceSpan1P1.innerHTML = "44,50 ₽";
  const pMainCardInfoPriceSpan1P2 = document.createElement("p");
  pMainCardInfoPriceSpan1P2.innerHTML = "С картой";
  const pMainCardInfoPriceSpan2 = document.createElement("span");
  pMainCardInfoPriceSpan2.className = "p-c-i-span";
  const pMainCardInfoPriceSpan2P1 = document.createElement("p");
  pMainCardInfoPriceSpan2P1.innerHTML = "44,50 ₽";
  const pMainCardInfoPriceSpan2P2 = document.createElement("p");
  pMainCardInfoPriceSpan2P2.innerHTML = "С картой";




}


////btn-click-list start
const cDropBtn = document.querySelector( ".category-dropdown-a" );

function dDownActivate() {
  dBOfDropDown = document.querySelector( ".c-d-d-wrapper" );

  dBOfDropDown.classList.toggle("c-d-d-wrapper-d-b")
}
////btn-click-list end

cDropBtn.addEventListener( "click", dDownActivate )

