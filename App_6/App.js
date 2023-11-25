import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const GradeCalculator = () => {
  const [midTermMarks, setMidTermMarks] = useState('');
  const [midTermObtained, setmidTermObtained] = useState('');
  const [assignmentMarks1, setAssignmentMarks1] = useState('');
  const [assignmentMarks1Obtained, setassignmentMarks1Obtained] = useState('');
  const [assignmentMarks2, setAssignmentMarks2] = useState('');
  const [assignmentMarks2Obtained, setassignmentMarks2Obtained] = useState('');
  const [quizMarks1, setQuizMarks1] = useState('');
  const [quizMarks1Obtained, setquizMarks1Obtained] = useState('');
  const [quizMarks2, setQuizMarks2] = useState('');
  const [quizMarks2Obtained, setquizMarks2Obtained] = useState('');
  const [finalMarks, setFinalMarks] = useState('');
  const [finalMarksObtained, setFinalMarksObtained] = useState('');
  const [totalGrade, setTotalGrade] = useState('');
  const [Grade, setLetterGrade] = useState('');


  const calculateGrade = () => {
  
    const MidTotal = Number(midTermObtained)/Number(midTermMarks)*25;
    const Ass1Total = Number(assignmentMarks1Obtained)/Number(assignmentMarks1)*3.75;
    const Ass2Total = Number(assignmentMarks2Obtained)/Number(assignmentMarks2)*3.75;
    const Quiz1Total = Number(quizMarks1Obtained)/Number(quizMarks1)*3.75;
    const Quiz2total = Number(quizMarks2Obtained)/Number(quizMarks2)*3.75;
    const Finaltotal = Number(finalMarksObtained)/Number(finalMarks)*60;
      
    const totalMarks = MidTotal + Ass1Total + Ass2Total + Quiz1Total + Quiz2total + Finaltotal;

    setTotalGrade(totalMarks);

    if (totalMarks >= 90) {
      setLetterGrade('A');
    } else if (totalMarks >= 80) {
      setLetterGrade('B');
    } else if (totalMarks >= 70) {
      setLetterGrade('C');
    } else if (totalMarks >= 60) {
      setLetterGrade('D');
    } else {
      setLetterGrade('F');
    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.textstyle}>Grade Calculator</Text>

      <Text style={styles.textstyle}>Mid Term Marks Total:</Text>

      <TextInput
        style={styles.inputtxt}
        keyboardType="numeric"
        value={midTermMarks}
        onChangeText={(text) => setMidTermMarks(text)}
      />

      <Text style={styles.textstyle}>Obtained Marks:</Text>

      <TextInput
        style={styles.inputtxt}
        keyboardType="numeric"
        value={midTermObtained}
        onChangeText={(text) => setmidTermObtained(text)}
      />

      <Text style={styles.textstyle}>Assignment 1 Marks Total:</Text>
      <TextInput
        style={styles.inputtxt}
        keyboardType="numeric"
        value={assignmentMarks1}
        onChangeText={(text) => setAssignmentMarks1(text)}
      />

      <Text style={styles.textstyle}>Obtained Marks:</Text>

      <TextInput
        style={styles.inputtxt}
        keyboardType="numeric"
        value={assignmentMarks1Obtained}
        onChangeText={(text) => setassignmentMarks1Obtained(text)}
      />

      <Text style={styles.textstyle}>Assignment 2 Marks Total :</Text>
      <TextInput
        style={styles.inputtxt}
        keyboardType="numeric"
        value={assignmentMarks2}
        onChangeText={(text) => setAssignmentMarks2(text)}
      />

      <Text style={styles.textstyle}>Obtained Marks:</Text>

      <TextInput
        style={styles.inputtxt}
        keyboardType="numeric"
        value={assignmentMarks2Obtained}
        onChangeText={(text) => setassignmentMarks2Obtained(text)}
      />

      <Text style={styles.textstyle}>Quiz 1 Marks Total :</Text>
      <TextInput
        style={styles.inputtxt}
        keyboardType="numeric"
        value={quizMarks1}
        onChangeText={(text) => setQuizMarks1(text)}
      />

      <Text style={styles.textstyle}>Obtained Marks:</Text>

      <TextInput
        style={styles.inputtxt}
        keyboardType="numeric"
        value={quizMarks1Obtained}
        onChangeText={(text) => setquizMarks1Obtained(text)}
      />

      <Text style={styles.textstyle}>Quiz 2 Marks Total :</Text>
      <TextInput
        style={styles.inputtxt}
        keyboardType="numeric"
        value={quizMarks2}
        onChangeText={(text) => setQuizMarks2(text)}
      />

      <Text style={styles.textstyle}>Obtained Marks:</Text>

      <TextInput
        style={styles.inputtxt}
        keyboardType="numeric"
        value={quizMarks2Obtained}
        onChangeText={(text) => setquizMarks2Obtained(text)}
      />

      <Text style={styles.textstyle} >Final Marks Total :</Text>
      <TextInput
        style={styles.inputtxt}
        keyboardType="numeric"
        value={finalMarks}
        onChangeText={(text) => setFinalMarks(text)}
      />

      <Text style={styles.textstyle}>Obtained Marks:</Text>

      <TextInput
        style={styles.inputtxt}
        keyboardType="numeric"
        value={finalMarksObtained}
        onChangeText={(text) => setFinalMarksObtained(text)}
      />

      <Button title="Calculate Grade" onPress={calculateGrade} />

      {totalGrade !== '' && (

        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
          Total Grade: {totalGrade}%
        </Text>


      )}
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
        Grade : {Grade}</Text>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    fontSize: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textstyle: {
    fontSize: 14,
    fontWeight: 'bold',

  },

  textstyle1: {
    marginLeft: 0,
    marginTop: 0,
    fontSize: 12,
    fontWeight: 'bold',

  },
  inputtxt: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 2,
    width: 150,
    height: 25
  }
});

export default GradeCalculator;

