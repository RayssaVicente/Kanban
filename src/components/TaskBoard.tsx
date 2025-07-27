import { Grid, Flex, Badge} from "@radix-ui/themes"
import { Task } from "../entities/Task"
import {TaskCard} from "./TaskCard"
import { useContext } from "react"
import { TasksContext } from "../contexts/TasksContext"
//import {useTasks} from "../hooks/useTasks"

export const TaskBoard: React.FC = () => {

    const {tasks} = useContext(TasksContext)

    // const {tasks} = useTasks()

    const tasksTodo: Task[] = tasks.filter(task => task.status === "todo") ?? []

    const tasksInProgress: Task[] = tasks.filter(task => task.status === "doing") ?? []

    const tasksDone: Task[] = tasks.filter(task => task.status === "done") ?? []

    return(
        <Grid columns="3" gap="4" minWidth="64rem">
            <Flex direction="column" gap="4">
                <Badge size="3" color="gray">
                    Para Fazer({tasksTodo.length})
                </Badge>
                {tasksTodo.map((task) => <TaskCard key={task.id} task={task}/>)}
            </Flex>

            <Flex direction="column" gap="4">
                <Badge size="3" color="yellow">
                    Em Progresso ({tasksInProgress.length})
                </Badge>
                {tasksInProgress.map((task) => <TaskCard key={task.id} task={task}/>)}
            </Flex>

            <Flex direction="column" gap="4">
                <Badge size="3" color="green">
                    Concluido ({tasksDone.length})
                </Badge>
                {tasksDone.map((task) => <TaskCard key={task.id} task={task}/>)}
            </Flex>
        </Grid>
    )
}