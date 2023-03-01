class Property {
    constructor (streetAddress, propertyType, city, state) {
        this.streetAddress = streetAddress;
        this.propertyType = propertyType;
        this.city = city;
        this.state = state;
        this.comment = '';
    }

    render() {
        const propertyWrapper = document.createElement('li');
        propertyWrapper.className = 'propertyWrapper';

        const propertyType = document.createElement('div');
        propertyType.className = 'propertyType';
        propertyType.textContent = `${this.propertyType}`;
        const propertyStreetAddress = document.createElement('div');
        propertyStreetAddress.className = 'propertyStreetAddress';
        propertyStreetAddress.textContent = `${this.streetAddress}`;
        const propertyCity = document.createElement('div');
        propertyCity.className = 'propertyCity';
        propertyCity.textContent = `${this.city}`;
        const propertyState = document.createElement('div');
        propertyState.className = 'propertyState';
        propertyState.textContent = `${this.state}`;
        const removeButton = document.createElement('button');
        removeButton.className = 'removeButton';
        removeButton.textContent = 'Remove';
        const commentButton = document.createElement('button');
        commentButton.className = 'commentButton';
        commentButton.textContent = 'Comment';
        const commentBox = document.createElement('textarea');
        commentBox.className = 'commentBox';
        commentBox.style.display = 'none';
        const sendButton = document.createElement('button');
        sendButton.className = 'sendButton';
        sendButton.style.display = 'none';
        
        propertyWrapper.append(propertyType);
        propertyWrapper.append(propertyStreetAddress);
        propertyWrapper.append(propertyCity);
        propertyWrapper.append(propertyState);
        propertyWrapper.append(removeButton);
        propertyWrapper.append(commentButton);
        propertyWrapper.append(commentBox);
        propertyWrapper.append(sendButton);

        return propertyWrapper;
    }
}