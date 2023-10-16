import React, { useEffect, useState } from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormControlLabel,
    FormLabel,
    InputAdornment,
    Radio,
    RadioGroup,
    TextField,
    Typography,
} from "@mui/material"
import { Controller, useForm } from "react-hook-form";

function RegisterTaskDialog({openDialog, onHandleClose = () => {}, onSubmit = () => {} }) {
    const [open, setOpen] = useState(false)
    const {register, handleSubmit, control} = useForm({
        defaultValues: {
            name: '',
            description: '',
            status: false,
        }
      })

    useEffect(() => {
        setOpen(openDialog)
    }, [openDialog])

    return (
        <div>
        <Dialog open={open} onClose={onHandleClose}>
          <DialogTitle>Create Task</DialogTitle>
          <DialogContent>
            <DialogContentText sx={{ mb: 2 }}>
              To create a task, please insert the required fields below
            </DialogContentText>
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
                defaultValue={false}
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
          </DialogContent>
          <DialogActions>
            <Button onClick={onHandleClose}>Cancel</Button>
            <Button onClick={() =>{
                handleSubmit(onSubmit)();
                onHandleClose();
            }}
            >Create</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}


export default RegisterTaskDialog