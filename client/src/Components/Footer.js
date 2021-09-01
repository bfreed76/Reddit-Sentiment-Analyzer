import React from 'react'
import {Button} from 'semantic-ui-react'

const Footer = ({handleLogout}) => {
    return (
        <div>
            <Button 
            onClick={handleLogout}
            >Logout</Button>
        </div>
    )
}

export default Footer
