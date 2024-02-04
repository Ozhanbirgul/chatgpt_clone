const { OpenAI } = require('openai');
const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true
});

export async function sendMsgToOpenAI(message) {
  const res = await openai.completions.create({
      model: 'gpt-3.5-turbo-instruct',
      prompt: message,
      temperature: 0.7,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0
      
    });
   
    
return res.data.choices[0].text;
}