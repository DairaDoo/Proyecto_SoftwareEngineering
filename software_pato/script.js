// const carousel = document.getElementById('carousel');
// const prevBtn = document.getElementById('prevBtn');
// const nextBtn = document.getElementById('nextBtn');

// let currentStep = 1;

// // Ocultar el botón "anterior" al principio
// prevBtn.classList.add('hidden');

// // Cambiar al siguiente paso
// nextBtn.addEventListener('click', () => {
//   currentStep++;
//   carousel.textContent = `Paso ${currentStep}`;
//   prevBtn.classList.remove('hidden');

//   // Ocultar el botón "siguiente" cuando alcancemos el último paso
//   if (currentStep === 3) {
//     nextBtn.classList.add('hidden');
//   }
// });

// // Cambiar al paso anterior
// prevBtn.addEventListener('click', () => {
//   currentStep--;
//   carousel.textContent = `Paso ${currentStep}`;
//   nextBtn.classList.remove('hidden');

//   // Ocultar el botón "anterior" cuando volvamos al primer paso
//   if (currentStep === 1) {
//     prevBtn.classList.add('hidden');
//   }
// });

// const slides = [ {

// }]

document.addEventListener("DOMContentLoaded", function() {
  const carousel = document.getElementById("carousel");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const slides = carousel.querySelectorAll("img");
  const indice_guia = document.getElementById('indice-guia');
  let currentIndex = 0;

  // Función para mostrar el slide actual
  function showSlide(index) {
      slides.forEach((slide, i) => {
          slide.style.transform = `translateX(-${index * 100}%)`;
      });
      currentIndex = index;
  }

  // Función para avanzar al siguiente slide
  function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
      incrementGuideCounter();  
      
  }

  function incrementGuideCounter() {
    indice = +indice_guia.innerHTML;

    if (indice >= 9) {
        indice = 0;
    }

    indice_guia.innerHTML = indice + 1;
  }

  function decrementGuideCounter() {
    indice = +indice_guia.innerHTML;

    if (indice <= 1) {
        indice = 10;
    }

    indice_guia.innerHTML = indice - 1;
  }

  // Función para retroceder al slide anterior
  function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
      decrementGuideCounter()
  }

  // Event listeners para los botones de control
  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);


  // Mostrar el primer slide al cargar la página
  showSlide(currentIndex);
});

