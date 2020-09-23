import React, { useState } from 'react';
import *  as Font from 'expo-font';
import { AppLoading } from 'expo';
import Navigator from './routes/drawer'

const getFonts = () => Font.loadAsync({
  'lato-regular': require('./assets/fonts/Lato-Regular.ttf'),
  'lato-bold': require('./assets/fonts/Lato-Bold.ttf')
});

export default function App() {
  const [fontsloaded, setFontsLoaded] = useState(false);
  if (fontsloaded) {
    return (
      <Navigator />
    );
  } else {
    return(
    <AppLoading
      startAsync={getFonts}
      onFinish={() => setFontsLoaded(true)}
    />
    );
  }

}


