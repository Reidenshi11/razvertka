let width = null; // ширина B
let height = null; // высота H
let lRes = null; //общая длина L
let l_1 = null; //длина до первой линии сгиба
let l_2 = null; //длина до второй линии сгиба
let radius = null; // радиус гибки
let sMater = null; //толщина материала

const figure_1 = document.querySelector('.figure1_container');
const figure_2 = document.querySelector('.figure2_container');
const RESULT_BLOCK = document.querySelector('.result_container');
const RESULT_BLOCK_1 = document.querySelector('.result1');
const RESULT_BLOCK_2 = document.querySelector('.result2');
const RESULT_BLOCK_3 = document.querySelector('.result3');
const BTN_BACK = document.getElementById('title_back');

anim_1 = 'anim_1';
anim_2 = 'anim_2';


document.getElementById('par_figure1').classList.add('skip-link');
document.getElementById('par_figure2').classList.add('skip-link');
RESULT_BLOCK.classList.add('skip-link');
BTN_BACK.classList.remove('inter');

figure_1.oncontextmenu = function() {
    addClass(figure_1, anim_1);
    // setTimeout(removeClass(figure_1, anim_1), 5000);
//    let tim = setTimeout(addClass(figure_1, anim_1), 500);
    
}

figure_2.oncontextmenu = function() {
    addClass(figure_2, anim_2);
}

function addClass(objectDom, addToClass) {
    objectDom.classList.add(`${addToClass}`);
    return
}

function removeClass(objectDom, removeToClass) {
    objectDom.classList.remove(`${removeToClass}`);
    return
}

document.querySelector('.figure1').onclick = function() {
    // figure_2.remove();
    figure_2.classList.add('skip-link');
    document.getElementById('par_figure1').classList.remove('skip-link');
    interTitle();
}

document.querySelector('.figure2').onclick = function() {
    // figure_1.remove();
    figure_1.classList.add('skip-link');
    document.getElementById('par_figure2').classList.remove('skip-link');
    interTitle();
}

function interTitle() {
    BTN_BACK.classList.add('inter');
}

BTN_BACK.onclick = function() {
    figure_1.classList.remove('skip-link');
    figure_2.classList.remove('skip-link');
    document.getElementById('par_figure1').classList.add('skip-link');
    document.getElementById('par_figure2').classList.add('skip-link');
    RESULT_BLOCK.classList.add('skip-link');
    BTN_BACK.classList.remove('inter');
    removeClass(figure_1, anim_1);
    removeClass(figure_2, anim_2);
}

submit_figure1.onclick = function() {
    width = +(document.getElementById('par_B1').value);
    console.log('B:'+ width);
    height = +(document.getElementById('par_H1').value);
    console.log('H:'+ height);
    sMater = +(document.getElementById('par_S1').value);
    console.log('S:'+ sMater);
    radius = +(document.getElementById('par_R1').value);
    console.log('R:'+ radius);

    lRes = (height - radius - sMater) + (width - radius - sMater) + ((3.14 / 2) * (radius + (sMater / 2)));
    l_1 = (height - radius - sMater) + ((3.14 / 4) * (radius + (sMater / 2)));

    console.log('L:'+ lRes);
    console.log('l1:'+ l_1);

    RESULT_BLOCK.classList.remove('skip-link');
    RESULT_BLOCK_1.textContent = ('L: ' + lRes + 'мм.');
    RESULT_BLOCK_2.textContent = ('l1: ' + l_1 + 'мм.');
}


submit_figure2.onclick = function() {
    interTitle();

    width = +(document.getElementById('par_B2').value);
    console.log('B:'+ width);
    height = +(document.getElementById('par_H2').value);
    console.log('H:'+ height);
    sMater = +(document.getElementById('par_S2').value);
    console.log('S:'+ sMater);
    radius = +(document.getElementById('par_R2').value);
    console.log('R:'+ radius);

    lRes = ((height - radius - sMater) * 2) + (width - (radius * 2) - (sMater * 2)) + (2 * (3.14 / 2) * (radius + (sMater / 2)));
    l_1 = (height - radius - sMater)  + ((3.14 / 4) * (radius + (sMater / 2)));
    l_2 = (height - radius - sMater) + (width - (radius * 2) - (sMater * 2)) + ((3.14 / 2) * (radius + (sMater / 2))) + ((3.14 / 4) * (radius + (sMater / 2)));

    console.log('L:'+ lRes);
    console.log('l1:'+ l_1);
    console.log('l2:'+ l_2);

    RESULT_BLOCK.classList.remove('skip-link');
    RESULT_BLOCK_1.textContent = ('L: ' + lRes + 'мм.');
    RESULT_BLOCK_2.textContent = ('l1: ' + l_1 + 'мм.');
    RESULT_BLOCK_3.textContent = ('l2: ' + l_2 + 'мм.');
}


