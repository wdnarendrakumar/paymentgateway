let fetch = require('node-fetch')
const Beneficiary = require('./beneficiary')
require('dotenv').config({ path: '../../../.env' })
 
class Cashfreepayout {
  constructor() {
    this.url = 'https://payout-gamma.cashfree.com/payout/v1/'
  }
  async authorize() {
    const response = await fetch(`${this.url}authorize`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'X-Client-Id': process.env.PAYOUTCASHFREE,
        'X-Client-Secret': process.env.PAYOUTCASHSECRET
      }
    })
    const data = await response.json()
    console.log(data.data.token)
    return data.data.token
  }
  async balancetransfer(token, data) {
    const response = await fetch(`${this.url}requestTransfer`, {
      method: 'post',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    console.log(await response.json())
  }
  
  
}
let a = new Cashfreepayout()




