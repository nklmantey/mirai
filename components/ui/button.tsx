import styled from 'styled-components/native'

import { GeistMedium } from '@/components/ui/text'

export function Button() {
  return (
    <PrimaryButton>
      <GeistMedium>
        download
      </GeistMedium>
    </PrimaryButton>
  )
}

const PrimaryButton = styled.TouchableOpacity`
  background-color: #E3E1E4;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #929193;
  align-items: center;
`