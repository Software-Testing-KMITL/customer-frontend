import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import AuthProvider from './contexts/auth/AuthProvider';
import Routes from './routes';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <SnackbarProvider
        maxSnack={5}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <AuthProvider>
          <Navbar />
          <Routes />
        </AuthProvider>
      </SnackbarProvider>
    </BrowserRouter>
  );
}

export default App;
