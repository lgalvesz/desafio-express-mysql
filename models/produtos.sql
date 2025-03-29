CREATE TABLE IF NOT EXISTS produtos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  descricao TEXT NOT NULL,
  preco DECIMAL(10,2) NOT NULL,
  data_atualizado DATETIME NOT NULL
);

-- Dados iniciais para teste
INSERT INTO produtos (nome, descricao, preco, data_atualizado) VALUES
  ('Notebook', 'Dell Inspiron 15', 4500.99, NOW()),
  ('Mouse', 'Sem fio Logitech', 120.50, NOW());