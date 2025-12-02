class MainCarousel extends HTMLElement {
  connectedCallback() {
    this.render();
    this.initCarousel();
  }

  render() {
    // Sử dụng Template String để chứa HTML
    this.innerHTML = `
    <div class="app-section">
      <div class="carousel-wrapper">
        <div class="epic_carousel">
          <div class="carousel-section">
            <div class="carousel-body">

              <div class="carousel-main-slide-area">
                <div class="carousel-aspect-box">
                  <div class="carousel-slide-fitter">
                    
                    <div class="carousel-slide active">
                      <div class="slide-content-wrapper">
                        <a href="https://www.fortnite.com/news/introducing-fortnite-sidekicks" class="slide-link" target="_blank">
                          <div class="slide-image-wrapper">
                             <div class="slide-image-wrapper">
                                <img src="https://cdn2.unrealengine.com/egs-anno-117-pax-romana-carousel-desktop-1920x1080-38235212f6fb.jpg?resize=1&w=1280&h=720&quality=medium" class="slide-image" />
                             </div>
                             <div class="slide-gradient-overlay"></div>
                          </div>
                        </a>

                        <div class="slide-info-box">
                          <div>
                             <div class="slide-promo-logo" style="background-image: url(https://cdn2.unrealengine.com/egs-anno-117-carousel-logo-350x100-e6cec3402b4e.png);"></div>
                             
                             <div class="slide-description-wrapper">
                                <div class="slide-text-content">
                                   <span class="text-base text-sale-tag text-color-primary">Xây dựng Đế Quốc La Mã của bạn!</span>
                                   <span class="text-base text-description text-color-primary"><div class="text-truncate">Trải nghiệm trò chơi xây dựng đỉnh cao và thiết kế thành phố trong mơ vào thời kỳ hoàng kim của Đế Quốc La Mã. Hiện đã ra mắt!</div></span>
                                </div>
                             </div>
                          </div>

                          <div class="slide-offer-details">
                             <div class="slide-price-block">
                                <div class="slide-price-container">
                                   <div class="slide-price-segment"><div class="carousel-price-wrapper"><span class="carousel-price-text">990.000&nbsp;₫</span></div></div>
                                </div>
                             </div>
                             <div class="app-actions slide-buttons">
                                <div class="app-actions__install-wrapper"><div class="install-button-wrapper"><div class="install-component-wrapper"><div class="flex-container layout-col-to-row"><div><div class="button-wrapper"><div class="button__touch-wrapper"><button class="button button--theme-green button--contained button--typography button--padding-x-large focus-visible button--shape-rounded button--text-light button--sizing-responsive button--primary width-full-to-auto"><div class="ripple--bounded"></div><span class="button__label">Cài đặt khác</span></button></div></div></div></div></div></div></div>
                                <div class="btn-container"><div><div class="button-wrapper"><div class="button__touch-wrapper"><button class="button button--contained button--secondary focus-visible button--text-green" aria-label="Chia sẻ"><div class="ripple--bounded"></div><span class="button__label">Chia sẻ</span></button></div></div></div></div>
                             </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-slide">
                       <div class="slide-content-wrapper">
                          <a href="#" class="slide-link"><div class="slide-image-wrapper"><img src="https://cdn2.unrealengine.com/egs-fortnite-sidekicks-carousel-desktop-1920x1080-ab679c4d991d.jpg?resize=1&w=1280&h=720&quality=medium" class="slide-image"/><div class="slide-gradient-overlay"></div></div></a>
                          <div class="slide-info-box">
                             <div class="slide-promo-logo"></div> <div class="slide-description-wrapper"><div class="slide-text-content"><span class="text-base text-sale-tag text-color-primary">Giảm giá 20%</span><span class="text-base text-description text-color-primary">Trải nghiệm lối chơi co-op hấp dẫn! Tiết kiệm khi mua Split Fiction từ 05/11 tới 11/11.</span></div></div>
                              <div class="slide-offer-details"><div class="slide-price-block"><div class="slide-price-container"><div class="slide-price-segment"><div class="discount-badge-wrapper"><div class="discount-badge discount-badge--primary discount-badge--contained"><span class="discount-badge-text">-20%</span></div></div></div><div class="slide-price-segment"><div class="carousel-price-wrapper"><span class="carousel-price-text"><span class="discount-price">899.000&nbsp;₫</span>*</span></div><div class="carousel-price-wrapper"><span class="carousel-price-text">719.200&nbsp;₫</span></div></div></div></div><div class="app-actions slide-buttons"><div class="app-actions__install-wrapper"><div class="install-button-wrapper"><div class="install-component-wrapper"><div class="flex-container layout-col-to-row"><div><div class="button-wrapper"><div class="button__touch-wrapper"><button class="button button--theme-green button--contained button--typography button--padding-x-large focus-visible button--shape-rounded button--text-light button--sizing-responsive button--primary width-full-to-auto"><div class="ripple--bounded"></div><span class="button__label">Cài đặt</span></button></div></div></div></div></div></div></div></div></div>
                          </div>
                       </div>
                    </div>
                    
                    <div class="carousel-slide">
                        <div class="slide-content-wrapper"><a href="#" class="slide-link"><div class="slide-image-wrapper"><div class="slide-image-wrapper"><picture class="slide-picture"><img src="https://cdn2.unrealengine.com/egs-where-winds-meet-carousel-desktop-1920x1080-be985266a2c7.jpg" class="slide-image"/></picture></div><div class="slide-gradient-overlay"></div></div></a><div class="slide-info-box"><div><div class="slide-promo-logo" style="background-image: url(https://cdn2.unrealengine.com/egs-where-winds-meet-carousel-logo-350x350-6eff371c9170.png);"></div><div class="slide-description-wrapper"><div class="slide-text-content"><span class="text-base text-sale-tag text-color-primary">Hiện đã ra mắt</span><span class="text-base text-description text-color-primary"><div class="grid-container"><div class="text-truncate">Tự viết nên câu chuyện võ hiệp truyền kỳ giữa ngọn gió của một triều đại phân ly.</div></div></span></div></div></div><div class="slide-offer-details"><div class="slide-price-block"><div class="slide-price-container"><div class="slide-price-segment"><div class="carousel-price-wrapper"><div class="carousel-price-wrapper"><span class="carousel-price-text">Miễn phí</span></div></div></div></div></div><div class="app-actions slide-buttons"><div class="app-actions__install-wrapper"><div class="install-button-wrapper"><div class="install-component-wrapper"><div class="flex-container layout-col-to-row"><div><div class="button-wrapper"><div class="button__touch-wrapper"><button class="button button--theme-green button--contained button--typography button--padding-x-large focus-visible button--shape-rounded button--text-light button--sizing-responsive button--primary width-full-to-auto"><div class="ripple--bounded"></div><span class="button__label">Cài đặt</span></button></div></div></div></div></div></div></div></div></div></div></div>
                     </div>
                     
                     <div class="carousel-slide">
                        <div class="slide-content-wrapper"><a href="#" class="slide-link"><div class="slide-image-wrapper"><div class="slide-image-wrapper"><picture class="slide-picture"><img src="https://cdn2.unrealengine.com/egs-ride-6-carousel-desktop-1920x1080-bb57bf821703.jpg?resize=1&w=1280&h=720&quality=medium" class="slide-image"/></picture></div><div class="slide-gradient-overlay"></div></div></a><div class="slide-info-box"><div><div class="slide-promo-logo" style="background-image: url(https://cdn2.unrealengine.com/egs-ride-6-carousel-logo-350x96-f9979be0d50f.png);"></div><div class="slide-description-wrapper"><div class="slide-text-content"><span class="text-base text-sale-tag text-color-primary">Hiện có sẵn để mua trước</span><span class="text-base text-description text-color-primary"><div class="grid-container"><div class="text-truncate">Nhảy lên yên xe và mua trước RIDE 6 ngay trên Epic Games Store!</div></div></span></div></div></div><div class="slide-offer-details"><div class="slide-price-block"><div class="slide-price-container"><div class="slide-price-segment"><div class="carousel-price-wrapper"><div class="carousel-price-wrapper"><span class="carousel-price-text">999.000&nbsp;₫</span></div></div></div></div></div><div class="app-actions slide-buttons"><div class="app-actions__install-wrapper"><div class="install-button-wrapper"><div class="install-component-wrapper"><div class="flex-container layout-col-to-row"><div><div class="button-wrapper"><div class="button__touch-wrapper"><button class="button button--theme-green button--contained button--typography button--padding-x-large focus-visible button--shape-rounded button--text-light button--sizing-responsive button--primary width-full-to-auto"><div class="ripple--bounded"></div><span class="button__label">Cài đặt</span></button></div></div></div></div></div></div></div></div></div></div></div>
                     </div>
                     
                     <div class="carousel-slide">
                        <div class="slide-content-wrapper"><a href="#" class="slide-link"><div class="slide-image-wrapper"><div class="slide-image-wrapper"><picture class="slide-picture"><img src="https://cdn2.unrealengine.com/egs-anno-117-pax-romana-carousel-desktop-1920x1080-38235212f6fb.jpg?resize=1&w=1280&h=720&quality=medium" class="slide-image"/></picture></div><div class="slide-gradient-overlay"></div></div></a><div class="slide-info-box"><div><div class="slide-promo-logo" style="background-image: url(https://cdn2.unrealengine.com/egs-anno-117-carousel-logo-350x100-e6cec3402b4e.png);"></div><div class="slide-description-wrapper"><div class="slide-text-content"><span class="text-base text-sale-tag text-color-primary">Xây dựng Đế Quốc La Mã của bạn!</span><span class="text-base text-description text-color-primary"><div class="grid-container"><div class="text-truncate">Trải nghiệm trò chơi xây dựng đỉnh cao.</div></div></span></div></div></div><div class="slide-offer-details"><div class="slide-price-block"><div class="slide-price-container"><div class="slide-price-segment"><div class="carousel-price-wrapper"><div class="carousel-price-wrapper"><span class="carousel-price-text">990.000&nbsp;₫</span></div></div></div></div></div><div class="app-actions slide-buttons"><div class="app-actions__install-wrapper"><div class="install-button-wrapper"><div class="install-component-wrapper"><div class="flex-container layout-col-to-row"><div><div class="button-wrapper"><div class="button__touch-wrapper"><button class="button button--theme-green button--contained button--typography button--padding-x-large focus-visible button--shape-rounded button--text-light button--sizing-responsive button--primary width-full-to-auto"><div class="ripple--bounded"></div><span class="button__label">Cài đặt</span></button></div></div></div></div></div></div></div></div></div></div></div>
                     </div>
                     
                     <div class="carousel-slide">
                        <div class="slide-content-wrapper"><a href="#" class="slide-link"><div class="slide-image-wrapper"><div class="slide-image-wrapper"><picture class="slide-picture"><img src="https://cdn2.unrealengine.com/egs-marvel-rivals-season-5-desktop-1920x1080-cf2e84cd55b1.jpg?resize=1&w=1280&h=720&quality=medium" class="slide-image"/></picture></div><div class="slide-gradient-overlay"></div></div></a><div class="slide-info-box"><div><div class="slide-promo-logo" style="background-image: url(https://cdn2.unrealengine.com/egs-marvel-rivals-carousel-logo-350x141-d34127eafe14.png);"></div><div class="slide-description-wrapper"><div class="slide-text-content"><span class="text-base text-sale-tag text-color-primary">Mùa 5.0 đã ra mắt</span><span class="text-base text-description text-color-primary"><div class="grid-container"><div class="text-truncate">Mùa mới hiện ra đã mắt! Hãy cùng chúng tôi khám phá anh hùng mới: Gambit và Rogue.</div></div></span></div></div></div><div class="slide-offer-details"><div class="slide-price-block"><div class="slide-price-container"><div class="slide-price-segment"><div class="carousel-price-wrapper"><div class="carousel-price-wrapper"><span class="carousel-price-text">Miễn phí</span></div></div></div></div></div><div class="app-actions slide-buttons"><div class="app-actions__install-wrapper"><div class="install-button-wrapper"><div class="install-component-wrapper"><div class="flex-container layout-col-to-row"><div><div class="button-wrapper"><div class="button__touch-wrapper"><button class="button button--theme-green button--contained button--typography button--padding-x-large focus-visible button--shape-rounded button--text-light button--sizing-responsive button--primary width-full-to-auto"><div class="ripple--bounded"></div><span class="button__label">Cài đặt</span></button></div></div></div></div></div></div></div></div></div></div></div>
                     </div>

                  </div>
                </div>
              </div>

              <div class="carousel-nav-sidebar">
                <ul class="carousel-nav-list">
                  
                  <li class="carousel-nav-item active">
                    <div class="carousel-nav-button">
                       <div class="nav-button-image-wrapper"><div class="nav-image-aspect-box"><div class="carousel-slide-fitter"><img class="nav-button-image" src="https://cdn2.unrealengine.com/egs-anno-117-pax-romana-carousel-thumb-1200x1600-0394ee05489b.jpg?resize=1&w=96&h=128&quality=medium"/></div></div></div>
                       <span class="text-base text-style-small text-color-primary z-index-1">Anno 117: Pax Romana</span>
                       <div class="nav-progress-bar"></div>
                    </div>
                  </li>

                  <li class="carousel-nav-item">
                    <div class="carousel-nav-button">
                       <div class="nav-button-image-wrapper"><div class="nav-image-aspect-box"><div class="carousel-slide-fitter"><img class="nav-button-image" src="https://cdn2.unrealengine.com/en-egs-honkai-star-rail-3-7-carousel-thumb-1200x1600-32d8a735e9ec.jpg?resize=1&w=96&h=128&quality=medium"/></div></div></div>
                       <span class="text-base text-style-small text-color-primary z-index-1">Honkai: Star Rail</span>
                       <div class="nav-progress-bar"></div>
                    </div>
                  </li>

                  <li class="carousel-nav-item">
                    <div class="carousel-nav-button">
                       <div class="nav-button-image-wrapper"><div class="nav-image-aspect-box"><div class="carousel-slide-fitter"><img class="nav-button-image" src="https://cdn2.unrealengine.com/egs-where-winds-meet-carousel-thumb-3-1200x1600-b435eb16e45b.jpg?resize=1&w=96&h=128&quality=medium"/></div></div></div>
                       <span class="text-base text-style-small text-color-primary z-index-1">Where Winds Meet</span>
                       <div class="nav-progress-bar"></div>
                    </div>
                  </li>

                  <li class="carousel-nav-item">
                    <div class="carousel-nav-button">
                       <div class="nav-button-image-wrapper"><div class="nav-image-aspect-box"><div class="carousel-slide-fitter"><img class="nav-button-image" src="https://cdn2.unrealengine.com/egs-marvel-rivals-season-5-thumb-1200x1600-49cd70c263ec.jpg?resize=1&w=96&h=128&quality=medium"/></div></div></div>
                       <span class="text-base text-style-small text-color-primary z-index-1">Marvel Rivals</span>
                       <div class="nav-progress-bar"></div>
                    </div>
                  </li>

                  <li class="carousel-nav-item">
                    <div class="carousel-nav-button">
                       <div class="nav-button-image-wrapper"><div class="nav-image-aspect-box"><div class="carousel-slide-fitter"><img class="nav-button-image" src="https://cdn2.unrealengine.com/egs-split-fiction-carousel-thumb-1200x1600-9b5a96bf6479.jpg?resize=1&w=96&h=128&quality=medium"/></div></div></div>
                       <span class="text-base text-style-small text-color-primary z-index-1">Split Fiction</span>
                       <div class="nav-progress-bar"></div>
                    </div>
                  </li>

                  <li class="carousel-nav-item">
                    <div class="carousel-nav-button">
                       <div class="nav-button-image-wrapper"><div class="nav-image-aspect-box"><div class="carousel-slide-fitter"><img class="nav-button-image" src="https://cdn2.unrealengine.com/egs-ride-6-carousel-thumb-1200x1600-488c39ac0678.jpg?resize=1&w=96&h=128&quality=medium"/></div></div></div>
                       <span class="text-base text-style-small text-color-primary z-index-1">RIDE 6</span>
                       <div class="nav-progress-bar"></div>
                    </div>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    `;
  }

  initCarousel() {
    this.slides = this.querySelectorAll(".carousel-slide");
    this.navItems = this.querySelectorAll(".carousel-nav-item");
    this.currentIndex = 0;
    this.AUTOPLAY_DURATION = 5000;
    this.interval = null;

    // Gán sự kiện click cho từng Nav Item
    this.navItems.forEach((item, index) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        if (index === this.currentIndex) return;
        this.showSlide(index);
        this.resetAutoplay();
      });
    });

    this.startAutoplay();
  }

  showSlide(index) {
    // Remove active cũ
    if (this.slides[this.currentIndex])
      this.slides[this.currentIndex].classList.remove("active");
    if (this.navItems[this.currentIndex]) {
      this.navItems[this.currentIndex].classList.remove("active");
      // Reset style opacity thủ công nếu CSS chưa handle
      const content = this.navItems[this.currentIndex].querySelector(
        ".carousel-nav-item-content"
      );
      if (content) content.style.opacity = "";
    }

    this.currentIndex = index;

    // Add active mới
    if (this.slides[this.currentIndex])
      this.slides[this.currentIndex].classList.add("active");
    if (this.navItems[this.currentIndex]) {
      this.navItems[this.currentIndex].classList.add("active");
      // Set opacity
      const content = this.navItems[this.currentIndex].querySelector(
        ".carousel-nav-item-content"
      );
      if (content) content.style.opacity = "1";
    }
  }

  nextSlide() {
    const next = (this.currentIndex + 1) % this.slides.length;
    this.showSlide(next);
  }

  startAutoplay() {
    this.interval = setInterval(() => this.nextSlide(), this.AUTOPLAY_DURATION);
  }

  resetAutoplay() {
    clearInterval(this.interval);
    this.startAutoplay();
  }

  disconnectedCallback() {
    clearInterval(this.interval);
  }
}
customElements.define("main-carousel", MainCarousel);