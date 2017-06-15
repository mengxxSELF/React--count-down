import React from 'react'
import { render } from 'react-dom'
import Countdown from './components/Countdown'
const moment = require('moment')

let countT = moment().add('1', 'days').format('YYYY/MM/DD HH:mm:ss')

render(<Countdown stop={new Date(countT)} />, document.getElementById('application-wrapper'))
