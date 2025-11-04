export function buildX402Response() {
  const receiver = process.env.B402_RECEIVER || '0x0000000000000000000000000000000000000000';
  return {
    x402Version: 1,
    payer: 'base',
    accepts: [
  {
    scheme: 'exact',
    network: 'Base Mainnet',
    maxAmountRequired: '2000000',
    resource: 'default',
    description: 'x402bpunk on Base: pay 2 USDC and get access. Integrated with PayAI facilitator.',
    mimeType: 'application/json',
    payTo: receiver,
    maxTimeoutSeconds: 300,
    asset: 'USDC'
  }
]
  };
}
