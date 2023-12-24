import React from 'react'
import { useState } from 'react'

const FormAddFriends = ({onHandleAddFriend}) => {
  const [name, setName] = useState('')
  const [image, setImage] = useState('https://i.pravatar.cc/48')

  const handleSubmit = (e) => {
    e.preventDefault()

    const id = crypto.randomUUID()

    if(!name || !image) return
    
    const newFriend = {
      id,
      name,
      image : `${image}?=${id}`,
      balance : 0
    }
    
    onHandleAddFriend(newFriend)
    setName('')
    setImage('')
  }

  return (
    <form action="" className="form-add-friend" onSubmit={handleSubmit} >
        <label htmlFor="">🤵Nama</label>
        <input type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}  />

        <label htmlFor="">📷Gambar</label>
        <input type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)} />

        <button className='button'>Tambah</button>
    </form>
  )
}

export default FormAddFriends