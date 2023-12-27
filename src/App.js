
import React, {useState} from "react";
import './App.css';
import yellow_sub from './songs/yellow_submarine.json' 
import christmas from './songs/christmas_card.json' 

const SongLyrics = ({song}) => {
  const lines = song.split('\n');
  const copyToClipboard = () => {
    const textToCopy = lines.join('\n');
    const textarea = document.createElement('textarea');
    textarea.value = textToCopy;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    alert('Lyrics copied to clipboard');

  }


return (
  <div>
    {lines.map((line, index) => (
      <p key={index}>{line}</p>
    ))}
    <button onClick={copyToClipboard}>Copy Text</button>
   </div>
);
    };


function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  const songs = [
    {title: yellow_sub.title, songData: yellow_sub},
    {title: christmas.title, songData: christmas},
  ];

  const handleItemClick = (song) => {
    setSelectedItem(song.songData);
  };

  return (
    <div className="App">
        <div id="header">
  <div id="headerContent">
    Song Generator
  </div>
</div>

<div id="page">
  <div id="sideBar">
    {songs.map((song, index) => (
      <div key={index} className="item" onClick={() => handleItemClick(song)}>
        {song.title} 
      </div>
    ))}
    
  </div>
  <div id="content">
    {selectedItem ? (
      <div>
          <h2>{selectedItem.title}</h2>
         <SongLyrics song={selectedItem.song} />
      </div>
    ) : (
      <p>Select a song to view lyrics</p>
      
    )}
  </div>
</div>

    </div>
  );
}

export default App;
