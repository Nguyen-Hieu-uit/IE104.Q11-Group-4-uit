// Đọc danh sách user mẫu từ userAccount.json
async function loadUsersFromJson() {
  try {
    const response = await fetch("../js/userAccount.json");
    if (!response.ok) {
      throw new Error("Không thể tải userAccount.json");
    }
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Đọc danh sách user đã đăng ký tạm trong localStorage
function loadUsersFromLocalStorage() {
  try {
    const raw = localStorage.getItem("registeredUsers");
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error("Lỗi đọc registeredUsers từ localStorage", error);
    return [];
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form form");
  const messageEl = document.querySelector(".form-message");

  if (!form) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const usernameInput = form.querySelector('input[type="text"]');
    const passwordInput = form.querySelector('input[type="password"]');

    const username = usernameInput ? usernameInput.value.trim() : "";
    const password = passwordInput ? passwordInput.value.trim() : "";

    if (!username || !password) {
      if (messageEl) {
        messageEl.textContent = "Vui lòng nhập tên đăng nhập và mật khẩu.";
        messageEl.classList.remove("success");
        messageEl.classList.add("error");
      }
      return;
    }

    // Tải user từ file JSON và từ localStorage
    const [jsonUsers, localUsers] = await Promise.all([
      loadUsersFromJson(),
      Promise.resolve(loadUsersFromLocalStorage()),
    ]);

    const allUsers = [...jsonUsers, ...localUsers];

    const matchedUser = allUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (!matchedUser) {
      if (messageEl) {
        messageEl.textContent = "Sai tên đăng nhập hoặc mật khẩu.";
        messageEl.classList.remove("success");
        messageEl.classList.add("error");
      }
      return;
    }

    if (messageEl) {
      messageEl.textContent = "Đăng nhập thành công.";
      messageEl.classList.remove("error");
      messageEl.classList.add("success");
    }

    // Ví dụ: chuyển về trang chính
    window.location.href = "../index.html";
  });
});
