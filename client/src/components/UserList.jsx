import React, { useEffect, useState } from 'react';
import { Avatar, useChatContext } from 'stream-chat-react';

import { InviteIcon } from '../assets';

const ListContainer = ({ children }) => {
    return (
        <div className="user-list__container">
            <div className="user-list__header">
                <p>User</p>
                <p>Invite</p>
            </div>
            {children}
        </div>
    )
}

const UserItem = () => {
    return (
        <div className="user-item__wrapper">
            <div className="user-item__name-wrapper">
                <Avatar />
            </div>
        </div>
    )
}

const UserList = () => {
    const { client } = useChatContext();
    const [ users, setUsers ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
       const getUsers = async () => {
        if(loading) return;

        setLoading(true);

        try {
            const response = await clientInformation.queryUsers(
                { id: {$ne: client.userID }}
            )
        } catch (error) {
            
        }
       }
    }, [])


  return (
    <ListContainer>
        UserList
    </ListContainer>
  )
}

export default UserList