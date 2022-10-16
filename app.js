const data = {
    1: {
        src: "z_vln_slunce.jpg",
        title: "Z Vln Slunce, 2022"
    },
    2: {
        src: "beztize.jpg",
        title: "Beztíže, 2022"
    },
    3: {
        src: "svetlo_se_vraci.jpg",
        title: "Světlo Se Vrací, 2022"
    },
    4: {
        src: "pohyb_krouzku.jpg",
        title: "Pohyb Kroužků, 2022"
    },
    5: {
        src: "a_jednou_prijde_den.jpg",
        title: "A Jednou Přijde Den, 2022"
    },
    6: {
        src: "chladny_kruh.jpg",
        title: "Chladný kruh, 2022"
    },
    7: {
        src: "bez_nazvu.jpg",
        title: "Bez Názvu, 2022"
    },
    8: {
        src: "medeny.jpg",
        title: "Měděný, 2021"
    },
    9: {
        src: "otevreni.jpg",
        title: "Otevření, 2021"
    }
}

// extend gallery
const extendBtn = document.getElementById("extendBtn");
const extendBtnText = document.getElementById("extendBtnText");
const extendBtnIcos = document.querySelectorAll(".extendBtnIco");
const extendPics = document.querySelectorAll(".extension");

extendBtn.addEventListener("click", () => {
    extendPics.forEach((pic) => {
        pic.classList.toggle("hidden");
        pic.classList.toggle("shown");
    })
    if (extendBtn.dataset.open == "0") {
        extendBtnText.textContent = "Zabalit";
        extendBtnIcos.forEach((ico) => {
            ico.classList.add("turn");
        });
        extendBtn.dataset.open = "1";
    } else if (extendBtn.dataset.open == "1") {
        extendBtnText.textContent = "Rozbalit další";
        extendBtnIcos.forEach((ico) => {
            ico.classList.remove("turn");
        });
        extendBtn.dataset.open = "0";
    }
});

// modal opening and closing
const imgs = document.querySelectorAll(".img");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalCloseBtn = document.getElementById("modalCloseBtn");

// where we are when opening an image
let imageCounter = 0;

function closeModal() {
    modal.classList.remove("modal-shown");
    modal.classList.add("modal-hidden");
    modalImg.src = "";
}

function openModal(e) {
    modalImg.src = `assets/bigImages/${data[e.target.id]["src"]}`
    modal.classList.add("modal-shown");
    modal.classList.remove("modal-hidden");
}

modalCloseBtn.addEventListener("click", closeModal)

imgs.forEach((img) => {
    img.addEventListener("click", (e) => {
        openModal(e);
    });
});

modal.addEventListener(("click"), (e) => {
    if (e.target.id == "modal") {
        closeModal();
    }
});

// modal left right
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");

function showLeftImage() {
    if (imageCounter == 0) {
        imageCounter = Object.keys(data).length;
        modalImg.src = `assets/bigImages/${data[imageCounter]["src"]}`;
    } else {
        imageCounter--;
        modalImg.src = `assets/bigImages/${data[imageCounter]["src"]}`;
    }
}

function showRightImage() {
    if (imageCounter == Object.keys(data).length) {
        imageCounter = 0;
        modalImg.src = `assets/bigImages/${data[imageCounter]["src"]}`;
    } else {
        imageCounter++;
        modalImg.src = `assets/bigImages/${data[imageCounter]["src"]}`;
    }
}

// moving left/rigth with arrows/mouseclick
leftBtn.addEventListener("click", showLeftImage);
rightBtn.addEventListener("click", showRightImage);

document.addEventListener("keydown", (e) => {
    if (Object.values(modal.classList).includes("modal-shown")) {
        if (e.key == "ArrowLeft") {
            showLeftImage();
        } else if (e.key == "ArrowRight") {
            showRightImage();
        } else if (e.key == "Escape") {
            closeModal();
        }
    }
});

//english - czech
const english = {
    nav1: "About me",
    nav2: "Exhibitions",
    nav2: "Contact"
}

const czech = {
    nav1: "O umělci",
    nav2: "Výstavy",
    nav2: "Kontakt"
}






