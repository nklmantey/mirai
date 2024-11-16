import { z } from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { AirbnbCerealBlack } from '@/components/ui/text'
import { Input } from '@/components/ui/input'
import { IdentificationCard } from 'phosphor-react-native'
import styled from 'styled-components'
import Animated, {
} from 'react-native-reanimated'
import { View } from 'react-native'
import { NumberCircleOne } from 'phosphor-react-native'

const formStepOneSchema = z.object({
  name: z.string({ required_error: 'your name is required' }),
})

export type TypeFormStepOneInput = z.infer<typeof formStepOneSchema>

export default function FormStepOne({ handleContinue }: { handleContinue: () => void }) {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<TypeFormStepOneInput>({
    resolver: zodResolver(formStepOneSchema),
  })

  function onSubmit(data: TypeFormStepOneInput) {
    // SAVE TO ASYNC STORAGE 
    handleContinue()
  }

  return (
    <FormContainer>
      <InputContainer>
        <AirbnbCerealBlack style={{ fontSize: 24, color: '#FF4800' }}>
          before we get started, tell us your name
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
              icon={<IdentificationCard size={24} color='#FF4800' duotoneColor='#FF4800' />}
            />
          )}
        />
      </InputContainer>

      <AnimatedButtonContainer>
        <Button
          title='continue'
          onPress={handleSubmit(onSubmit)}
          icon={<NumberCircleOne />}
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