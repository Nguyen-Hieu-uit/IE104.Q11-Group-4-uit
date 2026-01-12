class HomeFilter extends HTMLElement {
  connectedCallback() {
    this.render();
    this.initEvents();
  }

  render() {
    this.innerHTML = `
      <div class="filter_format">
        <div class="filter-content-wrapper">
          <div class="filter-bar-scroll-container">
            
            <div class="platform-item dropdown">
              <div class="platform-button" data-default="Tính phí">
                <div class="ripple-effect"></div>
                <div class="button-content">
                  <span class="button-prefix">
                    <svg class="button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-120q-116 0-213-64.5T135-350h82q31 79 97.5 124T480-180q83 0 141.5-58.5T680-420q0-70-42-116.5T520-610q-51-24-81-43t-30-51q0-31 21-51.5T480-780q27 0 52 11.5T573-740h82q-20-41-48.5-63T520-820q-83 0-141.5 58.5T320-680q0 70 42 116.5T480-490q51 24 81 43t30 51q0 31-21 51.5T520-320q-27 0-52-11.5T427-360h-82q20 41 48.5 63T480-280q83 0 141.5-58.5T680-420h80q-50 143-138.5 211.5T480-120Z"/></svg>
                  </span>
                  <span class="button-label">Tính phí</span>
                </div>
              </div>
              <div class="dropdown-content">
                <div class="platform-item"><div class="platform-button"><div class="ripple-effect"></div><div class="button-content"><span class="button-label">Miễn phí</span></div></div></div>
                <div class="platform-item"><div class="platform-button"><div class="ripple-effect"></div><div class="button-content"><span class="button-label">Có tính phí</span></div></div></div>
              </div>
            </div>

            <div class="platform-item dropdown">
              <div class="platform-button" data-default="Thiết bị">
                <div class="ripple-effect"></div>
                <div class="button-content">
                  <span class="button-prefix"><svg class="button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M320-120v-80h80v-80H160q-33 0-56.5-23.5T80-360v-400q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v400q0 33-23.5 56.5T800-280H560v80h80v80H320ZM160-360h640v-400H160v400Zm0 0v-400 400Z"/></svg></span>
                  <span class="button-label">Thiết bị</span>
                </div>
              </div>
              <div class="dropdown-content">
                <div class="platform-item"><div class="platform-button"><div class="ripple-effect"></div><div class="button-content"><span class="button-label">Windows</span></div></div></div>
                <div class="platform-item"><div class="platform-button"><div class="ripple-effect"></div><div class="button-content"><span class="button-label">Điện thoại</span></div></div></div>
                <div class="platform-item"><div class="platform-button"><div class="ripple-effect"></div><div class="button-content"><span class="button-label">Máy tính bảng</span></div></div></div>
                <div class="platform-item"><div class="platform-button"><div class="ripple-effect"></div><div class="button-content"><span class="button-label">Ti vi</span></div></div></div>
              </div>
            </div>

            <div class="platform-item dropdown">
              <div class="platform-button" data-default="Danh mục">
                <div class="ripple-effect"></div>
                <div class="button-content">
                  <span class="button-prefix"><svg class="button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M120-120v-320h320v320H120Zm0-400v-320h320v320H120Zm400 400v-320h320v320H520Zm0-400v-320h320v320H520Z"/></svg></span>
                  <span class="button-label">Danh mục</span>
                </div>
              </div>
              <div class="dropdown-content">
                 <div class="platform-item"><div class="platform-button"><div class="ripple-effect"></div><div class="button-content"><span class="button-label">Moba</span></div></div></div>
                 <div class="platform-item"><div class="platform-button"><div class="ripple-effect"></div><div class="button-content"><span class="button-label">Bắn súng</span></div></div></div>
                 <div class="platform-item"><div class="platform-button"><div class="ripple-effect"></div><div class="button-content"><span class="button-label">Chiến thuật</span></div></div></div>
                 <div class="platform-item"><div class="platform-button"><div class="ripple-effect"></div><div class="button-content"><span class="button-label">Giáo dục</span></div></div></div>
                 <div class="platform-item"><div class="platform-button"><div class="ripple-effect"></div><div class="button-content"><span class="button-label">RPG</span></div></div></div>
                 <div class="platform-item"><div class="platform-button"><div class="ripple-effect"></div><div class="button-content"><span class="button-label">Hành động</span></div></div></div>
              </div>
            </div>

            <div class="platform-item js-btn-new">
              <div class="platform-button new-filter-button">
                <div class="ripple-effect"></div>
                <div class="button-content">
                  <span class="button-prefix"><svg class="button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M440-200l-48-102-102-48 102-48 48-102 48 102 102 48-102 48-48 102Zm160 120-32-68-68-32 68-32 32-68 32 68 68 32-68 32-32 68Zm-320 0-32-68-68-32 68-32 32-68 32 68 68 32-68 32-32 68Z"/></svg></span>
                  <span class="button-label">Mới</span>
                </div>
              </div>
            </div>

            <div class="platform-item js-btn-clear">
              <div class="platform-button js-clear-filter-btn">
                <div class="ripple-effect"></div>
                <div class="button-content">
                  <span class="button-prefix"><svg class="button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></span>
                  <span class="button-label">Clear filters</span>
                </div>
              </div>
            </div>

             <div class="platform-item js-btn-ranking">
              <div class="platform-button" id="openRankingBtn">
                <div class="ripple-effect"></div>
                <div class="button-content">
                  <span class="button-prefix"><svg class="button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M440-200l-48-102-102-48 102-48 48-102 48 102 102 48-102 48-48 102Zm160 120-32-68-68-32 68-32 32-68 32 68 68 32-68 32-32 68Zm-320 0-32-68-68-32 68-32 32-68 32 68 68 32-68 32-32 68Z"/></svg></span>
                  <span class="button-label">Bảng xếp hạng</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    `;
  }

  initEvents() {
    // 1. Xử lý dropdown chính
    const mainButtons = this.querySelectorAll(".platform-button[data-default]");
    mainButtons.forEach((btn) => {
      const content = btn.querySelector(".button-content");
      if (content) btn.dataset.defaultHtml = content.innerHTML;

      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        this.toggleDropdown(btn);
      });
    });

    // 2. Xử lý chọn option con
    this.querySelectorAll(".dropdown-content .platform-button").forEach(
      (subBtn) => {
        subBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          this.selectOption(subBtn);
        });
      }
    );

    // 3. Nút Mới
    const newBtn = this.querySelector(".new-filter-button");
    if (newBtn) {
      newBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        this.closest(".platform-button").classList.toggle("is-active");
      });
    }

    // 4. Clear Filter (Dùng class để query trong phạm vi component)
    const clearBtn = this.querySelector(".js-clear-filter-btn");
    if (clearBtn) {
      clearBtn.addEventListener("click", () => this.clearFilters());
    }

    // 5. Đóng dropdown khi click ra ngoài
    window.addEventListener("click", () => {
      this.closeAllDropdowns();
    });
  }

  toggleDropdown(btn) {
    const parent = btn.closest(".platform-item.dropdown");
    const dropdown = parent.querySelector(".dropdown-content");
    const isClosed = !dropdown.classList.contains("show");

    this.closeAllDropdowns();

    if (isClosed) {
      dropdown.classList.add("show");
      if (dropdown.querySelectorAll(".platform-item").length < 4) {
        dropdown.classList.add("flex-layout");
      }
    }
  }

  selectOption(optionBtn) {
    const dropdown = optionBtn.closest(".dropdown-content");
    const parent = dropdown.closest(".platform-item.dropdown");
    const mainBtn = parent.querySelector(".platform-button[data-default]");

    dropdown
      .querySelectorAll(".platform-button")
      .forEach((b) => b.classList.remove("is-active"));
    optionBtn.classList.add("is-active");

    const newContent = optionBtn.querySelector(".button-content").innerHTML;
    mainBtn.querySelector(".button-content").innerHTML = newContent;
    mainBtn.classList.add("is-active");

    this.closeAllDropdowns();
  }

  clearFilters() {
    this.querySelectorAll(".platform-button[data-default]").forEach((btn) => {
      if (btn.dataset.defaultHtml) {
        btn.querySelector(".button-content").innerHTML =
          btn.dataset.defaultHtml;
      }
      btn.classList.remove("is-active");
    });
    this.querySelectorAll(".dropdown-content .platform-button").forEach((b) =>
      b.classList.remove("is-active")
    );

    const newBtn = this.querySelector(".new-filter-button");
    if (newBtn)
      newBtn.closest(".platform-button").classList.remove("is-active");
  }

  closeAllDropdowns() {
    this.querySelectorAll(".dropdown-content").forEach((d) =>
      d.classList.remove("show", "flex-layout")
    );
  }
}
customElements.define("home-filter", HomeFilter);
