
  const scrollContainer = document.getElementById('scrollContainer');
  const leftBtn = document.querySelector('.scroll-btn.left');
  const rightBtn = document.querySelector('.scroll-btn.right');

  // Function to get the width of one item (including gap)
  function getItemWidth() {
    const item = document.querySelector('.scroll-item');
    const style = getComputedStyle(item);
    const itemWidth = item.offsetWidth;
    const gap = parseInt(style.marginRight || 25);
    return itemWidth + gap;
  }

  leftBtn.addEventListener('click', () => {
    scrollContainer.scrollBy({
      left: -getItemWidth(),
      behavior: 'smooth'
    });
  });

  rightBtn.addEventListener('click', () => {
    scrollContainer.scrollBy({
      left: getItemWidth(),
      behavior: 'smooth'
    });
  });


const menu = document.getElementById("categoryMenu");
  const indicator = menu.querySelector(".menu-indicator");
  const items = menu.querySelectorAll(".category");

  function updateIndicator() {
    const active = menu.querySelector(".category.active");
    if (!active) return;

    const menuRect = menu.getBoundingClientRect();
    const activeRect = active.getBoundingClientRect();

    const left = activeRect.left - menuRect.left;
    const width = activeRect.width;

    indicator.style.setProperty("--left", `${left}px`);
    indicator.style.setProperty("--width", `${width}px`);
  }

  function updateIcons() {
    items.forEach(item => {
      const img = item.querySelector("img");
      const defaultSrc = item.getAttribute("data-default");
      const activeSrc = item.getAttribute("data-active");

      if (item.classList.contains("active")) {
        img.src = activeSrc;
      } else {
        img.src = defaultSrc;
      }
    });
  }

  // Initialize
  window.addEventListener("load", () => {
    updateIcons();
    updateIndicator();
  });
  window.addEventListener("resize", updateIndicator);

  // Handle clicks (for demo/navigation)
  items.forEach(item => {
    item.addEventListener("click", e => {
      items.forEach(i => i.classList.remove("active"));
      item.classList.add("active");
      updateIcons();
      updateIndicator();
    });
  });

