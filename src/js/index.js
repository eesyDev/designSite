// import bootstrap from 'bootstrap';
import '../scss/style.scss';

document.querySelector(".js-show-search").addEventListener("click", function() {
    let window_w = window.innerWidth;
    let search_block = document.querySelector(".header__search");
    let search_form = document.querySelector(".header__search-form");
    let search_field_width = 0;
  
    // if (window_w > 1024) {
    //   search_field_width = window_w - (window_w - this.offsetLeft) * 2;
    //   console.log(search_field_width)
    //   console.log(this.offsetLeft)

    // } else {
    //   search_field_width = document.querySelector(".header__menu-list").offsetWidth - 20;
    //   console.log(this.offsetLeft + 'else')
    // }
    search_field_width = document.querySelector(".header__menu-list").offsetWidth - 20;
    if (search_block.classList.contains("is-show")) {
      search_block.classList.remove("is-show");
      document.querySelector(".header__menu-list").classList.remove("is-hide");
    } else {
      search_form.style.width = search_field_width + "px";
      document.querySelector(".header__menu-list").classList.add("is-hide");
      search_block.classList.add("is-show");
  
      setTimeout(function() {
        search_block.querySelector(".header__search-field").focus();
      }, 50);
    }
  });
  