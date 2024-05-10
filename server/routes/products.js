import express from 'express';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config();

const router = express.Router();

const supabase = createClient(process.env.SUPABASE_URL,process.env.SUPABASE_KEY);
// Get all products
router.get('/', async (req, res) => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('id', { ascending: true });

  if (error) return res.status(400).send(error);
  res.json(data);
});

// Get a single product by ID
router.get('/:id', async (req, res) => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', req.params.id)
    .single();

  if (error) return res.status(404).send(error);
  res.json(data);
});

// Add new product
router.post('/', async (req, res) => {
  const { data, error } = await supabase
    .from('products')
    .insert([req.body]);

  if (error) return res.status(400).send(error);
  res.status(201).json(data);
});

// Update product
router.put('/:id', async (req, res) => {
  const { data, error } = await supabase
    .from('products')
    .update(req.body)
    .match({ id: req.params.id });

  if (error) return res.status(400).send(error);
  res.json(data);
});

// Delete product
router.delete('/:id', async (req, res) => {
  const { data, error } = await supabase
    .from('products')
    .delete()
    .match({ id: req.params.id });

  if (error) return res.status(400).send(error);
  res.json(data);
});

export default router;