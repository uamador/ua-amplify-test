'use client'
import React from 'react'
import Link from 'next/link'
import {
    Button, Card, Heading, View
} from '@aws-amplify/ui-react'

export default function Home() {
    return (
      <View padding="1rem">
        <Card variation="elevated">
          <Heading level={1} className='page-title'>Welcome to Chero's App</Heading>
          <nav>
            <Button as="a" href="/about">About Us</Button>
          </nav>
        </Card>
      </View>
    )
  }