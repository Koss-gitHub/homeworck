let options = {
    mode: "no-cors"
};
let table = document.getElementById("table")
let tr = document.createElement("tr");
let td = document.createElement("td");
table.appendChild(tr);
tr.appendChild(td);
td.innerText = "dksf";



// let promise = fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
// .then( res => {
//         return res.json();
//     }).then(obj =>{
//         console.log(obj);
//         obj.forEach(element => {
//             td.innerHTML = obj.ccy;
//             tr.appendChild(td);
//             table.appendChild(tr);
//         });
//     })
// .catch(err =>{
//         console.log( err + "you are catching error");
//     });


