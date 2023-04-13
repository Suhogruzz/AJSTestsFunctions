export default function getHealth(character) {
  let health = '';
  switch (true) {
    case character.health >= 50 && character.health <= 100:
      health = 'healthy';
      break;
    case character.health < 50 && character.health >= 15:
      health = 'wounded';
      break;
    default:
      health = 'critical';
      break;
  }
  return health;
}
