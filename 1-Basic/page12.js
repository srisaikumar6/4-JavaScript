function one ()  // regular function
{
    console.log("from one")
}

const two = function() { //anonymous function
    console.log("from Two")
}

const three = () => {  // fat Arrow function
    console.log("from three")
}

one()
two()
three()