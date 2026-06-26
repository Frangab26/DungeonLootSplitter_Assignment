let loot = [];
let partySize= 1;

function isPartyValid() {
    return partySize >= 1 && !isNaN(partySize);
}

function addLoot () {

    let lootName=document.getElementById("lootName").value;
    let lootValue= Number(document.getElementById("lootValue").value);
    let quantity= Number(document.getElementById("quantity").value);

    if (lootName === "") {

        document.getElementById("message").textContent= "Enter a loot name";
        return;
    }

    if (isNaN(lootValue) || lootValue < 0) {
        document.getElementById("message").textContent = "enter a valid loot value";
        return;
    }

    if (isNaN(quantity) || quantity <1) {
        document.getElementById("message").textContent = "enter a valid quantity";
        return;
    }


loot.push({
    
name: lootName,
value: Number(lootValue) ,
quantity: Number(quantity)

});

document.getElementById("message").textContent="";
document.getElementById("lootName").value = "";
document.getElementById("lootValue").value = "";
document.getElementById("quantity").value = "";

updateUI();

}

function removeLoot(index) {
    loot.splice(index,1);
    updateUI();
}

function updateUI() {

    let lootRows = document.getElementById("lootRows");
    lootRows.innerHTML= "";

    let totalLoot= 0;

    for (let i = 0; i < loot.length; i++){

        let row = document.createElement("div");
         row.className ="loot-row";

        let nameCell= document.createElement("div")
         nameCell.className="loot-cell";
         nameCell.innerText = loot [i].name;

        let valueCell = document.createElement("div")
        valueCell.className = "loot-cell";
        valueCell.innerText = Number(loot[i].value).toFixed(2);

        let quantityCell = document.createElement("div");
        quantityCell.className ="loot-cell";
        quantityCell.innerText = loot[i].quantity;

        
         let actionCell = document.createElement("div");
         actionCell.className="loot-cell";

         let removeBtn = document.createElement("button");
         removeBtn.innerText = "Remove";

        removeBtn.addEventListener("click", function () {
        removeLoot(i);

});

actionCell.appendChild(removeBtn);

row.appendChild(nameCell);
row.appendChild(valueCell);
row.appendChild(quantityCell)
row.appendChild(actionCell);

lootRows.appendChild(row);

totalLoot += loot[i].value * loot[i].quantity;

}

let isEmpty = loot.length === 0;

document.getElementById("noLootMessage")
.classList.toggle("hidden", !isEmpty);

document.getElementById("totalValue").textContent= 
totalLoot.toFixed(2);

let perPerson = (partySize >= 1) 
? totalLoot / partySize 
: 0;

document.getElementById("lootPerMember").textContent=
 perPerson.toFixed(2);

 
document.getElementById("splitBtn").disabled = 
loot.length === 0 || !isPartyValid ();
       
}

function splitLoot() {
    updateUI();
}

/*Event*/

document.getElementById("addLootBtn").addEventListener("click",addLoot);

document.getElementById("splitBtn").addEventListener("click",splitLoot);

document.getElementById("partySize").addEventListener("input",function (){
    partySize = Number (this.value);
    updateUI();
});