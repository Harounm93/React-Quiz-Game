import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

const LogOutButton = () => {
const { logout} = useAuth0() 


return(
    <div>


<button onClick={() => logout({ returnTo: window.location.origin })}>
LogOut

</button>
    </div>
)
}
export default LogOutButton