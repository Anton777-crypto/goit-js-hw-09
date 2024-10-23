window.onload = function () {
  alert(
    "Добрый  день на данной странице  есть две кнопки которые перенесут вас  на следющие домашние задания 'Gallery' и  так  же 'Form'"
  );
};

const btn = document.querySelector('.btn_gallery');

btn.addEventListener('click', () => {
  return `<a class="a_gallery" href="./1-gallery.html"> </a>`;
});

const btn_2 = document.querySelector('.btn_form');

btn_2.addEventListener('click', () => {
  return `<a class="a_gallery" href="./2-form.html"> Form</a>`;
});
