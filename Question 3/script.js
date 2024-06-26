function saringDanUrutkanArray(arr) {
    const hasil = arr.filter(angka => angka % 3 !== 0);
    hasil.sort((a, b) => a - b);
    return hasil;
}

const n = [12, 9, 13, 6, 10, 4, 7, 2];
console.log(saringDanUrutkanArray(n)); 
