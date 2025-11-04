export function buildX402Response() {
  const receiver = process.env.B402_RECEIVER || '0x0000000000000000000000000000000000000000';
  return {
    x402Version: 1,
    payer: "base",
    accepts: [
      {
        scheme: "exact",
        network: "base",
        maxAmountRequired: "3000000", // 3 USDC
        resource: "https://x402bpunk-base.vercel.app/api/x402punks",
        description: "Mint 1 x402 Punk",
        mimeType: "application/json",
        payTo: receiver,
        maxTimeoutSeconds: 300,
        asset: "USDC"
      },
      {
        scheme: "exact",
        network: "base",
        maxAmountRequired: "3000000",
        resource: "https://x402bpunk-base.vercel.app/api/x402punkAura",
        description: "Mint 1 x402 Punk Aura",
        mimeType: "application/json",
        payTo: receiver,
        maxTimeoutSeconds: 300,
        asset: "USDC"
      },
      {
        scheme: "exact",
        network: "base",
        maxAmountRequired: "10000", // <0.01 USD
        resource: "https://x402bpunk-base.vercel.app/api/totalMinted",
        description: "x402punks Total Mint Count",
        mimeType: "application/json",
        payTo: receiver,
        maxTimeoutSeconds: 300,
        asset: "USDC"
      }
    ]
  };
}
