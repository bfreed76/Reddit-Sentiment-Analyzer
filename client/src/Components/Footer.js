import React from 'react'
import {Button} from 'semantic-ui-react'

const Footer = ({handleLogout}) => {
    return (
        <div>
            {/* <Button className="FooterBtn"
            onClick={handleLogout}
            >Logout</Button> */}
            <small>Powered by IBM Watson and Pushshift API. Brinton Reed 2021.</small>
        </div>
    )
}

export default Footer
