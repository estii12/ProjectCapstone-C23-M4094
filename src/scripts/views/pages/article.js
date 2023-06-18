import article from '../../utils/data-initiator';

const articles = {
    async render() {
        return `
        <app-bar></app-bar>

        <section class="content" id="content" tabindex="0">
            <h1 class="card-home">Artikel Edukasi</h1>
            <div class="list-data" id="list-data">
        </section> 
        
        <footer-bar></footer-bar>

        `;
    },
    async afterRender() {
        let listData = document.getElementById('list-data');
        let post = '';

        article.forEach((article) => {
            post += `
        <section class="card">
            <div class="card-thumbnail">
                <img class="img_card" src="${article.pictureId}" alt="img ${
                    article.name
                }">
                        </div>
                        <div class="card-content">
                            <div class="list-header">
                            </div>
                            <h3 class="card-title"><a href="#">${article.name}</a></h3>
                            <p class="card-description">${article.description.slice(
                    0,
                    200
                )}...</p>
                <a class="btn-card" href="#/detail-article/${
                    article.id
                }">Selengkapnya</a>
                            </div>
        </section>`;
        });

        listData.innerHTML = post;
    },
};

export default articles;
