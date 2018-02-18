import React from 'react';

const MusicsList = props => {
  console.log(props);

  const renderMusics = musics =>
    musics ? musics.map((item, i) => <div key={i}>{item.name}</div>) : null;

  const renderMusicians = musicians =>
    musicians
      ? musicians.map((item, i) => <div key={i}>{item.name}</div>)
      : null;

  return (
    <div>
      <h2>Musics</h2>
      <div>{renderMusics(props.data.musics)}</div> <h2>Musicians</h2>
      <div>{renderMusicians(props.data.musicians)}</div>
    </div>
  );
};

export default MusicsList;
