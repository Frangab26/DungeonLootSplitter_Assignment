let loot = [];

function addLoot (){

    let lootName= document.getElementById("lootName").value;
    let lootValue= Number (document.getElementById("lootValue").value);

    if(lootName ===""){

        document.getElementById("message").textContent= "Enter a loot name";
        return;

    }

if (isNaN(lootValue) || lootValue < 0){

    document.getElementById("message").textContent="Enter a valid loot value";
    return;
}

let lootItem= {

    name: lootName,

    value: lootValue

};

loot.push (lootItem),

document.getElementById("message").textContent="";
renderLoot();

}
   

function renderLoot() {

let output="";

let totalLoot= 0; 

for(let i = 0; i < loot.length; i++) {

 output +=

        loot[i].name +
        " - $" +
        loot[i].value.toFixed(2) +
        "</br">

    totalLoot += loot[i].value;
}


document.getElementById("lootList").innerHTML= output;

document.getElementById("runningTotal").textContent=
"total Loot: $" + totalLoot.toFixed(2);


function splitLoot(){

    let partSize= Number(document.getElementById("partySize").value);

    let totalLoot = 0;

    for (let i = 0; i < loot.length; i++) {
        totalLoot =+ loot [i].value;
    }

    if (partySize < 1|| isNaN(partySize)) {

    document.getElementById ("message").textContent =
    "Enter a valid party size."
}
  
    if(loot.length === 0) {
        document.getElementById("message").textContent=
            "No loot entered.";
            return;
    }

        document.getElementById("message").textContent=
        "No loot entered.";
        return;
    }

let lootPerPerson = totalLoot/ partySize;

document.getElementById("finalTotal").textContent=
    "total Loot: $" + totalLoot.toFixed(2);

    document.getElementById("perperson").textContent=
    "loot Per Party Member:$" + lootPerPerson.toFixed(2);

    document.getElementById("message").textContent="";

}

/*Event listener*/

document.getElementById("addLootBtn").addEventListener("click",addLoot);

document.getElementById("click",splitLoot).addEventListener("click", splitLoot);