# 📝 React Kanban

Um quadro de tarefas estilo Kanban, desenvolvido com **React + TypeScript**, usando **Radix UI** para o design e **json-server** como API REST fake para simular persistência de dados.

---

## 🚀 Funcionalidades

- Criar tarefas com título, descrição, prioridade e status
- Atualizar status da tarefa (To do → Doing → Done)
- Excluir tarefas
- Interface visual com Radix UI
- Backend simulado com json-server

---

## 🧰 Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Radix UI](https://www.radix-ui.com/themes)
- [json-server](https://github.com/typicode/json-server)

---

## 📂 Estrutura do Projeto
(```bash
kanban/
├── public/
├── src/
│ ├── components/
│ │ ├── CreateTaskForm.tsx
│ │ ├── TaskBoard.tsx
│ │ └── TaskCard.tsx
│ ├── contexts/
│ │ └── TasksContext.tsx
│ ├── entities/
│ │ └── Task.ts
│ ├── hooks/
│ │ └── useTasks.ts
│ ├── services/
│ │ └── api.ts
│ ├── App.tsx
│ ├── main.tsx
│ └── index.css
├── db.json
├── .env
├── package.json
└── README.md

)


## 🔧 Instalação e Execução

```bash
### 1. Clone o repositório

git clone https://github.com/seu-usuario/kanban-react.git
cd kanban-react

###2. Instale as dependências

npm install

###3. Crie o arquivo .env
Crie um arquivo .env na raiz com o seguinte conteúdo:

VITE_API_URL=http://localhost:3000

###4. Inicie o json-server (API fake)
npx json-server --watch db.json --port 3000

###5. Inicie o frontend (React + Vite)
npm run dev


