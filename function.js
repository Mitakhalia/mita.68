function jumlahvolumetigatabung(a, b) {
    var volumeA;
    var volumeB;
    var total;

    volumeA = a * a * a;
    volumeB = b * b * b;

    total = volumeA + volumeB;


    return total;
}

console.log(jumlahvolumetigatabung(6, 8));