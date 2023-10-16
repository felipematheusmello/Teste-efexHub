import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { listTasks, createTask, deleteTask } from "../../redux/actions/task-action";
import BasicCard from "../../components/card/card";
import AddBoxIcon from '@mui/icons-material/AddBox';
import { ButtonEndContainer } from "./home-style";
import { Typography } from "@mui/material";
import RegisterTaskDialog from "../../components/card/register-card/register-card";


const fakeData = [{ id: 2, name: "Meu teste", description: "test", status:"false"}, { id: 3, name: "Meu teste2", description: "test2", status:"false"}]
function Home() {
    const [openCreateTask, setOpenCreateTask] = useState(false)
    const dispatch = useDispatch()

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
    }, [])
    return (
        <>

        <RegisterTaskDialog  openDialog={openCreateTask} onHandleClose={onOpenCloseCreateTaskDialog} onSubmit={onCreateTask}></RegisterTaskDialog>
        <ButtonEndContainer>
            <Typography  onClick={onOpenCloseCreateTaskDialog} variant="h6">Create Task</Typography><AddBoxIcon onClick={onOpenCloseCreateTaskDialog} fontSize="large"></AddBoxIcon>
        </ButtonEndContainer>
        {
            fakeData.map(task => {
                return (
                    <div>
                        <BasicCard
                        key={task.id}
                        task={task}
                        taskEdit={onTaskEdit}
                        onDelete={ondDeleteTask}
                        ></BasicCard>
                    </div>
                )
            })
        }
        </>
    )
}


export default Home;