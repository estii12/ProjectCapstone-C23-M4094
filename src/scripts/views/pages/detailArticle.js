/* eslint-disable linebreak-style */
import UrlParser from "../../routes/url-parser";
import article from "../../utils/data-initiator";
import { createRestaurantDetailTemplate } from "../templates/template-creator";

const detailArticle = {
  async render() {
    return `
            <app-bar></app-bar>

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

            <footer-bar></footer-bar>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailArticleContainer = document.querySelector("#detail");

    const data = article.find((article) => article.id === url.id);
    detailArticleContainer.innerHTML =
      createRestaurantDetailTemplate(data);

    
  },
};

export default detailArticle;
