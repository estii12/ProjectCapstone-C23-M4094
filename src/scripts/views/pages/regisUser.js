/* eslint-disable linebreak-style */

import axios from "axios";

let post = `
<div class="parent clearfix">
  <div class="bg-illustration">
      <div class="burger-btn">
        <span></span>
        <span></span>
        <span></span>
      </div>
  </div>
  <div class="login">
    <div class="container">
    <div><a href="/"><i class="arrow left"></i> Kembali</a></div>
      <h1>Selamat Datang di KeepMe<br />Daftar</h1>
      <div class="login-form">
        <form id="register-form">
          <input type="username" placeholder="Masukkan Username Anda">
          <span class="input-error" id="error-name"></span>

          <input type="email" placeholder="Masukkan Email Anda">
          <span class="input-error" id="error-email"></span>

          <input type="password" placeholder="Masukkan Password Anda">
          <span class="input-error" id="error-pass"></span>

          <div class="forget-pass-regis">
            <a href="/#/login-user">Masuk</a>
          </div>
          <button type="submit">Daftar</button>
        </form>
      </div>
    </div>
  </div>
</div>`;

const regisUser = {
  async render() {
    return `
        <section class="content" id="content" tabindex="0">
            ${post}
        </section> 
        `;
  },
  async afterRender() {
    let formRegister = document.getElementById("register-form");

    const errorName = document.getElementById("error-name");
    const errorEmali = document.getElementById("error-email");
    const errorPass = document.getElementById("error-pass");

    const setEmpty = () => {
      errorName.innerText = "";
      errorEmali.innerText = "";
      errorPass.innerText = "";
    };

    formRegister.addEventListener("submit", async (e) => {
      e.preventDefault();

      // Input Element
      const inputName = formRegister.elements[0].value;
      const inputEmail = formRegister.elements[1].value;
      const inputPassword = formRegister.elements[2].value;

      setEmpty();
      try {
        await axios
          .post("http://localhost:3001/sign-up", {
            name: inputName,
            email: inputEmail,
            password: inputPassword,
          })
          .then((response) => {
            if (response?.data?.code === 200) alert("Pendaftaran Berhasil!");
          })
          .catch((errors) => {
            const { name, email, password } = errors?.response?.data?.errors;

            if (name) errorName.innerText = name;
            if (email) errorEmali.innerText = email;
            if (password) errorPass.innerText = password;
          });
      } catch (error) {
        console.error(error);
      }
    });
  },
};

export default regisUser;
