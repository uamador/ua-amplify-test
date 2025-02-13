'use client'
import React from 'react'
import { Button, Card, Heading, Text, View, Image, Flex } from '@aws-amplify/ui-react'

export default function RAGImplementation() {
    return (
        <View>
            {/* Hero Section */}
            <View className="hero-section">
                <Image
                    src="/images/rag.png"
                    alt="RAG Implementation"
                    width="100%"
                    height="200px"
                    objectFit="cover"
                />
            </View>

            {/* Content Section */}
            <View padding="2rem" maxWidth="1200px" margin="0 auto">
                <Heading level={1} className="page-title">
                    RAG Implementation
                </Heading>

                <Text className="project-description" marginBottom="2rem">
                    This project demonstrates the power of Retrieval Augmented Generation (RAG),
                    a sophisticated approach that enhances Large Language Models by combining them
                    with a knowledge base of relevant information. This implementation showcases
                    how RAG can improve the accuracy and relevance of AI-generated responses by
                    retrieving and incorporating specific context during the generation process.
                </Text>

                {/* Demo Section */}
                <Card variation="elevated" padding="2rem">
                    <Heading level={2} marginBottom="1rem">
                        RAG Demo
                    </Heading>

                    {/* Add your RAG demo component here */}
                    <View className="demo-section">
                        {/* Your RAG functionality goes here */}
                        <Text>Demo functionality coming soon...</Text>
                    </View>
                </Card>

                {/* Navigation Buttons */}
                <Flex gap="1rem" marginTop="2rem">
                    <Button
                        as="a"
                        href="/projects"
                        variation="secondary"
                    >
                        Back to Projects
                    </Button>
                    <Button
                        as="a"
                        href="/"
                        variation="secondary"
                    >
                        Home
                    </Button>
                </Flex>
            </View>
        </View>
    )
}
