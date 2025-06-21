import { useState } from 'react';
import Dashboard from './pages/Dashboard';
import NameEntry from './pages/NameEntry';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const handleNameSubmit = (name) => {
    setCurrentUser(name);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  if (!currentUser) {
    return <NameEntry onNameSubmit={handleNameSubmit} />;
  }

  return <Dashboard user={currentUser} handleLogout={handleLogout} />;
}

export default App;