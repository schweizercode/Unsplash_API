
const getDataAsync = async () => {
    
    const response = await fetch ("https://api.unsplash.com/photos?client_id=6fa91622109e859b1c40218a5dead99f7262cf4f698b1e2cb89dd18fc5824d15")
    console.log('response',response)
    const data = await response.json()
createtable (data)

    console.log('data',data)
}
getDataAsync()


const createtable = (facts) => {


var tbody = document.getElementById("list")
    
for (var i = 0; i < facts.length; i++) {
    var row = document.createElement("tr")
    var cell1 = document.createElement("td")
    var cell2 = document.createElement("td")
    var cell3 = document.createElement("td")
    var cell4 = document.createElement("td")
    var cell5 = document.createElement("td")

    // console.log(facts[i].urls.regular);

    var factspicture = facts[i].urls.regular
    var factsdescription = facts[i].alt_description
    var factslikes = facts[i].likes
    var factsname = facts[i].user.first_name + " " + facts[i].user.last_name
    var factsdate = facts[i].created_at
   
   
    cell2.innerHTML = factsdescription
    cell3.innerHTML = factslikes
    cell4.innerHTML = factsname
    cell5.innerHTML = factsdate
   

    cell1.style.color ="grey"
    cell2.style.color ="black"
    cell3.className = "bold"
    cell4.className = "boldname"
    cell5.className = "bold"

    var images = document.createElement("img")
    images.src = factspicture 

    cell1.appendChild(images).width = "150";

    row.appendChild(cell1)
    row.appendChild(cell2)
    row.appendChild(cell3)
    row.appendChild(cell4)
    row.appendChild(cell5)

    tbody.appendChild(row)
}
}


const setEventlistenser = (data) => {
let select = document.querySelector
}


// let checkBox10 = document.getElementById('lessThan10')
// checkBox10.addEventListener('change', event =>{
//     let selectedValue = event.target.value 
//     filterbycompetition(selectedValue,)

// })


// filterSelection('all')

//                 function filterSelection(c) {
//                     var x, i;
//                     x = document.getElementsByClassName("dropdown-item");
//                     if (c === "all") c = "";
//                     for (i = 0; i < x.lentgh; i++) {
//                         RemoveClass(x[i], "show");
//                         if (x[i].className.indexOf(c) > -1) Addclass(x[i], "show");
//                     }
//                 }

// function filterdescription()

// let descriptiondata = [];
// for (let i = 0; i > facts.length;i++){
// if (facts[i].description > 0){
//     descriptiondata.push(facts[i])
// }
// }
// // console.log(descriptiondata)
// // const createhtmlTable(descriptiondata)


// // table.innerHTML = "";

// // use function facts.foreach((item)=> {
// //     if (!Array.(item.alt_description)){
// //         Array.push(item.alt_description);

// //         let 
// //     }
// //create an ID in the HTML document and then sent it from js to html with getElementbyID
// // let a = document.getElementById("Description")
// // })

// //piece of code that yoou set in HTML elements
// // function addEventlistenser(){

// // }


// //----

// getData()

// const getDataAsync = async () => {



// }



// const setEventlistenser = (facts) => {
//     let select = document.querySelector("#showonly")
//     select.addEventListener('change',event =>{
//         let selectedValue = event.target.value
//         filterbyCompetition(selectedValue,facts)

//     })
// }

// const filterbyCompetition = (select,facts) => {
//     //this does filter but doens't overwrite
// facts.filter(showonly =>{
//     return choosinglist == select
// })
// console.log('filteredlist', choosinglist)
// }