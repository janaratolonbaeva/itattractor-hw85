export const saveToLocalStorage = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('soundtrackState', serializedState);
  } catch (e) {
    console.log('Could not save state');
  }
};

export const loadFromToLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('soundtrackState');

    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState)
  } catch (e) {
    return undefined;
  }
};