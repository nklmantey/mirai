import React from 'react'
import Container from '@/components/global/container'
import { GeistBold } from '@/components/ui/text'
import { Button } from '@/components/ui/button'

export default function HomeScreen() {
  return (
    <Container>
      <GeistBold>home</GeistBold>

      <Button
        title='login'
        onPress={() => {
        }}
      />
    </Container>
  )
}