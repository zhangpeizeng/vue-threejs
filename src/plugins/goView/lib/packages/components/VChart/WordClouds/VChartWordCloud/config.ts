import { PublicConfigClass } from 'PLS/goView/lib/packages/public'
import { VChartWordCloudConfig } from './index'
import { CreateComponentType } from 'PLS/goView/lib/packages/index.d'
import { vChartOptionPrefixHandle } from 'PLS/goView/lib/packages/public/vChart'
import data from './data.json'
import cloneDeep from 'lodash/cloneDeep'
import { IWordCloudOption } from '../../index.d'

export const includes = ['legends', 'tooltip']
export const option: IWordCloudOption & { dataset?: any } = {
  // 图表配置
  type: 'wordCloud',
  dataset: data,
  nameField: 'name',
  valueField: 'value',
  seriesField: 'name',
  // 业务配置（后续会被转换为图表spec)
  category: VChartWordCloudConfig.category,
}

export default class Config extends PublicConfigClass implements CreateComponentType {
  public key = VChartWordCloudConfig.key
  public chartConfig = cloneDeep(VChartWordCloudConfig)
  // 图表配置项
  public option = vChartOptionPrefixHandle(option, includes)
}
