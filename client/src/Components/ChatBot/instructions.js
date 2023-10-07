const instructions = [
  {
    id: '1',
    message: "Hi, I'm Nikola's Chatbot, do you need some help?",
    trigger: 'ask-help',
  },
  {
    id: 'ask-help',
    options: [
      { value: 'Yes', label: 'Yes, please', trigger: 'yes-responce' },
      { value: 'No', label: 'No, thanks', trigger: 'help-no' },
    ],
  },
  {
    id: 'yes-responce',
    message: "Great, how can I help you?",
    trigger: 'yes-follow-up'
  },
  {
    id: 'help-no',
    message: "Alright then! If you need assistance later, feel free to ask. Goodbye!",
  },
  {
    id: 'yes-follow-up',
    options: [
      { value: 'Yes', label: 'How to contact you', trigger: 'yes-responce' },
      { value: 'No', label: 'How did you made this website', trigger: 'help-no' },
    ],
  },
];

export default instructions;
