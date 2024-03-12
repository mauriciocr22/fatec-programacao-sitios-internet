// Função do desafio "mini-max Sum"

function miniMaxSum(arr) {
  // Write your code here
  let min = 0;
  let max = 0;
  let aux = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        aux = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = aux;
      }
    }
  }

  for (let i = 0; i < arr.length - 1; i++) {
    min += arr[i];
  }
  for (let i = 1; i < arr.length; i++) {
    max += arr[i];
  }

  console.log(min, max);
}