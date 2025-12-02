// Component GameDescription hiển thị phần mô tả game giống Google Play
class GameDescription extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // Khi component được gắn vào DOM → render nội dung
    this.render();
  }

  render() {
    // RENDER cấu trúc HTML của phần mô tả trò chơi
    this.innerHTML = `
      <section class="content-section">

        <!-- HEADER: Tiêu đề + nút mở rộng -->
        <header class="content-section__header">
          <div class="section-header-inner">

            <!-- Tiêu đề lớn của phần -->
            <div class="content-section__title-wrapper">
              <h2 class="content-section__title">
                Giới thiệu về trò chơi này
              </h2>
            </div>

            <!-- Nút icon dạng mũi tên để xem thêm -->
            <button class="icon-button icon-button--fix-stacking is-focussed icon-button--pull-margin"
              aria-label="Xem thêm thông tin về Giới thiệu về trò chơi này">

              <div class="icon-button--fix-stacking"></div>

              <!-- Icon mũi tên -->
              <svg class="button__icon content-section__header-arrow"
                   xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 -960 960 960">
                <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"></path>
              </svg>
            </button>

          </div>
        </header>

        <!-- BODY: Phần mô tả chi tiết -->
        <div class="content-section__body">

          <!-- Thẻ meta mô tả ngắn -->
          <meta itemprop="description"
            content="Bước vào thế giới kẹo ngọt của trò chơi xếp hình giải đố. Chơi không cần mạng!" />

          <!-- Nội dung mô tả dài của game -->
          <div class="app-description" data-g-id="description">
            Chinh phục trò chơi xếp hình match 3 huyền thoại từ
            King và tận hưởng niềm vui bất tận! Với hàng nghìn tỷ
            màn chơi đã được hoàn thành, Candy Crush Saga là trò
            chơi xếp hình match 3 phổ biến nhất!<br /><br />
            
            Ghép, nổ và thổi bay những viên kẹo trong cuộc phiêu lưu
            giải đố đầy hương vị này để chuyển sang màn chơi tiếp theo
            và nhận những vụ nổ đường! Chinh phục các câu đố xếp hình
            với suy nghĩ nhanh nhạy và những nước đi thông minh để được
            thưởng bằng các combo kẹo cực ngon và phần thưởng ngọt ngào.<br /><br />

            Phết mứt bằng cách ghép 3 hoặc nhiều viên kẹo liên tiếp
            và thổi bay những câu đố dính chặt bằng các con cá Thụy Điển!
            Thổi bay mứt và sô-cô-la để thu thập nước kẹo ngọt ngào qua
            hàng nghìn màn chơi giải đố xếp hình, đảm bảo bạn sẽ muốn chơi thêm nữa!<br /><br />

            TRỞ THÀNH BẬC THẦY VƯƠNG QUỐC KẸO<br /><br />

            Chiến thắng hàng nghìn câu đố xếp hình ngọt ngào: với các câu đố
            mới được thêm vào cứ mỗi 2 tuần, niềm vui ngọt ngào sẽ luôn ở bên bạn!<br />

            NHẬN PHẦN THƯỞNG NGỌT NGÀO<br /><br />

            Quay Vòng Quay Booster Hàng Ngày để nhận Cá Thụy Điển và
            các phần thưởng ngon lành khác! Chinh phục các thử thách
            giải đố xếp hình có thời hạn để nhận các booster và xóa sạch mứt!<br /><br />

            ĐA DẠNG CÁC TRÒ CHƠI XẾP HÌNH NGỌT NGÀO<br /><br />

            Nhiều cách chơi ngọt ngào! Chơi các chế độ giải đố xếp hình
            và nhiều hơn nữa bao gồm Sweet Escape và Clear the Jelly.<br />

            Lên cấp khi chơi các câu đố giải đố xếp hình từ dễ đến khó,
            có thể truy cập trực tuyến hoặc offline. Trò chơi giải trí hoàn hảo
            cho mọi lúc mọi nơi!<br /><br />

            THỔI BAY KẸO CÙNG BẠN BÈ<br /><br />

            Ghép và nổ kẹo để leo lên đỉnh bảng xếp hạng! So sánh điểm số
            với bạn bè và xem ai là bậc thầy xếp hình match 3!<br />

            Tận hưởng trò chơi xếp hình ngọt ngào nhất!<br /><br />

            Nếu bạn muốn chinh phục và thổi bay nhiều câu đố hơn, bạn cũng có thể
            thưởng thức các trò chơi khác từ King...<br /><br />

            Candy Crush Saga miễn phí để chơi nhưng các vật phẩm trong game yêu cầu thanh toán...<br /><br />

            Giấy xác nhận số 28/GXN-PTTTH&amp;TTĐT do Cục Phát thanh,
            Truyền hình và Thông tin điện tử cấp ngày 6/2/2024
          </div>

          <!-- Ngày cập nhật gần đây -->
          <div class="metadata-grid">
            <div class="metadata-item__label">Lần cập nhật gần đây nhất</div>
            <div class="metadata-item__value">31 thg 10, 2025</div>
          </div>

          <!-- Danh sách các tag -->
          <div class="tag-group">
            ${this.renderTags()}
          </div>

        </div>
      </section>
    `;
  }

  // Hàm tạo danh sách các tag (giúp code gọn hơn)
  renderTags() {

    // Danh sách tag có 2 loại:
    // 1. isTextOnly = true → Tag chỉ là text, không phải link
    // 2. Tag có link → click được
    const tags = [
      { label: "#2 ứng dụng có doanh thu cao nhất phổ thông", isTextOnly: true },
      { label: "Giải đố", link: "/store/apps/category/GAME_PUZZLE" },
      { label: "Ghép 3", link: "/store/search?q=Tr%C3%B2+ch%C6%A1i+gh%C3%A9p+3&c=apps" },
      { label: "Phổ thông", link: "/store/apps/category/GAME_CASUAL" },
      { label: "Một người chơi", link: "/store/search?q=Tr%C3%B2+ch%C6%A1i+m%E1%BB%99t+ng%C6%B0%E1%BB%9Di+ch%C6%A1i&c=apps" },
      { label: "Tạo kiểu", link: "/store/search?q=Tr%C3%B2+ch%C6%A1i+t%E1%BA%A1o+ki%E1%BB%83u&c=apps" },
      { label: "Thực phẩm", link: "/store/search?q=Tr%C3%B2+ch%C6%A1i+v%E1%BB%81+th%E1%BB%A9c+%C4%83n&c=apps" },
      { label: "Kẹo", link: "/store/search?q=Tr%C3%B2+ch%C6%A1i+v%E1%BB%81+k%E1%BA%B9o+ng%E1%BB%8Dt&c=apps" },
      { label: "Khác", link: "/store/search?q=Tr%C3%B2+ch%C6%A1i+kh%C3%A1c&c=apps" },
      { label: "Đố vui", link: "/store/search?q=Tr%C3%B2+ch%C6%A1i+gi%E1%BA%A3i+%C4%91%E1%BB%91&c=apps" },
      { label: "Ngoại tuyến", link: "/store/search?q=Tr%C3%B2+ch%C6%A1i+kh%C3%B4ng+c%E1%BA%A7n+Internet&c=apps" }
    ];

    // Tạo HTML cho từng tag
    return tags.map(tag => `
      <div class="button__touch-wrapper">

        ${
      // Trường hợp tag chỉ là text
      tag.isTextOnly
        ?
        `
          <button class="button button--outlined button--contained chip will-change-reset ripple-border-fix focus-visible chip--outlined">
            <div class="ripple--bounded"></div>
            <div class="button__focus-ring"></div>
            <div class="button__touch-target"></div>
            <span class="button__label">${tag.label}</span>
          </button>
          `
        :
        // Trường hợp tag là link
        `
          <div class="button button--outlined button--contained chip will-change-reset ripple-border-fix focus-visible chip--outlined">
            <div class="ripple--bounded"></div>

            <!-- Text của tag -->
            <span class="button__label" aria-hidden="true">${tag.label}</span>

            <!-- Link chiếm toàn bộ nút -->
            <a class="stretched-link button__touch-target"
               href="${tag.link}"
               aria-label="${tag.label}">
            </a>

            <div class="button__focus-ring"></div>
          </div>
          `
      }

      </div>
    `).join('');
  }
}

// Đăng ký custom element để có thể dùng <game-description>
customElements.define('game-description', GameDescription);
