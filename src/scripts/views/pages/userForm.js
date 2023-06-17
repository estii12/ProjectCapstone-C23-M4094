/* eslint-disable linebreak-style */

const userForm = {
    async render() {
        return `
        <toolbar-admin></toolbar-admin>
        <section class="content" id="content" tabindex="0">
            <div class="userForm" id="userForm">
        </section> 
        <footer-bar></footer-bar>

        `;
    },
    async afterRender() {
        let userForm1 = document.getElementById('userForm');
        let post = `<div class="formbold-main-wrapper">
        <div class="card">
          <div class="formbold-form-wrapper">
                <img src="./images/keepme/form.png">
            <form action="" method="POST">
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
        
              <div class="formbold-mb-3">
                <label for="dob" class="formbold-form-label"> Tanggal Pengaduan </label>
                <input type="date" name="dob" id="dob" class="formbold-form-input" />
              </div>
        
              <div class="formbold-mb-3">
                <label class="formbold-form-label">Jenis Kasus</label>
        
                <select class="formbold-form-input" name="jenisKasus" id="jenisKasus">
                  <option value="hiv">HIV/AIDS</option>
                  <option value="seksBebas">Seks Bebas</option>
                  <option value="others">Others</option>
                </select>
              </div>
        
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
              <div class="formbold-mb-3">
                <label for="lokasi" class="formbold-form-label"> Rincian Kejadian </label>
                <textarea
                    rows="6"
                    name="rincian"
                    id="rincian"
                    class="formbold-form-input">
                </textarea>
              </div>
              <button type="submit" class="formbold-btn">Submit</button>
            </form>
          </div>
        </div>
      </div>`;

        userForm1.innerHTML = post;
    },
};

export default userForm;
