// Função do desafio "Plus Minus"

function plusMinus(arr) {
  let n = arr.length
  let pos = 0;
  let zero = 0;
  let neg = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      pos += 1;
    } else if (arr[i] < 0) {
      neg += 1;
    } else {
      zero += 1;
    }
  }

  console.log(pos = pos / n);
  console.log(neg = neg / n);
  console.log(zero = zero / n);
}