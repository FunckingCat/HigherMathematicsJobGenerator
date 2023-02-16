// Математические функции
// Функция вида f = ax + b
function flineynay(sHash,c,v){
    let a = c;
    let b = v;
    if (Number(sHash[sHash.length - 2]) % 2 != 0) {
        b = -b;
    }

    if (b < 0){
        mngchLin = '{' + a + 'x ' + b + '}';
    }
    else{
        mngchLin = '{' + a + 'x + ' + b + '}';
    }   
    if (Math.abs(a) == 1){
        mngchLin = mngchLin.replace('1','');
    }
    return(mngchLin)
}

// Функция вида f = ax^2 + bx + c,  D извлекается
function fsquard(r,t,y){
    let a = r;
    let b = -a*(t+y);
    let c = a*t*y;

    if (b < 0 && c < 0){
        mngchSquarD = '{' + a + 'x^2 ' + b + 'x ' + c + '}';
    }
    else if (b > 0 && c < 0){
        mngchSquarD = '{' + a + 'x^2 + ' + b + 'x ' + c + '}';
    }
    else if (b < 0 && c > 0){
        mngchSquarD = '{' + a + 'x^2 ' + b + 'x + ' + c + '}';
    }
    else{
        mngchSquarD = '{' + a + 'x^2  + ' + b + 'x + ' + c + '}';
    }
    if (Math.abs(a) == 1){
        mngchSquarD = mngchSquarD.replace('1','');
    }

    return(mngchSquarD)
}

// Функция вида f = ax^2 + bx + c,  D не извлекается
function fsquar(n,m,p){
    let a = n;
    let b = m;
    let c = p;

    if (b < 0 && c < 0){
        mngchSquar = '{' + a + 'x^2 ' + b + 'x ' + c + '}';
    }
    else if (b > 0 && c < 0){
        mngchSquar = '{' + a + 'x^2 + ' + b + 'x ' + c + '}';
    }
    else if (b < 0 && c > 0){
        mngchSquar = '{' + a + 'x^2 ' + b + 'x + ' + c + '}';
    }
    else{
        mngchSquar = '{' + a + 'x^2  + ' + b + 'x + ' + c + '}';
    }
    if (Math.abs(a) == 1){
        mngchSquar = mngchSquar.replace('1','');
    }

    return(mngchSquar)
}

// Функция вида f = ax^2 + c,  D извлекается,  b = 0
function fsquardbnull(q,r,y){
    let a = r;
    let c = y;
    if (Number(q[2]) % 2 != 0) {
        c = -c;
    }

    if (c < 0){
        mngchSquarD = '{' + a + 'x^2 ' + c + '}';
    }
    else{
        mngchSquarD = '{' + a + 'x^2 + ' + c + '}';
    }
    if (Math.abs(a) == 1){
        mngchSquarD = mngchSquarD.replace('1','');
    }

    return(mngchSquarD)
}

// Функция вида f = ax^2 + b,  D извлекается,  c = 0
function fsquardcnull(q,r,y){
    let a = r;
    let b = y;
    if (Number(q[2]) % 2 != 0) {
        b = -b;
    }

    if (b < 0){
        mngchSquarD = '{' + a + 'x^2 ' + b + '}';
    }
    else{
        mngchSquarD = '{' + a + 'x^2 + ' + b + '}';
    }
    if (Math.abs(a) == 1){
        mngchSquarD = mngchSquarD.replace('1','');
    }

    return(mngchSquarD)
}

// Функция вида f = ax^4 + bx^3 + cx^3
function fthirgdegreed(r,t,y){
    let a = r;
    let b = -a*(t+y);
    let c = a*t*y;

    if (b < 0 && c < 0){
        mngchSquarD = '{' + a + 'x^4 ' + b + 'x^3' + c + 'x^2}';
    }
    else if (b > 0 && c < 0){
        mngchSquarD = '{' + a + 'x^4 + ' + b + 'x^3' + c + 'x^2}';
    }
    else if (b < 0 && c > 0){
        mngchSquarD = '{' + a + 'x^4 ' + b + 'x^3 + ' + c + 'x^2}';
    }
    else{
        mngchSquarD = '{' + a + 'x^4  + ' + b + 'x^3 + ' + c + 'x^2}';
    }
    if (Math.abs(a) == 1){
        mngchSquarD = mngchSquarD.replace('1','');
    }

    return(mngchSquarD)
}
// Функция вида f = e^x - очень просто - замена
function fexponentsimple(q){
    
    mngchExp = '{e^' + flineynay(q,Number(q[2]),Number(q[7])) + '}';

    return(mngchExp)
}

// Функция вида f = e^sqrt(ax+b) 
function fexponent(q, i){

    let index;
    if (i >= 10){
        index = i % 10;
        if (index == 0){
            index = Number(q[q.length - 1]);
        }
    }
    else{
        index = (Number(q[i]));
    }

    mngchExp = '{e^{\\sqrt{' + flineynay(q,Number(q[q.length - index - 1]),Number(q[q.length - index + 2])) + '}}}'; 

    return(mngchExp)
}





//  Функция хэширования данных студента
function funhash(){
    let s = document.getElementById('hash').value;
    const fhash = (str, seed = 0) => {
        let h1 = 0xdeadbeef ^ seed,
            h2 = 0x41c6ce57 ^ seed;
        for (let i = 0, ch; i < str.length; i++) {
            ch = str.charCodeAt(i);
            h1 = Math.imul(h1 ^ ch, 2654435761);
            h2 = Math.imul(h2 ^ ch, 1597334677);
        }
        
        h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
        h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
        
        return 4294967296 * (2097151 & h2) + (h1 >>> 0);
    };

    return(fhash(s));    
}

let posled = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

// раскодировка
function dekodirovka(itogovaya){
    let itog = '';

    let arr = '';
    arr =  itogovaya.split('*');
    //console.log(arr)
    for (let w = 1; w < arr.length; w++){
        if (arr[w] == ''){
            itog = itog + '00000000';
        } else {
            let rar = String(arr[w]);
            let kod = 0;
            for (let k = 0; k < rar.length; k=k+1){
                kod = kod + Number(posled.indexOf(rar[k]))*Math.pow(60,k);
            }
            if (kod != 0){
            let strKod = String(kod);
            while (strKod.length != 8){
                strKod = '0' + strKod;
            }
            itog = itog + strKod;
            }
        }       
    }
    itog = itog.substring(0, 32);
    console.log(itog);
    return(itog);
}

// //  Сашина функция на недопущение повторений
// function proverkaPovtorov(kolichestvo, strokSmena, fullHash, koef, max){
//     let sIndex;
//     let inda = (Number(fullHash[0])+kolichestvo)%16;
//     let indb = (Number(fullHash[3])+kolichestvo)%16;
//     //console.log(inda,indb);
//     let ind = Number(fullHash[inda]);
//     ind = ind * koef;
//     //console.log(ind)
//     ind = Math.floor(ind);
//     sIndex = String(ind)+fullHash[indb];
//     if (Number(sIndex) > max){
//         sIndex = '01';
//     }
//     //console.log(sIndex);
//     for (let r = 0; r < kolichestvo; r++){
//         //console.log(strokSmena);
//         for (let i = 0; i < strokSmena.length; i=i+2){
//             let indexTek = strokSmena[i] + strokSmena[i+1];
//             //console.log(typeof sIndex, typeof indexTek);
//             if ((sIndex === indexTek) || (Number(sIndex) > max)){
//                 i = -2;
//                 inda = (kolichestvo+Number(inda)+11)%16;
//                 indb = (Number(indb)+3)%10;
//                 ind = Number(fullHash[inda]);
//                 ind = ind * koef;
//                 ind = String(Math.floor(ind));
//                 sIndex = ind+String(String(indb));
//                 //console.log(index);
//                 //console.log(sIndex)
                
//             }
//         }
//         strokSmena = strokSmena + sIndex;
//         //console.log(strokSmena);
//     }
    
//     //console.log(strokSmena);
//     return strokSmena;
// }

//  Сашина функция на недопущение повторений
function proverkaPovtorov(kolichestvo, strokSmena, fullHash, koef, max){
    let sIndex;
    let fullStrok = '';
    let scht = 1;
    let inda = (Number(fullHash[0])+kolichestvo)%16;
    let indb = (Number(fullHash[3])+kolichestvo)%16;
    //console.log(inda,indb);
    let ind = Number(fullHash[inda]);
    ind = ind * koef;
    //console.log(ind)
    ind = Math.floor(ind);
    sIndex = String(ind)+fullHash[indb];
    if (Number(sIndex) > max){
        sIndex = '01';
    }
    //console.log(sIndex);
    for (let r = 0; r < kolichestvo; r++){
        //console.log(strokSmena);
        if (scht > max){
            fullStrok = fullStrok + strokSmena;
            strokSmena = '';
            sIndex = '00';
            scht = 0;
        } else {
            for (let i = 0; i < strokSmena.length; i=i+2){
                let indexTek = strokSmena[i] + strokSmena[i+1];
                //console.log(typeof sIndex, typeof indexTek);
                if ((sIndex === indexTek) || (Number(sIndex) > max)){
                    i = -2;
                    inda = (kolichestvo+Number(inda)+11)%16;
                    indb = (Number(indb)+3)%10;
                    ind = Number(fullHash[inda]);
                    ind = ind * koef;
                    ind = String(Math.floor(ind));
                    sIndex = ind+String(String(indb));
                    //console.log(index);
                    //console.log(sIndex)
                }
            }
            strokSmena = strokSmena + sIndex;
            scht = scht + 1;
            //console.log(strokSmena);
    }}
    fullStrok = fullStrok + strokSmena;
    //console.log(fullStrok);
    return fullStrok;
}


// Функция для интеграла Метода замены переменной 1 уровня сложности
function metodZameniPeremenSimple(hash, kolvo){       
    let random;
    let strokSmena = '';

    kolichestvo = Number(kolvo);
    
    let fullHash = hash * kolichestvo;
    let sHash = String(hash);
    let sFullHash = String(fullHash);
    sFullHash = sFullHash.replaceAll('0', '2');
    let koef = 0.13;
    let max = 10; 
    
    let cleanStr = proverkaPovtorov(kolichestvo, strokSmena, sFullHash, koef, max); 
    console.log(cleanStr);

    let k = Number(sHash[sHash.length - 3]);
    let a2 = Number(sHash[sHash.length - 1]);
    let c = Number(sHash[sHash.length - 14]);
    let b3 = Number(sHash[sHash.length - 2]);
    let a = Number(sHash[sHash.length - 5]);
    let b = Number(sHash[sHash.length - 9]);

    let integral;
    for (let i = 0; i < cleanStr.length; i=i+2){
        random = cleanStr[i] + cleanStr[i+1];
        //console.log(random);
        switch (random) {
            // 1.1.1
            case '01':
                integral = '{\\sin(' + flineynay(sHash, Number(sHash[sHash.length - 1]), Number(sHash[sHash.length - 5])) + ')}'; 
                break;
            // 1.1.2
            case '02':
                integral = '{\\cos(\\frac{x}{'+a2+'})}'; 
                break;
            // 1.1.3
            case '03':
                integral = '{'+b3+'^{'+a+'x}}'; 
                break;
            // 1.1.4
            case '04':
                integral = '{\\frac{1}{'+b3+'^{'+a+'x}}}'; 
                break;
            // 1.1.5
            case '05':
                integral = '{\\frac{\\sin\\sqrt{x}}{\\sqrt{x}}}'; 
                break;
            // 1.1.6
            case '06':
                integral = '{\\frac{x^3}{(x-'+c+')^2}}'; 
                break;
            // 1.1.7
            case '07':
                integral = '{\\frac{e^x}{'+a+'e^x'+b+'}}'; 
                break;
            // 1.1.8
            case '08':
                integral = '{\\frac{x}{'+a+'x^2}}'; 
                break;
            // 1.1.9
            case '09':
                integral = '{e^{'+a+'x}}'; 
                break;
            // 1.1.10
            case '10':
                integral = '{sin^'+k+'xcosx}'; 
                break;
            default:
                integral = '{cos^'+k+'{\\cdot}'+'xsinx}'; 
        }

        let elem = document.getElementById('generated');
        let child = document.createElement("li");
        child.className="listItem";
        child.innerHTML = 'Найти неопределённый интеграл <SPAN></SPAN>';
        elem.appendChild(child);
        elem = child.childNodes[1];
    
        katex.render('\\int ' + integral + ' dx', elem, {
            throwOnError: false
        });
    }
}

// Функция для интеграла Метода замены переменной 2 уровня сложности
function metodZameniPeremenNormal(hash, kolvo){       
    let random;
    let strokSmena = '';

    kolichestvo = Number(kolvo);
    
    let fullHash = hash * kolichestvo;
    let sHash = String(hash);
    let sFullHash = String(fullHash);
    sFullHash = sFullHash.replaceAll('0', '2');
    let koef = 0.34;
    let max = 30; 
    
    let cleanStr = proverkaPovtorov(kolichestvo, strokSmena, sFullHash, koef, max); 
    //console.log(cleanStr);

    let k = Number(sHash[sHash.length - 9]);
    let a = Number(sHash[sHash.length - 2]);
    let b = Number(sHash[sHash.length - 10]);
    let c = Number(sHash[sHash.length - 7]);


    let integral;
    for (let i = 0; i < cleanStr.length; i=i+2){
        random = cleanStr[i] + cleanStr[i+1];
        //console.log(random);
        switch (random) {
            // 1.2.1
            case '01':
                integral = '{\\frac{\\sqrt[3]{arctgx}}{1+x^2}}'; 
                break;
            // 1.2.2
            case '02':
                integral = '{\\frac{1}{x^2cos^2\\frac{1}{x}}}'; 
                break;
            case '03':
            // 1.2.3
                integral = '{\\frac{coslnx}{x}}'; 
                break;
            //1.2.4
            case '04':
                integral = '{x('+flineynay(sHash, Number(sHash[sHash.length - 2]), Number(sHash[sHash.length - 3]))^+k+'}'; 
                break;
            //1.2.5
            case '05':
                integral = '{\\sqrt{\\frac{'+a+'arcsinx + '+b+'}{1-x^2}}}'; 
                break;
            //1.2.6
            case '06':
                integral = '\\frac{\\sin{('+a+'\\sqrt{x}+'+b+')}}{\\sqrt{x}}'; 
                break;
            //1.2.7
            case '07':
                integral = '{\\frac{\\sqrt['+k+']{'+a+'lnx+'+b+'}}{x}}'; 
                break;
            //1.2.8
                case '08':
                integral = '{\\frac{x^'+(k-1)+'}{'+a+'x^k+b'+b+'}}'; 
                break;
            //1.2.9
            case '09':
                integral = '{\\frac{\\sqrt['+k+']{tg^'+b+'x}}{cos^2'+a+'x}}'; 
                break;
            //1.2.10
            case '10':
                integral = '\\frac{\\cos{('+a+'arctgx+'+b+')}}{1+x^2}'; 
                break;
            //1.2.11
            case '11':
                integral = '\\frac{\\sin{(\\frac{'+a+'}{x^'+(a-1)+'})}}{x^'+k+'}'; 
                break;
            //1.2.12
            case '12':
                integral = '\\frac{('+a+'tgx+'+b+')^'+k+'}{cos^2x}'; 
                break;
            //1.2.13
            case '13':
                integral = '\\frac{\\sqrt['+k+']{'+b+'+'+a+'\\sqrt{x}}}{\\sqrt{x}}'; 
                break;
            //1.2.14
            case '14':
                integral = '{\\frac{'+k+'^x}{'+a+k+'^2x+'+b+'}}'; 
                break;
            //1.2.15
            case '15':
                integral = '\\frac{'+a+'^{tgx}}{\\cos^2x}'; 
                break;
            //1.2.16
            case '16':
                integral = '{\\frac{1}{xln^'+k+'x}}'; 
                break;
            //1.2.17
            case '17':
                integral = '{\\frac{x^'+(k-1)+'}{sin^2(x^'+k+'+'+b+')}}'; 
                break;
            //1.2.18
            case '18':
                integral = '{\\frac{cos('+a+'\\sqrt{x}+'+b+')}{\\sqrt{x}}}'; 
                break;
            //1.2.19
            case '19':
                integral = 'x^{'+(k-1)+'}\\sqrt{'+a+'x^'+k+'+'+b+'}'; 
                break;
            //1.2.20
            case '20':
                integral = '\\frac{1}{'+b+'+\\sqrt['+k+']{x+'+a+'}}'; 
                break;
            //1.2.21
            case '21':
                integral = '{\\frac{1}{x\\sqrt{'+a+'+x^'+k+'}}}'; 
                break;
            //1.2.22
            case '22':
                integral = '\\cos{x}\\sin{('+a+'\\sin{x}+1)}'; 
                break;
            //1.2.23
            case '23':
                integral = '\\frac{\\cos{x}}{\\sin^2{('+a+'\\sin{x}+'+b+')}}'; 
                break;
            //1.2.24
            case '24':
                integral = '{'+k+'^x('+k+'^x+'+b+')^'+a+'}'; 
                break;
            //1.2.25
            case '25':
                integral = '{\\frac{x^2}{\\sqrt['+k+']{'+a+'x+'+b+'}}}'; 
                break;
            //1.2.26
            case '26':
                integral = '{'+c+'^x\\cos('+a+c+'^x}'; 
                break;
            //1.2.27
            case '27':
                integral = '{\\frac{1}{\\sqrt{'+a+'e^x+'+b+'}}}'; 
                break;
            //1.2.28
            case '28':
                integral = '\\frac{1}{('+flineynay(sHash, Number(sHash[sHash.length - 2]), Number(sHash[sHash.length - 3]))+')\\sqrt{x}}'; 
                break;
            //1.2.29
            case '29':
                integral = '{\\frac{1}{\\sqrt['+k+']{('+flineynay(sHash, Number(sHash[sHash.length - 2]), Number(sHash[sHash.length - 3]))+')^'+(k-1)+'}}}'; 
                break;
            //1.2.30
            case '30':
                integral = '{\\frac{1}{('+flineynay(sHash, Number(sHash[sHash.length - 2]), Number(sHash[sHash.length - 3]))+')^'+k+'}}'; 
                break;
            default:
                integral = '{\\frac{ln^'+k+'x}{x}}'; 
        }

        let elem = document.getElementById('generated');
        let child = document.createElement("li");
        child.className="listItem";
        child.innerHTML = 'Найти неопределённый интеграл <SPAN></SPAN>';
        elem.appendChild(child);
        elem = child.childNodes[1];
    
        katex.render('\\int ' + integral + ' dx', elem, {
            throwOnError: false
        });
    }
}

// Функция для интеграла Метода замены переменной 3 уровня сложности
function metodZameniPeremenHard(hash, kolvo){       
    let random;
    let strokSmena = '';

    kolichestvo = Number(kolvo);
    
    let fullHash = hash * kolichestvo;
    let sHash = String(hash);
    let sFullHash = String(fullHash);
    sFullHash = sFullHash.replaceAll('0', '2');
    let koef = 0.13;
    let max = 11; 
    
    let cleanStr = proverkaPovtorov(kolichestvo, strokSmena, sFullHash, koef, max); 
    //console.log(cleanStr);

    let a = Number(sHash[sHash.length - 5]);
    let b = Number(sHash[sHash.length - 9]);
    let k = Number(sHash[sHash.length - 11]);
    let c = Number(sHash[sHash.length - 1]);

    let integral;
    for (let i = 0; i < cleanStr.length; i=i+2){
        random = cleanStr[i] + cleanStr[i+1];
        //console.log(random);
        switch (random) {
            //1.3.1
            case '01':
                integral = '{{x^2}'+'\\cdot'+'{\\sqrt[3]{' + flineynay(sHash, Number(sHash[sHash.length - 2]), Number(sHash[sHash.length - 4])) + '}}}'; 
                break;
            //1.3.2
            case '02':
                integral = '{e^{'+a+'x^3+'+b+'}x^2}'; 
                break;
            //1.3.3
            case '03':
                integral = '{\\frac{'+c+'^x+'+b+'}{'+c+'^x-'+a+'}}'; 
                break;
            //1.3.4
            case '04':
                integral = '{\\frac{1}{\\sqrt{x}+'+a+'\\sqrt[4]{x}}}'; 
                break;
            //1.3.5
            case '05':
                integral = '{\\frac{\\sqrt{x+'+a+'}+'+b+'}{\\sqrt{x+'+a+'}+'+c+'}}'; 
                break;
            //1.3.6
            case '06':
                integral = '{\\frac{\\sqrt{2+'+k+'}{x}}{'+a+'\\sqrt['+k+']{x}}}'; 
                break;
            //1.3.7
            case '07':
                integral = '{\\frac{1}{'+b+'+'+a+'^{'+k+'x}}}'; 
                break;
            //1.3.8
            case '08':
                integral = '{\\frac{\\sqrt{'+ flineynay(sHash, Number(sHash[sHash.length - 2]), Number(sHash[sHash.length - 3])) + '}}{'+ flineynay(sHash, Number(sHash[sHash.length - 2]), Number(sHash[sHash.length - 3])) + '}}'; 
                break;
            //1.3.9
            case '09':
                integral = '{\\frac{\\sqrt{x}}{'+b+'-\\sqrt{x}}}'; 
                break;
            //1.3.10
            case '10':
                integral = '{\\frac{\\sqrt[3]{x+'+a+'}}{x+'+b+'}}'; 
                break;
            //1.3.11
            case '11':
                integral = '{x^2\\sqrt[4]{'+ flineynay(sHash, Number(sHash[sHash.length - 2]), Number(sHash[sHash.length - 3])) + '}}'; 
                break;
            default:
                integral = '{\\sqrt{\\frac{x+'+a+'}{x+'+b+'}}}'; 
        }

        let elem = document.getElementById('generated');
        let child = document.createElement("li");
        child.className="listItem";
        child.innerHTML = 'Найти неопределённый интеграл <SPAN></SPAN>';
        elem.appendChild(child);
        elem = child.childNodes[1];
    
        katex.render('\\int ' + integral + ' dx', elem, {
            throwOnError: false
        });
    }
}

// Функция для интеграла Метода интегрирования по частям 1 уровня сложности
function metodIntegririovPoChastyamSimple(hash, kolvo){       
    let random;
    let strokSmena = '';

    kolichestvo = Number(kolvo);
    
    let fullHash = hash * kolichestvo;
    let sHash = String(hash);
    let sFullHash = String(fullHash);
    sFullHash = sFullHash.replaceAll('0', '2');
    let koef = 0.1;
    let max = 7; 
    
    let cleanStr = proverkaPovtorov(kolichestvo, strokSmena, sFullHash, koef, max); 
    //(cleanStr);

    let a = Number(sHash[sHash.length - 14]);

    let integral;
    for (let i = 0; i < cleanStr.length; i=i+2){
        random = cleanStr[i] + cleanStr[i+1];
        //console.log(random);
        switch (random) {
            //2.1.1
            case '01':
                integral = '{{x}'+'\\cdot'+'{arctgx}}'; 
                break;
            //2.1.2
            case '02':
                integral = '{\\frac{1}{x^2}lnx}'; 
                break;
            //2.1.3
            case '03':
                integral = '{x^2cosx}'; 
                break;
            //2.1.4
            case '04':
                integral = '{arctg\\sqrt{x+'+a+'}}'; 
                break;
            //2.1.5
            case '05':
                integral = '{x^2'+a+'^x}'; 
                break;
            //2.1.6
            case '06':
                integral = '{xe^x}'; 
                break;
            //2.1.7
            case '07':
                integral = '{lnx}'; 
                break;
            default:
                integral = '{xcos'+a+'x}'; 
        }

        let elem = document.getElementById('generated');
        let child = document.createElement("li");
        child.className="listItem";
        child.innerHTML = 'Найти неопределённый интеграл <SPAN></SPAN>';
        elem.appendChild(child);
        elem = child.childNodes[1];
    
        katex.render('\\int ' + integral + ' dx', elem, {
            throwOnError: false
        });
    }
}

// Функция для интеграла Метода интегрирования по частям 2 уровня сложности
function metodIntegririovPoChastyamNormal(hash, kolvo){       
    let random;
    let strokSmena = '';

    kolichestvo = Number(kolvo);
    
    let fullHash = hash * kolichestvo;
    let sHash = String(hash);
    let sFullHash = String(fullHash);
    sFullHash = sFullHash.replaceAll('0', '2');
    let koef = 0.1;
    let max = 9; 
    
    let cleanStr = proverkaPovtorov(kolichestvo, strokSmena, sFullHash, koef, max); 
    //console.log(cleanStr);

    let a = Number(sHash[sHash.length - 2]);
    let b = Number(sHash[sHash.length - 7]);
    let c = Number(sHash[sHash.length - 9]);

    let integral;
    for (let i = 0; i < cleanStr.length; i=i+2){
        random = cleanStr[i] + cleanStr[i+1];
        //console.log(random);
        switch (random) {
            //2.2.1
            case '01':
                integral = '{e^{\\sqrt{'+ flineynay(sHash, Number(sHash[sHash.length - 2]), Number(sHash[sHash.length - 4])) + '}}}'; 
                break;
            //2.2.2
            case '02':
                integral = '{\\cos{x}'+'\\cdot'+'\\arctg(\\sin{x})}'; 
                break;
            //2.2.3
            case '03':
                integral = '{(x^2+'+b+'x)\\sin'+a+'x}'; 
                break;
            //2.2.4
            case '04':
                integral = '{xtg^2x}'; 
                break;
            //2.2.5
            case '05':
                integral = '{(' + flineynay(sHash, Number(sHash[sHash.length - 2]), Number(sHash[sHash.length - 3])) + ')\\sin\\frac{x}{2}}'; 
                break;
            //2.2.6
            case '06':
                integral = '{(x^2+'+b+'x)e^{x}}'; 
                break;
            //2.2.7
            case '07':
                integral = '{x\\sin'+a+'x\\cos'+c+'x}'; 
                break;
            //2.2.8
            case '08':
                integral = '{'+c+'^xarctg'+c+'^x}'; 
                break;
            //2.2.9
            case '09':
                integral = '{arcsin\\sqrt{' + flineynay(sHash, Number(sHash[sHash.length - 2]), Number(sHash[sHash.length - 3])) + '}}'; 
                break;
            default:
                integral = '{'+c+'^{-x}arctg'+c+'^x}'; 
        }

        let elem = document.getElementById('generated');
        let child = document.createElement("li");
        child.className="listItem";
        child.innerHTML = 'Найти неопределённый интеграл <SPAN></SPAN>';
        elem.appendChild(child);
        elem = child.childNodes[1];
    
        katex.render('\\int ' + integral + ' dx', elem, {
            throwOnError: false
        });
    }
}

// Функция для интеграла Метода интегрирования по частям 3 уровня сложности
function metodIntegririovPoChastyamHard(hash, kolvo){       
    let random;
    let strokSmena = '';

    kolichestvo = Number(kolvo);
    
    let fullHash = hash * kolichestvo;
    let sHash = String(hash);
    let sFullHash = String(fullHash);
    sFullHash = sFullHash.replaceAll('0', '2');
    let koef = 0.1;
    let max = 5; 
    
    let cleanStr = proverkaPovtorov(kolichestvo, strokSmena, sFullHash, koef, max); 
    //console.log(cleanStr);

    let a = Number(sHash[sHash.length - 2]);
    let k = Number(sHash[sHash.length - 12]);
    let c = Number(sHash[sHash.length - 5]);
    let b = Number(sHash[sHash.length - 3]);


    let integral;
    for (let i = 0; i < cleanStr.length; i=i+2){
        random = cleanStr[i] + cleanStr[i+1];
        //console.log(random);
        switch (random) {
            //2.3.1
            case '01':
                integral = '{ln('+ fsquard(1,Number(sHash[sHash.length - 2]), Number(sHash[sHash.length - 4])) +')}'; 
                break;
            //2.3.2
            case '02':
                integral = '{x^'+(k-1)+'arctg('+a+'x^'+k+'+'+b+')}'; 
                break;
            //2.3.3
            case '03':
                integral = '{\\frac{1}{(x^2+'+(a*a)+')^'+k+'}}'; 
                break;
            //2.3.4
            case '04':
                integral = '{('+ fsquard(1,Number(sHash[sHash.length - 2]), Number(sHash[sHash.length - 4])) +')cos'+a+'x}'; 
                break;
            //2.3.5
            case '05':
                integral = '{x^'+(k-1)+'ln('+c+'+x^'+k+')}'; 
                break;
            default:
                integral = '{(x-cos'+a+'x)^2}';
        }

        let elem = document.getElementById('generated');
        let child = document.createElement("li");
        child.className="listItem";
        child.innerHTML = 'Найти неопределённый интеграл <SPAN></SPAN>';
        elem.appendChild(child);
        elem = child.childNodes[1];
    
        katex.render('\\int ' + integral + ' dx', elem, {
            throwOnError: false
        });
    }
}

// Функция для интеграла Метода интегрирования по частям доп 1 уровня сложности
function metodIntegririovPoChastyamDopSimple(hash, kolvo){       
    let random;
    let strokSmena = '';

    kolichestvo = Number(kolvo);
    
    let fullHash = hash * kolichestvo;
    let sHash = String(hash);
    let sFullHash = String(fullHash);
    sFullHash = sFullHash.replaceAll('0', '2');
    let koef = 0.1;
    let max = 1; 
    
    let cleanStr = proverkaPovtorov(kolichestvo, strokSmena, sFullHash, koef, max); 
    //console.log(cleanStr);

    let a = Number(sHash[sHash.length - 13]);
    let b = Number(sHash[sHash.length - 1]);

    let integral;
    for (let i = 0; i < cleanStr.length; i=i+2){
        random = cleanStr[i] + cleanStr[i+1];
        //console.log(random);
        switch (random) {
            //3.3.1
            case '01':
                integral = '{e^{'+a+'x}\\cos'+b+'x}'; 
                break;
            //3.3.2
            default:
                integral = '{e^{'+a+'x}\\sin'+b+'x}';
        }

        let elem = document.getElementById('generated');
        let child = document.createElement("li");
        child.className="listItem";
        child.innerHTML = 'Найти неопределённый интеграл <SPAN></SPAN>';
        elem.appendChild(child);
        elem = child.childNodes[1];
    
        katex.render('\\int ' + integral + ' dx', elem, {
            throwOnError: false
        });
    }
}

// Функция для интеграла Метода интегрирования рациональных дробей 1 уровня сложности
function metodIntegririovRacDrobSimple(hash, kolvo){       
    let random;
    let strokSmena = '';

    kolichestvo = Number(kolvo);
    
    let fullHash = hash * kolichestvo;
    let sHash = String(hash);
    let sFullHash = String(fullHash);
    sFullHash = sFullHash.replaceAll('0', '2');
    let koef = 0.1;
    let max = 8; 
    
    let cleanStr = proverkaPovtorov(kolichestvo, strokSmena, sFullHash, koef, max); 
    //console.log(cleanStr);

    let a1 = Number(sHash[sHash.length - 1]);  // желательно не больше 4
    let c1 = Number(sHash[sHash.length - 4]);  // желательно не больше 20
    let b1 = Number(sHash[sHash.length - 6]);  // желательно не больше 10
    if (Number(sHash[sHash.length - 1]) % 2 != 0) {
        b1 = -b1;
    }
    let a2 = Number(sHash[sHash.length - 3]);  //  не больше 4
    let x1 = Number(sHash[sHash.length - 5]);
    let x2 = Number(sHash[sHash.length - 1]);
    let b22 = x1+x2;
    let c22 = -(x1*x2);
    if (Number(sHash[sHash.length - 4]) % 2 != 0) {
        b22 = -b22;
        c22 = -c22
    }

    if (x1 == x2){
        x1 =+ 1;
    }
    if (Number(sHash[sHash.length - 7]) % 2 != 0 && Number(sHash[sHash.length - 2]) < 5){
        x1 = -x1;
    } 
    else if (Number(sHash[sHash.length - 4])% 2 == 0 && Number(sHash[sHash.length - 2]) < 5){
        x2 = -x2
    }
    else if (Number(sHash[sHash.length - 3])% 2 == 0 && Number(sHash[sHash.length - 2]) > 5){
        x1 = -x1;
        x2 = -x2;
    }
    
    let b2 = -(x1+x2);
    let c2 = x1*x2;

    let a22 = Number(sHash[sHash.length - 5]);
    if (Number(sHash[sHash.length - 2]) % 2 != 0) {
        a22 = -a22;
    }

    let integral;
    for (let i = 0; i < cleanStr.length; i=i+2){
        random = cleanStr[i] + cleanStr[i+1];
        //console.log(random);
        switch (random) {
            case '01':
                integral = '\\frac{1}';
                if (b2 < 0 && c2 < 0){
                    fp2 = '{x' + '(x^2 ' + b2 + 'x ' + c2 + ')}';   // проверка на D > 0
                }
                else if (b2 < 0 && c2 > 0){
                    fp2 = '{x' + '(x^2 ' + b2 + 'x + ' + c2 + ')}';   // проверка на D > 0
                }
                else if (b2 > 0 && c2 > 0){
                    fp2 = '{x' + '(x^2 + ' + b2 + 'x + ' + c2 + ')}';   // проверка на D > 0
                }
                else{
                    fp2 = '{x' + '(x^2 + ' + b2 + 'x ' + c2 + ')}';   // проверка на D > 0
                }
                if (Math.abs(a1) == 1){
                    integral = integral.replace('1','');
                }
                if (Math.abs(b2) == 1){
                    fp2 = fp2.replace('1','');
                }
                integral = integral + fp2;
                break;
            case '02':
                integral = '\\frac{1}';
                if (b2 < 0 && c2 < 0){
                    fp2 = '{x^2 ' + b2 + 'x ' + c2 + '}';  // только 3 числителя  - 1, 2, 4, def ***
                }
                else if (b2 > 0 && c2 < 0){
                    fp2 = '{x^2 + ' + b2 + 'x ' + c2 + '}';  // только 3 числителя  - 1, 2, 4, def ***
                }
                else if (b2 < 0 && c2 > 0){
                    fp2 = '{x^2 ' + b2 + 'x + ' + c2 + '}';  // только 3 числителя  - 1, 2, 4, def ***
                }
                else {
                    fp2 = '{x^2 + ' + b2 + 'x + ' + c2 + '}';  // только 3 числителя  - 1, 2, 4, def ***
                }
                if (Math.abs(b2) == 1){
                    fp2 = fp2.replace('1','');
                }
                integral = integral + fp2;
                break;
            case '03':
                integral = '\\frac{1}';
                if (a22 > 0 && b2 < 0 && c2 < 0){
                    fp2 = '{(x +' + a22 + ')' + '(x^2 ' + b2 + 'x ' + c2 + ')}';  // D > 0
                }
                else if (a22 > 0 && b2 < 0 && c2 > 0){
                    fp2 = '{(x +' + a22 + ')' + '(x^2  ' + b2 + 'x + ' + c2 + ')}';  // D > 0
                }
                else if (a22 > 0 && b2 > 0 && c2 < 0){
                    fp2 = '{(x +' + a22 + ')' + '(x^2 + ' + b2 + 'x ' + c2 + ')}';  // D > 0
                }
                else if (a22 > 0 && b2 > 0 && c2 > 0){
                    fp2 = '{(x +' + a22 + ')' + '(x^2 + ' + b2 + 'x + ' + c2 + ')}';  // D > 0
                }
                else if (a22 < 0 && b2 < 0 && c2 < 0){
                    fp2 = '{(x ' + a22 + ')' + '(x^2 ' + b2 + 'x ' + c2 + ')}';  // D > 0
                }
                else if (a22 < 0 && b2 < 0 && c2 > 0){
                    fp2 = '{(x ' + a22 + ')' + '(x^2 ' + b2 + 'x + ' + c2 + ')}';  // D > 0
                }
                else if (a22 < 0 && b2 > 0 && c2 < 0){
                    fp2 = '{(x ' + a22 + ')' + '(x^2 + ' + b2 + 'x ' + c2 + ')}';  // D > 0
                }
                else{
                    fp2 = '{(x ' + a22 + ')' + '(x^2 + ' + b2 + 'x + ' + c2 + ')}';  // D > 0
                }
                if (Math.abs(b2) == 1){
                    fp2 = fp2.replace('1','');
                }
                integral = integral + fp2;
                break;
            case '04':
                integral = '\\frac{x}';
                if (b2 < 0 && c2 < 0){
                    fp2 = '{x' + '(x^2 ' + b2 + 'x ' + c2 + ')}';   // проверка на D > 0
                }
                else if (b2 < 0 && c2 > 0){
                    fp2 = '{x' + '(x^2 ' + b2 + 'x + ' + c2 + ')}';   // проверка на D > 0
                }
                else if (b2 > 0 && c2 > 0){
                    fp2 = '{x' + '(x^2 + ' + b2 + 'x + ' + c2 + ')}';   // проверка на D > 0
                }
                else{
                    fp2 = '{x' + '(x^2 + ' + b2 + 'x ' + c2 + ')}';   // проверка на D > 0
                }
                if (Math.abs(a1) == 1){
                    integral = integral.replace('1','');
                }
                if (Math.abs(b2) == 1){
                    fp2 = fp2.replace('1','');
                }
                integral = integral + fp2;
                break;
            case '05':
                integral = '\\frac{x}';
                if (b2 < 0 && c2 < 0){
                    fp2 = '{x^2 ' + b2 + 'x ' + c2 + '}';  // только 3 числителя  - 1, 2, 4, def ***
                }
                else if (b2 > 0 && c2 < 0){
                    fp2 = '{x^2 + ' + b2 + 'x ' + c2 + '}';  // только 3 числителя  - 1, 2, 4, def ***
                }
                else if (b2 < 0 && c2 > 0){
                    fp2 = '{x^2 ' + b2 + 'x + ' + c2 + '}';  // только 3 числителя  - 1, 2, 4, def ***
                }
                else {
                    fp2 = '{x^2 + ' + b2 + 'x + ' + c2 + '}';  // только 3 числителя  - 1, 2, 4, def ***
                }
                if (Math.abs(b2) == 1){
                    fp2 = fp2.replace('1','');
                }
                integral = integral + fp2;
                break;
            case '06':
                integral = '\\frac{x}';
                if (a22 > 0 && b2 < 0 && c2 < 0){
                    fp2 = '{(x +' + a22 + ')' + '(x^2 ' + b2 + 'x ' + c2 + ')}';  // D > 0
                }
                else if (a22 > 0 && b2 < 0 && c2 > 0){
                    fp2 = '{(x +' + a22 + ')' + '(x^2  ' + b2 + 'x + ' + c2 + ')}';  // D > 0
                }
                else if (a22 > 0 && b2 > 0 && c2 < 0){
                    fp2 = '{(x +' + a22 + ')' + '(x^2 + ' + b2 + 'x ' + c2 + ')}';  // D > 0
                }
                else if (a22 > 0 && b2 > 0 && c2 > 0){
                    fp2 = '{(x +' + a22 + ')' + '(x^2 + ' + b2 + 'x + ' + c2 + ')}';  // D > 0
                }
                else if (a22 < 0 && b2 < 0 && c2 < 0){
                    fp2 = '{(x ' + a22 + ')' + '(x^2 ' + b2 + 'x ' + c2 + ')}';  // D > 0
                }
                else if (a22 < 0 && b2 < 0 && c2 > 0){
                    fp2 = '{(x ' + a22 + ')' + '(x^2 ' + b2 + 'x + ' + c2 + ')}';  // D > 0
                }
                else if (a22 < 0 && b2 > 0 && c2 < 0){
                    fp2 = '{(x ' + a22 + ')' + '(x^2 + ' + b2 + 'x ' + c2 + ')}';  // D > 0
                }
                else{
                    fp2 = '{(x ' + a22 + ')' + '(x^2 + ' + b2 + 'x + ' + c2 + ')}';  // D > 0
                }
                if (Math.abs(b2) == 1){
                    fp2 = fp2.replace('1','');
                }
                integral = integral + fp2;
                break;
            case '07':
                if (b1 < 0){
                    integral = '\\frac{' + a1 + 'x ' + b1 + '}';
                }
                else{
                    integral = '\\frac{' + a1 + 'x + ' + b1 + '}';
                }
                if (b2 < 0 && c2 < 0){
                    fp2 = '{x' + '(x^2 ' + b2 + 'x ' + c2 + ')}';   // проверка на D > 0
                }
                else if (b2 < 0 && c2 > 0){
                    fp2 = '{x' + '(x^2 ' + b2 + 'x + ' + c2 + ')}';   // проверка на D > 0
                }
                else if (b2 > 0 && c2 > 0){
                    fp2 = '{x' + '(x^2 + ' + b2 + 'x + ' + c2 + ')}';   // проверка на D > 0
                }
                else{
                    fp2 = '{x' + '(x^2 + ' + b2 + 'x ' + c2 + ')}';   // проверка на D > 0
                }
                if (Math.abs(a1) == 1){
                    integral = integral.replace('1','');
                }
                if (Math.abs(b2) == 1){
                    fp2 = fp2.replace('1','');
                }
                integral = integral + fp2;
                break;
            case '08':
                if (b1 < 0){
                    integral = '\\frac{' + a1 + 'x ' + b1 + '}';
                }
                else{
                    integral = '\\frac{' + a1 + 'x + ' + b1 + '}';
                }
                if (b2 < 0 && c2 < 0){
                    fp2 = '{x^2 ' + b2 + 'x ' + c2 + '}';  // только 3 числителя  - 1, 2, 4, def ***
                }
                else if (b2 > 0 && c2 < 0){
                    fp2 = '{x^2 + ' + b2 + 'x ' + c2 + '}';  // только 3 числителя  - 1, 2, 4, def ***
                }
                else if (b2 < 0 && c2 > 0){
                    fp2 = '{x^2 ' + b2 + 'x + ' + c2 + '}';  // только 3 числителя  - 1, 2, 4, def ***
                }
                else {
                    fp2 = '{x^2 + ' + b2 + 'x + ' + c2 + '}';  // только 3 числителя  - 1, 2, 4, def ***
                }
                if (Math.abs(b2) == 1){
                    fp2 = fp2.replace('1','');
                }
                integral = integral + fp2;
                break;
            default :
                if (b1 < 0){
                    integral = '\\frac{' + a1 + 'x ' + b1 + '}';
                }
                else{
                    integral = '\\frac{' + a1 + 'x + ' + b1 + '}';
                }
                if (a22 > 0 && b2 < 0 && c2 < 0){
                    fp2 = '{(x +' + a22 + ')' + '(x^2 ' + b2 + 'x ' + c2 + ')}';  // D > 0
                }
                else if (a22 > 0 && b2 < 0 && c2 > 0){
                    fp2 = '{(x +' + a22 + ')' + '(x^2  ' + b2 + 'x + ' + c2 + ')}';  // D > 0
                }
                else if (a22 > 0 && b2 > 0 && c2 < 0){
                    fp2 = '{(x +' + a22 + ')' + '(x^2 + ' + b2 + 'x ' + c2 + ')}';  // D > 0
                }
                else if (a22 > 0 && b2 > 0 && c2 > 0){
                    fp2 = '{(x +' + a22 + ')' + '(x^2 + ' + b2 + 'x + ' + c2 + ')}';  // D > 0
                }
                else if (a22 < 0 && b2 < 0 && c2 < 0){
                    fp2 = '{(x ' + a22 + ')' + '(x^2 ' + b2 + 'x ' + c2 + ')}';  // D > 0
                }
                else if (a22 < 0 && b2 < 0 && c2 > 0){
                    fp2 = '{(x ' + a22 + ')' + '(x^2 ' + b2 + 'x + ' + c2 + ')}';  // D > 0
                }
                else if (a22 < 0 && b2 > 0 && c2 < 0){
                    fp2 = '{(x ' + a22 + ')' + '(x^2 + ' + b2 + 'x ' + c2 + ')}';  // D > 0
                }
                else{
                    fp2 = '{(x ' + a22 + ')' + '(x^2 + ' + b2 + 'x + ' + c2 + ')}';  // D > 0
                }
                if (Math.abs(b2) == 1){
                    fp2 = fp2.replace('1','');
                }
                integral = integral + fp2;
        }


        let elem = document.getElementById('generated');
        let child = document.createElement("li");
        child.className="listItem";
        child.innerHTML = 'Найти неопределённый интеграл <SPAN></SPAN>';
        elem.appendChild(child);
        elem = child.childNodes[1];
    
        katex.render('\\int ' + integral + ' dx', elem, {
            throwOnError: false
        });
    }
}

// Функция для интеграла Метода интегрирования рациональных дробей 2 уровня сложности
function metodIntegririovRacDrobNormal(hash, kolvo){       
    let random;
    let strokSmena = '';

    kolichestvo = Number(kolvo);
    
    let fullHash = hash * kolichestvo;
    let sHash = String(hash);
    let sFullHash = String(fullHash);
    sFullHash = sFullHash.replaceAll('0', '2');
    let koef = 0.1;
    let max = 5; 
    
    let cleanStr = proverkaPovtorov(kolichestvo, strokSmena, sFullHash, koef, max); 
    //console.log(cleanStr);

    let a1 = Number(sHash[sHash.length - 1]);  // желательно не больше 4
    let c1 = Number(sHash[sHash.length - 4]);  // желательно не больше 20
    let b1 = Number(sHash[sHash.length - 6]);  // желательно не больше 10
    if (Number(sHash[sHash.length - 1]) % 2 != 0) {
        b1 = -b1;
    }
    let a2 = Number(sHash[sHash.length - 3]);  //  не больше 4
    let x1 = Number(sHash[sHash.length - 5]);
    let x2 = Number(sHash[sHash.length - 1]);
    let b22 = x1+x2;
    let c22 = -(x1*x2);
    if (Number(sHash[sHash.length - 4]) % 2 != 0) {
        b22 = -b22;
        c22 = -c22
    }

    if (x1 == x2){
        x1 =+ 1;
    }
    if (Number(sHash[sHash.length - 7]) % 2 != 0 && Number(sHash[sHash.length - 2]) < 5){
        x1 = -x1;
    } 
    else if (Number(sHash[sHash.length - 4])% 2 == 0 && Number(sHash[sHash.length - 2]) < 5){
        x2 = -x2
    }
    else if (Number(sHash[sHash.length - 3])% 2 == 0 && Number(sHash[sHash.length - 2]) > 5){
        x1 = -x1;
        x2 = -x2;
    }
    
    let b2 = -(x1+x2);
    let c2 = x1*x2;

    let a22 = Number(sHash[sHash.length - 5]);
    if (Number(sHash[sHash.length - 2]) % 2 != 0) {
        a22 = -a22;
    }

    let integral;
    for (let i = 0; i < cleanStr.length; i=i+2){
        random = cleanStr[i] + cleanStr[i+1];
        //console.log(random);
        switch (random) {
            case '01':
                integral = '\\frac{x}';
                if (b22 < 0){
                    fp2 = '{(x +' + a2 + ')' + '(x^2 ' + b22 + 'x + ' + c22 + ')}';   // D < 0
                }
                else{
                    fp2 = '{(x +' + a2 + ')' + '(x^2 + ' + b22 + 'x ' + c22 + ')}';   // D < 0
                }
                if (Math.abs(b22) == 1){
                    fp2 = fp2.replace('1','');
                }
                if (Math.abs(b2) == 1){
                    fp2 = fp2.replace('1','');
                }
                integral = integral + fp2;
                break;
            case '02':
                if (b1 < 0){
                    integral = '\\frac{' + a1 + 'x ' + b1 + '}';
                }
                else{
                    integral = '\\frac{' + a1 + 'x + ' + b1 + '}';
                }
                if (Math.abs(a1) == 1){
                    integral = integral.replace('1','');
                }
                if (b22 < 0){
                    fp2 = '{(x +' + a2 + ')' + '(x^2 ' + b22 + 'x + ' + c22 + ')}';   // D < 0
                }
                else{
                    fp2 = '{(x +' + a2 + ')' + '(x^2 + ' + b22 + 'x ' + c22 + ')}';   // D < 0
                }
                if (Math.abs(b22) == 1){
                    fp2 = fp2.replace('1','');
                }
                if (Math.abs(b2) == 1){
                    fp2 = fp2.replace('1','');
                }
                integral = integral + fp2;
                break;
            case '03':
                if (b1 < 0){
                    integral = '\\frac{' + a1 + 'x^2 ' + b1 + 'x + ' + c1 + '}';
                }
                else{
                    integral = '\\frac{' + a1 + 'x^2 + ' + b1 + 'x + ' + c1 + '}';
                }           
                if (Math.abs(a1) == 1){
                    integral = integral.replace('1','');
                } 
                if (Math.abs(a1) == 1){
                    integral = integral.replace('1','');
                }
                if (b22 < 0){
                    fp2 = '{(x +' + a2 + ')' + '(x^2 ' + b22 + 'x + ' + c22 + ')}';   // D < 0
                }
                else{
                    fp2 = '{(x +' + a2 + ')' + '(x^2 + ' + b22 + 'x ' + c22 + ')}';   // D < 0
                }
                if (Math.abs(b22) == 1){
                    fp2 = fp2.replace('1','');
                }
                if (Math.abs(b2) == 1){
                    fp2 = fp2.replace('1','');
                }
                integral = integral + fp2;
                break;
            case '04':
                integral = '\\frac{x}';
                if (a22 < 0){
                    fp2 = '{x^3 ' + a22*a22*a22 + '}';  // a это куб числа c
                }
                else{
                    fp2 = '{x^3 +' + a22*a22*a22 + '}';  // a это куб числа c
                }
                integral = integral + fp2;
                break;
            case '05':
                if (b1 < 0){
                    integral = '\\frac{' + a1 + 'x^2 ' + b1 + 'x + ' + c1 + '}';
                }
                else{
                    integral = '\\frac{' + a1 + 'x^2 + ' + b1 + 'x + ' + c1 + '}';
                }           
                if (Math.abs(a1) == 1){
                    integral = integral.replace('1','');
                } 
                if (Math.abs(a1) == 1){
                    integral = integral.replace('1','');
                }
                if (a22 < 0){
                    fp2 = '{x^3 ' + a22*a22*a22 + '}';  // a это куб числа c
                }
                else{
                    fp2 = '{x^3 +' + a22*a22*a22 + '}';  // a это куб числа c
                }
                integral = integral + fp2;
                break;
            default:
                if (b1 < 0){
                    integral = '\\frac{' + a1 + 'x^2 ' + b1 + '}';
                }
                else{
                    integral = '\\frac{' + a1 + 'x^2 +' + b1 + '}';
                }
                if (Math.abs(a1) == 1){
                    integral = integral.replace('1','');
                }
                if (b22 < 0){
                    fp2 = '{(x +' + a2 + ')' + '(x^2 ' + b22 + 'x + ' + c22 + ')}';   // D < 0
                }
                else{
                    fp2 = '{(x +' + a2 + ')' + '(x^2 + ' + b22 + 'x ' + c22 + ')}';   // D < 0
                }
                if (Math.abs(b22) == 1){
                    fp2 = fp2.replace('1','');
                }
                if (Math.abs(b2) == 1){
                    fp2 = fp2.replace('1','');
                }
                integral = integral + fp2;
        }


        let elem = document.getElementById('generated');
        let child = document.createElement("li");
        child.className="listItem";
        child.innerHTML = 'Найти неопределённый интеграл <SPAN></SPAN>';
        elem.appendChild(child);
        elem = child.childNodes[1];
    
        katex.render('\\int ' + integral + ' dx', elem, {
            throwOnError: false
        });
    }
}

// Функция для интеграла Метода интегрирования рациональных дробей 3 уровня сложности
function metodIntegririovRacDrobHard(hash, kolvo){       
    let random;
    let strokSmena = '';

    kolichestvo = Number(kolvo);
    
    let fullHash = hash * kolichestvo;
    let sHash = String(hash);
    let sFullHash = String(fullHash);
    sFullHash = sFullHash.replaceAll('0', '2');
    let koef = 0.1;
    let max = 3; 
    
    let cleanStr = proverkaPovtorov(kolichestvo, strokSmena, sFullHash, koef, max); 
    //console.log(cleanStr);

    let b1 = Number(sHash[sHash.length - 1]);
    let a1 = Number(sHash[sHash.length - 6]);
    let b2 = Number(sHash[sHash.length - 10]);
    let c1 = Number(sHash[sHash.length - 7]);
    let c2 = Number(sHash[sHash.length - 8]);
    let a22 = Number(sHash[sHash.length - 3]);

    let integral;
    for (let i = 0; i < cleanStr.length; i=i+2){
        random = cleanStr[i] + cleanStr[i+1];
        //console.log(random);
        switch (random) {
            case '01':
                integral = '\\frac{x^4 + '+b1+'}';
                if (b2 < 0 && c2 < 0){
                    fp2 = '{x' + '(x^2 ' + b2 + 'x ' + c2 + ')}';   // проверка на D > 0
                }
                else if (b2 < 0 && c2 > 0){
                    fp2 = '{x' + '(x^2 ' + b2 + 'x + ' + c2 + ')}';   // проверка на D > 0
                }
                else if (b2 > 0 && c2 > 0){
                    fp2 = '{x' + '(x^2 + ' + b2 + 'x + ' + c2 + ')}';   // проверка на D > 0
                }
                else{
                    fp2 = '{x' + '(x^2 + ' + b2 + 'x ' + c2 + ')}';   // проверка на D > 0
                }
                if (Math.abs(a1) == 1){
                    integral = integral.replace('1','');
                }
                if (Math.abs(b2) == 1){
                    fp2 = fp2.replace('1','');
                }
                integral = integral + fp2;
                break;
            case '02':
                integral = '\\frac{x^4 + '+b1+'}';
                if (b2 < 0 && c2 < 0){
                    fp2 = '{x^2 ' + b2 + 'x ' + c2 + '}';  // только 3 числителя  - 1, 2, 4, def ***
                }
                else if (b2 > 0 && c2 < 0){
                    fp2 = '{x^2 + ' + b2 + 'x ' + c2 + '}';  // только 3 числителя  - 1, 2, 4, def ***
                }
                else if (b2 < 0 && c2 > 0){
                    fp2 = '{x^2 ' + b2 + 'x + ' + c2 + '}';  // только 3 числителя  - 1, 2, 4, def ***
                }
                else {
                    fp2 = '{x^2 + ' + b2 + 'x + ' + c2 + '}';  // только 3 числителя  - 1, 2, 4, def ***
                }
                if (Math.abs(b2) == 1){
                    fp2 = fp2.replace('1','');
                }
                integral = integral + fp2;
                break;
            case '03':
                integral = '\\frac{x^4 + '+b1+'}';
                if (a22 > 0 && b2 < 0 && c2 < 0){
                    fp2 = '{(x +' + a22 + ')' + '(x^2 ' + b2 + 'x ' + c2 + ')}';  // D > 0
                }
                else if (a22 > 0 && b2 < 0 && c2 > 0){
                    fp2 = '{(x +' + a22 + ')' + '(x^2  ' + b2 + 'x + ' + c2 + ')}';  // D > 0
                }
                else if (a22 > 0 && b2 > 0 && c2 < 0){
                    fp2 = '{(x +' + a22 + ')' + '(x^2 + ' + b2 + 'x ' + c2 + ')}';  // D > 0
                }
                else if (a22 > 0 && b2 > 0 && c2 > 0){
                    fp2 = '{(x +' + a22 + ')' + '(x^2 + ' + b2 + 'x + ' + c2 + ')}';  // D > 0
                }
                else if (a22 < 0 && b2 < 0 && c2 < 0){
                    fp2 = '{(x ' + a22 + ')' + '(x^2 ' + b2 + 'x ' + c2 + ')}';  // D > 0
                }
                else if (a22 < 0 && b2 < 0 && c2 > 0){
                    fp2 = '{(x ' + a22 + ')' + '(x^2 ' + b2 + 'x + ' + c2 + ')}';  // D > 0
                }
                else if (a22 < 0 && b2 > 0 && c2 < 0){
                    fp2 = '{(x ' + a22 + ')' + '(x^2 + ' + b2 + 'x ' + c2 + ')}';  // D > 0
                }
                else{
                    fp2 = '{(x ' + a22 + ')' + '(x^2 + ' + b2 + 'x + ' + c2 + ')}';  // D > 0
                }
                if (Math.abs(b2) == 1){
                    fp2 = fp2.replace('1','');
                }
                integral = integral + fp2;
                break;
            default:
                integral = '\\frac{x^4 +'+b1+'x^2+'+c1+'}';
                if (a22 > 0 && b2 < 0 && c2 < 0){
                    fp2 = '{(x +' + a22 + ')' + '(x^2 ' + b2 + 'x ' + c2 + ')}';  // D > 0
                }
                else if (a22 > 0 && b2 < 0 && c2 > 0){
                    fp2 = '{(x +' + a22 + ')' + '(x^2  ' + b2 + 'x + ' + c2 + ')}';  // D > 0
                }
                else if (a22 > 0 && b2 > 0 && c2 < 0){
                    fp2 = '{(x +' + a22 + ')' + '(x^2 + ' + b2 + 'x ' + c2 + ')}';  // D > 0
                }
                else if (a22 > 0 && b2 > 0 && c2 > 0){
                    fp2 = '{(x +' + a22 + ')' + '(x^2 + ' + b2 + 'x + ' + c2 + ')}';  // D > 0
                }
                else if (a22 < 0 && b2 < 0 && c2 < 0){
                    fp2 = '{(x ' + a22 + ')' + '(x^2 ' + b2 + 'x ' + c2 + ')}';  // D > 0
                }
                else if (a22 < 0 && b2 < 0 && c2 > 0){
                    fp2 = '{(x ' + a22 + ')' + '(x^2 ' + b2 + 'x + ' + c2 + ')}';  // D > 0
                }
                else if (a22 < 0 && b2 > 0 && c2 < 0){
                    fp2 = '{(x ' + a22 + ')' + '(x^2 + ' + b2 + 'x ' + c2 + ')}';  // D > 0
                }
                else{
                    fp2 = '{(x ' + a22 + ')' + '(x^2 + ' + b2 + 'x + ' + c2 + ')}';  // D > 0
                }
                if (Math.abs(b2) == 1){
                    fp2 = fp2.replace('1','');
                }
                integral = integral + fp2;
        }


        let elem = document.getElementById('generated');
        let child = document.createElement("li");
        child.className="listItem";
        child.innerHTML = 'Найти неопределённый интеграл <SPAN></SPAN>';
        elem.appendChild(child);
        elem = child.childNodes[1];
    
        katex.render('\\int ' + integral + ' dx', elem, {
            throwOnError: false
        });
    }
}

// Функция для интеграла Метода универсальной подстановки 1 уровня сложности
function metodIntegririovUniversPodstSimple(hash, kolvo){       
    let random;
    let strokSmena = '';

    kolichestvo = Number(kolvo);
    
    let fullHash = hash * kolichestvo;
    let sHash = String(hash);
    let sFullHash = String(fullHash);
    sFullHash = sFullHash.replaceAll('0', '2');
    let koef = 0.1;
    let max = 1; 
    
    let cleanStr = proverkaPovtorov(kolichestvo, strokSmena, sFullHash, koef, max); 
    //console.log(cleanStr);

    let a = Number(sHash[sHash.length - 1]);
    let b = Number(sHash[sHash.length - 9]);
    let c = Number(sHash[sHash.length - 13]);

    let integral;
    for (let i = 0; i < cleanStr.length; i=i+2){
        random = cleanStr[i] + cleanStr[i+1];
        //console.log(random);
        switch (random) {
            default:
                integral = '\\frac{1}{'+a+'sinx + '+b+'cosx+' +c+'}';
        }


        let elem = document.getElementById('generated');
        let child = document.createElement("li");
        child.className="listItem";
        child.innerHTML = 'Найти неопределённый интеграл <SPAN></SPAN>';
        elem.appendChild(child);
        elem = child.childNodes[1];
    
        katex.render('\\int ' + integral + ' dx', elem, {
            throwOnError: false
        });
    }
}

// Функция для интеграла Метода универсальной подстановки 2 уровня сложности
function metodIntegririovUniversPodstNormal(hash, kolvo){       
    let random;
    let strokSmena = '';

    kolichestvo = Number(kolvo);
    
    let fullHash = hash * kolichestvo;
    let sHash = String(hash);
    let sFullHash = String(fullHash);
    sFullHash = sFullHash.replaceAll('0', '2');
    let koef = 0.1;
    let max = 1; 
    
    let cleanStr = proverkaPovtorov(kolichestvo, strokSmena, sFullHash, koef, max); 
    //console.log(cleanStr);

    let a = Number(sHash[sHash.length - 1]);
    let b = Number(sHash[sHash.length - 3]);
    let c = Number(sHash[sHash.length - 5]);
    let k = Number(sHash[sHash.length - 7]);
    let n = Number(sHash[sHash.length - 10]);

    let integral;
    for (let i = 0; i < cleanStr.length; i=i+2){
        random = cleanStr[i] + cleanStr[i+1];
        //console.log(random);
        switch (random) {
            default:
                integral = '\\frac{1}{'+a+'sin'+k+'x + '+b+'cos'+k+'x + ' +c+'}';
        }


        let elem = document.getElementById('generated');
        let child = document.createElement("li");
        child.className="listItem";
        child.innerHTML = 'Найти неопределённый интеграл <SPAN></SPAN>';
        elem.appendChild(child);
        elem = child.childNodes[1];
    
        katex.render('\\int ' + integral + ' dx', elem, {
            throwOnError: false
        });
    }
}

// Функция для интеграла Метода универсальной подстановки 3 уровня сложности
function metodIntegririovUniversPodstHard(hash, kolvo){       
    let random;
    let strokSmena = '';

    kolichestvo = Number(kolvo);
    
    let fullHash = hash * kolichestvo;
    let sHash = String(hash);
    let sFullHash = String(fullHash);
    sFullHash = sFullHash.replaceAll('0', '2');
    let koef = 0.1;
    let max = 2; 
    
    let cleanStr = proverkaPovtorov(kolichestvo, strokSmena, sFullHash, koef, max); 
    //console.log(cleanStr);

    let a = Number(sHash[sHash.length - 6]);
    let m = Number(sHash[sHash.length - 3]);
    let k = Number(sHash[sHash.length - 15]);
    let b = Number(sHash[sHash.length - 13]);
    let p = Number(sHash[sHash.length - 9]);
    let n = Number(sHash[sHash.length - 11]);
    let c = Number(sHash[sHash.length - 12]);


    let integral;
    for (let i = 0; i < cleanStr.length; i=i+2){
        random = cleanStr[i] + cleanStr[i+1];
        //console.log(random);
        switch (random) {
            case '01':
                integral = '\\frac{1}{'+a+'sin^'+m+k+'x + '+b+'cos^'+p+n+'x + ' +c+'}';  // ВАЖНО!!! n+m=3
                break;        
            case '02':
                integral = '\\frac{1}{'+a+'sin^3'+k+'x'+c+'}';
                break; 
            default:
                integral = '\\frac{1}{'+b+'cos^3'+n+'x}';
        }


        let elem = document.getElementById('generated');
        let child = document.createElement("li");
        child.className="listItem";
        child.innerHTML = 'Найти неопределённый интеграл <SPAN></SPAN>';
        elem.appendChild(child);
        elem = child.childNodes[1];
    
        katex.render('\\int ' + integral + ' dx', elem, {
            throwOnError: false
        });
    }
}

// Функция для интеграла Метода интегрирования тригонометрических функций 1 уровня сложности 1 часть
function metodIntegririovITF1_0Simple(hash, kolvo){       
    let random;
    let strokSmena = '';

    kolichestvo = Number(kolvo);
    
    let fullHash = hash * kolichestvo;
    let sHash = String(hash);
    let sFullHash = String(fullHash);
    sFullHash = sFullHash.replaceAll('0', '2');
    let koef = 0.1;
    let max = 2; 
    
    let cleanStr = proverkaPovtorov(kolichestvo, strokSmena, sFullHash, koef, max); 
    //console.log(cleanStr);

    let a = Number(sHash[sHash.length - 6]);
    let b = Number(sHash[sHash.length - 4]);

    let integral;
    for (let i = 0; i < cleanStr.length; i=i+2){
        random = cleanStr[i] + cleanStr[i+1];
        //console.log(random);
        switch (random) {
            case '01':
                integral = '{\\frac{\cosx}{\\sqrt{'+a+'sin^2x+'+b+'cos^2x}}}'; 
                break; 
            default:
                integral = '{\\frac{\sinx}{\\sqrt{'+a+'sin^2x+'+b+'cos^2x}}}';
        }


        let elem = document.getElementById('generated');
        let child = document.createElement("li");
        child.className="listItem";
        child.innerHTML = 'Найти неопределённый интеграл <SPAN></SPAN>';
        elem.appendChild(child);
        elem = child.childNodes[1];
    
        katex.render('\\int ' + integral + ' dx', elem, {
            throwOnError: false
        });
    }
}

// Функция для интеграла Метода интегрирования тригонометрических функций 2 уровня сложности 1 часть
function metodIntegririovITF1_0Normal(hash, kolvo){       
    let random;
    let strokSmena = '';

    kolichestvo = Number(kolvo);
    
    let fullHash = hash * kolichestvo;
    let sHash = String(hash);
    let sFullHash = String(fullHash);
    let koef = 0.1;
    let max = 3; 
    
    let cleanStr = proverkaPovtorov(kolichestvo, strokSmena, sFullHash, koef, max); 
    //console.log(cleanStr);

    let t = Number(sHash[sHash.length - 6]);
    let c = Number(sHash[sHash.length - 3]);
    let k = Number(sHash[sHash.length - 12]);

    let integral;
    for (let i = 0; i < cleanStr.length; i=i+2){
        random = cleanStr[i] + cleanStr[i+1];
        //console.log(random);
        switch (random) {
            case '01':
                integral = '\\frac{\\sin^'+t+'x}{cosx + '+c+'}'; // t - нечетное
                break;  
            case '02':
                integral = '\\frac{\\sin^'+t+'x}{(cosx + '+c+')^'+k+'}'; // t - нечетное
                break;  
            case '03':
                integral = '\\frac{\\cos^'+t+'x}{sinx + '+c+'}'; // t - нечетное
                break;  
            default:
                integral = '\\frac{\\cos^'+t+'x}{(sinx + '+c+')^'+k+'}'; // t - нечетное
        }


        let elem = document.getElementById('generated');
        let child = document.createElement("li");
        child.className="listItem";
        child.innerHTML = 'Найти неопределённый интеграл <SPAN></SPAN>';
        elem.appendChild(child);
        elem = child.childNodes[1];
    
        katex.render('\\int ' + integral + ' dx', elem, {
            throwOnError: false
        });
    }
}

// Функция для интеграла Метода интегрирования тригонометрических функций 3 уровня сложности 1 часть
function metodIntegririovITF1_0Hard(hash, kolvo){       
    let random;
    let strokSmena = '';

    kolichestvo = Number(kolvo);
    
    let fullHash = hash * kolichestvo;
    let sHash = String(hash);
    let sFullHash = String(fullHash);
    sFullHash = sFullHash.replaceAll('0', '2');
    let koef = 0.1;
    let max = 5; 
    
    let cleanStr = proverkaPovtorov(kolichestvo, strokSmena, sFullHash, koef, max); 
    //console.log(cleanStr);

    let k = Number(sHash[sHash.length - 2]);
    let n = Number(sHash[sHash.length - 3]);
    let a = Number(sHash[sHash.length - 14]);
    let m = Number(sHash[sHash.length - 10]);

    let integral;
    for (let i = 0; i < cleanStr.length; i=i+2){
        random = cleanStr[i] + cleanStr[i+1];
        //console.log(random);
        switch (random) {
            case '01':
                integral = '\\frac{sin^'+k+'x}{\\cos^'+n+'x}';  
                break;
            case '02':
                integral = '{sin^'+k+'x}\\cdot{\\cos^'+n+'x}';  
                break;
            case '03':
                integral = '\\frac{1}{cos^'+n+a+'x}'; 
                break;
            case '04':
                integral = '\\frac{1}{sin^'+k+a+'x}'; 
                break;
            case '05':
                integral = '{\\tg^'+k+'x}{\\cos^'+n+'x}';  //n, k - чётное
                break;
            default:
                integral = '{\\tg^'+m+a+'x}'; 
        }


        let elem = document.getElementById('generated');
        let child = document.createElement("li");
        child.className="listItem";
        child.innerHTML = 'Найти неопределённый интеграл <SPAN></SPAN>';
        elem.appendChild(child);
        elem = child.childNodes[1];
    
        katex.render('\\int ' + integral + ' dx', elem, {
            throwOnError: false
        });
    }
}

// Функция для интеграла Метода интегрирования тригонометрических функций 1 уровня сложности 2 часть
function metodIntegririovITF2_0Simple(hash, kolvo){       
    let random;
    let strokSmena = '';

    kolichestvo = Number(kolvo);
    
    let fullHash = hash * kolichestvo;
    let sHash = String(hash);
    let sFullHash = String(fullHash);
    sFullHash = sFullHash.replaceAll('0', '2');
    let koef = 0.1;
    let max = 1; 
    
    let cleanStr = proverkaPovtorov(kolichestvo, strokSmena, sFullHash, koef, max); 
    //console.log(cleanStr);

    let a = Number(sHash[sHash.length - 13]);
    let b = Number(sHash[sHash.length - 2]);

    let integral;
    for (let i = 0; i < cleanStr.length; i=i+2){
        random = cleanStr[i] + cleanStr[i+1];
        //console.log(random);
        switch (random) {
            default:
                integral = '{\\sin'+a+'x}\\cdot{cos'+b+'x}';  // a обязательно != b
        }


        let elem = document.getElementById('generated');
        let child = document.createElement("li");
        child.className="listItem";
        child.innerHTML = 'Найти неопределённый интеграл <SPAN></SPAN>';
        elem.appendChild(child);
        elem = child.childNodes[1];
    
        katex.render('\\int ' + integral + ' dx', elem, {
            throwOnError: false
        });
    }
}

// Функция для интеграла Метода интегрирования тригонометрических функций 2 уровня сложности 2 часть
function metodIntegririovITF2_0Normal(hash, kolvo){       
    let random;
    let strokSmena = '';

    kolichestvo = Number(kolvo);
    
    let fullHash = hash * kolichestvo;
    let sHash = String(hash);
    let sFullHash = String(fullHash);
    sFullHash = sFullHash.replaceAll('0', '2');
    let koef = 0.1;
    let max = 1; 
    
    let cleanStr = proverkaPovtorov(kolichestvo, strokSmena, sFullHash, koef, max); 
    //console.log(cleanStr);

    let a = Number(sHash[sHash.length - 3]);
    let b = Number(sHash[sHash.length - 6]);
    let c = Number(sHash[sHash.length - 8]);

    let integral;
    for (let i = 0; i < cleanStr.length; i=i+2){
        random = cleanStr[i] + cleanStr[i+1];
        //console.log(random);
        switch (random) {
            case '01':
                integral = '{\\sin'+a+'x}\\cdot{cos'+b+'x}\\cdot{sin'+c+'x}';  
                break;  
            default:
                integral = '{\\sin'+a+'x}\\cdot{cos^2'+b+'x}';  
        }


        let elem = document.getElementById('generated');
        let child = document.createElement("li");
        child.className="listItem";
        child.innerHTML = 'Найти неопределённый интеграл <SPAN></SPAN>';
        elem.appendChild(child);
        elem = child.childNodes[1];
    
        katex.render('\\int ' + integral + ' dx', elem, {
            throwOnError: false
        });
    }
}

// Функция для интеграла Метода интегрирования тригонометрических функций 1 уровня сложности 3 часть
function metodIntegririovITF3_0Simple(hash, kolvo){       
    let random;
    let strokSmena = '';

    kolichestvo = Number(kolvo);
    
    let fullHash = hash * kolichestvo;
    let sHash = String(hash);
    let sFullHash = String(fullHash);
    sFullHash = sFullHash.replaceAll('0', '2');
    let koef = 0.1;
    let max = 5; 
    
    let cleanStr = proverkaPovtorov(kolichestvo, strokSmena, sFullHash, koef, max); 
    //console.log(cleanStr);

    let k = Number(sHash[sHash.length - 1]);
    let t = Number(sHash[sHash.length - 4]);
    let n = Number(sHash[sHash.length - 6]);
    let m = Number(sHash[sHash.length - 5]);
    let a = Number(sHash[sHash.length - 8]);


    let integral;
    for (let i = 0; i < cleanStr.length; i=i+2){
        random = cleanStr[i] + cleanStr[i+1];
        //console.log(random);
        switch (random) {
            case '01':
                integral = '{\\sin^'+k+'x}\\cdot{\\cos^{'+(k+1)+'}x}';  
                break; 
            case '02':
                integral = '{\\frac{\\sin^'+t+'x}{\\sqrt['+n+']{cosx}}}';  
                break;   
            case '03':
                integral = '{\\frac{\\cos^'+t+a+'x}{\\sin^'+k+a+'x}}';  
                break;  
            case '04':
                integral = '{\\frac{1}{\\cos^'+k+a+'x\\sin^'+t+a+'x}}';  
                break;    
            case '05':
                integral = '{\\frac{1}{\\sin^'+k+a+'x\\cos^{'+t+'}'+a+'x}}';  
                break;  
            default:
                integral = '{\\sin^'+t+a+'x}'+'{\\cdot}'+'{\\sqrt['+n+']{\\cos^'+m+a+'x}}';  
        }


        let elem = document.getElementById('generated');
        let child = document.createElement("li");
        child.className="listItem";
        child.innerHTML = 'Найти неопределённый интеграл <SPAN></SPAN>';
        elem.appendChild(child);
        elem = child.childNodes[1];
    
        katex.render('\\int ' + integral + ' dx', elem, {
            throwOnError: false
        });
    }
}

// Функция для интеграла Метода интегрирования тригонометрических функций 2 уровня сложности 3 часть
function metodIntegririovITF3_0Normal(hash, kolvo){       
    let random;
    let strokSmena = '';

    kolichestvo = Number(kolvo);
    
    let fullHash = hash * kolichestvo;
    let sHash = String(hash);
    let sFullHash = String(fullHash);
    sFullHash = sFullHash.replaceAll('0', '2');
    let koef = 0.1;
    let max = 3; 
    
    let cleanStr = proverkaPovtorov(kolichestvo, strokSmena, sFullHash, koef, max); 
    //console.log(cleanStr);

    let m = Number(sHash[sHash.length - 11]);
    let n = Number(sHash[sHash.length - 13]);
    let a = Number(sHash[sHash.length - 7]);

    let integral;
    for (let i = 0; i < cleanStr.length; i=i+2){
        random = cleanStr[i] + cleanStr[i+1];
        //console.log(random);
        switch (random) {
            case '01':
                integral = '{\\sin^{'+m+'}'+a+'x\\cdot\\cos^'+n+a+'x}';  // m,n - четные 
                break;    
            case '02':
                integral = '{\\frac{\\sin^{'+(n+2)+'}'+a+'x}{\\cos^'+n+a+'x}}';  // m>n - четные 
                break;   
            default:
                integral = '{\\frac{\\cos^{'+(m+2)+'}'+a+'x}{\\sin^'+m+a+'x}}';  // m>n - четные 
        }


        let elem = document.getElementById('generated');
        let child = document.createElement("li");
        child.className="listItem";
        child.innerHTML = 'Найти неопределённый интеграл <SPAN></SPAN>';
        elem.appendChild(child);
        elem = child.childNodes[1];
    
        katex.render('\\int ' + integral + ' dx', elem, {
            throwOnError: false
        });
    }
}

// Функция для интеграла Метода интегрирования тригонометрических функций 3 уровня сложности 3 часть
function metodIntegririovITF3_0Hard(hash, kolvo){       
    let random;
    let strokSmena = '';

    kolichestvo = Number(kolvo);
    
    let fullHash = hash * kolichestvo;
    let sHash = String(hash);
    let sFullHash = String(fullHash);
    sFullHash = sFullHash.replaceAll('0', '2');
    let koef = 0.1;
    let max = 3; 
    
    let cleanStr = proverkaPovtorov(kolichestvo, strokSmena, sFullHash, koef, max); 
    //console.log(cleanStr);

    let m = Number(sHash[sHash.length - 8]);
    let a = Number(sHash[sHash.length - 9]);
    let n = Number(sHash[sHash.length - 12]);
    let t = Number(sHash[sHash.length - 4]);

    let integral;
    for (let i = 0; i < cleanStr.length; i=i+2){
        random = cleanStr[i] + cleanStr[i+1];
        //console.log(random);
        switch (random) { 
            case '01':
                integral = '\\frac{\\sin^{'+m+'}'+a+'x}{\\cos^{'+(m+4)+'}'+a+'x}';   
                break; 
            case '02':
                integral = '\\frac{\\cos^{'+n+'}'+a+'x}{\\sin^{'+(m+4)+'}'+a+'x}';   
                break; 
            case '03':
                integral = '\\frac{1}{\\sqrt{cos^'+t+a+'x}\\cdot{\\sin'+a+'x}}';   
                break; 
            default:
                integral = '\\frac{\\sqrt[3]{cos'+a+'x}}{\\sqrt[3]{sin^'+t+a+'x}}';
        }


        let elem = document.getElementById('generated');
        let child = document.createElement("li");
        child.className="listItem";
        child.innerHTML = 'Найти неопределённый интеграл <SPAN></SPAN>';
        elem.appendChild(child);
        elem = child.childNodes[1];
    
        katex.render('\\int ' + integral + ' dx', elem, {
            throwOnError: false
        });
    }
}

// Функция для интеграла с радикалами 1 уровня сложности
function metodIntegririovRadicalSimple(hash, kolvo){       
    let random;
    let strokSmena = '';

    kolichestvo = Number(kolvo);
    
    let fullHash = hash * kolichestvo;
    let sHash = String(hash);
    let sFullHash = String(fullHash);
    sFullHash = sFullHash.replaceAll('0', '2');
    let koef = 0.1;
    let max = 1; 
    
    let cleanStr = proverkaPovtorov(kolichestvo, strokSmena, sFullHash, koef, max); 
    //console.log(cleanStr);

    let a = Number(sHash[sHash.length - 7]);
    let b = Number(sHash[sHash.length - 3]);
    let c = Number(sHash[sHash.length - 13]);
    let k = Number(sHash[sHash.length - 6]);

    let integral;
    for (let i = 0; i < cleanStr.length; i=i+2){
        random = cleanStr[i] + cleanStr[i+1];
        //console.log(random);
        switch (random) { 
            case '01':
                integral = '\\frac{x^{\\frac{1}{'+a+'}}}{x^{\\frac{'+(b-1)+'}{'+b+'}}+'+c+'}';
                break;
            default:
                integral = '\\frac{x+\\sqrt['+k+']{x^'+a+'}+\\sqrt['+(2*k)+']{x}}{x(1+\\sqrt['+k+']{x})}';
        }


        let elem = document.getElementById('generated');
        let child = document.createElement("li");
        child.className="listItem";
        child.innerHTML = 'Найти неопределённый интеграл <SPAN></SPAN>';
        elem.appendChild(child);
        elem = child.childNodes[1];
    
        katex.render('\\int ' + integral + ' dx', elem, {
            throwOnError: false
        });
    }
}

// Функция для интеграла с радикалами 2 уровня сложности
function metodIntegririovRadicalNormal(hash, kolvo){       
    let random;
    let strokSmena = '';

    kolichestvo = Number(kolvo);
    
    let fullHash = hash * kolichestvo;
    let sHash = String(hash);
    let sFullHash = String(fullHash);
    sFullHash = sFullHash.replaceAll('0', '2');
    let koef = 0.1;
    let max = 1; 
    
    let cleanStr = proverkaPovtorov(kolichestvo, strokSmena, sFullHash, koef, max); 
    //console.log(cleanStr);

    
    let a = Number(sHash[sHash.length - 7]);
    let b = Number(sHash[sHash.length - 3]);

    let integral;
    for (let i = 0; i < cleanStr.length; i=i+2){
        random = cleanStr[i] + cleanStr[i+1];
        //console.log(random);
        switch (random) { 
            default:
                integral = '\\frac{1}{(1-x)^2}'+'\\sqrt{\\frac{'+a+'-x}{'+b+'+x}}';
        }


        let elem = document.getElementById('generated');
        let child = document.createElement("li");
        child.className="listItem";
        child.innerHTML = 'Найти неопределённый интеграл <SPAN></SPAN>';
        elem.appendChild(child);
        elem = child.childNodes[1];
    
        katex.render('\\int ' + integral + ' dx', elem, {
            throwOnError: false
        });
    }
}

// Функция для интеграла с дробями и радикалами 1 уровня сложности
function metodIntegririovDrobRadicalSimple(hash, kolvo){       
    let random;
    let strokSmena = '';

    kolichestvo = Number(kolvo);
    
    let fullHash = hash * kolichestvo;
    let sHash = String(hash);
    let sFullHash = String(fullHash);
    sFullHash = sFullHash.replaceAll('0', '2');
    let koef = 0.1;
    let max = 1; 
    
    let cleanStr = proverkaPovtorov(kolichestvo, strokSmena, sFullHash, koef, max); 
    //console.log(cleanStr);


    let integral;
    for (let i = 0; i < cleanStr.length; i=i+2){
        random = cleanStr[i] + cleanStr[i+1];
        //console.log(random);
        switch (random) { 
            default:
                integral = '\\frac{1}{\\sqrt{'+fsquard(1, Number(sHash[sHash.length - 2]), Number(sHash[sHash.length - 3]))+'}}';   
        }


        let elem = document.getElementById('generated');
        let child = document.createElement("li");
        child.className="listItem";
        child.innerHTML = 'Найти неопределённый интеграл <SPAN></SPAN>';
        elem.appendChild(child);
        elem = child.childNodes[1];
    
        katex.render('\\int ' + integral + ' dx', elem, {
            throwOnError: false
        });
    }
}

// Функция для интеграла с дробями и радикалами 2 уровня сложности
function metodIntegririovDrobRadicalNormal(hash, kolvo){       
    let random;
    let strokSmena = '';

    kolichestvo = Number(kolvo);
    
    let fullHash = hash * kolichestvo;
    let sHash = String(hash);
    let sFullHash = String(fullHash);
    sFullHash = sFullHash.replaceAll('0', '2');
    let koef = 0.1;
    let max = 1; 
    
    let cleanStr = proverkaPovtorov(kolichestvo, strokSmena, sFullHash, koef, max); 
    //console.log(cleanStr);

    let integral;
    for (let i = 0; i < cleanStr.length; i=i+2){
        random = cleanStr[i] + cleanStr[i+1];
        //console.log(random);
        switch (random) { 
            default:
                integral = '\\frac{'+flineynay(sHash, Number(sHash[sHash.length - 2]), Number(sHash[sHash.length - 3]))+'}{\\sqrt{'+fsquard(1, Number(sHash[sHash.length - 2]), Number(sHash[sHash.length - 3]))+'}}';   
        }


        let elem = document.getElementById('generated');
        let child = document.createElement("li");
        child.className="listItem";
        child.innerHTML = 'Найти неопределённый интеграл <SPAN></SPAN>';
        elem.appendChild(child);
        elem = child.childNodes[1];
    
        katex.render('\\int ' + integral + ' dx', elem, {
            throwOnError: false
        });
    }
}

// Функция для интеграла с дробями и радикалами 3 уровня сложности
function metodIntegririovDrobRadicalHard(hash, kolvo){       
    let random;
    let strokSmena = '';

    kolichestvo = Number(kolvo);
    
    let fullHash = hash * kolichestvo;
    let sHash = String(hash);
    let sFullHash = String(fullHash);
    sFullHash = sFullHash.replaceAll('0', '2');
    let koef = 0.1;
    let max = 1; 
    
    let cleanStr = proverkaPovtorov(kolichestvo, strokSmena, sFullHash, koef, max); 
    //console.log(cleanStr);

    let a = Number(sHash[sHash.length - 5]);

    let integral;
    for (let i = 0; i < cleanStr.length; i=i+2){
        random = cleanStr[i] + cleanStr[i+1];
        //console.log(random);
        switch (random) { 
            default:
                integral = '\\frac{1}{(x+'+a+')\\sqrt{'+fsquard(1, Number(sHash[sHash.length - 2]), Number(sHash[sHash.length - 3]))+'}}';
        }


        let elem = document.getElementById('generated');
        let child = document.createElement("li");
        child.className="listItem";
        child.innerHTML = 'Найти неопределённый интеграл <SPAN></SPAN>';
        elem.appendChild(child);
        elem = child.childNodes[1];
    
        katex.render('\\int ' + integral + ' dx', elem, {
            throwOnError: false
        });
    }
}

// Функция для интеграла генерация схемы 1 уровня сложности
function metodIntegririovGenerChemSimple(hash, kolvo){       
    let random;
    let strokSmena = '';

    kolichestvo = Number(kolvo);
    
    let fullHash = hash * kolichestvo;
    let sHash = String(hash);
    let sFullHash = String(fullHash);
    sFullHash = sFullHash.replaceAll('0', '2');
    let koef = 0.1;
    let max = 1; 
    
    let cleanStr = proverkaPovtorov(kolichestvo, strokSmena, sFullHash, koef, max); 
    //console.log(cleanStr);

    let a = Number(sHash[sHash.length - 3]);
    let k = Number(sHash[sHash.length - 8]);

    let integral;
    for (let i = 0; i < cleanStr.length; i=i+2){
        random = cleanStr[i] + cleanStr[i+1];
        //console.log(random);
        switch (random) { 
            case '01':
                integral = '\\frac{1}{\\sqrt{('+a+'-x^2)^'+k+'}}';    //k =2,3,4
                break; 
            default:
                integral = '\\frac{x^2}{\\sqrt{('+a+'-x^2)}}'; 
        }


        let elem = document.getElementById('generated');
        let child = document.createElement("li");
        child.className="listItem";
        child.innerHTML = 'Найти неопределённый интеграл <SPAN></SPAN>';
        elem.appendChild(child);
        elem = child.childNodes[1];
    
        katex.render('\\int ' + integral + ' dx', elem, {
            throwOnError: false
        });
    }
}

// Функция для интеграла генерация схемы 2 уровня сложности
function metodIntegririovGenerChemNormal(hash, kolvo){       
    let random;
    let strokSmena = '';

    kolichestvo = Number(kolvo);
    
    let fullHash = hash * kolichestvo;
    let sHash = String(hash);
    let sFullHash = String(fullHash);
    sFullHash = sFullHash.replaceAll('0', '2');
    let koef = 0.1;
    let max = 1; 
    
    let cleanStr = proverkaPovtorov(kolichestvo, strokSmena, sFullHash, koef, max); 
    //console.log(cleanStr);

    let a = Number(sHash[sHash.length - 7]);
    let k = Number(sHash[sHash.length - 13]);

    let integral;
    for (let i = 0; i < cleanStr.length; i=i+2){
        random = cleanStr[i] + cleanStr[i+1];
        //console.log(random);
        switch (random) { 
            case '01':
                integral = '\\frac{1}{\\sqrt{x^2+'+a+'}}';   
                break; 
            default:
                integral = '\\frac{\\sqrt{'+a+'+x^2}}{x^'+k+'}';   
        }


        let elem = document.getElementById('generated');
        let child = document.createElement("li");
        child.className="listItem";
        child.innerHTML = 'Найти неопределённый интеграл <SPAN></SPAN>';
        elem.appendChild(child);
        elem = child.childNodes[1];
    
        katex.render('\\int ' + integral + ' dx', elem, {
            throwOnError: false
        });
    }
}

// Функция для интеграла генерация схемы 3 уровня сложности
function metodIntegririovGenerChemHard(hash, kolvo){       
    let random;
    let strokSmena = '';

    kolichestvo = Number(kolvo);
    
    let fullHash = hash * kolichestvo;
    let sHash = String(hash);
    let sFullHash = String(fullHash);
    sFullHash = sFullHash.replaceAll('0', '2');
    let koef = 0.1;
    let max = 1; 
    
    let cleanStr = proverkaPovtorov(kolichestvo, strokSmena, sFullHash, koef, max); 
    //console.log(cleanStr);

    let a = Number(sHash[sHash.length - 4]);
    let k = Number(sHash[sHash.length - 5]);

    let integral;
    for (let i = 0; i < cleanStr.length; i=i+2){
        random = cleanStr[i] + cleanStr[i+1];
        //console.log(random);
        switch (random) { 
            case '01':
                integral = '\\frac{1}{(x^2+'+k+')\\sqrt{x^2-'+a+'}}';   
                break; 
            default:
                integral = '\\frac{\\sqrt{(x^2-'+a+')}}{x^'+k+'}'; 
        }


        let elem = document.getElementById('generated');
        let child = document.createElement("li");
        child.className="listItem";
        child.innerHTML = 'Найти неопределённый интеграл <SPAN></SPAN>';
        elem.appendChild(child);
        elem = child.childNodes[1];
    
        katex.render('\\int ' + integral + ' dx', elem, {
            throwOnError: false
        });
    }
}

// Функция для интеграла с квадратными радикалами 1 уровня сложности
function metodIntegririovRadicSquarSimple(hash, kolvo){       
    let random;
    let strokSmena = '';

    kolichestvo = Number(kolvo);
    
    let fullHash = hash * kolichestvo;
    let sHash = String(hash);
    let sFullHash = String(fullHash);
    sFullHash = sFullHash.replaceAll('0', '2');
    let koef = 0.1;
    let max = 1; 
    
    let cleanStr = proverkaPovtorov(kolichestvo, strokSmena, sFullHash, koef, max); 
    //console.log(cleanStr);

    let k = Number(sHash[sHash.length - 6]);

    let integral;
    for (let i = 0; i < cleanStr.length; i=i+2){
        random = cleanStr[i] + cleanStr[i+1];
        //console.log(random);
        switch (random) { 
            default:
                integral = '\\frac{1}{\\sqrt{('+fsquard(1, Number(sHash[sHash.length - 2]), Number(sHash[sHash.length - 3]))+')^'+k+'}}';
        }


        let elem = document.getElementById('generated');
        let child = document.createElement("li");
        child.className="listItem";
        child.innerHTML = 'Найти неопределённый интеграл <SPAN></SPAN>';
        elem.appendChild(child);
        elem = child.childNodes[1];
    
        katex.render('\\int ' + integral + ' dx', elem, {
            throwOnError: false
        });
    }
}

// Функция для интеграла с квадратными радикалами 2 уровня сложности
function metodIntegririovRadicSquarNormal(hash, kolvo){       
    let random;
    let strokSmena = '';

    kolichestvo = Number(kolvo);
    
    let fullHash = hash * kolichestvo;
    let sHash = String(hash);
    let sFullHash = String(fullHash);
    sFullHash = sFullHash.replaceAll('0', '2');
    let koef = 0.1;
    let max = 1; 
    
    let cleanStr = proverkaPovtorov(kolichestvo, strokSmena, sFullHash, koef, max); 
    //console.log(cleanStr);

    let k = Number(sHash[sHash.length - 6]);

    let integral;
    for (let i = 0; i < cleanStr.length; i=i+2){
        random = cleanStr[i] + cleanStr[i+1];
        //console.log(random);
        switch (random) { 
            default:
                integral = '{('+flineynay(sHash, Number(sHash[sHash.length - 2]), Number(sHash[sHash.length - 3]))+')\\sqrt{'+fsquard(1, Number(sHash[sHash.length - 2]), Number(sHash[sHash.length - 3]))+'}}';   
        }


        let elem = document.getElementById('generated');
        let child = document.createElement("li");
        child.className="listItem";
        child.innerHTML = 'Найти неопределённый интеграл <SPAN></SPAN>';
        elem.appendChild(child);
        elem = child.childNodes[1];
    
        katex.render('\\int ' + integral + ' dx', elem, {
            throwOnError: false
        });
    }
}

// Функция для интеграла с квадратными радикалами 3 уровня сложности
function metodIntegririovRadicSquarHard(hash, kolvo){       
    let random;
    let strokSmena = '';

    kolichestvo = Number(kolvo);
    
    let fullHash = hash * kolichestvo;
    let sHash = String(hash);
    let sFullHash = String(fullHash);
    sFullHash = sFullHash.replaceAll('0', '2');
    let koef = 0.1;
    let max = 1; 
    
    let cleanStr = proverkaPovtorov(kolichestvo, strokSmena, sFullHash, koef, max); 
    //console.log(cleanStr);

    let integral;
    for (let i = 0; i < cleanStr.length; i=i+2){
        random = cleanStr[i] + cleanStr[i+1];
        //console.log(random);
        switch (random) { 
            default:
                integral = '{x^2\\sqrt{'+fsquard(1, Number(sHash[sHash.length - 2]), Number(sHash[sHash.length - 3]))+'}}';
        }


        let elem = document.getElementById('generated');
        let child = document.createElement("li");
        child.className="listItem";
        child.innerHTML = 'Найти неопределённый интеграл <SPAN></SPAN>';
        elem.appendChild(child);
        elem = child.childNodes[1];
    
        katex.render('\\int ' + integral + ' dx', elem, {
            throwOnError: false
        });
    }
}


function createTasks(){
    document.getElementById('generated').innerHTML = '';
    let strDannie = dekodirovka(document.getElementById('shifr').value);
    //console.log(strDannie);
    let fh = funhash();
    document.getElementById('h').innerHTML = fh;

    let q = String(fh);
    q = q.replaceAll('0', '2');
    q = q.replaceAll('1', '3');
    let kolvo;

    for (let i = 0; i < 32; i++){
        kolvo = strDannie[i];
        //console.log(kolvo);
        if (kolvo != 0){
            switch(i){
                case 0:
                    metodZameniPeremenSimple(q, kolvo);
                    break;
                case 1:
                    metodZameniPeremenNormal(q, kolvo);
                    break;
                case 2:
                    metodZameniPeremenHard(q, kolvo);
                    break;
                case 3:
                    metodIntegririovPoChastyamSimple(q, kolvo);
                    break;
                case 4:
                    metodIntegririovPoChastyamNormal(q, kolvo);
                    break;
                case 5:
                    metodIntegririovPoChastyamHard(q, kolvo);
                    break;
                case 6:
                    metodIntegririovPoChastyamDopSimple(q, kolvo); // доп по частям
                    break;
                case 7:
                    metodIntegririovRacDrobSimple(q, kolvo);
                    break;
                case 8:
                    metodIntegririovRacDrobNormal(q, kolvo);
                    break;
                case 9:
                    metodIntegririovRacDrobHard(q, kolvo);
                    break;
                case 10:
                    metodIntegririovUniversPodstSimple(q, kolvo); 
                    break;
                case 11:
                    metodIntegririovUniversPodstNormal(q, kolvo); 
                    break;
                case 12:
                    metodIntegririovUniversPodstHard(q, kolvo); 
                    break;
                case 13:
                    metodIntegririovITF1_0Simple(q, kolvo); // пункт 1.11.3
                    break;
                case 14:
                    metodIntegririovITF1_0Normal(q, kolvo); // пункт 1.11.3
                    break;
                case 15:
                    metodIntegririovITF1_0Hard(q, kolvo); // пункт 1.11.3
                    break;
                case 16:
                    metodIntegririovITF2_0Simple(q, kolvo); // пункт 1.11.4
                    break;
                case 17:
                    metodIntegririovITF2_0Normal(q, kolvo); // пункт 1.11.4
                    break;
                case 18:
                    metodIntegririovITF3_0Simple(q, kolvo); // пункт 1.11.5
                    break;
                case 19:
                    metodIntegririovITF3_0Normal(q, kolvo); // пункт 1.11.5
                    break;
                case 20:
                    metodIntegririovITF3_0Hard(q, kolvo); // пункт 1.11.5
                    break;
                case 21:
                    metodIntegririovRadicalSimple(q, kolvo); // пункт 1.12.1 и 1.12.2
                    break;
                case 22:
                    metodIntegririovRadicalNormal(q, kolvo); // пункт 1.12.1 и 1.12.2
                    break;
                case 23:
                    metodIntegririovDrobRadicalSimple(q, kolvo); // пункт 1.12.3
                    break;
                case 24:
                    metodIntegririovDrobRadicalNormal(q, kolvo); // пункт 1.12.3
                    break;
                case 25:
                    metodIntegririovDrobRadicalHard(q, kolvo); // пункт 1.12.3
                    break;
                case 26:
                    metodIntegririovGenerChemSimple(q, kolvo); // пункт 1.12.4
                    break;
                case 27:
                    metodIntegririovGenerChemNormal(q, kolvo); // пункт 1.12.4
                    break;
                case 28:
                    metodIntegririovGenerChemHard(q, kolvo); // пункт 1.12.4
                    break;
                case 29:
                    metodIntegririovRadicSquarSimple(q, kolvo); // пункт 1.12.4
                    break;
                case 30:
                    metodIntegririovRadicSquarNormal(q, kolvo); // пункт 1.12.4
                    break;
                case 31:
                    metodIntegririovRadicSquarHard(q, kolvo); // пункт 1.12.4
                    break;
                default:
                    alert("ERROR");
            }
        }
    }
}