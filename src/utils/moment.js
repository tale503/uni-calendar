import moment from 'moment'
moment.locale('zh-cn')

// YYYY年M月D日 HH:mm
const dateFormat = date => {
  return moment(date * 1000).format('lll')
}

// 多少分钟前
const dateFormatNow = date => {
  return moment(date * 1000).startOf('minute').fromNow()
}

export {
  dateFormat,
  dateFormatNow
}

export default moment
