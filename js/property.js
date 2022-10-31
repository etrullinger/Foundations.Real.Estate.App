class Property {
    constructor (streetAddress, propertyType, city, state) {
        this.streetAddress = streetAddress;
        this.propertyType = propertyType;
        this.city = city;
        this.state = state;        
    }

    render() {
        const propertyWrapper = document.createElement('li');
        propertyWrapper.className = 'propertyWrapper';

        const propertyType = document.createElement('div');
        propertyType.className = 'propertyType'
        propertyType.textContent = `${this.propertyType}`;
        const propertyStreetAddress = document.createElement('div');
        propertyStreetAddress.className = 'propertyStreetAddress';
        propertyStreetAddress.textContent = `${this.streetAddress}`
        const propertyCity = document.createElement('div');
        propertyCity.className = 'propertyCity';
        propertyCity.textContent = `${this.city}`
        const propertyState = document.createElement('div');
        propertyState.className = 'propertyState';
        propertyState.textContent = `${this.state}`
        const removeButton = document.createElement('button');
        removeButton.className = 'removeButton'
        removeButton.textContent = 'Remove';
        
        propertyWrapper.append(propertyType);
        propertyWrapper.append(propertyStreetAddress);
        propertyWrapper.append(propertyCity);
        propertyWrapper.append(propertyState);
        propertyWrapper.append(removeButton);

        return propertyWrapper;
    }
}