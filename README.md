# Family Tree Assignment

This project is a family tree assignment built in JavaScript using a tree data structure. A tree is a hierarchical data structure made up of nodes. In this project, each person is represented as a node, and parent-child relationships connect the nodes together. This is an assignment for the Circuit Stream Software Development Bootcamp. 

## Purpose

The purpose of this project is to:

- represent family members and their personal information
- create parent-child relationships
- update person details
- find all dependants of a selected person
- demonstrate tree traversal
- use a test-driven development approach

## Data Structure Used

This project uses a tree structure.

Each person contains:

- `name`
- `birthdate`
- `birthCity`
- `birthProvince`
- `birthCountry`
- `maidenName`
- `spouse`
- `alternativeNames`
- `dateOfDeath`
- `children`
- `parents`

The `FamilyTree` class stores all people in a `Map`, which allows fast lookup by name.

## Functions

### `addMember(name, details)`
Adds a new person to the family tree.

### `getPerson(name)`
Returns the person object for the given name.

### `updateMember(name, updatedFields)`
Updates details for an existing person.

### `addParentChildRelationship(parentName, childName)`
Creates a parent-child relationship between two existing people.

### `getDependant(name)`
Returns all descendants of a chosen person using depth-first traversal.

### `displayPerson(name)`
Returns a formatted object containing all stored details for a person, including their parents and children.

## Validation

This project includes validation to ensure that:

- a person cannot be their own parent
- duplicate parent-child relationships are not allowed
- cycles cannot be created in the tree
- `alternativeNames` must be an array

## Installation

Install dependencies with:

```bash
npm install