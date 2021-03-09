import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { Button } from '@material-ui/core';

const LogOutButton = () => {
const { logout} = useAuth0() 


return(
    <div>


<Button onClick={() => logout({ returnTo: window.location.origin })}  variant="contained" color="secondary">
LogOut

</Button>
    </div>
)
}
export default LogOutButton