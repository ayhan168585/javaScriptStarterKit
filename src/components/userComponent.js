import User from "../models/user.js"
import  UserService  from "../services/userService.js"
import { BaseLogger, MongoLogger } from "./crossCuttingConcerns/logging/logger.js"

console.log("user component yüklendi")

let logger1=new MongoLogger()
let userService =new UserService(logger1)

let user1=new User(1,"Engin","Demiroğ","Ankara")
let user2=new User(2,"Baran","Gökçekli","Muğla")


userService.add(user1)
userService.add(user2)

console.log(userService.list())

userService.list()
console.log( userService.getById(2))


let customer={id:1,firstName:"Engin"}

customer.lastName="Demiroğ"

console.log(customer.lastName)

console.log("-----------------------------")
userService.load()
console.log(userService.customers)
console.log(userService.employees)
console.log("-----------------------------")
userService.add(6,"Ayhan","Özer",52,"İstanbul","1234567","customer")
console.log(userService.customers)

