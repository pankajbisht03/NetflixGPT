import OpenAI from 'openai';
import { OPENAI_KEY } from './constants';
// configuring openai
const openAi = new OpenAI({
  apiKey: OPENAI_KEY,
  dangerouslyAllowBrowser: true //gives an error cause we are calling the api from browser like environment and key can be compromised.
});

export default openAi