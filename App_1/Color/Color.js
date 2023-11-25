import { useState } from "react";
import { View, Text, StyleSheet, Button, Pressable, SafeAreaView, TextInput } from "react-native";

const Btn = (props) => {
    const { onPress, title = 'Login' } = props;
    return (
        <Pressable style={styles.btn} onPress={onPress}>

            <Text style={styles.text}>{title}</Text>
        </Pressable>

    )
}

const Press = () =>{
    return(
        
        console.warn("Login Successful")
    );
}

const App = () => {
    return (
        <View style={styles.mainview}>
         
            <Text style={styles.LgnText} >Login Page</Text>
            <TextBox1></TextBox1>
            <Btn onPress = {Press} ></Btn>
            
       </View>
    );
}

const TextBox1 = ()=>{
    const[text,onchangetext] = useState(' ');
    const[password,pass] = useState(' ');
    
    return(
        <SafeAreaView>
            <TextInput style={styles.textBox} onChangeText={onchangetext}  placeholder="Enter Your Username"/>
            <TextInput style={styles.textBox} onChangeText={pass}  placeholder="Enter Your Password"/>

        </SafeAreaView>
    );
}





const styles = StyleSheet.create({

    textBox: {
        color: 'black',
        fontSize: 20,
        marginTop: 25,
        margin: 50,
        marginBottom: 5,
        padding: 10,
        borderRadius: 10,
        height: 50,
        textAlignVertical: 'center',
        textAlign: 'left',
        borderColor: 'green',
        borderWidth: 5,


    }
    , btn: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        marginTop: 50,
        backgroundColor: 'green',
        margin: 50

    }
    ,
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    LgnText:
    {
        fontSize: 50,
        textAlign: 'center',
        fontSize: 50,
        margin: 50,
        marginBottom: 10,
        marginTop: 100
    },
    mainview:{
        
        height:690
    }
   
});

export default App;