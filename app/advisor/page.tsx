'use client';
import { useAIGeneration } from "@/utils/client";
import {
    Button,
    Card,
    Flex,
    Heading,
    Loader,
    Text,
    TextAreaField,
    View,
} from "@aws-amplify/ui-react";
import React, { useState, useCallback } from "react";

export default function AdvisorPage() {
    const { generate: generateCityAdvice, isLoading, error, data } = useAIGeneration('cityAdvice');
    const [description, setDescription] = useState('');

    const handleClick = useCallback(async () => {
        if (!description.trim()) {
            return;
        }

        try {
            await generateCityAdvice({ description });
        } catch (error) {
            console.error('Error generating city advice:', error);
        }
    }, [description, generateCityAdvice]);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
    }, []);

    return (
        <View padding="1rem">
            <Card>
                <Heading level={2}>AI City Advisor</Heading>
                <Flex direction="column" gap="1rem">
                    <TextAreaField
                        autoResize
                        value={description}
                        onChange={handleChange}
                        label="Ask for city advice"
                        placeholder="Example: Tell me about New York in a funny way"
                        isDisabled={isLoading}
                    />
                    <Button
                        onClick={handleClick}
                        isDisabled={isLoading || !description.trim()}
                    >
                        {isLoading ? 'Generating...' : 'Generate Advice'}
                    </Button>
                    {isLoading ? (
                        <Loader variation="linear" />
                    ) : error ? (
                        <Text color="red">Error generating advice. Please try again.</Text>
                    ) : (
                        data?.response && (
                            <View>
                                <Text>{data.response}</Text>
                            </View>
                        )
                    )}
                </Flex>
            </Card>
        </View>
    );
}
