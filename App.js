import * as React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import { navigationRef } from './src/services/navRef'
import store from './src/reducers';
import Navigation from "./src/navigation/Navigation";
import {useEffect, useState} from "react";
import {loggedIn} from "./src/actions/auth";
import {getAuthAsyncStorage} from "./src/services/getAuthAsyncStorage";

export default function App() {
  const [isLoading, setIsLoadingFromAsyncStorage] = useState(true);

  useEffect(() => {
    const load = async () => {
      await setIsLoadingFromAsyncStorage(true);
      const userStorage = await getAuthAsyncStorage();
      if (userStorage.user && userStorage.token) {
        await store.dispatch(loggedIn({
          user: userStorage.user,
          token: userStorage.token,
        }));
      }
      await setIsLoadingFromAsyncStorage(false);
    }
    load();
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
}
