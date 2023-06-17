/* eslint-disable linebreak-style */

import axios from "axios";

const userForm = {
  async render() {
    return `
      <toolbar-admin></toolbar-admin>

      <section class="content" id="content" tabindex="0">
        <div class="formbold-main-wrapper">
          <div class="card">
            <div class="formbold-form-wrapper">
              <img src="./images/keepme/form.png">
              <form id="report-form">
                <div class="formbold-mb-3">
                  <label for="age" class="formbold-form-label"> Nama Lengkap </label>
                  <input
                    type="text"
                    name="nama"
                    id="nama"
                    placeholder="Masukkan Nama Lengkap"
                    class="formbold-form-input"
                  />
                </div>
                <span class="input-error" id="error-name"></span>
          
                <div class="formbold-mb-3">
                  <label for="tanggal" class="formbold-form-label"> Tanggal Kejadian </label>
                  <input type="date" name="tanggal" id="tanggal" class="formbold-form-input" />
                </div>
                <span class="input-error" id="error-date"></span>
          
                <div class="formbold-mb-3">
                  <label class="formbold-form-label">Jenis Kasus</label>
          
                  <select class="formbold-form-input" name="jenisKasus" id="jenisKasus">
                    <option value="HIV/AIDS">HIV/AIDS</option>
                    <option value="seksBebas">Seks Bebas</option>
                    <option value="narkoba">Narkoba</option>
                    <option value="pestaSabu">Pesta Sabu</option>
                  </select>
                </div>
                <span class="input-error" id="error-type"></span>
          
                <div class="formbold-mb-3">
                  <label for="lokasi" class="formbold-form-label"> Lokasi Kejadian </label>
                  <input
                    type="lokasi"
                    name="lokasi"
                    id="lokasi"
                    placeholder="Masukkan Lokasi Kejadian"
                    class="formbold-form-input"
                  />
                </div>
                <span class="input-error" id="error-location"></span>

                <div class="formbold-mb-3">
                  <label for="lokasi" class="formbold-form-label"> Rincian Kejadian </label>
                  <textarea
                    rows="6"
                    name="rincian"
                    id="rincian"
                    class="formbold-form-input"></textarea>
                </div>
                <span class="input-error" id="error-desc"></span>

                <button type="submit" class="formbold-btn">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer-bar></footer-bar>`;
  },
  async afterRender() {
    let formReport = document.getElementById("report-form");

    const errorName = document.getElementById("error-name");
    const errorDate = document.getElementById("error-date");
    const errorType = document.getElementById("error-type");
    const errorLoc = document.getElementById("error-location");
    const errorDesc = document.getElementById("error-desc");

    const setEmpty = () => {
      errorName.innerText = "";
      errorDate.innerText = "";
      errorType.innerText = "";
      errorLoc.innerText = "";
      errorDesc.innerText = "";
    };

    formReport.addEventListener("submit", async (e) => {
      e.preventDefault();
      const token = sessionStorage.getItem("jwt");

      const inputForms = {
        name: formReport.elements["nama"].value,
        caseDate: formReport.elements["tanggal"].value,
        caseType: formReport.elements["jenisKasus"].value,
        location: formReport.elements["lokasi"].value,
        desc: formReport.elements["rincian"].value,
        user: sessionStorage.getItem("userId"),
      };

      setEmpty();
      try {
        await axios
          .post("http://localhost:3001/report", inputForms, {
            headers: { token },
          })
          .then((response) => {
            if (response?.data?.code === 200) {
              alert("Form Berhasil Dibuat!");
              // updateUserReport(response?.data);
            }
          })
          .catch((errors) => {
            console.log(errors?.response?.data);
            const { name, caseDate, caseType, location, desc } =
              errors?.response?.data?.errors;

            if (name) errorName.innerText = name;
            if (caseDate) errorDate.innerText = caseDate;
            if (caseType) errorType.innerText = caseType;
            if (location) errorLoc.innerText = location;
            if (desc) errorDesc.innerText = desc;
          });
      } catch (error) {
        console.log(error);
      }
    });
  },
};

// function updateUserReport(data) {
//   console.log(data);
// }

export default userForm;
