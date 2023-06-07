import { Navbar, Wrapper, Footer } from './sections';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Background } from './components';
import './assets/scss/index.scss';
import { About, Compare, MyList, Pokemon, Search } from './pages';
import { ToastContainer, ToastOptions, toast } from 'react-toastify';
import { useAppSelector } from './app/hooks';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import pokeballIcon from './assets/pokeball-icon.png';

const App = () => {

  // access to the local storage for 'app'.toast
  const {toasts} = useAppSelector(({app}) => app);
  // dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    //check if there is toasts
    if(toasts.length){
      // render every toast in state array
      toasts.forEach((message: string) => toast(message));
    }
   
  }, [toasts, dispatch])
  

  return (
    <div className='main-container'>
      <Background />
      <BrowserRouter>
        <div className="app">
          {/* Navbar */}
          <Navbar />
          {/* Routes */}
          <Routes>
            <Route path='/search' element={<Search />} />
            <Route path='/list' element={<MyList />} />
            <Route path='/about' element={<About />} />
            <Route path='/compare' element={<Compare />} />
            <Route path='/pokemon/:id' element={<Pokemon />} />
            {/* default route */}
            <Route path='*' element={<Navigate to="/pokemon/1"/>}  />
          </Routes>
          {/* Wrapper */}
          {/* <Wrapper /> */}
          {/* Footer */}
          <Footer />
        </div>
      </BrowserRouter>
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}

export default App