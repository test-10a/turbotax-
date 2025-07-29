export default function handler(req, res) {
  if (req.method === 'POST') {
    const { event, timestamp, userAgent, data } = req.body;
    
    console.log('Event:', event);
    console.log('Timestamp:', timestamp);
    console.log('User Agent:', userAgent);
    console.log('Data:', JSON.stringify(data));
    
    res.status(200).json({ success: true });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}