document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formRegister");

  function showError(inputEl, errId, message) {
    const errEl = document.getElementById(errId);
    errEl.textContent = message;
    errEl.classList.remove("hidden");
    inputEl.classList.add("border-rose-500");
  }

  function clearError(inputEl, errId) {
    const errEl = document.getElementById(errId);
    errEl.textContent = "";
    errEl.classList.add("hidden");
    inputEl.classList.remove("border-rose-500");
  }

  form.addEventListener("submit", function (event) {
    let isValid = true;

    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const nama = document.getElementById("nama");
    const tglLahir = document.getElementById("tgl_lahir");
    const alamat = document.getElementById("alamat");
    const telpon = document.getElementById("telpon");

    const valUsername = username.value.trim();
    if (valUsername === "") {
      showError(username, "err-username", "Username tidak boleh kosong.");
      isValid = false;
    } else if (valUsername.length < 3) {
      showError(username, "err-username", "Username minimal harus 3 karakter.");
      isValid = false;
    } else {
      clearError(username, "err-username");
    }

    const valPassword = password.value.trim();
    if (valPassword === "") {
      showError(password, "err-password", "Password tidak boleh kosong.");
      isValid = false;
    } else if (valPassword.length < 8) {
      showError(password, "err-password", "Password minimal harus 8 karakter.");
      isValid = false;
    } else {
      clearError(password, "err-password");
    }

    if (nama.value.trim() === "") {
      showError(nama, "err-nama", "Nama tidak boleh kosong.");
      isValid = false;
    } else {
      clearError(nama, "err-nama");
    }

    if (tglLahir.value === "") {
      showError(tglLahir, "err-tgl_lahir", "Tanggal lahir tidak boleh kosong.");
      isValid = false;
    } else {
      const inputDate = new Date(tglLahir.value);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      inputDate.setHours(0, 0, 0, 0);

      if (inputDate > today) {
        showError(tglLahir, "err-tgl_lahir", "Tanggal lahir tidak boleh melebihi tanggal hari ini (future date).");
        isValid = false;
      } else {
        clearError(tglLahir, "err-tgl_lahir");
      }
    }

    if (alamat.value.trim() === "") {
      showError(alamat, "err-alamat", "Alamat tidak boleh kosong.");
      isValid = false;
    } else {
      clearError(alamat, "err-alamat");
    }

    const valTelpon = telpon.value.trim();
    if (valTelpon === "") {
      showError(telpon, "err-telpon", "Nomor telepon tidak boleh kosong.");
      isValid = false;
    } else if (!valTelpon.startsWith("6")) {
      showError(telpon, "err-telpon", "Nomor telepon harus berawalan angka 6 (contoh: 62812...).");
      isValid = false;
    } else {
      clearError(telpon, "err-telpon");
    }

    if (!isValid) {
      event.preventDefault();
    }
  });
});