CREATE TABLE IF NOT EXISTS clientes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  sobrenome VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  idade INT NOT NULL
);

-- Dados iniciais para teste
INSERT INTO clientes (nome, sobrenome, email, idade) VALUES
  ('João', 'Silva', 'joao@email.com', 30),
  ('Maria', 'Santos', 'maria@email.com', 25);