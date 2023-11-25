import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View, ImageBackground } from 'react-native';
import Color from './Color/Color';
const App = () => {
  //const [name,Setname] = useState("Junaid");
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>

    </View>

    // <View>
    //   <Text style={{fontSize:30 , marginTop : 50}}>Parent Component</Text>
    //   <Button title='Update Button' onPress={()=>Setname("Ali")}></Button>
    //       <User name = {name}/>
    // </View>
  );
}



// const User = (props)=>{
//   return(
//     <View>
//       <Text style = {{fontSize : 30 ,backgroundColor :'green',padding :5}}>Child Component {props.name}</Text>
//     </View>
//   )
// }

export default App;