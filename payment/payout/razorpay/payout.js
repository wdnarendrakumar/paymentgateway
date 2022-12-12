
let fetch = require('node-fetch')

class Payout{
    constructor(key,secret){
        this.url = 'https://api.razorpay.com/v1/payouts'
        this.key = key
        this.secret = secret
    }
    async createpayout(payoutdetails){
        console.log(this.url)
        const response = await fetch(`${this.url}`,{
            method:'post',
            body:JSON.stringify(payoutdetails),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa(`${this.key}:${this.secret}`)
            }
        })
        console.log(await response.json())
    }
    async fetchpayoutbyid(id){
        const repsonse = await fetch(`${this.url}/${id}` ,{
            method:'get',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa(`${this.key}:${this.secret}`)
            }
        })
        console.log(await repsonse.json())
    }
}
module.exports = Payout