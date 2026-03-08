const { FamilyTree } = require('./familyTree');

describe('FamilyTree', () => {
  let tree;

  beforeEach(() => {
    tree = new FamilyTree();

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

    tree.addParentChildRelationship('Gerrit Salverda', 'Menno Salverda');
    tree.addParentChildRelationship('Janny Salverda', 'Menno Salverda');

    tree.addParentChildRelationship('Gerrit Salverda', 'Henk Salverda');
    tree.addParentChildRelationship('Janny Salverda', 'Henk Salverda');

    tree.addParentChildRelationship('Gerrit Salverda', 'Jetse Jan Salverda');
    tree.addParentChildRelationship('Janny Salverda', 'Jetse Jan Salverda');

    tree.addParentChildRelationship('Menno Salverda', 'Rowan Salverda');
    tree.addParentChildRelationship('Debra Salverda', 'Rowan Salverda');

    tree.addParentChildRelationship('Menno Salverda', 'Ashlinn Salverda');
    tree.addParentChildRelationship('Debra Salverda', 'Ashlinn Salverda');

    tree.addParentChildRelationship('Henk Salverda', 'Melissa Salverda');
    tree.addParentChildRelationship('Leny Salverda', 'Melissa Salverda');

    tree.addParentChildRelationship('Henk Salverda', 'Selina Salverda');
    tree.addParentChildRelationship('Leny Salverda', 'Selina Salverda');

    tree.addParentChildRelationship('Selina Salverda', 'Colin Van der Wal');

    tree.addParentChildRelationship('Terrance Forcier', 'Debra Salverda');
    tree.addParentChildRelationship('Bonnie Forcier', 'Debra Salverda');

    tree.addParentChildRelationship('Terrance Forcier', 'Lori Molloy');
    tree.addParentChildRelationship('Bonnie Forcier', 'Lori Molloy');

    tree.addParentChildRelationship('Lori Molloy', 'Keeva Lee Molloy');
    tree.addParentChildRelationship('Kevin Molloy', 'Keeva Lee Molloy');
  });

  test('getDependant(name) returns all descendants of Gerrit Salverda', () => {
    expect(tree.getDependant('Gerrit Salverda')).toEqual([
      'Menno Salverda',
      'Rowan Salverda',
      'Ashlinn Salverda',
      'Henk Salverda',
      'Melissa Salverda',
      'Selina Salverda',
      'Colin Van der Wal',
      'Jetse Jan Salverda'
    ]);
  });

  test('getDependant(name) returns all descendants of Menno Salverda', () => {
    expect(tree.getDependant('Menno Salverda')).toEqual([
      'Rowan Salverda',
      'Ashlinn Salverda'
    ]);
  });

  test('getDependant(name) returns all descendants of Henk Salverda', () => {
    expect(tree.getDependant('Henk Salverda')).toEqual([
      'Melissa Salverda',
      'Selina Salverda',
      'Colin Van der Wal'
    ]);
  });

  test('getDependant(name) returns direct descendants of Selina Salverda', () => {
    expect(tree.getDependant('Selina Salverda')).toEqual([
      'Colin Van der Wal'
    ]);
  });

  test('getDependant(name) returns an empty array for a person with no children', () => {
    expect(tree.getDependant('Rowan Salverda')).toEqual([]);
  });

  test('displayPerson returns all stored details for Rowan Salverda', () => {
    expect(tree.displayPerson('Rowan Salverda')).toEqual({
      name: 'Rowan Salverda',
      birthdate: 'February 21, 2002',
      birthCity: 'Arnhem',
      birthProvince: 'Gelderland',
      birthCountry: 'Netherlands',
      maidenName: '',
      spouse: '',
      alternativeNames: ['Rowan Lori'],
      dateOfDeath: '',
      parents: ['Menno Salverda', 'Debra Salverda'],
      children: []
    });
  });

  test('displayPerson returns all stored details for Debra Salverda', () => {
    expect(tree.displayPerson('Debra Salverda')).toEqual({
      name: 'Debra Salverda',
      birthdate: 'April 11, 1973',
      birthCity: 'Quesnel',
      birthProvince: 'British Columbia',
      birthCountry: 'Canada',
      maidenName: 'Forcier',
      spouse: 'Menno Salverda',
      alternativeNames: ['Deb', 'Debi'],
      dateOfDeath: '',
      parents: ['Terrance Forcier', 'Bonnie Forcier'],
      children: ['Rowan Salverda', 'Ashlinn Salverda']
    });
  });

  test('should prevent a person from being their own parent', () => {
    expect(() => {
      tree.addParentChildRelationship('Rowan Salverda', 'Rowan Salverda');
    }).toThrow('A person cannot be their own parent.');
  });

  test('should prevent cycles in the tree', () => {
    expect(() => {
      tree.addParentChildRelationship('Rowan Salverda', 'Gerrit Salverda');
    }).toThrow('Invalid relationship: this would create a cycle in the tree.');
  });
});