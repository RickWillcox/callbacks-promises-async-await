const users = [
    { name: "Rick", age: 31 },
    { name: "Cassie", age: 28 },
];

function getUsers() {
    setTimeout(function () {
        users.forEach((user) => {
            console.log(user);
        });
    }, 1000);
}

// getUsers(); // returns 2 users after 1 second delay

// Use a callback - getUsers is now the callback being called after user is pushed to users
function addUserCallback(user, callback) {
    setTimeout(function () {
        users.push(user);
        callback();
    }, 2000);
}

// addUserCallback({ name: "Tali", age: 28 }, getUsers);

function addUserPromise(user) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("this runs before get users");
            users.push(user);
            var error = false;
            if (!error) {
                resolve(console.log("finished adding user!"));
            } else {
                reject("Something went wrong!");
            }
        }, 3000);
    });
}
// This displays the c.log in the wrong order, use async below
// addUserPromise({ name: "Mick", age: 12 })
//     .then(getUsers)
//     .then(console.log("All Users Displayed"))
//     .catch((err) => console.error(err));

// Because getUsers is not a promise we cant use await here so the c.log is run before it finishes
async function init() {
    await addUserPromise({ name: "Sally", age: 31 });
    await getUsers();
    console.log("This should run after get users");
}

// init();

function getUsers2() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            users.forEach((user) => {
                console.log(user);
            });
            var error = false;
            if (!error) {
                resolve();
            } else {
                reject();
            }
        }, 1000);
    });
}
// Example of making these three lines run pseduo synchronously
async function init2() {
    await addUserPromise({ name: "Bob", age: 22 });
    await getUsers2();
    console.log("This should run after get users");
}

// init2();

// Promise all

function sayHi() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve("Hi 👋");
        }, 1500);
    });
}

const p1 = Promise.resolve("Hello");
const p2 = "World";
const p3 = sayHi();

Promise.all([p1, p2, p3]).then((values) => {
    console.log(values);
});
