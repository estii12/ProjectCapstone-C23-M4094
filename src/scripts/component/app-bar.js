class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <header>
            <div class="all-nav">
            <div class="logo">
                <a href="/" class="navbar-brand"><img src="./images/keepme/logo1.png" alt="KeepMe">KeepMe</a>
            </div>
            <button id="hamburger" class="hamburger" title="Accept requested meeting.">
                <i class="fa fa-bars" aria-hidden="true"></i>
            </button>
            <nav id="nav-bar" class="nav-bar">
                <ul>
                <li><a class="active" href="/">Beranda</a></li>
                <li><a href="/#/article">Artikel</a></li>
                <li><a href="/#/tentang-kami">Tentang Kami</a></li>
                <li><a class="btn-login" href="/#/login-user">Masuk</a></li>
                </ul>
            </nav>
            </div>
        </header>
            `;
        const hamburgerButton = document.getElementById("hamburger");
        hamburgerButton.addEventListener("click", function () {
            const navBar = document.getElementById("nav-bar");
            navBar.style.display = (navBar.style.display === "block") ? "none" : "block";
        });
    }
}

customElements.define('app-bar', AppBar);