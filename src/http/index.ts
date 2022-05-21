import {
  HTTPModule,
  HTTPFactory,
  AxiosError,
  ErrorInteractModule,
  ErrorMessage,
  // HTTPRequestInterceptor,
  // AxiosRequestConfig,
} from '@wizardoc/fence'
import { WithOk } from './opratores/withOk'

@HTTPModule({
  server: {
    baseUrl: '101.37.83.146:8080',
    protocol: 'http',
  },
  operators: [WithOk],
})
export class AppHttpModule implements ErrorInteractModule {
  // 使用expect操作符就会进errorInteract，第一个参数就是expect（错误）
  errorInteract(errMsg: ErrorMessage, err: AxiosError): void {
    alert(errMsg)
    console.log(err)
  }
}

export const http = HTTPFactory.create(AppHttpModule)
