require('dotenv').config({ path: '../../.env' })
const razorpay = require('razorpay');

class Razorpay {
  constructor(key, secret) {
    this.instance = new razorpay({
      key_id: key,
      key_secret: secret
    })
  }
  createorder(order) {
    this.instance.orders.create(order, (err, order) => {
      console.log(order)
    })
  }
  verfiysignature(orderid, paymentid, signature) {
    let hmac = crypto.createHmac('sha256', process.env.RAZORPAYSECRET)
    hmac.update(orderid + "|" + paymentid)
    const generated_signature = hmac.digest('hex')
    if (generated_signature === signature)
      return true
    else
      false
  }
}

let razor = new Razorpay(process.env.RAZORPAYKEY, process.env.RAZORPAYSECRET)
// let order = {
//   amount: 50000,
//   currency: "INR",
//   receipt: "order_rcptidddd_11"
// };
// razor.createorder(order)