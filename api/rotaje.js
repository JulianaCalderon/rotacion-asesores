let current = 0;

const numbers = [
  "5466", 
  "2197"
];

export default function handler(req, res) {
  const number = numbers[current];
  current = (current + 1) % numbers.length;

  res.status(200).json({
    redirect: `https://wa.me/${number}`
  });
}
