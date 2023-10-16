import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { listTasks, createTask, deleteTask } from "../../redux/actions/task-action";
import BasicCard from "../../components/card/card";
import AddBoxIcon from '@mui/icons-material/AddBox';
import EditCard from "../../components/card/edit-card/edit-card";
import { ButtonEndContainer } from "./home-style";
import { Typography } from "@mui/material";
import RegisterTaskDialog from "../../components/card/register-card/register-card";


const fakeData = [{ id: 2, name: "Meu teste", description: "test", status:"false"}]
function Home() {
    const [isEditing, setIsEditing] = useState(false)
    const [openCreateTask, setOpenCreateTask] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {tasks} = useSelector(state => state.task)

    const onOpenEdit = () => {
        setIsEditing(true)
    }

    const onCancelEdit = () => {
        setIsEditing(false)
    }

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

    const onEditTask = (task) => {
        console.log(task)
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
                if (isEditing) {
                    return (
                        <EditCard onCancel={onCancelEdit} onSubmitParent={onEditTask}></EditCard>
                    )
                }

                return (
                    <div>
                        <BasicCard
                        key={task.id}
                        id={task.id}
                        description={task.description}
                        status={task.status}
                        title={task.name}
                        onEdit={onOpenEdit}
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