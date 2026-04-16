var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let res = yield fetch("https://dummyjson.com/products");
            if (res.ok) {
                let data = yield res.json();
                let products = data.products;
                let priceResult1 = products.filter(p => p.price > 5);
                let priceResult = products.filter(p => p.price > 10);
                let categoryResult = products.filter(p => p.category === "beauty");
                let ascProducts = [...products].sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
                let descProducts = [...products].sort((a, b) => b.title.toLowerCase().localeCompare(a.title.toLowerCase()));
                console.log("Price > 5:", priceResult1);
                console.log("Price > 10:", priceResult);
                console.log("Category = beauty:", categoryResult);
                console.log("Sorted A-Z:", ascProducts);
                console.log("Sorted Z-A:", descProducts);
            }
            else {
                console.log("HTTP error");
            }
        }
        catch (error) {
            console.log("Error fetching data");
        }
    });
}
fetchData();
