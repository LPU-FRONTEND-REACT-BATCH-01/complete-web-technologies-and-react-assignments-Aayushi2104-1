let parentContainer = document.querySelector(".parent-container");
let cartContainer = document.querySelector(".cart-container");
let cartItems = [];

let fetchData = async () => {
    try {
        let res = await fetch("https://dummyjson.com/products");
        if (res.ok) {
            let data = await res.json();
            displayData(data.products);
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

let displayData = (data) => {
    parentContainer.innerHTML = "";

    data.map((product) => {
        let conatainer = document.createElement("ul");
        let title = document.createElement("li");
        let price = document.createElement("li");
        let button = document.createElement("button");

        title.textContent = product.title;
        price.textContent = product.price;
        button.textContent = "Add To Cart";

        button.addEventListener("click", () => {
            addToCart(product);
        });

        conatainer.append(title, price, button);
        parentContainer.append(conatainer);
    });
};

let addToCart = (product) => {
    cartItems.push(product);
    displayCartData();
};

let displayCartData = () => {
    cartContainer.innerHTML = "";

    cartItems.map((product) => {
        let conatainer = document.createElement("ul");
        let title = document.createElement("li");
        let price = document.createElement("li");

        title.textContent = product.title;
        price.textContent = product.price;

        conatainer.append(title, price);
        cartContainer.append(conatainer);
    });
};

fetchData();


