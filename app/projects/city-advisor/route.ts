import { BedrockRuntimeClient, InvokeModelCommand } from "@aws-sdk/client-bedrock-runtime";
import { bedrockClient } from "@/utils/bedrock";

export async function POST(request: Request) {
    try {
        const { city, tone } = await request.json();

        const prompt = `You are a city advisor. You will tell the user about the city ${city} in a ${tone} tone. Your response should be no more than three lines of text.`;

        const payload = {
            anthropic_version: "bedrock-2023-05-31",
            max_tokens: 300,
            messages: [
                {
                    role: "user",
                    content: prompt
                }
            ]
        };

        const command = new InvokeModelCommand({
            modelId: "anthropic.claude-3-haiku-20241022-v1",
            body: JSON.stringify(payload),
            contentType: "application/json",
            accept: "application/json",
        });

        const response = await bedrockClient.send(command);
        const responseData = JSON.parse(new TextDecoder().decode(response.body));

        return Response.json({ response: responseData.content[0].text });
    } catch (error) {
        console.error('Error:', error);
        return Response.json({ error: 'Failed to process request' }, { status: 500 });
    }
}
