'use client'
import React from 'react'
import { Button, Card, Heading, Text, View, Image, Flex, SelectField} from '@aws-amplify/ui-react'
// Add these arrays outside your component
const cities = [
    "New York, NY",
    "Los Angeles, CA",
    "Chicago, IL",
    "Toronto, ON",
    "Vancouver, BC",
    "Montreal, QC",
    "Houston, TX",
    "Phoenix, AZ",
    "Philadelphia, PA",
    "San Francisco, CA",
    "Seattle, WA",
    "Miami, FL",
    "Calgary, AB",
    "Ottawa, ON",
    "Boston, MA",
    "Denver, CO"
].sort();

const tones = [
    "Professional",
    "Casual",
    "Nerdy",
    "Sarcastic",
    "Enthusiastic",
    "Poetic",
    "Historical",
    "Humorous"
].sort();


export default function CityAdvisor() {
    const [city, setCity] = useState('');
    const [tone, setTone] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async () => {
        if (!city || !tone) {
            setError('Please select both a city and a tone');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const res = await fetch('/api/city-advisor', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ city, tone }),
            });

            const data = await res.json();

            if (data.error) {
                throw new Error(data.error);
            }

            setResponse(data.response);
        } catch (err) {
            setError('Failed to get city advice. Please try again.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View padding="1rem">
            <Card>
                <Heading level={2}>City Advisor</Heading>
                <View marginBottom="1rem">
                    <SelectField
                        label="Select a City"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    >
                        <option value="">Select a city</option>
                        {cities.map((city) => (
                            <option key={city} value={city}>
                                {city}
                            </option>
                        ))}
                    </SelectField>
                </View>
                <View marginBottom="1rem">
                    <SelectField
                        label="Select a Tone"
                        value={tone}
                        onChange={(e) => setTone(e.target.value)}
                    >
                        <option value="">Select a tone</option>
                        {tones.map((tone) => (
                            <option key={tone} value={tone}>
                                {tone}
                            </option>
                        ))}
                    </SelectField>
                </View>
                <Button onClick={handleSubmit} isDisabled={loading}>
                    Get City Advice
                </Button>

                {loading && (
                    <View marginTop="1rem">
                        <Loader />
                    </View>
                )}

                {error && (
                    <View marginTop="1rem">
                        <Text color="red">{error}</Text>
                    </View>
                )}

                {response && (
                    <View marginTop="1rem">
                        <Text>{response}</Text>
                    </View>
                )}
            </Card>
        </View>
    );
}