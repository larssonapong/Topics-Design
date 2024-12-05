document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById("burger");
    const navbar = document.getElementById("navbar");
    const navitems = document.getElementById("navitems");
    const navdiv = document.getElementById("navdiv");
    const onglet = document.querySelectorAll(".onglet");
    const ontarget = document.querySelectorAll(".on-target");
    const clear = document.getElementById("clear");
    const search = document.querySelector('input[name="search"]');
    const etiquette = document.querySelectorAll(".etiquette");
    const sect = document.querySelectorAll(".sect");
    const brows = document.querySelectorAll(".brows");
    const workit = document.querySelectorAll(".workit")
    const dropfaq = document.querySelectorAll(".dropfaq");
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

    //changement de couleur des onglets lors du scroll
    window.addEventListener("scroll", () => {
        let rect;
        let rectnav;
        let navh = navbar.offsetHeight;
        sect.forEach((element, i) => {
            rect = element.getBoundingClientRect().top;
            rectnav = rect - navh;
            if (element.id === "home") {
                rectnav = 0;
            }

            if (rectnav <= 0) {
                onglet.forEach(element => {
                    element.classList.remove("active");
                })
                onglet[i].classList.add("active");
            } else {
                onglet[i].classList.remove("active");
            }

        })

    });


    //gestion des ancres
    ontarget.forEach(element => {
        let navh = navbar.offsetHeight;
        element.style.top = `-${navh}px`;
    })

    //Barre de recherche
    // clear.classList.add("hidden");
    clear.style.display = "none";
    search.addEventListener('input', (event) => {
        let saisis = event.target.value
        if (saisis.length > 0) {
            // clear.classList.remove("hidden");
            clear.style.display = "block";
            clear.addEventListener('click', () => {
                event.target.value = '';
                clear.style.display = "none";
            })

        } else {
            clear.style.display = "none";
        }
    })

    //Ajout des couleurs aux etiquettes lors du click
    etiquette[0].classList.add("border-b-second");
    etiquette[0].classList.add("text-second");

    brows.forEach((element) => {
        element.classList.add("hidden");
        element.classList.add("opacity-0");
    })
    brows[0].classList.remove('hidden');
    brows[0].classList.remove('opacity-0');

    etiquette.forEach((element, i) => {

        element.addEventListener("click", () => {
            //couleurs
            etiquette.forEach(element => {
                element.classList.remove("border-b-second");
                element.classList.remove("text-second");

            })
            element.classList.add("border-b-second");
            element.classList.add("text-second");

            // Les etiquettes
            brows.forEach(element => {
                element.classList.add("hidden");
                element.classList.add('opacity-0');
            })
            brows[i].classList.remove("hidden");
            setTimeout(() => {
                brows[i].classList.remove('opacity-0');
            }, 1);
        })

    });

    //Gestion du scroll de la section how it work
    window.addEventListener('scroll', () => {
        let navh = navbar.offsetHeight;
        let wintop = sect[2].getBoundingClientRect().top - navh;
        let charger = charging.parentElement;

        if (wintop <= 0) {
            charging.style.height = `${-wintop}px`;
            // round search
            workit[0].classList.add("bg-second");
            workit[0].firstElementChild.classList.add("bg-second");

            // round bookmark
            if (charging.clientHeight >= ((charger.clientHeight / 2) - workit[1].clientHeight / 2)) {
                workit[1].classList.add("bg-second");
                workit[1].firstElementChild.classList.add("bg-second");
            } else {
                workit[1].classList.remove("bg-second");
                workit[1].firstElementChild.classList.remove("bg-second");
            }

            // round open book
            if (charging.clientHeight >= (charger.clientHeight - workit[2].clientHeight)) {
                workit[2].classList.add("bg-second");
                workit[2].firstElementChild.classList.add("bg-second");
            } else {
                workit[2].classList.remove("bg-second");
                workit[2].firstElementChild.classList.remove("bg-second");
            }
        } else {
            workit[0].classList.remove("bg-second");
            workit[0].firstElementChild.classList.remove("bg-second");
        }


    })

    // Gestion des dropdowns faqs
    dropfaq.forEach((element, i) => {
        let droppage = element.nextElementSibling;
        let droph = 400;
        let chevron = element.lastElementChild;

        if (i === 0) {
            droppage.style.maxHeight = `${droph}px`;
            element.style.backgroundColor = "#E4F1FF";
            element.style.color = "#00557A";
            chevron.style.color = "#418DEB";
        } else {
            droppage.style.maxHeight = "0px";
            element.style.backgroundColor = "transparent";
            element.style.color = "#091514";
            chevron.style.color = "#091514";
            chevron.style.transform = "rotate(180deg)";
        }

        element.addEventListener('click', () => {
            dropfaq.forEach((elm, y) => {
                let droppage2 = elm.nextElementSibling;
                let chevron2 = elm.lastElementChild;
                if (i !== y) {
                    droppage2.style.maxHeight = "0px";
                    elm.style.backgroundColor = "transparent";
                    elm.style.color = "#091514";
                    chevron2.style.color = "#091514";
                    chevron2.style.transform = "rotate(180deg)";
                }
            })

            if (droppage.style.maxHeight === "0px") {
                droppage.style.maxHeight = `${droph}px`;
                element.style.backgroundColor = "#E4F1FF";
                element.style.color = "#00557A";
                chevron.style.color = "#418DEB";
                chevron.style.transform = "rotate(0deg)";
            } else {
                droppage.style.maxHeight = "0px";
                element.style.backgroundColor = "transparent";
                element.style.color = "#091514";
                chevron.style.color = "#091514";
                chevron.style.transform = "rotate(180deg)";
            }
        });

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