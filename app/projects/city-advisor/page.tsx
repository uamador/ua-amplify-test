'use client'
import React from 'react'
import { Card, Heading, View, SelectField} from '@aws-amplify/ui-react'

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
    const [city, setCity] = React.useState('');
    const [tone, setTone] = React.useState('');

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
            </Card>
        </View>
    );
}