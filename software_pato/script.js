const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentStep = 1;

// Ocultar el botón "anterior" al principio
prevBtn.classList.add('hidden');

// Cambiar al siguiente paso
nextBtn.addEventListener('click', () => {
  currentStep++;
  carousel.textContent = `Paso ${currentStep}`;
  prevBtn.classList.remove('hidden');

  // Ocultar el botón "siguiente" cuando alcancemos el último paso
  if (currentStep === 3) {
    nextBtn.classList.add('hidden');
  }
});

// Cambiar al paso anterior
prevBtn.addEventListener('click', () => {
  currentStep--;
  carousel.textContent = `Paso ${currentStep}`;
  nextBtn.classList.remove('hidden');

  // Ocultar el botón "anterior" cuando volvamos al primer paso
  if (currentStep === 1) {
    prevBtn.classList.add('hidden');
  }
});

