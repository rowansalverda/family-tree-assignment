class Person {
  constructor(
    name,
    {
      birthdate = '',
      birthCity = '',
      birthProvince = '',
      birthCountry = '',
      maidenName = '',
      spouse = '',
      alternativeNames = [],
      dateOfDeath = ''
    } = {}
  ) {
    if (!name || typeof name !== 'string') {
      throw new Error('Name is required and must be a string.');
    }

    if (!Array.isArray(alternativeNames)) {
      throw new Error('alternativeNames must be an array.');
    }

    this.name = name;
    this.birthdate = birthdate;
    this.birthCity = birthCity;
    this.birthProvince = birthProvince;
    this.birthCountry = birthCountry;
    this.maidenName = maidenName;
    this.spouse = spouse;
    this.alternativeNames = alternativeNames;
    this.dateOfDeath = dateOfDeath;

    this.children = [];
    this.parents = [];
  }
}

class FamilyTree {
  constructor() {
    this.people = new Map();
  }

  addMember(name, details = {}) {
    if (this.people.has(name)) {
      throw new Error(`A person named "${name}" already exists.`);
    }

    const person = new Person(name, details);
    this.people.set(name, person);
    return person;
  }

  getPerson(name) {
    return this.people.get(name) || null;
  }

  updateMember(name, updatedFields) {
    const person = this.getPerson(name);

    if (!person) {
      throw new Error(`Person "${name}" not found.`);
    }

    if (
      updatedFields.alternativeNames !== undefined &&
      !Array.isArray(updatedFields.alternativeNames)
    ) {
      throw new Error('alternativeNames must be an array.');
    }

    Object.assign(person, updatedFields);
    return person;
  }

  addParentChildRelationship(parentName, childName) {
    const parent = this.getPerson(parentName);
    const child = this.getPerson(childName);

    if (!parent || !child) {
      throw new Error('Both parent and child must already exist in the tree.');
    }

    if (parentName === childName) {
      throw new Error('A person cannot be their own parent.');
    }

    const alreadyChild = parent.children.some((c) => c.name === childName);
    if (alreadyChild) {
      throw new Error(`${childName} is already listed as a child of ${parentName}.`);
    }

    const descendantsOfChild = this.getDependant(childName);
    if (descendantsOfChild.includes(parentName)) {
      throw new Error('Invalid relationship: this would create a cycle in the tree.');
    }

    parent.children.push(child);
    child.parents.push(parent);
  }

  getDependant(name) {
    const person = this.getPerson(name);

    if (!person) {
      throw new Error(`Person "${name}" not found.`);
    }

    const result = [];
    const visited = new Set();

    const traverse = (currentPerson) => {
      for (const child of currentPerson.children) {
        if (!visited.has(child.name)) {
          visited.add(child.name);
          result.push(child.name);
          traverse(child);
        }
      }
    };

    traverse(person);
    return result;
  }

  displayPerson(name) {
    const person = this.getPerson(name);

    if (!person) {
      throw new Error(`Person "${name}" not found.`);
    }

    return {
      name: person.name,
      birthdate: person.birthdate,
      birthCity: person.birthCity,
      birthProvince: person.birthProvince,
      birthCountry: person.birthCountry,
      maidenName: person.maidenName,
      spouse: person.spouse,
      alternativeNames: person.alternativeNames,
      dateOfDeath: person.dateOfDeath,
      parents: person.parents.map((parent) => parent.name),
      children: person.children.map((child) => child.name)
    };
  }
}

module.exports = { FamilyTree, Person };