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

        // Initialisation des recettes et des filtres
        init() {
            this.recipesList = recipes.recipes;
            this.filteredRecipes = this.recipesList;
        },

        // Appliquer tous les filtres
        applyFilters() {
            this.filteredRecipes = this.recipesList.filter((recipe) => {
                return (
                    (this.selectedDifficulty === "toutes" || recipe.difficulty === this.selectedDifficulty) &&
                    (this.selectedPreparationTime === "tous" ||
                        (this.selectedPreparationTime === "rapide" && recipe.preparationTime < 30) ||
                        (this.selectedPreparationTime === "moyen" && recipe.preparationTime >= 30 && recipe.preparationTime <= 60) ||
                        (this.selectedPreparationTime === "long" && recipe.preparationTime > 60)
                    ) &&
                    (this.selectedCategory === "toutes" || recipe.category === this.selectedCategory) &&
                    (this.searchQuery === "" || recipe.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
                );
            });
        },

        // Afficher les détails d'une recette dans la modale
        viewRecipe(recipe) {
            this.selectedRecipe = recipe;
            this.showModal = true;
            this.currentStep = 0;
        },

        // Fermer la modale
        closeModal() {
            this.showModal = false;
            this.selectedRecipe = null;
        },

        // Aller à l'étape suivante
        nextStep() {
            if (this.selectedRecipe && this.selectedRecipe.instructions && this.currentStep < this.selectedRecipe.instructions.length - 1) {
                this.currentStep++;
            }
        },

        // Revenir à l'étape précédente
        prevStep() {
            if (this.selectedRecipe && this.selectedRecipe.instructions && this.currentStep > 0) {
                this.currentStep--;
            }
        }
    };
}