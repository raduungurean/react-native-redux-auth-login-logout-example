import SignInScreen from "../screens/SignInScreen";
import HomeScreen from "../screens/HomeScreen";
import * as React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from "react-redux";
const Stack = createStackNavigator();

export default function Navigation(props) {
  const auth = useSelector((state) => state.auth);
  const userToken = auth.user ? auth.user.token : null;
  return <Stack.Navigator>
    {userToken === null ? (
      <Stack.Screen
        options={{
          headerShown: false
        }}
        name="SignIn"
        component={SignInScreen}
      />
    ) : (
      <Stack.Screen
        name="Home"
        component={HomeScreen}
      />
    )}
  </Stack.Navigator>;
}
