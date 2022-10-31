const listings = new Listings();

const streetAddressInput = document.querySelector('#streetAddressInput');
const propertyTypeInput = document.querySelector('#propertyTypeInput');
const cityInput = document.querySelector('#cityInput');
const stateInput = document.querySelector('#stateInput');

const addPropertyButton = document.querySelector('#addPropertyButton');

function removeButtonEvent() {
    const removeButtons = document.querySelectorAll('.removeButton');
    for (let i = 0; i < removeButtons.length; i++) {
        removeButtons[i].addEventListener('click', (event) => {
            listings.removeProperty(listings.listingsArr[i]);
            listings.renderAfterRemoval();
            removeButtonEvent();
        });
    }
    return removeButtons;
}

addPropertyButton.addEventListener('click', (event) => {
    const property = new Property(`${streetAddressInput.value}`, `${propertyTypeInput.value}`, `${cityInput.value}`, `${stateInput.value}`);
    listings.addProperty(property);
    streetAddressInput.value = '';
    propertyTypeInput.value = '';
    cityInput.value = '';
    stateInput.value = '';
    listings.render();
    removeButtonEvent();
})

console.log(listings.listingsArr);
console.log(listings.listingsArr);
console.log(listings.listingsArr);
console.log(listings.listingsArr);