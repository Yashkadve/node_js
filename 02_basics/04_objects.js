const newObject={}

newObject.id="abc123"
newObject.name="Yash"
newObject.isLoggedIn = false
// console.log(newObject); 


const regularUser={
    email:"abc@gov.in",
    fullname:{
        userfullname:{
            firstname:"Luci",
            lastname:"medelo"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}  //spread operator latest used**
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(newObject);

// console.log(Object.keys(newObject)); //Outputs in form of arrays
// console.log(Object.values(newObject)); //Outputs in form of arrays
// console.log(Object.entries(newObject)); //Outputs in form of keys and values pair - [ [ 'id', 'abc123' ], [ 'name', 'Yash' ], [ 'isLoggedIn', false ] ]

// console.log(newObject.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {price}=course
// console.log(price);
//////////////////////////////////////////////////////
const {courseInstructor: instructor} = course  //you can remane the fields name for usability
// console.log(instructor);
//////////////////////////////////////////////////////

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]
