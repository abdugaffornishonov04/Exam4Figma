const prMainRow = document.querySelector(".pr-row");
const prSearchInput = document.querySelector(".pr-search-input");

let search = "";

function mainProductGetter(product){
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
  const prMainCardButtonLink = document.createElement( "a" );
  prMainCardButtonLink.href = "./korzinka.html";
  prMainCardButtonLink.innerHTML = "В корзину";
  prMainCardButton.append( prMainCardButtonLink );

  prMainCardInfo.append( prMainCardInfoFirstP,
    prMainCardInfoSecondP,
    prMainCardRatings,
    prMainCardButton );

  prMainCard.append( prMainCardImgBox, prMainCardInfo );
  
  return prMainCard;
}

  // function getPrProducts(){
  //   let result = products.filter((pr) => pr.name.toLowerCase().includes(search));
  //   prMainRow.innerHTML = "";

  //   if(result.length !== 0){
  //     result.map((pr) => {
  //       let card = mainProductGetter(pr);
  //       prMainRow.append(card);
  //     }) 
  //   } else{
  //     prMainRow.innerHTML = `No Products Found`
  //   }
  // }

  // mainProductGetter()

  // prSearchInput.addEventListener("keyup",function (){
  //   search = this.value.trim().toLowerCase();
  //   mainProductGetter()
  // })


    products.map( ( product ) => {
      let card = mainProductGetter( product );
      prMainRow.append( card );
    } ); 

 


 

// const productsRow = document.querySelector( ".pr-row" );
// const searchInput = document.querySelector( ".pr-search-input" );
// const totalProducts = document.querySelector( ".total-products" );

// let search = "";

// function getProductCard( pr ) {
//   return `
//     <div class="product-card">
//       <div class="product-card-body">
//         <img
//           src="${pr.images[ 0 ]}"
//           alt="${pr.name}"
//         />
//       </div>
//       <div class="product-card-footer">
//         <h3><a href="product.html">${pr.name}</a></h3>
//         <p> ${pr.description} </p>
//         <p><i> ${pr.price} </i></p>
//         <button><b> Add to the cart </b></button>
//       </div>
//     </div>
//   `;
// }

// function getProducts() {
//   let results = products.filter(
//     ( pr ) =>
//       pr.name.toLowerCase().includes( search ) ||
//       pr.description.toLowerCase().includes( search )
//   );

//   totalProducts.textContent = results.length;

//   productsRow.innerHTML = "";

//   if ( results.length !== 0 ) {
//     results.map( ( pr ) => {
//       productsRow.innerHTML += getProductCard( pr );
//     } );
//   } else {
//     productsRow.innerHTML = `<div>
//       No products
//     </div>`;
//   }
// }

// getProducts();

// searchInput.addEventListener( "keyup", function () {
//   search = this.value.trim().toLowerCase();
//   getProducts();
// } );






