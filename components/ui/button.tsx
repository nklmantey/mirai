import styled from 'styled-components/native'
import { IconContext } from 'phosphor-react-native'
import { ActivityIndicator, TouchableOpacityProps } from 'react-native'
import * as Haptics from 'expo-haptics'

import { AirbnbCerealMedium } from '@/components/ui/text'

type ButtonProps = {
  title: string
  onPress: () => void
  variant?: 'primary' | 'outlined' | 'danger'
  icon?: React.ReactNode
  isLoading?: boolean
  style?: TouchableOpacityProps['style']
}

const backgroundVariants = {
  primary: '#E3E1E4',
  outlined: '#F6F4F7',
  danger: '#fa929261',
}

const borderVariants = {
  primary: '#929193',
  outlined: '#DDDBDE',
  danger: 'crimson',
}

export function Button({
  title,
  onPress,
  variant = 'primary',
  icon,
  isLoading = false,
  style,
}: ButtonProps) {
  return (
    <PrimaryButton
      activeOpacity={0.8}
      onPress={() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
        onPress()
      }}
      disabled={isLoading}
      variant={variant}
      style={style}
    >
      <ButtonText variant={variant}>
        {title}
      </ButtonText>
      {isLoading && (
        <ActivityIndicator
          color={variant === 'danger' ? 'crimson' : '#0B061B'}
        />
      )}
      {!isLoading && icon && (
        <IconContext.Provider
          value={{
            weight: 'duotone',
            size: 24,
            color: variant === 'danger' ? 'crimson' : '#0B061B',
            duotoneColor: variant === 'danger' ? 'crimson' : '#0B061B',
          }}
        >
          {icon}
        </IconContext.Provider>
      )}
    </PrimaryButton>
  )
}

const PrimaryButton = styled.TouchableOpacity<{ variant: ButtonProps['variant'] }>`
  background-color: ${({ variant }) => backgroundVariants[variant!]};
  padding: 16px;
  border-radius: 8px;
  border: 1px solid ${({ variant }) => borderVariants[variant!]};
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  opacity: ${({ disabled }) => disabled ? 0.5 : 1};
`

const ButtonText = styled(AirbnbCerealMedium) <{ variant: ButtonProps['variant'] }>`
  color: ${({ variant }) => variant === 'danger' ? 'crimson' : '#0B061B'};
`