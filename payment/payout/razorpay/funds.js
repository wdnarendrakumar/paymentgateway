let fetch = require('node-fetch')

class Fund {
    constructor(key, secret) {
        this.url = 'https://api.razorpay.com/v1/fund_accounts'
        this.key = key
        this.secret = secret
    }
    async createfund(fundaccount) {
        const response = await fetch(`${this.url} `, {
            method: 'post',
            body: JSON.stringify(fundaccount),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa(`${this.key}:${this.secret}`)
            }
        })
        const data = await response.json();
        console.log(data)
    }
    async fundstatus(fundaccount, state) {
        const resposnse = await fetch(`${this.url}/${fundaccount}`, {
            method: 'patch',
            body: JSON.stringify({
                "active": state
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa(`${this.key}:${this.secret}`)
            }
        })
        console.log(await resposnse.json())
    }
    async fetchallfund(){
        const response = await fetch(`${this.url}`,{
            method:'get',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa(`${this.key}:${this.secret}`)
            }
        })
        console.log(await response.json())
    }
    async fundaccountbyid(id){
        const response = await fetch(`${this.url}/${id}`,{
            method:'get',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa(`${this.key}:${this.secret}`)
            }
        })
        console.log(await response.json())
    }
}
module.exports = Fund