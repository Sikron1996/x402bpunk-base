import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  const receiver = process.env.B402_RECEIVER || '0x0000000000000000000000000000000000000000';
  res.status(402).json({
    x402Version: 1,
    payer: "base",
    accepts: [{
      scheme: "exact",
      network: "base",
      maxAmountRequired: "10000",
      resource: "https://x402bpunk-base.vercel.app/api/totalMinted",
      description: "x402punks Total Mint Count",
      mimeType: "application/json",
      payTo: receiver,
      maxTimeoutSeconds: 300,
      asset: "USDC"
    }]
  });
});

export default router;
