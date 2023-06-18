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
       </div>
       <div id="content">
         <article id="beranda">
           <section class="about">
             <div class="about-keepme">
               <img src="./images/keepme/hero.jpg">
               <div class="card" id="about-card">
                 <div class="about-text">
                   <h2>About Me</h2>
                   <p>Keepme merupakan website edukasi pencegahan pergaulan bebas pada kalangan generasi milenial. Keepme sebagai program literasi digital akan menjadi solusi dalam penyelesaian masalah dalam memilih pergaulan. Program keepme ini nantinya akan menjadi pusat informasi dan konseling remaja untuk orang tua dan remaja itu sendiiri sebgai upaya mengedukasi remaja tantang bahaya pergaulan bebas dalam menjaga dan memilih pergaulan yang baik pada era globalisasi ini. Keepme dibuat menarik, tepat sasaran, adaptif dan interaktif sehingga layak untuk dioperasikan dan dijadikan program literasi digital.</p>
                 </div>
               </div>    
             </div>
           </section>
           <section class="information">
             <h1>INFORMASI KEEPME</h1>
             <p>Seputar Informasi dan Visi Misi Keepme</p>
           </section>
           <section class="card" id="goals">
             <h2>VISI KEEPME</h2>
             <ul>
                    <li>- Menjadi program literasi digital terpercaya yang mampu mengedukasi orang tua dan generasi milenial menjadi generasi yang paham akan bahaya pergaulan bebas.</li>
                    <li>- Mengurangi angka pergaulan bebas di kalangan remaja
                    </li>
                    <li>- Menciptakan remaja menjadi generasi yang berkualitas.  </li>
                    </ul>
           </section>
   
           <section class="card" id="goals">
             <h2>MISI KEEPME</h2>
             <ul>
                    <li>- Memberikan akses informasi dan wawasan secara online pada remaja dan orang tua berdasarkan berita yang terjadi saat ini. </li>
                    <li>- Menigkatkan literasi meda sehingga pengguna mengetahui bahaya, penyebab, dan pencegahan agar terhindar dari pergaulan bebas. </li>
                    <li>- Menerapkan startegi edukasi dalam pengelolaan media online. 
                    </li>
                    <li>-	Memberikan nilai tambah yang optimal bagi rejama dan orang tua. </li>
                    </ul>
           </section>
     <!-- about section end -->
       <!-- About Section -->
       <section id="about">
           <!-- Container -->
           <div class="container">
               <!-- About wrapper -->
               
               </div><!-- End of About Wrapper -->         
           </div>  <!-- End of Container-->        
        </section><!--End of Section -->
        
       <footer-bar></footer-bar>
       `;
   },
   async afterRender() { },
};

export default home;