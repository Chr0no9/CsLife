
const events = [
  {
    id: "car_breakdown",
    title: "Car Breakdown",
    description: "Your car breaks down before midterms.",
    choices: [
      {
        text: "Pay $300",
        effects: { money: -300, happiness: -5 }
      },
      {
        text: "Ignore it",
        effects: { happiness: -10, social: -5 }
      }
    ]
  },
];