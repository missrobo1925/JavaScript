var emp ={'empid':111, 
    'ename':'John',
    'details': function()
    {
    console.log('hello' +' '+ this.ename + '!')
    }
};

console.log(emp)
emp.details();