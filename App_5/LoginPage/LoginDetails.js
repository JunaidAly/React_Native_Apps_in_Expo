import React from "react";
import { StyleSheet, View, Text, TextInput, Pressable } from "react-native";
import { useState } from "react";
import { ImageBackground } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function Login() {
    const [FirstName, setName] = useState('');
    const [LastName, setLstName] = useState('');
    const [Email, setEmail] = useState('');
    const [Pasword, setPass] = useState('');
    const [ConfirmPassword, setconfrmpass] = useState('');
    const [Gender, setGender] = useState('');
    const [Age, setAge] = useState('');
    const [Country, setconty] = useState('');
    const [city, setcity] = useState('');
    const [Street, setStreet] = useState('');




    return (
        <View style={styles.mainView}>
            <ImageBackground style={styles.mainView}></ImageBackground>
            <Text style={{ fontSize: 50, textAlign: 'center', color: '#fff' }}>Sign Up</Text>

            <TextInput style={styles.textBox} onChangeText={(text) => setName(text)} value={FirstName} placeholderTextColor={'#fff'} placeholder="First Name" />

            <TextInput style={styles.textBox} onChangeText={(text) => setLstName(text)} value={LastName} placeholderTextColor={'#fff'} placeholder="Last Name" />

            <TextInput style={styles.textBox} onChangeText={(text) => setEmail(text)} value={Email} placeholderTextColor={'#fff'} placeholder="Email" />

            <TextInput style={styles.textBox} onChangeText={(text) => setPass(text)} value={Pasword} placeholderTextColor={'#fff'} placeholder="Password" keyboardType="numeric" />

            <TextInput style={styles.textBox} onChangeText={(text) => setconfrmpass(text)} value={ConfirmPassword} placeholderTextColor={'#fff'} placeholder="Confirm Password" />

            <TextInput style={styles.textBox} onChangeText={(text) => setGender(text)} value={Gender} placeholderTextColor={'#fff'} placeholder="Gender" />

            <TextInput style={styles.textBox} onChangeText={(text) => setAge(text)} value={Age} placeholderTextColor={'#fff'} placeholder="Age" />

            <TextInput style={styles.textBox} onChangeText={(text) => setconty(text)} value={Country} placeholderTextColor={'#fff'} placeholder="Country" />

            <TextInput style={styles.textBox} onChangeText={(text) => setcity(text)} value={city} placeholderTextColor={'#fff'} placeholder="City" />

            <TextInput style={styles.textBox} onChangeText={(text) => setStreet(text)} value={Street} placeholderTextColor={'#fff'} placeholder="Street" />
            <Pressable style={styles.btn}>
                <Text style={styles.textfont}>Regester</Text>
            </Pressable>

        </View>
    )
}


const styles = StyleSheet.create({

    textfont: {
        fontSize: 16,
        textAlign: 'center',

        justifyContent: 'center',
        color: '#fff'
    },

    mainView: {
        marginTop: 20,
        backgroundColor: '#585A66',

        placeholder: {
            color: 'red',
        }


    },
    textBox: {
        fontSize: 14,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 20,
        paddingTop: 5,
        paddingBottom: 5,
        margin: 0,
        marginLeft: 60,
        marginRight: 60,
        marginTop: 10,
        textAlign: 'center',

    },
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 1,
        borderRadius: 20,
        elevation: 3,
        marginTop: 20,
        marginLeft: 60,
        marginRight: 60,
        backgroundColor: '#3CB371',
        margin: 90,

    }
});
