
const getDataAsync = async () => {
    
    const response = await fetch ("https://api.unsplash.com/photos?client_id=6fa91622109e859b1c40218a5dead99f7262cf4f698b1e2cb89dd18fc5824d15")
    console.log('response',response)
    const data = await response.json()
createtable (data)

setEventListener(data) 

    console.log('data',data)
}
getDataAsync()


const createtable = (facts) => {


var tbody = document.getElementById("list")

tbody.innerHTML = ""
    
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
      //reformat date
    const date = new Date(factsdate)
    date.toISOString()
   

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

const setEventListener = (facts) => {

let checkBox5 = document.getElementById('lessThan5')
checkBox5.addEventListener('change', event =>{
    let checked = event.target.checked
    checkboxFilter(checked, facts)
})


const checkboxFilter = (checked, facts)=> {
    if (checked === true) {
        let filteredFacts = facts.filter (fact => {
            return fact.likes <= 5
    
        } )
        console.log(filteredFacts)
        createtable(filteredFacts)
    }  else {
        console.log(facts)
        createtable(facts)
    }
}
}

let checkbox20 = document.getElementById('lessThan20')
checkbox20.addEventListener('change', event =>{
    let checked20 = event.target.checked20
    checkboxFilter (checked, facts)
})


//get today date
// const today = new Date()
// console.log('today',today.getDay())

