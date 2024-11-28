CREATE TABLE funcionario (
    id_usuario_PK SERIAL PRIMARY KEY, 
    nome VARCHAR(100) NOT NULL,        
    email VARCHAR(100) NOT NULL UNIQUE 
);

CREATE TABLE tarefas (
    id_tarefa_PK SERIAL PRIMARY KEY,  
    id_usuario_fk INT NOT NULL,         
    descricao TEXT NOT NULL,           
    nome_do_setor VARCHAR(100) NOT NULL,
    prioridade VARCHAR(10) NOT NULL,    
    data DATE NOT NULL,                
    status VARCHAR(20) NOT NULL,       
    FOREIGN KEY (id_usuario_fk) REFERENCES funcionario(id_usuario_PK) 
);

INSERT INTO funcionario (nome, email) VALUES 
('Carlos Pereira', 'carlos.pereira@empresa.com'),
('Ana Souza', 'ana.souza@empresa.com'),
('Ricardo Almeida', 'ricardo.almeida@empresa.com'),
('Fernanda Costa', 'fernanda.costa@empresa.com'),
('Lucas Ribeiro', 'lucas.ribeiro@empresa.com');


INSERT INTO tarefas (id_usuario_fk, descricao, nome_do_setor, prioridade, data, status) VALUES 
(1, 'Preparar apresentação para a reunião com o cliente', 'Vendas', 'alta', '2024-12-01', 'a fazer'),
(2, 'Implementar novas funcionalidades no sistema de cadastro', 'TI', 'media', '2024-12-01', 'fazendo'),
(3, 'Analisar relatórios financeiros do último trimestre', 'Financeiro', 'alta', '2024-12-02', 'concluído'),
(4, 'Revisar contrato de parceria com fornecedor', 'Jurídico', 'baixa', '2024-12-03', 'a fazer'),
(5, 'Atualizar a base de dados de clientes', 'Marketing', 'media', '2024-12-03', 'fazendo');