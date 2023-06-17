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
    
        <!-- section -->
        <section>
            <!-- Container -->
            <div class="container">
                <!-- row -->
                <div class="row justify-content-between align-items-center">
                    <div class="col-md-6">
                        <div class="img-wrapper">
                            <div class="after"></div>
                            <img src="/images/berita/home1.jpg" class="w-100" alt="About Us">
                        </div>
                    </div>
                    <div class="col-md-5">
                        <h6 class="title mb-3">Penyakit pada Sistem Reproduksi Manusia</h6>
                        <p>KOMPAS.com - Sistem reproduksi manusia dapat terserang berbagai penyakit yang menggangu kesehatan organ reproduksi ataupun kemampuan reproduksi penderitanya. Apa saja penyakit pada sistem reproduksi manusia?</p>
                        <a class="btn btn-outline-primary btn-sm" href="https://www.kompas.com/skola/read/2023/04/06/170000869/penyakit-pada-sistem-reproduksi-manusia">Selengkapnya</a>
                    </div>
                </div>
                <!-- End of Row -->
            </div>  
            <!-- End of Container -->
        </section><!-- End of Section -->   
    
        <!-- section -->
        <section>
            <!-- Container -->
            <div class="container">
                <!-- Row -->
                <div class="row justify-content-between align-items-center">                
                    <div class="col-md-5">
                        <h6 class="title mb-3">Dampak dan Pencegahan Seks Bebas</h6>
                        <p>KOMPAS.com - Perilaku seks bebas adalah segala cara mengekspresikan dan melepaskan dorongan seksual yang berasal dari kematangan organ seksual (berkencan hingga melakukan kontak sosial) yang dinilai tidak sesuai dengan norma. </p>
                        <a class="btn btn-outline-primary btn-sm" href="https://www.kompas.com/skola/read/2023/03/13/061500069/dampak-dan-pencegahan-seks-bebas-">Selengkapnya</a>
                    </div>
                    <div class="col-md-6">
                        <div class="img-wrapper">
                            <div class="after right"></div>
                            <img src="/images/berita/home2.jpg" class="w-100" alt="About Us">
                        </div>                      
                    </div>
                </div><!-- End of Row -->           
            </div><!-- End of Container-->      
        </section><!-- End of Section --> 
        <footer-bar></footer-bar>
        `;
    },
    async afterRender() {},
};

export default home;