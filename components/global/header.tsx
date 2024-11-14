import styled from 'styled-components/native'

import { AirbnbCerealBlack } from '@/components/ui/text'
import { ArrowLeft } from 'phosphor-react-native'
import { useNavigation } from '@react-navigation/native'

type HeaderProps = {
  title: string
  hasBackButton?: boolean
}

export function Header({
  title,
  hasBackButton = false,
}: HeaderProps) {
  const { goBack } = useNavigation()

  return (
    <HeaderContainer>
      {hasBackButton && (
        <BackButtonContainer
          activeOpacity={0.8}
          onPress={goBack}
        >
          <ArrowLeft
            weight='duotone'
            color='#FF4800'
            duotoneColor='#FF4800'
            size={24}
          />
        </BackButtonContainer>
      )}
      <AirbnbCerealBlack style={{ fontSize: 24, color: '#FF4800' }}>
        {title}
      </AirbnbCerealBlack>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 16px;
`

const BackButtonContainer = styled.TouchableOpacity`
  padding: 4px;
  background-color: #F4F4F6;
  width: 48px;
  height: 48px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid #D4D4D8;
`
