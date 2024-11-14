import { CheckCircle, Info, WarningCircle } from 'phosphor-react-native'
import { Toaster } from 'sonner-native'

import useCachedResources from '@/hooks/useCachedResources';
import { TanstackProvider } from '@/providers/tanstack';
import RootNavigation from '@/navigation/root';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <TanstackProvider>
        <RootNavigation />
        <Toaster
          icons={{
            error: (
              <WarningCircle
                size={20}
                weight='duotone'
                color='crimson'
                duotoneColor='crimson'
              />
            ),
            success: (
              <CheckCircle
                size={20}
                weight='duotone'
                color='green'
                duotoneColor='green'
              />
            ),
            info: (
              <Info
                size={20}
                weight='duotone'
                color='cornflowerblue'
                duotoneColor='cornflowerblue'
              />
            ),
          }}
          position='top-center'
          richColors
          toastOptions={{
            titleStyle: {
              fontFamily: 'AirbnbCerealMedium',
              fontSize: 14,
            },
          }}
          style={{
            borderRadius: 8,
            padding: 16,
          }}
        />
      </TanstackProvider>
    </SafeAreaProvider>
  );
}
