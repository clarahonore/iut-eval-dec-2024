import Alpine from "alpinejs";
import Recipes from './modules/Recipes.js';
import {persist} from "@alpinejs/persist";

window.alpine = Alpine;
Alpine.data('Recipes', Recipes);
Alpine.plugin(persist)


Alpine.start();
