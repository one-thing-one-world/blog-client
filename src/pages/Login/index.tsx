import { useSnackbar } from 'notistack'
import React, { useEffect } from 'react'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { useAppSelector, useAppDispatch } from '../../hook/reduxHook'
import { authLogin } from '../../https/user'
import { isLogin, setterUserInfoStoreState } from '../../store/userInfo/index'
// import { http } from '../../http'
type Inputs = {
  username: string
  password: string
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(243, 247, 253);
`

const ContentWrapper = styled.div`
  min-width: 200px;
  min-height: 100px;
  /* border: 1px solid red; */
  padding: 40px;
  background: #e8f5e9;
  border-radius: 4px;
  & > form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    & > div {
      margin-bottom: 14px;
    }
    span {
      margin-right: 10px;
      font-weight: 300;
    }
  }
`
export default function Login() {
  const dispatch = useAppDispatch()
  const flag = useAppSelector(isLogin)
  const navigate = useNavigate()
  console.log(flag, dispatch, setterUserInfoStoreState)
  const { enqueueSnackbar } = useSnackbar()
  useEffect(
    () => () => {
      setTimeout(() => {
        dispatch(
          setterUserInfoStoreState({
            type: 'isLogin',
            value: 0,
          })
        )
        navigate('/')
        // }, 1000 * 60 * 60 * 24)
      }, 1000 * 10)
    },
    []
  )
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = data => {
    authLogin({ username: data.username, password: data.password })
      .then(res => {
        if (res.code === 200) {
          console.log(res)
          localStorage.setItem('accessToken', res.data.accessToken)
          dispatch(
            setterUserInfoStoreState({
              type: 'isLogin',
              value: 1,
            })
          )
          navigate('/authorArtical')
        }
      })
      .catch(err => {
        console.log(err)
        enqueueSnackbar('用户名或者密码错误', {
          variant: 'error',
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'center',
          },
          autoHideDuration: 2000,
        })
      })
  }

  // console.log(watch('username'), 'watcher')
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
    <Wrapper
      aria-hidden="true"
      // onClick={() => {
      //   dispath(login())
      // }}
    >
      Login-
      {flag}
      <ContentWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}

          <div>
            <span>username:</span>
            <input
              defaultValue=""
              {...register('username', { required: true })}
            />
          </div>

          {/* include validation with required or other standard HTML validation rules */}

          <div>
            <span>password:</span>
            <input
              type="password"
              {...register('password', { required: true })}
            />
          </div>

          {errors.password && <span>This field is required</span>}

          <input type="submit" />
        </form>
      </ContentWrapper>
    </Wrapper>
  )
}
