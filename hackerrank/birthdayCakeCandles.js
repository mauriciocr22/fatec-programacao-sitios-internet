// Função do desafio "Birthday Cale Candles"

function birthdayCakeCandles(candles) {
  // Write your code here
  var max = Math.max(...candles);
  var candlesAmount = 0;

  for (var i = 0; i < candles.length; i++) {
    if (candles[i] == max) {
      candlesAmount++
    }
  }

  return candlesAmount;
}