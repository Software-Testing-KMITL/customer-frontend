import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './contexts/auth/AuthProvider';
import Routes from './routes';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Routes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
