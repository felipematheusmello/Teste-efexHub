import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { listTasks } from "../../redux/actions/task-action";
import BasicCard from "../../components/card/card";
import AddBoxIcon from '@mui/icons-material/AddBox';
import EditCard from "../../components/card/edit-card/edit-card";
import { ButtonEndContainer } from "./home-style";
import { Typography } from "@mui/material";

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

    const openCreateTaskDialog = () => {
        console.log('open')
        setOpenCreateTask(true)
    }

    const onEditTask = (task) => {
        console.log(task)
    }
    useEffect(() => {
        dispatch(listTasks())
    }, [])
    return (
        <>
        <ButtonEndContainer>
            <Typography  onClick={openCreateTaskDialog} variant="h6">Create Task</Typography><AddBoxIcon onClick={openCreateTaskDialog} fontSize="large"></AddBoxIcon>
        </ButtonEndContainer>
            {
                isEditing?
                <EditCard onCancel={onCancelEdit} onSubmitParent={onEditTask}></EditCard>
                :
                <div>
                    <BasicCard onEdit={onOpenEdit}></BasicCard>
                </div>
            }
        </>
    )
}


export default Home;