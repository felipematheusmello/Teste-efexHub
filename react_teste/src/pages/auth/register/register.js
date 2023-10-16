import React, { useState } from 'react';
import { Box, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { RegisterContainer } from './register_styles';
import SimpleCustomButton from '../../../components/custom-button/custom-button';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, getValues,  } = useForm({
        defaultValues: {
            username: '',
            password: '',
            repeatitionPassword: '',
        },
        shouldUseNativeValidation: true,
    })
    const [isValid, setIsValid] = useState(true);

    const navigate = useNavigate()
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



    useEffect(() => {
        const token = localStorage.getItem('access_token')
        if (token) {
            navigate('/home')
        }
    })
    return (
    <>
        <RegisterContainer>
            <form noValidate>

                <Box sx={{ display: 'flex', flexFlow: 'column wrap' }}>
                    <TextField
                        label="Username"
                        id="outlined-start-adornment"
                        sx={{ m: 1, width: '40ch', my: 2 }}
                        {...register('username', { required: "Username must be provided"})}
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
                            {...register('password', { required: "Password must be provided"})}
                            />
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '40ch', my: 2}} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Repeat Password</InputLabel>
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
                            {...register('repeatitionPassword', {validate: value => value === getValues('password') || ' Both passwords need to be equal'})}

                            />
                    </FormControl>
                        <SimpleCustomButton onClickButton={handleSubmit} callback={onSubmit} isVisible={isValid}>Register</SimpleCustomButton>
                </Box>
            </form>
        </RegisterContainer>
    </>
    )
}

export default Register;