import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const ChessGameLayout = () => {
    return (
        <View style={styles.container}>

            <Text style={styles.fontsize}>Chess Game Layout</Text>
            <View style={styles.chessboard}>

                {renderChessboardRows()}
            </View>
        </View>
    );
};

const renderChessboardRows = () => {
    const rows = [];
    const gridSize = 8; // Size of the chessboard (8x8)

    for (let i = 0; i < gridSize; i++) {
        rows.push(
            <View key={i} style={styles.chessboardRow}>
                {/* Render chessboard cells */}
                {renderChessboardCells(i)}
            </View>
        );
    }

    return rows;
};

const renderChessboardCells = (rowIndex) => {
    const cells = [];
    // Size of the chessboard (8x8)
    const gridSize = 8;

    for (let j = 0; j < gridSize; j++) {
        // Alternate between white and black cells
        const isWhite = (rowIndex + j) % 2 === 0;
        cells.push(
            <View
                key={j}
                style={[styles.chessboardCell, { backgroundColor: isWhite ? 'white' : 'black' }]}
            />
        );
    }

    return cells;
};

const styles = StyleSheet.create({
    fontsize: {
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 1,
        marginTop:75,
        fontStyle:'italic',
        color:'#fff',
        fontVariant:'arial'
      
    }
    ,
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:100,
        backgroundColor:'transparent'
    },
    chessboard: {
        width: 400,
        height: 400,
        borderWidth:5,
        color:'transparent',
        
    },
    chessboardRow: {
        flex: 1,
        flexDirection: 'row',
    },
    chessboardCell: {
        flex: 1,
    },
});

export default ChessGameLayout;
