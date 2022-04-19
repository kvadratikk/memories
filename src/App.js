import { Container } from '@material-ui/core';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import PostDetails from './components/PostDetails/PostDetails';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <BrowserRouter>
      <Container maxWidth='xl'>
        <Navbar />
        <Routes>
          <Route
            path='/memories/'
            exact
            element={<Navigate replace to='/memories/posts' />}
          />
          <Route path='/memories/posts' exact element={<Home />} />
          <Route path='/memories/posts/search' exact element={<Home />} />
          <Route path='/memories/posts/:id' exact element={<PostDetails />} />
          <Route
            path='memories/auth'
            exact
            element={
              !user ? <Auth /> : <Navigate replace to='/memories/posts' />
            }
          />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
