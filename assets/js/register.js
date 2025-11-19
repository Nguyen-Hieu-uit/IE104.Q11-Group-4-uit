// Đọc user mẫu từ userAccount.json để tránh trùng username với dữ liệu cứng
async function loadUsersFromJson() {
  try {
    const response = await fetch("/assets/json/userAccount.json");
    if (!response.ok) return [];
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Không thể tải userAccount.json", error);
    return [];
  }
}

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

function saveUsersToLocalStorage(users) {
  try {
    localStorage.setItem("registeredUsers", JSON.stringify(users));
  } catch (error) {
    console.error("Lỗi lưu registeredUsers vào localStorage", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form form");
  const messageEl = document.querySelector(".form-message");

  if (!form) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const inputs = form.querySelectorAll("input");
    let hasEmpty = false;

    inputs.forEach((input) => {
      if (!input.value.trim()) {
        hasEmpty = true;
      }
    });

    if (hasEmpty) {
      if (messageEl) {
        messageEl.textContent = "Vui lòng điền đầy đủ thông tin đăng ký.";
        messageEl.classList.remove("success");
        messageEl.classList.add("error");
      }
      return;
    }

    const lastNameInput = form.querySelector(
      '.full-name input[placeholder="Họ"]'
    );
    const firstNameInput = form.querySelector(
      '.full-name input[placeholder="Tên"]'
    );
    const phoneInput = form.querySelector('input[placeholder="Số điện thoại"]');
    const emailInput = form.querySelector('input[placeholder="Email"]');
    const birthDateInput = form.querySelector('input[type="date"]');
    const usernameInput = form.querySelector(
      'input[placeholder="Tên đăng nhập"]'
    );
    const passwordInput = form.querySelector('input[placeholder="Mật khẩu"]');
    const confirmPasswordInput = form.querySelector(
      'input[placeholder="Xác nhận mật khẩu"]'
    );

    const username = usernameInput?.value.trim() || "";
    const password = passwordInput?.value.trim() || "";
    const confirmPassword = confirmPasswordInput?.value.trim() || "";

    if (password !== confirmPassword) {
      if (messageEl) {
        messageEl.textContent =
          "Mật khẩu và xác nhận mật khẩu không trùng khớp.";
        messageEl.classList.remove("success");
        messageEl.classList.add("error");
      }
      return;
    }

    // Tải danh sách user hiện có
    const [jsonUsers, localUsers] = await Promise.all([
      loadUsersFromJson(),
      Promise.resolve(loadUsersFromLocalStorage()),
    ]);

    const allUsers = [...jsonUsers, ...localUsers];

    const existed = allUsers.some((user) => user.username === username);

    if (existed) {
      if (messageEl) {
        messageEl.textContent =
          "Tên đăng nhập đã tồn tại, vui lòng chọn tên khác.";
        messageEl.classList.remove("success");
        messageEl.classList.add("error");
      }
      return;
    }

    const newUser = {
      username,
      password,
      firstName: firstNameInput?.value.trim() || "",
      lastName: lastNameInput?.value.trim() || "",
      phone: phoneInput?.value.trim() || "",
      email: emailInput?.value.trim() || "",
      birthDate: birthDateInput?.value || "",
    };

    const updatedLocalUsers = [...localUsers, newUser];
    saveUsersToLocalStorage(updatedLocalUsers);

    if (messageEl) {
      messageEl.textContent = "Đăng ký thành công!";
      messageEl.classList.remove("error");
      messageEl.classList.add("success");
    }

    // Ví dụ: chuyển sang trang đăng nhập
    // window.location.href = "login.html";
  });
});
