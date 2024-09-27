
let date = new Date();
let today = date.getDay();

console.log("Today is : ", today);

switch(today) {
    case 0:
        console.log("Its Sunday");

    case 1:
        console.log("Its Monday");
        break;

    case 2:
        console.log("Its Tuesday");
        break;

    case 3:
        console.log("Its Wedensday");
        break;
    
        case 4:
            console.log("Its Thursday");
            break;

        case 5:
            console.log("Its Friday");
            break;

        case 6:
            console.log("Its Saturday");    
        
        default:
            console.log("Out of Range, Your System Date Time Wrong");
}