import React from 'react'
import { useState } from 'react'

const FormSplitBill = ({selectedFriend, onSplitBill}) => {
  const [amount, setAmount] = useState('')
  const [myBill, setMyBill] = useState('')
  const [whoIsPaying , setWhoIsPaying] = useState('user')
  const friendBill = amount ? amount - myBill : ''

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!amount || !myBill) return
    onSplitBill(whoIsPaying === 'user' ? friendBill : -myBill )
  }

  return (
    <form action="" className="form-split-bill" onSubmit={handleSubmit}>
        <h2>Patungan bareng si {selectedFriend.name} </h2>

        <label htmlFor="">💲Total tagihan</label>
        <input type="text" value={amount} 
        onChange={(e) => setAmount(e.target.value)} />

        <label htmlFor="">💰Tagihan kamu</label>
        <input type="text" value={myBill}
        onChange={(e) => setMyBill(e.target.value)} />

        <label htmlFor="">🤑Tagihan {selectedFriend.name} </label>
        <input type="text" disabled value={friendBill} />

        <label htmlFor="">💳Ditalangin sama</label>
        <select name="" value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}>
            <option value="user">Kamu</option>
            <option value="friends">{selectedFriend.name}</option>
        </select>
        <button className="button">Tambah</button>
    </form>
  )
}

export default FormSplitBill