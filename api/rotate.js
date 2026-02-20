let turn = 0;

const asesores = [
  "https://wa.me/573133262197?text=Hola%2C%20Mafe%2C%20deseo%20m%C3%A1s%20informaci%C3%B3n%2C%20por%20favor",
  "https://wa.me/573228125466?text=Hola%2C%20Leidy%2C%20deseo%20m%C3%A1s%20informaci%C3%B3n%2C%20por%20favor"
  
];

export default function handler(req, res) {
  const url = asesores[turn];
  turn = (turn + 1) % asesores.length;

  res.status(200).json({ url });
}
