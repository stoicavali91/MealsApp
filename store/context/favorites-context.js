import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {}
});

function FavoritesContextProvider({children}){

  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  function addFavorite(id){
    //this functions adds a new id to the current favorites ids
    setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
  }
  function removeFavorite(id){
    //this function filters the current favorites ids and deletes the selected id from the current list
    setFavoriteMealIds((currentFavIds) => currentFavIds.filter((mealId) => mealId !== id));
  }

  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite, //key name: addFavorite function
    removeFavorite: removeFavorite//key name: removeFavorite funct
  }

  return (
    <FavoritesContext.Provider value={value} >{children}</FavoritesContext.Provider>
  )
};

export default FavoritesContextProvider;