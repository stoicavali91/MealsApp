
import { useLayoutEffect } from 'react';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealsList from '../components/MealsList/MealsList';

function MealsOverviewScreen({route, navigation}) {

  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter((mealItem)=>{
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => { 
    //we are using useLayoutEffect instead of useEffect to render this title simultaniously with the  screen animation
    const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;
    navigation.setOptions({
      title: categoryTitle
    }); ////we are setting screen options dynamically

  },[catId, navigation]);

  return <MealsList items = {displayedMeals}/>
}

export default MealsOverviewScreen

