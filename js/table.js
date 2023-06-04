
//----------NAMES----------

const names = [
  "Олександр",
  "Анна",
  "Олексій",
  "Аліса",
  "Андрій",
  "Ангеліна",
  "Артем",
  "Валерія",
  "Іванна",
  "Дмитро",
  "Дарина",
  "Євген",
  "Катерина",
  "Жанна",
  "Ірина",
  "Іван",
  "Інесса",
  "Костянтин",
  "Крістіна",
  "Карина",
  "Микола",
  "Наталія",
  "Олег",
  "Ольга",
  "Роман",
  "Сергій",
  "Софія",
  "Тетяна",
  "Шарлотта",
  "Ельза",
  "Юлія",
  "Антон",
  "Вероніка",
  "Оксана",
  "Ігор",
  "Єлизавета",
  "Максим",
  "Світлана",
  "Денис",
  "Вікторія",
  "Мілана",
  "Руслан",
  "Діана",
  "Оксана",
  "Єва",
  "Камілла",
  "Марк",
  "Варвара",
  "Нікіта",
  "Зоряна"
];

// ----------SURNAMES----------

const surnames = [
  "Коваленко",
  "Бондаренко",
  "Ткаченко",
  "Ковальчук",
  "Шевченко",
  "Кравченко",
  "Романенко",
  "Захарченко",
  "Левченко",
  "Кузьменко",
  "Козак",
  "Мельник",
  "Шаповаленко",
  "Білоус",
  "Тимченко",
  "Бойко",
  "Ковалюк",
  "Остапенко",
  "Поляков",
  "Карпенко",
  "Клименко",
  "Федоренко",
  "Шевельов",
  "Гончаренко",
  "Литвиненко",
  "Кулик",
  "Руденко",
  "Луценко",
  "Кучеренко",
  "Матвієнко",
  "Бараненко",
  "Жуковський",
  "Косенко",
  "Тарасенко",
  "Козловський",
  "Семенченко",
  "Лихачов",
  "Бондарчук",
  "Масленко",
  "Гончарук",
  "Даниленко",
  "Гребенюк",
  "Кравчук",
  "Захарчук",
  "Ковалюк",
  "Карплюк",
  "Мельничук",
  "Литвинчук",
  "Балан",
  "Косач"
];

// ----------TALENTS----------

const talents = [
  "Спів",
  "Танці",
  "Малювання",
  "Скрипка",
  "Гра на піаніно",
  "Гра на гітарі",
  "Хореографія",
  "Акробатика",
  "Комедії",
  "Магія",
  "Гра на флейті",
  "Гра на саксофоні",
  "Поетичне виконавство",
  "Скульптура",
  "Гра на українському бандурі",
  "Гра на барабанах",
  "Живопис",
  "Театральна акторська гра",
  "Фігурне катання",
  "Стрільба з лука",
  "Створення музики",
  "Гра на гармоні",
  "Фокуси",
  "Гра на сопілці",
  "Балет",
  "Робототехніка",
  "Гра на акордеоні",
  "Льодові скульптури",
  "Тренування домашніх тварин",
  "Фрістайл",
  "Багатоголосний спів",
  "Аерографія",
  "Боді-арт",
  "Скейтбординг",
  "Магія з картами",
  "Скульптури з кераміки",
  "Малювання на склі",
  "Фігурне катання на роликах",
  "Танці з вогнем"
];


// ----------JURI----------

const juryMembers = [
  {
    name: "Євген",
    surname: "Паперний",
    role: "музичний продюсер"
  },
  {
    name: "Світлана",
    surname: "Лобода",
    role: "поп-виконавиця"
  },
  {
    name: "Владислав",
    surname: "Яма",
    role: "танцор"
  },
  {
    name: "Наталія",
    surname: "Фаліон",
    role: "танцівниця, хореограф"
  },
  {
    name: "Олексій",
    surname: "Потапенко",
    role: "музичний продюсер"
  },
  {
    name: "Сергій",
    surname: "Притула",
    role: "телеведучий, комедіант"
  },
  {
    name: "Ектор",
    surname: "Хіменес-Браво",
    role: "шеф-повар"
  },
  {
    name: "Ольга",
    surname: "Фреймут",
    role: "телеведуча, акторка"
  },
  {
    name: "Ігор",
    surname: "Кондратюк",
    role: "телеведучий, продюсер"
  },
  {
    name: "Алла",
    surname: "Костромічова",
    role: "танцівниця, хореограф"
  }
];


// ----------ALGORITHM----------

const judgesNumber = 3;

let participantsCount = localStorage.getItem('All_Participants');
participantsCount = parseInt(participantsCount);

let tbodyParticipants = document.querySelector('.participants-table tbody');
let tbodyJudges = document.querySelector('.judges-table tbody');

function getRandomElement(array) {
  let randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function getRandomParticipants(count) {

  for (let i = 0; i < count; i++) {
    let newRow = document.createElement('tr');

    let pName = getRandomElement(names);
    let pSurname = getRandomElement(surnames);
    let pTalant = getRandomElement(talents);

    newRow.classList.add('table-row');
    newRow.innerHTML = `
        <td data-cell="number">${i+1}</td>
        <td data-cell="name">${pName} ${pSurname}</td>
        <td data-cell="talant">${pTalant}</td>
    `;

    localStorage.setItem(`Participant-${i + 1}-name`, `${pName} ${pSurname}`);

    tbodyParticipants.appendChild(newRow);
  }
}

function getRandomJuryMember(juryArray) {
  const randomIndex = Math.floor(Math.random() * juryArray.length);

  return juryArray[randomIndex];
}

function printRandomJudges(count) {
  let selectedJudges = [];
  const tbodyJudges = document.querySelector('table tbody');

  const maxCount = Math.min(count, juryMembers.length);

  for (let i = 0; i < maxCount; i++) {
    let newRow = document.createElement('tr');
    newRow.classList.add('table-row');

    let randomJudge;
    let isDuplicate = true;

    while (isDuplicate) {
      randomJudge = getRandomJuryMember(juryMembers);

      isDuplicate = selectedJudges.some(judge => judge.name === randomJudge.name && judge.surname === randomJudge.surname);
    }

    selectedJudges.push(randomJudge);

    newRow.innerHTML = `
      <td data-cell="name">${randomJudge.name} ${randomJudge.surname}</td>
      <td data-cell="talant">${randomJudge.role}</td>
    `;

    localStorage.setItem(`Judge-${i + 1}-name`, `${randomJudge.name} ${randomJudge.surname}`);

    tbodyJudges.appendChild(newRow);
  }
}

getRandomParticipants(participantsCount);
printRandomJudges(judgesNumber);