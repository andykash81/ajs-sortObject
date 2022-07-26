import orderByProperty from '../sort';

const swordsman = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};

test('Correct work function', () => {
  const testFunction = orderByProperty(swordsman, ['defence', 'attack']);
  const correct = [
    { key: 'defence', value: 40 },
    { key: 'attack', value: 80 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ];
  expect(testFunction).toEqual(correct);
});
