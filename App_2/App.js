import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,ImageBackground} from 'react-native';
import MyComponent from './Components/MyComponent';
import  App1  from './Component1/Touchable';
import Student from './Component2/StudentDetails';
import ChessGameLayout from './Flex/Flex';
// function MyComponent(){
//   return <Text>Iam a component</Text>
// }

 export default function App() {
 
  return (
    <View style={styles.container} >

      <ImageBackground source={require('./assets/chess.jpg')} style={styles.imgbg}>
  
    </ImageBackground>
      <ChessGameLayout></ChessGameLayout>
      
    </View>
  );
}





const styles = StyleSheet.create({

  imgbg:{
    height:280
  },
  container: {
      flex: 1,
      borderRadius:3,
      borderWidth:5,
      backgroundColor:'black'
      
      // padding: 20,
      // paddingBottom:1,
      // paddingLeft:1,
      // paddingRight:1


  }
})


