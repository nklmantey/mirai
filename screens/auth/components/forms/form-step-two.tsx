import { z } from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { AirbnbCerealBlack, GeistRegular } from '@/components/ui/text'
import { Input } from '@/components/ui/input'
import { EnvelopeSimple } from 'phosphor-react-native'
import styled from 'styled-components'
import Animated, { FadeIn, FadeOut, LinearTransition } from 'react-native-reanimated'
import { View } from 'react-native'
import { NumberCircleTwo } from 'phosphor-react-native'

const formStepTwoSchema = z.object({
  name: z.string({ required_error: 'your name is required' }),
})

export type TypeFormStepTwoInput = z.infer<typeof formStepTwoSchema>

export default function FormStepOne({
  handleContinue,
  handleBack
}: {
  handleContinue: () => void
  handleBack: () => void
}) {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<TypeFormStepTwoInput>({
    resolver: zodResolver(formStepTwoSchema),
  })

  function onSubmit(data: TypeFormStepTwoInput) {
    // SAVE TO ASYNC STORAGE 
    handleContinue()
  }

  return (
    <FormContainer>
      <InputContainer>
        <AirbnbCerealBlack style={{ fontSize: 24, color: '#FF4800' }}>
          that's great, Mantey what's your email address?
        </AirbnbCerealBlack>

        <Controller
          control={control}
          name='name'
          render={({ field }) => (
            <Input
              placeholder='enter your name'
              value={field.value}
              onChangeText={field.onChange}
              error={errors.name?.message}
              icon={<EnvelopeSimple size={24} color='#FF4800' duotoneColor='#FF4800' />}
            />
          )}
        />
      </InputContainer>

      <AnimatedButtonContainer>
        <Animated.View
          entering={FadeIn.duration(500)}
          exiting={FadeOut.duration(500)}
          layout={LinearTransition.springify()}
        >
          <Button
            variant='outlined'
            title='go back'
            onPress={handleBack}
            style={{ flex: 1 }}
          />
        </Animated.View>
        <Button
          title='continue'
          onPress={handleSubmit(onSubmit)}
          icon={<NumberCircleTwo />}
          style={{ flex: 1 }}
        />
      </AnimatedButtonContainer>
    </FormContainer>
  )
}

const FormContainer = styled(View)`
  flex: 1;
`

const InputContainer = styled(View)`
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  gap: 16px
`

const AnimatedButtonContainer = styled(Animated.View)`
  flex-direction: row;
  gap: 8px;
  margin-top: auto;
`