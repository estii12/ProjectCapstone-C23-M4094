/* eslint-disable linebreak-style */

const tentangKami = {
    async render() {
        return `
        <app-bar></app-bar>

        <section class="content" id="tentangKami" tabindex="0">
        </section> 

        <footer-bar></footer-bar>

        `;
    },
    async afterRender() {
        let listData = document.getElementById('tentangKami');
        let post = `<section class="section" id="ttgKami">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 offset-lg-4 text-center">
                    <div class="section-heading">
                        <h2>Tentang Kami</h2>
                        <p>Tim C23-M4094 yang membangun website inovasi tentang edukasi pergaulan bebas yang bernama KeepMe.</p>
                    </div>
                </div>
            </div>
            <div class="col-tentangKami">
                <div class="row-lg-4">
                    <div class="ttgKami-item">
                        <div class="thumb">
                            <div class="overlay"></div>
                            <ul class="social-icons">
                                <li><a href="https://www.linkedin.com/in/della-jannata-febiana-284007267/"><i class='fa fa-linkedin'></i></i></a></li>
                            </ul>
                            <img src="./images/keepme/della.jpg" alt="Della #1">
                        </div>
                        <div class="down-content">
                            <h4>Della Jannata Febiana</h4>
                            <span>Full Stack Web Developer</span>
                        </div>
                    </div>
                </div>
                <div class="row-lg-4">
                    <div class="ttgKami-item">
                        <div class="thumb">
                            <div class="overlay"></div>
                            <ul class="social-icons">
                                <li><a href="https://www.linkedin.com/in/esti-yogiyanti-131921260"><i class='fa fa-linkedin'></i></a></li>
                            </ul>
                            <img src="./images/keepme/esti.jpg" alt="Esti #2">
                        </div>
                        <div class="down-content">
                            <h4>Esti Yogiyanti</h4>
                            <span>Full Stack Web Developer</span>
                        </div>
                    </div>
                </div>
                <div class="row-lg-4">
                    <div class="ttgKami-item">
                        <div class="thumb">
                            <div class="overlay"></div>
                            <ul class="social-icons">
                                <li><a href="https://www.linkedin.com/in/restu-raina-rahmah-024863225"><i class='fa fa-linkedin'></i></a></li>
                            </ul>
                            <img src="./images/keepme/restu.png" alt="Restu #3">
                        </div>
                        <div class="down-content">
                            <h4>Restu Raina Rahmah</h4>
                            <span>Full Stack Web Developer</span>
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