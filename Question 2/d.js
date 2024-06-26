function tampilkanPola(n) {
    let array = Array.from({ length: n }, () => Array(n).fill(0));

    let value = 1;
    for (let col = 0; col < n; col++) {
        if (col % 2 === 0) {
            for (let row = 0; row < n; row++) {
                array[row][col] = value++;
            }
        } else {
            for (let row = n - 1; row >= 0; row--) {
                array[row][col] = value++;
            }
        }
    }

    for (let row = 0; row < n; row++) {
        let line = '';
        for (let col = 0; col < n; col++) {
            line += array[row][col] + '\t';
        }
        console.log(line.trim());
    }
}

tampilkanPola(5);
