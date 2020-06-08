import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Input, Text } from "react-native-elements";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../actions/auth";

const SignInScreen = ({ navigation }) => {

  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const auth = useSelector((state) => state.auth);
  const { errorMessageLogin } = auth;
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Text h3>Sign In</Text>
      </View>
      { errorMessageLogin && <View style={{alignItems: 'center', marginTop: 20}}>
        <Text style={styles.errorMessage}>{errorMessageLogin}</Text>
      </View> }
      <Input
        autoCapitalize={'none'}
        placeholder='Username'
        onChangeText={(text) => {
          setUsername(text)
        }}
        rightIcon={{ type: 'font-awesome', name: 'user' }}
      />
      <Input
        placeholder='Password'
        secureTextEntry
        onChangeText={(text) => {
          setPassword(text)
        }}
        rightIcon={{ type: 'font-awesome', name: 'key' }}
      />
      <Button
        containerStyle={{alignItems: 'center'}}
        style={styles.submitButton}
        loading={auth.loggingIn}
        onPress={() => dispatch(login(username, password))}
        title="Login"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#DCDCDC',
  },
  submitButton: {
    width: '96%',
  },
  errorMessage: {
    color: '#ff0000'
  }
});

export default SignInScreen;
