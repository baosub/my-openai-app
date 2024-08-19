'use client'

import React, { useState } from 'react'
import { Configuration, OpenAIApi } from 'openai';



const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration)

const page = () => {

    const [prompt, setPrompt] = useState('');
    const   
   [response, setResponse] = useState('');
  
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
  
      try {
        const   
   completion = await openai.createCompletion({
          model: 'text-davinci-003', // Replace with your desired model
          prompt,
          max_tokens: 1024,
          n: 1,
          stop: null,
          temperature: 0.5,
        });
        setResponse(completion.data.choices[0].text);
      } catch (error) {
        console.error(error);
        setResponse('Error generating text');
      }
    };
  
  return (
    <div>

<form onSubmit={handleSubmit}>
      <input type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
      <button type="submit">Generate</button>
      <p>{response}</p>
    </form>
    </div>
  )
}

export default page
