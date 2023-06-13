/* eslint-disable linebreak-style */

const loginUser = {
    async render() {
        return `
        <section class="content" id="content" tabindex="0">
            <h1></h1>
            <div class="loginUser" id="loginUser">
        </section> 
        `;
    },
    async afterRender() {
        let listData = document.getElementById('loginUser');
        let post = `<div class="parent clearfix">
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
                    <form action="">
                        <input type="email" placeholder="Masukkan Email Anda">
                        <input type="password" placeholder="Masukkan Password Anda">
                        <div class="forget-pass">
                            <a href="/#/regis-user">Daftar</a>
                        </div>
                        <button type="submit">Masuk</button>
                    </form>
                </div>
            </div>
        </div>`;

        listData.innerHTML = post;
    },
};

export default loginUser;