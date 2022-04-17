// console.log("Pershendetje");

let result = { firstName: "Erolinda", lastName: "Kajtazi" };

let firstName = result.firstName;
let lastName = result.lastName;

let fullName = firstName + " " + lastName

let dbFullName;

// console.log(fullName);

// let header = document.getElementsByClassName("open-nav");

let header = document.querySelector(".hero-description .primary-header");

header.addEventListener("mouseover", function () {
    header.textContent = "Pershendetje nga PBCA";
    header.style.backgroundColor = "#ffff00";
    header.style.padding = "2rem";
    dbFullName = header.textContent;
    console.log(dbFullName);
});

//Responsive navbar
let navButton = document.querySelector(".mobile-nav");
let navHeader = document.querySelector("#header");

console.log(navButton);
console.log(navHeader);

navButton.addEventListener("click", function () {
    navHeader.classList.toggle("open-nav");
});

// Current Year
let year = document.querySelector(".year");
let currentYear = new Date().getFullYear();
year.textContent = currentYear;


// Button (link) rotating
let btn =document.querySelector(".btn.btn-primary.mr-sm");

let btnRotate =document.querySelector(".btn-rotate");
console.log(btn);
console.log(btnRotate);
btn.addEventListener("click", function() {
    btnRotate.classList.toggle("btn-rotate");
});
