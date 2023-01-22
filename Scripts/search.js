let searchData = JSON.parse(localStorage.getItem("searchProducts")) || [];

let searcItems = document.getElementById('searchItems');





async function getProducts() {
    let search1 = document.getElementById('search').value;
    try {
        let res = await fetch("userAPIs/products.json");
        data = await res.json();
        // console.log(data)
        let products = data.filter((e) => {
            let query = search1.toLowerCase();

            return e.description
                .toLowerCase().indexOf(query) !== -1 ? true : false;

        }) || null;
        // localStorage.setItem("searchProducts", JSON.stringify(products));
        // productsDisplay(searchData);
        if (products.length > 1) {
            productsDisplay(products)
        } else {
            searcItems.innerHTML = productsNotFound()
        }

        console.log(products)


    } catch (error) {
        console.log(error, "error")
    }

}


// productsDisplay(searchData);
function productsDisplay(data) {
    searcItems.innerHTML = null
    let cartItems = []
    data.forEach((e) => {
        let cart =
            `
        <div id="items">
            <div id="items_image">
                <img src=${e.image} alt="">
            </div>
            <div id="items_title">
               <div>
                  <h4>${e.title}</h4>
               </div>
              <div><span class="material-symbols-outlined">
                    favorite
                   </span>
              </div>
          </div>
          <div id="desc">
             <p>${e.description}</p>
          </div>
          <div id="price">
            <div>
              <h5>${e.price}</h5>
             </div>
             <div = id="buyBtn">
              <button>Buy</button>
             </div>
          </div>
        
        </div>  `

        cartItems.push(cart)
    })

    searcItems.innerHTML = cartItems.join("");

}
function productsNotFound() {
    return `
    
    <div = id="heading">
    <h2>Products not Found</h2>
   </div>
    `

}


