document.addEventListener("DOMContentLoaded", function() {
  const carousel = document.getElementById("carousel");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const indice_guia = document.getElementById('indice-guia');
  const Duck1Btn = document.getElementById("Duck1");
  const Duck2Btn = document.getElementById("Duck2");
  
  // Arreglo de imágenes de los pasos de construcción de cada tipo de pato
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
  
  let currentDuckType = 0; // 0 para Duck1, 1 para Duck2
  let currentIndex = 0;

  // función para pre=cargar las imagenes y no ocurra un parpaedo al switchear de patos o cambiar imagenés.
  function preLoadImages() {
    duckImages.flat().forEach(imgageSrc => {
      const img = new Image();
      img.src = imgageSrc;
    })
  }

  // Función para mostrar el slide actual
  function showSlide(index) {
    carousel.innerHTML = ""; // Limpiar el Carrousel.
    const img = document.createElement("img");
    img.src = duckImages[currentDuckType][index];
    img.classList.add("w-full", "flex-shrink-0", "border-4", "border-blue-400", "h-full");
    carousel.appendChild(img);
    currentIndex = index;
  }

  // Función para avanzar al siguiente slide
  function nextSlide() {
      currentIndex = (currentIndex + 1) % duckImages[currentDuckType].length;
      showSlide(currentIndex);
      incrementGuideCounter();
  }

  // Función para retroceder al slide anterior
  function prevSlide() {
      currentIndex = (currentIndex - 1 + duckImages[currentDuckType].length) % duckImages[currentDuckType].length;
      showSlide(currentIndex);
      decrementGuideCounter();
  }

  // Función para cambiar al tipo de pato Duck1
  Duck1Btn.addEventListener("click", function() {
      currentDuckType = 0;
      currentIndex = 0;
      showSlide(currentIndex);
  });

  // Función para cambiar al tipo de pato Duck2
  Duck2Btn.addEventListener("click", function() {
      currentDuckType = 1;
      currentIndex = 0;
      showSlide(currentIndex);
  });

  // Event listeners para los botones de control
  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);

  // Mostrar el primer slide al cargar la página
  showSlide(currentIndex);

  // llamamos la función para precargar imagenés al cargar nuestra página.
  preLoadImages();
});
