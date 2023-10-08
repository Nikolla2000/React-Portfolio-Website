const funFacts = [
  "The first computer programmer was Ada Lovelace in the 1800s.",
  "The term 'bug' in computer science originated when a moth got trapped inside a computer and caused a malfunction.",
  "The world's first computer mouse was made of wood.",
  "The most popular programming language in the world is JavaScript.",
  "The first video game, 'Tennis for Two,' was created in 1958.",
  "The QWERTY keyboard layout was designed to slow down typists and prevent jamming on early typewriters.",
  "The first domain name ever registered was 'symbolics.com.'",
  "The average computer mouse travels about 1.5 miles (2.4 kilometers) in a week of regular use.",
];

const instructions = [
  {
    id: '1',
    message: "Hi, I'm Nikola's Chatbot, do you need some help?",
    trigger: 'ask-help',
  },
  {
    id: 'ask-help',
    options: [
      { value: 'Yes', label: 'Yes', trigger: 'ask-name' },
      { value: 'No', label: 'No, thanks', trigger: 'help-no' },
    ],
  },
  {
    id: 'ask-name',
    message:'Great, what is your name?',
    trigger: 'name'
  },
  {
    id: 'name',
    user: true,
    trigger: 'yes-response'
  },
  {
    id: 'yes-response',
    message: "Nice to meet you {previousValue}! How can I help you?",
    trigger: 'yes-follow-up'
  },
  {
    id: 'help-no',
    message: "Alright then! If you need assistance later, feel free to ask. Goodbye!",
  },
  {
    id: 'yes-follow-up',
    options: [
      { value: 'Skills', label: 'Tell me more about your skills and experience.', trigger: 'skills' },
      { value: 'Website', label: 'How did you make this website?', trigger: 'how' },
      { value: 'Contact', label: 'How can I contact you?', trigger: 'contact' },
      { value: 'Fact', label: 'Share a fun coding fact', trigger: 'fact' },
    ],
  },
  {
    id: 'skills',
    message: "I'm skilled in frontend development using HTML, CSS, JavaScript, and React. I'm also familiar with backend technologies like Node.js, Express.js, and MongoDB, allowing me to work on full-stack applications.I've completed hands-on projects, including a Pizzeria website with online ordering and real-time order tracking. You can view my work on my GitHub profile",
    trigger: 'anything-else'
  },
  {
    id: 'how',
    message: 'I built my MERN Portfolio website using React for the frontend and Node.js with Express for the backend. MongoDB serves as the database. The site\'s frontend is deployed on Netlify and the backend to Render.',
    trigger: 'anything-else'
  },
  {
    id: 'contact',
    message: 'You can reach out to me through email at nikolla.uzunov@gmail .com or at my phone number - 089 947 0320',
    trigger: 'anything-else'
  },
  {
    id: 'fact',
    message: () => {
      const randomIndex = Math.floor(Math.random() * funFacts.length);
      return funFacts[randomIndex];
    },
    trigger: 'anything-else'
  },
  {
    id: 'anything-else',
    message: 'Is there anything else I can help you with?',
    trigger: 'more-help'
  },
  {
    id: 'more-help',
    options: [
      { value: 'Yes', label: 'Yes', trigger: 'yes-follow-up' },
      { value: 'No', label: 'No', trigger: 'help-no' },
    ]
  }
];

export default instructions;
