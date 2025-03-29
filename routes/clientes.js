const express = require('express');
const router = express.Router();
const ClienteService = require('../services/ClienteService');
const validarCliente = require('../middlewares/validarCliente');

// GET /clientes
router.get('/', async (req, res) => {
  try {
    const clientes = await ClienteService.getAllClientes();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST /clientes
router.post('/', validarCliente, async (req, res) => {
  try {
    const novoCliente = await ClienteService.createCliente(req.body);
    res.status(201).json(novoCliente);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT /clientes/:id
router.put('/:id', validarCliente, async (req, res) => {
  try {
    const { id } = req.params;
    const clienteAtualizado = await ClienteService.updateCliente(id, req.body);
    res.json(clienteAtualizado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE /clientes/:id
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const sucesso = await ClienteService.deleteCliente(id);
    if (sucesso) {
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Cliente não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;