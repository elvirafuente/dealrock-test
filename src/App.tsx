import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Home from './pages/Home';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import './App.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className='main'>
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
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
