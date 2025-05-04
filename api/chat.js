export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { user_input = '' } = req.body ?? {};

  const groq = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'llama3-8b-8192',
      messages: [{ role: 'user', content: user_input }],
      max_tokens: 512
    })
  }).then(r => r.json());

  res.status(200).json({ response: groq.choices[0].message.content });
}
