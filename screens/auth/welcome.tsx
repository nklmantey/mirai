import Animated, { FadeIn } from 'react-native-reanimated'
import styled from 'styled-components/native'
import { CaretRight } from 'phosphor-react-native'
import { NavigationProp, useNavigation } from '@react-navigation/native'

import Container from '@/components/global/container'
import { AirbnbCerealBlack, AirbnbCerealRegular } from '@/components/ui/text'
import { Button } from '@/components/ui/button'

export default function WelcomeScreen() {
  const { navigate }: NavigationProp<AuthStackParamsList> = useNavigation()

  return (
    <Container>
      <BodyContainer>
        <Animated.View entering={FadeIn.delay(100).duration(1000)}>
          <AirbnbCerealBlack style={{ fontSize: 80, color: '#FF4800' }}>
            mirai.
          </AirbnbCerealBlack>
        </Animated.View>
        <Animated.View entering={FadeIn.delay(400).duration(1000)}>
          <AirbnbCerealRegular style={{ fontSize: 20, textAlign: 'center' }}>
            welcome to the future.
          </AirbnbCerealRegular>
        </Animated.View>
      </BodyContainer>

      <Animated.View entering={FadeIn.delay(1000).duration(1000)}>
        <Button
          title='get started'
          onPress={() => {
            navigate('login')
          }}
          icon={<CaretRight />}
        />
      </Animated.View>
    </Container>
  )
}

const BodyContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`