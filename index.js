
// fetch Data is the heading of the page
let fetchdata = document.querySelector("#fetch")

 let container = document.querySelector("#cont")

// get data gives the data using fetch method
function getData(URL){
  fetch(URL)
 .then(function(res){
  // this line makes our code in json format
     return res.json()
 })
 .then(function(res){
  // this codes gives our data in array form 
      displayData(res.data)
 })
 }


//  displaydata function is used to display data in our ui page

 function displayData(arr){
     container.innerHTML = "";
  arr.forEach((ele)=>{
    let div = document.createElement("div")

    let img = document.createElement("img")
    img.src = ele.avatar;

    let title = document.createElement("p")
    title.innerHTML = ele.email;

    let category = document.createElement("h3")
    category.innerHTML = ele.first_name

    div.append(img , category , title)

    container.append(div)
  })
 }

// after click the fetch data , the data will be appear on User interface  
 function fetchData(){
    getData("https://reqres.in/api/users?page=2")
 }

 fetchdata.addEventListener("click" , fetchData)

