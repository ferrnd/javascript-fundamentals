let salario = 16000
let descontoesperto
if (salario > 2000) {
    descontoesperto = salario * 0.10
} else if (salario <= 2000){
    descontoesperto = salario * 0.05
}
let salariofinal = salario - descontoesperto
console.log(`O salário final é de R$${salariofinal}`)