import React, { useEffect } from 'react'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../../hook/reduxHook'
import { isLogin, login } from '../../store/userInfo/index'
// import { http } from '../../http'

export default function Login() {
  const dispath = useAppDispatch()
  const flag = useAppSelector(isLogin)
  // const navigate = useNavigate()
  // const [state, setstate] = useState()
  // const getData = async () => {
  //   const res = await http
  //     .get('/list')
  //     .match(
  //       ({ list }) => list
  //       // err => res.err && "服务器错误";
  //     )
  //     .withOk()
  //     // .pipe((data: any) => data)
  //     .expect(() => 'Network Error')
  //   console.log(res, 'this is res==>>')
  // }
  useEffect(() => {
    // getData()
    // const res = await http
    //   .get('http://101.37.83.146:8080/list')
    //   .expect(() => 'Network Error')
    // axios
    //   .get('http://101.37.83.146:8080/list')
    //   .then((res: any) => {
    //     const {} = res.data
    //      res.code == 1003
    //   })
    //   .catch((err: any) => {
    //
    //     console.log(err)
    //        if(err.code){
    //            console.log(后端错误)
    //          }else{
    // 网络错误
    // }
    //   })
    // if (flag === 'login') {
    //   // navigate('/authorArtical')
    //   console.log('fwewe')
    //   // navigate(-1)
    // }
  }, [])
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
