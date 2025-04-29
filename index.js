import {setoptions} from "./utils.js"

const Region_r = {
    0: [`Qo'ng'irot`, `Beruniy`, `Qorao'zak`, `Taxiatosh`, `To'rtko'l`, `Xo'jayli`, `Chimboy`, `Ellikqal'a`, `Amudaryo`, `Bo'zatov`, `Kegeyli`, `Qonliko'l`, `Mo'ynoq`, `Taxtako'pir`, `Shumanay`],
    1: [`Uchtepa`, `Bektemir`, `Mirzo Ulug'bek`, `Mirobod`, `Sergeli`, `Olmazor`, `Chilonzor`, `Shayxontohur`, `Yunusobod`, `Yakkasaroy`, `Yashnobod`, `Yangi hayot`],
    2: [`Asaka`, `Shahrixon`, `Baliqchi`, `Buloqboshi`, `Qo'rg'ontepa`, `Oltinko'l`, `Xo'jaobod`, `Jalaquduq`, `Izboskan`, `Marhamat`, `Paxtaobod`, `Bo'ston`, `Ulug'nor`],
    3: [`Kogon`, `Qorovulbozor`, `Romitan`, `G'ijduvon`, `Qorako'l`, `Vobkent`, `Jondor`, `Olot`, `Peshku`, `Shofirkon`],
    4: [`G'allaorol`, `Do'stlik`, `Zarbdor`, `Zafarobod`, `Zomin`, `Mirzacho'l`, `Paxtakor`, `Forish`, `Sharof Rashidov`, `Baxmal`, `Yangiobod`, `Arnasoy`],
    5: [`G'uzor`, `Kitob`, `Kasbi`, `Koson`, `Ko'kdala`, `Chiroqchi`, `Yakkabog'`, `Qamashi`, `Mirishkor`, `Muborak`, `Nishon`, `Dehqonobod`],
    6: [`Karmana`, `Navbahor`, `Uchquduq`, `Qiziltepa`, `Nurota`, `Konimex`, `Xatirchi`, `Tomdi`],
    7: [`To'raqo'rg'on`, `Uychi`, `Uchqo'rg'on`, `Kosonsoy`, `Pop`, `Chortoq`, `Chust`, `Yangiqo'rg'on`, `Norin`, `Mingbuloq`, `Yangi Namangan`, `Davlatobod`],
    8: [`Jomboy`, `Toyloq`, `Bulung'ur`, `Ishtixon`, `Narpay`, `Oqdaryo`, `Pastdarg'om`, `Urgut`, `Nurobod`, `Paxtachi`, `Payariq`, `Qo'shrabod`],
    9: [`Sirdaryo`, `Mirzaobod`, `Oqoltin`, `Boyovut`, `Sayxunobod`, `Xovos`, `Sardoba`],
    10: [`Jarqo'rg'on`, `Angor`, `Denov`, `Qumqo'rg'on`, `Sariosiyo`, `Boysun`, `Muzrabot`, `Uzun`, `Sherobod`, `Sho'rchi`, `Bandixon`, `Qiziriq`, `Oltinsoy`],
    11: [`Bo'stonliq`, `Zangiota`, `Qibray`, `Quyichirchiq`, `Chinoz`, `Yuqorichirchiq`, `Oqqo'rg'on`, `Parkent`, `O'rtachirchiq`, `Bo'ka`, `Piskent`],
    12: [`Buvayda`, `Beshariq`, `Bog'dod`, `Dang'ara`, `Quva`, `Qo'shtepa`, `Oltiariq`, `Rishton`, `Toshloq`, `O'zbekiston`, `Uchko'prik`, `Furqat`, `So'x`, `Yozyovon`],
    13: [`Bog'ot`, `Gurlan`, `Tuproqqal'a`, `Hazorasp`, `Xonqa`, `Shovot`, `Qo'shko'pir`, `Yangibozor`, `Yangiariq`]
  };
  
  const REGS = [
    `Qoraqalpog'iston Respublikasi`,
    `Toshkent shahri`,
    `Andijon viloyati`,
    `Buxoro viloyati`,
    `Jizzax viloyati`,
    `Qashqadaryo viloyati`,
    `Navoiy viloyati`,
    `Namangan viloyati`,
    `Samarqand viloyati`,
    `Sirdaryo viloyati`,
    `Surxondaryo viloyati`,
    `Toshkent viloyati`,
    `Farg'ona viloyati`,
    `Xorazm viloyati`
  ];


setoptions(REGS)

let question = document.getElementById("Question")
let EnterAnswer = document.getElementById("EnterAnswer")
let answer = document.getElementById("Answer")
let Confirm = document.getElementById("Confirm")
let Another = document.getElementById("Another")

Confirm.onclick = check
Another.onclick = GenerateQuestion

let RandNumReturner = (min,max) =>{
    return Math.floor(Math.random() * (max-min + 1))+min
}



let RegReturner = () =>{
    let randomN = RandNumReturner(0,REGS.length-1)
    let RandomRNumber = RandNumReturner(0,Region_r[randomN].length - 1)

    console.log(randomN,RandomRNumber)
    return [Region_r[randomN][RandomRNumber],randomN]

}




let real 
let choosen

function GenerateQuestion(){
    [choosen,real] = RegReturner()
    question.textContent = `${choosen} tumani qaysi viloyatda?`
    answer.textContent = `...`
}

function check(){
    console.log();
    
    if (EnterAnswer.value == real){
        answer.textContent = `To'g'ri`
    } else {
        answer.textContent = `Noto'g'ri`   
    }


}



GenerateQuestion()





