const budgetInput = document.getElementById("budget");
const personInput = document.getElementById("person");
const giftInput = document.getElementById("gift");
const priceInput = document.getElementById("price");
const addGiftButton = document.getElementById("addGift");
const giftList = document.getElementById("giftList");

let totalSpent = 0;

function updateBudget() {
    document.getElementById("spent").textContent =
        totalSpent.toFixed(2);

    const budget = Number(budgetInput.value) || 0;
    const remaining = budget - totalSpent;

    document.getElementById("remaining").textContent =
        remaining.toFixed(2);
}

addGiftButton.addEventListener("click", function () {
    const person = personInput.value.trim();
    const gift = giftInput.value.trim();
    const price = Number(priceInput.value);

    if (!person || !gift || priceInput.value === "" ||
        !Number.isFinite(price) || price < 0) {
        alert("Please enter the person, gift name and a valid price.");
        return;
    }

    const listItem = document.createElement("li");
    listItem.textContent =
        `${gift} for ${person} — £${price.toFixed(2)} `;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Remove";
    deleteButton.type = "button";

    deleteButton.addEventListener("click", function () {
        totalSpent -= price;
        listItem.remove();
        updateBudget();
    });

    listItem.appendChild(deleteButton); 
    giftList.appendChild(listItem);
    
    totalSpent += price; 
    updateBudget();

    personInput.value = ""; 
    giftInput.value = ""; 
    priceInput.value = "";
});

budgetInput.addEventListener("input", updateBudget);

updateBudget();
