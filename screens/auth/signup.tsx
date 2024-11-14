import Container from '@/components/global/container'
import { Header } from '@/components/global/header'
import { Button } from '@/components/ui/button'
import {
  NumberCircleOne,
  NumberCircleTwo,
  NumberCircleThree,
} from 'phosphor-react-native'
import { useState } from 'react'
import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'
import Animated, {
  useAnimatedStyle,
  withSpring,
  FadeIn,
  FadeOut,
  LinearTransition,
} from 'react-native-reanimated'

type StepItemProps = {
  isActive: boolean
}

function StepItem({ isActive }: StepItemProps) {
  const animatedStyle = useAnimatedStyle(() => ({
    backgroundColor: withSpring(isActive ? '#FF4800' : '#eee', {
      mass: 1,
      damping: 15,
      stiffness: 100
    })
  }))

  return (
    <AnimatedStepItem style={[styles.stepItem, animatedStyle]} />
  )
}

export default function SignupScreen() {
  const [step, setStep] = useState(1)

  function handleContinue() {
    if (step < 3) setStep(step + 1)
  }

  function handleBack() {
    if (step > 1) setStep(step - 1)
  }

  const stepIcon = {
    1: <NumberCircleOne />,
    2: <NumberCircleTwo />,
    3: <NumberCircleThree />,
  }

  return (
    <Container>
      <Header
        title='create an account.'
        hasBackButton
      />

      <StepContainer>
        <StepItem
          isActive={step === 1}
        />
        <StepItem
          isActive={step === 2}
        />
        <StepItem
          isActive={step === 3}
        />
      </StepContainer>

      <InputsContainer></InputsContainer>

      <AnimatedButtonContainer>
        {step > 1 && (
          <Animated.View
            entering={FadeIn.duration(200)}
            exiting={FadeOut.duration(200)}
            layout={LinearTransition.springify()}
          >
            <Button
              variant='outlined'
              title='go back'
              onPress={handleBack}
              style={{ flex: 1 }}
            />
          </Animated.View>
        )}
        <Button
          title='continue'
          onPress={handleContinue}
          icon={stepIcon[step as keyof typeof stepIcon]}
          style={{ flex: 1 }}
        />
      </AnimatedButtonContainer>
    </Container>
  )
}

const styles = StyleSheet.create({
  stepItem: {
    flex: 1,
    height: 12,
    borderRadius: 12
  }
})

const StepContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin: 20px 0;
`

const AnimatedStepItem = styled(Animated.View)``

const InputsContainer = styled.View`
  gap: 16px;
`

const AnimatedButtonContainer = styled(Animated.View)`
  flex-direction: row;
  gap: 8px;
  margin-top: auto;
`
