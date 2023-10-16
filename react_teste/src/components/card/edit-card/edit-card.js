import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Controller, useForm } from 'react-hook-form';
import { FormControlLabel, FormLabel, InputAdornment, Radio, RadioGroup, TextField } from '@mui/material';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import { ButtonContainer, HoverDiv } from './edit-card-style';
import { useDispatch } from 'react-redux';
import { listTasks, updateTask } from '../../../redux/actions/task-action';
import { ContainerCardAlignCenter } from '../card.style';


function EditCard({ task={}, onCancel = () => {} }) {
    const {register, handleSubmit, control} = useForm({
    defaultValues: {
        name: task.name,
        description: task.description,
        status: task.status,
    }
  })

  const dispatch = useDispatch()

  const onEditCard = (event) => {

    dispatch(updateTask(task.id, event))
    dispatch(listTasks())

    onCancel()
  }

  return (
    <ContainerCardAlignCenter>
        <Card sx={{ minWidth: 275 }}>
        <CardContent>
            <Typography sx={{ mb: 2.3 }} variant="h5" component="div">
                <TextField
                id="input-with-icon-textfield"
                label="Title"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                    </InputAdornment>
                ),
            }}
            variant="standard"
            {...register('name')}
            />
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                <TextField
                id="input-with-icon-textfield"
                label="Description"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                    </InputAdornment>
                ),
            }}
            variant="standard"
            {...register('description')}
            />
            </Typography>
            <Typography variant="body2">
            <FormLabel id="demo-row-radio-buttons-group-label">Task Status</FormLabel>
            <Controller
                name="status"
                control={control}
                defaultValue={task.status}
                render={({ field }) => (
                    <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    { ...field }
                    >
                        <FormControlLabel value={true} control={<Radio />} label="Finished" />
                        <FormControlLabel value={false} control={<Radio />} label="In Progress" />
                    </RadioGroup>
                )}
                >
            </Controller>
            </Typography>
            <ButtonContainer>
                <HoverDiv onClick={onCancel}>
                    <HighlightOffOutlinedIcon sx={{ mr: 1.5, color: 'red' }} fontSize='large'></HighlightOffOutlinedIcon>
                </HoverDiv>
                <HoverDiv onClick={handleSubmit(onEditCard)}>
                    <CheckCircleOutlineOutlinedIcon sx={{ mr: 0.5, color: 'green' }} fontSize='large'></CheckCircleOutlineOutlinedIcon>
                </HoverDiv>
            </ButtonContainer>
        </CardContent>
        </Card>
    </ContainerCardAlignCenter>
  );
}

export default EditCard