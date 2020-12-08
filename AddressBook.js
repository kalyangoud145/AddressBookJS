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
    toString() {
        return "\nfirstname = " + this.firstName + ", lastName = " + this.lastName + ", address = " + this.address
            + ", city = " + this.city + ", state = " + this.state + ", zip = " + this.zip + ", email = " + this.email;
    }
}
console.log("\nUC3-- Adding new contact");
let contacts = new Array();
function AddContact(firstName, lastName, address, city, state, zip, phoneNumber, email) {
    let contact = new Contact(firstName, lastName, address, city, state, zip, phoneNumber, email);
    contacts.push(contact);
}
AddContact('Kalyan', 'Goud', 'VTcolony', 'nalgonda', 'Telangana', '508001', '91 7732063720', 'kalyangoud145@gmail.com');
AddContact('Anirudh', 'Repala', 'Padmavathicolony', 'Hyderabad', 'Telanagana', '507002', '91 9950647660', 'repalaanirudh@gmail.com');
console.log(contacts.toString());
// UC4
// Edit existing contact
function GetContactIndexWithName(firstName, lastName) {
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName == firstName && contacts[i].lastName == lastName) {
            return i;
        }
    }
    return -1;
}
let indexOfContact = GetContactIndexWithName('Anirudh', 'Repala');
if (indexOfContact != -1) {
    console.log('Contacts before update operation: ');
    console.log(contacts.toString());
    contacts[indexOfContact].firstName = 'Virat';
    contacts[indexOfContact].lastName = 'Kohli';
    contacts[indexOfContact].city = 'hyderabad';
    console.log('Contacts after update operation: ');
    console.log(contacts.toString());
}
else console.log("Contact not found");