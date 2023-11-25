import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button } from 'react-native';
import { TextInput } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [display, setDisplay] = useState(false);

  const ResetForm = () =>{
    setDisplay(false);
    setName('');
    setMail('');
    setPassword('');
  }
  return (
    <View>
      <Text style={{ fontSize: 40, textAlign: 'center', marginTop: 50 }}>Simple Form</Text>
      <TextInput
        style={styles.textboxes}
        onChangeText={(text) => setName(text)}
        value={name}
        placeholder='enter your name'
      />


      <TextInput
        style={styles.textboxes}
        onChangeText={(text) => setMail(text)}
        value={email}
        placeholder='enter your email'
      />


      <TextInput
        style={styles.textboxes}
        onChangeText={(pass) => setPassword(pass)}
        value={password}
        placeholder='enter your password'
        secureTextEntry={true}
      />
      <View style={{ fontSize: 12, margin: 25 }}>

        <Button
          color={'green'}
          title='Print Details'
          onPress={() => { setDisplay(true) }}

        />
        <View style={{ margin: 5 }}></View>

        <Button
          color={'blue'}
          title='Cancel Details'
          onPress={()=>ResetForm()}

        />
      </View>
      <View>{
        display ?
          <View>
            <Text style={{ fontSize: 20 }}>Name is {name}</Text>
            <Text style={{ fontSize: 20 }}>email is {email}</Text>
            <Text style={{ fontSize: 20 }}>password is {password}</Text>

          </View>
          : null
      }
      </View>
    </View>


  );

}






const styles = StyleSheet.create({
  textboxes: {
    fontSize: 18,
    borderWidth: 2,
    borderColor: 'blue',
    color: 'green',
    borderRadius: 5,
    padding: 10,
    margin: 25,
    marginTop: 20
  }
});
