//////////////////////////
//PROCEDURAL PROGRAMMING//
//////////////////////////

//Primitve, Imperative, relying heavily on global state
//Simple, and easy to understand but brittle, difficult to maintain and buggy
//Procedures fail...it is the first style,but the industry has moved on to OOP

const customers = [];

function populateCustomers(){
  customers.push("name")
  customers.push("name2")
  customers.push("name3")
}

function printCustomers(){
  for (let customer of customer)
    console.log(customer);
}

function main(){
  populateCustomers();
  printCustomers();
}

main();


////////////////////////////////
///Object-Oriented Programming//
////////////////////////////////

//Object = collection of state and behavior
//Primitive Object, localizes state and behavior,
//can be composed to have well defined interafces
//however code is still imperative

class Customer {}
class CustomerRepository {}
class CustomerPrinter {}

function main(){
  const repository = new CustomerRepository();
  const printer = new CustomerPrinter();

  const customers = repository.getCustomers();
  for(let i = 0; i < custoemrs.length; i++) {
    if (customers[i].age > 21)
        printer.print(customers[i]);
  }
}

main();

/////////////////
///Declarative///
/////////////////

//MYSQL + REGEX + HTML
//These are all domain specific formats
//More like data than code
//Tell the computer what we want (self-describing data)
//But not how to do it (limited by interpreter)

///////////////
///Functional//
///////////////

//primitive is a function, low side effects
//functional paradigms vary, usually a hybrid of OOP and functional
//so in this example, no loops or conditions,
//we're just telling the computer what to do
//can get complex, but still fairly reasonable

function getCustomers()

function main(){
  const addresses = getCustomers()
    .filter(c => c.age > 21)
    .map(function(index, elem) {
      return something;
    })
}
//////////////////
///Reactive///////
//////////////////

//Primitive is Observable
//Based on streams, data flows unidirectionally



