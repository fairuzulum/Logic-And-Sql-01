function tampilkanPola(n) {
    let result = '';
    for (let i = 1; i <= n; i++) {
        for (let j = i; j >= 1; j--) {
            result += j;
        }
        result += '\n';
    }
    console.log(result.trim());
}

tampilkanPola(5);
