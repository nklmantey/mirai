import styled from 'styled-components/native'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { SignIn } from 'phosphor-react-native'

import { TypeLoginInput, loginSchema } from '@/schemas'
import Container from '@/components/global/container'
import { AirbnbCerealBlack, AirbnbCerealMedium, AirbnbCerealRegular } from '@/components/ui/text'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Header } from '@/components/global/header'
import { TouchableOpacity } from 'react-native'

export default function LoginScreen() {
  const { navigate }: NavigationProp<AuthStackParamsList> = useNavigation()

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<TypeLoginInput>({
    resolver: zodResolver(loginSchema),
  })

  function onSubmit(data: TypeLoginInput) {
    console.log('FORM VALUES', data)
  }

  return (
    <Container>
      <Header
        title='log back in.'
      />

      <InputsContainer>
        <Controller
          control={control}
          name='email'
          render={({ field }) => (
            <Input
              placeholder='email'
              value={field.value}
              onChangeText={field.onChange}
              error={errors.email?.message}
            />
          )}
        />
        <Controller
          control={control}
          name='password'
          render={({ field }) => (
            <Input
              placeholder='password'
              isPasswordInput
              value={field.value}
              onChangeText={field.onChange}
              error={errors.password?.message}
            />
          )}
        />
      </InputsContainer>

      <ButtonContainer>
        <Button
          title='log in'
          icon={<SignIn />}
          onPress={handleSubmit(onSubmit)}
        />
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            navigate('signup')
          }}
        >
          <AirbnbCerealRegular>
            don't have an account?{' '}
            <AirbnbCerealMedium>
              sign up
            </AirbnbCerealMedium>
          </AirbnbCerealRegular>
        </TouchableOpacity>
      </ButtonContainer>
    </Container>
  )
}

const InputsContainer = styled.View`
  gap: 16px;
  margin: 20px 0;
`

const ButtonContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  gap: 16px;
`
