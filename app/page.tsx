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
          <Heading level={1} className='page-title'>Welcome to Cheritos App</Heading>
          <nav>
            <Button as="a" href="/about">About Us</Button>
          </nav>
            <nav>
                <Button as="a" href="/projects">My Projects</Button>
            </nav>
            <nav>
                <Button as="a" href="/advisor">AI Advisor</Button>
            </nav>
        </Card>
      </View>
    )
  }