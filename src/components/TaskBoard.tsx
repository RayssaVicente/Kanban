import { Grid, Flex, Badge} from "@radix-ui/themes"
import { Task } from "../entities/Task"
import {TaskCard} from "./TaskCard"

export const TaskBoard: React.FC = () => {
    const tasksTodo: Task[] = [
        {
            "id": 2,
            "title" : "Reunião com as equipes",
            "description": "Reunião para descutir o progresso do projeto e próximos passos.",
            "status": "todo",
            "priority": "high"
        },
        {
            "id": 4,
            "title": "Implementar testes",
            "description": "Desenvolver os testes automatizados na nova funcionalidade do aplicativo.",
            "status": "todo",
            "priority": "medium"
        }
    ]
    const tasksInProgress: Task[] = [
        {
            "id": 1,
            "title": "Enviar relatorio",
            "description": "Enviar o relatorio mensal para o departamento financeiro",
            "status": "doing",
            "priority": "high"
        }
    ]

    const tasksDone: Task[] = [
        {
            "id": 3,
            "title": "Atualizar o site",
            "description": "Fazer atualizações no site da empresa com novas informações.",
            "status": "done",
            "priority": "low"
        }
    ]

    return(
        <Grid columns="3" gap="4" minWidth="64rem">
            <Flex direction="column" gap="4">
                <Badge size="3" color="indigo">
                    Para Fazer(2)
                </Badge>
                {tasksTodo.map((task) => <TaskCard key={task.id} task={task}/>)}
            </Flex>

            <Flex direction="column" gap="4">
                <Badge size="3" color="green">
                    Em Progresso (2)
                </Badge>
                {tasksInProgress.map((task) => <TaskCard key={task.id} task={task}/>)}
            </Flex>

            <Flex direction="column" gap="4">
                <Badge size="3" color="bronze">
                    Concluido (2)
                </Badge>
                {tasksDone.map((task) => <TaskCard key={task.id} task={task}/>)}
            </Flex>
        </Grid>
    )
}