import express from 'express';
import productRoutes from './routes/products.js';
import cors from 'cors';

const app = express();
app.use(cors());

// Middleware
app.use(express.json()); // for parsing application/json

// Routes
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
