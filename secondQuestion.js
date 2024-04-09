
function fibonacciSequencie(num) {
  const fibonaccieArray = [0, 1]

  for (let i=1; i < 20; i++) {
    fibonaccieArray.push(fibonaccieArray[i] + fibonaccieArray[i - 1])
  }
  if (fibonaccieArray.includes(num)) {
    return 'Está presente na sequencia de fibonaccie'
  } else {
    return 'Não esta presente na sequencia de fibonaccie'
  }
}

console.log(fibonacciSequencie(36))