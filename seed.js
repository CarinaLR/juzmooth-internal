const {db} = require('./server/db')
const {green, red} = require('chalk')
const Student = require('./server/db/models/Student')
const Campus = require('./server/db/models/Campus')

const students = [{
  firstName: 'Patricio',
  lastName: 'Lopez',
  email: 'plopez@gmail.com',
  gpa: 3.4
},{
  firstName: 'Mercy',
  lastName: 'Rodriguez',
  email: 'mrodriguezz@gmail.com',
  gpa: 3.4
},{
  firstName: 'Ivonne',
  lastName: 'Lopez',
  email: 'ilopez@gmail.com',
  gpa: 3.4
},{
  firstName: 'Jorge',
  lastName: 'Jaramillo',
  email: 'jjaramillo@gmail.com',
  gpa: 3.4
}]

const compuses = [{
  name: 'City College',
  address: '138 Street',
  description: 'Software engineer'
},{
  name: 'Sunny College',
  address: '199 Street',
  description: 'Electrical engineer'
},{
  name: 'County College',
  address: '200 Street',
  description: 'Civil engineer'
},{
  name: 'Street College',
  address: '210 Street',
  description: 'Electrical engineer'
}]

const seed = async () => {
  await db.sync({force: true})

  // seed your database here!

  await Promise.all(students.map((student) => {
    return Student.create(student)
  }))

  await Promise.all(compuses.map((campus) => {
    return Campus.create(campus)
  }))
  

  console.log(green('Seeding success!'))
  db.close()
}

seed()
  .catch(err => {
    console.error(red('Oh noes! Something went wrong!'))
    console.error(err)
    db.close()
  })
