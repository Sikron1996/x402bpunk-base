export function buildX402Response() {
  const receiver = process.env.B402_RECEIVER || '0x0000000000000000000000000000000000000000';
  return {
    x402Version: 1,
    payer: "base",
    accepts: [
      {
        scheme: "exact",
        network: "base",
        maxAmountRequired: "2000000", // 2 USDC
        resource: "https://x402bpunk-base.vercel.app/api/x402/resource/default",
        description: "Access x402bpunk Base resource — pay 2 USDC via PayAI facilitator.",
        mimeType: "application/json",
        payTo: receiver,
        maxTimeoutSeconds: 300,
        asset: "USDC",
        outputSchema: {
          input: {
            type: "object",
            properties: {
              txHash: { type: "string", description: "Transaction hash from Base network" },
              resource: { type: "string", description: "Requested resource identifier" }
            },
            required: ["txHash"]
          },
          output: {
            type: "object",
            properties: {
              ok: { type: "boolean" },
              message: { type: "string" },
              accessGranted: { type: "boolean" }
            }
          }
        }
      }
    ]
  };
}
