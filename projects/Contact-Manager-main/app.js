let addBtn = document.getElementById('add-btn');

if(!JSON.parse(localStorage.getItem("contacts"))) {
    localStorage.setItem("contacts", JSON.stringify([]));

}

let namesArray = JSON.parse(localStorage.getItem("contacts"));

console.log(namesArray)


class Person {
    constructor(fname, lname, number, email) {
        this.fname = fname;
        this.lname = lname;
        this.number = number;
        this.email = email;
    }
}

addBtn.addEventListener('click', () => {
    let fname = document.getElementById('fname').value
    let lname = document.getElementById('lname').value
    let number = document.getElementById('number').value
    let email = document.getElementById('email').value

    // console.log(fname, lname, number, email);

    namesArray.push(new Person(fname, lname, number, email))

    console.log(namesArray)

    localStorage.setItem("contacts", JSON.stringify(namesArray));

    fname = '';
    lname = '';
    number = '';
    email = '';

    location.replace('./contact.html')
})

