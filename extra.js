//let b = 'hello roma, how are you'

//console.log(b.includes('you'))


//let res = b.slice(6,12)
//console.log(res)
//let name = 'Veronika'
//console.log(name.toUpperCase)

//let name = 'Veronika'
//let age = 15
//console.log(`Hello ${name} your age ${age} old`)
//let str1 = 'hello world'
//let test_text = /hello/
//let res = test_text.test(str1)
//console.log(res)
//let password = '123andmefihhf'
//let check = /......../
//let res = check.test(password)
//console.log(res)

//const exp = /wor(d|k)/;
//const exp = /[abc]/;


//const user = {
 //   name: "tom",
//    married: false,
 //   age: 39
//};
//const serializedUser = JSON.stringify(user);
//console.log(serializedUser)

//let a = Math.abs(-7)
//console.log(a)

//let max_num = Math.max(a,b,c)
//let min_num = Math.min(a,b,c)
//let a = Math.pow(2,4)
//let a = Math.sqrt(25)
//let a = Math.random()
//let c = Math.floor(9.9)
//let a = Math.ceil(2.2)
//let t = Math.round(4.5)

//let a = 'Hello R.'
//a = a.replace('Hello', 'Good')
//console.log(a)

//let a = 'Avocado'
//console.log(a.includes('a'))
// let a = 12
// a = String(a)
// console.log(a)
// console.log(typeof a)
// let a = '123'
// a = Number(a)
// console.log(a)
// console.log(typeof a)



// let username;
// username = "Tom";
// console.log(username)

// let name1 = "Tom", name2 = "Bob", name3 = "Sam";
// console.log(name1);  // Tom
// console.log(name2);  // Bob
// console.log(name3);

//  let username = "Tom";
//         console.log("username до изменения:", username);
//         username = "Bob";
//         console.log("username после изменения:", username);

// let word = "chocolate cake"
// console.log(word)
//  word = "vanilla cake"
// console.log(word)

// let people = {
//     name: 'Veronika',
//     age: 15,
//     hobby: 'IT',
// }
// let {name:obj1,age:obj2,hobby:obj3} = a
// console.log(obj1)
// console.log(obj2)
// console.log(obj3)


// let b = [1,2,3,4,5,6,7]
// let [a,c,...d] = b
// console.log(a)
// console.log(c)
// console.log(d)


// function get(b){
//     b.age = 30,
//     b.hobby = 'IT'
// }
// let c = {
//     name:'Roma',
//     age:45,
//     hobby:'Game'
// }
// console.log(c)
// get(c)
// console.log(c)

// let c = {
//     name: 'Roma',
//     age:45,
//     hobby:'Game'
// }
// c.color = 'Blue'
// console.log(c)
// Object.preventExtensions(c)
// c.game = 'cod3'
// console.log(c)

// Object.freeze(c)

// let c = {
//     name:'Roma',
//     age:45,
//     hobby:'game'
// }
// Object.freeze(c)
// c.name = 'Veronika'
// c.age = 20
// console.log(c)

// let a = {
//     name:'Veronika'
// }
// Object.preventExtensions(a)
// console.log(Object.isExtensible(a))

// Object.freeze(a)

// console.log(Object.isFrozen(a))
// Object.seal(a)
// Object.defineProperty(a,'name',{writable:false})
// a.age = 12
// a.name - 'Vee'

// let age = 31
// let res = age>18?'+':'-'
// console.log(res)

// let num1 = 10
// let num2 = 10
// let res = num1===num2?num1+num2:num1-num2
// console.log(res)

// let a = [1,2,3,4,5]
// let b = a.map(n=>n*10)
// console.log(b)

// let a = [5,32,6,345,63]
// let b = a.filter(n=>n>6 && n<8)
// console.log(b)

// let a = {
//     n1: 20,
//     n2: 30,
// }
// a.n1 = 40
// a.n2 = 60
// console.log(a)
// Object.preventExtensions(a)

// let a = [2,4,6,8,10]
// let b = a.map(x => x/2)
// console.log(b )

// let a = {
//     n1: 13,
//     n2: 14,
// }
// console.log(a)
// Object.preventExtensions(a)

// let a = [3,4,6,45,234,15]
// let f = a.filter(n => n < 10)
// console.log(f)

// let a = {
//     n1: 10
// }
// function get(b){
//     console.log(this.n1 / num1)
// }
// get.apply(word,[2])

// let a ={
//     name:'Vika',
//     age: 16,
//     car: 'Lada',
// }
// Object.preventExtensions(this.name,this.car)
// a.age = 17
// console.log(a)

// let a = [1,3,23,65,73,35]
// let b = a.map(n => n + 10 )
// console.log(b)

// let a = ()=> console.log('Hello')
// a()

// function print(){
//     console.log('Hello')
//     print = function(){
//         console.log('World')
//     }
// }
// print()
// print()

// let b = (a,c)=> a+c
// console.log(b(1,2))

// let res = (a,c) => {
//     console.log(a+c)
//     console.log(a*c)
// }
// res(1,2)

// let person = {
//     name: 'Veronika'
// }
// let data = {
//     age: 30,
//     __proto__: person
// }
// console.log(data.age)
// console.log(data.name)

// let person = {
//     name:'Veronika'
// }
// let new_person = Object.create(person)
// console.log(new_person.name)

// function get(num1,num2){
//     this.num1 = num1
//     this.num2 = num2
// }
// let a = new get(2,5)
// console.log(a.num1,a.num2)

// let person = {
//     name:'Veronika'
// }
// person.get = function(){
//     console.log(this.name.length,typeof this.name)
// }
// console.log(person.name)
// person.get()

// function get(num1,num2){
//     this.num1 = num1
//     this.num2 = num2
// }
// get.prototype.plus = function(){
//     console.log(this.num1+this.num2)
// }
// let a = new get(1,2)
// a.plus()

// function get(n1,n2){
//     this.n1 = n1
//     this.n2 = n2
// }
// get.prototype.check = function(){
//     if(this.n1 === this.n2){
//         console.log('Equal')
//     }else{
//         console.log('Unequal')
//     }
// }
// get.prototype.plus = function(){
//     if(this.n1 > this.n2){
//         console.log("Bigger")
//     }else{
//         console.log('Smaller')
//     }
// }
// let a = new get(12,10)
// a.plus()
// a.check()

// function get(w1,w2){
//     this.w1 = w1
//     this.w2 = w2
// }
// get.prototype.one = function(){
//    console.log(this.w1[0])
// }
// get.prototype.two = function(){
//     console.log(this.w2[this.w2.length-1])
// }
// let a = new get('Apple','Banana')
// a.one()
// a.two()

// function get(n1,n2,n3,n4,n5){
//     this.n1 = n1
//     this.n2 = n2
//     this.n3 = n3
//     this.n4 = n4
//     this.n5 = n5
// }
// get.prototype.first = function(){
//     console.log(Math.min(this.n1,this.n2,this.n3,this.n4,this.n5))
// }
// get.prototype.second = function(){
//     console.log(Math.max(this.n1,this.n2,this.n3,this.n4,this.n5))
// }
// let a = new get(2,5,3,7,4)
// a.first()
// a.second()

// let a = {
//     num1:11
// }
// function plus(num2){
//     console.log(num2 + this.num1)
// }
// plus.apply(nums,[10])

// let a = {
//     name: 'Nika',
//     age: 16,
//     country: 'Ukraine'
// }
// Object.preventExtensions(this.name, this.country)
// a.age = 18
// console.log(a)

// let a = [1,2,3,4,5,6]
// let b = a.map(x => x+10)
// console.log(b)

// let a ={
//     n1: 20,
//     n2: 50,
//     n3: 10,
// }
// function plus(num){
//     console.log(num + this.n1 + this.n2 + this.n3)
// }
// plus.call(a,10)

// function get(n1,n2,n3){
//     this.n1 = n1
//     this.n2 = n2
//     this.n3 = n3
//     this.first = function(){
//         console.log(this.n1+this.n2+this.n3)
//     }

// }
// let a = new get(10,12,16)
// a.first()

// try{
//     let num1 = 12
//    console.log(num1)


// }
// catch(e){
//     console.log('error', e.message)
// }

// try{
//     let a = null
//     console.log(a.name)
// }
// catch(e){
//     console.log('Error',e.message)
// }

// try{
//     console.log(a)
// }
// catch(e){
//     console.log(e.message)
// }

// try{
//     let name = 'Roma'
//     name.push('Veronika')
// }
// catch(e){
//     console.log(e.message)
// }

// let a = [1,2,3,4,5]
// let [b,c,d,e,k] = a
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
// console.log(k)
// #desktrurizacia

// try{
//     console.log(a)
// }
// catch(e){
//     console.log(e.message)
// }
// #noneexistentzmina

// function truediv(num1,num2){
//     if(num2 == 0){
//         throw 'Cant divide by 0'
//     }
//     return num1 / num2
// }


// try{
//     truediv(1,0)
// }
// catch(e){
//     console.log(e)
// }


// function check(obj1){
//     if(obj1 > 100){
//         throw 'big number'
//     }
//     console.log(obj1)
// }
// try{
//     check(20)
// }
// catch(e){
//     console.log(e)
// }

// class Currency{
//     #c = 41
//     get data(){
//         return this.#c
//     }
//     set data(get_new){
        
//             this.#c = get_new
//         }
//         }
    

// currency = new Currency()
// console.log("Different currency", currency.data)
// currency.data = 30
// console.log("New currency",currency.data)

// let currency = {
//     usd:40,
//     get: function(){
//         return this.usd
//     },
//     setR: function(new_rate){
//         this.usd = new_rate
//     }
// }
// console.log("Old currency", currency.get())
// currency.setR(45)
// console.log("New currency", currency.get())


// function get(){
//     setTimeout(()=>{
//         console.log('Veronika')
//     },10000)
// }
// get()  #timer

// let a = new Promise(function(resolve,reject){
//     console.log(10,20)
// })

// let b = new Promise(function(resolve,reject){
//     let a = 12
//     let c = 8

//     resolve(a+c)
// })
// // b.then(function(value){
// // console.log('Hello', value)
// // })
// b.catch(function(value){
//     console.log(value)
// })

// let c = new Promise(function(resolve,reject){
//     let a = 10
//     let b = 2
//     if (b == 0){
//         reject("cant divide by 0")
//     }
//     else{
//         resolve(a/b)
//     }
// })
// c.then(function(value){
//     console.log(value)
// }).catch(function(value){
//     console.log(value)
// })


// function get(a,b,c){
//     setTimeout(()=>{
//         console.log(10+20+30)
//     },20000)
// }
// get() 

// let a = new Promise(function(resolve,reject){
//   resolve(['Veronika', 16,'cooking'])
// })
// a.then(function(value){
//     console.log(value)
// }
// )

// let a = new Promise(function(resolve,reject){
//    setTimeout(()=>{
//     reject('Veronika')
//    },10000)
// })
// a.catch(function(value){
//     console.log(value)
// })

// let a = new Promise(function(resolve,reject){
//     str = "Applepie"
//     resolve(str[0])
// })
// a.then(result => {
//     console.log("Letter", result)
// })


// let a = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve(16)
//     },30000)
// })
// a.then(result =>{
//     console.log('Age',result)
// })

// let a = new Promise(function(resolve,reject){
//     resolve(['Veronika', 16])
// })
// a.then(function(value){
//     console.log(value)
// }


// function get(name){
// setTimeout(()=>{
//         console.log('Veronika')
//     },10000)
// }
// get() 


// let a = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve([1,2,3,4,5])
//     },20000)
    
// })
// a.then(function(value){
//     console.log(value)
// })

// let a = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve('Veronika')
//     },10000)
    
// })
// let b = new Promise(function(resolve,reject){
//     setTimeout((){
//         resolve('IT')
//     })
//     ,5000
// })
// Promise.all([a,b]).then(values=>{
//     let[a,b]= values
//     console.log(a)
//     console.log(b)
// })
// Promise.race

// let a = new Promise(function(resolve,reject){
//         resolve('Veronika')

// })
// let b = new Promise(function(resolve,reject){
//         resolve('IT')
// })
// let c  = new Promise(function(resolve,reject){
//     reject('10')
// })
// Promise.allSettled([a,b,c]).then(values=>{
//     let[a,b,c]= values
//     console.log(a)
//     console.log(b)
//     console.log(c)
// })


// let a = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve('Veronika')
//     },10000)
//         resolve('Veronika')

// })
// let b = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         reject('150')
//     },2000)
//         resolve('IT')
// })
// let c  = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve('IT')
//     },5000)
  
// })
// let d  = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         reject('error')
//     },1000)
  
// })
// let e  = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve('Python')
//     },2000)
  
// })
// Promise.any([a,b,c,d,e]).then(values=>{
//     console.log(values)
// })

// let a = new Promise(function(resolve,reject){
//     let num1= 10
//     let num2 = 20
//         resolve(num1 + num2)

// })
// let b = new Promise(function(resolve,reject){
//       let num1= 14
//     let num2 = 24
//         resolve(num1 + num2)
// })
// Promise.all([a,b]).then(values=>{
//     let[a,b]= values
//     console.log(a+b)

// })

// let a = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve('Apple')
//     },10000)

// })
// let b = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         reject('Banana')
//     },12000)
// })
// let c  = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         reject('Mandarin')
//     },8000)
  
// })
// let d  = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve("Orange")
//     },2000)
// })
// Promise.race([a,b,c,d]).then(values=>{
//     console.log(values)
// })

// let a = new Promise(function(resolve,reject){
//     let b = 'House'
//     let c = 'Horse'
//     if(b[0]==c[0]){
//         resolve('Same')
//     }else{
//         reject('Different')
//     }
// })
// a.then(values=>{
//     console.log(values)
// }).catch(err=>{
//     console.log(err)
// })


// let a = new Promise(function(resolve,reject){
//         resolve('HI')
// })
// let b  = new Promise(function(resolve,reject){
//     reject('BYE')
// })
// Promise.allSettled([a,b]).then(values=>{
//     let[a,b]= values
//     console.log(a)
//     console.log(b)
// })

// let a = new Promise(function(resolve,reject){
//    let b ={
//     n1: 20,
//     n2: 15,
//     plus: function(){
//         return this.n1 + this.n2
//     }
//    } 
//    let res = b.plus()
//    resolve(res)
// })
// a.then(values=>{
//     console.log(values)
// })

// let a = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         let arr = []
//         for(let i = 10; i < 20; i++){
//             arr.push(i)
//         }
//         reject(arr)
//     },10000)
// })
// a.catch(values=>{
//     console.log(values)
// }) 

// let a = new Promise(function(resolve,reject){
//     let k ={
//     let b = 13,
//     let c = 92,
//     getmax:function(){
//         if(this.b > this.c){
//             return this.b
//         }else{
//             return this.c
//         }
//     }

//     }
    
// let max_element = k.getmax()
// resolve(max_element)
// })
// a.then(values=>{
//     console.log(values)
// })

// function sum(x,y){
//     return new Promise(function(resolve){
//         const result = x + y;
//         resolve(result);
//     });
// }
// sum(5,3).then(function(value){
//     console.log('Result:', value);
// });

// let a = new Promise(function(resolve,reject){
//      n1 = 23
//      n2 = 17
//         resolve(n1+n2)
// })
// let b = new Promise(function(resolve,reject){
//      n3 = 3
//      n4 = 89
//     resolve( n3+n4)
// })
// Promise.all([a,b]).then(([res1,res2])=>{
//     console.log(res1)
//     console.log(res2)

// })

// let a = new Promise(functipon(Resolve,reject){
//     setTimeout(()=>{
//            resolve('Tomatoes') 
//     },2000)

// })
// let b = new Promise(functipon(Resolve,reject){
//     setTimeout(()=>{
//            reject('Cucumber') 
//     },15000)

// })
// let c = new Promise(functipon(Resolve,reject){
//     setTimeout(()=>{
//            reject('Bell Pepper') 
//     },5000)

// })
// let d = new Promise(functipon(Resolve,reject){
//     setTimeout(()=>{
//            resolve('Watermelon') 
//     },8000)

// })
// Promise.race([a,b,c,d]).then(values =>{
//     console.log(values)

// })

// let a = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//        let arr = []
//         for(let i = 10; i < 20; i++){
//             arr.push(i)
//         }
//         reject(arr)
//     },10000)
// })
// a.catch(function(values){
//     console.log(values)
// }
// )

// function get(name){
//     return new Promise(function(resolve, reject){
//         resolve(name.length)
//     })
// }
// get('Veronika').then(values=>{
//     console.log(values)
// })

// function get(a,b,c,d,e){
//     return new Promise(function(resolve,reject){
//         resolve(Math.max(a,b,c,d,e))
//     })
// }
// get(1,2,3,4,5).then(values=>{
//     console.log(values)
// })

// function get(word){
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{
//              resolve(word[0])
//         },20000)
//     })
// }
// get('Potatoes').then(values=>{
//     console.log(values)
// })

// function get(arr){
//     return new Promise(function(resolve,reject){
//        arr.shift()
//         arr.pop()
//        resolve(arr)
//     })
// }
// get((1,2,3,4,5,6)).then(values=>{
//     console.log(values)
// })

// function get(a,b){
//     return new Promise(function(resolve,reject){
//         resolve((a + b)/2)
//     })
// }
// get(30,12).then(values=>{
//     console.log(values)

// })

// function get(a,b){
//     return new Promise(function(resolve,reject){
//         if( b == 0){
//             reject('error')
//         }else{
//             resolve(a/b)
//         }
//     })
// }
// get(18,3).then(values=>{
//     console.log(values)
// }).catch(error=>{
//     console.log(error)
// })

// function get(a,b){
//     return new Promise(function(resolve,reject){
//         if(a === b){
//             resolve('+')
//         }else(
//             reject('error')
//         )
//     })
// }
// get(10,10).then(values=>{
//     console.log(values)
// }).catch(error=>{
//     console.log(error)
// })

// function get(word){
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{
//               resolve(typeof word)
//         },7000)
      
//     })
// }
// get('Apple').then(values=>{
//     console.log(values)
// })

// function get(){
//     return new Promise(function(resolve,reject){
//         reject('error')
//     })
// }
// get().catch(error=>{
//     console.log(error)
// })

// async function get(a,b){
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             resolve(a+b)
//         },10000)
//     })
// }
// async function data(){
//     let res1 = await get(10,1)
//     console.log('first call',res1)
//     let res2 = await get(20,2)
//     console.log('second call',res2)
//     let res3 = await get(30,3)
//     console.log('third call', res3)
// }
// data()

// async function get(a,b){
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             resolve(a+b)
//         },10000)
//     })
// }

// async function data(){
//     let ar = [
//         get(13,4),
//         get(3,2),
//         get(1,1)
//     ]
//     let [a,b,c] = await Promise.all(ar)
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
// data()

// async function get(){
//     return new Promise(function(resolve,reject){
//         resolve(10)
//     })
// }


// async function get1(){
//     return new Promise(function(resolve,reject){
//         resolve(33)
//     })
// }
// async function result(){
//     let res1 = await get()
//     let res2 = await get1()
//     console.log(res1)
//     console.log(res2)
// }
// result()

// function g1(){
//     return new Promise(function(resolve,reject){
//         resolve(2)
//     })
// }
// function g2(){
//     return new Promise(function(resolve,reject){
//         resolve(4)
//     })
// }
// function g3(){
//     return new Promise(function(resolve,reject){
//         resolve(6)
//     })
// }
// async function get(){
//     let a = await g1()
//     let b = await g2()
//     let c = await g3()
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
// get()

// function get(){
//     return new Promise(function(resolve,reject){
//         let a = 'cake'
//         let b = 'icecream'
//         let c = 'cheesecake'
//         let d = 'lollipop'
//         let e = 'Cremebrulee'
//         resolve(c.length)
//     })
// }
// get().then(values=>{
//     console.log(values)
// })

// async function g1(n1){
//     return new Promise(function(resolve,reject){

//     setTimeout(()=>{
//         resolve(n1 / 2)
//     },10000)
// }
//     )}

//  async function g2(n2){
//     return new Promise(function(resolve,reject){

//     setTimeout(()=>{
//         resolve(n2 / 2)
//     },2000)
// }
//     )}

//  async function g3(n3){
//     return new Promise(function(resolve,reject){

//      setTimeout(()=>{
//         resolve(n3 / 2)
//     },5000)
// }
//     )}

// async function g4(n4){
//     return new Promise(function(resolve,reject){
  
//      setTimeout(()=>{
//         resolve(n4 / 2)
//     },15000)
// }
//     )}

// async function get(){
//     let arr_promise = [
//         g1(4),
//         g2(6),
//         g3(8),
//         g4(12)
        
//     ]
//     let [a,b,c,d] = await Promise.all(arr_promise)
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     console.log(d)
// }
// get()

// async function g1(a){
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             resolve(a + 4)
//     },2000)
// })
    
// }
// async function g2(b){
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             resolve(b + 1)
//     },6000)
// })
// }
// async function g3(c){
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             resolve(c + 2)
//     },3000)
// })
// }

// async function get(){
//     let nums = [
//         g1(5),
//         g2(2),
//         g3(8)
//     ]
//     let values = await Promise.race(nums)
//     console.log(values)
    
// }
// get()

// let a = new Promise(function(resolve,reject){
//     resolve('Veronika')
// })
// let b = new Promise(function(resolve,reject){
//     resolve('Roma')
// })
// let c = new Promise(function(resolve,reject){
//     resolve('Vika')
// })
// Promise.all([a,b,c]).then((values)=>{
//     let[a,b,c] = values
//     console.log(a)
//     console.log(b)
//     console.log(c)

// })

// async function g1(){
//     return new Promise(function(resolve){
//  resolve('Hi')
//     })
   
// }
// async function g2(){
//     return new Promise(function(resolve){
// resolve('Bye')
//     })
    
// }
// async function g3(){
//     return new Promise(function(resolve){
//   resolve('Until next time')
//     })
    
// }
// async function get(){
//     res1 = await g1()
//     console.log(res1)
//       res2 = await g2()
//     console.log(res2)
//       res3 = await g3()
//     console.log(res3)
// }
// get() (poslidovna)

// async function g1(){
//     return new Promise(function(resolve,reject){
//   let a = [1,2,3,4,5]
//         setTimeout(()=>{
//             resolve(a)
//         },2000)
//     })
// }
// async function g2(){
//     return new Promise(function(resolve,reject){
//     let b = 'Apple'
//         setTimeout(()=>{
//             reject(b)
//         },5000)
//     })
// }
// async function get(){
// let arr = [
// data_arr(,
//     data_str()
// )]
//let values = await Promise.any(arr)
//console.log(values)
//}
// get()

// async function g1(){
//     return new Promise(function(resolve,reject){
//         let a = 'hello'
//         resolve(a)
//     })
// }
// async function g2(){
//     return new Promise(function(resolve,reject){
//         let b = 'Bye'
//         resolve(b)
//     })
// }
// async function g3(){
//     return new Promise(function(resolve,reject){
//         let c = 32
//         resolve(c)
//     })
// }
// async function get(){
//     let ar = [
//         g1(),
//         g2(),
//         g3()    
//     ]
// let [a,b,c] = await Promise.allSettled(ar)
//     console.log(typeof a)
//     console.log(typeof b)
//     console.log(typeof c)
// }

// get()

// let a = new Promise(function(resolve,reject){
//     let num = 24
//     if(num % 2 == 0 ){
//         resolve('Even')
//     }else{
//         reject('Odd')
//     }
// })
// a.then(function(value){
//     console.log(value)
// }).catch(error=>{
//     console.log(error)
// })

// let a = new Promise(function(resolve,reject){
//     resolve('Hi')
// })
// let b = new Promise(function(resolve,reject){
//     reject('bye')
// })
// let c = new Promise(function(resolve,reject){
//     resolve('hello')
// })
// let d = new Promise(function(resolve,reject){
//     resolve('good day')
// })

// Promise.any([a,b,c,d]).then(values=>{
//     console.log(values)
// })

// let a = new Promise(function(resolve,reject){
//     let b = {
//         num: 23,
//     }
//     resolve(b.num)
// })
// a.then(function(value){
// console.log( value)
// })

// let a = [1,2,3,6,34,5]
// let iter = a[Symbol.iterator]();
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())

// async function g1(){
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{
//              let a = 'hello'
//         resolve(a)
//         },2000)
       
//     })
// }
// async function g2(){
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{
//              let b = 'Bye'
//         resolve(b)
//         },4000)
       
//     })
// }
// async function g3(){
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{
//              let c = 32
//         resolve(c)
//         },5000)
       
//     })
// }
// async function get(){
//     let nums = [
//         g1(5),
//         g2(2),
//         g3(8)
//     ]
//     let values = await Promise.race(nums)
//     console.log(values) ##fastest one

// }
// get()


// let a = new Promise(function(resolve,reject){
//     resolve('Inna')
// })
// let b = new Promise(function(resolve,reject){
//     resolve('Veronika')
// })
// let c = new Promise(function(resolve,reject){
//     resolve('Petro')
// })
// Promise.all([a,b,c]).then(([res1,res2,res3])=>{
//     console.log(res1)
//     console.log(res2)
//     console.log(res3) ##obyednaty
// })

// async function g1(){
//     return new Promise(function(resolve,reject){
//              let a = 'Apple'
//         resolve(a)
       
//     })
// }
// async function g2(){
//     return new Promise(function(resolve,reject){
//              let b = 'Banana'
//         resolve(b)
      
       
//     })
// }
// async function g3(){
//     return new Promise(function(resolve,reject){
//              let c = 'Pineapple'
//         resolve(c)
    
//     })
// }
// async function get(){
//         res1 = await g1()
//     console.log(res1)
//       res2 = await g2()
//     console.log(res2)
//       res3 = await g3()
//     console.log(res3)
// }     #poslidovno
// get()


//  async function g1(){
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{
//              let a = [1,2,3,4,5,6]
//         resolve(a)
//         },3000)
       
//     })
// }
// async function g2(){
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{
//              let b = 'oopsie'
//         reject(b)
//         },4000)
       
//     })
// }
// async function get(){
//     let nums = [
//         g1(5),
//         g2(2)
//     ]
//     let values = await Promise.race(nums)
//     console.log(values)
// }
// get()


// (function get (a,b){
//     console.log(a+b)
// })(1,2)

// let person = {
//     name:'Veronika',
//     age:16,
//     hobby:'IT'
// }
// let data = JSON.stringify(person)
// console.log(data)

// let getOBJ = JSON.parse(data)
// console.log(getOBJ)

// (function get(){
//     for(i = 10;i<30;i++){
//      if(i==20){
//         continue
//      }{
//       else if (i==25){
//         continue
//     }
//       console.log(i)
//     }

// })()

// let car = {
//     brand: ' Volkswagen',
//     year: 2008,
//     color: 'white',

// }
// let data = JSON.stringify(car)
// console.log(data)

// let getOBJ = JSON.parse(data)
// console.log(getOBJ)

// getOBJ.hobby = 'IT'
// getOBJ.job = 'Web developer'
// console.log(getOBJ)

// (function get(k,b,c,d){
//     let m = Math.max(k,b,c,d)
//     let mi = Math.min(k,b,c,d)
//     console.log(min)
//     console.log(m)
// })(3,6,2,8)

// (function get(a,b){
//     if(a.length == b.length){
//         console.log('Equal')
//     }else{
//         console.log('Unequal')
//     }
// })('hello','bye')

// let a = {
//     word: "apples"

// }
// let data = JSON.stringify(a)
// console.log(data)

// (function get(a){
//     let str = 'Palyanytsya'
//     for(let word of str){
//         console.log(word)
//     }
// })()

// let a = {
//     name:"Veronika",
//     age: 16
// }
// let b = {
//     get:function(a,prop){
//     return a[prop]
//     }
// }
// let res = new Proxy(a,b)
// console.log(res.name)
// console.log(res.age)

// let person = {
//     name:'Veronika',
//     age: 16
// }
// delete person.name
// delete person.age

// Object.preventExtensions(person)
// console.log(person)

// let car = {
//     brand: "Cadillac",
//     model:"SUV",
//     year: 2015
// }
// console.log(Object.keys(car))
// console.log(Object.values(car))

// let a = new Set()
// a.add("apple")
// a.add("banana")
// a.add("pineapple")
// a.add("watermelon")

// a.delete("apple")
// a.delete("banana")

// console.log(a)

// let person = {
//     name:'Roma',
//     age:24
// }
// let change = {
//     get:function(person,key){
//         return person[key]
//     },
//     set:function(person,key,value){
//         person[key] = value
//     }
// }
// let data = new Proxy(person,change)
// console.log(data.name)
// console.log(data.age)
// data.name = 'Veronika'
// data.age = 16
// console.log(data.name)
// console.log(data.age)

// let a = {
//     word:"Monday"
// }
// let c = {
//    get:function(a,key){
//     return a[key]
//    }
// }
// let data = new Proxy(a,c)
// console.log(data.word)

// let person = {
//     hobby:'Drawing',
//     sport:"Boxing",
//     race:"Ukrainian"
// }
// let a = {
//     get: function(person,key){
//         return person[key].length
//     }
// }
// let data = new Proxy(person,a)
// console.log(data.hobby)
// console.log(data.sport)
// console.log(data.race)

// let a = {
//     word:'Apple'
// }
// let data = JSON.stringify(a)
// console.log(data)
// let getOBJ = JSON.parse(data)
// console.log(getOBJ)

// (function get(a){
//     a = 'banana'
//     console.log(a[0])
// })()

// let car = {
//     year: 2013,
//     brand:'toyota'
// }
// delete car.year
// delete car.brand

// let data = JSON.stringify(car)
// console.log(data)

// (function get(a,b){
//     if(a.length -1 === b.length -1){
//         console.log('Same')
//     }else{
//         console.log('Different')
//     }
// })('Apple','banana')

// let a = {
//     word: 'goodmorning'

  
// }
//     Object.keys(a)
// console.log(a)

// let a = new Date()
// console.log(a)

// let a = new Date()
// console.log(a.getFullYear())

// export function get(){
//     console.log('Hello')
// }
// export function Data(a,b){
//     console.log(a+b)
// }

// let a = {
//     brand:"BMW",
//     model:"X5"
// }
// let c = {
//    get:function(a,value){
//     return a[value]
   
//    }}
// let car =  new Proxy(a,c)
// console.log(car.brand)
// console.log(car.model)


// let a = [1,2,3,4,5]
// console.log(a[2])

// let a = ['Veronika','Roma','JS']
// console.log(a[0].length)


// let a = [1,5,4,6753,7,5,5,7,4,56,1]
// if(a.length % 2 == 0){
//     console.log('no median')
// }
// else{
//     let index_e = a.length / 2
//     index_e = Math.floor(index_e)
//     console.log(a[index_e])
// }

// let a = [1,2,3,4,5,6]
// let max_e = Math.max(...a)
// let min_e = Math.min(...a)

// let index_me = a.indexOf(max_e)
// let index_mne = a.indexOf(min_e)

// let max_e_f = a[index_me]

// a[index_me] = a[index_mne]
// a[index_mne] = max_e_f
// console.log(a)  ##how to change min and max

// let a = [1,2,3,4,5,6]
// let b = a[0]
// a[0] = a[a.length -1]
// a[a.length-1] = b
// console.log(a)  ## change first and last


// function get(a,b){
    
//         if(b == 0){
//             throw('Not possible')
//         }
//         else{
//             console.log(a/b)
//         }
//     }
// try{
//    get(1,2)
// }
// catch(e){
//     console.log(e)
// }

// let a = {
//     name:'Veronika'
// }
// Object.freeze(a)
// a.city = 'Ternopil'
// console.log(a)

// let a = new Date()
//     console.log(a.getTime())
//     console.log(a.getFullYear())
//     console.log(a.getDay())

// let a = {
//     name: 'Veronika'
// }
// let data = JSON.stringify(a)
// console.log(data)

// let a = new Date()
// console.log(a.getDate())
// console.log(a.getTime())

// let a = {
//     num: [1,2,3,4,5],
//     get:function(){
//         let res = []
//         for(let i = 0;i<this.num.length;i++){
//             if(this.num[i] % 2 == 1){
//                 res.push(this.num[i])
//             }
//         }
//         this.num = res
//         console.log(this.num)
//     }
// }
// a.get()
// console.log(a.num)

// function get(a,b){
//     setTimeout(()=>{
//         let a = 'HI'
//         let b = 'BYE'
//         console.log(a)
//         console.log(b)
//     },5000)
// }
// get()

// function get(data){
//     console.log('hello')
//     data()
//     console.log('WORLD')
// }
// function data(){
//     console.log('a+b')
// }
// get(data) ##callback

// let ABC = [1,2,3,4,5]
// let a = []
// let b = Math.max(...ABC) 
// let c = Math.min(...ABC)
// a.push(b)
// a.push(c)
// console.log(a) ## peredaty max i min

// function a(cb){

//     for(let i = 20; i<30; i++){
//         console.log(i)
//     }
//         cb()
// }
// function cb(){
//     for(let i = 30; i < 50;i++){
//         console.log(i)
//     }
// }
// a(cb)

// let a = []
// let element = NaN
// for(let i = 0;i<10;i++){
//     element = Math.random()
//         a.push(element)
    
// }
// console.log(a) ## random add

// let age = 19
// if(age > 18 && age < 30){
//     console.log('+')
// }
// else{
//     console.log('-')
// }

// let num = 14

// if(num == 1 || num == 2 || num == 3){
//     console.log('+')
// }
// else{
//     console.log('-')
// }

// let w = 'Banana'
// if(w[0] == 'A' && w[w.length -1] == 'A'){
//     console.log('+')
// }
// else{
//     console.log('-')
// }

// let a = "Apples"
// let none = []
//     for(let word of a){
//      none.push(a)
//      console.log(word)
 
   
//     }

// let a = 'anna'
// let data = []
// for(let i = 0; i < a.length;i++){
//     data.push(a[i])
// }
// console.log(data)
// let newd = data.toReversed()
// console.log(newd)

// if(data.join(' ') == newd.join(' ')){
//     console.log('Poli')
// }
// else{
//     console.log('not poli')
// }   ## polindrom or not

// let a = 'hihihih'
// if(a == a.split('').reverse().join('')){
//     console.log('+')
// }
// else{console.log('-')}  ## polindrom or not

// let a = [1,2,3,4,5,6]
//  for(let ltr of a ){
//     console.log(ltr * 2 )
//  }

// let a = [3,4,25,7,45,63,24]
//  for(let n of a ){
// if( n > 5 ){
//     console.log(n * 5)
// }
//  }


// let a = 'Veronika'
// let b = a[0]
// a[0] = a[a.length -1]
// a[a.length-1] = b
// console.log(a) 


//     let a = 12

//     let b = String(a)
// console.log(b)
// console.log(typeof b)

// let a = '14'
// let b = Number(a)

// console.log(b)
// console.log(typeof b)

// let a = true
// let b = Number(a)
// console.log(b)

// let a = '2.5jdgkjrbgksd'
// let b = Number.parseFloat(a)
// console.log(b)

// let a = [1,2,3,4,5]
// let b = []
// for(let i = 0; i < a.length;i++){
//     let res = String(a[i])
//     b.push(res)
// }
// console.log(b)  ##peredaty v inshu stroku

// let a = [1,2,3,4,5,6,7]
// let b = String(a[0])
// let c = String(a[a.length -1])
// console.log(b + c)

// let a = '32'
// let b = Number(a)
// let c = a / 2
// let k = String(c)
// console.log(k)


// console.log(Number.MIN_VALUE)
// console.log(Number.MAX_VALUE)

// function get(a,b){
//     if(b == 0){
//         throw('catch')
//     }
//     else{
// console.log(a)
//     }
//     }
// try{
//    get(20,0)
// }
// catch(b){
//     console.log(b)
// }

// function get(age){
//     if( age<18){
//         throw('catch')
//     }
//     else{
//         console.log('Older')
//     }
// }
// try{
//     get(20)
// }
// catch(age){
//     console.log(age) ##try throw and catch
// }

// function get(){
//     let a = [2,3,1,4,5]
//     for(let i = 0; i<a.length;i++){
//         if(a[i] == 1){
//             throw 'Error'
//         }
//         }
//         return 'good'
// }

// try{
//     console.log(get())
// }
// catch(e){
//     console.log(e)
// }

// class Person{
//     constructor(name,age){
//         if(age<18){
//             throw 'Error'
//         }
//         this.name = name
//         this.age = age
//     }
//     print(){
//         console.log(this.name,this.age)
//     }
// }
// try{
//     let a = new Person('Veronika', 16)
//     a.print()
// }
// catch(e){
//     console.log(e)
// }

// function get(word){
//     if( word.length < 8 && word[0] == 'a'){
//         throw('catch')
//     }
//     else{
//         console.log(word)
//     }
// }
// try{
//     get('Honey')
// }
// catch(word){
//     console.log(word) 
// }

// function get(num){
//     if( num % 2 == 0){
//         throw('catch')
//     }
//     // else{
//     //     console.log(word)
//     // }
// }
// try{
//     get(32)
// }
// catch(num){
//     console.log(num) 
// }

// function get(arr){
//     if(arr[0] && arr[arr.length -1] == 0 ){
//         throw('+')
//     }
//     else{
//         console.log('no')
//     }
// }
// try{
//     get([1,2,3,4,5,6.7])
// }
// catch(arr){
//     console.log(arr) 
// }

// let a = [1,2,3,4,5]
// a.shift()
// a.shift()
// console.log(a)


// let a = [1,2,3,4,5,6,7]
// a[0] = String(a[0])
// a[1] = String(a[1])
// console.log(a)


// let a = []

// for(let i = 0; i < 15;i++){
//     let b = Math.random()
// let c = String(b)
//     a.push(c)
// }
// console.log(a)

// class Data{
//     a = 12
//     b =9

//     plus(){
//         if(this.a+this.b>10){
//             throw 'Bad'
//         }
//         else{
//             console.log('+')
//         }
//     }
// }
// try{
//     let n = new Data()
//     n.plus()
// }
// catch(e){
//     console.log(e)
// }

// let a = []
// for(let i = 20; i < 40; i+=5){
//     a.push(i)
// }
// console.log(a)

// let a = [1,2,3,4,5,6,7]
// let b = [3,4,5,6,7,8,5,4,3]
// if(a.length > b.length){
//     console.log('array a is bigger')
// }
// else{
//     console.log('array b is bigger')
// }

// let a = [1,2,3,4,9,6]
// let b = a.toSorted()
// // console.log(b)
// console.log(b[b.length-2])  ## 2nd max num

// let a = [6,3,4,5,3,6,]
// let max = -Infinity
// let smax = -Infinity
// for(let num of a ){
//     if(num > max){
//         smax = max
//         max = num
//     }else if (num > secondMax && num < max){
//         smax = num
//     }
// }
// console.log(smax)


// let a = [1,2,3,4,5,6]
// let sum = 0
// for(let i = 0; i < a.length;i++){
//     sum+=a[i]
// }
// console.log(sum)

// let a = [1,2,3,4,5,6]

// if( a.includes(7)){
//     console.log('there is')
// }
// else{
//     console.log('there is not')
// }  ## if there is 7



// let a = [1,2,3,4,5,6,7]
// console.log(a[0] + a[a.length -1])

// let a = 'Apples'
// let b = []
// for(let word of a){
//     b.push(word)
// }
// console.log(b)

// let a = {
//     word:'Hello'

// }
// let data = JSON.stringify(a)
// console.log(data)

// let d = (a,b,c)=>{

//     console.log(a[0])
//     console.log(b[0])
//     console.log(c[0])
// }('Apples','bananas','Pears')

// let obj = {
//    b:12,
//    A:55
// }
// let data = obj.hasOwnProperty('A')
// console.log(data)

// let a = {
//     n1: 65,
//     n2: 100
// }
// delete a.n1
// delete a.n2
// console.log(a)

// let a = '2'
// let b = Number(a)
// console.log(b)

// let a = [2,4,6,8,10]
// for(let num of a){
//     console.log(num / 2)
// }

// let a = ()=>{
//     for(let i = 10; i <= 20; i++){
//         setTimeout(()=>{
//             console.log(i)
//         },(i-10)*5000);
//     }
// }
// a()

// let a = 3
// switch(a){
//     case 1:
//         console.log('+')
//         break
//     case 2:
//         console.log('-')
//         break
//     case 3:
//         console.log('*')
//         break
//     default:
//         console.log('error')
//         break
// }

// function add(a,b){
//     console.log(a+b)
// }
// let c = [1,2]
// add(...c)

// function add(a=12,b=1){
//     console.log(a+b)
// }
// add(2)

// let a = 'Veronika'
// switch(a){
//     case 'Veronika':
//         console.log('JS')
//         break
//     case 'Roma':
//         console.log('Python')
//         break
//     case 'Artem':
//         console.log('C++')
//         break
//     default:
//         console.log('C#')
//         break
    
// } ##switch

// function get(a,b,c,d){
//    getm = (Math.max(a,b,c,d))
//    console.log(getm)


// }
// let m = [4,6,34,6]
// get(...m)

// let a = [1,2]
// a[0]= 2
// a[1]= 1
// console.log(a)

// let num == 4
// if(num == 1){
//     console.log('+')
// }
// else{
//     console.log('-')
// }

// let a = true
// let b  = Number(a)
// console.log(b)


// function get(a='Apple'){
//     for(let i = a.length-1; i>=0;i--){
//         console.log(a[i])
//     }
// }
// get() ##back to front
    


// function get(a=12,b=4,c=9,d=34,e=45){
//     console.log(a*b*c*d*e)
// }
// let r = [5,2,6,8,4]
// get(...r)

// let r = [2,4,6,3,5]
// let [a,b,c,d,e] = r
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e) ## destructuring

// let a = 'Вероніка'
// for(let i = 0; i < a.length;i++){
//     if(a[i] == 'е'){
//         continue
//     }
//     else if(a[i] == 'о'){
//         continue
//     }
//     else if(a[i] == 'н'){
//         continue
//     }
//     console.log(a[i])
// }

// for(let word of a){
//     if(word == 'е'){
//         continue
//     }
//     console.log(word)
// }

// function outer(){
//     let x = 5;
//     function inner(){
//         x++;
//         console.log(x);
//     };
//     return inner;
// }
// const fn = outer();
// fn()
// fn()
// fn()
// fn()
// fn()

// function get(a){
//     return a

// }
// let b = get('python')
// console.log(b)

// let a = 'Veronika'
// let b = []
// for(let i = 0; i <a.length; i++){
//     if(a[i]=== 'e' || a[i]==='o'|| a[i]==='r'){
//         b.push(a[i])
//     }
// }
// console.log(b)


// let person = {
//     name : ' Veronika',
//     age :25,
//     hobby: ' IT'
// }
// let {name,age,hobby} = person
// console.log(name,age,hobby)
// let {name:user_name,age:user_age,hobby:user_hobby} =person
// console.log(user_name)
// console.log(user_age)
// console.log(user_hobby) ## object destructuring

// const tom = {
//     ame: 'Tom',
//     age: 24,
//     phone: '3483594576',
//     email: ' tom@gmail.com'
// }
// const {name,age, ...contacts} = tom;
// console.log(name);
// console.log(age)
// console.log(contacts)

// let me = {
//     name: 'Veronika',
//     age: 16,
//     born: 'Ukraine',
//     ethnicity: 'White'
// }
// const { name,age, ...data} = me;
// console.log(name)
// console.log(age)
// console.log(data)

// let a = [1,2,3,4,5,6]
// let [b,...c]= a
// console.log(b)
// console.log(c)

// let a = [1,2,3,4,5,6,7]
// let [ ,,c,,e] = a || [c,,,,,,e] = a
// console.log(c)
// console.log(e)

// let a = ['b','c','d','e','f']
// let [,,,e,f] = a
// console.log(e,f)

// let a = [1,2,3,4,5,6,7,8,9,11,1,2]

// let [b,c,...array] = a

// console.log(b)
// console.log(c)
// console.log(array)

// let a = [11,22,44,33,55,66]
// let [,b,c,,] = a
// console.log(b,c)


// function get(){
//     let a = 12
//     function data(){
//         a/=2
//         console.log(a)
//     }
//     return data
// }
// let n = get()
// n()

// let a = [1,2,3,4,5,6,7,8,9,10]
// for(let i = 0;i<a.length;i++){
//     if(a[i] % 2 == 0){
//         a[i] = 0
//     }
   
// }
//  console.log(a)

// let a = {
//     name: 'Veronika',
//     age:16,
//     heigth: 172
// }
// console.log(Object.values(a))

// let type = [1,2,3,'hello',5]
// for(let i of a){
//     console.log(typeof i)
// }

// (function get(a){
   
//     console.log(a.length)
// })('Apples') ## returns right away

// let a = [1,2,3,4,5,7]
// let iter = a[Symbol.iterator]()
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())


// function * get(){
//     yield 12
//     yield 'hello'
//     yield 33
// }
// let a = get()
// console.log(a.next())
// console.log(a.next())
// console.log(a.next())


// let a = {
//     name:'Petro',
//     age: 43
// }
// let data = JSON.stringify(a)
// console.log(data)

// let a = 'Veronika'
// let b = []
// b.push(a[0])
// b.push(a[a.length -1])
// console.log(b)

// function get(arr){



// class Data{
//     constructor(a,b,c,d,e){
//         this.a = a 
//         this.b = b
//         this.c = c
//         this.b = b 
//         this.d = d
//         this.e = e
//         }
//         arg(){
//             let res = this.a+this.b+this.c+this.d+this.e
//             console.log(res/5)
//         }
// }
// let a = new Data(1,2,3,4,5)
// a.arg()

// let a = [1,2,3,4,5,6]
// let b = []
// for(let i = a.length -1; i>=0;i--){
//     b.push(a[i])
// }
// console.log(b) 

// class Data{
    
//         a=13
//         b=22
    
//     get(){
//         console.log(this.a+this.b)
//     }
//     mult(){
//         console.log(this.a*this.b)
//     }
// }
// let k = new Data()
// k.get()
// k.mult()

// let a = [1,6,3,8,23,6,7]
// let b = a.toSorted((a,b)=> a-b)
// console.log(b)

// class Data{
//     static get(){
//         for(let i = 10;i>=5;i--){
//             console.log(i)
//         }
//     }
// }
// Data.get()

// let a = ['apple','banana','kiwi','cherries']
// for(let word of a[0] + a[a.length-1] ){
//     console.log(word)
// }


// let a = [1,2,3,4,5,6,7,8,9,10]
//  for(let i = 1;i<=5;i++){

   
// console.log(i)

//  }

// let a = new Set()
// for(let i = 10;i<=20;i++){
//     a.add(i)
// }
// console.log(a)

// a.clear()
// console.log(a)

// class Data{
//     a=4
//     b=8
// }
// class InfoMax extends Data{
//     get(){
//         if(this.a >this.b){
//             console.log(this.a)
//         }
//         else{
//             console.log(this.b)
//         }
//     }
// }
// let m = new InfoMax()
// m.get()

// let a = b => {
//     for(let i = b.length-1; i>= 0; i--){
//         console.log(b[i])
//     }
// }

// a('Apples') ##seperate otherway around

// try {
//   // Код, який може викликати помилку
//   const result = someUndefinedVariable * 2;
//   console.log(result);
// } catch (error) {
//   // Обробка помилки тут
//   console.error("Виникла помилка:", error.message);
// }

// class Person{
//     #age

// }
// constructor(age){
//     this.#age = age
// }
// get(){
//     return this.#age
// }
// data(new_age){
// if(new_age >= 0){
//     this.#age = new_age
// }
// else{
//     console.log('error')
// }
// }
// person = new Person(24)
// console.log(person.get())
// person.data(10)
// console.log(person.get_age())

// let a = new Map([
//     ['k',3],
//     ['v',13],
//     ['u',19]
// ])
// let b = a.get('k')
// a.set('a',a.get('l'))
// a.set('v', b)

// console.log([...a])

// let a = [1,2,3,4,5,6,7,8,9,10]
// let b = []

// for(let i = 0; i<=(a.length-1)/2;i++){
//     b.push(a[i])
// }
// b.reverse()
// for(let i = 0; i<=(a.length-1)/2;i++){
//    a[i] = b[i]
// }

// console.log(a)

