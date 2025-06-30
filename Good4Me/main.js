document.addEventListener("DOMContentLoaded", function() {
  const track = document.querySelector('.reviews__slider-track');  // Трек слайдов, который будет двигаться
  const slides = document.querySelectorAll('.reviews__cart');  // Все слайды
  const leftArrow = document.querySelector('.arrow-left');  // Стрелка влево
  const rightArrow = document.querySelector('.arrow-right');  // Стрелка вправо

  let currentIndex = 0;  // Индекс текущего слайда

  function updateSliderPosition() {
    const slideWidth = slides[0].offsetWidth;  // Ширина одного слайда (берём первый)
    track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;  // Смещаем трек по X
    track.style.transition = 'transform 0.5s ease';  // Добавляем плавность
  }

  rightArrow.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {  // Если не последний слайд
      currentIndex++;  // Переход на следующий
    } else {
      currentIndex = 0;  // Вернуться к первому (для бесконечного эффекта)
    }
    updateSliderPosition();  // Обновить позицию
  });

  leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {  // Если не первый слайд
      currentIndex--;  // Переход к предыдущему
    } else {
      currentIndex = slides.length - 1;  // Переход к последнему (для бесконечного эффекта)
    }
    updateSliderPosition();  // Обновить позицию
  });

  window.addEventListener('resize', updateSliderPosition);  // Обновлять при ресайзе, чтобы ширина пересчиталась
});


  document.addEventListener("DOMContentLoaded", function() {  // Ждём полной загрузки DOM, чтобы элементы уже существовали на странице
  const showMoreButton = document.querySelector(".show-more");  // Находим кнопку "VIEW ALL PRODUCTS" по классу
  const productsAll = document.querySelector(".shop__products-all");  // Находим блок с товарами, который нужно показывать/скрывать

  showMoreButton.addEventListener("click", function() {  // Вешаем обработчик события нажатия на кнопку
    productsAll.classList.toggle("is-visible");  // Добавляем класс is-visible, если его нет, или убираем, если он есть

    if (productsAll.classList.contains("is-visible")) {  // Проверяем, виден ли сейчас блок с товарами
      showMoreButton.textContent = "HIDE PRODUCTS";  // Если виден — меняем текст кнопки на "HIDE PRODUCTS"
    } else {
      showMoreButton.textContent = "VIEW ALL PRODUCTS";  // Если скрыт — возвращаем текст кнопки на "VIEW ALL PRODUCTS"
    }
  });
});