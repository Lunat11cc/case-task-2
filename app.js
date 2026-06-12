function pad2(value) {
    return String(value).padStart(2, "0");
}

function validateDate(day, month, year) {
    const currentYear = new Date().getFullYear();

    let errors = [];

    day = Number(day);
    month = Number(month);
    year = Number(year);

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        return ["Ошибка: некорректная дата"];
    }

    if (day < 1 || day > 31) {
        errors.push("day");
    }

    if (month < 1 || month > 12) {
        errors.push("month");
    }

    if (year < 1900 || year > currentYear) {
        errors.push("year");
    }

    return errors;
}

function handleErrors(errors) {
    if (errors.length === 0) return null;

    if (errors.length > 1) {
        return "Ошибка: некорректная дата";
    }

    const error = errors[0];

    if (error === "day") return "Ошибка: некорректный день (1-31)";
    if (error === "month") return "Ошибка: некорректный месяц (1-12)";
    if (error === "year") return "Ошибка: некорректный год (1900-" + new Date().getFullYear() + ")";

    return "Ошибка: некорректная дата";
}

// Задача №1
function showDate() {
    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;

    let errors = validateDate(day, month, year);
    let errorMsg = handleErrors(errors);

    if (errorMsg) {
        alert(errorMsg);
        return;
    }

    document.getElementById("result").innerText =
        "Ваша дата рождения: " +
        pad2(day) + "." + pad2(month) + "." + year;
}

// Задача №2
function getWeekDay() {
    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;

    let errors = validateDate(day, month, year);
    let errorMsg = handleErrors(errors);

    if (errorMsg) {
        alert(errorMsg);
        return;
    }

    let date = new Date(year, month - 1, day);

    let weekdays = [
        "Воскресенье",
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота"
    ];

    document.getElementById("result").innerText =
        "День недели: " + weekdays[date.getDay()];
}

// Задача №3
function isLeapYear() {
    let year = document.getElementById("year").value;

    let errors = validateDate(1, 1, year);
    let errorMsg = handleErrors(errors);

    if (errorMsg) {
        alert(errorMsg);
        return;
    }

    year = Number(year);

    let leap =
        (year % 4 === 0 && year % 100 !== 0) ||
        (year % 400 === 0);

    document.getElementById("result").innerText =
        leap ? `${year} год — високосный` : `${year} год — не високосный`;
}

// Задача №4
function getAge() {
    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;

    let errors = validateDate(day, month, year);
    let errorMsg = handleErrors(errors);

    if (errorMsg) {
        alert(errorMsg);
        return;
    }

    let birthDate = new Date(year, month - 1, day);
    let today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    let hasHadBirthday =
        today.getMonth() > birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() &&
         today.getDate() >= birthDate.getDate());

    if (!hasHadBirthday) age--;

    document.getElementById("result").innerText =
        "Ваш возраст: " + age + " лет";
}

// Задача №5
function printStarsDate() {
    let day = pad2(document.getElementById("day").value);
    let month = pad2(document.getElementById("month").value);
    let year = document.getElementById("year").value;

    let errors = validateDate(day, month, year);
    let errorMsg = handleErrors(errors);

    if (errorMsg) {
        alert(errorMsg);
        return;
    }

    let date = `${day} ${month} ${year}`;

    const digits = {
        "0": [" *** ", "*   *", "*   *", "*   *", " *** "],
        "1": ["  *  ", " **  ", "  *  ", "  *  ", " *** "],
        "2": [" *** ", "*   *", "   * ", "  *  ", "*****"],
        "3": ["*****", "    *", " *** ", "    *", "*****"],
        "4": ["*   *", "*   *", "*****", "    *", "    *"],
        "5": ["*****", "*    ", "**** ", "    *", "**** "],
        "6": [" *** ", "*    ", "**** ", "*   *", " *** "],
        "7": ["*****", "    *", "   * ", "  *  ", "  *  "],
        "8": [" *** ", "*   *", " *** ", "*   *", " *** "],
        "9": [" ****", "*   *", " ****", "    *", " *** "],
        " ": ["     ", "     ", "     ", "     ", "     "]
    };

    let lines = ["", "", "", "", ""];

    for (let char of date) {
        let d = digits[char];
        for (let i = 0; i < 5; i++) {
            lines[i] += d[i] + "  ";
        }
    }

    console.log(lines.join("\n"));
}