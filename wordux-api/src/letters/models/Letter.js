export default class Letter {
  constructor({
    index,
    modifiers = [],
    points,
    value,
    uid = (value + index),
  }) {
    this._uid = uid;
    this._value = value;
    this._points = parseInt(points, 10);
    this._modifiers = modifiers;
  }

  get uid() {
    return this._uid;
  }

  set uid(uid) {
    throw new Error('Forbidden: cannot modify letter uid');
  }

  get value() {
    return this._value;
  }

  set value(value) {
    throw new Error('Forbidden: cannot modify letter value');
  }

  get points() {
    return this._points;
  }

  set points(points) {
    throw new Error('Forbidden: cannot modify letter points');
  }

  get modifiers() {
    return this._modifiers;
  }

  set modifiers(modifiers) {
    this._modifiers = modifiers;
  }

  addModifier(modifier) {
    this._modifiers.push(modifier);
  }

  getModifiedPoints() {
    return this._modifiers
      .reduce((val, modifier) => modifier(val), this._points);
  }

  toJSON() {
    return {
      uid: this.uid,
      value: this.value,
      points: this.points,
      modifiers: this.modifiers,
    };
  }
}
