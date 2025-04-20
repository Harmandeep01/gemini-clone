
import { GoogleGenAI } from '@google/genai';

const main = async (prompt, setResultData, setLoading) => {
  const ai = new GoogleGenAI({ apiKey: 'AIzaSyBqmX6DxRQ3rKXbMGo2tznVv309TZsHvjo' });

  const config = {
    responseMimeType: 'text/plain',
  };

  const contents = [
    {
      role: 'user',
      parts: [{ text: prompt }],
    },
  ];

  try {
    const response = await ai.models.generateContentStream({
      model: 'gemma-3-1b-it',
      config,
      contents,
    });
    setResultData(''); // Clear previous output first ✅
    await setLoading(false); //Stop the animation when First character hits the Output
    for await (const chunk of response) {
      setResultData(prev => (prev || '') + (chunk.text || ''));
    }
    
    
  } catch (err) {
    console.error('Error:', err);
  }
};

export default main;
