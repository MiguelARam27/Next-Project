// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const { events } = require('./data.json');
export default function handler(req, res) {
  const slug = req.query.slug;
  const evt = events.filter((ev) => ev.slug === slug);
  console.log(evt);
  if (req.method === 'GET') {
    res.status(200).json(evt);
  } else {
    res.setHeader('Allow', ['GET']);
  }
}
