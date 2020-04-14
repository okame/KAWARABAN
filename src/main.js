import moment from 'moment'
import $ from 'jquery'
import fetchTime from './lib/ntp'

const INTERVAL = 60 * 1000
const $date = $('.date')
const $time = $('.time')
const setTime = () => {
  fetchTime().then(res => {
    const now = moment(res.st * 1000)
    const date = now.format('YYYY/MM/DD')
    const time = now.format('HH:mm')

    $date.html(date)
    $time.html(time)
  })
}

setTime()

setInterval(() => {
  setTime()
}, INTERVAL)
