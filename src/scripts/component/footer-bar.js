class FooterBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <footer>
            <div class="sosialmedia">
                <a href="#"><i class="fa fa-linkedin"></i></a>
                <a href="https://github.com/dellajannata/ProjectCapstone-C23-M4094"><i class="fa fa-github"></i></a>
                <a href="#"><i class="fab fa-youtube"></i></a>
            </div>
            <div class="footerbottom">
                <p>Copyright &#169; 2023; Designed by Team C23-M4094 Dicoding Academy</p>
            </div>
        </footer>
            `;
    }
}

customElements.define('footer-bar', FooterBar);