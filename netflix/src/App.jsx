import './App.css'
import Body from './components/Body/Body';
import { Toaster } from 'react-hot-toast';
import VideoPlayerDialog from './Components/Media/VideoPlayer/VideoPlayerDialog';
import Footer from './Components/Footer/Footer';

function App() {

  return (
    <div>
      <Body/>
      <Toaster/>
      <VideoPlayerDialog/>
      <Footer/>
    </div>
  )
}

export default App
