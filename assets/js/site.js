// write cool JS hwere!!
let myData = [] // array der indeholder alle list descriptions
let myCurrentList = null  // index of current list

const myAppElement = document.getElementById('app')


makeDummyData()
buildStatics()

//showList(0)



// setup statics






function buildStatics() {

    let myHeader = buildHeader()
    let myFooter = buildFooter()

    myAppElement.innerHTML = `${myHeader}<section id="content"></section>${myFooter}`

    showList()

}

function showList() {

}

function buildHeader() {
    let myHeader = `<header>Header to complete</header>`
    return myHeader

}

function buildFooter() {

    let myHeader = `<footer>footer to complete</footer>`
    return myHeader
}



function buildList() {

}




// modtager et navn,string og skaber et ny liste dataobjekt og gemmer det i myData-------------------------
function makeList(myName) {
    let myList = {
        name: myName,//key value pair
        listItems: []
    }

    myData.push(myList)
    myCurrentList = myData.length - 1

}

// --------------------------------------------------------


// modtager et navn og opretter list item i første to do list

function makeItem(index, myName) {

    let myListItem = {
        name: myName,
        status: true
    }

    myData[index].listItems.push(myListItem)


}



// modtager et index for listen, og et index for item, og fjerner dette item fra listen.

function removeItem(listIndex, itemIndex) {

    let myList = myData[listIndex]



    myList.listItems.splice(itemIndex, 1)

}





function showList() {

    // data
    let myListData = myData[myCurrentList]

    // dom element
    let myListElement = document.getElementById('content')

    // tømmer dom elementet
    myListElement.innerHTML = ''

    // tekst variabel indeholdende html
    let MyHtml = `<h2>${myListData.name}</h2><ul>`

    myListData.listItems.forEach((listItem, index) => {


        MyHtml += `<li onclick="itemCallBack(${index})">${listItem.name}</li>`
    });

    MyHtml += `</ul>`

    myListElement.innerHTML = MyHtml



}

function itemCallBack(indexClicked) {

    if (confirm("delete task!")) {
        removeItem(myCurrentList, indexClicked)
        showList()

    }
}




//----------------------------------------------------------------------

function makeDummyData() {
    makeList("liste 1")
    makeList("liste 2")

    makeItem(0, 'opgave 1')
    makeItem(0, 'opgave 2')
    makeItem(0, 'opgave 3')
    makeItem(0, 'opgave 4')

    makeItem(1, 'opgave 1')
    makeItem(1, 'opgave 2')
    makeItem(1, 'opgave 3')
    makeItem(1, 'opgave 4')

}
