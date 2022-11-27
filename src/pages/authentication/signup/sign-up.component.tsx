import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { MouseEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { startSignup } from "../../../store/actions/user.action"

const defaultForm = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const SignUp = () => {
    const [formFields, setFormFields] = useState(defaultForm);
    const dispatch = useDispatch();
    const handleChange = (field: String, value: String) => {
        setFormFields({ ...formFields, ...{ [`${field}`]: value }});
    }
    const handleSubmit = (event: MouseEvent<HTMLElement>) => {
        event.preventDefault();
        dispatch(startSignup(formFields));
    }
    const handleReset = () => {
        setFormFields(defaultForm);
    }
    return (
        <div>
            <h1>Sign Up</h1>
            <Box component="form" noValidate autoComplete="off">
                <FormControl sx={{ width: '25ch' }}>
                    <TextField label="Filled Name" variant="filled" onChange={ event => handleChange("name", event.target.value) } />
                </FormControl>
                <FormControl sx={{ width: '25ch' }}>
                    <TextField label="Filled Email" variant="filled" onChange={ event => handleChange("email", event.target.value) }/>
                </FormControl>
                <FormControl sx={{ width: '25ch' }}>
                    <TextField label="Filled Password" variant="filled" onChange={ event => handleChange("password", event.target.value) }/>
                </FormControl>
                <FormControl sx={{ width: '25ch' }}>
                    <TextField label="Confirm Password" variant="filled" onChange={ event => handleChange("confirm password", event.target.value) }/>
                </FormControl>
                <Stack spacing={2} direction="row">
                    <Button aria-label="signup" variant="contained" onClick={handleSubmit}>Sign Up</Button>
                    <Button aria-label="reset" variant="outlined" onClick={handleReset}>Reset</Button>
                </Stack>
            </Box>
        </div>
    );
}
export {
    SignUp
};