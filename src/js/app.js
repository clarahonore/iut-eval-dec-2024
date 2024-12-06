import Alpine from "alpinejs";
import Recipes from './modules/Recipes.js';



window.alpine = Alpine;
Alpine.data('Recipes', Recipes);


Alpine.start();
