/* --- theme-manager.js --- */

// --- 1. CÁC BIẾN VÀ HÀM HIỆU ỨNG RƠI ---
// Biến trạng thái để biết hiệu ứng mùa đang hoạt động hay không
let isSeasonEffectActive = false;
// Biến lưu container chứa các particle rơi
let particleContainer = null;

// Hàm xác định hiệu ứng theo mùa dựa trên tháng hiện tại
function getSeasonalEffect() {
  const now = new Date();
  const month = now.getMonth(); // 0-11

  if (month >= 2 && month <= 4) // Tháng 3-5
    return { type: "spring", image: "/assets/images/petal.svg" };
  if (month >= 5 && month <= 7) // Tháng 6-8
    return { type: "summer", image: "/assets/images/leaf.svg" };
  if (month >= 8 && month <= 10) // Tháng 9-11
    return { type: "autumn", image: "/assets/images/autumn-leaf.svg" };
  if (month === 11 || month === 0 || month === 1) // Tháng 12-2
    return { type: "snow", image: "/assets/images/snow.svg" };

  // Mặc định mùa xuân
  return { type: "spring", image: "/assets/images/petal.svg" };
}

// Tạo container chứa các particle nếu chưa tồn tại
function createParticleContainer() {
  if (document.getElementById("particle-container")) {
    particleContainer = document.getElementById("particle-container");
    return;
  }
  const container = document.createElement("div");
  container.id = "particle-container";
  document.body.appendChild(container);
  particleContainer = container;
}

// Tạo và animate từng particle rơi
function createFallingEffect(imageSrc, particleType) {
  if (!particleContainer) createParticleContainer();

  const particle = document.createElement("section");
  particle.className = "falling-particle";

  // Random kích thước particle
  const size = Math.random() * 15 + 15;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.backgroundImage = `url('${imageSrc}')`;

  // Vị trí khởi tạo
  let x = Math.random() * window.innerWidth;
  let y = -50;
  let fallSpeed = Math.random() * 2 + 1;

  // Các biến xoay và lắc
  let angle = Math.random() * Math.PI * 2;
  let rotateSpeed = Math.random() * 0.05;
  let swayAmount = 1.5;
  let swaySpeed = Math.random() * 0.02 + 0.01;

  // Tùy chỉnh đặc biệt cho snow và autumn
  if (particleType === "snow") {
    swayAmount = 0.5;
    rotateSpeed = 0;
  }
  if (particleType === "autumn") {
    swayAmount = 2.0;
  }

  particleContainer.appendChild(particle);

  // Hàm animate particle
  function animateParticle() {
    y += fallSpeed; // Particle rơi
    angle += rotateSpeed; // Xoay
    x += Math.sin(angle * swaySpeed) * swayAmount; // Lắc

    // Xoay nếu không phải snow
    let rotation = particleType === "snow" ? 0 : angle;
    particle.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}rad)`;

    // Nếu chưa rơi ra ngoài màn hình và hiệu ứng đang chạy, tiếp tục animate
    if (y < window.innerHeight + 50 && isSeasonEffectActive) {
      requestAnimationFrame(animateParticle);
    } else {
      // Xóa particle khi ra ngoài màn hình
      particle.remove();
      // Tạo particle mới liên tục nếu hiệu ứng vẫn đang chạy
      if (isSeasonEffectActive) createFallingEffect(imageSrc, particleType);
    }
  }

  if (isSeasonEffectActive) requestAnimationFrame(animateParticle);
}

// Bắt đầu hiệu ứng mùa
function startSeasonalEffect() {
  if (isSeasonEffectActive) return; // Nếu đã chạy, không làm gì thêm
  isSeasonEffectActive = true;
  createParticleContainer();

  const effect = getSeasonalEffect(); // Lấy loại hiệu ứng hiện tại
  const totalParticles = 20; // Số lượng particle khởi tạo ban đầu
  if (!effect) return;

  // Tạo từng particle với thời gian delay random để hiệu ứng tự nhiên
  for (let i = 0; i < totalParticles; i++) {
    setTimeout(() => {
      if (isSeasonEffectActive) createFallingEffect(effect.image, effect.type);
    }, Math.random() * 3000);
  }
}

// Dừng hiệu ứng mùa
function stopSeasonalEffect() {
  isSeasonEffectActive = false; // Tắt trạng thái hiệu ứng
  const container = document.getElementById("particle-container");
  if (container) {
    container.innerHTML = ""; // Xóa tất cả particle
  }
}

// --- 2. CÁC HÀM HELPER (ĐỂ script_setting.js GỌI) ---

// Áp dụng theme sáng/tối
function applyThemeColors(theme) {
  document.body.className = theme === "Tối" ? "dark-theme" : "light-theme";
}

// Áp dụng theme "Mùa" hoặc tắt hiệu ứng
function applyThemeEffects(theme) {
  if (theme === "Mùa") {
    startSeasonalEffect();
  } else {
    stopSeasonalEffect();
  }
}

// --- 3. LOGIC CHẠY KHI TẢI (CHO TẤT CẢ CÁC TRANG) ---

document.addEventListener("DOMContentLoaded", () => {
  // Lấy theme đã lưu từ localStorage, mặc định là "Sáng"
  const currentTheme = localStorage.getItem("theme") || "Sáng";

  // Chỉ áp dụng hiệu ứng mùa nếu theme là "Mùa"
  // Việc gắn listener để thay đổi theme sẽ do script_setting.js xử lý
  applyThemeEffects(currentTheme);
});
