import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { useEffect, useState } from 'react';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          AirbnbCerealBlack: require('../assets/fonts/AirbnbCereal-Black.otf'),
          AirbnbCerealMedium: require('../assets/fonts/AirbnbCereal-Medium.otf'),
          AirbnbCerealRegular: require('../assets/fonts/AirbnbCereal-Regular.otf'),
          GeistRegular: require('../assets/fonts/Geist-Regular.ttf'),
        });
      } catch (e) {
        alert(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }
    loadResourcesAndDataAsync();
  }, []);
  return isLoadingComplete;
}