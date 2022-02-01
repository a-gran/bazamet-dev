import './styles/index.scss'

const userStack = {
  language: 'JavaScript',
  framework: 'Angular',
}

const user = {
  name: 'Aristarh',
  age: '38',
  ...userStack,
}

console.log(user)
