// let juris = [];
// let participants = [];
// let corectusers = [];
// for (let i = 1; ; i++) {
//     if (localStorage.getItem(`Participant-${i}-name`) != null) {
//         participants.push(localStorage.getItem(`Participant-${i}-name`))
//     }
//     else {
//         break;
//     }

// }

// for (let i = 1; ; i++) {
//     if (localStorage.getItem(`Judge-${i}-name`) != null) {
//         juris.push(localStorage.getItem(`Judge-${i}-name`))
//     }
//     else {
//         break;
//     }

// }

// function startTournament() {
//     let counter = 0;
//     let users = [];
//     participants.map((elem) => {
//         elem = new user(elem.slice(0, elem.indexOf(':')), ++counter, givemark(juris));
//         users.push(elem);
//     })
//     console.log(users);
//     let usersnames = [];

//     function i() {

//         let arrmarks = [];
//         users.map((elem) => {
//             arrmarks.push(elem.marckssume);
//             usersnames.push(elem.name)
//         })
//         arrmarks.sort((a, b) => {
//             return b - a;
//         });
//         usersnames.sort(uaSort);
//         console.log(usersnames);
//         arrmarks.map(elem => {
//             for (let i = 0; i < users.length; i++) {
//                 if (users[i].marckssume != users[++i].marckssume) {
//                     if (users[i].marckssume == elem) {
//                         corectusers.push(users[i]);
//                     }
//                 }
//                 else {
//                     console.log('1')
//                     usersnames.map(elem1 => {

//                         if (users[i].name == elem1) {
//                             console.log(usersnames.indexOf(elem1));
//                             corectusers[usersnames.indexOf(elem1)] = elem;
//                         }
//                     })

//                 }

//             }
//         })
//     }
//     i();
//     console.log(corectusers);
// }


// class user {
//     constructor(name, id, mark) {
//         this.name = name;
//         this.id = id;
//         this.mark = mark;
//         this.marckssume = this.marckssum();
//     }
//     marckssum() {
//         let marks = [];

//         this.mark.map(elem => {
//             marks.push(elem.marks);
//         });
//         let o = 0;
//         return Math.round(marks.reduce((sum, current) => sum + current, 0));
//     }
//     createuser() {

//     }
// }

// class Juri {
//     constructor(name) {
//         this.name = name;
//     }
//     givemark() {
//         let rand = Math.floor(Math.random() * 10);
//         rand = (rand != 0) ? rand : 1
//         return rand;
//     }
// }

// function givemark(juri) {
//     let marks = [];
//     juri.map(elem => {

//         let elem1 = new Juri(elem.slice(0, elem.indexOf(':')), elem.slice(elem.indexOf(':')));
//         marks.push({
//             name: elem1.name,
//             marks: elem1.givemark(),
//         });
//     })
//     return marks
// }


// function uaSort(s1, s2) {
//     return s1.localeCompare(s2);
// }

// startTournament();
// function examination() {

// }

let juris = [];
let participants = [];
let corectusers = [];

for (let i = 1; ; i++) {
    if (localStorage.getItem(`Participant-${i}-name`) != null) {
        participants.push(localStorage.getItem(`Participant-${i}-name`));
    } else {
        break;
    }
}

for (let i = 1; ; i++) {
    if (localStorage.getItem(`Judge-${i}-name`) != null) {
        juris.push(localStorage.getItem(`Judge-${i}-name`));
    } else {
        break;
    }
}

function startTournament() {
    let counter = 0;
    let users = [];

    participants.map((elem) => {
        elem = new User(elem.slice(0, elem.indexOf(':')), ++counter, giveMark(juris));
        users.push(elem);
    });

    console.log(users);

    let usersnames = [];

    function updateUsers() {
        let arrmarks = [];
        users.map((elem) => {
            arrmarks.push(elem.marckssume);
            usersnames.push(elem.name);
        });

        arrmarks.sort((a, b) => {
            return b - a;
        });

        usersnames.sort(uaSort);

        console.log(usersnames);

        arrmarks.map((elem) => {
            for (let i = 0; i < users.length; i++) {
                if (users[i].marckssume != users[i + 1].marckssume) {
                    if (users[i].marckssume == elem) {
                        corectusers.push(users[i]);
                    }
                } else {
                    console.log('1');
                    const userIndex = usersnames.indexOf(users[i].name);
                    if (userIndex !== -1) {
                        corectusers[userIndex] = elem;
                    }
                }
            }
        });
    }

    updateUsers();
    console.log(corectusers);
}

class User {
    constructor(name, id, mark) {
        this.name = name;
        this.id = id;
        this.mark = mark;
        this.marckssume = this.marckssum();
    }

    marckssum() {
        let marks = [];
        this.mark.map((elem) => {
            marks.push(elem.marks);
        });
        return Math.round(marks.reduce((sum, current) => sum + current, 0));
    }

    createUser() {
        // Code for creating user
    }
}

class Juri {
    constructor(name) {
        this.name = name;
    }

    giveMark() {
        let rand = Math.floor(Math.random() * 10);
        rand = (rand !== 0) ? rand : 1;
        return rand;
    }
}

function giveMark(juris) {
    let marks = [];
    juris.map((elem) => {
        let elem1 = new Juri(elem.slice(0, elem.indexOf(':')), elem.slice(elem.indexOf(':')));
        marks.push({
            name: elem1.name,
            marks: elem1.giveMark(),
        });
    });
    return marks;
}

function uaSort(s1, s2) {
    return s1.localeCompare(s2);
}

startTournament();

function examination() {
    // Code for examination
}
