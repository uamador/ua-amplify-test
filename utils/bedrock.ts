import { BedrockRuntimeClient } from "@aws-sdk/client-bedrock-runtime";

export const bedrockClient = new BedrockRuntimeClient({
    region: process.env.NEXT_PUBLIC_AWS_REGION || 'us-east-1',
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
    },
});
