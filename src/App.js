import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'

import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'

import AboutPage from './pages/AboutPage'
import Feedbacklist from './components/Feedbacklist'
import AboutIconList from './components/AboutIconList'
import {FeedbackProvider} from './context/FeedbackContext'

function App() {
  
  

  return (
    <FeedbackProvider>
    <Router>
      <Header />

      <div className='container'>
        <Routes>
        <Route exact path = '/' element = {
          <>
              <FeedbackForm  />
              <FeedbackStats  />
              <Feedbacklist   />
          </>
        }>

        </Route>

        <Route path='/about' element= {<AboutPage />}/>
        </Routes>
        <AboutIconList />
      </div>
    </Router>
    </FeedbackProvider>
  )
}

export default App