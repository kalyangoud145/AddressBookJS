class Contact {
    // Constructor for the different fields of contact
    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
    }
    // Getter and setter to get and update the values
    get firstName() { return this._firstName; }
    set firstName(firstName) {
        let fnRegex = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$');
        if (fnRegex.test(firstName)) {
            this._firstName = firstName;
        } else {
            throw 'Invalid First Name';
        }
    }

    get lastName() { return this._lastName; }
    set lastName(lastName) {
        let lnRegex = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$');
        if (lnRegex.test(lastName)) {
            this._lastName = lastName;
        } else {
            throw 'Invalid Last Name';
        }
    }

    get address() { return this._address; }
    set address(address) {
        let addressRegex = RegExp('^[A-Za-z0-9]{4,}$');
        if (addressRegex.test(address)) {
            this._address = address;
        } else {
            throw 'Invalid Address';
        }
    }

    get city() { return this._city; }
    set city(city) {
        let cityRegex = RegExp('^[A-Za-z]{4,}$');
        if (cityRegex.test(city)) {
            this._city = city;
        } else {
            throw 'Invalid City';
        }
    }

    get state() { return this._state; }
    set state(state) {
        let stateRegex = RegExp('^[A-Za-z]{4,}$');
        if (stateRegex.test(state)) {
            this._state = state;
        } else {
            throw 'Invalid State';
        }
    }

    get zip() { return this._zip; }
    set zip(zip) {
        let zipRegex = RegExp('^[1-9]{1}[0-9]{2}[ ]?[0-9]{3}$');
        if (zipRegex.test(zip)) {
            this._zip = zip;
        }
        else {
            throw 'Invalid Zip Code';
        }
    }

    get phoneNumber() { return this._phoneNumber; }
    set phoneNumber(phoneNumber) {
        let phoneNumberRegex = RegExp('^[1-9]{1}[0-9]{1,2}[ ][1-9]{1}[0-9]{9}$');
        if (phoneNumberRegex.test(phoneNumber)) {
            this._phoneNumber = phoneNumber;
        } else {
            throw 'Invalid Phone Number';
        }
    }

    get email() { return this._email; }
    set email(email) {
        let emailRegex = RegExp('^[0-9a-zA-Z]{1,}([._+-][0-9a-zA-Z]{0,})*[@][0-9a-zA-Z]{1,}.[a-zA-Z]{2,3}(.[a-zA-Z]{2,3})?$');
        if (emailRegex.test(email)) {
            this._email = email;
        }
        else {
            throw 'Invalid email-id';
        }
    }
}
