import letters from './letters.data.json';
import Letter from './models/Letter';

export default class LettersService {
  constructor() {
    this.lettersList = [];
  }

  get lettersList() {
    if (this._lettersList.length === 0) {
      this._lettersList = this.buildPristineLettersList();
    }
    return this._lettersList;
  }

  set lettersList(lettersList) {
    this._lettersList = lettersList;
  }

  buildPristineLettersList() {
    return Object
      .entries(letters)
      .reduce(
        (finalAccumulator, [points, lettersCouples]) => [
          ...finalAccumulator,
          ...lettersCouples.reduce(
            (modelsAccumulator, [value, total], index) => [
              ...modelsAccumulator,
              ...Array(total)
                .fill(new Letter({ points, value, index })),
            ],
            [],
          ),
        ],
        [],
      );
  }
}
