import messages from './translate.json';

const t = (fullKey) => {
  const message = fullKey
    .split('.')
    .reduce(
      (value, key) => value[key] || {},
      messages,
    );

  if (message && typeof message === 'object') {
    return fullKey;
  }
  return message;
};

export default t;
