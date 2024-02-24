export function firstLetterToUpperCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function eachWordWithCapitalLetter(str) {
  return str.split(' ').map(firstLetterToUpperCase).join(' ');
}
