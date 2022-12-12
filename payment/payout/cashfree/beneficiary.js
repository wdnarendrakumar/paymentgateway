module.exports = class Beneficiary {
    constructor(token) {
        this.url = 'https://payout-gamma.cashfree.com/payout/v1/'
        this.token = token
    }
    async addbeneficiary(userdetails) {
        const response = await fetch(`${this.url}addBeneficiary`, {
            method: 'post',
            headers: {
                'Authorization': `Bearer ${this.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userdetails)
        })
        const r = await response.json()
        console.log(r)
    }
    async getbeneficiarydetails(beneId) {
        const response = await fetch(`${this.url}getBeneficiary/${beneId}`, {
            method: 'get',
            headers: {
                'Authorization': `Bearer ${this.token}`,
                'Content-Type': 'application/json'
            }
        })
        console.log(await response.json())
    }
    async getbeneficiaryid(account,ifsc){
        const response = await fetch(`${this.url}getBeneId?bankAccount=${account}&ifsc=${ifsc}`,{
            method:'get',
            headers: {
                'Authorization': `Bearer ${this.token}`,
                'Content-Type': 'application/json'
            }
        })
        console.log(await response.json())
    }
    async removebeneficiary(beneId){
        const response = await fetch(`${this.url}removeBeneficiary`,{
            method:'post',
            body:JSON.stringify({
                beneId:beneId
            }),
            headers: {
                'Authorization': `Bearer ${this.token}`,
                'Content-Type': 'application/json'
            }
        })
        console.log(await response.json())
    }
}