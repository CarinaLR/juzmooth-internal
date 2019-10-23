'use strict'

const router = require('express').Router()
const Campus = require('../db/models/Campus')
const Student = require('../db/models/Student')

// Your routes go here!
// NOTE: Any routes that you put here are ALREADY mounted on `/api`
// You can put all routes in this file HOWEVER,
// this file should almost be like a table of contents for the routers you create!
// For example:
//
// For your `/api/puppies` routes:
// router.use('/puppies', require('./puppies'))
//
// And for your `/api/kittens` routes:
// router.use('/kittens', require('./kittens'))

// router.use('/Student', require('./Student'))

// router.use('/Campus', require('./Campus'))

//================STUDENT-ROUTERS===============================

router.get('/students', async (req, res, next) => {
  try {
      const allStudents = await Student.findAll()
      res.json(allStudents)
  } catch (error) {
      console.error(error)
      next(error)
  }
});

router.get('/students/:id', async (req, res, next) => {
  try {
      const studentById = await Student.findById(req.params.id)
      res.json(studentById)
  } catch (error) {
    console.error(error)
    next(error)
  }
});

router.post('/students', async (req, res, next) => {
  try {
    const newStudent = await Student.create(req.body)
    if(newStudent) {
      res.json(newStudent.dataValue)
    }
  } catch (error) {
    console.error(error)
    next(error)
  }
});


router.delete('/students/:id', async (req, res, next) => {
  try {
    const findStudent = await Student.destroy({
      where: {
        id: req.params.id
      }
    })
      res.status(200) 
      res.json(findStudent)
  } catch (error) {
    console.error(error)
    next(error)
  }
});

//===============CAMPUS-ROUTERS==================================

router.get('/campuses', async (req, res, next) => {
  try {
      const allCampuses = await Campus.findAll()
      res.json(allCampuses)
  } catch (error) {
      console.error(error)
      next(error)
  }
});

router.get('/campuses/:id', async (req, res, next) => {
  try {
      const compusById = await Campus.findById(req.params.id)
      res.json(compusById)
  } catch (error) {
    console.error(error)
    next(error)
  }
});

router.post('/campuses', async (req, res, next) => {
  try {
    const newCampus = await Campus.create(req.body)
    if (newCampus) {
      res.json(newCampus.dataValue)
    }
  } catch (error) {
    console.error(error)
    next(error)
  }
});

router.delete('/campuses/:id', async (req, res, next) => {
  try {
    const findCampus = await Campus.destroy({
      where: {
        id: req.params.id
      }
    })
      res.status(200) 
      res.json(findCampus)
  } catch (error) {
    console.error(error)
    next(error)
  }
})

// If someone makes a request that starts with `/api`,
// but you DON'T have a corresponding router, this piece of
// middleware will generate a 404, and send it to your
// error-handling endware!

router.use((req, res, next) => {
  const err = new Error('API route not found!')
  err.status = 404
  next(err)
});

module.exports = router
