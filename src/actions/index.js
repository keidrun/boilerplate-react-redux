export function musicsList() {
  return {
    type: 'MUSICS_LIST',
    payload: [
      { id: 1, name: 'Perfect' },
      { id: 2, name: 'Shape of You' },
      { id: 3, name: 'Sugar' },
      { id: 4, name: 'Anywhere' },
      { id: 5, name: 'Beautiful Birds' }
    ]
  };
}

export function musiciansList() {
  return {
    type: 'MUSICIANS_LIST',
    payload: [
      { id: 1, name: 'Ed Sheeran' },
      { id: 2, name: 'Maroon 5' },
      { id: 3, name: 'Passenger' }
    ]
  };
}
