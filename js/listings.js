class Listings {
    constructor() {
        this.listingsArr = [];
    }

    addProperty(property) {
        this.listingsArr.push(property);
    }

    removeProperty(property) {
        for (let i = 0; i < this.listingsArr.length; i++) {
            if (this.listingsArr[i].streetAddress === property.streetAddress) {
                this.listingsArr.splice(i, 1);
                break;
            }
        }
        return this.listingsArr;
    }

    render() {
        const propertyListings = document.querySelector('#propertyListings');

        const propertyList = document.createElement('ul');

        this.listingsArr.map(property => {
            propertyList.append(property.render());
        })

        propertyListings.replaceChildren(propertyList);
    }

    renderAfterRemoval() {
        const propertyListings = document.querySelector('#propertyListings');

        const propertyList = document.createElement('ul');

        this.listingsArr.map(property => {
            propertyList.append(property.render());
        })

        propertyListings.replaceChild(propertyList, propertyListings.firstElementChild);
    }
}