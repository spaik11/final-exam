const makeParagraph = (arr) => {
  return arr.join(' ');
}

const averageDogAge = (pets) => {
  let result = 0;
  const dogsOnly = pets.filter((pet) => pet.species === 'dog').map((pet) => pet.age);
  
  for (let i = 0; i < dogsOnly.length; i++) {
    result = result + dogsOnly[i];
  }

  return result / dogsOnly.length;
}

const addToDigits = (num, modifier) => {
  return Number(num.toString().split('').map(digit => {
    return digit = (Number(digit) + modifier).toString().slice(-1)
    }).join(''))
}

const nightOwls = (peoples) => {
  return peoples.filter((people) => people.localTime <= 400 && people.asleep === false);

}

const nap = (peoples) => {
  for (let i = 0; i < peoples.length; i++) {
    if (peoples[i].localTime <= 400) {
      peoples[i].asleep = true;
    }

  }
  return peoples;
}


const findIndices = (arrays, func) => {
  let result = [];

  for (let i = 0; i < arrays.length; i++) {
    if (func(arrays[i])) {
      result.push(i);
    }
  }
  return result;
}

const Faqtory = () => {
  return {
    questions: [],
    length: 0,

    addQuestion: function(question) {
      this.questions.push({
        text: question,
        answer: '',
        id: this.questions.length,
      })
      this.length++;
    },

    answerQuestion: function(id, input) {
      if (!this.questions[id].answer) {
      this.questions[id].answer = input;
      }
    },
  }
}


class Dog {
  constructor(name, breed, color) {
    this.name = name,
    this.breed = breed,
    this.color = color
  }
  makeNoise() {
    return 'Woof.';
  }
}

class GreatDane extends Dog {
  constructor(name, color) {
    super(name, 'Great Dane', color)
  }
  makeNoise() {
    return super.makeNoise().toUpperCase();
  }
}

class Beagle extends Dog {
  constructor(name) {
    super(name, 'Beagle', 'white/black/brown')
  }
  makeNoise() {
    return 'Awooooooooo.';
  }
}

class Pointer extends Dog {
  constructor(name, color, points) {
    super(name, 'Pointer', color)
    this.points = points;
  }
  point() {
    if (this.points) {
      return 'Over there!'
    } else {
      return 'Woof.';
    }
  }
}


module.exports = {
  makeParagraph,
  averageDogAge,
  addToDigits,
  nightOwls,
  nap,
  findIndices,
  Faqtory,
  Dog,
  GreatDane,
  Beagle,
  Pointer,
}