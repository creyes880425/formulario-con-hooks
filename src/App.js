import './App.css';
import FormDetail from './components/FormDetail/FormDetail';
import UserFrom from './components/UserForm/UserForm';

import { useState } from 'react';

function App() {
  const [userForm, setUserForm ] = useState({});
  
  return (
    <>
      <UserFrom userForm={ userForm } setUserForm={ setUserForm }/>
      <FormDetail userForm={ userForm } />
    </>
  );
}

export default App;
