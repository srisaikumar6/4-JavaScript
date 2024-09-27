
let user = { fullname: "Alex", mobile: 7894653120, city: "Bangalore", edu: "MCA" };

console.log("===============================================")
console.log(user.fullname)
console.log(user.mobile)
console.log(user.city)
console.log(user.edu)
console.log("===============================================")



let userlist = [
    { fullname: "flex", mobile: 7894653120, city: "Bangalore", edu: "MCA" },
    { fullname: "Blex", mobile: 9894653120, city: "Mumbai",    edu: "MBA" },
    { fullname: "Clex", mobile: 8894653120, city: "Pune",      edu: "MCOm" },
    { fullname: "Dlex", mobile: 6894653120, city: "Delhi",     edu: "MS" },
    { fullname: "Elex", mobile: 8794653120, city: "Mangalore", edu: "BCA" }
]

userlist.map((oneuser, index) => {
    console.log(index, "##", oneuser.fullname, oneuser.mobile, oneuser.city, oneuser.edu)
    console.log("-------------------------------------------------")
})