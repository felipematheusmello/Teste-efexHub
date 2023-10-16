import React, { useState, useEffect } from 'react';
import { Box, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { ContainerRedirect, LineSeparator, LoginContainer, TextHaveNoAccount } from './login_styles';
import SimpleCustomButton from '../../../components/custom-button/custom-button';
import { useNavigate } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';
import {login} from '../../../redux/actions/auth-action'


function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit } = useForm({
        defaultValues: {
            username: '',
            password: '',
        },
        shouldUseNativeValidation: true
    })
    const [isValid, setIsValid] = useState(true);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {isAuthenticated, error} = useSelector(state => state.auth)
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };


    const onRedirect = () => {
        console.log('entered')
        return navigate('/register')
    }

    const onSubmit = (data) => {
        dispatch(login(data))
    }

    useEffect(() => {
        console.log(error)
        if (isAuthenticated) {
            navigate('/')
        }
    }, [isAuthenticated])


    useEffect(() => {
        const token = localStorage.getItem('access_token')
        if (token) {
            navigate('/')
        }
    })


    return (
    <>
            <LoginContainer>
                    <form noValidate>
                        <Box sx={{ display: 'flex', flexFlow: 'column wrap'}}>
                            <TextField
                                {...register('username', { required: "Username must be provided"})}
                                label="Username"
                                id="outlined-start-adornment"
                                sx={{ m: 1, width: '40ch', my: 2 }}
                                />
                            <FormControl sx={{ m: 1, width: '40ch', my: 2}} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    {...register('password', { required: "Password must be provided"})}
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
                            <SimpleCustomButton onClickButton={handleSubmit} callback={onSubmit} isVisible={isValid}>Login</SimpleCustomButton>
                        </Box>
                    </form>
            <LineSeparator />
            <ContainerRedirect>
                <TextHaveNoAccount> Still Don't have an account?</TextHaveNoAccount>
                <SimpleCustomButton onClickButton={onRedirect} isVisible={true}>Register Now!</SimpleCustomButton>
            </ContainerRedirect>
            </LoginContainer>
    </>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.auth.error,
  });

export default connect(mapStateToProps, { login })(Login);