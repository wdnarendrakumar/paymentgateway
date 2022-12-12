let fetch = require('node-fetch')

class Contact {
    constructor(key, secret) {
        this.url = 'https://api.razorpay.com/v1/contacts'
        this.key = key
        this.secret = secret
    }
    async createcontact(contact) {
        const response = await fetch(`${this.url}`, {
            method: 'post',
            body: JSON.stringify(contact),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa(`${this.key}:${this.secret}`)
            }
        })
        const data = await response.json();
        console.log(data)
    }
    async updatecontacts(contactid, contact) {
        const response = await fetch(`${this.url}/${contactid}`, {
            method: 'patch',
            body: JSON.stringify(contact),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa(`${this.key}:${this.secret}`)
            }
        })
        console.log(await response.json())
    }
    async actiontocontacts(contactid, state) {
        const response = await fetch(`${this.url}/${contactid}`, {
            method: 'patch',
            body: JSON.stringify({
                active: state
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa(`${this.key}:${this.secret}`)
            }
        })
        console.log(await response.json())
    }
    async getcontactbyid(contactid) {
        const response = await fetch(`${this.url}/${contactid}`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa(`${this.key}:${this.secret}`)
            }
        })
        console.log(await response.json())
    }
    async getallcontancts() {
        const response = await fetch(`${this.url}`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa(`${this.key}:${this.secret}`)
            }
        })
        const data = await response.json()
        console.log(data)
    }
}

module.exports = Contact