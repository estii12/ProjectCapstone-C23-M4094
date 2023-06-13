class FooterBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <footer>
            <div class="sosialmedia">
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-facebook"></i></a>
                <a href="#"><i class="fab fa-whatsapp"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
            </div>
            <div class="footerbottom">
                <p>Copyright &#169; 2023; Designed by Team C23-M4094 Dicoding Academy</p>
            </div>
        </footer>
            `;
    }
}

customElements.define('footer-bar', FooterBar);