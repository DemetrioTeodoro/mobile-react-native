import React from 'react';
import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar';
import {
  Ubuntu_400Regular,
  Ubuntu_500Medium,
  Ubuntu_700Bold,
  useFonts
} from '@expo-google-fonts/ubuntu';

import Products from './src/pages/Products';

const App = () => {
  const [font] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_500Medium,
    Ubuntu_700Bold
  });

  if (!font) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor='transparent' translucent />
      <Products />
    </>
  );
}

export default App;