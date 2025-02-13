import { BedrockRuntimeClient } from "@aws-sdk/client-bedrock-runtime";

export const bedrockClient = new BedrockRuntimeClient({
    region: process.env.NEXT_PUBLIC_AWS_REGION || 'us-east-1',
});
