import React, { useState} from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelContainer, ChannelListContainer, Auth } from './components';

import './App.css';

const cookies = new Cookies();

const apiKey = 'rrf6ghxf64yn';

const authToken = cookies.get("token");

const client = StreamChat.getInstance(apiKey);

if(authToken) {
  client.connectUser({
        id: cookies.get('userId'),
        name: cookies.get('username'),
        fullName: cookies.get('fullName'),
        phoneNumber: cookies.get('phoneNumber'),
        image: cookies.get('avatarURL'),
        hashedPassword: cookies.get('hashedPassword'),
  }, authToken)
}

function App() {
  const [createType, setCreateType ] = useState('');
  const [ isCreating, setIsCreating ] = useState(false);
  const [ isEditing, setIsEditing ] = useState(false);

  if(!authToken) return <Auth />;

  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer 
        //Best way is to use Context API
          isCreating={isCreating}
          setIsCreating={setIsCreating}
          setCreateType={setCreateType}
          setIsEditing={setIsEditing}
        
        />
        <ChannelContainer 
         isCreating={isCreating}
         setIsCreating={setIsCreating}
         setCreateType={setCreateType}
         isEditing={isEditing}
         setIsEditing={setIsEditing}
         createType={createType}
       />
      </Chat>
    </div>
  );
}

export default App;
