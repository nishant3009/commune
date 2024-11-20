import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import Button from '@mui/material/Button';

function LoginButton() {
    const { loginWithRedirect } = useAuth0();
    return (

        <div>
            <Button variant="contained" color="success" onClick={() =>
                loginWithRedirect()} className='p-8'>
                Login or Signup
            </Button>
        </div>
    )
}

export default LoginButton
