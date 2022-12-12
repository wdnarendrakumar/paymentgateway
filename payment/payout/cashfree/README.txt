Operations:

a.authorize()



1. bene.addbeneficiary({
  "beneId": "JOHN18011ddddd343",
  "name": "john doe",
  "email": "johndoe@cashfree.com",
  "phone": "9876543210",
  "bankAccount": "0011117772233",
  "ifsc": "HDFC0000001",
  "address1": "ABC Street",
  "city": "Bangalore",
  "state": "Karnataka",
  "pincode": "560001"
})
2. bene.getbeneficiarydetails('JOHN18011ddddd343')

3. bene.removebeneficiary('JOHN18011ddddd343')

4.  bene.getbeneficiaryid('0011117772233','HDFC0000001')

let bene = new Beneficiary('token')


payout 


let token ='ab9JCVXpkI6ICc5RnIsICN4MzUIJiOicGbhJye.ab0nIIRVVB9VSQFEVV9UWBBlI6IiY1NnIsAzN4MzM4AzN2EjOiQXYpJCLwcDN0MDOwcjNxojIwhXZiwSN2ATN4IjOiQWS05WZnFmIsICVOVkUSV1QfRVVPlVQQJiOiwWZu5WYoNmIsICVV9UWBBlI6ICduV2ZhJCLiQTMx4CN04SO0IjL5QjI6ICcpJCLlNHbhZmOis2Ylh2QlJXd0Fmbnl2ciwSN2ATN4IjOiQWS05WdvN2YhJCLiADNB5ETVp0RyUkVUVlTDdDS5U0QwczN4cjMGNkI6ICZJRnbllGbjJye.abYployEsuI_fydzWJ2BAkb7_U35GQ3hA4k4AByt47i5o_B3XdwYaCv34IW2O0uhWb'
a.balancetransfer(token,{
  "beneId": 'JOHN18011ddddd343',
  "amount": "1000.00",
  "transferId": "JUNOB2sadddsdfsfdjasdjk018"
})