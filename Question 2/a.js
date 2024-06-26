function tampilkanPola(n) {
    let result = '';
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            result += i;
        }
        result += '\n';
    }
    console.log(result.trim());
}

displayNumbersA(5);
