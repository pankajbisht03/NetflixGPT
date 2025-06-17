import OpenAI from 'openai';
import { OPEN_AI_KEY,WORKING_AI_KEY } from './constants';
// configuring openai
const openAi = new OpenAI({
  apiKey: WORKING_AI_KEY,
  dangerouslyAllowBrowser: true //gives an error cause we are calling the api from browser like environment and key can be compromised.
});

export default openAi