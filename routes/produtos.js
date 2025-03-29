const express = require('express');
const router = express.Router();
const ProdutoService = require('../services/ProdutoService');
const validarProduto = require('../middlewares/validarProduto');

// GET /produtos
router.get('/', async (req, res) => {
  try {
    const produtos = await ProdutoService.getAllProdutos();
    res.json(produtos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST /produtos
router.post('/', validarProduto, async (req, res) => {
  try {
    const novoProduto = await ProdutoService.createProduto(req.body);
    res.status(201).json(novoProduto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT /produtos/:id
router.put('/:id', validarProduto, async (req, res) => {
  try {
    const { id } = req.params;
    const produtoAtualizado = await ProdutoService.updateProduto(id, req.body);
    res.json(produtoAtualizado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE /produtos/:id
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const sucesso = await ProdutoService.deleteProduto(id);
    if (sucesso) {
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Produto não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;