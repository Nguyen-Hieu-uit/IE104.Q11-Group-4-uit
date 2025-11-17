// Render dynamic sections on home page (ranking + one featured games row)

document.addEventListener("DOMContentLoaded", () => {
  // Render ranking list
  const rankingContainer = document.getElementById("ranking-list");

  if (rankingContainer && Array.isArray(rankingItems)) {
    rankingItems.forEach((item) => {
      const el = document.createElement("div");
      el.className = "ranking-item";
      el.innerHTML = `
        <div class="ranking-number">${item.rank}</div>
        <img
          src="${item.icon}"
          alt="${item.name} Icon"
          class="app-icon"
        />
        <div class="app-details">
          <div class="app-name">${item.name}</div>
          <div class="app-category">${item.category}</div>
          <div class="app-rating">
            <span>${item.rating}</span>
            <i class="material-icons">star</i>
          </div>
        </div>
      `;
      rankingContainer.appendChild(el);
    });
  }

  // Render one featured games row
  const featuredRow = document.getElementById("featured-games-row");

  if (featuredRow && Array.isArray(featuredGames)) {
    featuredGames.forEach((g) => {
      const item = document.createElement("div");
      item.className = "platform-item app-row-spacing";
      item.innerHTML = `
        <div class="VfPpkd-WsjYwc VfPpkd-WsjYwc--outlined card--elevated card--flat AaN0Dd card--responsive">
          <div class="card__content">
            <div class="card-container card-inner">
              <a class="card-link card-content" href="${g.href}">
                <div class="app-thumbnail">
                  <img
                    src="${g.thumb}"
                    class="img-contain app-thumbnail-img"
                  />
                </div>
                <div class="app-info">
                  <img
                    src="${g.icon}"
                    class="img-contain app-icon"
                  />
                  <div class="app-details">
                    <div class="app-detail-row">
                      <span class="app-info__text app-name">${g.name}</span>
                    </div>
                    <div class="app-detail-row">
                      <span class="app-info__text app-category">${g.category}</span>
                    </div>
                    <div class="app-detail-row">
                      <span class="app-info__text app-rating">
                        <span class="app-category">${g.rating}</span>
                        <span class="app-rating-icon">
                          <svg
                            class="app-rating-icon-detail"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 -960 960 960"
                          >
                            <path
                              d="M480 -940 L375 -640 L60 -620 L300 -420 L210 -100 L480 -280 L750 -100 L660 -420 L900 -620 L585 -640 Z"
                            />
                          </svg>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      `;
      featuredRow.appendChild(item);
    });
  }

  // Render "Google Play Games on PC" row
  const pcGamesContainer = document.getElementById("pc-games-row");

  if (pcGamesContainer && Array.isArray(pcGamesRow)) {
    pcGamesRow.forEach((g) => {
      const item = document.createElement("div");
      item.className = "platform-item app-row-spacing";
      item.innerHTML = `
        <div class="VfPpkd-WsjYwc VfPpkd-WsjYwc--outlined card--elevated card--flat AaN0Dd card--responsive">
          <div class="card__content">
            <div class="card-container card-inner">
              <a class="card-link card-content" href="${g.href}">
                <div class="app-thumbnail">
                  <img
                    src="${g.thumb}"
                    class="img-contain app-thumbnail-img"
                  />
                </div>
                <div class="app-info">
                  <img
                    src="${g.icon}"
                    class="img-contain app-icon"
                  />
                  <div class="app-details">
                    <div class="app-detail-row">
                      <span class="app-info__text app-name">${g.name}</span>
                    </div>
                    <div class="app-detail-row">
                      <span class="app-info__text app-category">${g.categoryMain}</span>
                      <span class="app-info__text app-rating-separator">•</span>
                      <span class="app-info__text app-category">${g.categoryExtra}</span>
                    </div>
                    <div class="app-detail-row">
                      <div>
                        <span class="app-info__text app-rating">
                          <span class="app-category">${g.rating}</span>
                          <span class="app-rating-icon">
                            <svg
                              class="app-rating-icon-detail"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 -960 960 960"
                            >
                              <path
                                d="M480 -940 L375 -640 L60 -620 L300 -420 L210 -100 L480 -280 L750 -100 L660 -420 L900 -620 L585 -640 Z"
                              />
                            </svg>
                          </span>
                        </span>
                      </div>
                      <span class="app-info__text app-category ePXqnb"></span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      `;
      pcGamesContainer.appendChild(item);
    });
  }

  // Render second "Google Play Games on PC" row (pc-games-row-2)
  const pcGamesContainer2 = document.getElementById("pc-games-row-2");

  if (pcGamesContainer2 && Array.isArray(pcGamesRow)) {
    pcGamesRow.forEach((g) => {
      const item = document.createElement("div");
      item.className = "platform-item app-row-spacing";
      item.innerHTML = `
        <div class="VfPpkd-WsjYwc VfPpkd-WsjYwc--outlined card--elevated card--flat AaN0Dd card--responsive">
          <div class="card__content">
            <div class="card-container card-inner">
              <a class="card-link card-content" href="${g.href}">
                <div class="app-thumbnail">
                  <img
                    src="${g.thumb}"
                    class="img-contain app-thumbnail-img"
                  />
                </div>
                <div class="app-info">
                  <img
                    src="${g.icon}"
                    class="img-contain app-icon"
                  />
                  <div class="app-details">
                    <div class="app-detail-row">
                      <span class="app-info__text app-name">${g.name}</span>
                    </div>
                    <div class="app-detail-row">
                      <span class="app-info__text app-category">${g.categoryMain}</span>
                      <span class="app-info__text app-rating-separator">•</span>
                      <span class="app-info__text app-category">${g.categoryExtra}</span>
                    </div>
                    <div class="app-detail-row">
                      <div>
                        <span class="app-info__text app-rating">
                          <span class="app-category">${g.rating}</span>
                          <span class="app-rating-icon">
                            <svg
                              class="app-rating-icon-detail"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 -960 960 960"
                            >
                              <path
                                d="M480 -940 L375 -640 L60 -620 L300 -420 L210 -100 L480 -280 L750 -100 L660 -420 L900 -620 L585 -640 Z"
                              />
                            </svg>
                          </span>
                        </span>
                      </div>
                      <span class="app-info__text app-category ePXqnb"></span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      `;
      pcGamesContainer2.appendChild(item);
    });
  }

  // Render "Lựa chọn của biên tập viên" row
  const editorPicksContainer = document.getElementById("editor-picks-row");

  if (editorPicksContainer && Array.isArray(editorPicksRow)) {
    editorPicksRow.forEach((g) => {
      const item = document.createElement("div");
      item.className = "platform-item neq64b";
      item.innerHTML = `
        <div class="VfPpkd-WsjYwc VfPpkd-WsjYwc-OWXEXe-INsAgc KC1dQ Usd1Ac AaN0Dd hHUYDe">
          <div class="card__content">
            <div class="card-container jVR3ye">
              <a href="${g.bannerHref}" class="card-link WPfqYc">
                <div class="n2q3zf">
                  <div class="GnAUad iEDKhd">${g.badgeText}</div>
                </div>
                <div class="Pdcv8e" style="background-color: ${g.bannerBg}">
                  <img
                    src="${g.bannerImg}"
                    class="img-contain SzSlNc"
                    aria-hidden="true"
                  />
                  <div class="xovwLb"></div>
                  <div
                    class="GkwRVc"
                    style="
                      background-image: linear-gradient(
                        180deg,
                        transparent 43.83%,
                        ${g.bannerBg} 79.64%
                      );
                    "
                  ></div>
                </div>
                <div class="lbNC6b">
                  <div class="YLCN0d iEDKhd">${g.title}</div>
                  ${
                    g.subtitle
                      ? `<div class="gb8Aof iEDKhd">${g.subtitle}</div>`
                      : ""
                  }
                </div>
              </a>

              <div class="us8NPb">
                <a href="${g.appHref}">
                  <div class="vw3wnd">
                    <img
                      src="${g.appIcon}"
                      class="img-contain nnW2Md"
                      aria-hidden="true"
                      alt="Hình thu nhỏ"
                    />
                    <div class="FfpWjf">
                      <div class="pNaVI">
                        <span class="fkdIre iEDKhd">${g.appName}</span>
                      </div>
                      <div class="pNaVI">
                        <span class="bcLwIe iEDKhd">${g.appDev}</span>
                        <span aria-hidden="true" class="VqQw9b iEDKhd">•</span>
                        <img
                          src="${g.appAgeIcon}"
                          class="img-contain FRzJkf"
                          alt="${g.appAgeAlt}"
                        />
                      </div>
                    </div>
                  </div>
                </a>
                <div class="fvMBP">
                  <div>
                    <div class="u4ICaf">
                      <div class="VfPpkd-dgl2Hf-ppHlrf-sM5MNb">
                        <button
                          class="button VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc LQeN7 MjT6xe sOCCfd HNnJkb XzJShf iEDKhd GFmdkb"
                          data-disable-idom="true"
                          aria-label="${g.buttonAria}"
                        >
                          <div class="VfPpkd-Jh9lGc"></div>
                          <div class="VfPpkd-J1Ukfc-LhBDec"></div>
                          <div class="VfPpkd-RLmnJb"></div>
                          <span class="VfPpkd-vQzf8d">${g.buttonLabel}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <span class="BQ6Nz iEDKhd">${g.purchaseNote}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
      editorPicksContainer.appendChild(item);
    });
  }
});
