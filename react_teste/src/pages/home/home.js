import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { listTasks, createTask, deleteTask } from "../../redux/actions/task-action";
import BasicCard from "../../components/card/card";
import AddBoxIcon from '@mui/icons-material/AddBox';
import { ButtonEndContainer } from "./home-style";
import { Typography } from "@mui/material";
import RegisterTaskDialog from "../../components/card/register-card/register-card";


function Home() {
    const [openCreateTask, setOpenCreateTask] = useState(false)
    const dispatch = useDispatch()
    const { tasks } = useSelector(state => state.task )

    const ondDeleteTask = (id) => {
        console.log('teste')
        deleteTask(id)
    }

    const onOpenCloseCreateTaskDialog = () => {
        console.log('open')
        setOpenCreateTask(!openCreateTask)
    }

    const onCreateTask = (event) => {
        console.log(event)
        dispatch(createTask(event))
    }

    const onTaskEdit = (task) => {
        console.log(task)
        task.edit = !task.edit
    }

    useEffect(() => {
        dispatch(listTasks())
        console.log(tasks)
    }, [dispatch])
    return (
        <>

        <RegisterTaskDialog  openDialog={openCreateTask} onHandleClose={onOpenCloseCreateTaskDialog} onSubmit={onCreateTask}></RegisterTaskDialog>
        <ButtonEndContainer>
            <Typography  onClick={onOpenCloseCreateTaskDialog} variant="h6">Create Task</Typography><AddBoxIcon onClick={onOpenCloseCreateTaskDialog} fontSize="large"></AddBoxIcon>
        </ButtonEndContainer>
        {
            tasks?.map((task) => {
                return (
                    <div>
                        <BasicCard
                        task={task}
                        key={task.id}
                        taskEdit={onTaskEdit}
                        onDelete={ondDeleteTask}
                        ></BasicCard>
                    </div>)
                    })
        }
        </>
    )
}


export default Home;