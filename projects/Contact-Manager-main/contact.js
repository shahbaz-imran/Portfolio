let infoList = document.getElementById('info-list');
let displayDiv = document.getElementById('display-div');
let updateDiv = document.getElementById('update-div');

let storedNames = JSON.parse(localStorage.getItem("contacts"));


window.addEventListener("load", () => {

    let contactNums = storedNames.map((cont, index) => {

        const node = document.createElement("li");
        node.innerHTML = `<div class="flex justify-between px-2 py-4 text-2xl font-medium cursor-pointer border-b-2">
        <a id=${cont.fname} onclick="handleInfo(this.id)">${cont.fname}</a>
        <a href="javascript:void(0)" onclick="removeItem(${index})">X</a>
        <input type="image" src="./edit-text.png" class="w-5 h-5 mt-2" onclick='editItem(${index})'}>
        </div>`

        document.getElementById('info-list').appendChild(node)

    })

})


let handleInfo = (clicked_id) => {
    console.log(clicked_id);

    storedNames.map((infoCont) => {

        if (clicked_id === infoCont.fname) {

            const infoNode1 = document.createElement("li");
            infoNode1.setAttribute("class", "p-2 text-2xl font-medium text-slate-400");

            const infoNode2 = document.createElement("li");
            infoNode2.setAttribute("class", "p-2 text-2xl font-medium text-slate-400");

            const infoNode3 = document.createElement("li");
            infoNode3.setAttribute("class", "p-2 text-2xl font-medium text-slate-400");

            const infoNode4 = document.createElement("li");
            infoNode4.setAttribute("class", "p-2 text-2xl font-medium text-slate-400");


            const textnode1 = document.createTextNode(infoCont.fname);
            const textnode2 = document.createTextNode(infoCont.lname);
            const textnode3 = document.createTextNode(infoCont.number);
            const textnode4 = document.createTextNode(infoCont.email);

            infoNode1.appendChild(textnode1);
            infoNode2.appendChild(textnode2);
            infoNode3.appendChild(textnode3);
            infoNode4.appendChild(textnode4);

            infoList.appendChild(infoNode1);
            infoList.appendChild(infoNode2);
            infoList.appendChild(infoNode3);
            infoList.appendChild(infoNode4);

        }

    })
}

let removeItem = (index) => {
    let storedNames = JSON.parse(localStorage.getItem("contacts"));
    namesArray = storedNames
    namesArray.splice(index, 1)
    localStorage.setItem("contacts", JSON.stringify(namesArray));

    location.reload();
}

let editItem = (index) => {
    displayDiv.classList.add('hidden')
    updateDiv.classList.remove('hidden')

    let storedNames = JSON.parse(localStorage.getItem("contacts"));
    namesArray = storedNames

    let myObj = namesArray[index];
    let saveIndex = index;
    console.log(saveIndex);

    let fname = document.getElementById('fname').value = myObj.fname
    let lname = document.getElementById('lname').value = myObj.lname
    let number = document.getElementById('number').value = myObj.number
    let email = document.getElementById('email').value = myObj.email

    console.log(myObj.fname)

    //updating

    updateBtn.addEventListener('click', () => {
        displayDiv.classList.remove('hidden')
        updateDiv.classList.add('hidden')

        let storedNames = JSON.parse(localStorage.getItem("contacts"));
        namesArray = storedNames
    
        let updatedfname = document.getElementById('fname').value;
        let updatedlname = document.getElementById('lname').value;
        let updatednumber = document.getElementById('number').value;
        let updatedemail = document.getElementById('email').value;

        let updatedArray = namesArray[saveIndex];

        updatedArray.fname = updatedfname;
        updatedArray.lname = updatedlname;
        updatedArray.number = updatednumber;
        updatedArray.email = updatedemail;

        localStorage.setItem("contacts", JSON.stringify(namesArray));

        location.reload();
    })
}

let updateBtn = document.getElementById('update-btn');



