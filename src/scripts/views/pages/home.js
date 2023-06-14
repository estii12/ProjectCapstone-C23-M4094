/* eslint-disable linebreak-style */

const home = {
    async render() {
        return `
        <app-bar></app-bar>

        <div class="hero">
        <figure>
            <div class="hero">
            <img src="./images/keepme/hero.jpg">
            </div>
            <div class="hero">
            <img src="./images/keepme/hero1.jpg">
            </div>
            <div class="hero">
            <img src="./images/keepme/hero2.jpg">
            </div>
            <div class="hero">
            <img src="./images/keepme/hero3.jpg">
            </div>
        </figure>
        </div>
        <div id="content">
        <article id="beranda">
            <section class="about">
            <div class="about-keepme">
                <img src="./images/keepme/about.png">
                <div class="card" id="about-card">
                <div class="about-text">
                    <h2>About Me</h2>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue
                    massa. </p>
                </div>
                </div>
            </div>
            </section>
            <section class="information">
            <h1>INFORMASI KEEPME</h1>
            <p>Seputar Informasi dan Visi Misi Keepme</p>
            </section>
            <section class="card1" id="goals">
            <h2>VISI KEEPME</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue
                massa. Fusce posuere,
                magna
                sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra
                imperdiet enim.
                Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Proin pharetra nonummy pede.
                Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.</p>
            </section>
            <section class="card1" id="goals">
            <h2>MISI KEEPME</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue
                massa. Fusce posuere,
                magna
                sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra
                imperdiet enim.
                Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Proin pharetra nonummy pede.
                Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.</p>
            </section>
        </article>
        </div>
        </div>
    </section>
    
    <footer-bar></footer-bar>
        `;
    },
    async afterRender() {},
};

export default home;