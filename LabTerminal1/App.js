import { StyleSheet, Switch, Text, View, TextInput, Button, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Tab = createMaterialTopTabNavigator();

export default function TabsJunaid() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  

  useEffect(() => {

    retrieveUserProfile();
  }, []);

  const storeUserProfile = async () => {
    try {
      const profile = { username, email, phoneNumber, profilePicture };
      await AsyncStorage.setItem('userProfile', JSON.stringify(profile));
    } catch (error) {
      console.log('Error storing user profile:', error);
    }
  };

  const retrieveUserProfile = async () => {
    try {
      const profileString = await AsyncStorage.getItem('userProfile');
      if (profileString !== null) {
        const profile = JSON.parse(profileString);
        setUsername(profile.username);
        setEmail(profile.email);
        setPhoneNumber(profile.phoneNumber);
     
      }
    } catch (error) {
      console.log('Error retrieving user profile:', error);
    }
  };

  return (
    <NavigationContainer style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          headerStyle:
            { backgroundColor: 'skyblue' },
          headerTintColor: 'black',
          headerTitleStyle: { fontSize: 50 }
        }}
        initialRouteName="My Favourites">
        <Tab.Screen name="Profile" options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" size={24} color={color} />
          ),
        }}>
          {(props) => (
            <ProfileJunaid
              {...props}
              setUsername={setUsername}
              setEmail={setEmail}
              setPhoneNumber={setPhoneNumber}
              username={username}
              email={email}
              phoneNumber={phoneNumber} 
              storeUserProfile={storeUserProfile}
            />

          )}
        </Tab.Screen>
        <Tab.Screen name="My Favourites" component={MyFavJunaid}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="heart" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen name="My Todos" component={MyTodosJunaid}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="check" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen name="Settings" component={SettingsJunaid}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account-settings" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


function ProfileJunaid({
  setUsername,
  setEmail,
  setPhoneNumber,
  username,
  email,
  phoneNumber,
  storeUserProfile,
}) {
  const [inputUsername, setInputUsername] = useState(username);
  const [inputEmail, setInputEmail] = useState(email);
  const [inputPhoneNumber, setInputPhoneNumber] = useState(phoneNumber);

  const handleSave = async () => {
    setUsername(inputUsername);
    setEmail(inputEmail);
    setPhoneNumber(inputPhoneNumber);
    await storeUserProfile();
  };

  const retrieveUserProfile = async () => {
    try {
      const profileString = await AsyncStorage.getItem('userProfile');
      if (profileString !== null) {
        const profile = JSON.parse(profileString);
        setInputUsername(profile.username);
        setInputEmail(profile.email);
        setInputPhoneNumber(profile.phoneNumber);
      }
    } catch (error) {
      console.log('Error retrieving user profile:', error);
    }
  };

  useEffect(() => {
    retrieveUserProfile();
  }, []);

  return (
    <View style={styles.textview}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setInputUsername(text)}
        value={inputUsername}
        placeholder="Enter username"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setInputEmail(text)}
        value={inputEmail}
        placeholder="Enter email"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setInputPhoneNumber(text)}
        value={inputPhoneNumber}
        placeholder="Enter phone number"
      />
      <Button onPress={handleSave} title="Save" />
      <View style={styles.container}>
        <Text style={styles.title}>Saved Data:</Text>
        <Text>Username: {username}</Text>
        <Text>Email: {email}</Text>
        <Text>Phone Number: {phoneNumber}</Text>
      </View>
    </View>
  );
}


function MyFavJunaid() {
  const registrationNumber = '8';
  const [favoritePosts, setFavoritePosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      const filteredPosts = data.filter((post) => post.userId.toString() === getUserIdFromRegNum(registrationNumber));
      setFavoritePosts(filteredPosts);
    } catch (error) {
      console.log('Error fetching posts:', error);
    }
  };

  const getUserIdFromRegNum = (regNum) => {
    const regNumParts = regNum.split('-');
    return regNumParts[regNumParts.length - 1];
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Favorite Posts</Text>
      {favoritePosts.length > 0 ? (
        favoritePosts.map((post) => (
          <View key={post.id} style={styles.postContainer}>
            <Text style={styles.title}>{post.title}</Text>
            <Text style={styles.body}>{post.body}</Text>
          </View>
        ))
      ) : (
        <Text style={styles.noPostsText}>No favorite posts found.</Text>
      )}
    </View>
  );
}


function MyTodosJunaid() {
  const registrationNumber = '8';
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();
      const filteredTodos = data
        .filter((todo) => todo.userId.toString() === getUserIdFromRegNum(registrationNumber))
        .slice(0, 5);
      setTodos(filteredTodos);
    } catch (error) {
      console.log('Error fetching todos:', error);
    }
  };

  const getUserIdFromRegNum = (regNum) => {
    const regNumParts = regNum.split('-');
    return regNumParts[regNumParts.length - 1];
  };

  const renderItem = ({ item }) => {
    const itemStyle = item.completed ? styles.completedTodo : styles.incompleteTodo;
    return (
      <View style={[styles.todoContainer, itemStyle]}>
        <View style={styles.todoItem}>
          <View style={styles.todoStatus} />
          <View style={styles.todoContent}>
            <View style={styles.todoHeader}>
              <Text style={styles.todoTitle}>{item.title}</Text>
              <Text style={styles.todoStatusText}>{item.completed ? 'Completed' : 'Incomplete'}</Text>
            </View>
            <Text style={styles.todoUserId}>User ID: {item.userId}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

function SettingsJunaid() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    retrieveTheme();
  }, []);

  const toggleTheme = (value) => {
    setIsDarkMode(value);
    storeTheme(value);
  };

  const storeTheme = async (value) => {
    try {
      await AsyncStorage.setItem('theme', value.toString());
    } catch (error) {
      console.log('Error storing theme:', error);
    }
  };

  const retrieveTheme = async () => {
    try {
      const value = await AsyncStorage.getItem('theme');
      if (value !== null) {
        setIsDarkMode(value === 'true');
      }
    } catch (error) {
      console.log('Error retrieving theme:', error);
    }
  };

  return (
    <View style={[styles.container, isDarkMode ? styles.darkBackground : styles.lightBackground]}>
      <View style={styles.settingItem}>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleTheme}
          value={isDarkMode}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textview: {
    marginTop: 50,
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  noProfilePictureText: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    width: '60%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    marginTop: 10,
    marginLeft: 270
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  postContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  body: {
    fontSize: 16,
  },
  noPostsText: {
    fontSize: 18,
  },
  listContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  todoContainer: {
    marginBottom: 10,
    borderRadius: 5,
    padding: 10,
  },
  completedTodo: {
    backgroundColor: 'green',
  },
  incompleteTodo: {
    backgroundColor: 'red',
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  todoStatus: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  todoContent: {
    flex: 1,
  },
  todoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  todoTitle: {
    fontWeight: 'bold',
  },
  todoStatusText: {
    fontWeight: 'bold',
  },
  todoUserId: {
    fontStyle: 'italic',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lightBackground: {
    backgroundColor: '#fff',
  },
  darkBackground: {
    backgroundColor: '#000',
  },
});
