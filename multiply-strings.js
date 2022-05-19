const multiply = (num1, num2) => {
    const product = (+num1 * +num2)
    return product.toString()
}

const num1 = 123456789
const num2 = 987654321
console.log(multiply(num1, num2))