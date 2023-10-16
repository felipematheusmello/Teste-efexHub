import React, { useEffect, useState } from "react";
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormLabel,
    TextField,
    Typography,
} from "@mui/material"
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

function RegisterTaskDialog({openDialog, onHandleClose = () => {} }) {
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch()
    const {register, handleSubmit, control} = useForm({
        defaultValues: {
            name: '',
            description: '',
            status: false,
        }
      })
    const createTask = () => {
        
    }

    useEffect(() => {
        setOpen(openDialog)
    }, [])

    return (
        <div>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address here. We
              will send updates occasionally.
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
                defaultValue={status}
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
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={() => {
                onHandleClose()
                handleSubmit(onHandleClose)}
            }
            >Subscribe</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}


export default RegisterTaskDialog