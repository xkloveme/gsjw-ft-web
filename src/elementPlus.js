/*
 * @Author: xkloveme
 * @Date: 2021-10-20 14:24:55
 * @LastEditTime: 2022-01-07 16:01:42
 * @LastEditors: xkloveme
 * @Description: element-plus
 * @FilePath: /RuoYi-Vue3/src/elementPlus.js
 * @Copyright © xkloveme
 */
import Cookies from 'js-cookie'
import locale from 'element-plus/lib/locale/lang/zh-cn' // 中文语言
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { download } from '@/utils/request'
import { useDict } from '@/utils/dict'
import { parseTime, resetForm, addDateRange, handleTree, selectDictLabel } from '@/utils/ruoyi'

// svg图标
import 'virtual:svg-icons-register'
import SvgIcon from '@/components/SvgIcon'
import elementIcons from '@/components/SvgIcon/svgicon'

// 注册指令
import plugins from './plugins' // plugins
import directive from './directive' // directive

// 分页组件
import Pagination from '@/components/Pagination'
// 自定义表格工具组件
import RightToolbar from '@/components/RightToolbar'
// 文件上传组件
import FileUpload from "@/components/FileUpload"
// 图片上传组件
import ImageUpload from "@/components/ImageUpload"
// 图片预览组件
import ImagePreview from "@/components/ImagePreview"
// 自定义树选择组件
import TreeSelect from '@/components/TreeSelect'
// 字典标签组件
import DictTag from '@/components/DictTag'
// global css
import '@/assets/styles/index.scss' // global css
const install = (app) => {
  // 全局方法挂载
  app.config.globalProperties.useDict = useDict
  app.config.globalProperties.download = download
  app.config.globalProperties.parseTime = parseTime
  app.config.globalProperties.resetForm = resetForm
  app.config.globalProperties.handleTree = handleTree
  app.config.globalProperties.addDateRange = addDateRange
  app.config.globalProperties.selectDictLabel = selectDictLabel
  // ICON
  app.use(elementIcons)
  app.use(plugins)
  app.component('svg-icon', SvgIcon)
  // 指令
  directive(app)
  // 全局组件挂载
  app.component('DictTag', DictTag)
  app.component('Pagination', Pagination)
  app.component('TreeSelect', TreeSelect)
  app.component('FileUpload', FileUpload)
  app.component('ImageUpload', ImageUpload)
  app.component('ImagePreview', ImagePreview)
  app.component('RightToolbar', RightToolbar)
  app.use(ElementPlus, {
    locale: locale,
    size: Cookies.get('size') || 'mini'
  })
}
export default install