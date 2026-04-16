type Product = {
    title: string;
    price: number;
    category: string;
};

async function fetchData() {
    try {
        let res = await fetch("https://dummyjson.com/products");

        if (res.ok) {
            let data = await res.json();


            let products: Product[] = data.products;


            

            let priceResult1 = products.filter(p => p.price > 5);
            let priceResult = products.filter(p => p.price > 10);

            let categoryResult = products.filter(p => p.category === "beauty");

            
            let ascProducts = [...products].sort((a, b) =>
                a.title.toLowerCase().localeCompare(b.title.toLowerCase())
            );

            let descProducts = [...products].sort((a, b) =>
                b.title.toLowerCase().localeCompare(a.title.toLowerCase())
            );

            console.log("Price > 5:", priceResult1);
            console.log("Price > 10:", priceResult);
            console.log("Category = beauty:", categoryResult);

            console.log("Sorted A-Z:", ascProducts);
            console.log("Sorted Z-A:", descProducts);

        } else {
            console.log("HTTP error");
        }
    } catch (error) {
        console.log("Error fetching data");
    }
}

fetchData();