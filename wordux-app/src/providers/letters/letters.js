import letters from './letters.json';

let lettersModels;

export default (() => {
  if (lettersModels) {
    return lettersModels;
  }

  const buildLetterInstance = ({ points, value, index }) => ({
    uid: value + index, value, points: parseInt(points, 10), modifiers: [],
  });

  const mapLettersDefinitions = ([points, arrays]) => (
    arrays
      .map(([value, total], index) => (
        Array(total).fill(buildLetterInstance({ points, value, index }))
      ))
      .reduce((all, el) => [...all, ...el], [])
  );

  lettersModels = Object
    .entries(letters)
    .map(mapLettersDefinitions)
    .reduce((all, el) => [...all, ...el], []);

  return lettersModels;
})();
