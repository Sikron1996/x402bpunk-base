import express from 'express';
import { buildX402Response } from '../utils/x402Response.js';
import { facilitatePayment } from '../facilitator/base.js';

const router = express.Router();

router.get('/', (req, res) => {
  const resp = buildX402Response();
  // x402 protocol requires HTTP 402 (Payment Required)
  res.status(402).json(resp);
});

router.post('/pay', async (req, res) => {
  try {
    const { txHash, resource } = req.body || {};
    if (!txHash) return res.status(400).json({ error: 'txHash required' });
    const result = await facilitatePayment({ txHash, resource });
    if (!result.ok) return res.status(400).json({ error: result.error || 'payment not confirmed' });
    res.json({ ok: true, resource, source: 'facilitator.payai.network', details: result.details });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'internal error' });
  }
});

export default router;
