import Alpine from "alpinejs";
import Recipes from './modules/Recipes.js';
import {persist} from "@alpinejs/persist";
import Favorites from "./modules/Favorites.js";

window.alpine = Alpine;
Alpine.data('Recipes', Recipes);
Alpine.data('Favorites', Favorites);
Alpine.plugin(persist)


Alpine.start();
