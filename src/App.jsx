import { useState } from 'react';
import FormAddFriends from './components/form/FormAddFriends';
import FormSplitBill from './components/form/FormSplitBill';
import FriendList from './components/FriendList';

const initialFriends = [
  {
    id: 118836,
    name: "Budi",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sukma",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Parjo",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [addFriends, setAddFriends] = useState(false)
  const [friends, setFriends] = useState(initialFriends)
  const [selectedFriend, setSelectedFriend] = useState(null)

  const handleShowFriends = () => {
    setAddFriends((open) => !open)
    setSelectedFriend(null)
  }

  const handleAddFriends = (addFriend) => {
    setFriends((friends) => [...friends, addFriend])
  }

const handleSelectedFriend = (friend) => {
  setSelectedFriend( (prev) => 
    prev?.id == friend.id ? null : friend )
    setAddFriends(false)
}

const handleSplitBill = (value) => {
  setFriends((friends) => friends.map((friend) => {
    if(friend.id == selectedFriend?.id){
      return {
        ...friend,
        balance : friend.balance + value
      }
    }
    return friend
  })
  )
  setSelectedFriend(null)
}

  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendList friends={friends} 
        onSelected={handleSelectedFriend}
        selectedFriend={selectedFriend} />

        {addFriends &&  <FormAddFriends onHandleAddFriend={handleAddFriends} />}
        <button className="button" onClick={handleShowFriends} >
          {!addFriends ? "Tambah teman" : "Tutup"}</button>
      </div>
      { selectedFriend && <FormSplitBill 
      selectedFriend={selectedFriend}
      onSplitBill={handleSplitBill} /> }
    </div>
  )
}

export default App
