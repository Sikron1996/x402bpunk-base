export function buildX402Response() {
  const receiver = process.env.B402_RECEIVER || '0x0000000000000000000000000000000000000000';
  return {
    x402Version: 1,
    payer: "base",
    accepts: [
      {
        scheme: "exact",
        network: "base", // ✅ строго як у whitelist
        maxAmountRequired: "2000000", // 2 USDC (6 decimals)
        resource: "https://x402bpunk-base.vercel.app/api/x402/resource/default", // ✅ валідний URL
        description: "x402bpunk: pay 2 USDC on Base and get access via PayAI facilitator.",
        mimeType: "application/json",
        payTo: receiver,
        maxTimeoutSeconds: 300,
        asset: "USDC"
      }
    ]
  };
}
