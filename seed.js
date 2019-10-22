const {db} = require('./server/db')
const {green, red} = require('chalk')
const Student = require('./server/db/models/Student')
const Campus = require('./server/db/models/Campus')

const students = [{
  firstName: 'Patricio',
  lastName: 'Lopez',
  email: 'plopez@gmail.com',
  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp0BE2G0egbNbhmpORtNK9AO7nsShZxZicFbN50aZsC0MX5E_d',
  gpa: 3.6,
  campusId: 1
},{
  firstName: 'Mercy',
  lastName: 'Rodriguez',
  email: 'mrodriguezz@gmail.com',
  gpa: 3.4,
  campusId: 2
},{
  firstName: 'Ivonne',
  lastName: 'Lopez',
  email: 'ilopez@gmail.com',
  gpa: 3.4,
  campusId: 3
},{
  firstName: 'Jorge',
  lastName: 'Jaramillo',
  email: 'jjaramillo@gmail.com',
  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp0BE2G0egbNbhmpORtNK9AO7nsShZxZicFbN50aZsC0MX5E_d',
  gpa: 3.9,
  campusId: 4
}]

const compuses = [{
  name: 'City College',
  address: '138 Street',
  description: 'BOASTING WORLD-CLASS ACADEMICS, award-winning faculty and both new and enhanced campuses, today’s City University of New York.'
},{
  name: 'Sunny College',
  address: '199 Street',
  description: 'The University must remain responsive to the needs of its urban setting and maintain its close articulation between senior and community college units.'
},{
  name: 'County College',
  address: '200 Street',
  description: 'Twenty years after the first students entered the academy, a second school for the education of teachers, the Female Normal and High School'
},{
  name: 'Street College',
  address: '210 Street',
  description: 'Our mission dates to 1847 when founder Townsend Harris, an early champion of public education and a pioneering diplomat who was the first U.S.”'
}]

const seed = async () => {
  await db.sync()
  //{force: true}

  // seed your database here!
  await Promise.all(compuses.map((campus) => {
    return Campus.create(campus)
  }))

  await Promise.all(students.map((student) => {
    return Student.create(student)
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
