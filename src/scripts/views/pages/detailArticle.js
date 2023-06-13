/* eslint-disable linebreak-style */
import UrlParser from '../../routes/url-parser';
import article from '../../utils/data-initiator';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const detailArticle = {
    async render() {
        return `
        <div class="loader-container" id="loader-container">
          <div id="loader"></div>
        </div> 
        <section class="content" id="content" tabindex="0">
          <div class="card">
          <h1 class="card__label">Detail Artikel</h1>
          <card>
          <div class="detail" id="detail"></div>
          </card>
          </div>
        </section>  
        `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const { articledetail } = await article.detailRestaurant(url.id);
        const articleContainer = document.querySelector('#detail');
        articleContainer.innerHTML = createRestaurantDetailTemplate(articledetail);
    },
};

export default detailArticle;
