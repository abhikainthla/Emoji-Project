    // Get the input from the user
    let input_text = document.getElementById("searchTerm");
    input_text.addEventListener('keyup', () =>{
        let filter = input_text.value;
        console.log(filter);
        displayResult(filter);
        return false;
    })
    
function displayResult(searchQuery =""){
    let filterData = emojiList.filter((e) =>{
        if(e.aliases.some(elem => elem.startsWith(searchQuery))){
            return true;
        }
        if(e.description.indexOf(searchQuery)==1){
            return true;
        }
        if(e.tags.some(elem => elem.startsWith(searchQuery))){
            return true;
        }
    })
let table_info = document.getElementById("table-info");
table_info.innerHTML ="";
filterData.forEach(element => {
    let tr = document.createElement("tr");
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    td1.innerText = element.emoji;
    td2.innerText = element.aliases;
    td3.innerText = element.description;
    tr.append(td1, td2, td3);
    table_info.appendChild(tr);
});
}

let form = document.getElementById("form");
form.onsubmit= function (event) {
    event.preventDefault();
}


window.onload = () => displayResult();