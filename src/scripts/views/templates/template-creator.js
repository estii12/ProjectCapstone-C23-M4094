const createRestaurantDetailTemplate = (article) => `
<div class="all-desc">
<img class="restaurant-picture lazyload" crossorigin="anonymous" alt="${article.name}" src="" tabindex="0" >
<div class="detailRestaurant">
    <div class="detail-desc">
    <h2><i class="fas fa-store"></i> ${article.name}</h2>
    <h2><i class="fas fa-map-marker-alt"></i>${article.city}</h2>
    <h2><i class="fas fa-star"></i> ${article.rating}</h2>
    </div>
    <hr>
    <h2 class="restaurant-description-title">Description</h2>
    <p class="restaurant-description">${article.description}</p>
</div>
`;
export {
    createRestaurantDetailTemplate,
};
