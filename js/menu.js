(() => {
  const refs = {
    MenuBtn: document.querySelector("[data-menu-click]"),
    menu: document.querySelector("[data-menu]"),
  };

  refs.MenuBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.MenuBtn.classList.toggle("is-open");
    refs.menu.classList.toggle("is-open");
  }
})();
