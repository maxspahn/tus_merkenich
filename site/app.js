'use strict'

console.log("Here\'s a hidde message")
let today = new Date()
let formatDate = today.toDateString()
let selectElement = document.getElementById('date')
selectElement.innerHTML = formatDate
