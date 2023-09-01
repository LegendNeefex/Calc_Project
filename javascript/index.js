const screen =  document.querySelector('.screen')
const game = document.querySelector('.percent')
let displayValue;
let result;

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.weird').onclick = goal;
    document.querySelector('.divide').onclick = naamess;
    document.querySelector('.seven').onclick = buttons;
    document.querySelector('.eight').onclick = buttons;
    document.querySelector('.nine').onclick = buttons;
    document.querySelector('.times').onclick = school;
    document.querySelector('.four').onclick = buttons;
    document.querySelector('.five').onclick = buttons;
    document.querySelector('.six').onclick = buttons;
    document.querySelector('.minus').onclick = germ;
    document.querySelector('.one').onclick = buttons;
    document.querySelector('.two').onclick = buttons;
    document.querySelector('.three').onclick = buttons;
    document.querySelector('.plus').onclick = boy;
    document.querySelector('.zero').onclick = buttons;
    document.querySelector('.dot').onclick = chaange;
    document.querySelector('#equal-to').onclick = calculation;
    document.querySelector('.clear').onclick = deletee;
})

//added
// const equalTo = document.querySelector('#equal-to')
// equalTo.addEventListener('click', calculation)

game.addEventListener('click', function (e) {
    let evvent = e.target.innerHTML

    if (screen.value.endsWith("^")){

    } else {
        screen.value += evvent
    }
})

function buttons(e) {
    let spove = e.target.innerHTML
    screen.value += spove
    // displayValue = screen.value
}

function deletee() {
    result = "";
    screen.value = result
}

function goal(e) {
    let evvent = e.target.innerHTML

    if (screen.value.endsWith("&pi;")){


    } else {
        screen.value == evvent
        screen.value += 3.142
    }

}

function naamess(e) {
    let evvent = e.target.innerHTML

    if (screen.value.endsWith("/")){

    } else {
        screen.value += evvent
    }
    
}

function school(e) {
    let evvent = e.target.innerHTML


    if (screen.value.endsWith("*")){

    } else {
        screen.value += evvent
    }
}

function germ(e) {
    let evvent = e.target.innerHTML

    if (screen.value.endsWith("-")){
    } else {
        screen.value += evvent
    }
}

function boy(e) {
    let evvent = e.target.innerHTML


    if (screen.value.endsWith("+")){

    } else {
        screen.value += evvent
    }
}

function chaange(e) {
    let evvent = e.target.innerHTML

    if (screen.value.endsWith(".")){

    } else {
        screen.value += evvent
    }
}

function calculation() { 
    let result = eval(screen.value)
    screen.value = result

    if (screen.value.length > 10) {
        screen.value = "Math Error"
    }else{
        screen.value
    }
}