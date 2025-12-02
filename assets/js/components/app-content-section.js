// Định nghĩa custom element <app-content-section>
class AppContentSection extends HTMLElement {
  constructor() {
    super(); // Gọi constructor gốc của HTMLElement
  }

  connectedCallback() {
    // Khi element xuất hiện trong DOM → tự render
    this.render();
  }

  // Hàm lấy attribute kèm fallback mặc định
  getAttr(name, fallback = "") {
    return this.getAttribute(name) || fallback;
  }

  render() {
    const type = this.getAttr("type", "text");  // Loại section: text | safety
    const title = this.getAttr("title", "Tiêu đề"); // Tiêu đề section

    let bodyContent = ""; // Nội dung phần thân

    // ----- TRƯỜNG HỢP: DATA SAFETY (An toàn dữ liệu) -----
    if (type === "safety") {
      // Nội dung mô tả tổng quan (giống Google Play)
      const summary = this.getAttr("content", "Sự an toàn bắt đầu từ việc nắm được cách nhà phát triển thu thập và chia sẻ dữ liệu của bạn.");

      // ID package của ứng dụng để link sang trang safety
      const packageId = this.getAttr("package-id", "#");

      // Thông tin chia sẻ dữ liệu
      const shareInfo = this.getAttr("safety-share", "Vị trí, Thông tin cá nhân và Mã nhận dạng thiết bị hoặc mã nhận dạng khác");

      // Thông tin thu thập dữ liệu
      const collectInfo = this.getAttr("safety-collect", "Vị trí, Thông tin cá nhân và 5 loại dữ liệu khác");

      // HTML phần body của safety section
      bodyContent = `
        ${summary}
        <div class="data-safety-promo">
          
          <!-- Mục 1: Ứng dụng chia sẻ dữ liệu -->
          <div class="media-item">
            <img src="https://play-lh.googleusercontent.com/iFstqoxDElUVv4T3KxkxP3OTcuFvWF5ZQQjT7aIxy4n2uaVigCCykxeG6EZV9FQ10X1itPj1oORm=s20-rw" 
                 srcset="https://play-lh.googleusercontent.com/iFstqoxDElUVv4T3KxkxP3OTcuFvWF5ZQQjT7aIxy4n2uaVigCCykxeG6EZV9FQ10X1itPj1oORm=s40-rw 2x" 
                 class="img-contain media-item__icon" aria-hidden="true" alt="Icon" />
            <div>
              Ứng dụng này có thể chia sẻ những loại dữ liệu sau đây với bên thứ ba
              <div class="media-item__body">${shareInfo}</div>
            </div>
          </div>

          <!-- Mục 2: Ứng dụng thu thập dữ liệu -->
          <div class="media-item">
            <img src="https://play-lh.googleusercontent.com/12USW7aflgz466ifDehKTnMoAep_VHxDmKJ6jEBoDZWCSefOC-ThRX14Mqe0r8KF9XCzrpMqJts=s20-rw" 
                 srcset="https://play-lh.googleusercontent.com/12USW7aflgz466ifDehKTnMoAep_VHxDmKJ6jEBoDZWCSefOC-ThRX14Mqe0r8KF9XCzrpMqJts=s40-rw 2x"
                 class="img-contain media-item__icon" aria-hidden="true" alt="Icon" />
            <div>
              Ứng dụng này có thể thu thập những loại dữ liệu sau đây
              <div class="media-item__body">${collectInfo}</div>
            </div>
          </div>

          <!-- Mục 3: Dữ liệu được mã hóa -->
          <div class="media-item">
            <img src="https://play-lh.googleusercontent.com/W5DPtvB8Fhmkn5LbFZki_OHL3ZI1Rdc-AFul19UK4f7np2NMjLE5QquD6H0HAeEJ977u3WH4yaQ=s20-rw" 
                 srcset="https://play-lh.googleusercontent.com/W5DPtvB8Fhmkn5LbFZki_OHL3ZI1Rdc-AFul19UK4f7np2NMjLE5QquD6H0HAeEJ977u3WH4yaQ=s40-rw 2x"
                 class="img-contain media-item__icon" aria-hidden="true" alt="Icon" />
            <div>Dữ liệu được mã hóa trong khi chuyển</div>
          </div>

          <!-- Mục 4: Người dùng có thể yêu cầu xóa dữ liệu -->
          <div class="media-item">
            <img src="https://play-lh.googleusercontent.com/ohRyQRA9rNfhp7xLW0MtW1soD8SEX45Oec7MyH3FaxtukWUG_6GKVpvh3JiugzryLi7Bia02HPw=s20-rw" 
                 srcset="https://play-lh.googleusercontent.com/ohRyQRA9rNfhp7xLW0MtW1soD8SEX45Oec7MyH3FaxtukWUG_6GKVpvh3JiugzryLi7Bia02HPw=s40-rw 2x"
                 class="img-contain media-item__icon" aria-hidden="true" alt="Icon" />
            <div>Bạn có thể yêu cầu xóa dữ liệu</div>
          </div>

          <!-- Nút xem chi tiết -->
          <div class="button-wrapper">
            <div class="button__touch-wrapper">
              <div class="button button--contained button--secondary focus-visible button--text-green button--margin-y-medium">
                <div class="ripple--bounded"></div>
                <span class="button__label">Xem chi tiết</span>
                <a class="stretched-link button__touch-target" 
                   href="/store/apps/datasafety?id=${packageId}" 
                   aria-label="Xem thêm thông tin chi tiết về an toàn dữ liệu"></a>
                <div class="button__focus-ring"></div>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    // ----- TRƯỜNG HỢP: TEXT BÌNH THƯỜNG -----
    else {
      const content = this.getAttr("content", ""); // Nội dung văn bản
      bodyContent = `<div itemprop="description">${content}</div>`;
    }

    // ----- HTML CHUNG CỦA SECTION -----
    this.innerHTML = `
      <section class="content-section">
        <header class="content-section__header">
          <div class="section-header-inner">
            <div class="content-section__title-wrapper">
              <h2 class="content-section__title">${title}</h2>
            </div>

            <!-- Icon điều hướng chỉ xuất hiện nếu type = safety -->
            ${type === 'safety' ? `
            <div class="icon-button icon-button--fix-stacking is-focussed icon-button--pull-margin">
                <div class="icon-button--fix-stacking"></div>
                <svg class="app-actions content-section__header-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                  <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                </svg>
                <a class="stretched-link" href="/store/apps/datasafety?id=${this.getAttr("package-id")}" aria-label="Xem chi tiết"></a>
            </div>` : ''}

          </div>
        </header>

        <!-- Thân section -->
        <div class="content-section__body">
          ${bodyContent}
        </div>
      </section>
    `;
  }
}

// Đăng ký custom element
customElements.define('app-content-section', AppContentSection);
