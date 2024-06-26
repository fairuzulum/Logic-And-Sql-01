-- Query untuk menampilkan data barang dengan harga lebih besar dari 10.000 dan urutkan secara ascending:
SELECT * FROM barang WHERE HARGA_SATUAN > 10000 ORDER BY HARGA_SATUAN ASC;

-- Query untuk menampilkan data pelanggan yang namanya mengandung huruf 'g' dengan alamat di BANDUNG:
SELECT * FROM pelanggan WHERE NAMA LIKE '%g%' AND ALAMAT = 'BANDUNG';

-- Query untuk menampilkan seluruh data transaksi dengan nama pelanggan dan nama barang:
SELECT t.KODE, t.TANGGAL, p.NAMA AS NAMA_PELANGGAN, b.NAMA AS NAMA_BARANG, t.JUMLAH_BARANG, (t.JUMLAH_BARANG * b.HARGA_SATUAN) AS TOTAL
FROM transaksi t
JOIN pelanggan p ON t.KODE_PELANGGAN = p.KODE
JOIN barang b ON t.KODE_BARANG = b.KODE;

-- Query untuk menampilkan rekap data nama, jumlah dan total harga pembelian per pelanggan:
SELECT p.NAMA AS NAMA_PELANGGAN, SUM(t.JUMLAH_BARANG) AS JUMLAH, SUM(t.JUMLAH_BARANG * b.HARGA_SATUAN) AS TOTAL_HARGA
FROM transaksi t
JOIN pelanggan p ON t.KODE_PELANGGAN = p.KODE
JOIN barang b ON t.KODE_BARANG = b.KODE
GROUP BY p.NAMA;
