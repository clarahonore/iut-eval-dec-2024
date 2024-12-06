import recipes from "../../data/recipes.json";

export default function Recipes() {
    return {
        recipesList: recipes.recipes,
        filteredRecipes: recipes.recipes,
        selectedDifficulty: "toutes",
        selectedPreparationTime: "tous",
        selectedCategory: "toutes",
        searchQuery: "",
        difficulties: ["toutes", ...new Set(recipes.recipes.map((r) => r.difficulty))],
        categories: ["toutes", "entrée", "plat", "dessert"],
        showModal: false,
        selectedRecipe: null,
        currentStep: 0,
        recipeCount: recipes.recipes.length,

        init() {
            this.applyFilters();
        },

        applyFilters() {
            let filtered = this.recipesList;

            // Filtrer par difficulté
            if (this.selectedDifficulty !== "toutes") {
                filtered = filtered.filter(recipe => recipe.difficulty === this.selectedDifficulty);
            }

            // Filtrer par temps de préparation
            if (this.selectedPreparationTime !== "tous") {
                if (this.selectedPreparationTime === "rapide") {
                    filtered = filtered.filter(recipe => recipe.preparationTime < 30);
                } else if (this.selectedPreparationTime === "moyen") {
                    filtered = filtered.filter(recipe => recipe.preparationTime >= 30 && recipe.preparationTime <= 60);
                } else if (this.selectedPreparationTime === "long") {
                    filtered = filtered.filter(recipe => recipe.preparationTime > 60);
                }
            }

            // Filtrer par catégorie
            if (this.selectedCategory !== "toutes") {
                filtered = filtered.filter(recipe => recipe.category === this.selectedCategory);
            }

            // Filtrer par titre (recherche)
            if (this.searchQuery) {
                filtered = filtered.filter(recipe => recipe.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
            }

            this.filteredRecipes = filtered;
            this.recipeCount = filtered.length;
        },

        viewRecipe(recipe) {
            this.selectedRecipe = recipe;
            this.showModal = true;
            this.currentStep = 0;
        },

        closeModal() {
            this.showModal = false;
            this.selectedRecipe = null;
        },

        nextStep() {
            if (this.selectedRecipe && this.selectedRecipe.instructions && this.currentStep < this.selectedRecipe.instructions.length - 1) {
                this.currentStep++;
            }
        },

        prevStep() {
            if (this.selectedRecipe && this.selectedRecipe.instructions && this.currentStep > 0) {
                this.currentStep--;
            }
        }
    };
}