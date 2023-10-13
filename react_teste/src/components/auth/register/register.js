import React, { useState } from 'react';
import { Box, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { RegisterContainer } from './register_styles';
import SimpleCustomButton from '../../custom-button/custom-button';

function Register({children}) {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit } = useForm()
    const [isValid, setIsValid] = useState(true);


    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

    const onSubmit = (data) => {
        console.log('teste');
        console.log(data);
        setIsValid(!isValid)
        return 
    }
    return (
    <>
        <RegisterContainer>
            <Box sx={{ display: 'flex', flexFlow: 'column wrap' }}>
                <TextField
                    label="Username"
                    id="outlined-start-adornment"
                    sx={{ m: 1, width: '40ch', my: 2 }}
                    />
                <FormControl sx={{ m: 1, width: '40ch', my: 2}} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                        label="Password"
                        />
                </FormControl>
                    <SimpleCustomButton onClickButton={onSubmit} isVisible={isValid}>Login</SimpleCustomButton>
            </Box>
        </RegisterContainer>
    </>
    )
}

export default Register;