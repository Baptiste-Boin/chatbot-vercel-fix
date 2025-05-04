export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { user_input = '' } = req.body ?? {};
  res.status(200).json({ response: `Tu as dit : ${user_input}` });
}
