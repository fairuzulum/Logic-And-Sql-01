function tampilkanPola(n) {
    for (let i = 1; i <= n; i++) {
        let num = i;
        let line = '';
        for (let j = 1; j <= i; j++) {
            line += num;
            num++;
        }
        console.log(line);
    }
    console.log();
}

tampilkanPola(5);
