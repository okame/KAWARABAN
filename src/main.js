import moment from 'moment'
import fetchTime from './lib/ntp'

fetchTime().then(res => {
  const now = moment(res.st * 1000)
  console.log(now.format('YYYY-MM-DD HH:mm'))
})
