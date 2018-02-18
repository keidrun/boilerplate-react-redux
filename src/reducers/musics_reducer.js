export default function(state = {}, action) {
  switch (action.type) {
    case 'MUSICS_LIST':
      return { ...state, musics: action.payload };
    case 'MUSICIANS_LIST':
      return { ...state, musicians: action.payload };
    default:
      return state;
  }
}
