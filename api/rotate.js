let turn = 0;

const asesores = [
  "https://wa.me/573142783363",
  "https://wa.me/573228125466"
  
];

export default function handler(req, res) {
  const url = asesores[turn];
  turn = (turn + 1) % asesores.length;

  res.status(200).json({ url });
}
