'use strict'
let gBirthday = {}
const STORAGE_KEY = 'userDB'


var gUserData;

function _getUserData(){
    let userInputs = {
        email: document.querySelectorAll('input')[0].value,
        age: document.querySelectorAll('input')[1].value,
        backgroundColor: document.querySelectorAll('input')[2].value,
        textColor: document.querySelectorAll('input')[3].value,
        birthDay: document.querySelectorAll('input')[4].value,
        birthHour: document.querySelectorAll('input')[5].value,
    }
    return userInputs
}

function getUserInput(){
    let data = loadFromStorage(STORAGE_KEY)
    if (!data || !data.birthDay || !data.birthHour || !data.backgroundColor || !data.textColor || !data.email || !data.age){
        data = _getUserData()
    }
    gUserData = data
    _saveUserData()
}

function _saveUserData(){
    saveToStorage(STORAGE_KEY, gUserData)
}

function onDob(dob){
    let dateInput = new Date(dob)
    gBirthday.date = dateInput
}

function onHob(hob){
    gBirthday.hours = hob

}

function getHoursToBirthday(){
    var birthDayHour = new Date(gBirthday.date.getFullYear(), gBirthday.date.getMonth(), gBirthday.date.getDay(), gBirthday.hours.split(':')[0], gBirthday.hours.split(':')[1])

    var currDateTimestamp = Date.now()
    var timestamp = birthDayHour.getTime()
    var diff = timestamp - currDateTimestamp
}


function onBcgChange(ev) {
    let color = ev.target.value;
    document.body.style.backgroundColor = color;
}
  
function onColorChange(ev) {
    let color = ev.target.value;
    document.body.style.color = color;
}
  
function onEmail(event){
    if(!email) console.log('forgotemail')
      
}

function showAge(event) {
    document.querySelector('.currAge').innerText = `${event}`
}
