import { Button, Space, Typography } from 'antd'
import React, { useState } from 'react'

const LoginHandler = () => {
    const [loggedIn, setLoggedIn] = useState(false)

    const switchLogin = () => {
        setLoggedIn(!loggedIn)
    }
  return (
    <div>
        {
            loggedIn &&
            <Typography.Link onClick={switchLogin}>Logout</Typography.Link>
        }
        {
            !loggedIn &&
            <Space onClick={switchLogin}>
            <Button type='primary'>Login</Button>
            <Button type='default'>Register</Button>
        </Space>
        }
    </div>
  )
}

export default LoginHandler