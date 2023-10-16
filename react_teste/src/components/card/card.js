import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ContainerCardAlignCenter, EditIconAlignEnd, HoverDiv, Title } from './card.style';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import ConfirmTaskDialog from '../confirm/confirm-dialog';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../../redux/actions/task-action';


function BasicCard({id=0, title='test', description='test', status=true, onEdit= () => {}}) {
    const dispatch = useDispatch()

    const onDelete = () => {
        console.log('onDelete')
        dispatch(deleteTask(id))
    }
    return (
    <ContainerCardAlignCenter key={id}>
        <Card sx={{ minWidth: 275, mb: 2.3 }}>
        <CardContent>
            <Typography variant="h5" component="div">
                <EditIconAlignEnd>
                    <Title>
                        {title}
                    </Title>
                    <HoverDiv onClick={onEdit}>
                        <CreateOutlinedIcon sx={{mr: 1}} ontSize="medium"></CreateOutlinedIcon>
                    </HoverDiv>
                    <HoverDiv>
                        <ConfirmTaskDialog onConfirmDialog={onDelete}>Delete Task</ConfirmTaskDialog>
                    </HoverDiv>
                </EditIconAlignEnd>
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {description}
            </Typography>
            <Typography variant="body2">
            { status ? '🟢 Completed Task': '🟡 In Progress'}
            </Typography>
        </CardContent>
        </Card>
    </ContainerCardAlignCenter>
  );
}

export default BasicCard