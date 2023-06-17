/* eslint-disable linebreak-style */
import axios from "axios";

let reports = [];
const adminTable = {
  async render() {
    const token = sessionStorage.getItem("jwt");

    try {
      await axios
        .get("http://localhost:3001/report", {
          headers: { token },
        })
        .then((response) => {
          if (response?.data?.code === 200) {
            reports = response?.data?.data;
          }
        })
        .catch((errors) => {
          console.log(errors);
        });
    } catch (error) {
      console.log(error);
    }

    return `
        <div id="wrapper">
            <sidebar-admin></sidebar-admin>
            <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
                <toolbar-admin></toolbar-admin>
                <section class="content" id="adminTable" tabindex="0">
            </section> 
            </div>
            <footer-bar></footer-bar>
        </div>
        `;
  },
  async afterRender() {
    let listData = document.getElementById("adminTable");
    let post = `<!-- Begin Page Content -->
        <div class="container-fluid">
            <!-- DataTales Example -->
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Data Pengaduan</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Tanggal Kejadian</th>
                                    <th>Lokasi</th>
                                    <th>Jenis Kasus</th>
                                    <th>Rincian</th>
                                    <th>Pelapor</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${setTableReport(reports)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <!-- /.container-fluid -->`;

    function setTableReport(reports) {
      let html = "";

      reports.forEach((report) => {
        const today = new Date(report.caseDate);
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();

        if (dd < 10) dd = "0" + dd;
        if (mm < 10) mm = "0" + mm;

        html += `<tr>
            <td>${report.name}</td>
            <td>${dd}-${mm}-${yyyy}</td>
            <td>${report.location}</td>
            <td>${report.caseType}</td>
            <td>${report.desc}</td>
            <td>${report.user.name}</td>
            <td>${
              report.status
                ? "Kasus sudah ditindaklanjuti"
                : "Kasus belum ditindaklanjuti"
            }</td>
            <td><button>Done</button></td>
            `;
      });

      return html;
    }
    listData.innerHTML = post;
    let buttonlogout = document.getElementById("logout");
    const token = sessionStorage.getItem("jwt");
    buttonlogout.addEventListener("click", async (e) => {
        axios
            .get("http://localhost:3001/logout", {
              headers: { token },
            })
            .then((response) => {
              console.log(response);
              if (response?.data?.code === 200) {
                alert("Logout berhasil !");
                sessionStorage.clear();
                setTimeout(() => {
                  const link = document.createElement("a");
                    link.href = "/#/login-user";
                  document.body.appendChild(link);
                  link.click();
  
                  // clean up "a" element & remove ObjectURL
                  document.body.removeChild(link);
                }, 500);
              }
            })
            .catch((errors) => {
              console.log(errors);          
            })
      });
  },
};

export default adminTable;
