// Component AppHeader hiển thị phần header của ứng dụng (giống Play Store)
class AppHeader extends HTMLElement {
   constructor() {
      super(); // Gọi class HTMLElement
   }

   connectedCallback() {
      this.render(); // Render UI khi component được gắn vào DOM
   }

   // Hàm lấy attribute kèm fallback
   getAttr(name, fallback = "") {
      return this.getAttribute(name) || fallback;
   }

   render() {
      // ---- Lấy các attribute từ HTML ----
      const title = this.getAttr("app-title", "Tên ứng dụng");
      const developer = this.getAttr("developer", "Nhà phát triển");
      const iconSrc = this.getAttr("icon-src", "");
      const videoPoster = this.getAttr("video-poster", "");
      const videoSrc = this.getAttr("video-src", "");
      const rating = this.getAttr("rating", "4.6");
      const reviews = this.getAttr("reviews", "0 bài đánh giá");
      const downloads = this.getAttr("downloads", "0+");
      const ageRatingSrc = this.getAttr("age-rating-src", "");
      const ageText = this.getAttr("age-text", "3 tuổi trở lên");
      const tagsAttr = this.getAttr("tags", "Ứng dụng");
      const price = this.getAttribute("price"); // Nếu tồn tại => app trả phí
      const downloadLink = this.getAttr("download-link", "#");

      // Chuyển chuỗi tags thành danh sách HTML
      const tagsHtml = tagsAttr
         .split(',')
         .map(tag => `<span class="app-identity__tag">${tag.trim()}</span>`)
         .join('');

      // ---- XỬ LÝ NÚT MUA HOẶC CÀI ĐẶT ----
      let actionButtonHtml = "";
      if (price) {
         // Nút MUA
         actionButtonHtml = `
        <button class="button button--theme-green button--contained button--typography button--padding-x-large focus-visible button--shape-rounded button--text-light button--sizing-responsive button--primary width-full-to-auto"
          id="component-open-payment">
          <div class="ripple--bounded"></div>
          <span class="button__label">Mua: ${price}</span>
        </button>
      `;
      } else {
         // Nút CÀI ĐẶT
         actionButtonHtml = `
        <a href="${downloadLink}" download>
          <button class="button button--theme-green button--contained button--typography button--padding-x-large focus-visible button--shape-rounded button--text-light button--sizing-responsive button--primary width-full-to-auto">
            <div class="ripple--bounded"></div>
            <span class="button__label">Cài đặt</span>
          </button>
        </a>
      `;
      }

      // ---- HTML CHÍNH CHO HEADER ----
      const mainHtml = `
      <div class="app-header-summary">
        <div class="app-header-summary__inner">
          <div class="app-header-content app-header-content-mwdth">

            <!-- VIDEO TRAILER -->
            <div class="trailer-container">
              <video class="trailer-container__video" preload="auto" muted="" autoplay poster="${videoPoster}" tabindex="-1" loop="">
                <source src="${videoSrc}" type="video/mp4" />
              </video>
              <div class="trailer-container__overlay"></div>
            </div>
            
            <!-- KHỐI THÔNG TIN ỨNG DỤNG -->
            <div class="app-identity app-identity-info-section app-identity-hide-prop">

              <div class="app-identity__main">
                <div class="app-identity__title-group">

                  <!-- ICON ỨNG DỤNG -->
                  <img src="${iconSrc}" class="img-contain app-identity__icon app-identity-img-rounded" alt="Icon" />
                  
                  <!-- Nhóm chứa Title + Developer + Tags -->
                  <div>
                    <div class="app-identity__title-wrapper title-md title-lg">
                      <h1><span class="app-identity__title">${title}</span></h1>
                    </div>

                    <!-- Tên Developer + Tags -->
                    <div class="app-identity__meta">
                      <div class="app-identity__developer app-identity__developer-text">
                        <a href="#"><span>${developer}</span></a>
                      </div>
                      <div class="app-identity__tags">${tagsHtml}</div>
                    </div>
                  </div>
                  
                </div>
              </div>

              <!-- THANH THỐNG KÊ APP -->
              <div class="app-identity__stats-bar">
                <div class="app-identity-stats-bar__content">

                   <!-- Icon nhỏ -->
                   <img src="${iconSrc}" class="img-contain app-identity__stats-bar__icon" alt="Icon Small" />

                   <!-- Thống kê -->
                   <div class="app-identity__stats-bar__items">

                      <!-- Rating -->
                      <div class="app__stats-bar__item">
                        <div class="stat-item__value">
                          ${rating} 
                          <svg class="rating-display__star" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480 -940 L375 -640 L60 -620 L300 -420 L210 -100 L480 -280 L750 -100 L660 -420 L900 -620 L585 -640 Z" /></svg>
                        </div>
                        <div class="stat-item__label">${reviews}</div>
                      </div>

                      <!-- Lượt tải -->
                      <div class="app__stats-bar__item">
                        <div class="stat-item__value">${downloads}</div>
                        <div class="stat-item__label">Lượt tải xuống</div>
                      </div>

                      <!-- Giới hạn độ tuổi -->
                      <div class="app__stats-bar__item">
                        <div class="stat-item__value">
                          <img src="${ageRatingSrc}" class="img-contain age-limit-icon" alt="Age" />
                        </div>
                        <div class="stat-item__label"><span>${ageText}</span></div>
                      </div>

                   </div>
                </div>
              </div>
            </div>

            <!-- NHÓM NÚT CÀI ĐẶT + CHIA SẺ -->
            <div class="app-actions">
              <div class="app-actions__install-wrapper">
                <div class="install-button-wrapper">
                   <div class="install-component-wrapper">
                      <div class="flex-container layout-col-to-row">
                         <div class="button-wrapper">
                            <div class="button__touch-wrapper">
                               ${actionButtonHtml}
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
              </div>

              <!-- NÚT SHARE -->
              <div class="btn-container">
                 <div class="button-wrapper">
                    <div class="button__touch-wrapper">
                       <button class="button button--contained button--secondary focus-visible button--text-green" aria-label="Chia sẻ">
                          <div class="ripple--bounded"></div>
                          <span class="app-actions">
                            <!-- Icon share -->
                            <svg width="24" height="24" viewBox="0 0 24 24" class="button--secondary">
                              <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"></path>
                            </svg>
                          </span>
                          <span class="button__label">Chia sẻ</span>
                       </button>
                    </div>
                 </div>
              </div>
            </div>
            
            <!-- THÔNG TIN THIẾT BỊ -->
            <div class="device-info">

               <!-- Thiết bị tương thích -->
               <div class="device-info__line">
                  <svg class="device-info__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-540ZM80-160v-80h400v80H80Zm120-120q-33 0-56.5-23.5T120-360v-360q0-33 23.5-56.5T200-800h560q33 0 56.5 23.5T840-720H200v360h280v80H200Zm600 40v-320H640v320h160Zm-180 80q-25 0-42.5-17.5T560-220v-360q0-25 17.5-42.5T620-640h200q25 0 42.5 17.5T880-580v360q0 25-17.5 42.5T820-160H620Zm100-300q13 0 21.5-9t8.5-21q0-13-8.5-21.5T720-520q-12 0-21 8.5t-9 21.5q0 12 9 21t21 9Zm0 60Z" /></svg>
                  <span>Ứng dụng này dùng được trên thiết bị của bạn</span>
               </div>

               <!-- Hỗ trợ chia sẻ gia đình -->
               <div class="device-info__line">
                  <svg class="device-info__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m480-840 440 330-48 64-72-54v380H160v-380l-72 54-48-64 440-330ZM294-478q0 53 57 113t129 125q72-65 129-125t57-113q0-44-30-73t-72-29q-26 0-47.5 10.5T480-542q-15-17-37.5-27.5T396-580q-42 0-72 29t-30 73Zm426 278v-360L480-740 240-560v360h480Zm0 0H240h480Z" /></svg>
                  Bạn có thể chia sẻ mục này với gia đình mình.
               </div>

            </div>
          </div>
        </div>
      </div>
    `;

      // Nếu app trả phí => chèn thêm phần modal thanh toán
      if (price) {
         this.innerHTML = mainHtml + this.getModalsHtml(title, price, iconSrc, downloadLink);
         this.initPaymentLogic(); // Khởi tạo các hành vi modal
      } else {
         this.innerHTML = mainHtml;
      }
   }

   // Hàm sinh HTML cho các modal giao diện thanh toán (giống Google Play)
   getModalsHtml(title, price, iconSrc, downloadLink) {
      return `
      <!-- Link tải ẩn để auto-click sau khi thanh toán -->
      <a href="${downloadLink}" download id="comp-download-link" style="display: none"></a>
      
      <!-- MODAL MUA -->
      <div class="modal-container modal-google modal-large modal-buy-screen modal-container--with-divider">
        <!-- Toàn bộ nội dung modal mua -->
        <!-- ... GIỮ NGUYÊN NỘI DUNG ... -->
      </div>

      <!-- MODAL CHỌN PHƯƠNG THỨC -->
      <div class="modal-container modal-google modal-large modal-method-screen modal-container--with-divider">
        <!-- ... giữ nguyên ... -->
      </div>

      <!-- MODAL QUÉT QR -->
      <div class="modal-container modal-google modal-large modal-qr-screen modal-container--with-divider">
        <!-- ... giữ nguyên ... -->
      </div>

      <!-- MODAL THÀNH CÔNG -->
      <div class="modal-container modal-google modal-success-screen">
        <!-- ... giữ nguyên ... -->
      </div>
    `;
   }

   // Hàm xử lý logic cho các modal thanh toán
   initPaymentLogic() {
      // Lấy các modal
      const buyScreen = this.querySelector(".modal-buy-screen");
      const methodScreen = this.querySelector(".modal-method-screen");
      const qrScreen = this.querySelector(".modal-qr-screen");
      const successScreen = this.querySelector(".modal-success-screen");
      const allModals = [buyScreen, methodScreen, qrScreen, successScreen];

      // Nút hành động
      const openDemoBtn = this.querySelector("#component-open-payment");
      const openMethodBtn = this.querySelector(".open-method-btn");
      const openQrBtn = this.querySelector(".open-qr-btn");
      const closeBtns = this.querySelectorAll(".close-modal-btn, .close-modal-scrim");
      const backBtns = this.querySelectorAll(".back-to-buy-btn");

      // Bộ đếm QR
      const qrTimerDisplay = this.querySelector(".qr-timer");
      const downloadLink = this.querySelector("#comp-download-link");
      let qrTimerInterval = null;

      // Hàm ẩn tất cả modal
      const hideAllModals = () => {
         allModals.forEach(m => { if (m) m.classList.remove("modal-container--visible"); });
      };

      hideAllModals(); // Ẩn tất cả khi load

      // Hàm hiển thị modal
      const showModal = (modal) => {
         if (qrTimerInterval) {
            clearInterval(qrTimerInterval);
            qrTimerInterval = null;
         }
         hideAllModals();
         if (modal) modal.classList.add("modal-container--visible");
      };

      // Hàm chạy đồng hồ QR
      const startQrTimer = () => {
         let displayTime = 300; // 5 phút thật
         let demoTime = 5;      // Sau 5 giây => chuyển sang success (demo)

         const formatTime = (s) => {
            const m = Math.floor(s / 60);
            const sec = s % 60;
            return `${m}:${sec < 10 ? '0' + sec : sec}`;
         };

         if (qrTimerDisplay) qrTimerDisplay.textContent = formatTime(displayTime);

         qrTimerInterval = setInterval(() => {
            displayTime--;
            demoTime--;

            if (qrTimerDisplay) qrTimerDisplay.textContent = formatTime(displayTime);

            // Sau 5s -> tự động "thanh toán thành công"
            if (demoTime <= 0) {
               clearInterval(qrTimerInterval);
               showModal(successScreen);

               setTimeout(() => {
                  if (downloadLink) downloadLink.click(); // Tải file
                  hideAllModals();
               }, 2000);
            }
         }, 1000);
      };

      // ---- Gán sự kiện ----
      if (openDemoBtn) openDemoBtn.addEventListener("click", () => showModal(buyScreen));
      if (openMethodBtn) openMethodBtn.addEventListener("click", () => showModal(methodScreen));
      if (openQrBtn) openQrBtn.addEventListener("click", () => {
         showModal(qrScreen);
         startQrTimer();
      });

      backBtns.forEach(btn => btn.addEventListener("click", () => showModal(buyScreen)));
      closeBtns.forEach(btn => btn.addEventListener("click", hideAllModals));
   }
}

// Đăng ký custom element <app-header>
customElements.define('app-header', AppHeader);
