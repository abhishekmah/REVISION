var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var div3 = document.getElementById("div3");
var div4 = document.getElementById("div4");
var div5 = document.getElementById("div5");
var a=0;
var j=0;

////***** DEBOUNCING *****////// remove clearTimeout === Throttling....
var search = document.getElementById("search");
    function debounce(func, delay) {
    let timer;
    return function () {
        let context = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
        func.apply(context, args);
        }, delay);
    };
    }
search.addEventListener("click", debounce(handleSearch, 2000));

async function handleSearch() {
    if(a == 0){
        a++;
    }
    j++;
    console.log(j)
  var search = document.getElementById("search").value;
  try {
    let res = await fetch(
      `https://api.unsplash.com/search/photos?per_page=1000&query=${search}&client_id=xRf-SuV5UAdpxw3s_YdLrGyYyn7IaUW8Q1UebZLhtyA`
    );
    // let data = res.data.results;
    var items = await res.json();
    console.log("items:", items);
    appendImages(items.results);
  } catch (e) {
    console.log("e:", e);
  }

  // console.log(search);
  console.log("Button Clicked");
}


async function handleSearch1() {
  var search = document.getElementById("search").value;
  try {
    let res = await fetch(
      `https://api.unsplash.com/search/photos?per_page=1000&query=random&client_id=xRf-SuV5UAdpxw3s_YdLrGyYyn7IaUW8Q1UebZLhtyA`
    );
    // let data = res.data.results;
    var items = await res.json();
    console.log("items:", items);
    appendImages(items.results);
  } catch (e) {
    console.log("e:", e);
  }
}

handleSearch1();

window.addEventListener("scroll", () => {
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
      if(j != 0){
          handleSearch();
      }
    if(a != 1 ){
        handleSearch1();
    }
    // console.log("scroll");
  }
});

function appendImages(items) {
    if(a == 1 && j == 1){
        div1.innerHTML = null;
        div2.innerHTML = null;
        div3.innerHTML = null;
        div4.innerHTML = null;
        div5.innerHTML = null;
    }
    let arr1 = [],
        arr2 = [],
        arr3 = [],
        arr4 = [],
        arr5 = [];

  let x = Math.floor(items.length / 5);

  for (let i = 0; i < x; i++) arr1.push(items[i]);
  for (let i = x; i < 2 * x; i++) arr2.push(items[i]);
  for (let i = 2 * x; i < 3 * x; i++) arr3.push(items[i]);
  for (let i = 3 * x; i < 4 * x; i++) arr4.push(items[i]);
  for (let i = 4 * x; i < items.length; i++) arr5.push(items[i]);

  arr1.forEach((el) => {
    let div = document.createElement("div");
    div.style.background = "rgb(103,104,111)";
    div.style.margin = "10px 0px";
    div.setAttribute("class", "imgDiv");

    let img = document.createElement("img");
    img.src = el.urls.small;
    img.style.width = "100%";

    let para = document.createElement("p");
    para.innerHTML = el.alt_description;
    para.style.padding = "10px 10px";
    para.style.fontSize = "14px";

    div.append(img, para);
    div1.append(div);
  });

  arr2.forEach((el) => {
    let div = document.createElement("div");
    div.setAttribute("class", "imgDiv");
    div.style.background = "rgb(103,104,111)";
    div.style.margin = "10px 0px";

    let img = document.createElement("img");
    img.src = el.urls.small;
    img.style.width = "100%";

    let para = document.createElement("p");
    para.innerHTML = el.alt_description;
    para.style.padding = "10px 10px";
    para.style.fontSize = "14px";

    div.append(img, para);
    div2.append(div);
  });

  arr3.forEach((el) => {
    let div = document.createElement("div");
    div.setAttribute("class", "imgDiv");
    div.style.background = "rgb(103,104,111)";
    div.style.margin = "10px 0px";

    let img = document.createElement("img");
    img.src = el.urls.small;
    img.style.width = "100%";

    let para = document.createElement("p");
    para.innerHTML = el.alt_description;
    para.style.padding = "10px 10px";
    para.style.fontSize = "14px";

    div.append(img, para);
    div3.append(div);
  });

  arr4.forEach((el) => {
    let div = document.createElement("div");
    div.setAttribute("class", "imgDiv");
    div.style.background = "rgb(103,104,111)";
    div.style.margin = "10px 0px";

    let img = document.createElement("img");
    img.src = el.urls.small;
    img.style.width = "100%";

    let para = document.createElement("p");
    para.innerHTML = el.alt_description;
    para.style.padding = "10px 10px";
    para.style.fontSize = "14px";

    div.append(img, para);
    div4.append(div);
  });

  arr5.forEach((el) => {
    let div = document.createElement("div");
    div.setAttribute("class", "imgDiv");
    div.style.background = "rgb(103,104,111)";
    div.style.margin = "10px 0px";

    let img = document.createElement("img");
    img.src = el.urls.small;
    img.style.width = "100%";

    let para = document.createElement("p");
    para.innerHTML = el.alt_description;
    para.style.padding = "10px 10px";
    para.style.fontSize = "14px";

    div.append(img, para);
    div5.append(div);
  });
}