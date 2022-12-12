const sdk = require('api')('@cashfreedocs-new/v3#4xc3n730larv4wbt');
require('dotenv').config({ path: '../../.env' })
class Cashfree {
    constructor() {

    }
    async checkpaymentstatus(orderid){
       let res= await this.getpaymentdetailsfororder(orderid)
       if(!res)
       throw Error('order id is not right')
       console.log(res)
       if(res[0].payment_status==='SUCCESS')
       return true
       else false
    }
    async getpaymentdetailsfororder(orderid) {
        let response
        await sdk.getPaymentsfororder({
            order_id: orderid,
            'x-client-id': process.env.CLIENTID,
            'x-client-secret': process.env.SECRET,
            'x-api-version': '2022-09-01'
        })
            .then(({ data }) => {
                response = data
            })
            .catch(err => {
                response = false
            });
            return response
    }
    createOrder(customerdetails, orderid, orderamount, ordernote) {
        sdk.createOrder({
            customer_details: customerdetails,
            order_meta: {
                notify_url: 'https://652c-106-215-94-104.in.ngrok.io/notify',
                return_url: 'https://652c-106-215-94-104.in.ngrok.io?order_id={order_id}'
            },
            order_id: orderid,
            order_amount: orderamount,
            order_currency: 'INR',
            order_expiry_time: new Date(new Date().getTime() + 1000 * 60 * 60 * 30).toISOString(),
            order_note: ordernote
        }, {
            'x-client-id': process.env.CLIENTID,
            'x-client-secret': process.env.SECRET,
            'x-api-version': '2022-09-01'
        })
            .then(({ data }) => console.log(data))
            .catch(err => console.error(err));
    }
    async getorderdetails(orderid) {
        let response
        await sdk.getOrder({
            order_id: orderid,
            'x-client-id': process.env.CLIENTID,
            'x-client-secret': process.env.SECRET,
            'x-api-version': '2022-09-01'
        })
            .then(({ data }) => { response = data.payment_session_id })
            .catch(err => { response = false });
        return response
    }
    payorder(paymentobject, sessionid) {
        sdk.orderPay({
            payment_method: paymentobject,
            payment_session_id: sessionid,
            save_instrument: true
        }, { 'x-api-version': '2022-09-01' })
            .then(({ data }) => console.log(data))
            .catch(err => console.error(err));
    }
    async pay(orderid, paymentobject) {
        const paymentid = await this.getorderdetails(orderid)
        if (!paymentid)
            throw Error('order id not correct')
        this.payorder(paymentobject, paymentid)
    }
}
let cash = new Cashfree()
cash.pay('anythingfkjsddddjkfjkxxjjjsaoxcajszcrddtesting', {
    "upi": {
        "channel": "link",
        "upi_id": "testsuccess@gocash",
        "upi_expiry_minutes": 10,
        "authorize_only": false
    }
})
// async function code() {
//     let cash = new Cashfree()
//  console.log(await cash.checkpaymentstatus('anythingfkjsdjkfjkxxjjjsaoxcajsdfjkvxzcrddtesting'))
// }
// code()
// let cash = new Cashfree()
// cash.createOrder({
//     customer_id: '7112AAA812234',
//     customer_email: 'john@cashfree.com',
//     customer_phone: '9908734801'
//   },'anythingfkjsddddjkfjkxxjjjsaoxcajszcrddtesting',100000,'please complete on time')