(() => {
  const scene = document.querySelector('[data-forja-motion]');
  const canvas = scene.querySelector('canvas');
  const context = canvas.getContext('2d', { alpha: false });
  if (!context) return;

  const columns = 8;
  const frames = 40;
  const { width, height } = canvas;
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const sheet = new Image();
  sheet.decoding = 'async';
  sheet.fetchPriority = 'low';

  let previousFrame = -1;
  let request = 0;
  let ready = false;

  function render() {
    request = 0;
    const bounds = scene.getBoundingClientRect();
    if (bounds.bottom <= 0 || bounds.top >= innerHeight) return;

    const sceneTop = bounds.top + scrollY;
    const start = Math.max(0, sceneTop - innerHeight * 0.78);
    const finish = Math.max(start + 1, sceneTop - Math.max(100, innerHeight * 0.22));
    const progress = Math.min(1, Math.max(0, (scrollY - start) / (finish - start)));
    const frame = Math.round(progress * (frames - 1));

    if (frame !== previousFrame) {
      context.drawImage(
        sheet,
        (frame % columns) * width,
        Math.floor(frame / columns) * height,
        width, height, 0, 0, width, height
      );
      previousFrame = frame;
      scene.style.setProperty('--forja-progress', frame / (frames - 1));
      scene.classList.add('is-motion-ready');
    }
  }

  function requestRender() {
    if (ready && !reducedMotion.matches && !request) {
      request = requestAnimationFrame(render);
    }
  }

  function loadSequence() {
    if (reducedMotion.matches || sheet.getAttribute('src')) return;
    sheet.src = scene.dataset.forjaMotion;
  }

  const observer = new IntersectionObserver(entries => {
    if (!entries.some(entry => entry.isIntersecting)) return;
    observer.disconnect();
    loadSequence();
  }, { rootMargin: '160px' });

  function updatePreference() {
    if (reducedMotion.matches) {
      observer.disconnect();
      cancelAnimationFrame(request);
      request = 0;
      previousFrame = -1;
      scene.classList.remove('is-motion-ready');
      return;
    }
    if (ready) {
      requestRender();
    } else if (!sheet.getAttribute('src')) {
      observer.observe(scene);
    }
  }

  sheet.addEventListener('load', () => {
    ready = sheet.naturalWidth === width * columns &&
      sheet.naturalHeight === height * (frames / columns);
    requestRender();
  });
  addEventListener('scroll', requestRender, { passive: true });
  addEventListener('resize', requestRender);
  document.fonts.ready.then(requestRender);
  reducedMotion.addEventListener('change', updatePreference);
  updatePreference();
})();
