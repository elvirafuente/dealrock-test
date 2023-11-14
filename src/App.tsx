import logo from './assets/dealrock-logo.svg';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Home from './pages/Home';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path='/'
            element={
              <ProtectedRoute redirectTo='/login'>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
