import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const SignUp = () => {
    return (
        <div>
            <h1>Sign Up</h1>
            <Box component="form" noValidate autoComplete="off">
                <FormControl sx={{ width: '25ch' }}>
                    <TextField label="Filled Name" variant="filled" />
                </FormControl>
                <FormControl sx={{ width: '25ch' }}>
                    <TextField label="Filled Email" variant="filled" />
                </FormControl>
                <FormControl sx={{ width: '25ch' }}>
                    <TextField label="Filled Password" variant="filled" />
                </FormControl>
                <FormControl sx={{ width: '25ch' }}>
                    <TextField label="Confirm Password" variant="filled" />
                </FormControl>
                <Stack spacing={2} direction="row">
                    <Button variant="contained">Sign Up</Button>
                    <Button variant="outlined">Reset</Button>
                </Stack>
            </Box>
        </div>
    );
}
export {
    SignUp
};