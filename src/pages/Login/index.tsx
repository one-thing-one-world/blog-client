import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../hook/reduxHook'
import { isLogin } from '../../store/userInfo/index'

export default function Login() {
  const flag = useAppSelector(isLogin)
  const navigate = useNavigate()
  useEffect(() => {
    console.log(flag, 'islogin')
  }, [])
  return (
    <div
      aria-hidden="true"
      onClick={() => {
        localStorage.setItem('isLogin', 'islogin')
        navigate('/home')
      }}
    >
      Login
    </div>
  )
}
