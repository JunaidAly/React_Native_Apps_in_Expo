import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App1() {
    return (
        <>

            <View style={styles.container}>
                <Text style={{ marginBottom: 50, fontSize: 30, fontWeight: 'bold' }}>Tic Tac Toe Application</Text>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.cell}><Text style={styles.text}>X</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.cell}><Text style={styles.text}>O</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.cell}></TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.cell}><Text style={styles.text}>X</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.cell}><Text style={styles.text}>X</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.cell}><Text style={styles.text}>O</Text></TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.cell}><Text style={styles.text}>O</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.cell}><Text style={styles.text}>O</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.cell}><Text style={styles.text}>X</Text></TouchableOpacity>
                </View>
                <View>
                    <Text style={{ textAlign: 'left', marginTop: 20, fontSize: 18 }}>Player 1 = X</Text>
                    <Text style={{ textAlign: 'left', marginTop: 1, fontSize: 18 }}>Player 2 = O</Text>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
    },
    cell: {
        width: 100,
        height: 100,
        borderWidth: 2,
        borderColor: '#000',
    },
    text: {
        fontSize: 50,
        textAlign: 'center',
        padding: 12
    }
});
