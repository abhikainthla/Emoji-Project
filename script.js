    // Get the input from the user
    let input_text = document.getElementById("searchTerm");
    input_text.addEventListener('keyup', () =>{
        let filter = input_text.value;
        console.log(filter);
        displayResult(filter.toLowerCase());
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
    tr.setAttribute('class', 'row');
    let td1 = document.createElement('td');
    td1.style.fontSize ="32px"
    td1.setAttribute('class', 'column');
    let td2 = document.createElement('td');
    td2.setAttribute('class', 'column');
    let td3 = document.createElement('td');
    td3.setAttribute('class', 'column');
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

function shrinkHeader(){
    const header = document.querySelector("header");
    header.style.height ="60px";
}

window.onscroll = () => shrinkHeader();

window.onload = () => displayResult();