ALL CONTACT CLASS OPERATION

1. contact.createcontact({
  "name": "naernasdfsadfdra Kumar",
  "email": "gaurav.kumar@example.com",
  "contact": "9123456789",
  "type": "employee",
  "reference_id": "Acme Contact ID 12345",
  "notes": {
  "notes_key_1": "Tea, Earl Grey, Hot",
  "notes_key_2": "Tea, Earl Grey… decaf."
}}
)
2. contact.updatecontacts('cont_KqtNdLPw1pnH89',{
  "name": "naernasdfasdkjfjksadhfjksadsadfdra Kumar",
  "email": "gaurav.kumar@example.com",
  "contact": "9123456789",
  "type": "employee",
  "reference_id": "Acme Contact ID 12345",
  "notes": {
  "notes_key_1": "Tea, Earl Grey, Hot",
  "notes_key_2": "Tea, Earl Grey… decaf."
}})
3 .contact.getallcontancts()
4. contact.getcontactbyid('cont_KqtNdLPw1pnH89')
5. contact.actiontocontacts('cont_KqtNdLPw1pnH89',false)

ALL FUND CLASS OPERATION
1. fund.fetchallfund()
2.  fund.fundaccountbyid('fa_KqrkYz5USeM3U3')
3. fund.fundstatus('fa_KqrkYz5USeM3U3',false)
4. fund.createfund({
   "contact_id": "cont_KqrWfZJ8DBVBT3",
   "account_type": "bank_account",
   "bank_account": {
      "name": "Gaurav Kumar",
      "ifsc": "HDFC0000053",
      "account_number": "765432123456789"
  }
})

All PAYOUT OPERATION
1. payout.createpayout({
  "account_number": "765432123456789",
  "fund_account_id": "fa_KqrkYz5USeM3U3",
  "amount": 1000000,
  "currency": "INR",
  "mode": "IMPS",
  "purpose": "refund",
  "queue_if_low_balance": true,
  "reference_id": "Acme Transaction ID 12345",
  "narration": "Acme Corp Fund Transfer",
  "notes": {
    "notes_key_1":"Tea, Earl Grey, Hot",
    "notes_key_2":"Tea, Earl Grey… decaf."
  }
})

2. payout.fetchpayoutbyid('id')
