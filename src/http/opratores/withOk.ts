import {
  OperatorRunEnv,
  PipeOperator,
  PipeOperatorContext,
  PipeOperatorExec,
} from '@wizardoc/fence'

export type WithOkRes<T> = {
  ok: boolean
} & T

@PipeOperator({
  name: 'withOk',
  env: OperatorRunEnv.ERROR_OCCUR,
})
export class WithOk implements PipeOperatorExec {
  exec({
    value,
    err,
  }: PipeOperatorContext<Record<string, unknown>>): WithOkRes<
    Record<string, unknown>
  > {
    // err => 网络错误 or 服务器错误

    return {
      ...(value ?? {}),
      ok: !err,
    }
  }
}
