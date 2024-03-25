document.addEventListener("DOMContentLoaded", function() {
  const carousel = document.getElementById("carousel");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const indice_guia = document.getElementById('indice-guia');
  const Duck1Btn = document.getElementById("Duck1");
  const Duck2Btn = document.getElementById("Duck2");

  const duckImages = [
    [
      "./imgs/pato1/1_1x.png",
      "./imgs/pato1/2_1x.png",
      "./imgs/pato1/3_1x.png",
      "./imgs/pato1/4_1x.png",
      "./imgs/pato1/5_1x.png",
      "./imgs/pato1/6_1x.png",
      "./imgs/pato1/7_1x.png",
      "./imgs/pato1/8_1x.png",
      "./imgs/pato1/9_1x.png"
    ],
    [
      "./imgs/pato2/1_1x.png",
      "./imgs/pato2/2_1x.png",
      "./imgs/pato2/3_1x.png",
      "./imgs/pato2/4_1x.png",
      "./imgs/pato2/5_1x.png",
      "./imgs/pato2/6_1x.png",
      "./imgs/pato2/7_1x.png",
      "./imgs/pato2/8_1x.png",
      "./imgs/pato2/9_1x.png"
    ]
  ];

  let currentDuckType = 0;
  let currentIndex = 0;

  async function preLoadImages() {
    let imagesToLoad = duckImages.flat();
    let loadPromises = imagesToLoad.map(imageSrc => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = imageSrc;
      });
    });
    await Promise.all(loadPromises); // Espera a que todas las imágenes se carguen.
  }

  function incrementGuideCounter() {
    let indice = +indice_guia.innerHTML;
    indice = indice >= 9 ? 1 : indice + 1;
    indice_guia.innerHTML = indice;
  }

  function decrementGuideCounter() {
    let indice = +indice_guia.innerHTML;
    indice = indice <= 1 ? 9 : indice - 1;
    indice_guia.innerHTML = indice;
  }

  function showSlide(index) {
    carousel.innerHTML = "";
    const img = document.createElement("img");
    img.src = duckImages[currentDuckType][index];
    img.classList.add("w-full", "flex-shrink-0", "border-4", "border-blue-400", "h-full");
    carousel.appendChild(img);
    currentIndex = index;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % duckImages[currentDuckType].length;
    showSlide(currentIndex);
    incrementGuideCounter();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + duckImages[currentDuckType].length) % duckImages[currentDuckType].length;
    showSlide(currentIndex);
    decrementGuideCounter();
  }

  Duck1Btn.addEventListener("click", function() {
    currentDuckType = 0;
    currentIndex = 0;
    showSlide(currentIndex);
    indice_guia.innerHTML = 1; // Reset the guide counter when duck changes
  });

  Duck2Btn.addEventListener("click", function() {
    currentDuckType = 1;
    currentIndex = 0;
    showSlide(currentIndex);
    indice_guia.innerHTML = 1; // Reset the guide counter when duck changes
  });

  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);

  // Carga todas las imágenes antes de habilitar la funcionalidad del carrusel.
  preLoadImages().then(() => {
    showSlide(currentIndex); // Muestra el primer slide solo después de cargar todas las imágenes.
  }).catch(error => {
    console.error("Error loading images", error);
  });
});
