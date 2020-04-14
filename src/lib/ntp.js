import axios from 'axios'
import axiosJsonpAdapter from 'axios-jsonp'

const callbackParamName = 'jsont'
const ntpURI = `http://ntp-a1.nict.go.jp/cgi-bin/${callbackParamName}`

export default function fetchTime() {
  return new Promise(resolve => {
    window[callbackParamName] = res => {
      resolve(res)
    }

    const options = {
      adapter: axiosJsonpAdapter,
      callbackParamName
    }
    axios.get(ntpURI, options)
  })
}
