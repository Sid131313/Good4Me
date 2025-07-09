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
const container = document.querySelector('.me-img'); // получаем элемент с изображениями

  // — Прокрутка колесом мыши (горизонтально)
  container.addEventListener('wheel', (e) => {
    if (e.deltaY !== 0) {         // если пользователь скроллит вертикально
      e.preventDefault();         // предотвращаем стандартную вертикальную прокрутку
      container.scrollLeft += e.deltaY; // прокручиваем контейнер по горизонтали
    }
  });

  // — Переменные для drag-scroll
  let isDown = false;      // нажата ли кнопка мыши
  let startX;              // начальная позиция X при нажатии
  let scrollLeft;          // позиция прокрутки на момент начала drag

  // — Нажатие кнопки мыши
  container.addEventListener('mousedown', (e) => {
    isDown = true;                        // начинаем drag
    container.classList.add('active');   // можно добавить стили (например, cursor: grabbing)
    startX = e.pageX - container.offsetLeft; // получаем координату X относительно контейнера
    scrollLeft = container.scrollLeft;   // сохраняем текущую прокрутку
  });

  // — Отпускание кнопки мыши
  container.addEventListener('mouseup', () => {
    isDown = false;                      // заканчиваем drag
    container.classList.remove('active');
  });

  // — Уход курсора с области
  container.addEventListener('mouseleave', () => {
    isDown = false;                      // отменяем drag, если курсор ушел
    container.classList.remove('active');
  });

  // — Движение мыши
  container.addEventListener('mousemove', (e) => {
    if (!isDown) return; // если кнопка мыши не нажата — ничего не делаем
    e.preventDefault();  // отключаем выделение и другие действия
    const x = e.pageX - container.offsetLeft; // текущая координата X
    const walk = (x - startX) * 1.5; // величина смещения, 1.5 — скорость прокрутки
    container.scrollLeft = scrollLeft - walk; // прокручиваем контейнер
  });