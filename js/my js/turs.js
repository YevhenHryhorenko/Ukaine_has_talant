let juris = [];
let participants = [];
let corectusers = [];
for (let i = 1; ; i++) {
    if (localStorage.getItem(`Participant-${i}-name`) != null) {
        let name = localStorage.getItem(`Participant-${i}-name`);
        participants.push(name.slice(0, name.indexOf(':')));
    }
    else {
        break;
    }

}

for (let i = 1; ; i++) {
    if (localStorage.getItem(`Judge-${i}-name`) != null) {
        juris.push(localStorage.getItem(`Judge-${i}-name`))
    }
    else {
        break;
    }

}

function startTournament() {
    let counter = 0;
    let users = [];
    participants.map((elem) => {
        elem = new user(elem, ++counter, givemark(juris));
        users.push(elem);
    })
    let usersnames = [];
    users.map(elem => {
        usersnames.push(elem.name)
        usersnames.sort(uaSort);
    })

    for (let i = 0; i < users.length; i++) {
        for (let i = 0; i < usersnames.length; i++) {
            if (users[i].name == usersnames[i]) {

                users[i] = users[i];
                users[i] = null;
            }


        }


    }
    console.log(users);


    function i() {

        let arrmarks = [];
        users.map((elem) => {
            arrmarks.push(elem.markSum);
        })
        arrmarks.sort((a, b) => {
            return b - a;
        });
        first: for (let i = 0; i < users.length; i++) {
            let r = 1;
            for (let count = 0; count < arrmarks.length; count++) {




                if (users[i].markSum == arrmarks[count]) {

                    corectusers[count] = users[i];

                    arrmarks[count] = 0;
                    continue first;
                }

            }


        }



        console.log(arrmarks);
    }

    i();
    console.log(corectusers);
}


class user {
    constructor(name, id, mark) {
        this.name = name;
        this.id = id;
        this.mark = mark;
        this.markSum = this.marckssum();
    }
    marckssum() {
        let marks = [];

        this.mark.map(elem => {
            marks.push(elem.marks);
        });
        let o = 0;
        return Math.round(marks.reduce((sum, current) => sum + current, 0));
    }
    createuser() {

    }
}

class Juri {
    constructor(name) {
        this.name = name;
    }
    givemark() {
        let rand = Math.floor(Math.random() * 10);
        rand = (rand != 0) ? rand : 1
        return rand;
    }
}

function givemark(juri) {
    let marks = [];
    juri.map(elem => {

        let elem1 = new Juri(elem.slice(0, elem.indexOf(':')), elem.slice(elem.indexOf(':')));
        marks.push({
            name: elem1.name,
            marks: elem1.givemark(),
        });
    })
    return marks
}


function uaSort(s1, s2) {
    return s1.localeCompare(s2);
}

startTournament();
function renderuser() {
    var arrRender = [`<tr><th></th><th>Name</th><th>Сергій Притула</th><th>Ектор Хіменес-Браво</th><th>Алла Костромічова</th></tr>`];
    let count = 1;
    arrRender.push(corectusers.map(elem => {
        return `<tr>
        <td>${count++}</td>
        <td>${elem.name}</td>

        ${elem.mark.map(elem1 => {
            return `<td>${elem1.marks}</td>`
        })}
        </tr>`
    }))
    return arrRender;
}



function renderTour() {
    let table = document.querySelector('tbody');
    console.log(table);
    if (table != undefined) {
        table.innerHTML = '';
        console.log(table);


        table.innerHTML = renderuser().map(elem => {
            console.log
            if (elem.length == Array) {
                return elem.join('')
            }
            else {
                return elem;
            }

        });;

    }
    participants = [];
    for (let i = 0; i < (corectusers.length) / 2; i++) {


    }


}

let buttons = document.querySelectorAll('.start-btn');

buttons.map(elem => {
    elem.addEventListener('click', () => {
        let table = document.querySelector('tbody');
        table.innerHTML = '';

    })
})

renderTour();