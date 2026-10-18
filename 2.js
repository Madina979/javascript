// 6. Списки
// 51 
let list1 = [1, 2, 3, 4, 5]
console.log(list1.reduce((sum , num) => sum + num , 0))

//52 
let list2 = [23, 21, 78, 42, 12]
let max = list2[0]
for (let i = 1; i < list2.length; i++){
    if (list2[i] > max){
        max = list2[i]
    }
}
console.log(max)

//53 
let list3 = [23, 21, 78, 42, 12]
let min = list3[0]
for (let i = 1; i < list3.length; i++){
    if (list3[i] < min){
        min = list3[i]
    }
}
console.log(min)

//54 
let list4 = [1, 5, 2, 8, 3, 4, 6]
let count = 0
for (let i = 0; i < list4.length; i++){
    if (list4[i] % 2 === 0){
        count +=1
    }
}
console.log(count)

//55 
let list5 = [1, 2, 3, 4, 5, 6]
let new_list = []
for (let i = 0; i < list5.length; i++){
    if (list5[i] % 2 === 1){
        new_list.push(list5[i])
    }
}
console.log(new_list)

//56 
let list6 = [12, 23, 34, 45]
let n_list = list6.filter(num => num >= 0)
console.log(n_list)

//57 
let list7 = [1, 2, 3, 4, 5]
let new_l = []
for (let i = list7.length - 1; i >= 0; i--){
    new_l.push(list7[i])
}
console.log(new_l)

//58
let list8 = [12, 45, 7, 89, 34, 67]
let max1 = 0
let max2 = 0
for (let i = 0; i < list8.length; i++) {
    if (list8[i] > max1) {
        max2 = max1
        max1 = list8[i]
    } else if (list8[i] > max2 && list8[i] < max1) {
        max2 = list8[i]
    }
}
console.log(max2);

//59 
let list9 = [34, 45, 56, 23, 45, 78, 23]
let n_list9 = []
for (let i = 0; i < list9.length; i++){
    if (!n_list9.includes(list9[i])){
        n_list9.push(list9[i])
    }
}
console.log(n_list9)

//60 
let list10 = [1, 2, 3, 4]
let list = [3, 4, 5, 6]
let new_list10 = []
for (let i = 0; i < list10.length; i++){
    if (!list.includes(list10[i])){
        new_list10.push(list10[i])
    }
}
console.log(new_list10)

//7. tuple, set, dict
//61 
const tuple = [12, 45, 7, 89, 34, 67, 23, 56, 91, 18];
console.log(Math.max(...tuple));

//62 
let listt = [1, 2, 2, 3, 4, 5, 6, 4, 5]
let new_set = new Set(listt)
console.log(new_set)

//63 
let set1 = new Set([1, 2, 3, 4])
let set2 = new Set([3, 4, 5, 6])
let new_s = new Set()
for (let element of set1){
    if (set2.has(element)){
        new_s.add(element)
    }
}
console.log(new_s)

//64 
let set3 = new Set([1, 2, 3, 4, 5])
let set4 = new Set([3, 4, 5, 6, 7])
let new_st = new Set()
for (let element of set3){
    if (!set4.has(element)){
        new_st.add(element)
    }
}
console.log(new_st)

//65 
let dic1 = {
    Name : "Madina",
    Age : 15,
    City : "Nukus"
}
console.log(dic1)

//66 
let dic2 = {
    Name : "Madina",
    Age : 15,
    City : "Nukus"
}
dic2.Country = "Uzbekistan"
console.log(dic2)

//67 
let dic3 = {
    Name : "Madina",
    Age : 15,
    City : "Nukus"
}
delete dic3.City
console.log(dic3)

//68 
let st = "javascript"
let dict = {}
for (let ch of st){
    if (dict[ch]){
        dict[ch] += 1
    } else {
        dict[ch] = 1
    }
}
console.log(dict)

//69
let str = "apple banana pineapple apple banana grape"
let dic = {}
let words = str.split(" ")
for (word of words){
    if (dic[word]){
        dic[word] += 1
    } else {
        dic[word] = 1
    }
}
console.log(dic)

//70 
let dictionary = {
    apple: 5,
    banana: 8,
    grape: 3,
    orange: 10
}
let maxx = 0
let max_key = ""
for (let key in dictionary){
    if (dictionary[key] > maxx){
        maxx = dictionary[key]
        max_key = key
    }
}
console.log(max_key)

//8. Функции
//71
function add(a, b){
    return a + b
}
console.log(add(2, 4))

//72
function isEven(n){
    if (n % 2 === 0){
        return "Чётное число"
    } else {
        return "Нечётное число"
    }
}
console.log(isEven(8))

//73 
function findMax(a, b, c){
    if (a >= b && a >= c){
        return a
    } else if (b >= a && b >= c){
        return b
    } else {
        return c
    }
}
console.log(findMax(5, 6, 7))

//74 
function factorial(n){
    let result = 1
    for (let i = 1; i <= n; i++) {
        result *= i
    }
    return result
}
console.log(factorial(5))

//75 
function isPrime(n){
    if (n < 2) {
        return false
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}
console.log(isPrime(7))
console.log(isPrime(8))

//76 
function countV(text){
    let vowels = "aeiou"
    let c = 0
    for (let letter of text.toLowerCase()) {
        if (vowels.includes(letter)) {
            c++
        }
    }
    return c
}
console.log(countV("Hello world"))

//77
function reverseS(text){
    return text.split("").reverse().join("")
}
console.log(reverseS("hello world"))

//78 
function average(numbers){
    let sum = 0
    for (let n of numbers) {
        sum += n
    }
    return sum / numbers.length
}
console.log(average([1, 23, 4, 56, 6]))

//79
function sum(...numbers) {
    let result = 0;
    for (let n of numbers) {
        result += n
    }
    return result
}
console.log(sum(1, 23, 4, 56, 6))

//80 
function userInfo({ name, age, city }) {
    console.log(`name: ${name}`)
    console.log(`age: ${age}`)
    console.log(`city: ${city}`)
}
userInfo({
    name: "Ali",
    age: 18,
    city: "Nukus"
});

//9. List comprehension, lambda, map, filter
//81
const squares = [];
for (let i = 1; i <= 20; i++) {
    squares.push(i ** 2)
}
console.log(squares)

//82
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let evenNum = numbers.filter(num => num % 2 === 0)
console.log(evenNum)

//83 
let text = ["python", "javascript", "html", "css", "typescript"]
let wordsL = text.map(word => word.length)
console.log(wordsL)

//84 
let text2 = ["python", "javascript", "html", "css", "typescript"]
text2.sort((a, b) => a.length - b.length)
console.log(text2)

//85 
let number = [1, 2, 3, 4, 5, 6]
let new_n = number.map(num => num * 2)
console.log(new_n)

//86 
let num = [-1, -3, 0, 4, -2, 8]
let nums = num.filter(num => num > 0)
console.log(nums)

//87
let text3 = ["python", "javascript", "html", "css", "typescript"]
let text4 = text3.filter(words => words.length > 5)
console.log(text4)

//88 
let number2 = ["12", "25", "30", "45"]
let newNumbers = number2.map(Number)
console.log(newNumbers)

//89
let users = [
    { name: "Ali", age: 20 },
    { name: "Sara", age: 16 },
    { name: "John", age: 25 },
    { name: "Anna", age: 18 }
]
users.sort((a, b) => a.age - b.age)
console.log(users)

//90 
let peoples = [
    { name: "Ali", age: 20 },
    { name: "Sara", age: 16 },
    { name: "John", age: 25 },
    { name: "Anna", age: 18 }
]
let adults = peoples.filter(user => user.age > 18).map(user => user.name)
console.log(adults)

//10. ООП, файлы, исключения и мини-задачи
//91
class User {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    showInfo(){
        console.log(`Name: ${this.name}`)
        console.log(`Age: ${this.age}`)
    }
}
let user1 = new User("Sarah", 19)
user1.showInfo()

//92
class Car {
    constructor(brand, model, year){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    showInfo(){
        console.log(`Brand: ${this.brand}`)
        console.log(`Model: ${this.model}`)
        console.log(`Year: ${this.year}`)
    }
}
let car1 = new Car("BMW", "M5", 2024)
car1.showInfo()

//93
class BankAccount {
    constructor(balance){
        this.balance = balance;
    }
    deposit(amount){
        this.balance += amount;
    }
    withdraw(amount){
        this.balance -= amount;
    }
}
let acc = new BankAccount(4500)
acc.deposit(500)
acc.withdraw(200)
console.log(acc)

//94
class Product {
    constructor(name, price, quantity){
        this.name = name; 
        this.price = price;
        this.quantity = quantity;
    }
    showInfo(){
        console.log(`Name: ${this.name}`)
        console.log(`Price: ${this.price}`)
        console.log(`Quantity: ${this.quantity}`)
    }
}
let product = new Product("Banana", 25000 , 5)
product.showInfo()

//95
class Employee {
    constructor(name, salary){
        this.name = name;
        this.salary = salary;
    }
    calc_salary(){
        return this.salary
    }
}
class Developer extends Employee {
    constructor(name, salary, language) {
        super(name, salary);
        this.language = language;
    }
}
let dev = new Developer("Madina", 5000, "Python")
console.log(dev.name)
console.log(dev.calc_salary())
console.log(dev.language)

//96
const fs = require("fs")
let user = ["Ali", "Sara", "John", "Anna"]
fs.writeFileSync("users.txt", user.join("\n"))
console.log("Users saved to file!")

//97
const fs = require("fs") 
fs.readline("users.txt", "utf8", (error, data) => {
    if (error){
        console.log("error")
        return
    } 
    let lines = data.split("\n") 
    console.log("Number of lines: ", lines.length)  
})

//98 
let num1 = 20;
let num2 = 0;
try {
    if (num2 === 0) {
        throw new Error("Division by zero is not allowed!")
    }
    console.log(num1 / num2)
} catch (error) {
    console.log(error.message)
}

//99 
let inventory = []
function addProduct(name) {
    inventory.push(name)
    console.log(name + " added!")
}

function deleteProduct(name) {
    inventory = inventory.filter(product => product !== name)
    console.log(name + " deleted!")
}

function showInventory() {
    console.log(inventory)
}

addProduct("Laptop")
addProduct("Mouse")
showInventory()
deleteProduct("Mouse")
showInventory()

//100
const fs = require("fs")
let tasks = []

function addTask(task) {
    tasks.push({ name: task, completed: false })
}

function showTasks() {
    console.log(tasks)
}

function deleteTask(taskName) {
    tasks = tasks.filter(task => task.name !== taskName)
}

function completeTask(taskName) {
    let task = tasks.find(task => task.name === taskName)

    if (task) {
        task.completed = true;
    }
}

function saveTasks() {
    fs.writeFileSync("tasks.json", JSON.stringify(tasks, null, 2))
}
addTask("Learn JavaScript")
addTask("Practice SQL")
completeTask("Learn JavaScript")
deleteTask("Practice SQL")
showTasks()
saveTasks()