
let menuOpenBtn = document.querySelector(".burg_menu");
let closeOpenBtn = document.querySelector(".x_menu");
let navLinks = document.querySelector(".dropD_nav");

menuOpenBtn.addEventListener("click", () => {
  navLinks.style.right = "0";
});
closeOpenBtn.addEventListener("click", () => {
  navLinks.style.right = "-100%";
});

navLinks.addEventListener("click", () => {
  navLinks.style.right = "-100%";
});


let aboutMore = document.querySelector(".open-about");
let about = document.querySelector(".about");

aboutMore.addEventListener("click", () => {
  about.classList.toggle("show");
});




// Slider 1
var swiper = new Swiper(".slide-content", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// slider 2
var swiper = new Swiper(".slide-comment", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

//   Filter

let list = document.querySelectorAll(".list li");
let box = document.querySelectorAll(".box");

list.forEach((el) => {
  el.addEventListener("click", (e) => {
    list.forEach((el1) => {
      el1.style.color = "#000";
    })
    e.target.style.color = "#2760A4"
    box.forEach((el2) => {
      el2.style.display = "none";
    })
    document.querySelectorAll(e.target.dataset.color).forEach((el3) => {
      el3.style.display = "flex";
    })
  })
});

// DropDown menu

let menuOpenBtn2 = document.querySelector(".open-menu"); // открыть меню
let closeOpenBtn2 = document.querySelector(".closs-menu"); // закрыть меню
let Drop_down = document.querySelector(".drop_down");


menuOpenBtn2.addEventListener("click", open);
menuOpenBtn2.addEventListener("mouseover", open);

function open(event) {
  Drop_down.style.display = "flex";
}

document.addEventListener("click", function (elem) {
  if (elem.target.classList.contains(".open-menu") || elem.target.classList.contains(".drop_down")) {
    //закрывать при нажатии не на меню
  } else {
    Drop_down.style.display = "none";
  }
});


// Popup Menu
const modalController = ({ modal, btnOpen, btnClose, time = 100 }) => {
  const buttonElems = document.querySelectorAll(btnOpen);
  const modalElem = document.querySelector(modal);

  modalElem.style.cssText = `
    display: flex;
    visibility: hidden;
    opacity: 0;
    transition: opacity ${time}ms ease-in-out;
  `;

  const closeModal = event => {
    const target = event.target;

    if (
      target === modalElem ||
      (btnClose && target.closest(btnClose)) ||
      event.code === 'Escape'
    ) {

      modalElem.style.opacity = 0;

      setTimeout(() => {
        modalElem.style.visibility = 'hidden';
      }, time);

      window.removeEventListener('keydown', closeModal);
    }
  }

  const openModal = () => {
    modalElem.style.visibility = 'visible';
    modalElem.style.opacity = 1;
    window.addEventListener('keydown', closeModal)
  };

  buttonElems.forEach(btn => {
    btn.addEventListener('click', openModal);
  });

  modalElem.addEventListener('click', closeModal);
};

modalController({
  modal: '.modal',
  btnOpen: '.section__button',
  btnClose: '.modal__close',
});
