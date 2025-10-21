// File: /api/summary/route.js
import { CohereClient } from 'cohere-ai';

const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY
});

export async function POST(request) {
  try {
    const { text } = await request.json();

    if (!text) {
      Response.json({ error: 'No text provided for summarization' });
      return;
    }

    const response = await cohere.summarize({
            text: text || '',
            length: 'long',
            format: 'paragraph',
            model: 'summarize-xlarge',
            additional_command: '',
            temperature: 0.3,
        });

    if (!response || !response.summary) {
      throw new Error('Invalid or missing summary in Cohere API response');
    }

    return Response.json({ summary: response.summary });
  } catch (error) {
    console.error('Error in POST /api/summary:', error);
    return Response.json({ error: 'Internal Server Error', details: error.message });
  }
}
