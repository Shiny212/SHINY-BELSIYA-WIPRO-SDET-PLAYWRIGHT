const cart = [
    { name: "Smartphone", price: 800, category: "Electronics" },
    { name: "Toaster", price: 50, category: "Home" },
    { name: "Headphones", price: 250, category: "Electronics" },
    { name: "Monitor", price: 150, category: "Electronics" }
];

function isEligible(product) {
    if (product.category === "Electronics" && product.price > 200) {
        return true;
    } else {
        return false;
    }
}

function applyPromo(cart, promoCallback) {
    let discountedCount = 0;
    let totalSaving = 0;

    let updatedCart = cart.map(product => {
        if (promoCallback(product)) {
            let saving = product.price * 10 / 100;
            discountedCount++;
            totalSaving += saving;

            return {
                name: product.name,
                price: product.price - saving,
                category: product.category,
                isDiscounted: true
            };
        } else {
            return {
                name: product.name,
                price: product.price,
                category: product.category,
                isDiscounted: false
            };
        }
    });

    console.log(`Promotion applied! ${discountedCount} items were discounted for a total saving of $${totalSaving}.`);

    setTimeout(() => {
        console.log(updatedCart);
    }, 1000);
}

applyPromo(cart, isEligible);
