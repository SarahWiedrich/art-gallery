import './App.css';
import { useEffect, useState } from 'react';
import GalleryFrame from './GalleryFrame';
import ButtonsBar from './ButtonsBar';

function App() {
  const [ artID, setArtID ] = useState(100)
  const [ image, setImage ] = useState(null)

  useEffect(() => {
    async function fetchData () {
      const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artID}`)
      const data = await response.json();
      const { primaryImageSmall } = data;
      setImage (primaryImageSmall)
    }
    fetchData()
  }, [artID])
  
  return (
    <div className="App">
      <GalleryFrame imageURL={image}></GalleryFrame>
      <ButtonsBar setArtID={setArtID}></ButtonsBar>
    </div>
  );
}

export default App;
