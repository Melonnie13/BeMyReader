import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import UserPage from './components/UserPage';
import MainPage from './components/MainPage';
import UploadRecording from './components/UploadRecording';
import SingleRecording from './components/SingleRecording';
import Search from './components/Search';
import AllFavorites from './components/AllFavorites';
import RecordingsAlpha from './components/RecordingsAlpha';
// import AddFavorite from './components/AddFavorite';
import { authenticate } from './store/session';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);
  // const categories = useSelector(state => state.category);
  // console.log(categories, "from APPJS CATEGORIES")

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:id' exact={true} >
          <UserPage currentUser={user}/>
        </ProtectedRoute>
        <Route path='/' exact={true} >
          <MainPage />
        </Route>
        <ProtectedRoute path='/recording/upload' exact={true} >
          <UploadRecording />
        </ProtectedRoute>
        <ProtectedRoute path='/recording/:id' exact={true} >
          <SingleRecording />
        </ProtectedRoute>
        <ProtectedRoute path='/search' exact={true} >
          <Search />
        </ProtectedRoute>
        {/* <ProtectedRoute path='/create-favorite' exact={true} >
          <AddFavorite />
        </ProtectedRoute> */}
        <ProtectedRoute path='/all-favorites' exact={true} >
          <AllFavorites />
        </ProtectedRoute>
        <ProtectedRoute path='/recordings/alphabetical' exact={true} >
          <RecordingsAlpha />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
