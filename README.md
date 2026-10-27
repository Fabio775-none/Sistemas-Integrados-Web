# Sistemas Integrados WEB

**Aplicação web com cinco sistemas de gerenciamento integrados, desenvolvida em HTML5, CSS3 e JavaScript.**

## Sobre o projeto

Sistemas Integrados WEB é uma aplicação desenvolvida para reunir diferentes ferramentas de gerenciamento em uma única interface, permitindo administrar contatos, livros, movimentações financeiras, filmes e alunos.

O projeto utiliza tecnologias fundamentais do desenvolvimento web e uma arquitetura baseada em componentes visuais reutilizáveis, com navegação dinâmica entre diferentes módulos.

A aplicação funciona diretamente no navegador, sem necessidade de instalação de programas adicionais, servidores ou bancos de dados externos.

As informações cadastradas são armazenadas utilizando a API LocalStorage do JavaScript, permitindo recuperar os registros ao fechar e reabrir a página no mesmo navegador.

## Funcionalidades

### 1. Agenda de Contatos

Sistema de gerenciamento de contatos pessoais e profissionais.

**Funcionalidades implementadas:**
- Cadastro de contatos com nome, telefone e e-mail.
- Exibição dos contatos em uma tabela.
- Edição de informações cadastradas.
- Exclusão de contatos.
- Pesquisa dinâmica pelo nome.
- Armazenamento local dos registros.

### 2. Biblioteca

Módulo para organização e gerenciamento de livros.

**Funcionalidades implementadas:**
- Cadastro de livros.
- Registro do título e do autor.
- Campo adicional para informações de empréstimo.
- Listagem de livros cadastrados.
- Pesquisa pelo título.
- Edição e exclusão de registros.
- Armazenamento das informações no navegador.

**Funcionalidade planejada:** controle de empréstimos por checkbox.

### 3. Controle Financeiro

Ferramenta básica para registrar e organizar informações financeiras.

**Funcionalidades implementadas:**
- Cadastro de movimentações financeiras.
- Registro de descrição e valor.
- Campo para identificação do tipo de movimentação.
- Visualização dos registros em tabela.
- Pesquisa, edição e exclusão de movimentações.
- Persistência dos registros utilizando LocalStorage.

**Funcionalidades planejadas:** diferenciação estruturada entre receitas e despesas, cálculo automático de saldo e apresentação de um resumo financeiro.

### 4. Catálogo de Filmes

Módulo para organização de uma coleção pessoal de filmes.

**Funcionalidades implementadas:**
- Cadastro do nome do filme.
- Registro de informações adicionais, como ano e autor.
- Listagem de filmes cadastrados.
- Pesquisa dinâmica pelo nome.
- Edição de registros.
- Exclusão de filmes.
- Armazenamento local da coleção.

**Funcionalidade planejada:** identificação de filmes já assistidos por meio de checkbox.

### 5. Cadastro de Alunos

Sistema básico para gerenciamento de informações de alunos.

**Funcionalidades implementadas:**
- Cadastro do nome do aluno.
- Registro de telefone e e-mail.
- Exibição dos alunos em tabela.
- Pesquisa pelo nome.
- Edição e exclusão de cadastros.
- Armazenamento local das informações.

**Funcionalidade planejada:** registro de notas e acompanhamento acadêmico.

## Recursos gerais

### Interface dinâmica

A aplicação utiliza uma única estrutura de formulário e tabela, adaptada automaticamente ao módulo selecionado.

O JavaScript modifica os títulos, campos, cabeçalhos e imagens de fundo conforme o sistema utilizado.

Essa abordagem permite reaproveitar componentes e reduzir a duplicação de código HTML.

### Operações CRUD

O projeto implementa operações de gerenciamento de registros:

- **Create:** cadastrar novos registros.
- **Read:** visualizar informações armazenadas.
- **Update:** editar informações existentes.
- **Delete:** excluir registros.

As operações são realizadas diretamente na interface e refletidas no armazenamento local.

### Armazenamento de dados

O programa utiliza a API `localStorage` do navegador e o formato JSON para persistência.

Cada módulo possui sua própria chave de armazenamento, mantendo os registros separados.

O sistema não depende de MySQL, PostgreSQL ou outros bancos de dados externos.

### Pesquisa dinâmica

Os registros podem ser filtrados pelo primeiro campo da tabela, geralmente correspondente ao nome, título ou descrição.

A pesquisa ocorre enquanto o usuário digita, sem necessidade de recarregar a página.

### Personalização visual

- Interface com menu principal centralizado.
- Botões de navegação entre os cinco sistemas.
- Imagens de fundo específicas para cada módulo.
- Tabelas com rolagem vertical.
- Botões de edição e exclusão.
- Estilização com CSS3.
- Efeitos visuais ao posicionar o mouse sobre elementos interativos.

## Tecnologias utilizadas

| Tecnologia | Utilização |
|---|---|
| HTML5 | Estrutura e formulários |
| CSS3 | Layout e identidade visual |
| JavaScript | Navegação, validações básicas e manipulação dos registros |
| DOM API | Atualização dinâmica da interface |
| LocalStorage | Persistência local dos dados |
| JSON | Serialização e recuperação dos registros |

## Estrutura do projeto

```text
Sistemas Integrados WEB/
│
├── index.html
├── style.css
├── script.js
│
├── background1.png
├── agenda.png
├── biblioteca.png
├── controle.png
├── filmes.png
├── alunos.png
│
└── Descrição do projeto/
    └── sistemas integrados.txt
```

## Como executar

1. Faça o download dos arquivos do projeto.
2. Extraia o conteúdo em uma pasta.
3. Abra o arquivo `index.html` em um navegador.
4. Selecione um dos cinco sistemas no menu principal.
5. Cadastre, consulte, edite ou exclua registros.
6. Utilize o botão de retorno para acessar outro módulo.

Não é necessário instalar dependências ou configurar um servidor.

## Limitações da versão atual

- Os dados ficam armazenados apenas no navegador utilizado.
- Não existe sincronização entre computadores.
- Não há banco de dados externo.
- Não existe autenticação de usuários.
- Os formulários ainda não possuem validação completa.
- O layout utiliza dimensões fixas e precisa de melhorias para dispositivos móveis.
- Algumas funcionalidades descritas na especificação original ainda estão em desenvolvimento.

## Objetivo do projeto

Demonstrar a integração de diferentes sistemas de gerenciamento em uma aplicação web, aplicando conceitos de manipulação do DOM, operações CRUD, persistência local de dados, programação JavaScript e reutilização de interfaces.

## Créditos

**Desenvolvimento:** Fabio FJA

**Identificação no código:** Fabio_software2026

**Tecnologias:** HTML5, CSS3 e JavaScript

**Plataforma:** Web

Projeto desenvolvido para estudo, prática e aperfeiçoamento de conhecimentos em desenvolvimento de sistemas web.
