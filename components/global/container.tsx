import styled from 'styled-components'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <SafeArea>
      {children}
    </SafeArea>
  )
}

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: #f9f9f9;
  padding: 24px;
  width: 100%;
`
