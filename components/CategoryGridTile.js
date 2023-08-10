import { View, Pressable, Text, StyleSheet, Platform } from "react-native";



function CategoryGridTile({title, color, onPressProp}) {
  return (
    <View style={styles.gridItem}>
      <Pressable 
        android_ripple={{color:'#ccc'}} 
        style={({pressed}) => [styles.buttonStyle, pressed ? styles.buttonPressed : null,]}
        onPress={onPressProp}
      >
        <View style={[styles.innerContainer, {backgroundColor: color}]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>

  )
}

export default CategoryGridTile

const styles = StyleSheet.create({
  gridItem:{
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4, //shadow for android
    shadowColor: 'black', //shadow for ios
    shadowOffset: {width: 0, height: 2},//shadow for ios
    shadowOpacity: 0.25,//shadow for ios
    shadowRadius: 8, //shadow for ios
    backgroundColor: 'white', // shadow for ios. For ios shadow you have to set the background color to work,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  buttonStyle:{
    flex:1,
  },
  buttonPressed: {
    opacity: 0.5
  },
  innerContainer:{
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  }
})
