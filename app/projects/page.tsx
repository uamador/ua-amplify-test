'use client'
import React, { memo } from 'react'
import { Button, Card, Heading, Text, View, Image, Flex } from '@aws-amplify/ui-react'

// Move projects data outside the component to prevent recreation on re-renders
const PROJECTS = [
    {
        id: 1,
        name: "City Advisor",
        description: "An AI city advisor with attitude",
        image: "/images/city-advisor.png",
        link: "/projects/city-advisor"
    },
    {
        id: 2,
        name: "RAG Implementation",
        description: "This project showcases using RAG (Retrieval Augmented Generation)",
        image: "/images/rag.png",
        link: "/projects/rag"
    }
] as const; // Make the array readonly for better type safety

// Create a separate ProjectCard component for better code organization and potential memoization
const ProjectCard = memo(({ project }: { project: typeof PROJECTS[number] }) => (
    <Card
        key={project.id}
        variation="elevated"
        maxWidth="320px"
        padding="1rem"
    >
        <Flex direction="column" height="100%"> {/* Add a Flex container */}
            <Image
                src={project.image}
                alt={project.name}
                width="100%"
                height="200px"
                objectFit="cover"
                loading="lazy"
            />
            <Heading level={4} padding="0.5rem 0">
                {project.name}
            </Heading>
            <Text padding="0.5rem 0">
                {project.description}
            </Text>
            <View marginTop="auto" textAlign="center"> {/* Add a wrapper View */}
                <Button
                    as="a"
                    href={project.link}
                    variation="primary"
                    marginTop="medium"
                >
                    View Project
                </Button>
            </View>
        </Flex>
    </Card>
));

ProjectCard.displayName = 'ProjectCard'; // Add display name for better debugging

export default function Projects() {
    return (
        <View padding="1rem">
            <Heading level={1} className='page-title'>My Projects</Heading>

            <Flex
                direction={{ base: 'column', large: 'row' }}
                gap="1rem"
                wrap="wrap"
                justifyContent="center"
            >
                {PROJECTS.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </Flex>

            <Button
                as="a"
                href="/"
                marginTop="2rem"
            >
                Back to Home
            </Button>
        </View>
    )
}
