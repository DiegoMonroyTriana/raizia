export function randomColor({ index }: { index: number }) {
  const colors = [
    'prussianBlue',
    'darkGreen',
    'orangeCrayola',
    'goldFusion',
  ]
  return colors[index % colors.length]
}
