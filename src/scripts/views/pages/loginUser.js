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
            <h1>Selamat Datang di KeepMe<br />Masuk</h1>
            <div class="login-form">
                <form id="login-form">
                    <input type="email" placeholder="Masukkan Email Anda">
                    <span class="input-error" id="error-email"></span>

                    <input type="password" placeholder="Masukkan Password Anda">
                    <span class="input-error" id="error-pass"></span>

                    <div class="forget-pass">
                        <a href="/#/regis-user">Daftar</a>
                    </div>
                    <button type="submit">Masuk</button>
                </form>
            </div>
        </div>
    </div>
</div>`;

const loginUser = {
  async render() {
    return `
        <section class="content" id="content" tabindex="0">
           ${post}
        </section> 
        `;
  },
  async afterRender() {
    let formRegister = document.getElementById("login-form");

    const errorEmali = document.getElementById("error-email");
    const errorPass = document.getElementById("error-pass");

    const setEmpty = () => {
      errorEmali.innerText = "";
      errorPass.innerText = "";
    };

    formRegister.addEventListener("submit", async (e) => {
      e.preventDefault();

      // Input Element
      const inputEmail = formRegister.elements[0].value;
      const inputPassword = formRegister.elements[1].value;

      setEmpty();
      try {
        await axios
          .post("http://localhost:3001/login", {
            email: inputEmail,
            password: inputPassword,
          })
          .then((response) => {
            if (response?.data?.code === 200) {
              alert("Login Berhasil!");

              console.log({ data: response?.data });
              sessionStorage.setItem("userId", response?.data?.userId);
              sessionStorage.setItem("jwt", response?.data?.jwt);

              setTimeout(() => {
                const link = document.createElement("a");

                if (response?.data?.role === "admin") {
                  link.href = "/#/admin-dash";
                } else {
                  link.href = "/#/user-form";
                }

                document.body.appendChild(link);
                link.click();

                // clean up "a" element & remove ObjectURL
                document.body.removeChild(link);
              }, 500);
            }
          })
          .catch((errors) => {
            const { email, password } = errors?.response?.data?.errors;

            if (!inputEmail) {
              errorEmali.innerText = "Email Harus Diisi !";
            } else {
              errorEmali.innerText = email;
            }

            if (!inputPassword) {
              errorPass.innerText = "Password Harus Diisi !";
            } else {
              errorPass.innerText = password;
            }
          });
      } catch (error) {
        console.log(error);
      }
    });
  },
};

export default loginUser;
