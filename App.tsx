import useCachedResources from '@/hooks/useCachedResources';
import { TanstackProvider } from '@/providers/tanstack';
import RootNavigation from '@/navigation/root';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <TanstackProvider>
      <RootNavigation />
    </TanstackProvider>
  );
}
