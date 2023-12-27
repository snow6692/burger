//toggle
const hamburger = document.getElementById("hamburger")
const menu = document.getElementById("menu")
const close = document.getElementById("close")
let close_class = document.querySelectorAll(".close_class")
hamburger.addEventListener("click", function () {
    menu.classList.remove("hidden")
})
close.addEventListener("click", function () {
    menu.classList.add("hidden");
});

//close_class addEventListener
document.addEventListener('keydown', function (e) {
    // console.log(e.key);
    if (e.key === 'Escape') {
        menu.classList.add("hidden")
    }
    //close modal 


});
for (const element of close_class) {
    element.addEventListener("click", function () {
        menu.classList.add("hidden");
    })
}

//tabs_wrap

const tabs = document.querySelectorAll(".tabs_wrap ul li")

const all = document.querySelectorAll(".item_wrap")
const food = document.querySelectorAll(".food")
const snack = document.querySelectorAll(".snack")
const beverage = document.querySelectorAll(".beverage")


tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(tab => {
            tab.classList.remove("active")
        })

        tab.classList.add("active")

        const tabval = tab.getAttribute("data-tabs")

        all.forEach(item => {
            item.style.display = "none"
        })

        if (tabval == "food") {

            food.forEach(item => {
                item.style.display = "block"
            })
        }

        else if (tabval == "snack") {

            snack.forEach(item => {
                item.style.display = "block"
            })
        }

        else if (tabval == "beverage") {

            beverage.forEach(item => {
                item.style.display = "block"

            })
        }
        else {
            all.forEach(item => {
                item.style.display = "block"
            })
        }

    }
    )
})

//send main
const input = document.querySelector("#input")
const btn = document.querySelector("#btn")
const hidden = document.querySelector("#hidden")
//modal
const closeModal = document.querySelector("#closeModal")
const showModal = document.querySelector("#showModal")

btn.addEventListener("click", function () {
    // if (btn.value.includes("@")) {
    //     hidden.classList.add("hidden")
    // }
    // else {
    //     hidden.classList.remove("hidden")
    // }

    let mailFormat = /\S+@\S+\.\S+/;
    if (input.value.match(mailFormat)) {
        //hide the span
        hidden.classList.add("hidden");
        //show modal
        showModal.classList.remove("hidden")
        //close modal
        closeModal.addEventListener("click", function () {
            showModal.classList.add("hidden")
        })
        //close modal
        document.addEventListener('keydown', function (e) {
            // console.log(e.key);
            if (e.key === 'Escape' && !showModal.classList.contains('hidden')) {
                showModal.classList.add("hidden")
            }
            //close modal 


        });



    } else {
        //show
        hidden.classList.remove("hidden");
    }

})


function validateEmail(email) {
    let regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
}

function validateEmail(email) {
    let atPos = email.indexOf("@");
    let dotPos = email.lastIndexOf(".");
    return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

//scroll
const scrollUp = document.querySelector("#scroll-up")
//scroll up
window.addEventListener("scroll", function () {
    if (window.scrollY < 706) {
        scrollUp.classList.add("hidden")
    }
    else {
        scrollUp.classList.remove("hidden")
    }
})
//scroll header

let header = document.getElementById("header");

window.addEventListener("scroll", function () {
    if (this.window.scrollY < 100) {
        header.classList.remove("bg-slate-900")
    }
    else {
        header.classList.add("bg-slate-900")
    }
})

//dark mode


const darkMode = () => {
    body.classList.add("dark:bg-black")
    themeBtn.classList.replace("ri-moon-line", "ri-sun-line")
    localStorage.setItem("mode", "dark")
}

const lightMode = () => {
    body.classList.remove("dark:bg-black")
    themeBtn.classList.replace("ri-sun-line", "ri-moon-line")
    localStorage.setItem("mode", "light")
}

const body = document.querySelector("body")
const themeBtn = document.querySelector("#theme-toggle")
if (localStorage.getItem("mode") == "dark") {
    darkMode()
}
else {
    lightMode()
}
themeBtn.addEventListener("click", function (e) {
    if (localStorage.getItem("mode") == "light") {
        darkMode()
    }
    else {
        lightMode()
    }
})

//acrive link header
const activeLink = () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav__link");

    let current = "home";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;

        if (this.scrollY >= sectionTop - 60) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((item) => {
        item.classList.remove("text-yellow-500");
        if (item.href.includes(current)) {
            item.classList.add("text-yellow-500");
        }
    });
};

window.addEventListener('scroll', activeLink)

//scroll reveal animation

const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2000,
    delay: 400
})

sr.reveal(".home__image");
sr.reveal(".home__content", { origin: "bottom" });

sr.reveal(".category__card", { interval: 300 })

sr.reveal(".promo__card-1", { origin: "left" });
sr.reveal(".promo__card-2", { origin: "right" });

sr.reveal(".about__img", { origin: "bottom" });
sr.reveal(".about__content", { origin: "top" });

sr.reveal(".menu__items", { origin: "left" });

sr.reveal(".customer__review", { origin: "right" });

sr.reveal(".footer");