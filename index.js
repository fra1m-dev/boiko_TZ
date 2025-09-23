import dotenv from 'dotenv';
dotenv.config();console.log(process.env.MY_VAR) // должно вывести 1234, если переменная есть в .env
let a = 1234;
console.log (a)
console.log(process.env)

