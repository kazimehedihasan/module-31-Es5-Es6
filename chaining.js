//  add access 

const data = [{id: 1, name: 'abul', address: 'kochu khet'}];
// console.log(data[0].address);


const products = {
    count: 5000,
    data: [
        {id: 1, name: 'lenovo laptop', price: 6500},
        {id: 2, name: 'macbook', price: 16500},
    ]
}

// console.log(products.data[1].price);


const user = {
    id: 5001,
    name: 'shoriful raj',
    address : {
        street: {
        first : '54/1 uttor side',
        second: 'poribag er golli',
        third: 'no dorai'
        },
        city: 'Dhaka',
    }
}
console.log(user.address.street.second);

const user2 = {
    id: 5002,
    name: 'pori bibir majar',
    address: {
        city: 'chittagong',
        country: 'Bangladesh'
    }
}

console.log(user2.address.street?.second);