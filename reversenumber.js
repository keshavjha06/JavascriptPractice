function reverseNumber(num) {
    if (num >= 0 && num <= 9) {
        return num;
    }

    let reversedNum = 0;
    while (num != 0) {
        reversedNum = reversedNum * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return reversedNum;
}

console.log(reverseNumber(12345)); // Output: 54321