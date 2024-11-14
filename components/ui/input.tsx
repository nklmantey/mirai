import { useState } from 'react'

import { EyeClosed, Eye, IconContext } from 'phosphor-react-native'
import styled from 'styled-components/native'

interface InputProps {
  placeholder: string
  value: string
  onChangeText: (text: string) => void
  icon?: React.ReactNode
  isPasswordInput?: boolean
  error?: string
}

export function Input({
  placeholder,
  value,
  onChangeText,
  icon,
  isPasswordInput = false,
  error,
}: InputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  return (
    <PrimaryInputContainer>
      <PrimaryInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry={isPasswordInput ? isPasswordVisible : false}
        style={{ width: (isPasswordInput || icon) ? '85%' : '100%' }}
        isInvalid={!!error}
      />
      {isPasswordInput && (
        <IconContext.Provider
          value={{
            weight: 'duotone',
            size: 24,
            color: error ? 'crimson' : '#0B061B',
            duotoneColor: error ? 'crimson' : '#0B061B',
          }}
        >
          <IconContainerPressable
            activeOpacity={0.8}
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            style={{ borderColor: error ? 'crimson' : '#D4D4D8' }}
          >
            {isPasswordVisible ? <Eye /> : <EyeClosed />}
          </IconContainerPressable>
        </IconContext.Provider>
      )}
      {icon && (
        <IconContext.Provider
          value={{
            weight: 'duotone',
            size: 24,
            color: error ? 'crimson' : '#0B061B',
            duotoneColor: error ? 'crimson' : '#0B061B',
          }}
        >
          <IconContainer
            style={{ borderColor: error ? 'crimson' : '#D4D4D8' }}
          >
            {icon}
          </IconContainer>
        </IconContext.Provider>
      )}
    </PrimaryInputContainer>
  )
}

const PrimaryInputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`

const PrimaryInput = styled.TextInput<{ isInvalid: boolean }>`
  background-color: #F4F4F6;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid ${({ isInvalid }) => isInvalid ? 'crimson' : '#D4D4D8'};
  font-size: 16px;
  font-family: GeistMedium;
`

const IconContainerPressable = styled.TouchableOpacity`
  padding: 4px;
  background-color: #F4F4F6;
  width: 15%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid #D4D4D8;
`

const IconContainer = styled.View`
  padding: 4px;
  background-color: #F4F4F6;
  width: 15%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid #D4D4D8;
`