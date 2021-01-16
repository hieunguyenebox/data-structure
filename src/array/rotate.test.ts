import { rotate } from './rotate'
test('Simple rotate array', () => {

  const data = [1, 2, 3, 4, 5, 6, 7]
  const d = 2
  rotate(data, d)
  expect(data).toEqual([4, 5, 6, 7, 1, 2, 3])
})