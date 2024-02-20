//1.
let num1 = [];
for (let i = 20;i<=30;i+=0.5){
    num1.push(i);
}
document.write("1. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….) : " + num1.join("  ") + "<br><br>");

//2.
let num2 = [];
for (let i = 10;i<=100;i+=10){
    num2.push(i*27);
}
document.write("2. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів : " + num2.join(", ") + "<br><br>");

//3.
function parseInt(){
    let numN = +prompt("Введіть число N: ");
    let num3 = [];
    for (let i = 1;i<=100;i++){
       if (i**2 <= numN){
          num3.push(i);
       }
    }
    document.write("3. Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N : " + num3.join("  ") + "<br><br>");
}
parseInt();

//4.
function isPrime(){
    let count = 0;
    let num = +prompt("Введіть число для перевірки на простоту: ");
    for(let i=1;i<=num;i++){
        if(num%i == 0){
            count++;
        }
    }
    if(count > 2){
        document.write(`4. ${num} не є простим числом` +"<br><br>");
    }
    else{
        document.write(`4. ${num} є простим числом` + "<br><br>");
    }
}
isPrime();

//цикл 5
function isPowerOf3(){
    let num = +prompt("Введіть число для перевірки: ");
    let result = false;
    for(let i=1;i<=num;i*=3){
        if(i===num){
            result = true;
            break;
        }
    }
    if (result){
        document.write(`5. ${num} можна отримати шляхом зведення числа 3 у деякий ступінь` + "<br><br>");
    }
    else{
        document.write(`5. ${num} не можна отримати шляхом зведення числа 3 у деякий ступінь` + "<br><br>");
    }
}
isPowerOf3();