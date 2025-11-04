import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import x402Router from './routes/x402.js';
import mintRouter from './routes/mint.js';
import auraRouter from './routes/aura.js';
import totalRouter from './routes/totalMinted.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));

app.use('/api/x402', x402Router);
app.use('/api/mint', mintRouter);
app.use('/api/aura', auraRouter);
app.use('/api/totalMinted', totalRouter);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

const port = process.env.PORT || 4020;
app.listen(port, () => console.log(`[x402bpunk-payments] listening on :${port}`));
