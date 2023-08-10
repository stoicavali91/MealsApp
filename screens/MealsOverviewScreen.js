
import { useLayoutEffect } from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealItem from '../components/MealItem';

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

  function renderMealItem(itemData){

    const mealItemProps = {
      id: itemData.item.id,
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      duration: itemData.item.duration,
      complexity: itemData.item.complexity,
      affordability: itemData.item.affordability,
      ingredients: itemData.item.ingredients,
      steps: itemData.item.steps,
    }

    return( 
     <MealItem {...mealItemProps}/>
    )
  }

  return (
   <View style={styles.container}>
    <FlatList 
      data={displayedMeals} 
      keyExtractor={(item)=> item.id} 
      renderItem={renderMealItem}
    />
   </View>
  )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:16,
  }
});