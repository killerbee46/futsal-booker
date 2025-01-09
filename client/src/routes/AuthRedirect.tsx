import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { getToken } from '../api/AuthApi'

const AuthRedirect = () => {
    const token = getToken()
    const navigate = useNavigate()
    useEffect(()=> {
        if (token && token !== undefined && token !== "") {
            navigate('/')
        }
    },[])
  return (
    <div><Outlet /></div>
  )
}

export default AuthRedirect