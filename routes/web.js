const express = require('express');

const router = express.Router();
// Programs
const arrow = require('../src/arrow');
const asyncAwait = require('../src/asyncAwait');
const classProgram = require('../src/class');
const destructuring = require('../src/destructuring');
const destructuringObject = require('../src/destructuringObject');
const findIndex = require('../src/findIndex');
const generators = require('../src/generators');
const inheritance = require('../src/inheritance');
const lexical = require('../src/lexical');
const promise = require('../src/promise');
const rest = require('../src/rest');
const spread = require('../src/spread');
const templateLiterals = require('../src/templateLiterals');
const index = require('../app.html');

router.get('/', (req, res) => {
  try {
    res.status(200).json(index);
  } catch (error) {
    console.log(error);
  }
});

router.get('/arrow', (req, res) => {
  try {
    res.status(200).json(arrow);
  } catch (error) {
    console.log(error);
  }
});

router.get('/async-await', (req, res) => {
  try {
    res.status(200).json(asyncAwait);
  } catch (error) {
    console.log(error);
  }
});

router.get('/class-program', (req, res) => {
  try {
    res.status(200).json(classProgram);
  } catch (error) {
    console.log(error);
  }
});

router.get('/destructuring', (req, res) => {
  try {
    res.status(200).json(destructuring);
  } catch (error) {
    console.log(error);
  }
});

router.get('/destructuring-object', (req, res) => {
  try {
    res.status(200).json(destructuringObject);
  } catch (error) {
    console.log(error);
  }
});

router.get('/find-index', (req, res) => {
  try {
    res.status(200).json(findIndex);
  } catch (error) {
    console.log(error);
  }
});

router.get('/generators', (req, res) => {
  try {
    res.status(200).json(generators);
  } catch (error) {
    console.log(error);
  }
});

router.get('/inheritance', (req, res) => {
  try {
    res.status(200).json(inheritance);
  } catch (error) {
    console.log(error);
  }
});

router.get('/lexical', (req, res) => {
  try {
    res.status(200).json(lexical);
  } catch (error) {
    console.log(error);
  }
});

router.get('/promise', (req, res) => {
  try {
    res.status(200).json(promise);
  } catch (error) {
    console.log(error);
  }
});

router.get('/rest', (req, res) => {
  try {
    res.status(200).json(rest);
  } catch (error) {
    console.log(error);
  }
});

router.get('/spread', (req, res) => {
  try {
    res.status(200).json(spread);
  } catch (error) {
    console.log(error);
  }
});

router.get('/template-literals', (req, res) => {
  try {
    res.status(200).json(templateLiterals);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
