import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import fetch from 'node-fetch';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({ origin: '*', methods: ['GET', 'POST', 'OPTIONS'] }));
app.options('*', cors());
app.use(express.json());
app.use(express.static('public'));

// ✅ Pure Ollama chat API (no RAG)
app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;
    const userMessage = messages[messages.length - 1].content;

    const response = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama3',
        prompt: userMessage,
        stream: false
      })
    });

    const data = await response.json();
    let aiResponse = data.response.trim();

    if (!aiResponse || aiResponse.length < 5) {
      aiResponse = "I'm not sure about that yet, I'm still learning.";
    }

    res.json({
      role: 'assistant',
      content: aiResponse
    });

  } catch (err) {
    console.error('❌ Error:', err);
    res.status(500).json({ role: 'assistant', content: `Error: ${err.message}` });
  }
});

app.listen(port, () => {
  console.log(`✅ Chatbot server running at http://localhost:${port}`);
});
