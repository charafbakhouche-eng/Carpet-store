/* ============================== */
/* 1️⃣ المتغيرات وأنواع البيانات */
let customerName = "Mr. Willy";          // String
const TAX_RATE = 0.07;                    // Number
var orderCount = 0;                        // Var (قديمة)
let isLoggedIn = true;                     // Boolean
let discount = null;                       // Null
let undefinedVar;                          // Undefined
let colors = ["أحمر", "أزرق", "أخضر"];   // Array
let product = { name: "سجادة", size: "2x3", price: 5000 }; // Object

console.log("العميل:", customerName, "عدد الطلبات:", orderCount);

/* ============================== */
/* 2️⃣ العمليات (Operators) */
let a = 10, b = 3;
console.log("a + b =", a+b);
console.log("a - b =", a-b);
console.log("a * b =", a*b);
console.log("a / b =", a/b);
console.log("a % b =", a%b);
console.log("a ** b =", a**b); // الأس

/* ============================== */
/* 3️⃣ الشروط (Conditions) */
if(a > b) {
    console.log("a أكبر من b");
} else if(a === b) {
    console.log("a يساوي b");
} else {
    console.log("b أكبر من a");
}

/* Switch */
let day = new Date().getDay();
switch(day){
    case 0: console.log("الأحد"); break;
    case 1: console.log("الإثنين"); break;
    case 2: console.log("الثلاثاء"); break;
    case 3: console.log("الأربعاء"); break;
    case 4: console.log("الخميس"); break;
    case 5: console.log("الجمعة"); break;
    case 6: console.log("السبت"); break;
}

/* ============================== */
/* 4️⃣ الحلقات (Loops) */
for(let i=0; i<5; i++) console.log("For loop:", i);

let j = 0;
while(j<5){
    console.log("While loop:", j);
    j++;
}

/* ============================== */
/* 5️⃣ الدوال (Functions) */
function greetUser(name){
    console.log(`مرحبا ${name}`);
}
greetUser(customerName);

/* دالة مع قيمة راجعة */
function calculatePrice(price, tax=TAX_RATE){
    return price + (price * tax);
}
console.log("السعر بعد الضريبة:", calculatePrice(product.price));

/* Arrow Function */
const multiply = (x,y) => x*y;
console.log("Multiply:", multiply(4,6));

/* ============================== */
/* 6️⃣ المصفوفات (Arrays) */
colors.push("أصفر");     // إضافة عنصر
colors.pop();            // إزالة آخر عنصر
colors.forEach(color => console.log("Color:", color));

/* ============================== */
/* 7️⃣ الكائنات (Objects) */
let carpet = {
    name: "سجادة عصرية",
    size: "3x4",
    price: 7000,
    colors: ["أحمر","أزرق"],
    showDetails: function(){
        console.log(`الاسم: ${this.name}, الحجم: ${this.size}, السعر: ${this.price}`);
    }
};
carpet.showDetails();

/* ============================== */
/* 8️⃣ التعامل مع DOM */
const header = document.querySelector("header.header");
header.style.backgroundColor = "#2c3e50";

const h1 = document.createElement("h1");
h1.textContent = "مرحبا بكم في متجر السجادات الحديثة!";
header.prepend(h1);

/* ============================== */
/* 9️⃣ الأحداث (Events) */
const orderBtn = document.createElement("button");
orderBtn.textContent = "إرسال الطلب";
document.body.appendChild(orderBtn);

orderBtn.addEventListener("click", () => {
    alert("تم إرسال الطلب بنجاح!");
    orderCount++;
    console.log("عدد الطلبات الآن:", orderCount);
});

/* ============================== */
/* 10️⃣ التعامل مع الوقت */
const now = new Date();
console.log("الوقت الحالي:", now);
console.log("السنة:", now.getFullYear());
console.log("الشهر:", now.getMonth()+1);

/* ============================== */
/* 11️⃣ JSON */
const jsonData = JSON.stringify(carpet);
console.log("JSON:", jsonData);

const parsedObj = JSON.parse(jsonData);
console.log("Object:", parsedObj);

/* ============================== */
/* 12️⃣ Fetch (API) */
const apiURL = "https://jsonplaceholder.typicode.com/todos/1";

async function fetchData(){
    try {
        const response = await fetch(apiURL);
        if(!response.ok) throw new Error("فشل في جلب البيانات");
        const data = await response.json();
        console.log("بيانات API:", data);
    } catch(err){
        console.error("خطأ:", err);
    }
}
fetchData();

/* ============================== */
/* 13️⃣ ES6 Advanced Features */
// Template Literals
console.log(`مرحبًا ${customerName}, لديك ${orderCount} طلب`);

// Destructuring
const [firstColor, secondColor] = colors;
console.log(firstColor, secondColor);

const {name: carpetName, price: carpetPrice} = carpet;
console.log(carpetName, carpetPrice);

// Spread Operator
const allColors = [...colors, ...carpet.colors];
console.log(allColors);

// Default Parameters
const sayHello = (name="ضيف") => console.log(`مرحبا ${name}`);
sayHello();
sayHello("Ali");