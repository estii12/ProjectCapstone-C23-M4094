/* eslint-disable linebreak-style */

const tentangKami = {
    async render() {
        return `
        <app-bar></app-bar>

        <section class="content" id="content" tabindex="0">
            <div class="tentangKami" id="tentangKami">
        </section> 

        <footer-bar></footer-bar>

        `;
    },
    async afterRender() {
        let listData = document.getElementById('tentangKami');
        let post = `<section class="section" id="chefs">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 offset-lg-4 text-center">
                    <div class="section-heading">
                        <h2>Tentang Kami</h2>
                    </div>
                </div>
            </div>
            <div class="col-tentangKami">
                <div class="row-lg-4">
                    <div class="chef-item">
                        <div class="thumb">
                            <div class="overlay"></div>
                            <ul class="social-icons">
                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                            </ul>
                            <img src="./images/keepme/della.jpg" alt="Della #1">
                        </div>
                        <div class="down-content">
                            <h4>Della Jannata Febiana</h4>
                            <span>Back-End Developer</span>
                        </div>
                    </div>
                </div>
                <div class="row-lg-4">
                    <div class="chef-item">
                        <div class="thumb">
                            <div class="overlay"></div>
                            <ul class="social-icons">
                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-behance"></i></a></li>
                            </ul>
                            <img src="./images/keepme/esti.jpg" alt="Esti #2">
                        </div>
                        <div class="down-content">
                            <h4>Esti Yogiyanti</h4>
                            <span>Front-End Developer</span>
                        </div>
                    </div>
                </div>
                <div class="row-lg-4">
                    <div class="chef-item">
                        <div class="thumb">
                            <div class="overlay"></div>
                            <ul class="social-icons">
                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-google"></i></a></li>
                            </ul>
                            <img src="./images/keepme/restu.png" alt="Restu #3">
                        </div>
                        <div class="down-content">
                            <h4>Restu Raina Rahmah</h4>
                            <span>Front-End Developer</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>`;

        listData.innerHTML = post;
    },
};

export default tentangKami;