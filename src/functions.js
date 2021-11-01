function addToCart(quantity,productName="Elma") {
    
    console.log("Sepete eklendi." + productName +" "+ "adet:"+quantity)
}

//addToCart()
addToCart(10)
//addToCart("Karpuz")


let sayHello=()=>{
    console.log("Hello")
}

sayHello()

let sayHello2=function () {
    console.log("Hello2")
}

sayHello2()


function addToCart2(productName,quantity,unitPrice) {
    
}
let product1={productName:"Elma",unitPrice:10,quantity:5}
function addToCart3(product) {
    console.log("Ürün:"+product.productName,"adet:"+product.quantity,"fiyat:"+product.unitPrice)
}

addToCart3(product1)

console.log(product1)


function addToCart4(products) {
    console.log(products)
}

let products=[
    {productName:"Elma",unitPrice:10,quantity:5},
    {productName:"Armut",unitPrice:10,quantity:5},
    {productName:"Karpuz",unitPrice:10,quantity:5}
]

addToCart4(products)


function add(bisey,...numbers) {
let total=0
    for (let i = 0; i < numbers.length; i++) {
      total=total+numbers[i]
    }
    console.log(total)
    console.log(bisey)
}


add(20,30,40)

let numbers=[30,10,500,600,120]
console.log(Math.max(...numbers))

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri,marmaraSehirleri,karadenizSehirleri]]=[
    {name:"İç Anadolu",population:"20M"},
    {name:"Marmara",population:"30M"},
    {name:"Karadeniz",population:"100M"},

    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Samsun","Ordu"]

    ]

]

console.log(icAnadoluSehirleri)
console.log(marmaraSehirleri)
console.log(karadenizSehirleri)

