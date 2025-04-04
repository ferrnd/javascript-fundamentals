let = ano = 2025;
if (ano % 400 === 0) {
    console.log(`${ano} é um ano bissexto`);
} else if (ano % 100 === 0) {
    console.log(`${ano} não é um ano bissexto`);
} else if (ano % 4 === 0) {
    console.log(`${ano} é um ano bissexto`);
} else {
    console.log(`${ano} não é um ano bissexto`);
}