let userRole ="Admin";
let accesslevel;

if (userRole === "Admin"){
    accesslevel = "Fylly Granted";
}
 else if ( userRole === "Manager") {
    accesslevel = " No permission";
}
 else  {
    accesslevel = " not register";
    
}
console.log("Accesslevel :", accesslevel);

let isLoggedIn = true;
let usermessage;

if (isLoggedIn) {
    if ( userRole ==="Admin"){
        usermessage ="Welcome, Admin";
    } else{
        usermessage = "Welcome User"
    }
} else{
    usermessage =" Please logged in to access the system"
}

console.log( "Usermessage:", usermessage);

let userType = "subscriber";
let userCategory;

switch (userType){
    case "admin" :
        userCategory ="Administator";
        break;
    case "manager":
        userCategory ="Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unkown"

}console.log("User Category:", userCategory);