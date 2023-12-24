import React from "react";
import Friends from "./Friends";

const FriendList = ({ friends, onSelected, selectedFriend }) => {
  return (
    <ul>
      {friends.map((friend) => {
        return <Friends friend={friend}
        onSelected={onSelected}
        selectedFriend={selectedFriend} />;
      })}
    </ul>
  );
};

export default FriendList;
