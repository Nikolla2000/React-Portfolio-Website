const inputConfigurations = [
  {
    name: 'firstName',
    type: 'text',
    minLength: 2,
    maxLength: 20
  },
  {
    name: 'lastName',
    type: 'text',
    minLength: 2,
    maxLength: 20
  },
  {
    name: 'email',
    type: 'email'
  },
  {
    name: 'subject',
    type: 'text',
    minLength: 5,
    maxLength: 100
  }, 
  {
    name:'message',
    type: 'textarea',
    minLength:10,
    maxLength:500
  }
]

export default inputConfigurations