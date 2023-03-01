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

function commentButtonEvent() {
    const commentButtons = document.querySelectorAll('.commentButton');
    const commentBoxes = document.querySelectorAll('.commentBox');
    const sendButtons = document.querySelectorAll('.sendButton')
    for (let i = 0; i < commentButtons.length; i++) {
        commentButtons[i].addEventListener('click', (event) => {
            if (commentBoxes[i].style.display === 'none') {
                commentBoxes[i].style.display = 'flex';
                commentBoxes[i].rows = '5';
                commentBoxes[i].cols = '50';
                commentBoxes[i].maxLength = '280';
                commentBoxes[i].required;
                commentBoxes[i].placeholder = 'Comment here';
                sendButtons[i].style.display = 'flex';
                sendButtons[i].textContent = 'Send';
            } else {
                commentBoxes[i].style.display = 'none';
                sendButtons[i].style.display = 'none';
            }
        })
        sendButtons[i].addEventListener('click', (event) => {
            
        });
    }
    return commentButtons;
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
    commentButtonEvent();
})

console.log(listings.listingsArr);
console.log(listings.listingsArr);
console.log(listings.listingsArr);
console.log(listings.listingsArr);

//need finish comment box and sending comment to object in array