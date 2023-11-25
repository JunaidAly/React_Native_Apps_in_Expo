import React from "react";
import { StyleSheet, View, Text, TextInput, Pressable } from "react-native";
import { useState } from "react";


export default function Student() {
    const [Name, setName] = useState('');
    const [marks1, setMarks1] = useState('');
    const [marks2, setMarks2] = useState('');
    const [marks3, setMarks3] = useState('');
    const [display, setDisplay] = useState(false);

    function ResetForm() {
        setDisplay(false);
        setName('');
        setMarks1('');
        setMarks2('');
        setMarks3('');
    }


    return (
        <View style={styles.mainView}>
            <Text style={styles.textfont}>Student Name</Text>
            <TextInput style={styles.textBox} onChangeText={(text) => setName(text)} value={Name} placeholder="Student Name:" />
            <Text style={styles.textfont}>Subject 1 Marks</Text>
            <TextInput style={styles.textBox} onChangeText={(text) => setMarks1(text)} value={marks1} placeholder="Subject 1 Marks" keyboardType="numeric" />
            <Text style={styles.textfont}>Subject 2 Marks</Text>
            <TextInput style={styles.textBox} onChangeText={(text) => setMarks2(text)} value={marks2} placeholder="Subject 2 Marks" keyboardType="numeric" />
            <Text style={styles.textfont}>Subject 3 Marks</Text>
            <TextInput style={styles.textBox} onChangeText={(text) => setMarks3(text)} value={marks3} placeholder="Subject 3 Marks" keyboardType="numeric" />

            <Pressable style={styles.btn} onPress={() => setDisplay(true)}>
                <Text style={styles.textfont}>Submit</Text>
            </Pressable>

            <Pressable style={styles.btn} onPress={ResetForm} >
                <Text style={styles.textfont}>Reset</Text>
            </Pressable>

            <View>{
                display ?
                    <View>
                        <Text style={{ fontSize: 20 }}>Student Name : {Name}</Text>
                        <Text style={{ fontSize: 20 }}>Subject 1 Marks {marks1}</Text>
                        <Text style={{ fontSize: 20 }}>Subject 2 Marks {marks2}</Text>
                        <Text style={{ fontSize: 20 }}>Subject 3 Marks {marks3}</Text>

                    </View>
                    : null
            }
            </View>

        </View>
    )
}


const styles = StyleSheet.create({

    textfont: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    },

    mainView: {
        marginTop: 30
    },
    textBox: {
        fontSize: 18,
        borderWidth: 3,
        borderColor: 'black',
        color: 'black',
        borderRadius: 5,
        padding: 5,
        margin: 10,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 10,
    },
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 7,
        paddingHorizontal: 1,
        borderRadius: 4,
        elevation: 3,
        marginTop: 5,
        marginLeft: 100,
        marginRight: 100,
        backgroundColor: 'green',
        margin: 10,

    }
});


