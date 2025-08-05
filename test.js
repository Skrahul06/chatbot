import fetch from 'node-fetch';

const HUGGINGFACE_TOKEN = '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';

const test = async () => {
  console.log('Sending request...');

  const res = await fetch('https://api-inference.huggingface.co/models/google/flan-t5-small', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${HUGGINGFACE_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      inputs: "Translate English to Hindi: My name is Rahul.",
      parameters: {
        max_new_tokens: 100
      }
    })
  });

  if (!res.ok) {
    console.log('❌ Failed:', await res.text());
  } else {
    const data = await res.json();
    console.log('✅ Success:', data);
  }
};

test();
