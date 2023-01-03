import './App.css';
import BodyData from './components/BodyData';
import GallaryFooter from './components/GallaryFooter';
import HeaderGallery from './components/HeaderGallery';
import ImageData from './components/ImageData';
// import Test from './components/Test'


function App() {
  return (
    <div>
      {/* <Test/> */}
      <HeaderGallery/>
       <BodyData data = {ImageData}/>
      <GallaryFooter/> 
      {/* <imageData/> */}
    </div>
  )
}

export default App;
