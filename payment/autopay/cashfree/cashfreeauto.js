let fetch = require('node-fetch')
require('dotenv').config({ path: '../../../.env' })
class CashFreeAutoPay {
    constructor(key, secret) {
        this.url = 'https://test.cashfree.com/'
        this.key = key
        this.secret = secret
    }
    async createplan(plan) {
        const response = await fetch(`${this.url}api/v2/subscription-plans`, {
            method: 'POST',
            headers: {
                'X-Client-Id': this.key,
                'X-Client-Secret': this.secret,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(plan)
        })
        console.log(await response.json())
    }
    async subscription(subs) {
        const response =
            await fetch(`${this.url}api/v2/subscriptions`, {
                method: 'POST',
                headers: {
                    'X-Client-Id': this.key,
                    'X-Client-Secret': this.secret,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(subs)
            })
            console.log(await response.json())

    }
    async getsubscriptiondetails(id){
        const response = await fetch(`${this.url}api/v2/subscriptions/${id}`,{
            method:'get',
            headers: {
                'X-Client-Id': this.key,
                'X-Client-Secret': this.secret,
                'Content-Type': 'application/json'
            }
        })
        console.log(await response.json())
    }
    async getsingalpaymentsubscription(subid,payid){
        const response = await fetch(`${this.url}api/v2/subscriptions/${subid}/payments/${payid}`,{
            method:'get',
            headers: {
                'X-Client-Id': this.key,
                'X-Client-Secret': this.secret,
                'Content-Type': 'application/json'
            }
        })
        console.log(await response.json())
    }
    async canclepayment(subrefid){
        const response = await fetch(`${this.url}api/v2/subscriptions/${subrefid}/cancel`,{
            method:'post',
            headers: {
                'X-Client-Id': this.key,
                'X-Client-Secret': this.secret,
                'Content-Type': 'application/json'
            }
        })
        console.log(await response.json())
    }

}






let autopay = new CashFreeAutoPay(process.env.CLIENTID,process.env.SECRET)
// autopay.canclepayment(101065)
// autopay.getsubscriptiondetails(101065)
// autopay.getsingalpaymentsubscription()
// autopay.subscription({
//     "subscriptionId": "TESTSUB-2",
//     "planId": "Basic-2",
//     "customerName": "John Doe",
//     "customerEmail": "johndoe@gmail.com",
//     "customerPhone": "9999999999",
//     "firstChargeDate":"2022-12-14",
//     "authAmount": 1,
//     "returnUrl": "www.cashfree.com",
//     "subscriptionNote": "Cashfree",
//     "notificationChannels": ["EMAIL", "SMS"]
// })

// autopay.createplan({
//     'planId': 'Basic-2',
//     'planName': 'Basic Subscription Plan-2',
//     'type': 'PERIODIC',
//     'maxCycles': 5,
//     'amount': 1000,
//     'intervalType': 'week',
//     'intervals': 1,
//     'description': 'This is the standard plan for our services'
// })

// autopay.getsubscriptiondetails(101065)