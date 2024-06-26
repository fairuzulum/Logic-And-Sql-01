
# Proyek Algoritma dan Query SQL

Proyek ini berisi solusi untuk beberapa soal pemrograman dalam JavaScript dan query SQL. Setiap soal memiliki deskripsi dan solusi yang telah diimplementasikan.

## Solusi JavaScript

### Soal 1
#### Deskripsi
Buat algoritma untuk menampilkan angka 1 s/d \( n \) dengan ketentuan:
- Kelipatan 3 diganti "OK"
- Kelipatan 4 diganti "YES"
- Kelipatan 3 & 4 diganti "OKYES"

#### Solusi

```javascript
function tampilkanAngka(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 4 === 0) {
            console.log('OKYES');
        } else if (i % 3 === 0) {
            console.log('OK');
        } else if (i % 4 === 0) {
            console.log('YES');
        } else {
            console.log(i);
        }
    }
}

tampilkanAngka(15);  
```

### Soal 2

```
1
22
333
4444
55555
```
```
1
21
321
4321
54321
```
```
1
23
454
3212
34543
```
```
1 10 11 20 21
2 9 12 19 22
3 8 13 18 23
4 7 14 17 24
5 6 15 16 25
```

#### Solusi

```javascript
function tampilkanPola(n) {
    for (let i = 1; i <= n; i++) {
        let baris = '';
        for (let j = 0; j < i; j++) {
            baris += i;
        }
        console.log(baris);
    }
}
tampilkanPola(5); 
```
```javascript
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
```
```javascript
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
```
```javascript
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
```

### Soal 3
#### Deskripsi
Diberikan array, buang semua nilai yang merupakan kelipatan dari tiga dan urutkan sisanya secara ascending:
- Input: `n = [12, 9, 13, 6, 10, 4, 7, 2]`
- Output: `n = [2, 4, 7, 10, 13]`

#### Solusi

```javascript
function saringDanUrutkanArray(arr) {
    const hasil = arr.filter(angka => angka % 3 !== 0);
    hasil.sort((a, b) => a - b);
    return hasil;
}

const n = [12, 9, 13, 6, 10, 4, 7, 2];
console.log(saringDanUrutkanArray(n)); 
```

## Solusi SQL

### Query 1
#### Deskripsi
Tampilkan data barang dengan harga lebih besar dari 10.000 urutkan berdasarkan harga satuan secara ascending.

#### Solusi

```sql
SELECT * FROM barang WHERE HARGA_SATUAN > 10000 ORDER BY HARGA_SATUAN ASC;
```

### Query 2
#### Deskripsi
Tampilkan data pelanggan yang namanya mengandung huruf 'g' dengan alamat di BANDUNG.

#### Solusi

```sql
SELECT * FROM pelanggan WHERE NAMA LIKE '%g%' AND ALAMAT = 'BANDUNG';
```

### Query 3
#### Deskripsi
Tampilkan seluruh data transaksi dengan nama pelanggan dan nama barang.

#### Solusi

```sql
SELECT t.KODE, t.TANGGAL, p.NAMA AS NAMA_PELANGGAN, b.NAMA AS NAMA_BARANG, t.JUMLAH_BARANG, (t.JUMLAH_BARANG * b.HARGA_SATUAN) AS TOTAL
FROM transaksi t
JOIN pelanggan p ON t.KODE_PELANGGAN = p.KODE
JOIN barang b ON t.KODE_BARANG = b.KODE;
```

### Query 4
#### Deskripsi
Tampilkan rekap data nama, jumlah dan total harga pembelian per pelanggan.

#### Solusi

```sql
SELECT p.NAMA AS NAMA_PELANGGAN, SUM(t.JUMLAH_BARANG) AS JUMLAH, SUM(t.JUMLAH_BARANG * b.HARGA_SATUAN) AS TOTAL_HARGA
FROM transaksi t
JOIN pelanggan p ON t.KODE_PELANGGAN = p.KODE
JOIN barang b ON t.KODE_BARANG = b.KODE
GROUP BY p.NAMA;
```

---
