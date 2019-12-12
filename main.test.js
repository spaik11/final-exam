const {
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
} = require('./main.js')

let faqtory;
beforeEach(() => {
  faqtory = Faqtory()
})


describe('makeParagraph', () => {
  it(`returns the given sentences as one paragraph`, () => {
    const sentences1 = [
      'The Ministry of Truth, which concerned itself with news, entertainment, education and the fine arts.',
      'The Ministry of Peace, which concerned itself with war.',
      'The Ministry of Love, which maintained law and order.',
      'And the Ministry of Plenty, which was responsible for economic affairs.',
      'Their names, in Newspeak: Minitrue, Minipax, Miniluv and Miniplenty.',
    ]

    const paragraph1 = 'The Ministry of Truth, which concerned itself with news, entertainment, education and the fine arts. The Ministry of Peace, which concerned itself with war. The Ministry of Love, which maintained law and order. And the Ministry of Plenty, which was responsible for economic affairs. Their names, in Newspeak: Minitrue, Minipax, Miniluv and Miniplenty.'

    const sentences2 = [
      'Full fathom five thy father lies, of his bones are coral made.',
      'Those are pearls that were his eyes.',
      'Nothing of him that doth fade, but doth suffer a sea-change into something rich and strange.',
    ]

    const paragraph2 = 'Full fathom five thy father lies, of his bones are coral made. Those are pearls that were his eyes. Nothing of him that doth fade, but doth suffer a sea-change into something rich and strange.'

    expect(makeParagraph(sentences1)).toBe(paragraph1);
    expect(makeParagraph(sentences2)).toBe(paragraph2);
  })
});

describe('averageDogAge', () => {
  it(`returns the average age of the given pets that are dogs`, () => {
    const pets1 = [
      {
        name: 'Maisie',
        species: 'dog',
        age: 6,
      },
      {
        name: 'Ralph',
        species: 'dog',
        age: 12,
      },
      {
        name: 'Fido',
        species: 'dog',
        age: 3,
      },
      {
        name: 'Mittens',
        species: 'cat',
        age: 15,
      },
      {
        name: 'Iggy',
        species: 'lizard',
        age: 1,
      },
    ]

    const pets2 = [
      {
        name: 'Maisie',
        species: 'cat',
        age: 6,
      },
      {
        name: 'Ralph',
        species: 'dinosaur',
        age: 12,
      },
      {
        name: 'Fido',
        species: 'dog',
        age: 2,
      },
      {
        name: 'Mittens',
        species: 'dog',
        age: 15,
      },
      {
        name: 'Iggy',
        species: 'cat',
        age: 1,
      },
    ]

    expect(averageDogAge(pets1)).toBe(7)
    expect(averageDogAge(pets2)).toBe(8.5)
  })
});

describe('addToDigits', () => {
  it(`adds the second parameter to each of the digits of the first`, () => {
    expect(addToDigits(1234, 1)).toBe(2345);
    expect(addToDigits(50, 3)).toBe(83);
    expect(addToDigits(32, 6)).toBe(98);
  })

  it(`rotates digits back to 0`, () => {
    expect(addToDigits(690, 1)).toBe(701);
    expect(addToDigits(16, 4)).toBe(50);
    expect(addToDigits(2, 8)).toBe(0);
  })

  it(`continues to add after rotation`, () => {
    expect(addToDigits(690, 6)).toBe(256);
    expect(addToDigits(99, 2)).toBe(11);
    expect(addToDigits(2, 12)).toBe(4);
  })

  it(`rotates multiple times`, () => {
    expect(addToDigits(690, 61)).toBe(701);
    expect(addToDigits(99, 22)).toBe(11);
    expect(addToDigits(2, 101)).toBe(3);
  })

  it(`simplifies multiple 0s to one 0.`, () => {
    expect(addToDigits(99, 1)).toBe(0);
    expect(addToDigits(999, 1)).toBe(0);
  })
})

describe('nightOwls', () => {
  it(`returns all people who are awake between 1am and 4am, inclusive`, () => {
    const people = [
      {
        name: 'Colin',
        localTime: 730,
        asleep: false
      },
      {
        name: 'Alice',
        localTime: 130,
        asleep: false
      },
      {
        name: 'Evelyn',
        localTime: 200,
        asleep: true
      },
      {
        name: 'William',
        localTime: 330,
        asleep: false
      },
      {
        name: 'Ivy',
        localTime: 1450,
        asleep: true
      },
    ]

    const shouldBeAsleep = [
      {
        name: 'Alice',
        localTime: 130,
        asleep: false
      },
      {
        name: 'William',
        localTime: 330,
        asleep: false
      },
    ]

    expect(nightOwls(people)).toEqual(shouldBeAsleep);
  })

  it(`is inclusive`, () => {
    const people = [
      {
        name: 'Colin',
        localTime: 730,
        asleep: false
      },
      {
        name: 'Alice',
        localTime: 100,
        asleep: false
      },
      {
        name: 'Evelyn',
        localTime: 200,
        asleep: true
      },
      {
        name: 'William',
        localTime: 400,
        asleep: false
      },
      {
        name: 'Ivy',
        localTime: 1450,
        asleep: true
      },
    ]

    const shouldBeAsleep = [
      {
        name: 'Alice',
        localTime: 100,
        asleep: false
      },
      {
        name: 'William',
        localTime: 400,
        asleep: false
      },
    ]

    expect(nightOwls(people)).toEqual(shouldBeAsleep);
  })
});

describe('nap', () => {
  it(`returns the original people but with everyone awake between 1am and 4am set to asleep`, () => {
    const people = [
      {
        name: 'Colin',
        localTime: 730,
        asleep: false
      },
      {
        name: 'Alice',
        localTime: 130,
        asleep: false
      },
      {
        name: 'Evelyn',
        localTime: 200,
        asleep: true
      },
      {
        name: 'William',
        localTime: 330,
        asleep: false
      },
      {
        name: 'Ivy',
        localTime: 1450,
        asleep: true
      },
    ]

    const asleep = [
      {
        name: 'Colin',
        localTime: 730,
        asleep: false
      },
      {
        name: 'Alice',
        localTime: 130,
        asleep: true
      },
      {
        name: 'Evelyn',
        localTime: 200,
        asleep: true
      },
      {
        name: 'William',
        localTime: 330,
        asleep: true
      },
      {
        name: 'Ivy',
        localTime: 1450,
        asleep: true
      },
    ]

    expect(nap(people)).toEqual(asleep)
  })
  it(`is inclusive`, () => {
    const people = [
      {
        name: 'Colin',
        localTime: 730,
        asleep: false
      },
      {
        name: 'Alice',
        localTime: 100,
        asleep: false
      },
      {
        name: 'Evelyn',
        localTime: 200,
        asleep: true
      },
      {
        name: 'William',
        localTime: 400,
        asleep: false
      },
      {
        name: 'Ivy',
        localTime: 1450,
        asleep: true
      },
    ]

    const asleep = [
      {
        name: 'Colin',
        localTime: 730,
        asleep: false
      },
      {
        name: 'Alice',
        localTime: 100,
        asleep: true
      },
      {
        name: 'Evelyn',
        localTime: 200,
        asleep: true
      },
      {
        name: 'William',
        localTime: 400,
        asleep: true
      },
      {
        name: 'Ivy',
        localTime: 1450,
        asleep: true
      },
    ]

    expect(nap(people)).toEqual(asleep);
  })
});

describe('findIndices', () => {
  it(`given an array and a callback, returns the indices of every element that the callback returns true for`, () => {
    const isOdd = (num) => num % 2 === 1;
    const isEven = (num) => num % 2 === 0;
    const isColin = (name) => name === 'Colin'

    const nums = [3, 5, 2, 4, 16, 5];
    const people = ['Colin', 'Colin', 'Messi', 'Colin', 'boy there are a lot of Colins'];

    expect(findIndices(nums, isOdd)).toEqual([0, 1, 5])
    expect(findIndices(nums, isEven)).toEqual([2, 3, 4])
    expect(findIndices(people, isColin)).toEqual([0, 1, 3])
  })
});

describe('Faqtory', () => {
  it(`returns an object`, () => {
    expect(typeof Faqtory()).toBe('object')
  })

  it(`begins with a questions property set to an empty array`, () => {
    expect(Array.isArray(faqtory.questions)).toBe(true);
    expect(faqtory.questions.length).toBe(0)
  })
  
  it(`has a length property that starts at 0`, () => {
    expect(faqtory.length).toBe(0)
  })
});

describe('Faqtory.addQuestion', () => {
  it(` adds the given question to the questions list`, () => {
    const question = {
      text: 'What is your site all about?',
      answer: '',
      id: 0
    }

    faqtory.addQuestion('What is your site all about?');
    expect(faqtory.questions[0].text).toBe(question.text);
    expect(faqtory.questions[0].id).toBe(question.id);
  })

  it(`updates the length`, () => {
    const question1= {
      text: 'What is your site all about?',
      answer: '',
      id: 0
    }

    const question2= {
      text: 'Why did you start this site?',
      answer: '',
      id: 1
    }

    faqtory.addQuestion('What is your site all about?');
    faqtory.addQuestion('Why did you start this site?');
    expect(faqtory.length).toBe(2);
  })

  it(`gives the added questions 0-based ids`, () => {
    const question1= {
      text: 'What is your site all about?',
      answer: '',
      id: 0
    }

    const question2= {
      text: 'Why did you start this site?',
      answer: '',
      id: 1
    }

    faqtory.addQuestion('What is your site all about?');
    faqtory.addQuestion('Why did you start this site?');
    expect(faqtory.questions[0].text).toBe(question1.text);
    expect(faqtory.questions[0].id).toBe(question1.id);
    expect(faqtory.questions[1].text).toBe(question2.text);
    expect(faqtory.questions[1].id).toBe(question2.id);
  })
});

describe('Faqtory.answerQuestion', () => {
  it(`adds the given text as an answer to the question with the given id`, () => {
    faqtory.addQuestion('What is your site all about?');
    faqtory.addQuestion('Why did you start this site?');

    faqtory.answerQuestion(0, `It's about MAKING MONEY for yourself.`);
    faqtory.answerQuestion(1, `To MAKE MONEY for ourselves.`);

    expect(faqtory.questions[0].answer).toBe(`It's about MAKING MONEY for yourself.`)
    expect(faqtory.questions[1].answer).toBe(`To MAKE MONEY for ourselves.`)
  })

  it(`does not answer already-answered questions`, () => {
    faqtory.addQuestion('What is your site all about?');
    faqtory.addQuestion('Why did you start this site?');

    faqtory.answerQuestion(1, `To MAKE MONEY for ourselves.`);
    faqtory.answerQuestion(1, `It's about MAKING MONEY for yourself.`);

    expect(faqtory.questions[1].answer).toBe(`To MAKE MONEY for ourselves.`)
  })
});

describe('Dog', () => {
  it(`takes in a name, breed, and color, and sets those as its properties`, () => {
    const doggo1 = new Dog('Maisie', 'Carin Terrier', 'black')
    const doggo2 = new Dog('Ralph', 'Cocker Spaniel', 'brown')

    expect(doggo1.name).toBe('Maisie')
    expect(doggo1.breed).toBe('Carin Terrier')
    expect(doggo1.color).toBe('black')

    expect(doggo2.name).toBe('Ralph')
    expect(doggo2.breed).toBe('Cocker Spaniel')
    expect(doggo2.color).toBe('brown')
  })

  it('barks', () => {
    const doggo1 = new Dog('Maisie', 'Carin Terrier', 'black')
    expect(doggo1.makeNoise()).toBe('Woof.')
  })
});

describe('Great Dane', () => {
  it(`Always has the Great Dane breed.`, () => {
    const doggo1 = new GreatDane('Rover', 'grey')
    const doggo2 = new GreatDane('Bob', 'brown')
    expect(doggo1.name).toBe('Rover')
    expect(doggo1.breed).toBe('Great Dane')
    expect(doggo1.color).toBe('grey')
    expect(doggo2.name).toBe('Bob')
    expect(doggo2.breed).toBe('Great Dane')
    expect(doggo2.color).toBe('brown')
  })

  it(`has a booming bark`, () => {
    const doggo1 = new GreatDane('Rover','grey')
    expect(doggo1.makeNoise()).toBe('WOOF.')
  })
});

describe('Beagle', () => {
  it(`always has a Beagle's breed and color`, () => {
    const doggo1 = new Beagle('Fred')
    const doggo2 = new Beagle('Eve')
    expect(doggo1.name).toBe('Fred')
    expect(doggo1.breed).toBe('Beagle')
    expect(doggo1.color).toBe('white/black/brown')
    expect(doggo2.name).toBe('Eve')
    expect(doggo2.breed).toBe('Beagle')
    expect(doggo2.color).toBe('white/black/brown')
  })

  it(`Bays`, () => {
    const doggo1 = new Beagle('Fred')
    expect(doggo1.makeNoise()).toBe('Awooooooooo.')
  })
});

describe('Pointer', () => {
  it(`always has the Pointer's breed`, () => {
    const doggo1 = new Pointer('Lily', 'grey')
    const doggo2 = new Pointer('Bob', 'brown')
    expect(doggo1.name).toBe('Lily')
    expect(doggo1.breed).toBe('Pointer')
    expect(doggo1.color).toBe('grey')
    expect(doggo2.name).toBe('Bob')
    expect(doggo2.breed).toBe('Pointer')
    expect(doggo2.color).toBe('brown')
  })

  it(`can customize whether it actually points or not`, () => {
    const doggo1 = new Pointer('Lily', 'grey', true)
    const doggo2 = new Pointer('Bob', 'brown', false)
    expect(doggo1.points).toBe(true)
    expect(doggo2.points).toBe(false)
  })

  it(`if told to point, points if it's a pointing Pointer, and otherwise barks`, () => {
    const doggo1 = new Pointer('Lily', 'grey', true)
    const doggo2 = new Pointer('Bob', 'brown', false)
    expect(doggo1.point()).toBe('Over there!')
    expect(doggo2.point()).toBe('Woof.')
    
  })
});