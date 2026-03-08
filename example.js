const { FamilyTree } = require('./familyTree');

const tree = new FamilyTree();

// ===== Add family members =====

tree.addMember('Gerrit Salverda', {
  birthdate: 'November 11, 1942',
  birthCity: 'Balk',
  birthProvince: 'Friesland',
  birthCountry: 'Netherlands',
  maidenName: '',
  spouse: 'Janny Salverda',
  alternativeNames: [],
  dateOfDeath: 'January 11, 2014'
});

tree.addMember('Janny Salverda', {
  birthdate: 'April 30, 1945',
  birthCity: 'Balk',
  birthProvince: 'Friesland',
  birthCountry: 'Netherlands',
  maidenName: 'Huisman',
  spouse: 'Gerrit Salverda',
  alternativeNames: ['Jantje'],
  dateOfDeath: 'September 12, 2022'
});

tree.addMember('Menno Salverda', {
  birthdate: 'November 25, 1966',
  birthCity: 'Balk',
  birthProvince: 'Friesland',
  birthCountry: 'Netherlands',
  maidenName: '',
  spouse: 'Debra Salverda',
  alternativeNames: [],
  dateOfDeath: ''
});

tree.addMember('Henk Salverda', {
  birthdate: 'August 7, 1968',
  birthCity: 'Balk',
  birthProvince: 'Friesland',
  birthCountry: 'Netherlands',
  maidenName: '',
  spouse: 'Leny Salverda',
  alternativeNames: [],
  dateOfDeath: ''
});

tree.addMember('Leny Salverda', {
  birthdate: 'October 9, 1968',
  birthCity: 'Utrecht',
  birthProvince: 'Utrecht',
  birthCountry: 'Netherlands',
  maidenName: 'Mulder',
  spouse: 'Henk Salverda',
  alternativeNames: [],
  dateOfDeath: ''
});

tree.addMember('Melissa Salverda', {
  birthdate: 'October 29, 1996',
  birthCity: 'Nieuwegein',
  birthProvince: 'Utrecht',
  birthCountry: 'Netherlands',
  maidenName: '',
  spouse: '',
  alternativeNames: [],
  dateOfDeath: ''
});

tree.addMember('Selina Salverda', {
  birthdate: 'June 12, 2000',
  birthCity: 'Nieuwegein',
  birthProvince: 'Utrecht',
  birthCountry: 'Netherlands',
  maidenName: '',
  spouse: '',
  alternativeNames: [],
  dateOfDeath: ''
});

tree.addMember('Colin Van der Wal', {
  birthdate: 'November 7, 2024',
  birthCity: 'Bolsward',
  birthProvince: 'Friesland',
  birthCountry: 'Netherlands',
  maidenName: '',
  spouse: '',
  alternativeNames: [],
  dateOfDeath: ''
});

tree.addMember('Jetse Jan Salverda', {
  birthdate: 'June 10, 1970',
  birthCity: 'Joure',
  birthProvince: 'Friesland',
  birthCountry: 'Netherlands',
  maidenName: '',
  spouse: 'Susan Cordes',
  alternativeNames: ['Jetse'],
  dateOfDeath: ''
});

tree.addMember('Terrance Forcier', {
  birthdate: 'March 30, 1943',
  birthCity: 'Vancouver',
  birthProvince: 'British Columbia',
  birthCountry: 'Canada',
  maidenName: '',
  spouse: 'Bonnie Forcier',
  alternativeNames: ['Terry'],
  dateOfDeath: ''
});

tree.addMember('Bonnie Forcier', {
  birthdate: 'April 20, 1947',
  birthCity: 'Golden',
  birthProvince: 'British Columbia',
  birthCountry: 'Canada',
  maidenName: 'Henry',
  spouse: 'Terrance Forcier',
  alternativeNames: [],
  dateOfDeath: ''
});

tree.addMember('Debra Salverda', {
  birthdate: 'April 11, 1973',
  birthCity: 'Quesnel',
  birthProvince: 'British Columbia',
  birthCountry: 'Canada',
  maidenName: 'Forcier',
  spouse: 'Menno Salverda',
  alternativeNames: ['Deb', 'Debi'],
  dateOfDeath: ''
});

tree.addMember('Lori Molloy', {
  birthdate: 'April 11, 1974',
  birthCity: 'Quesnel',
  birthProvince: 'British Columbia',
  birthCountry: 'Canada',
  maidenName: 'Forcier',
  spouse: 'Kevin Molloy',
  alternativeNames: [],
  dateOfDeath: ''
});

tree.addMember('Kevin Molloy', {
  birthdate: 'October 5, 1973',
  birthCity: 'Craigavon',
  birthProvince: 'Armagh',
  birthCountry: 'Northern Ireland',
  maidenName: '',
  spouse: 'Lori Molloy',
  alternativeNames: [],
  dateOfDeath: ''
});

tree.addMember('Keeva Lee Molloy', {
  birthdate: 'July 17, 2009',
  birthCity: 'Craigavon',
  birthProvince: 'Armagh',
  birthCountry: 'Northern Ireland',
  maidenName: '',
  spouse: '',
  alternativeNames: [],
  dateOfDeath: ''
});

tree.addMember('Rowan Salverda', {
  birthdate: 'February 21, 2002',
  birthCity: 'Arnhem',
  birthProvince: 'Gelderland',
  birthCountry: 'Netherlands',
  maidenName: '',
  spouse: '',
  alternativeNames: ['Rowan Lori'],
  dateOfDeath: ''
});

tree.addMember('Ashlinn Salverda', {
  birthdate: 'December 31, 2003',
  birthCity: 'Penticton',
  birthProvince: 'British Columbia',
  birthCountry: 'Canada',
  maidenName: '',
  spouse: '',
  alternativeNames: [],
  dateOfDeath: ''
});

// ===== Add parent-child relationships =====

// Gerrit + Janny -> Menno, Henk, Jetse Jan
tree.addParentChildRelationship('Gerrit Salverda', 'Menno Salverda');
tree.addParentChildRelationship('Janny Salverda', 'Menno Salverda');

tree.addParentChildRelationship('Gerrit Salverda', 'Henk Salverda');
tree.addParentChildRelationship('Janny Salverda', 'Henk Salverda');

tree.addParentChildRelationship('Gerrit Salverda', 'Jetse Jan Salverda');
tree.addParentChildRelationship('Janny Salverda', 'Jetse Jan Salverda');

// Menno + Debra -> Rowan, Ashlinn
tree.addParentChildRelationship('Menno Salverda', 'Rowan Salverda');
tree.addParentChildRelationship('Debra Salverda', 'Rowan Salverda');

tree.addParentChildRelationship('Menno Salverda', 'Ashlinn Salverda');
tree.addParentChildRelationship('Debra Salverda', 'Ashlinn Salverda');

// Henk + Leny -> Melissa, Selina
tree.addParentChildRelationship('Henk Salverda', 'Melissa Salverda');
tree.addParentChildRelationship('Leny Salverda', 'Melissa Salverda');

tree.addParentChildRelationship('Henk Salverda', 'Selina Salverda');
tree.addParentChildRelationship('Leny Salverda', 'Selina Salverda');

// Selina -> Colin
tree.addParentChildRelationship('Selina Salverda', 'Colin Van der Wal');

// Terrance + Bonnie -> Debra, Lori
tree.addParentChildRelationship('Terrance Forcier', 'Debra Salverda');
tree.addParentChildRelationship('Bonnie Forcier', 'Debra Salverda');

tree.addParentChildRelationship('Terrance Forcier', 'Lori Molloy');
tree.addParentChildRelationship('Bonnie Forcier', 'Lori Molloy');

// Lori + Kevin -> Keeva Lee
tree.addParentChildRelationship('Lori Molloy', 'Keeva Lee Molloy');
tree.addParentChildRelationship('Kevin Molloy', 'Keeva Lee Molloy');

// ===== Example outputs =====

console.log('Dependants of Gerrit Salverda:');
console.log(tree.getDependant('Gerrit Salverda'));

console.log('\nDependants of Janny Salverda:');
console.log(tree.getDependant('Janny Salverda'));

console.log('\nDependants of Menno Salverda:');
console.log(tree.getDependant('Menno Salverda'));

console.log('\nDependants of Henk Salverda:');
console.log(tree.getDependant('Henk Salverda'));

console.log('\nDependants of Selina Salverda:');
console.log(tree.getDependant('Selina Salverda'));

console.log('\nDetails for Rowan Salverda:');
console.log(tree.displayPerson('Rowan Salverda'));

console.log('\nDetails for Debra Salverda:');
console.log(tree.displayPerson('Debra Salverda'));