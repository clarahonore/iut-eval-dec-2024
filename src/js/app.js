import Alpine from "alpinejs";
import persist from '@alpinejs/persist'
import Recipes from './modules/Recipes.js';
import Favorites from './modules/Favorites.js';



window.alpine = Alpine;
Alpine.plugin(persist)
Alpine.data('Recipes', Recipes);
Alpine.data('Favorites', Favorites);



Alpine.start();
