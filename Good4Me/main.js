document.addEventListener("DOMContentLoaded", function () {
    // Находим элементы: лента слайдов, отдельные слайды и кнопки стрелок
    const track = document.querySelector('.reviews__slider-track');
    const slides = document.querySelectorAll('.reviews__cart');
    const btnLeft = document.querySelector('.arrow-left');
    const btnRight = document.querySelector('.arrow-right');

    const slideCount = slides.length; // Общее количество слайдов
    let currentIndex = 0;             // Индекс текущего активного слайда

    // Функция обновления положения ленты слайдов
    function updateSlider() {
      const offset = -currentIndex * 100;                   // Вычисляем сдвиг: -100%, -200% и т.д.
      track.style.transform = `translateX(${offset}%)`;     // Сдвигаем ленту слайдов влево
    }

    // Обработчик кнопки "влево"
    btnLeft.addEventListener('click', () => {
      currentIndex--;                        // Уменьшаем индекс
      if (currentIndex < 0) {                // Если дошли до начала — переходим к последнему слайду
        currentIndex = slideCount - 1;
      }
      updateSlider();                        // Обновляем позицию ленты
    });

    // Обработчик кнопки "вправо"
    btnRight.addEventListener('click', () => {
      currentIndex++;                        // Увеличиваем индекс
      if (currentIndex >= slideCount) {      // Если вышли за последний — переходим к первому
        currentIndex = 0;
      }
      updateSlider();                        // Обновляем позицию ленты
    });

    // Автоматическая прокрутка (опционально)
    /* setInterval(() => {
      currentIndex = (currentIndex + 1) % slideCount;  // Бесконечно по кругу
      updateSlider();
    }, 5000); */ // каждые 5 секунд
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
  