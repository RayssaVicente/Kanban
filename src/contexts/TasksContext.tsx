import React, {createContext, ReactNode, useEffect,useState} from "react";
import {Task} from "../entities/Task";
import { tasksService } from "../services/api";


export interface TaskContextData{
    tasks: Task[],
    createTask:(attributes: Omit<Task, "id">) => Promise<Task>
    updateTask:(id: number, attributes: Partial<Omit<Task, "id">>)=> Promise<void>
    deleteTask:(id: number) => Promise<void>
}

export const TasksContext = createContext({} as TaskContextData)

interface TasksContextProviderProps{
    children: ReactNode
}

export const TaskContextProvider: React.FC<TasksContextProviderProps> = ({children}) => {
    const [tasks, setTasks] = useState<Task[]>([])

    useEffect(() => {
        tasksService.fetchTasks().then((data) =>  setTasks(data))
    }, [])

    const createTask = async (attributes: Omit<Task, "id">) => {
        const newTask = await tasksService.createTask(attributes)
        setTasks((currentState) => {
            const updatedTasks = [...currentState, newTask]
            return updatedTasks
        })

        return newTask
        
    }

    // const createTask = async () => {
    //     const newTask: Task = {id: 100, title: "Teste", description: "teste", status: "todo", priority: "low"}
    //     return newTask
    // }

    const updateTask = async (id: number, attributes: Partial<Omit<Task, "id">>) => {

    }

    const deleteTask = async (id: number) => {

    }

    return (
        <TasksContext.Provider value={{tasks, createTask, updateTask, deleteTask}}>
            {children}
        </TasksContext.Provider>
       

    )
}