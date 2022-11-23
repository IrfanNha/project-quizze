// jangan Copas tol gw cape" ngoding lu maling

const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const gif = document.getElementById("gif")

let hitung = 0 ;
let pcr = 0;

const pcrNgomong = () => {
  return[
    "apa iya?",
    "jangan boong",
    "howak",
    "boongnya keliatan",
    "booong banget sih lu..",
    "awas boong dosa lo",
    "masi ngeyel",
    "booooongg....",
    "astaga sgitunya",
    "hadehh..",
    "oke oke percaya gw..",
    "tp kurang yakin gw",
    "oke oke percaya"
  ]
}

const ngomong = (data) => {
  return[
    "Hi selamat dateng, siapa namalu?",
    `Hi ${data?.nama}, berapa usialu?`,
    `Owalah ${data?.usia}, hobi lu apa?`,
    `Keren hobinya ${data?.hobi}, btw dah punya pacar?`,
    `Ooo ${data?.pacar}, okok`,
    "main lagi?",
  ]
}

pertanyaan.innerHTML = ngomong()[0]
btn2.style.display = 'none'
btn3.style.display = 'none'
gif.style.display = 'none'

function btnPcr () {
btn1.style.display = 'none'
btn2.style.display = 'block'
}

function clear () {
  document.getElementById('jawaban').value = ''
}


function mulai () {
  if (document.getElementById('jawaban').value != ''){
    hitung++
  } else {
    alert('isi dlu broh')
  }
  
  if (hitung === 1) {
    setTimeout(delay({nama : jawaban.value}), 1500)
    clear()
  } else if (hitung === 2) {
    setTimeout(delay({usia : jawaban.value}), 1500)
    clear()
  } else if (hitung === 3) {
    setTimeout(delay({hobi : jawaban.value}), 1500)
    btnPcr()
    clear()
  } else if (hitung === 4) {
    setTimeout(delay({pacar : jawaban.value}), 1500)
    clear()
  }

}

function troll() {
  if (jawaban.value != ''){
    pcr++
    btn2.style.display = 'none'
    btn3.style.display = 'block'
    msgTroll()
  } else {
    alert('isi dlu broh')
  }
}
function troll2() {
  if (jawaban.value != ''){
    pcr++
    btn2.style.display = 'block'
    btn3.style.display = 'none'
    msgTroll()
  } else {
    alert('isi dlu broh')
  }

}


function msgTroll () {

  if (pcr === 1){
  setTimeout( delay1(pcrNgomong.value), 1500)
  clear()
  }else if (pcr === 2){
  setTimeout( delay1(pcrNgomong.value), 1500)
  clear()
  }else if (pcr === 3){
  setTimeout( delay1(pcrNgomong.value), 1500)
  clear()
  }else if (pcr === 4){
  setTimeout( delay1(pcrNgomong.value), 1500)
  clear()
  }else if (pcr === 5){
  setTimeout( delay1(pcrNgomong.value), 1500)
  clear()
  }else if (pcr === 6){
  setTimeout( delay1(pcrNgomong.value), 1500)
  clear()
  }else if (pcr === 7){
  setTimeout( delay1(pcrNgomong.value), 1500)
  clear()
  }else if (pcr === 8){
  setTimeout( delay1(pcrNgomong.value), 1500)
  clear()
  }else if (pcr === 9){
  setTimeout( delay1(pcrNgomong.value), 1500)
  clear()
  }else if (pcr === 10){
  setTimeout( delay1(pcrNgomong.value), 1500)
  clear()
  }else if (pcr === 11){
  setTimeout( delay1(pcrNgomong.value), 1500)
  clear()
  }else if (pcr === 12){
  setTimeout( delay1(pcrNgomong.value), 1500)
  clear()
  }else if (pcr === 13){
    btn1.style.display = 'none'
    btn2.style.display = 'none'
    btn3.style.display = 'none'
    jawaban.style.display = 'none'
    pertanyaan.innerHTML = 'thanks udh main | made by: irfan'
    gif.style.display = 'block'

  }
}

function end () {
  btn1.style.display = 'none'
  btn2.style.display = 'none'
  btn3.style.display = 'none'
  jawaban.style.display = 'none'
  pertanyaan.style.display = 'none'
  gif.style.display = 'block'
}




function delay (jawabanOrang) {
  pertanyaan.innerHTML = ngomong(jawabanOrang)[hitung]
}
function delay1 (jawabanOrang1) {
  pertanyaan.innerHTML = pcrNgomong(jawabanOrang1)[pcr]
}

function penyelesaian () {
console.log('selesai...')
}

function selesai () {
console.log('bye cuy')
}