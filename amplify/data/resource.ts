import { a, defineData, type ClientSchema } from '@aws-amplify/backend';

const schema = a.schema({
  generateCityAdvice: a.generation({
    aiModel: a.ai.model('anthropic.claude-3-haiku'),  // Updated model name
    systemPrompt: 'You are a helpful assistant that generates advice for the city of Toronto in less than 3 lines of text.',
  })
      .arguments({
        topic: a.string()
      })
      .returns(
          a.customType({
            advice: a.string()  // The main advice
          })
      )
      .authorization((allow) => allow.authenticated()),
});

export type Schema = ClientSchema<typeof schema>;
export default schema;
