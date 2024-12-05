document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById("burger");
    const navbar = document.getElementById("navbar");
    const navitems = document.getElementById("navitems");
    const navdiv = document.getElementById("navdiv");
    const langbtn = document.querySelector('.langbtn');
    const lang = document.querySelectorAll(".lang");
    let isOpen = false;

    //Scroll de la navbar
    if (window.scrollY > 50) {
        navbar.classList.remove("mm:bg-transparent");
    } else {
        navbar.classList.add("mm:bg-transparent");
    }
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.remove("mm:bg-transparent");

            // navbar.style.backgroundColor = "#5BD2C9";
        } else {
            navbar.classList.add("mm:bg-transparent");
            // navbar.style.backgroundColor = "transparent";
        }
    })

    //Bouton burger et menu
    burger.addEventListener('click', () => {
        let span1 = burger.children[0];
        let span2 = burger.children[1];
        let span3 = burger.children[2];
        let span1class = ["translate-y-[6px]", "ss:translate-y-[8px]"];
        let span3class = ["-translate-y-[6px]", "ss:-translate-y-[8px]"];
        let navclass = ["max-h-[235px]", "sm:max-h-[270px]", "md:max-h-[320px]", "pb-3"];
        let navclassdiv = ["h-[235px]", "ss:h-[245px]", "md:h-[320px]", "sm:h-[270px]", "md:pb-3"];

        if (!isOpen) {
            span2.classList.add("opacity-0");

            span1class.forEach(element => {
                span1.classList.add(element);
            })

            span3class.forEach(element => {
                span3.classList.add(element);
            })

            setTimeout(() => {
                span1.classList.add("rotate-45");
                span3.classList.add("-rotate-45");
            }, 300);

            navclass.forEach(element => {
                navitems.classList.add(element);
            })

            navclassdiv.forEach(element => {
                navdiv.classList.add(element);
            })
            isOpen = true;
        } else {
            span1.classList.remove("rotate-45");
            span3.classList.remove("-rotate-45");

            setTimeout(() => {
                span1class.forEach(element => {
                    span1.classList.remove(element);
                })

                span3class.forEach(element => {
                    span3.classList.remove(element);
                })
                span2.classList.remove("opacity-0");
            }, 300);

            navclass.forEach(element => {
                navitems.classList.remove(element);
            })

            navclassdiv.forEach(element => {
                navdiv.classList.remove(element);
            })
            isOpen = false;
        }

        //Fermeture du menu au click d'un onglet
        let onglet = document.getElementsByClassName("onglet");
        for (let i = 0; i < onglet.length; i++) {
            onglet[i].addEventListener('click', () => {
                span1.classList.remove("rotate-45");
                span3.classList.remove("-rotate-45");

                setTimeout(() => {
                    span1class.forEach(element => {
                        span1.classList.remove(element);
                    })

                    span3class.forEach(element => {
                        span3.classList.remove(element);
                    })
                    span2.classList.remove("opacity-0");
                }, 300);

                navclass.forEach(element => {
                    navitems.classList.remove(element);
                })

                navclassdiv.forEach(element => {
                    navdiv.classList.remove(element);
                })
                isOpen = false;
            })
        }
    });

    //Gestion de bouton de langues
    langbtn.nextElementSibling.classList.toggle("hidden");
    langbtn.addEventListener('click', ()=>{
        langbtn.nextElementSibling.classList.toggle("hidden");
    })

    lang.forEach(element =>{
        element.addEventListener('click', ()=>{
            let langon = langbtn.children[0].innerHTML;

            langbtn.nextElementSibling.classList.toggle("hidden");
            langbtn.children[0].innerHTML = element.textContent;
            element.textContent = langon;
        })
    })
});