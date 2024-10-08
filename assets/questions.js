// 1- Basit İndirim Hesaplama:
// Bir ürünün fiyatını ve indirim yüzdesini kullanıcıdan alarak, indirimli fiyatı hesaplayan bir program yazın.
// Örn: 100 TL olan bir ürüne %20 indirim yapıldığında ne kadar ödenmesi gerektiğini hesaplayıp alert ile gösterin.




let price = prompt("Enter price:");

let discount = prompt("Enter discount rate(with % ):");

let sale = ((price * discount) / 100);

let lastPrice = price - sale;

if (lastPrice !== 0) {
    alert("Product Price:" + " "  + lastPrice );
}else if (lastPrice === "0" || " ") {
    alert("0 or invalid!");
}

localStorage.setItem("question1", `${lastPrice}`);




// 2-  Vize ve Final Notu ile Ortalama:
// Kullanıcıdan vize ve final notunu alarak dönem ortalamasını hesaplayan bir program yazın (vize %40, final %60 etkili olsun).
// Eğer not 50’den büyükse "Geçtiniz", 50'den küçükse ve 40’tan büyükse "Şartlı geçtiniz", 40’tan küçükse "Kaldınız" mesajını verin.


let vize = prompt("first exam: ");

let final = prompt("final exam: ");

let average = (((vize * 40) / 100) + ((final * 60)/100));


if (average >= 50) {
    alert(average);
    alert("You passed this exam!");
} else if (average < 50 && average >= 40) {
    alert(average);
    alert("You have conditionally passed this exam!");
} else if (average < 40){
    alert(average);
    alert("You failed!");

} else alert("invalid!"); 

localStorage.setItem("question2", `${average}`);



// 3- Haftanın Günü:
// Kullanıcıdan bir sayı alın ve o sayıya karşılık gelen günü yazdırın (1 = Pazartesi, 7 = Pazar). Switch case araştırabilirsiniz.


let number = Number(prompt("insert Number(1-7)"));

switch (Number(number)) {

    case 1 :
        alert("Monday");
        break;
    case 2 :
        alert("Tuesday");
        break;
    case 3 :
        alert("Wednesday");
        break;
    case 4 :
        alert("Thursday");
        break;
    case 5 :
        alert("Friday");
        break;
    case 6 :
        alert("Saturday");
        break;
    case 7 :
        alert("Sunday");
        break;

    default:
        alert("invalid!");
}


localStorage.setItem("question3", `${number}`);


// 4- Büyük Sayıyı Bulma:
// Kullanıcıdan üç sayı alarak, bu sayılardan en büyüğünü bulan bir program yazın.


let number1 = Number(prompt("insert number 1"));

let number2 = Number(prompt("insert number 2"));

let number3 = Number(prompt("insert number 3"));

if (number1 > number2 && number1 > number3) {
    alert(number1 + " " + "biggest");

} else if (number2 > number1 && number2 > number3) {
    alert(number2 + " " + "biggest");

} else if (number3 > number1 && number3 > number2) {
    alert(number3 + " " + "biggest");

} else console.log ("nothing!");

localStorage.setItem("question4", `${number1} ${number2} ${number3}`);



// 5- Saniyeyi Saate Çevirme:
// Kullanıcıdan bir saniye değeri alıp bunu saat, dakika ve saniye cinsine çevirin (Örn: 3661 saniye = 1 saat, 1 dakika, 1 saniye).

let second = Number(prompt("enter random second"))

let convertHour = Math.floor(second / 3600);


let convertMinute = Math.floor(second / 60) % 60;


let convertSecond = Math.floor((second % 60));




alert (`${convertHour} Hour +  ${convertMinute} Minute +  ${convertSecond} Second`);

localStorage.setItem("question5", `${convertHour} ${convertMinute} ${convertSecond}`);






// 6- Güncel Yaş Hesaplama:
// Kullanıcıya önce yıl, sonra ay, sonra gün sorarak tam yaşını gün, ay ve yıl cinsinden hesaplayan bir program yazın.


    let birthYear = prompt ("Insert your year of birth");

    let birthMonth = prompt ("Insert your month of birth");

    let birthDay = prompt ("Insert your day of birth");


    let thisYear = new Date().getFullYear();

    let thisMonth = new Date().getMonth();
    thisMonth +=1  // index 0 = January so i added +1 and make them equal to 1 

    let thisDay = new Date().getDay();  //index 0 = Sunday so i didn't change this index


    let totalYear = (thisYear-birthYear);

    let totalMonth = (thisMonth-birthMonth);

    let totalDay = thisDay- birthDay;

    if (birthMonth < thisMonth) {
        thisYear -=1;
        
    } else(thisYear === thisYear);
    

    if (birthDay < thisDay) {
        birthDay % 30;  
        thisMonth -=1;
    } else (thisMonth === thisMonth);

    totalResult = (totalYear  + " " + totalMonth + " " +  totalDay);

    console.log(totalResult);


    localStorage.setItem("question6", `${totalResult}`);




// 7- Saatlik Ücret Hesaplama:
// Kullanıcıdan çalıştığı saat sayısını ve saat başı ücretini alarak toplam kazancını hesaplayın.

let userHourWage = prompt("Insert your hourly Wage ");

let userWorkingHour = prompt("Insert How many hours you work per day");

let dailyIncome = (userHourWage * userWorkingHour);

let weeklyIncome = (dailyIncome * 6);

let monthlyIncome = (weeklyIncome * 4);

let yearlyIncome = (monthlyIncome * 12);

alert(" Daily income : "  + dailyIncome);
alert(" Weekly income : " + weeklyIncome);
alert(" Monthly income : " + monthlyIncome);
alert(" Yearly income : " + yearlyIncome);

localStorage.setItem("question7", `${dailyIncome} ${weeklyIncome} ${monthlyIncome} ${yearlyIncome}`);





// 8- Aylık Taksit Hesaplama:
// Kullanıcıdan kredi miktarını ve taksit sayısını alarak aylık taksiti hesaplayın.
// v2 toplam faiz oranını da sorup aylık faizli taksiti hesaplayın.



let loan = prompt("insert loan amount ");

let installment = prompt ("insert installment amount");

let interestAmount = prompt ("insert interest amount");

let monthlyLoan = (loan / installment);

console.log (`monthly loan is: ${monthlyLoan}`)

let monthlyLoanInterest = ((loan * interestAmount) / 100);

let resultLoan = monthlyLoan + monthlyLoanInterest;

console.log (`monthly installment including interest rate: ${resultLoan}`);



localStorage.setItem("question8", `${resultLoan}`);



// 9- Kullanıcı Adı ve Şifre Kontrolü.:
// Kullanıcıdan hem kullanıcı adını hem de şifresini alın. Eğer kullanıcı adı "admin" ve şifre "1234" ise “Giriş başarılı” mesajı verin, aksi halde “Kullanıcı adı veya şifre hatalı” deyin.


let username = prompt("enter your username!");

let password = prompt("enter your password!");


if (username === "admin" && password === "1234") {
    alert(`welcome ${username}`);

}else if (username === "admin" && password != "1234") {
    alert("password is incorrect"); 

} else alert("Username or password is incorrect");

localStorage.setItem("question9", `${username} ${password}`);


// 10- Net Kar Hesaplama:
// Satış bedelini ve maliyet (0 girilebilir) girerek; kdv dahil toplam ve net kar bilgilerini gösterin.
// kdv %20, gelir vergisi %25 olarak hesaplanmalıdır. Eğer 100 TL satış yaparsanız bu tutarın %25'i gelir vergisi olarak hesaplanır.
// 100 TL'lik satış bedelini toplam satış bedeli için kdv dahil 120 TL olarak hesaplarız. Eğer maliyet olduysa ((satış bedeli - maliyet) + kdv) - gelir vergisi olacak.

// anlamadim, Benim max mat bilgisi :D


let salePrice = Number(prompt("enter sale price"));

let cost = Number(prompt("enter Product Cost"));


let kdv = ((salePrice) / 100) * 20;

let withKdv = ((salePrice - cost) + kdv );

let incomeTax = ((withKdv / 100 ) *  25);


let result = (((salePrice - cost) + kdv) - incomeTax);

console.log (result);


localStorage.setItem("question10", `${result}`);
