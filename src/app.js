/**
 * VOXEL Mobile — Pure Vanilla JS Storefront, 3D Physics Engine & Telegram Bot Integration
 */

// Telegram Bot Configuration (provided by user)
const TELEGRAM_BOT_TOKEN = '9137724398:AAGnAQQKw7vqsTZYMJkhOb6u7bH9Wfv9mm8';
const TELEGRAM_CHANNEL_ID = '-1003823343684';
const USD_TO_UZS = 12800;

const STORAGE_CART_KEY = 'voxel_mobile_cart_v1';
const STORAGE_ORDERS_KEY = 'voxel_mobile_orders_v1';

// Smartphone Catalog Data (using generated high-fidelity studio photography)
const PRODUCTS = [
  {
    id: 'iphone-16-pro-max',
    brand: 'Apple',
    category: 'Apple',
    name: 'iPhone 16 Pro Max',
    shortName: '16 Pro Max',
    tagline: 'Grade 5 titan korpus, A18 Pro chipi va 5x optik zumli Pro kamera tizimi.',
    priceUsd: 1390,
    image: '/src/assets/images/phone_titanium_pro_1795170842888.jpg',
    accentHex: '#e0b579',
    accentRgb: '224, 181, 121',
    featured: true,
    specs: {
      chip: 'Apple A18 Pro (3nm)',
      display: '6.9" Super Retina XDR 120Hz',
      camera: '48 MP + 48 MP + 12 MP (5x)',
      battery: '4685 mAh · MagSafe 25W',
    },
    colors: [
      { name: 'Sahro Titanium', hex: '#d4b483', rgb: '224, 181, 121' },
      { name: 'Tabiiy Titanium', hex: '#9c9890', rgb: '176, 172, 164' },
      { name: 'Qora Titanium', hex: '#2e3138', rgb: '120, 130, 152' },
    ],
    storages: [
      { label: '256 GB', deltaUsd: 0 },
      { label: '512 GB', deltaUsd: 180 },
      { label: '1 TB', deltaUsd: 360 },
    ],
  },
  {
    id: 'galaxy-s25-ultra',
    brand: 'Samsung',
    category: 'Samsung',
    name: 'Galaxy S25 Ultra',
    shortName: 'S25 Ultra',
    tagline: 'O\'rnatilgan S Pen, 200 MP tungi optika va Snapdragon 8 Elite quvvati.',
    priceUsd: 1290,
    image: '/src/assets/images/phone_ultra_cobalt_1795170842772.jpg',
    accentHex: '#4f86f7',
    accentRgb: '79, 134, 247',
    featured: true,
    specs: {
      chip: 'Snapdragon 8 Elite',
      display: '6.9" Dynamic AMOLED 2X',
      camera: '200 MP Quad Telephoto',
      battery: '5000 mAh · 45W Tez quvvat',
    },
    colors: [
      { name: 'Kobalt Titanium', hex: '#3964b8', rgb: '79, 134, 247' },
      { name: 'Kumush Titanium', hex: '#a9b2c1', rgb: '169, 178, 193' },
      { name: 'Qora Obsidian', hex: '#252932', rgb: '115, 130, 160' },
    ],
    storages: [
      { label: '256 GB', deltaUsd: 0 },
      { label: '512 GB', deltaUsd: 140 },
      { label: '1 TB', deltaUsd: 300 },
    ],
  },
  {
    id: 'galaxy-z-fold-6',
    brand: 'Samsung',
    category: 'Bukiluvchi',
    name: 'Galaxy Z Fold 6',
    shortName: 'Z Fold 6',
    tagline: '7.6 dyuymli bukiluvchi ichki ekran va ikki qatlamli mustahkam titan ilgak.',
    priceUsd: 1620,
    image: '/src/assets/images/phone_fold_architect_1795170845517.jpg',
    accentHex: '#60a5fa',
    accentRgb: '96, 165, 250',
    featured: true,
    specs: {
      chip: 'Snapdragon 8 Gen 3',
      display: '7.6" Foldable AMOLED 120Hz',
      camera: '50 MP OIS + 12 MP + 10 MP',
      battery: '4400 mAh · Simsiz quvvat',
    },
    colors: [
      { name: 'Titan Kumush', hex: '#9aa4b4', rgb: '154, 164, 180' },
      { name: 'To\'q Ko\'k', hex: '#2f4b86', rgb: '96, 165, 250' },
      { name: 'Qora Mat', hex: '#2b2f38', rgb: '130, 140, 160' },
    ],
    storages: [
      { label: '256 GB', deltaUsd: 0 },
      { label: '512 GB', deltaUsd: 150 },
      { label: '1 TB', deltaUsd: 320 },
    ],
  },
  {
    id: 'xiaomi-15-ultra',
    brand: 'Xiaomi',
    category: 'Xiaomi',
    name: 'Xiaomi 15 Ultra',
    shortName: '15 Ultra',
    tagline: '1 dyuymli Summilux optik kamera, eko-charm orqa panel va 90W HyperCharge.',
    priceUsd: 1120,
    image: '/src/assets/images/phone_camera_flagship_1795170854461.jpg',
    accentHex: '#cbd5e1',
    accentRgb: '203, 213, 225',
    featured: false,
    specs: {
      chip: 'Snapdragon 8 Elite',
      display: '6.73" LTPO AMOLED 3200 nit',
      camera: '50 MP 1" + 200 MP Periskop',
      battery: '5410 mAh · 90W HyperCharge',
    },
    colors: [
      { name: 'Obsidian Charm', hex: '#2f333b', rgb: '203, 213, 225' },
      { name: 'Kumush Xrom', hex: '#b4bcc8', rgb: '180, 188, 200' },
    ],
    storages: [
      { label: '256 GB', deltaUsd: 0 },
      { label: '512 GB', deltaUsd: 110 },
      { label: '1 TB', deltaUsd: 240 },
    ],
  },
  {
    id: 'pixel-9-pro-xl',
    brand: 'Google',
    category: 'Google',
    name: 'Google Pixel 9 Pro XL',
    shortName: 'Pixel 9 Pro',
    tagline: 'Toza Android tajribasi, Tensor G4 protsessori va tabiiy rangli portret kamerasi.',
    priceUsd: 1050,
    image: '/src/assets/images/phone_emerald_bar_1795170841753.jpg',
    accentHex: '#34d399',
    accentRgb: '52, 211, 153',
    featured: false,
    specs: {
      chip: 'Google Tensor G4',
      display: '6.8" Super Actua OLED',
      camera: '50 MP + 48 MP + 48 MP (5x)',
      battery: '5060 mAh · 37W Tez quvvat',
    },
    colors: [
      { name: 'Zumrad Yashil', hex: '#2d6b52', rgb: '52, 211, 153' },
      { name: 'Obsidian', hex: '#2a2d34', rgb: '132, 145, 165' },
      { name: 'Chinni Oq', hex: '#d8d5ce', rgb: '216, 213, 206' },
    ],
    storages: [
      { label: '256 GB', deltaUsd: 0 },
      { label: '512 GB', deltaUsd: 130 },
      { label: '1 TB', deltaUsd: 260 },
    ],
  },
  {
    id: 'oneplus-13',
    brand: 'OnePlus',
    category: 'OnePlus',
    name: 'OnePlus 13',
    shortName: 'OnePlus 13',
    tagline: '6000 mAh kremniy-uglerod batareya, 100W SUPERVOOC va silliq sapfir dizayn.',
    priceUsd: 890,
    image: '/src/assets/images/phone_sapphire_edge_1795170842240.jpg',
    accentHex: '#38bdf8',
    accentRgb: '56, 189, 248',
    featured: false,
    specs: {
      chip: 'Snapdragon 8 Elite',
      display: '6.82" 2K ProXDR 120Hz',
      camera: '50 MP Triple Hasselblad',
      battery: '6000 mAh · 100W SUPERVOOC',
    },
    colors: [
      { name: 'Sapfir Tun', hex: '#274775', rgb: '56, 189, 248' },
      { name: 'Qutb Oqi', hex: '#cfd8e3', rgb: '207, 216, 227' },
    ],
    storages: [
      { label: '256 GB', deltaUsd: 0 },
      { label: '512 GB', deltaUsd: 100 },
      { label: '1 TB', deltaUsd: 220 },
    ],
  },
];

const CATEGORIES = ['Barchasi', 'Apple', 'Samsung', 'Xiaomi', 'Google', 'OnePlus', 'Bukiluvchi'];

// Application State
const state = {
  activeHeroId: PRODUCTS[0].id,
  activeCategory: 'Barchasi',
  searchQuery: '',
  sortBy: 'featured',
  cart: loadFromStorage(STORAGE_CART_KEY, []),
  orders: loadFromStorage(STORAGE_ORDERS_KEY, []),
  studio: {
    productId: null,
    colorIndex: 0,
    storageIndex: 0,
    rotX: 6,
    rotY: -12,
    targetX: 6,
    targetY: -12,
    zoom: 1,
    autoSpin: false,
    isDragging: false,
    lastPointerX: 0,
    lastPointerY: 0,
  },
  hero3d: {
    autoOrbit: !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    isDragging: false,
    rotX: 5,
    rotY: -10,
    targetX: 5,
    targetY: -10,
    lastPointerX: 0,
    lastPointerY: 0,
    time: 0,
  },
  checkoutItemsOverride: null,
};

// Utility Functions
function loadFromStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function saveToStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage unavailable in private contexts
  }
}

function formatUsd(amount) {
  return '$' + Math.round(amount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

function formatUzs(usdAmount) {
  const uzs = Math.round(usdAmount * USD_TO_UZS);
  return uzs.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + " so'm";
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];
}

function showToast(message) {
  const region = document.getElementById('toast-region');
  if (!region) return;
  const el = document.createElement('div');
  el.className = 'toast-item';
  el.textContent = message;
  region.appendChild(el);
  window.setTimeout(() => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(8px)';
    el.style.transition = 'opacity 180ms ease, transform 180ms ease';
    window.setTimeout(() => el.remove(), 200);
  }, 2600);
}

// ==========================================================================
// 1. HERO 3D STAGE & PHYSICS ENGINE
// ==========================================================================

function renderHeroSwitcher() {
  const switcher = document.getElementById('hero-switcher');
  if (!switcher) return;
  const featuredProducts = PRODUCTS.filter((p) => p.featured);
  switcher.innerHTML = featuredProducts
    .map((p) => {
      const active = p.id === state.activeHeroId;
      return `
        <button
          type="button"
          class="switcher-btn ${active ? 'is-active' : ''}"
          role="tab"
          aria-selected="${active}"
          data-hero-id="${p.id}"
        >
          <span class="switcher-swatch" style="background:${p.accentHex}"></span>
          <span>${p.shortName}</span>
        </button>
      `;
    })
    .join('');

  switcher.querySelectorAll('.switcher-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-hero-id');
      if (id && id !== state.activeHeroId) {
        selectHeroProduct(id);
      }
    });
  });
}

function selectHeroProduct(productId) {
  const product = getProductById(productId);
  state.activeHeroId = product.id;

  // Update dynamic CSS accent glow
  document.documentElement.style.setProperty('--stage-accent', product.accentHex);
  document.documentElement.style.setProperty('--stage-accent-rgb', product.accentRgb);

  const rig = document.getElementById('hero-3d-rig');
  const img = document.getElementById('hero-phone-img');
  const brand = document.getElementById('hero-phone-brand');
  const name = document.getElementById('hero-phone-name');
  const price = document.getElementById('hero-phone-price');

  if (rig) {
    rig.classList.add('is-switching');
    state.hero3d.targetY += 26;
    window.setTimeout(() => {
      state.hero3d.targetY = -10;
      rig.classList.remove('is-switching');
    }, 360);
  }

  if (img) {
    img.style.opacity = '0.25';
    window.setTimeout(() => {
      img.src = product.image;
      img.alt = `${product.name} — ${product.colors[0].name}`;
      img.style.opacity = '1';
    }, 120);
  }
  if (brand) brand.textContent = `${product.brand} · ${product.specs.chip}`;
  if (name) name.textContent = product.name;
  if (price) price.textContent = formatUsd(product.priceUsd);

  renderHeroSwitcher();
}

function initHero3DStage() {
  const viewport = document.getElementById('hero-3d-viewport');
  const rig = document.getElementById('hero-3d-rig');
  const glare = document.getElementById('hero-phone-glare');
  const shadow = document.getElementById('hero-3d-shadow');
  const orbitBtn = document.getElementById('hero-orbit-toggle');
  const inspectBtn = document.getElementById('hero-inspect-btn');
  const quickBuyBtn = document.getElementById('hero-quick-buy');

  if (!viewport || !rig) return;

  selectHeroProduct(state.activeHeroId);

  const updateOrbitLabel = () => {
    if (!orbitBtn) return;
    orbitBtn.setAttribute('aria-pressed', String(state.hero3d.autoOrbit));
    orbitBtn.textContent = state.hero3d.autoOrbit ? 'Avto 3D: Yoqilgan' : "Avto 3D: O'chirilgan";
  };
  updateOrbitLabel();

  if (orbitBtn) {
    orbitBtn.addEventListener('click', () => {
      state.hero3d.autoOrbit = !state.hero3d.autoOrbit;
      updateOrbitLabel();
    });
  }

  if (inspectBtn) {
    inspectBtn.addEventListener('click', () => openStudioModal(state.activeHeroId));
  }

  if (quickBuyBtn) {
    quickBuyBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const prod = getProductById(state.activeHeroId);
      openCheckoutForSingleItem(prod, 0, 0);
    });
  }

  // Pointer drag + hover parallax for 3D rotation
  viewport.addEventListener('pointerdown', (e) => {
    if (e.target.closest('button')) return;
    state.hero3d.isDragging = true;
    state.hero3d.lastPointerX = e.clientX;
    state.hero3d.lastPointerY = e.clientY;
    viewport.setPointerCapture(e.pointerId);
  });

  viewport.addEventListener('pointermove', (e) => {
    const rect = viewport.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width;
    const ny = (e.clientY - rect.top) / rect.height;

    if (glare) {
      glare.style.setProperty('--glare-x', `${Math.round(nx * 100)}%`);
      glare.style.setProperty('--glare-y', `${Math.round(ny * 100)}%`);
    }

    if (state.hero3d.isDragging) {
      const dx = e.clientX - state.hero3d.lastPointerX;
      const dy = e.clientY - state.hero3d.lastPointerY;
      state.hero3d.lastPointerX = e.clientX;
      state.hero3d.lastPointerY = e.clientY;
      state.hero3d.targetY = Math.max(-42, Math.min(42, state.hero3d.targetY + dx * 0.45));
      state.hero3d.targetX = Math.max(-28, Math.min(28, state.hero3d.targetX - dy * 0.35));
    } else if (!state.hero3d.autoOrbit) {
      state.hero3d.targetY = (nx - 0.5) * 26;
      state.hero3d.targetX = (0.5 - ny) * 18;
    }
  });

  const endHeroDrag = () => {
    state.hero3d.isDragging = false;
  };
  viewport.addEventListener('pointerup', endHeroDrag);
  viewport.addEventListener('pointercancel', endHeroDrag);

  // Smooth 60fps spring animation loop for both Hero 3D & Studio 3D
  function tickAnimation() {
    // Hero 3D
    if (!state.hero3d.isDragging && state.hero3d.autoOrbit) {
      state.hero3d.time += 0.016;
      state.hero3d.targetY = Math.sin(state.hero3d.time * 0.9) * 16;
      state.hero3d.targetX = Math.cos(state.hero3d.time * 0.7) * 7 + 3;
    }

    state.hero3d.rotX += (state.hero3d.targetX - state.hero3d.rotX) * 0.09;
    state.hero3d.rotY += (state.hero3d.targetY - state.hero3d.rotY) * 0.09;

    const floatY = state.hero3d.autoOrbit ? Math.sin(state.hero3d.time * 1.4) * 5 : 0;
    rig.style.transform = `translateY(${floatY.toFixed(2)}px) rotateX(${state.hero3d.rotX.toFixed(2)}deg) rotateY(${state.hero3d.rotY.toFixed(2)}deg)`;

    if (shadow) {
      const shadowShiftX = -state.hero3d.rotY * 0.9;
      const shadowScale = 1 - Math.abs(floatY) * 0.01;
      shadow.style.transform = `translateX(${shadowShiftX.toFixed(1)}px) scale(${shadowScale.toFixed(3)})`;
    }

    // Studio Modal 3D (only active when modal is open)
    if (state.studio.productId) {
      const studioRig = document.getElementById('studio-3d-rig');
      const readout = document.getElementById('studio-angle-readout');
      if (state.studio.autoSpin && !state.studio.isDragging) {
        state.studio.targetY += 0.65;
        if (state.studio.targetY > 52) {
          state.studio.targetY = -52;
        }
      }
      state.studio.rotX += (state.studio.targetX - state.studio.rotX) * 0.12;
      state.studio.rotY += (state.studio.targetY - state.studio.rotY) * 0.12;

      if (studioRig) {
        studioRig.style.transform = `scale(${state.studio.zoom.toFixed(3)}) rotateX(${state.studio.rotX.toFixed(2)}deg) rotateY(${state.studio.rotY.toFixed(2)}deg)`;
      }
      if (readout) {
        readout.textContent = `3D Burchak: X ${Math.round(state.studio.rotX)}° · Y ${Math.round(state.studio.rotY)}°`;
      }
    }

    window.requestAnimationFrame(tickAnimation);
  }

  window.requestAnimationFrame(tickAnimation);
}

// ==========================================================================
// 2. CATALOG, FILTERS & 3D TILT PRODUCT CARDS
// ==========================================================================

function renderCategoryFilters() {
  const filterBar = document.getElementById('filter-bar');
  if (!filterBar) return;

  filterBar.innerHTML = CATEGORIES.map((cat) => {
    const active = cat === state.activeCategory;
    return `
      <button
        type="button"
        class="filter-btn ${active ? 'is-active' : ''}"
        role="tab"
        aria-selected="${active}"
        data-category="${cat}"
      >
        ${cat}
      </button>
    `;
  }).join('');

  filterBar.querySelectorAll('.filter-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.activeCategory = btn.getAttribute('data-category') || 'Barchasi';
      renderCategoryFilters();
      renderCatalog();
    });
  });
}

function getFilteredProducts() {
  const q = state.searchQuery.trim().toLowerCase();
  let list = PRODUCTS.filter((p) => {
    const matchCategory =
      state.activeCategory === 'Barchasi' ||
      p.category === state.activeCategory ||
      p.brand === state.activeCategory;
    const matchQuery =
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.specs.chip.toLowerCase().includes(q) ||
      p.tagline.toLowerCase().includes(q);
    return matchCategory && matchQuery;
  });

  if (state.sortBy === 'price-asc') {
    list = [...list].sort((a, b) => a.priceUsd - b.priceUsd);
  } else if (state.sortBy === 'price-desc') {
    list = [...list].sort((a, b) => b.priceUsd - a.priceUsd);
  }
  return list;
}

function attachCard3DTilt(sceneEl) {
  const card = sceneEl.querySelector('.product-card');
  if (!card) return;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion) return;

  card.addEventListener('pointermove', (e) => {
    if (e.pointerType === 'touch') return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = x / rect.width;
    const py = y / rect.height;

    const rotateY = (px - 0.5) * 14;
    const rotateX = (0.5 - py) * 12;

    card.style.transition = 'border-color 220ms ease, box-shadow 220ms ease';
    card.style.transform = `rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
    card.style.setProperty('--mx', `${Math.round(px * 100)}%`);
    card.style.setProperty('--my', `${Math.round(py * 100)}%`);
  });

  card.addEventListener('pointerleave', () => {
    card.style.transition = 'transform 420ms cubic-bezier(0.16, 1, 0.3, 1), border-color 220ms ease, box-shadow 220ms ease';
    card.style.transform = 'rotateX(0deg) rotateY(0deg) translateY(0px)';
  });
}

function renderCatalog() {
  const grid = document.getElementById('product-grid');
  const emptyEl = document.getElementById('catalog-empty');
  if (!grid || !emptyEl) return;

  const items = getFilteredProducts();
  if (items.length === 0) {
    grid.innerHTML = '';
    emptyEl.hidden = false;
    return;
  }

  emptyEl.hidden = true;
  grid.innerHTML = items
    .map((p) => {
      const swatches = p.colors
        .map(
          (c) =>
            `<span class="swatch-dot" style="background:${c.hex}" title="${escapeHtml(c.name)}"></span>`
        )
        .join('');

      return `
        <div class="product-card-scene" data-product-id="${p.id}">
          <article class="product-card" style="--card-accent-rgb: ${p.accentRgb}">
            <div class="card-media-stage" data-open-studio="${p.id}">
              <div class="card-ambient-glow" aria-hidden="true"></div>
              <img
                src="${p.image}"
                alt="${escapeHtml(p.name)} — ${escapeHtml(p.colors[0].name)}"
                class="card-phone-img"
                loading="lazy"
                referrerpolicy="no-referrer"
              />
              <div class="card-glare" aria-hidden="true"></div>
              <span class="card-3d-cue">3D Ko'rish</span>
            </div>

            <div class="card-body">
              <div class="card-meta-line">
                <span>${escapeHtml(p.brand)}</span>
                <span aria-hidden="true">·</span>
                <span>${escapeHtml(p.specs.chip)}</span>
              </div>

              <div class="card-title-row">
                <h3 class="card-title" data-open-studio="${p.id}">${escapeHtml(p.name)}</h3>
                <div class="card-swatches" aria-label="Mavjud ranglar">${swatches}</div>
              </div>

              <p class="card-summary">${escapeHtml(p.tagline)}</p>

              <div class="card-price-block">
                <span class="card-price-usd">${formatUsd(p.priceUsd)}</span>
                <span class="card-price-uzs">${formatUzs(p.priceUsd)}</span>
              </div>

              <div class="card-actions">
                <button type="button" class="btn-secondary" data-open-studio="${p.id}">3D Ko'rish</button>
                <button type="button" class="btn-primary" data-quick-add="${p.id}">Savatga</button>
              </div>
            </div>
          </article>
        </div>
      `;
    })
    .join('');

  // Bind 3D tilt, image fallbacks, and button actions
  grid.querySelectorAll('.product-card-scene').forEach((scene) => {
    attachCard3DTilt(scene);
  });

  grid.querySelectorAll('img.card-phone-img').forEach((img) => {
    img.addEventListener('error', () => {
      const parent = img.parentElement;
      if (!parent) return;
      img.remove();
      const fallback = document.createElement('div');
      fallback.className = 'img-fallback-box';
      fallback.textContent = img.alt || 'VOXEL Smartfon';
      parent.prepend(fallback);
    });
  });

  grid.querySelectorAll('[data-open-studio]').forEach((el) => {
    el.addEventListener('click', () => {
      const id = el.getAttribute('data-open-studio');
      if (id) openStudioModal(id);
    });
  });

  grid.querySelectorAll('[data-quick-add]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-quick-add');
      if (!id) return;
      const product = getProductById(id);
      addToCart(product, 0, 0);
      showToast(`${product.name} savatga qo'shildi`);
    });
  });
}

// ==========================================================================
// 3. INTERACTIVE 3D STUDIO INSPECTOR MODAL
// ==========================================================================

function openStudioModal(productId) {
  const modal = document.getElementById('studio-modal');
  if (!modal) return;
  const product = getProductById(productId);

  state.studio.productId = product.id;
  state.studio.colorIndex = 0;
  state.studio.storageIndex = 0;
  state.studio.rotX = 6;
  state.studio.rotY = -14;
  state.studio.targetX = 6;
  state.studio.targetY = -14;
  state.studio.zoom = 1;
  state.studio.autoSpin = false;

  const zoomInput = document.getElementById('studio-zoom-range');
  const zoomVal = document.getElementById('studio-zoom-value');
  if (zoomInput) zoomInput.value = '1';
  if (zoomVal) zoomVal.textContent = '100%';

  updateStudioModalContent();
  setStudioPreset('front');

  modal.hidden = false;
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function closeStudioModal() {
  const modal = document.getElementById('studio-modal');
  if (!modal) return;
  modal.hidden = true;
  modal.setAttribute('aria-hidden', 'true');
  state.studio.productId = null;
  state.studio.autoSpin = false;
  document.body.classList.remove('modal-open');
}

function setStudioPreset(preset) {
  const presets = document.querySelectorAll('.preset-btn');
  presets.forEach((b) => {
    b.classList.toggle('is-active', b.getAttribute('data-preset') === preset);
  });

  state.studio.autoSpin = preset === 'spin';
  if (preset === 'front') {
    state.studio.targetX = 4;
    state.studio.targetY = -10;
  } else if (preset === 'angle') {
    state.studio.targetX = 10;
    state.studio.targetY = -34;
  } else if (preset === 'top') {
    state.studio.targetX = 28;
    state.studio.targetY = 8;
  }
}

function updateStudioModalContent() {
  if (!state.studio.productId) return;
  const product = getProductById(state.studio.productId);
  const color = product.colors[state.studio.colorIndex] || product.colors[0];
  const storage = product.storages[state.studio.storageIndex] || product.storages[0];
  const unitPrice = product.priceUsd + storage.deltaUsd;

  const modal = document.getElementById('studio-modal');
  if (modal) {
    modal.style.setProperty('--studio-accent-rgb', color.rgb || product.accentRgb);
  }

  const img = document.getElementById('studio-phone-img');
  if (img) {
    img.src = product.image;
    img.alt = `${product.name} — ${color.name}`;
  }

  const meta = document.getElementById('studio-meta');
  if (meta) meta.textContent = `${product.brand} · Sotuvda mavjud · Rasmiy IMEI`;

  const title = document.getElementById('studio-modal-title');
  if (title) title.textContent = product.name;

  const desc = document.getElementById('studio-desc');
  if (desc) desc.textContent = product.tagline;

  const priceUsd = document.getElementById('studio-price-usd');
  const priceUzs = document.getElementById('studio-price-uzs');
  if (priceUsd) priceUsd.textContent = formatUsd(unitPrice);
  if (priceUzs) priceUzs.textContent = formatUzs(unitPrice);

  const selectedColorLabel = document.getElementById('studio-selected-color');
  if (selectedColorLabel) selectedColorLabel.textContent = color.name;

  const colorContainer = document.getElementById('studio-color-options');
  if (colorContainer) {
    colorContainer.innerHTML = product.colors
      .map(
        (c, idx) => `
          <button
            type="button"
            class="color-choice-btn ${idx === state.studio.colorIndex ? 'is-selected' : ''}"
            data-color-idx="${idx}"
          >
            <span class="swatch-dot" style="background:${c.hex}"></span>
            <span>${escapeHtml(c.name)}</span>
          </button>
        `
      )
      .join('');
    colorContainer.querySelectorAll('.color-choice-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.studio.colorIndex = Number(btn.getAttribute('data-color-idx')) || 0;
        state.studio.targetY += 18;
        window.setTimeout(() => {
          state.studio.targetY -= 18;
        }, 220);
        updateStudioModalContent();
      });
    });
  }

  const storageContainer = document.getElementById('studio-storage-options');
  if (storageContainer) {
    storageContainer.innerHTML = product.storages
      .map(
        (s, idx) => `
          <button
            type="button"
            class="storage-choice-btn ${idx === state.studio.storageIndex ? 'is-selected' : ''}"
            data-storage-idx="${idx}"
          >
            ${escapeHtml(s.label)}
          </button>
        `
      )
      .join('');
    storageContainer.querySelectorAll('.storage-choice-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.studio.storageIndex = Number(btn.getAttribute('data-storage-idx')) || 0;
        updateStudioModalContent();
      });
    });
  }

  const specsList = document.getElementById('studio-specs-list');
  if (specsList) {
    specsList.innerHTML = `
      <div class="spec-pair"><dt>Protsessor</dt><dd>${escapeHtml(product.specs.chip)}</dd></div>
      <div class="spec-pair"><dt>Ekran</dt><dd>${escapeHtml(product.specs.display)}</dd></div>
      <div class="spec-pair"><dt>Kamera</dt><dd>${escapeHtml(product.specs.camera)}</dd></div>
      <div class="spec-pair"><dt>Batareya</dt><dd>${escapeHtml(product.specs.battery)}</dd></div>
    `;
  }
}

function initStudioModal() {
  const modal = document.getElementById('studio-modal');
  const closeBtn = document.getElementById('studio-close-btn');
  const viewport = document.getElementById('studio-3d-viewport');
  const glare = document.getElementById('studio-phone-glare');
  const zoomRange = document.getElementById('studio-zoom-range');
  const zoomValue = document.getElementById('studio-zoom-value');
  const addCartBtn = document.getElementById('studio-add-cart-btn');
  const buyNowBtn = document.getElementById('studio-buy-now-btn');

  if (closeBtn) closeBtn.addEventListener('click', closeStudioModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeStudioModal();
    });
  }

  document.querySelectorAll('.preset-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const preset = btn.getAttribute('data-preset') || 'front';
      setStudioPreset(preset);
    });
  });

  if (zoomRange) {
    zoomRange.addEventListener('input', () => {
      state.studio.zoom = Number(zoomRange.value) || 1;
      if (zoomValue) zoomValue.textContent = `${Math.round(state.studio.zoom * 100)}%`;
    });
  }

  if (viewport) {
    viewport.addEventListener('pointerdown', (e) => {
      state.studio.isDragging = true;
      state.studio.autoSpin = false;
      state.studio.lastPointerX = e.clientX;
      state.studio.lastPointerY = e.clientY;
      viewport.setPointerCapture(e.pointerId);
      document.querySelectorAll('.preset-btn').forEach((b) => b.classList.remove('is-active'));
    });

    viewport.addEventListener('pointermove', (e) => {
      const rect = viewport.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width;
      const ny = (e.clientY - rect.top) / rect.height;
      if (glare) {
        glare.style.setProperty('--s-glare-x', `${Math.round(nx * 100)}%`);
        glare.style.setProperty('--s-glare-y', `${Math.round(ny * 100)}%`);
      }

      if (!state.studio.isDragging) return;
      const dx = e.clientX - state.studio.lastPointerX;
      const dy = e.clientY - state.studio.lastPointerY;
      state.studio.lastPointerX = e.clientX;
      state.studio.lastPointerY = e.clientY;
      state.studio.targetY = Math.max(-55, Math.min(55, state.studio.targetY + dx * 0.5));
      state.studio.targetX = Math.max(-36, Math.min(36, state.studio.targetX - dy * 0.42));
    });

    const endDrag = () => {
      state.studio.isDragging = false;
    };
    viewport.addEventListener('pointerup', endDrag);
    viewport.addEventListener('pointercancel', endDrag);
  }

  if (addCartBtn) {
    addCartBtn.addEventListener('click', () => {
      if (!state.studio.productId) return;
      const product = getProductById(state.studio.productId);
      addToCart(product, state.studio.colorIndex, state.studio.storageIndex);
      showToast(`${product.name} savatga qo'shildi`);
      closeStudioModal();
      openCartDrawer();
    });
  }

  if (buyNowBtn) {
    buyNowBtn.addEventListener('click', () => {
      if (!state.studio.productId) return;
      const product = getProductById(state.studio.productId);
      const cIdx = state.studio.colorIndex;
      const sIdx = state.studio.storageIndex;
      closeStudioModal();
      openCheckoutForSingleItem(product, cIdx, sIdx);
    });
  }
}

// ==========================================================================
// 4. SHOPPING CART DRAWER
// ==========================================================================

function makeCartKey(productId, colorName, storageLabel) {
  return `${productId}__${colorName}__${storageLabel}`;
}

function addToCart(product, colorIdx, storageIdx) {
  const color = product.colors[colorIdx] || product.colors[0];
  const storage = product.storages[storageIdx] || product.storages[0];
  const unitPrice = product.priceUsd + storage.deltaUsd;
  const key = makeCartKey(product.id, color.name, storage.label);

  const existing = state.cart.find((item) => item.key === key);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({
      key,
      productId: product.id,
      name: product.name,
      brand: product.brand,
      image: product.image,
      color: color.name,
      storage: storage.label,
      unitPriceUsd: unitPrice,
      qty: 1,
    });
  }

  saveToStorage(STORAGE_CART_KEY, state.cart);
  updateCartUI(true);
}

function updateCartItemQty(key, delta) {
  const idx = state.cart.findIndex((i) => i.key === key);
  if (idx === -1) return;
  state.cart[idx].qty += delta;
  if (state.cart[idx].qty <= 0) {
    state.cart.splice(idx, 1);
  }
  saveToStorage(STORAGE_CART_KEY, state.cart);
  updateCartUI(false);
}

function removeCartItem(key) {
  state.cart = state.cart.filter((i) => i.key !== key);
  saveToStorage(STORAGE_CART_KEY, state.cart);
  updateCartUI(false);
}

function getCartTotals(items) {
  const count = items.reduce((sum, i) => sum + i.qty, 0);
  const totalUsd = items.reduce((sum, i) => sum + i.unitPriceUsd * i.qty, 0);
  return { count, totalUsd };
}

function updateCartUI(animateBadge) {
  const { count, totalUsd } = getCartTotals(state.cart);
  const badge = document.getElementById('header-cart-count');
  const subtitle = document.getElementById('cart-drawer-subtitle');
  const container = document.getElementById('cart-items-container');
  const footer = document.getElementById('cart-footer');
  const totalUsdEl = document.getElementById('cart-total-usd');
  const totalUzsEl = document.getElementById('cart-total-uzs');

  if (badge) {
    badge.textContent = String(count);
    if (animateBadge) {
      badge.classList.remove('bump');
      void badge.offsetWidth;
      badge.classList.add('bump');
    }
  }

  if (subtitle) {
    subtitle.textContent = `${count} ta mahsulot tanlangan`;
  }

  if (!container || !footer) return;

  if (state.cart.length === 0) {
    footer.hidden = true;
    container.innerHTML = `
      <div class="cart-empty">
        <p class="cart-empty-title">Savatingiz hozircha bo'sh</p>
        <p class="cart-empty-desc">Katalogdan o'zingizga yoqqan smartfonni tanlab savatga qo'shing.</p>
        <button type="button" class="btn-secondary" id="empty-browse-btn">Katalogga o'tish</button>
      </div>
    `;
    const browseBtn = document.getElementById('empty-browse-btn');
    if (browseBtn) {
      browseBtn.addEventListener('click', () => {
        closeCartDrawer();
        const katalog = document.getElementById('katalog');
        if (katalog) katalog.scrollIntoView({ behavior: 'smooth' });
      });
    }
    return;
  }

  footer.hidden = false;
  if (totalUsdEl) totalUsdEl.textContent = formatUsd(totalUsd);
  if (totalUzsEl) totalUzsEl.textContent = formatUzs(totalUsd);

  container.innerHTML = state.cart
    .map(
      (item) => `
        <div class="cart-item" data-cart-key="${escapeHtml(item.key)}">
          <img src="${item.image}" alt="${escapeHtml(item.name)}" class="cart-item-img" referrerpolicy="no-referrer" />
          <div class="cart-item-info">
            <div class="cart-item-top">
              <h3 class="cart-item-name">${escapeHtml(item.name)}</h3>
              <button type="button" class="cart-remove-btn" data-remove-key="${escapeHtml(item.key)}" aria-label="O'chirish">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M3 6h18"></path>
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                </svg>
              </button>
            </div>
            <span class="cart-item-variant">${escapeHtml(item.color)} · ${escapeHtml(item.storage)}</span>
            <div class="cart-item-bottom">
              <div class="qty-stepper">
                <button type="button" class="qty-btn" data-qty-dec="${escapeHtml(item.key)}" aria-label="Kamaytirish">−</button>
                <span class="qty-val">${item.qty}</span>
                <button type="button" class="qty-btn" data-qty-inc="${escapeHtml(item.key)}" aria-label="Ko'paytirish">+</button>
              </div>
              <span class="cart-item-price">${formatUsd(item.unitPriceUsd * item.qty)}</span>
            </div>
          </div>
        </div>
      `
    )
    .join('');

  container.querySelectorAll('[data-qty-dec]').forEach((btn) => {
    btn.addEventListener('click', () => updateCartItemQty(btn.getAttribute('data-qty-dec'), -1));
  });
  container.querySelectorAll('[data-qty-inc]').forEach((btn) => {
    btn.addEventListener('click', () => updateCartItemQty(btn.getAttribute('data-qty-inc'), 1));
  });
  container.querySelectorAll('[data-remove-key]').forEach((btn) => {
    btn.addEventListener('click', () => removeCartItem(btn.getAttribute('data-remove-key')));
  });
}

function openCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  if (!drawer) return;
  updateCartUI(false);
  drawer.hidden = false;
  drawer.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function closeCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  if (!drawer) return;
  drawer.hidden = true;
  drawer.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

// ==========================================================================
// 5. CHECKOUT & AUTOMATIC TELEGRAM BOT ORDER SUBMISSION
// ==========================================================================

function openCheckoutForSingleItem(product, colorIdx, storageIdx) {
  const color = product.colors[colorIdx] || product.colors[0];
  const storage = product.storages[storageIdx] || product.storages[0];
  const unitPrice = product.priceUsd + storage.deltaUsd;
  state.checkoutItemsOverride = [
    {
      key: makeCartKey(product.id, color.name, storage.label),
      productId: product.id,
      name: product.name,
      brand: product.brand,
      image: product.image,
      color: color.name,
      storage: storage.label,
      unitPriceUsd: unitPrice,
      qty: 1,
    },
  ];
  openCheckoutModal();
}

function getActiveCheckoutItems() {
  return state.checkoutItemsOverride || state.cart;
}

function openCheckoutModal() {
  const modal = document.getElementById('checkout-modal');
  const formView = document.getElementById('checkout-form-view');
  const successView = document.getElementById('checkout-success-view');
  const errorBox = document.getElementById('checkout-error-box');
  const itemsList = document.getElementById('checkout-items-list');
  const itemCount = document.getElementById('checkout-item-count');
  const totalUsdEl = document.getElementById('checkout-total-usd');
  const totalUzsEl = document.getElementById('checkout-total-uzs');

  const items = getActiveCheckoutItems();
  if (!modal || items.length === 0) return;

  if (formView) formView.hidden = false;
  if (successView) successView.hidden = true;
  if (errorBox) {
    errorBox.hidden = true;
    errorBox.textContent = '';
  }

  const { count, totalUsd } = getCartTotals(items);
  if (itemCount) itemCount.textContent = `${count} ta`;
  if (totalUsdEl) totalUsdEl.textContent = formatUsd(totalUsd);
  if (totalUzsEl) totalUzsEl.textContent = formatUzs(totalUsd);

  if (itemsList) {
    itemsList.innerHTML = items
      .map(
        (item) => `
          <li>
            <div>
              <strong>${escapeHtml(item.name)}</strong> × ${item.qty}
              <div class="checkout-item-sub">${escapeHtml(item.color)} · ${escapeHtml(item.storage)}</div>
            </div>
            <span style="font-family:var(--font-mono);font-variant-numeric:tabular-nums;">${formatUsd(item.unitPriceUsd * item.qty)}</span>
          </li>
        `
      )
      .join('');
  }

  modal.hidden = false;
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkout-modal');
  if (!modal) return;
  modal.hidden = true;
  modal.setAttribute('aria-hidden', 'true');
  state.checkoutItemsOverride = null;
  document.body.classList.remove('modal-open');
}

function buildTelegramMessage(order) {
  const itemsLines = order.items
    .map(
      (item, idx) =>
        `${idx + 1}. <b>${escapeHtml(item.name)}</b>\n` +
        `   Rang: ${escapeHtml(item.color)} | Xotira: ${escapeHtml(item.storage)}\n` +
        `   Soni: ${item.qty} dona × ${formatUsd(item.unitPriceUsd)} = <b>${formatUsd(item.unitPriceUsd * item.qty)}</b>`
    )
    .join('\n\n');

  const noteLine = order.note ? `\n💬 <b>Izoh:</b> ${escapeHtml(order.note)}` : '';

  return (
    `🛍 <b>YANGI BUYURTMA — ${escapeHtml(order.id)}</b>\n` +
    `━━━━━━━━━━━━━━━━━━\n` +
    `👤 <b>Mijoz:</b> ${escapeHtml(order.customerName)}\n` +
    `📞 <b>Telefon:</b> ${escapeHtml(order.phone)}\n` +
    `📍 <b>Hudud:</b> ${escapeHtml(order.region)}\n` +
    `🏠 <b>Manzil:</b> ${escapeHtml(order.address)}\n` +
    `💳 <b>To'lov turi:</b> ${escapeHtml(order.payment)}${noteLine}\n` +
    `🕒 <b>Vaqt:</b> ${escapeHtml(order.createdAt)}\n` +
    `━━━━━━━━━━━━━━━━━━\n` +
    `📱 <b>Mahsulotlar:</b>\n${itemsLines}\n` +
    `━━━━━━━━━━━━━━━━━━\n` +
    `💰 <b>Jami summa:</b> ${formatUsd(order.totalUsd)} (${formatUzs(order.totalUsd)})`
  );
}

async function sendOrderToTelegram(order) {
  const endpoint = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  const text = buildTelegramMessage(order);

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHANNEL_ID,
      text,
      parse_mode: 'HTML',
      disable_web_page_preview: true,
    }),
  });

  const data = await response.json();
  if (!response.ok || !data.ok) {
    throw new Error(data.description || 'Telegram API xatosi yuz berdi');
  }
  return data;
}

function initCheckoutForm() {
  const form = document.getElementById('checkout-form');
  const modal = document.getElementById('checkout-modal');
  const closeBtn = document.getElementById('checkout-close-btn');
  const doneBtn = document.getElementById('receipt-done-btn');
  const phoneInput = document.getElementById('customer-phone');

  if (closeBtn) closeBtn.addEventListener('click', closeCheckoutModal);
  if (doneBtn) doneBtn.addEventListener('click', closeCheckoutModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeCheckoutModal();
    });
  }

  // Light phone formatting helper for Uzbekistan numbers
  if (phoneInput) {
    phoneInput.addEventListener('focus', () => {
      if (!phoneInput.value.trim()) {
        phoneInput.value = '+998 ';
      }
    });
  }

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const errorBox = document.getElementById('checkout-error-box');
    const submitBtn = document.getElementById('checkout-submit-btn');
    const items = getActiveCheckoutItems();

    if (items.length === 0) return;

    const customerName = document.getElementById('customer-name').value.trim();
    const phone = document.getElementById('customer-phone').value.trim();
    const region = document.getElementById('customer-region').value;
    const payment = document.getElementById('customer-payment').value;
    const address = document.getElementById('customer-address').value.trim();
    const note = document.getElementById('customer-note').value.trim();

    if (customerName.length < 2) {
      showCheckoutError("Iltimos, ism va familiyangizni to'liq kiriting.");
      return;
    }

    const digits = phone.replace(/\D/g, '');
    if (digits.length < 9) {
      showCheckoutError("Iltimos, to'g'ri telefon raqamini kiriting (masalan: +998 90 123 45 67).");
      return;
    }

    if (address.length < 4) {
      showCheckoutError("Iltimos, yetkazib berish manzilini aniqroq kiriting.");
      return;
    }

    if (errorBox) errorBox.hidden = true;
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Telegram kanalga yuborilmoqda...';
    }

    const { totalUsd } = getCartTotals(items);
    const orderNumber = Math.floor(1000 + Math.random() * 9000);
    const nowFormatted = new Intl.DateTimeFormat('uz-UZ', {
      dateStyle: 'medium',
      timeStyle: 'short',
    }).format(new Date());

    const order = {
      id: `#VX-${orderNumber}`,
      customerName,
      phone,
      region,
      address,
      payment,
      note,
      items: items.map((i) => ({ ...i })),
      totalUsd,
      createdAt: nowFormatted,
      telegramSent: false,
    };

    try {
      await sendOrderToTelegram(order);
      order.telegramSent = true;

      // Save to order history
      state.orders.unshift(order);
      saveToStorage(STORAGE_ORDERS_KEY, state.orders.slice(0, 20));

      // Clear shopping cart if checkout came from cart
      if (!state.checkoutItemsOverride) {
        state.cart = [];
        saveToStorage(STORAGE_CART_KEY, state.cart);
        updateCartUI(false);
      }

      form.reset();
      showOrderReceipt(order);
      showToast(`${order.id} buyurtma Telegram kanalga yuborildi`);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Aloqa xatosi";
      showCheckoutError(
        `Buyurtmani Telegram kanalga yuborib bo'lmadi (${msg}). Internet aloqasini yoki botning kanal admini ekanligini tekshirib, qayta urinib ko'ring.`
      );
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Buyurtmani tasdiqlash va yuborish';
      }
    }
  });
}

function showCheckoutError(text) {
  const errorBox = document.getElementById('checkout-error-box');
  if (!errorBox) return;
  errorBox.textContent = text;
  errorBox.hidden = false;
}

function showOrderReceipt(order) {
  const formView = document.getElementById('checkout-form-view');
  const successView = document.getElementById('checkout-success-view');
  const idHeading = document.getElementById('receipt-order-id');
  const details = document.getElementById('receipt-details');

  if (formView) formView.hidden = true;
  if (successView) successView.hidden = false;
  if (idHeading) idHeading.textContent = `Buyurtma ${order.id} qabul qilindi`;

  if (details) {
    const itemsSummary = order.items
      .map((i) => `${i.name} (${i.storage}, ${i.color}) × ${i.qty}`)
      .join(', ');
    details.innerHTML = `
      <div><dt>Buyurtmachi</dt><dd>${escapeHtml(order.customerName)}</dd></div>
      <div><dt>Telefon</dt><dd>${escapeHtml(order.phone)}</dd></div>
      <div><dt>Manzil</dt><dd>${escapeHtml(order.region)}, ${escapeHtml(order.address)}</dd></div>
      <div><dt>To'lov usuli</dt><dd>${escapeHtml(order.payment)}</dd></div>
      <div style="grid-column: 1 / -1;"><dt>Mahsulotlar</dt><dd>${escapeHtml(itemsSummary)}</dd></div>
      <div><dt>Jami summa</dt><dd style="font-family:var(--font-mono);">${formatUsd(order.totalUsd)} · ${formatUzs(order.totalUsd)}</dd></div>
      <div><dt>Telegram holati</dt><dd style="color:var(--accent-positive);">Kanalga muvaffaqiyatli yuborildi</dd></div>
    `;
  }
}

// ==========================================================================
// 6. ORDERS HISTORY MODAL
// ==========================================================================

function openOrdersModal() {
  const modal = document.getElementById('orders-modal');
  const list = document.getElementById('orders-list');
  if (!modal || !list) return;

  if (state.orders.length === 0) {
    list.innerHTML = `
      <div class="cart-empty" style="padding:24px 0;">
        <p class="cart-empty-title">Hali buyurtmalar yo'q</p>
        <p class="cart-empty-desc">Birinchi buyurtmangizni rasmiylashtirganingizdan so'ng u shu yerda ko'rinadi.</p>
      </div>
    `;
  } else {
    list.innerHTML = state.orders
      .map((ord) => {
        const itemsText = ord.items
          .map((i) => `${i.name} (${i.color}, ${i.storage}) × ${i.qty}`)
          .join(' · ');
        return `
          <div class="order-history-item">
            <div class="order-history-head">
              <span class="order-history-id">${escapeHtml(ord.id)}</span>
              <span class="order-history-status">Telegramga yuborilgan</span>
            </div>
            <div class="order-history-meta">${escapeHtml(ord.createdAt)} · ${escapeHtml(ord.region)} · ${formatUsd(ord.totalUsd)}</div>
            <div class="order-history-items">${escapeHtml(itemsText)}</div>
          </div>
        `;
      })
      .join('');
  }

  modal.hidden = false;
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function closeOrdersModal() {
  const modal = document.getElementById('orders-modal');
  if (!modal) return;
  modal.hidden = true;
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

// ==========================================================================
// 7. GLOBAL EVENTS & BOOTSTRAP
// ==========================================================================

function initNavigationAndDrawers() {
  const openCartBtn = document.getElementById('open-cart-btn');
  const closeCartBtn = document.getElementById('cart-close-btn');
  const cartDrawer = document.getElementById('cart-drawer');
  const proceedCheckoutBtn = document.getElementById('proceed-checkout-btn');

  const openOrdersBtn = document.getElementById('open-orders-btn');
  const mobileOrdersBtn = document.getElementById('mobile-orders-btn');
  const closeOrdersBtn = document.getElementById('orders-close-btn');
  const ordersModal = document.getElementById('orders-modal');

  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobilePanel = document.getElementById('mobile-nav-panel');

  const searchInput = document.getElementById('search-input');
  const sortSelect = document.getElementById('sort-select');
  const resetFiltersBtn = document.getElementById('reset-filters-btn');

  if (openCartBtn) openCartBtn.addEventListener('click', openCartDrawer);
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCartDrawer);
  if (cartDrawer) {
    cartDrawer.addEventListener('click', (e) => {
      if (e.target === cartDrawer) closeCartDrawer();
    });
  }

  if (proceedCheckoutBtn) {
    proceedCheckoutBtn.addEventListener('click', () => {
      state.checkoutItemsOverride = null;
      closeCartDrawer();
      openCheckoutModal();
    });
  }

  if (openOrdersBtn) openOrdersBtn.addEventListener('click', openOrdersModal);
  if (mobileOrdersBtn) {
    mobileOrdersBtn.addEventListener('click', () => {
      if (mobilePanel) mobilePanel.hidden = true;
      if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'false');
      openOrdersModal();
    });
  }
  if (closeOrdersBtn) closeOrdersBtn.addEventListener('click', closeOrdersModal);
  if (ordersModal) {
    ordersModal.addEventListener('click', (e) => {
      if (e.target === ordersModal) closeOrdersModal();
    });
  }

  if (mobileToggle && mobilePanel) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = !mobilePanel.hidden;
      mobilePanel.hidden = isOpen;
      mobileToggle.setAttribute('aria-expanded', String(!isOpen));
    });

    mobilePanel.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobilePanel.hidden = true;
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      state.searchQuery = searchInput.value;
      renderCatalog();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      state.sortBy = sortSelect.value;
      renderCatalog();
    });
  }

  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener('click', () => {
      state.activeCategory = 'Barchasi';
      state.searchQuery = '';
      state.sortBy = 'featured';
      if (searchInput) searchInput.value = '';
      if (sortSelect) sortSelect.value = 'featured';
      renderCategoryFilters();
      renderCatalog();
    });
  }

  // Close open modals with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    closeStudioModal();
    closeCartDrawer();
    closeCheckoutModal();
    closeOrdersModal();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderHeroSwitcher();
  initHero3DStage();
  renderCategoryFilters();
  renderCatalog();
  initStudioModal();
  initCheckoutForm();
  initNavigationAndDrawers();
  updateCartUI(false);
});
