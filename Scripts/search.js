let searchData = JSON.parse(localStorage.getItem("searchProducts")) || [];

let searcItems = document.getElementById('main');
if (searchData.innerHTML == null) {
    searchData.innerHTML = "hello"
} else {

}




async function getProducts() {
    let search1 = document.getElementById('search').value;
    try {
        let res = await fetch("userAPIs/products.json");
        data = await res.json();
        // console.log(data)
        let products = data.filter((e) => {
            let query = search1.toLowerCase();

            return e.category
                .toLowerCase().indexOf(query) !== -1 ? true : false;

        });
        localStorage.setItem("searchProducts", JSON.stringify(products));

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
             <h5>500</h5>
          </div>
        
        </div>  `

        cartItems.push(cart)
    })

    searcItems.innerHTML = "hello";

}

function serchitems() {
    productsDisplay(searchData);
}
