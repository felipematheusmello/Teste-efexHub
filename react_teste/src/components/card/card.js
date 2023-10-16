import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ContainerCardAlignCenter, EditIconAlignEnd, HoverDiv, Title } from './card.style';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import ConfirmTaskDialog from '../confirm/confirm-dialog';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../../redux/actions/task-action';
import EditCard from './edit-card/edit-card';


function BasicCard({task={}}) {
    const [edit, setEdit] = useState()
    const dispatch = useDispatch()

    const onDelete = () => {
        dispatch(deleteTask(task.id))
    }

    const setEditTask = () => {
        setEdit(!edit)
    }

    return (
    <>
        {
        !edit?
        <ContainerCardAlignCenter key={task.id}>
            <Card sx={{ minWidth: 275, mb: 2.3 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    <EditIconAlignEnd>
                        <Title>
                            {task.name}
                        </Title>
                        <HoverDiv onClick={setEditTask}>
                            <CreateOutlinedIcon sx={{mr: 1}} fontSize="medium"></CreateOutlinedIcon>
                        </HoverDiv>
                        <HoverDiv>
                            <ConfirmTaskDialog onConfirmDialog={onDelete}>Delete Task</ConfirmTaskDialog>
                        </HoverDiv>
                    </EditIconAlignEnd>
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {task.description}
                </Typography>
                <Typography variant="body2">
                { task.status ? '🟢 Completed Task': '🟡 In Progress'}
                </Typography>
            </CardContent>
            </Card>
        </ContainerCardAlignCenter>
        :
        <EditCard
        key={task.id}
        task={task}
        onCancel={setEditTask}
        ></EditCard>
        }
    </>
  );
}

export default BasicCard