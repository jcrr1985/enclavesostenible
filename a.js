// let fetchWrapper = document.querySelector("#fetchWrapper");

// function ruser() {
//     let names;
//     let picture = document.createElement('IMG');
//     let h3 = document.createElement('h3');
//     let picUrl;
//     picture.style.borderRadius = 30 + "px";



//     fetch('https://randomuser.me/api/').then(r => r.json()).then(r => {
//         names = r.results['0'].name.first;
//         picUrl = r.results['0'].picture.medium;

//         picture.setAttribute("src", picUrl);
//         h3.innerHTML = names;

//         while (fetchWrapper.lastElementChild) {
//             fetchWrapper.removeChild(fetchWrapper.lastElementChild)
//         }

//         fetchWrapper.appendChild(picture);
//         fetchWrapper.appendChild(h3);
//     });
// }



// ruser();




// document.querySelector("#fetch-btn").onclick = function() {
//     ruser();
// };


// var console = document.getElementById("console");

// var showLeftPos = document.getElementById("show").getBoundingClientRect().left;

// console.innerHTML = showLeftPos + " " + "px";


var s2 = document.querySelector("#section2");

setTimeout(() => {
    s2.classList.add("up");
}, 2000);