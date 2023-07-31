//task 1
// Напишіть функцію sumSliceArray(arr, first, second), яка приймає масив arr і два
// числа(first и second) – порядкові номери елементів масиву, які необхідно скласти.
// Наприклад, якщо ввели 3 та 5 – сумуються 3 - й та 5 - й елементи.Функція повинна 
// генерувати винятки, якщо були введені не числа, і коли одне з чисел або обидва 
// більшого розміруза довжину масиву.Напишіть код, який використовує цю функцію,
// передбачте обробку можливих винятків.

function sumSliceArray(arr, first, second) {
  if (!Number.isInteger(first) || !Number.isInteger(second)) {                     // чи є first і second числами
    throw new Error("first і second повинні бути числами.");
  }                                     
  if (first < 0 || first >= arr.length || second < 0 || second >= arr.length) {    // чи є first і second у межах довжини масиву 
    throw new Error("first і second повинні бути в межах довжини масиву.");
  }                                     
  let sum = arr[first] + arr[second];                                              // складаем елементи масиву за заданими номерами
  return sum;                                                                      // повертаем суму
}

try {
  let sum = sumSliceArray([1, 2, 3, 4, 5], 2, 4);
  console.log("Сума:", sum);                                                       //сума 9
} catch (e) {                                                                      //якщо ввести не числа, або якщо числа будуть 
                                                                                   //за межами довжини масиву, функція генеруватиме
                                                                                   //виняток, і код не буде виконано
  console.error("Помилка:", e.message);
}
//=====================================================================================

//task 2
// Створіть функцію checkAge(), яка запитує у користувача його ім'я, вік та статус 
// (адмін, модератор, користувач) та генерує модальне вікно з помилкою, якщо: вік 
// користувача менше 18 або більше 70 років(генерується помилка типу RangeError).
// користувач не ввів жодних даних в будь - якому полі(виводиться повідомлення 
// The field is empty! Please enter your age з типом помилки Error).У полі статус 
// введено неправильне слово(тип помилки EvalError).в полі вік введено нечислове значення.
// У всіх інших випадках користувач отримає доступ до перегляду фільму.У блоці catch 
// передбачена можливість виведення назви та опису помилки.

function checkAge() {
let name = prompt("Введіть ваше ім'я:");                                       // запитуємо ім'я, вік та статус
let age = +prompt("Введіть ваш вік:");
let status = prompt("Введіть ваш статус:");                   
if (name === "" || age === "" || status === "") {                              // чи ввів користувач хоча б якісь дані
throw new Error("The field is empty! Please enter your age"); 
}                                       
if (age < 18 || age > 70) {                                                    // перевіряємо, чи вік в допустимому діапазоні
throw new RangeError("Invalid age");
}                                       
if (status !== "admin" && status !== "moderator" && status !== "user") {       // чи статус є допустимим
throw new EvalError("Invalid status");
}                                       
alert("Ви можете переглядати фільм");
}
checkAge();

//===================================================================================================

// task 3
// Реалізуйте функцію calcRectangleArea(width, height), яка приймає 2 параметри 
// ширина прямокутника width і висота прямокутника height і обраховує його площу.
// Передбачити припинення виконання програми і генерацію винятку у випадку,
// якщо функції передано не числові параметри.
// Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.

function calcRectangleArea(width, height) {
  if (!Number.isInteger(width) || !Number.isInteger(height)) {                     // перевіряємо, чи ширина та висота є числами
    throw new Error("width і height повинні бути числами.");
  }
  let area = width * height;                                                       // обчислюємо площу прямокутника
  return area;                                                                     // повертаємо площу
}

try {                                                                              // код, який використовує цю функцію та обробляє можливі виняткові ситуації
  let width = +prompt("Введіть ширину прямокутника:");
  let height = +prompt("Введіть висоту прямокутника:");
  let area = calcRectangleArea(width, height);
  console.log("Площа прямокутника:", area);
} catch (e) {
  console.error("Помилка:", e.message);
}

//===================================================================================================

// task 4
// Створіть клас MonthException, конструктор якого приймає параметр message і ініціалізує 
// поле name значенням MonthException.
// Реалізуйте функцію showMonthName(month), в якій параметр month – це порядковий номер 
// місяця в році.Функція повертає назву місяця відповідно до введеного номера місяця.
// У випадку некоректного вводу кидається ексепшн у вигляді об’єкта класу MonthException 
// з повідомленням Incorrect month number.
// Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
// Приклад роботи програми:
// console.log(showMonthName(5));
// May
// console.log(showMonthName(14));
// MonthException Incorrect month number

class MonthException {
  constructor(message) {
    this.name = "MonthException";
    this.message = message;
  }
}

// код функції showMonthName(month)
function showMonthName(month) {
if (isNaN(month) || month < 1 || month > 12) {                                   // перевіряємо, чи month є числом від 1 до 12
throw new MonthException("Incorrect month number");
}
let monthNames = ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"];
let monthName = monthNames[month - 1];                                           // отримуємо назву місяця відповідно до введеного номера місяця
return monthName;                                                                // повертаємо назву місяця
}

// код, який використовує цю функцію, передбачаючи обробку можливих винятків
try {
  let month = +prompt("Введіть номер місяця:");
  let monthName = showMonthName(month);
  console.log("Назва місяця:", monthName);
} catch (e) {
  console.error(e.message);
}

//=======================================================================================================

// task 5
// Реалізуйте функцію showUser(id), яка приймає параметром користувацьке id і повертає об’єкт,
// який містить значення переданої id.Також функція викидає помилку у разі якщо введено від’ємне id.
// Реалізуйте функцію showUsers(ids), яка приймає параметром масив користувацьких айді ids,
// перевіряє з використанням функції showUser() кожен елемент масиву ids на коректність,
// в разі виключної ситуації виводить повідомлення про помилку.Функція showUsers(ids) повертає 
// масив об’єктів, де значеннями ключів є коректні елементи ids.

// Приклад роботи програми:
// showUsers([7, -12, 44, 22]);
// Error: ID must not be negative: -12
// [ {id: 7}, {id: 44}, {id: 22} ]

function showUser(id) {
if (id < 0) {                                                          // перевіряємо, чи id є позитивним числом
throw new Error("ID must not be negative");
}
return { id: id };                                                     // повертаємо об'єкт, який містить значення переданої id
}

function showUsers(ids) {                                              // ось код функції showUsers(ids)
let users = ids.map(id => {                                            // перевіряємо кожен елемент масиву ids на коректність за допомогою функції showUser()
try {
return showUser(id);
} catch (e) {
console.error(e.message);
return undefined;
}
});
return users.filter(user => user !== undefined);                        // повертаємо масив об'єктів, де значеннями ключів є коректні елементи ids
}

try {                                                                  // код, який використовує цю функцію, передбачаючи обробку можливих винятків
  let users = showUsers([7, -12, 44, 22]);
  console.log(users);
} catch (e) {
  console.error(e.message);
}




