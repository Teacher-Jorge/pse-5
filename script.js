// Line 01
let btn1Do = document.getElementById('btn1Do')
let btn1Does = document.getElementById('btn1Does')
let btn1Are = document.getElementById('btn1Are')
let like1 = document.getElementById('like1')
let notGood1 = document.getElementById('notGood1')
let word1 = document.getElementById('word1')
let score = document.getElementById('score')
let value = 0

btn1Are.addEventListener('click', function() {
    let audio = document.getElementById('right')
    audio.play()
    like1.style.visibility = 'visible'
    notGood1.style.visibility = 'hidden'
    btn1Are.style.backgroundColor = 'chartreuse'
    btn1Are.style.color = 'black'
    word1.innerHTML = 'Are'
    word1.style.color = 'chartreuse'
    value++
    document.getElementById('score').innerHTML = value


    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn1Do.disabled = true
    btn1Does.disabled = true
    btn1Are.disabled = true
})

btn1Does.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    notGood1.style.visibility = 'visible'
    btn1Does.style.backgroundColor = 'red'
    btn1Does.style.color = 'yellow'
    word1.innerHTML = 'Does'
    word1.style.color = 'red'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn1Does.disabled = true
})
btn1Do.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    notGood1.style.visibility = 'visible'
    btn1Do.style.backgroundColor = 'red'
    btn1Do.style.color = 'yellow'
    word1.innerHTML = 'Do'
    word1.style.color = 'red'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn1Do.disabled = true
})


// Line 02

let btn2Arent = document.getElementById('btn2Arent')
let btn2Doesnt = document.getElementById('btn2Doesnt')
let btn2Dont = document.getElementById('btn2Dont')
let like2 = document.getElementById('like2')
let notGood2 = document.getElementById('notGood2')
let word2 = document.getElementById('word2')

btn2Dont.addEventListener('click', function() {
    let audio = document.getElementById('right')
    audio.play()
    like2.style.visibility = 'visible'
    notGood2.style.visibility = 'hidden'
    btn2Dont.style.backgroundColor = 'chartreuse'
    btn2Dont.style.color = 'black'
    word2.innerHTML = "don't"
    word2.style.color = 'chartreuse'
    value++
    document.getElementById('score').innerHTML = value


    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn2Dont.disabled = true
    btn2Doesnt.disabled = true
    btn2Arent.disabled = true
})

btn2Doesnt.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    notGood2.style.visibility = 'visible'
    btn2Doesnt.style.backgroundColor = 'red'
    btn2Doesnt.style.color = 'yellow'
    word2.innerHTML = "doesn't"
    word2.style.color = 'red'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn2Doesnt.disabled = true
})
btn2Arent.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    notGood2.style.visibility = 'visible'
    btn2Arent.style.backgroundColor = 'red'
    btn2Arent.style.color = 'yellow'
    word2.innerHTML = "aren't"
    word2.style.color = 'red'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn2Arent.disabled = true
})
// Line 03

let btn3Do = document.getElementById('btn3Do')
let btn3Does = document.getElementById('btn3Does')
let btn3Are = document.getElementById('btn3Are')
let like3 = document.getElementById('like3')
let notGood3 = document.getElementById('notGood3')
let word3 = document.getElementById('word3')

btn3Do.addEventListener('click', function() {
    let audio = document.getElementById('right')
    audio.play()
    like3.style.visibility = 'visible'
    notGood3.style.visibility = 'hidden'
    btn3Do.style.backgroundColor = 'chartreuse'
    btn3Do.style.color = 'black'
    word3.innerHTML = 'Do'
    word3.style.color = 'chartreuse'
    value++
    document.getElementById('score').innerHTML = value


    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn3Do.disabled = true
    btn3Does.disabled = true
    btn3Are.disabled = true
})

btn3Does.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    notGood3.style.visibility = 'visible'
    btn3Does.style.backgroundColor = 'red'
    btn3Does.style.color = 'yellow'
    word3.innerHTML = 'Does'
    word3.style.color = 'red'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn3Does.disabled = true
})
btn3Are.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    notGood3.style.visibility = 'visible'
    btn3Are.style.backgroundColor = 'red'
    btn3Are.style.color = 'yellow'
    word3.innerHTML = 'Are'
    word3.style.color = 'red'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn3Are.disabled = true
})
// Line 04

let btn4Do = document.getElementById('btn4Do')
let btn4Can = document.getElementById('btn4Can')
let btn4Are = document.getElementById('btn4Are')
let like4 = document.getElementById('like4')
let notGood4 = document.getElementById('notGood4')
let word4 = document.getElementById('word4')

btn4Can.addEventListener('click', function() {
    let audio = document.getElementById('right')
    audio.play()
    like4.style.visibility = 'visible'
    notGood4.style.visibility = 'hidden'
    btn4Can.style.backgroundColor = 'chartreuse'
    btn4Can.style.color = 'black'
    word4.innerHTML = 'can'
    word4.style.color = 'chartreuse'
    value++
    document.getElementById('score').innerHTML = value


    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn4Do.disabled = true
    btn4Can.disabled = true
    btn4Are.disabled = true
})

btn4Do.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    notGood4.style.visibility = 'visible'
    btn4Do.style.backgroundColor = 'red'
    btn4Do.style.color = 'yellow'
    word4.innerHTML = 'do'
    word4.style.color = 'red'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn4Do.disabled = true
})
btn4Are.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    notGood4.style.visibility = 'visible'
    btn4Are.style.backgroundColor = 'red'
    btn4Are.style.color = 'yellow'
    word4.innerHTML = 'are'
    word4.style.color = 'red'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn4Are.disabled = true
})
// Line 05

let btn5Are = document.getElementById('btn5Are')
let btn5Does = document.getElementById('btn5Does')
let btn5Do = document.getElementById('btn5Do')
let like5 = document.getElementById('like5')
let notGood5 = document.getElementById('notGood5')
let word5 = document.getElementById('word5')

btn5Are.addEventListener('click', function() {
    let audio = document.getElementById('right')
    audio.play()
    like5.style.visibility = 'visible'
    notGood5.style.visibility = 'hidden'
    btn5Are.style.backgroundColor = 'chartreuse'
    btn5Are.style.color = 'black'
    word5.innerHTML = "Are"
    word5.style.color = 'chartreuse'
    value++
    document.getElementById('score').innerHTML = value


    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn5Do.disabled = true
    btn5Does.disabled = true
    btn5Are.disabled = true
})

btn5Do.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    notGood5.style.visibility = 'visible'
    btn5Do.style.backgroundColor = 'red'
    btn5Do.style.color = 'yellow'
    word5.innerHTML = 'Do'
    word5.style.color = 'red'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn5Do.disabled = true
})
btn5Does.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    notGood5.style.visibility = 'visible'
    btn5Does.style.backgroundColor = 'red'
    btn5Does.style.color = 'yellow'
    word5.innerHTML = 'Does'
    word5.style.color = 'red'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn5Does.disabled = true
})
// Line 06

let btn6Do = document.getElementById('btn6Do')
let btn6Does = document.getElementById('btn6Does')
let btn6Am = document.getElementById('btn6Am')
let like6 = document.getElementById('like6')
let notGood6 = document.getElementById('notGood6')
let word6 = document.getElementById('word6')

btn6Am.addEventListener('click', function() {
    let audio = document.getElementById('right')
    audio.play()
    like6.style.visibility = 'visible'
    notGood6.style.visibility = 'hidden'
    btn6Am.style.backgroundColor = 'chartreuse'
    btn6Am.style.color = 'black'
    word6.innerHTML = "am"
    word6.style.color = 'chartreuse'
    value++
    document.getElementById('score').innerHTML = value


    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn6Do.disabled = true
    btn6Does.disabled = true
    btn6Am.disabled = true
})

btn6Do.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    notGood6.style.visibility = 'visible'
    btn6Do.style.backgroundColor = 'red'
    btn6Do.style.color = 'yellow'
    word6.innerHTML = 'do'
    word6.style.color = 'red'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn6Do.disabled = true
})
btn6Does.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    notGood6.style.visibility = 'visible'
    btn6Does.style.backgroundColor = 'red'
    btn6Does.style.color = 'yellow'
    word6.innerHTML = 'does'
    word6.style.color = 'red'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn6Does.disabled = true
})
// Line 07

let btn7Can = document.getElementById('btn7Can')
let btn7Do = document.getElementById('btn7Do')
let btn7Are = document.getElementById('btn7Are')
let like7 = document.getElementById('like7')
let notGood7 = document.getElementById('notGood7')
let word7 = document.getElementById('word7')

btn7Can.addEventListener('click', function() {
    let audio = document.getElementById('right')
    audio.play()
    like7.style.visibility = 'visible'
    notGood7.style.visibility = 'hidden'
    btn7Can.style.backgroundColor = 'chartreuse'
    btn7Can.style.color = 'black'
    word7.innerHTML = "Can"
    word7.style.color = 'chartreuse'
    value++
    document.getElementById('score').innerHTML = value


    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    
    btn7Are.disabled = true
    btn7Do.disabled = true
    btn7Can.disabled = true
})

btn7Do.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    notGood7.style.visibility = 'visible'
    btn7Do.style.backgroundColor = 'red'
    btn7Do.style.color = 'yellow'
    word7.innerHTML = 'Do'
    word7.style.color = 'red'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn7Do.disabled = true
})
btn7Are.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    btn7Are.style.visibility = 'visible'
    btn7Are.style.backgroundColor = 'red'
    btn7Are.style.color = 'yellow'
    word7.innerHTML = "Are"
    word7.style.color = 'red'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn7Are.disabled = true
})