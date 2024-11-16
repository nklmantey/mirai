import Container from '@/components/global/container'
import { Header } from '@/components/global/header'

import { useState } from 'react'
import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'
import Animated, {
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated'
import {
  FormStepOne,
  FormStepTwo
} from './components/forms'

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
    <Animated.View style={[styles.stepItem, animatedStyle]} />
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

  const stepForms = {
    1: <FormStepOne handleContinue={handleContinue} />,
    2: <FormStepTwo handleContinue={handleContinue} handleBack={handleBack} />,
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

      <FormContainer>
        {stepForms[step as keyof typeof stepForms]}
      </FormContainer>
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


const FormContainer = styled.View`
  flex: 1;
  align-items: center; 
  justify-content: center;
`
