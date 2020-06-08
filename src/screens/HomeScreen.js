import React from 'react';

import {View, StyleSheet} from 'react-native';
import {Button, Text} from "react-native-elements";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../actions/auth";

const HomeScreen = ({ navigation }) => {
  const auth = useSelector((state) => state.auth);

  if (!auth.user) {
    return null;
  }

  const {first_name, last_name} = auth.user;
  const dispatch = useDispatch();
  const { errorMessageLogout } = auth;

  return (
    <View style={styles.container}>
      { errorMessageLogout && <View style={{alignItems: 'center', marginTop: 20}}>
        <Text style={styles.errorMessage}>{errorMessageLogout}</Text>
      </View> }
      <View style={{alignItems: 'center'}}>
        <Text h4 style={{alignItems: 'center'}}>{`Welcome ${first_name} ${last_name}.`}</Text>
      </View>
      <View>
        <Button
          containerStyle={{alignItems: 'center'}}
          loading={auth.loggingOut}
          onPress={() => dispatch(logout())}
          title="Logout"
        />
      </View>
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
  errorMessage: {
    color: '#ff0000'
  }
});

export default HomeScreen;
