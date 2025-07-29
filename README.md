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
