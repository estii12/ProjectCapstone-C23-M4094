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
        <!-- about section start -->
      <div class="about_section layout_padding">
         <div class="container">
            <div class="row">
               <div class="col-md-6">
                  <div class="about_taital_main">
                     <div class="about_taital">Apa itu KeepMe?</div>
                     <p class="about_text">Keepme merupakan website edukasi pencegahan pergaulan bebas pada kalangan generasi milenial. Keepme sebagai program literasi digital akan menjadi solusi dalam penyelesaian...</p>
                     <div class="read_bt"><a href="#">Selengkapnya</a></div>
                  </div>
               </div>
               <div class="col-md-6">
                  <div class="about_img"><img src="./images/keepme/logo1.png"></div>
               </div>
            </div>
         </div>
      </div>
      <!-- about section end -->
        <!-- About Section -->
        <section id="about">
            <!-- Container -->
            <div class="container">
                <!-- About wrapper -->
                <div class="about-wrapper">
                    <div class="after"><h1>Berita Terkini</h1></div>
                </div><!-- End of About Wrapper -->         
            </div>  <!-- End of Container-->        
         </section><!--End of Section -->
         
        <footer-bar></footer-bar>
        `;
    },
    async afterRender() {},
};

export default home;