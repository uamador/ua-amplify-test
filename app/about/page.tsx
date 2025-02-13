'use client'
import React from 'react'
import { Button, Card, Heading, Text, View } from '@aws-amplify/ui-react'

export default function About() {
return (
    <View padding="1rem">
      <Card variation="elevated">
        <Heading level={1} className='page-title'>About Us</Heading>
        <Text>This is the about page of our Next.js application.</Text>
        <Button as="a" href="/">Back to Home</Button>
      </Card>
    </View>
  )
}
