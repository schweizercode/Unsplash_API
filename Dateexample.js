// 1 fetching the data
//obsolete
const getData = () => {
    fetch("https://www.scorebat.com/video-api/v1/").then((response) => {
        console.log('response', response)
        return response.json();
    }).then((data) => {
        console.log('data', data)
        createHtmlTable(data)
        createDropDown(data)
        setEventListeners(data)
    })
};

const getDataAsync = async () => {

    const response = await fetch("https://www.scorebat.com/video-api/v1/")
    console.log('response', response)
    const data = await response.json()

    return data

}



// 2 turn fetch in async/await
// const getDataAsync 

// 3 function for creating table and dropdown
const createHtmlTable = (footballList) => {
    let table = document.querySelector("#table");
    table.innerHTML = "";

    footballList.forEach((ele) => {
        if (isInDropdown(ele) && isDate(ele)) {


            //!\Naming of variables!
            let row = document.createElement("tr");

            let column = document.createElement("td");
            column.innerHTML = ele.title;
            row.appendChild(column);

            let column2 = document.createElement("td");
            column2.innerHTML = ele.url;
            row.appendChild(column2);

            let column3 = document.createElement("td");
            // reformat date
            const date = new Date(ele.date)

            column3.innerHTML = date.toLocaleDateString('de', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })
            row.appendChild(column3);
            table.appendChild(row);
        }

    });
};






const createDropDown = (data) => {
    let arr = [];

    data.forEach((item) => {
        if (!arr.includes(item.competition.name)) {
            arr.push(item.competition.name);

            let a = document.querySelector("#football");


            let option = document.createElement("option");
            option.innerHTML = item.competition.name;
            option.value = item.competition.name;
            a.appendChild(option);
        };
    });

};





//4 make controller function
//main function async await
async function controller() {
    //get the data
    const data = await getDataAsync()
    console.log('data', data)
    // build table with all data and reformat date
    createHtmlTable(data)

    //create DropDown filter
    createDropDown(data)

    // set event listeners / analyse the event object
    setEventListeners(data)

    //get today date
    const today = new Date()
    console.log('today', today.getDay())



}



//5 add event listeners
const setEventListeners = (data) => {
    let select = document.querySelector("#football");
    select.addEventListener('change', event => {
        // let selectedValue = event.target.value
        // filterByCompetition(selectedValue, data)

        createHtmlTable(data)

    })

    let datepicker = document.querySelector("#date")
    datepicker.addEventListener('change', event => {
        // let dateValue = event.target.value
        // console.log('dateValue', dateValue)
        // filterByDate(dateValue, data)
        createHtmlTable(data)
    })

}

//6 fiter by date
//obsolete
const filterByDate = (dateValue, gameList) => {
    const result = []
    const datePickerFormatted = new Date(dateValue)


    //with the for loop and if condition
    // for (let i = 0; i < gameList.length; i++) {
    //   const gamedateFormatted = new Date(gameList[i].date)
    //   if (datePickerFormatted.setHours(0, 0, 0, 0) === gamedateFormatted.setHours(0, 0, 0, 0)) {
    //     result.push(gameList[i])
    //   }
    // }
    // console.log('result', result)
    // createHtmlTable(result)

    //arrow fonction filter
    const filteredList = gameList.filter(game => {
        const gamedateFormatted = new Date(game.date)
        return datePickerFormatted.setHours(0, 0, 0, 0) === gamedateFormatted.setHours(0, 0, 0, 0)
    })
    createHtmlTable(filteredList)
}




//7 fiter by dropdown
//obsolete
const filterByCompetition = (select, gameList) => {

    if (select == "all") {
        createHtmlTable(gameList)
    } else {
        const filteredGames = gameList.filter((game) => {
            return game.competition.name == select
        })

        console.log('filteredGames', filteredGames)
        createHtmlTable(filteredGames)
    }

}


//8 combine filters
//in createHTMLTable

//9 move into helper functions
const isInDropdown = (game) => {
    let select = document.querySelector("#football");
    if (select.value == "all") {
        return true
    } else if (game.competition.name == select.value) {
        return true
    } else {
        return false
    }

}
const isDate = (game) => {
    let datepicker = document.querySelector("#date")
    const datePickerFormatted = new Date(datepicker.value)
    const gamedateFormatted = new Date(game.date)
    if (datePickerFormatted.setHours(0, 0, 0, 0) === gamedateFormatted.setHours(0, 0, 0, 0)) {
        return true
    } else {
        return false
    }
}


controller()