// the work of App component is to load all the other custom created components inside the DOM in the sequence that they are specified in the App component
import { useState } from 'react';
import Header from './components/Header.jsx';
import FeedbackList from './components/FeedbackList.jsx';
import FeedbackStats from './components/FeedbackStats.jsx';
import FeedbackForm from './components/FeedbackForm.jsx';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AboutPage from './components/pages/AboutPage.jsx';
import AboutLinkIcon from './components/AboutLinkIcon';
import Post from './components/Post.jsx';
import NotFound from './components/NotFound.jsx';
import { FeedbackProvider } from './context/FeedbackContext';

function App(){

    return (
        <FeedbackProvider>
        <Router>
            <Header />
            <div className="container">
            <Routes>
                <Route path='/' element={
                    <>
                        <FeedbackForm />
                        <FeedbackStats />
                        <FeedbackList />
                        <AboutLinkIcon />
                    </>
                }></Route>           
                
                <Route path='/about' element={<AboutPage />} />
                <Route path='/post' element={<Post />} />
                <Route path='/notfound' element={<NotFound />} />
            </Routes>
            </div>
        </Router>
        </FeedbackProvider>
    )
}

export default App;