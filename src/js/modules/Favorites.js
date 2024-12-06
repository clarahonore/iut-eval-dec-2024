export default function Favorites() {
    return {
        // Liste des favoris persistée via localStorage grâce à Alpine.js Persist
        favorites: $persist([]).as("favorites"),

        // Vérifie si une recette est en favoris
        isFavorite(recipeId) {
            return this.favorites.includes(recipeId);
        },

        // Ajoute ou retire une recette des favoris
        toggleFavorite(recipeId) {
            if (this.isFavorite(recipeId)) {
                this.favorites = this.favorites.filter((id) => id !== recipeId);
            } else {
                this.favorites.push(recipeId);
            }
        },
    };
}