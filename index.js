const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  // 1st we create a helper function toTitleCase that takes string as an argument and converts it to title case
  const toTitleCase = (str) => {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
  return tutorials.map(tutorial => toTitleCase(tutorial));
}

console.log(titleCased());
console.log(tutorials);

// .spilt() is used to split the sentence into single words so as to be able to capitalize the 1st letter of each.
// charAt points to the character you'd like to alter
// .slice to replace non-destructively