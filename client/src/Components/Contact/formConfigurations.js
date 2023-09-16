const inputConfigurations = [
  {
    name: 'first name',
    type: 'text',
    minLength: 2,
    maxLength: 20
  },
  {
    name: 'last name',
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