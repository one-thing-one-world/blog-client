import React, { useEffect } from 'react'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../../hook/reduxHook'
import { isLogin, login } from '../../store/userInfo/index'

export default function Login() {
  const dispath = useAppDispatch()
  const flag = useAppSelector(isLogin)
  // const navigate = useNavigate()
  useEffect(() => {
    // axios
    //   .get('http://101.37.83.146:8080/list')
    //   .then((res) => {
    //     console.log(res)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
    // if (flag === 'login') {
    //   // navigate('/authorArtical')
    //   console.log('fwewe')
    //   // navigate(-1)
    // }
  }, [flag])
  useEffect(() => {
    // axios('http://101.37.83.146:8080/test').then((res) => {
    //   console.log(res, '/test')
    // })
    // axios('http://101.37.83.146:8080/')
    //   .then((res) => {
    //     console.log(res, 'this is login')
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
    // console.log(window.location, 'home')
  }, [])
  return (
    <div
      aria-hidden="true"
      onClick={() => {
        dispath(login())
      }}
    >
      Login-
      {flag}
    </div>
  )
}
