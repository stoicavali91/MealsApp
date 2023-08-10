import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet} from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';

import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <>
      <StatusBar style='light'/>
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{ 
            headerStyle: { backgroundColor: '#351401'},
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' }}}>
          <Stack.Screen 
            name='MealsCategories' 
            component={CategoriesScreen} 
            options={{
              title: 'All Categories',
            }}
          />
          <Stack.Screen
            name='MealsOverview' 
            component={MealsOverviewScreen}
            // options={({route, navigation}) => {   //we are setting options dynamically
            //   const catId = route.params.categoryId;
            //   return {
            //     title: catId,
            //   };
            // }}
          />
          <Stack.Screen
            name='MealDetails'
            component={MealDetailScreen}
            // options={{headerRight: () => {
            //   return <Button title='Tap Me!' />
            // }}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
