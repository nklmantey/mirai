import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from '@/components/ui/button'

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, padding: 24, backgroundColor: '#F6F4F7' }}>
      <Button />
    </SafeAreaView>
  )
}