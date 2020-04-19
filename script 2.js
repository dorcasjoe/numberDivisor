let output = [];

const numberDivisor = (number) => {
  for (let i=0;i<=number;i++){
    if (i%2==0 && i%3==0 && i%5==0) {
      output = [...output, 'yu-gi-oh'];
    } else if (i%2==0 && i%5==0) {
      output = [...output, 'yu-oh'];
    } else if (i%2==0 && i%3==0) {
      output = [...output, 'yu-gi'];
    } else if (i%3==0 && i%5==0) {
      output = [...output, 'gi-oh'];
    } else if (i%2==0) {
      output = [...output, 'yu'];
    } else if (i%3==0) {
      output = [...output, 'gi'];
    } else if (i%5==0) {
      output = [...output, 'oh'];
    } else {
      output = [...output, i];
    }
  }
  return output;
}

console.log(numberDivisor(100))

