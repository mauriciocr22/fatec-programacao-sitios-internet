// Função do desafio "Staircase"

function staircase(n) {
  let stair = ''
  for (let i = 1; i <= n; i++) {
    for (let spaces = n - 1; spaces >= i; spaces--) {
      stair += ' '
    }
    for (let hash = 1; hash <= i; hash++) {
      stair += '#'
    }
    stair += "\n"
  }
  console.log(stair)
}