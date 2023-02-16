window.onload = function(){
    let a = "\\int{f(g(x))g'(x)}dx";
    let el_a = document.getElementById('a');
    let a_prim_1 = "\\int{sin(3x+1)}dx, \\int{\\frac{dx}{5-2x}}, \\int{e^{3x}}dx";
    let el_aprim_1 = document.getElementById('a_prim_1');
    let a_prim_2 = "\\int{\\frac{sin(7\\sqrt{x}-2)}{\\sqrt{x}}}dx, \\int{\\frac{coslnx}{x}}dx, \\int{\\frac{3^xdx}{2\\cdot3^{2x}+2}}";
    let el_aprim_2 = document.getElementById('a_prim_2');
    let a_prim_3 = "\\int{\\frac{dx}{\\sqrt{1+2e^x}}}, \\int{\\frac{3^x+2}{3^x-5}}dx, \\int{\\frac{\\sqrt[6]{x}dx}{5+\\sqrt[3]{x}}}";
    let el_aprim_3 = document.getElementById('a_prim_3');

    let b = "\\int{udv} = uv - \\int{vdu}";
    let el_b = document.getElementById('b');
    let b_prim_1 = "\\int{x^2cosx}dx, \\int{xe^x}dx, \\int{lnx}dx";
    let el_bprim_1 = document.getElementById('b_prim_1');
    let b_prim_2 = "\\int{e^{\\sqrt{3x+1}}}dx, \\int{(x^2+3x)sin2x}dx, \\int{12^xarctg12^x}dx";
    let el_bprim_2 = document.getElementById('b_prim_2');
    let b_prim_3 = "\\int{ln(2x^2+x+4)}dx, \\int{x^2arctg(3x^3+1)}dx, \\int{\\frac{dx}{(x^2+3^2)^4}}";
    let el_bprim_3 = document.getElementById('b_prim_3');

    let c = "\\int{f(x)e^{kx}}dx";
    let el_c = document.getElementById('c');
    let c_prim_1 = "\\int{e^{5x}cos4x}dx, \\int{e^xsin3x}dx";
    let el_cprim_1 = document.getElementById('c_prim_1');
    
    let d = "\\int\\frac{P(x)}{Q(x)},";
    let el_d = document.getElementById('d');
    let d_prim_1 = "\\int{\\frac{(x-3)dx}{(x-2)(x+3)}}, \\int{\\frac{xdx}{(x^2-5x+6)}}";
    let el_dprim_1 = document.getElementById('d_prim_1');
    let d_prim_2 = "\\int{\\frac{(3x+1)dx}{(x-1)(x^2+3x)+15}}, \\int{\\frac{dx}{(x^3-8)}}";
    let el_dprim_2 = document.getElementById('d_prim_2');
    let d_prim_3 = "\\int{\\frac{(x^4-3)dx}{x^2+2x+1}}";
    let el_dprim_3 = document.getElementById('d_prim_3');
    
    let e_nazv_1 = "\\int\\frac{dx}{asinx+bcosx+c}";
    let el_enazv_1 = document.getElementById('e_nazv_1');
    let e_nazv_2 = "\\int\\frac{dx}{asinkx+bcoskx+c}";
    let el_enazv_2 = document.getElementById('e_nazv_2');
    let e_nazv_3 = "\\int\\frac{dx}{asin^mkx+bcos^nkx+c},";
    let el_enazv_3 = document.getElementById('e_nazv_3');
    let e_prim_1 = "\\int\\frac{dx}{sinx+3cosx}, \\int\\frac{dx}{2sinx+cosx+1}";
    let el_eprim_1 = document.getElementById('e_prim_1');
    let e_prim_2 = "\\int\\frac{dx}{2sin3x+cos3x+7}";
    let el_eprim_2 = document.getElementById('e_prim_2');
    let e_prim_3 = "\\int\\frac{dx}{sin3x+7cos^23x+5}";
    let el_eprim_3 = document.getElementById('e_prim_3');

    let f_nazv_1_1 = "\\int\\frac{sinxdx}{\\sqrt{asin^2x+bcos^2x}}";
    let f_nazv_1_2 = "\\int\\frac{cosxdx}{\\sqrt{asin^2x+bcos^2x}}";
    let el_fnazv_1_1 = document.getElementById('f_nazv_1_1');
    let el_fnazv_1_2 = document.getElementById('f_nazv_1_2');
    let f_nazv_2 = "\\int\\frac{sin^mxdx}{(cosx+c)^n)},";
    let el_fnazv_2 = document.getElementById('f_nazv_2');
    let f_nazv_3 = "\\int\\frac{sin^mxdx}{cos^nx}, \\int{sin^mxcos^nxdx}, \\int{tg^mxcos^nxdx},";
    let el_fnazv_3 = document.getElementById('f_nazv_3');
    let f_prim_1 = "\\int\\frac{cosxdx}{\\sqrt{3sin^2x+7cos^2x}}";
    let el_fprim_1 = document.getElementById('f_prim_1');
    let f_prim_2 = "\\int\\frac{sin^3xdx}{cosx-3}";
    let el_fprim_2 = document.getElementById('f_prim_2');
    let f_prim_3 = "\\int{tg^65xdx}, \\int{\\frac{dx}{sin^63x}}";
    let el_fprim_3 = document.getElementById('f_prim_3');

    let g_nazv_1 = "\\int{sinax}\\cdot{cosbx}dx";
    let el_gnazv_1 = document.getElementById('g_nazv_1');
    let g_nazv_2_1 = "\\int{sinax}\\cdot{cosbx}\\cdot{sincx}dx";
    let g_nazv_2_2 = "\\int{sinax}\\cdot{cos^2bx}dx";
    let el_gnazv_2_1 = document.getElementById('g_nazv_2_1');
    let el_gnazv_2_2 = document.getElementById('g_nazv_2_2');
    let g_prim_1 = "\\int{sin2x}\\cdot{cos3x}dx";
    let el_gprim_1 = document.getElementById('g_prim_1');
    let g_prim_2 = "\\int{sin2x}\\\cdot{cos4x}\\cdot{sin5x}dx, \\int{sin7x}\\cdot{cos^24x}dx";
    let el_gprim_2 = document.getElementById('g_prim_2');
    
    let h = "\\int{sin^mx}\\cdot{cos^nx}dx";
    let el_h = document.getElementById('h');
    let h_prim_1 = "\\int{sin^4x}\\cdot{cos^5x}dx, \\int{\\frac{cos^56x}{sin^86x}}dx,";
    let el_hprim_1 = document.getElementById('h_prim_1');
    let h_prim_2 = "\\int{\\frac{cos^4x}{sin^6x}}dx,";
    let el_hprim_2 = document.getElementById('h_prim_2');
    let h_prim_3 = "\\int{\\frac{sin^2x}{cos^62x}}dx, \\int{\\frac{\\sqrt[3]{cosx}}{\\sqrt[3]{cos^{13}x}}}dx";
    let el_hprim_3 = document.getElementById('h_prim_3');

    let i_nazv_1 = "\\int{R(x,x^{\\frac{p1}{q1}},,x^{\\frac{p2}{q2}}, ..., ,x^{\\frac{pn}{qn}})}dx";
    let el_inazv_1 = document.getElementById('i_nazv_1');
    let i_nazv_2 = "\\int{R(x,(\\frac{ax+b}{cx+d})^{\\frac{p1}{q1}}, (\\frac{ax+b}{cx+d})^{\\frac{p2}{q2}}, ...,(\\frac{ax+b}{cx+d})^{\\frac{pn}{qn}})}dx";
    let el_inazv_2 = document.getElementById('i_nazv_2');
    let i_prim_1 = "\\int{\\frac{x+\\sqrt[3]{x^2}+\\sqrt[6]{x}}{x(1+\\sqrt[3]{x})}}dx";
    let el_iprim_1 = document.getElementById('i_prim_1');
    let i_prim_2 = "\\int{\\frac{1}{(1-x)^2}\\cdot{\\sqrt{\\frac{1-x}{1+x}}}}dx";
    let el_iprim_2 = document.getElementById('i_prim_2');

    let j_nazv_1 = "\\int{\\frac{dx}{\\sqrt{ax^2+bx+c}}}";
    let el_jnazv_1 = document.getElementById('j_nazv_1');
    let j_nazv_2 = "\\int{\\frac{(nx+m)dx}{\\sqrt{ax^2+bx+c}}}";
    let el_jnazv_2 = document.getElementById('j_nazv_2');
    let j_nazv_3 = "\\int{\\frac{dx}{(x+d)\\sqrt{ax^2+bx+c}}}";
    let el_jnazv_3 = document.getElementById('j_nazv_3');
    let j_prim_1 = "\\int{\\frac{dx}{\\sqrt{x^2+8x+13}}}dx";
    let el_jprim_1 = document.getElementById('j_prim_1');
    let j_prim_2 = "\\int{\\frac{(x+5)dx}{\\sqrt{x^2+x+1}}}";
    let el_jprim_2 = document.getElementById('j_prim_2');
    let j_prim_3 = "\\int{\\frac{dx}{(x+8)\\sqrt{x^2-5x-2}}}";
    let el_jprim_3 = document.getElementById('j_prim_3');

    let k_nazv_1 = "\\int{R(x,\\sqrt{a^2-x^2})}dx";
    let el_knazv_1 = document.getElementById('k_nazv_1');
    let k_nazv_2 = "\\int{R(x,\\sqrt{x^2+a^2})}dx";
    let el_knazv_2 = document.getElementById('k_nazv_2');
    let k_nazv_3 = "\\int{R(x,\\sqrt{x^2-a^2})}dx";
    let el_knazv_3 = document.getElementById('k_nazv_3');
    let k_prim_1 = "\\int{\\frac{dx}{\\sqrt{(2-x^2)^3}}}, \\int{\\frac{x^2dx}{\\sqrt{3-x^2}}}";
    let el_kprim_1 = document.getElementById('k_prim_1');
    let k_prim_2 = "\\int{\\frac{dx}{x^2\\sqrt{x^2+7}}}, \\int{\\frac{\\sqrt{4+x^2}}{x^4}}";
    let el_kprim_2 = document.getElementById('k_prim_2');
    let k_prim_3 = "\\int{\\frac{dx}{(x^2+2)\\sqrt{x^2-1}}}, \\int{\\frac{\\sqrt{x^2-17}}{x^2}}";
    let el_kprim_3 = document.getElementById('k_prim_3');


    let l = "\\int{R(x, \\sqrt{ax^2+bx+c})}dx";
    let el_l = document.getElementById('l');
    let l_prim_1 = "\\int{\\frac{dx}{\\sqrt{(5+2x+x^2)^3}}}";
    let el_lprim_1 = document.getElementById('l_prim_1');
    let l_prim_2 = "\\int{(x+1)\\sqrt{x^2+4x+1}}dx";
    let el_lprim_2 = document.getElementById('l_prim_2');
    let l_prim_3 = "\\int{x^2\\sqrt{8-x^2}}dx";
    let el_lprim_3 = document.getElementById('l_prim_3');

    let m = "\\int{g(h(x))h'(x)}dx";
    let el_m = document.getElementById('m');

    let n = "\\int{g(h(x))h'(x)}dx";
    let el_n = document.getElementById('n');

    let o = "\\int{g(h(x))h'(x)}dx";
    let el_o = document.getElementById('o');


    katex.render(a, el_a);
    katex.render(a_prim_1, el_aprim_1);
    katex.render(a_prim_2, el_aprim_2);
    katex.render(a_prim_3, el_aprim_3);

    katex.render(b, el_b);
    katex.render(b_prim_1, el_bprim_1);
    katex.render(b_prim_2, el_bprim_2);
    katex.render(b_prim_3, el_bprim_3);
    
    katex.render(c, el_c);
    katex.render(c_prim_1, el_cprim_1);

    katex.render(d, el_d);
    katex.render(d_prim_1, el_dprim_1);
    katex.render(d_prim_2, el_dprim_2);
    katex.render(d_prim_3, el_dprim_3);

    katex.render(e_nazv_1, el_enazv_1);
    katex.render(e_nazv_2, el_enazv_2);
    katex.render(e_nazv_3, el_enazv_3);
    katex.render(e_prim_1, el_eprim_1);
    katex.render(e_prim_2, el_eprim_2);
    katex.render(e_prim_3, el_eprim_3);

    katex.render(f_nazv_1_1, el_fnazv_1_1);
    katex.render(f_nazv_1_2, el_fnazv_1_2);
    katex.render(f_nazv_2, el_fnazv_2);
    katex.render(f_nazv_3, el_fnazv_3);
    katex.render(f_prim_1, el_fprim_1);
    katex.render(f_prim_2, el_fprim_2);
    katex.render(f_prim_3, el_fprim_3);

    katex.render(g_nazv_1, el_gnazv_1);
    katex.render(g_nazv_2_1, el_gnazv_2_1);
    katex.render(g_nazv_2_2, el_gnazv_2_2);
    katex.render(g_prim_1, el_gprim_1);
    katex.render(g_prim_2, el_gprim_2);

    katex.render(h, el_h);
    katex.render(h_prim_1, el_hprim_1);
    katex.render(h_prim_2, el_hprim_2);
    katex.render(h_prim_3, el_hprim_3);

    katex.render(i_nazv_1, el_inazv_1);
    katex.render(i_nazv_2, el_inazv_2);
    katex.render(i_prim_1, el_iprim_1);
    katex.render(i_prim_2, el_iprim_2);

    katex.render(j_nazv_1, el_jnazv_1);
    katex.render(j_nazv_2, el_jnazv_2);
    katex.render(j_nazv_3, el_jnazv_3);
    katex.render(j_prim_1, el_jprim_1);
    katex.render(j_prim_2, el_jprim_2);
    katex.render(j_prim_3, el_jprim_3);

    katex.render(k_nazv_1, el_knazv_1);
    katex.render(k_nazv_2, el_knazv_2);
    katex.render(k_nazv_3, el_knazv_3);
    katex.render(k_prim_1, el_kprim_1);
    katex.render(k_prim_2, el_kprim_2);
    katex.render(k_prim_3, el_kprim_3);

    katex.render(l, el_l);
    katex.render(l_prim_1, el_lprim_1);
    katex.render(l_prim_2, el_lprim_2);
    katex.render(l_prim_3, el_lprim_3);

    katex.render(m, el_m);
    katex.render(n, el_n);
    katex.render(o, el_o);
}   




let posled = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

// кодировка
function kodirovka(strDannie){
    let itogovaya = '';
    
    for (let d = 1; d < 5; d=d+1){
        let y = d*8;
        let x = y - 8;
        console.log(x);
        
        let slice = strDannie.substring(x, y);
        let numDannie = Number(slice);
        console.log(slice);
        let numDanniett = '';
        while (numDannie != 0){
            if (numDannie % 60 == 0){
                numDanniett = numDanniett + posled[0];
            } else {
                numDanniett = numDanniett + posled[String((numDannie % 60))];
            }
            numDannie = Math.floor(numDannie / 60);
        }
        itogovaya = (itogovaya + '*' + numDanniett);
        console.log(itogovaya);
    } 

    return(itogovaya);
}

function fokus(idch, idk) {
    idch = document.getElementById(idch);
    idk = document.getElementById(idk);
    if (idch.checked){
        idk.disabled = false;
        idk.focus();
    }
    else {
        idk.disabled = true;
        //idk.autofocus = false;
    }
}


// Функция сбора всех значений checkbox и соответствующих количеств
function fsbordann(){
    // формируем строку значений
    let dannie = '';

    // сбор данных 1 типа
    if (document.getElementById("ch_a").checked){
        dannie += document.getElementById("k_a").value;
    }
    else{
        dannie += '0';
    }
    if (document.getElementById("ch_b").checked){
        dannie += document.getElementById("k_b").value;
    }
    else{
        dannie += '0';
    }
    if (document.getElementById("ch_c").checked){
        dannie += document.getElementById("k_c").value;
    }
    else{
        dannie += '0';
    }
    // сбор данных 2 типа
    if (document.getElementById("ch_d").checked){
        dannie += document.getElementById("k_d").value;
    }
    else{
        dannie += '0';
    }
    if (document.getElementById("ch_e").checked){
        dannie += document.getElementById("k_e").value;
    }
    else{
        dannie += '0';
    }
    if (document.getElementById("ch_f").checked){
        dannie += document.getElementById("k_f").value;
    }
    else{
        dannie += '0';
    }
    // сбор данных 3 типа
    if (document.getElementById("ch_g").checked){
        dannie += document.getElementById("k_g").value;
    }
    else{
        dannie += '0';
    }
    // if (document.getElementById("ch_h").checked){
    //     dannie += document.getElementById("k_h").value;
    // }
    // else{
    //     dannie += '0';
    // }
    // if (document.getElementById("ch_i").checked){
    //     dannie += document.getElementById("k_i").value;
    // }
    // else{
    //     dannie += '0';
    // }
    // сбор данных 4 типа
    if (document.getElementById("ch_j").checked){
        dannie += document.getElementById("k_j").value;
    }
    else{
        dannie += '0';
    }
    if (document.getElementById("ch_k").checked){
        dannie += document.getElementById("k_k").value;
    }
    else{
        dannie += '0';
    }
    if (document.getElementById("ch_l").checked){
        dannie += document.getElementById("k_l").value;
    }
    else{
        dannie += '0';
    }
    // сбор данных 5 типа
    if (document.getElementById("ch_m").checked){
        dannie += document.getElementById("k_m").value;
    }
    else{
        dannie += '0';
    }
    if (document.getElementById("ch_n").checked){
        dannie += document.getElementById("k_n").value;
    }
    else{
        dannie += '0';
    }
    if (document.getElementById("ch_o").checked){
        dannie += document.getElementById("k_o").value;
    }
    else{
        dannie += '0';
    }
    // сбор данных 6 типа
    if (document.getElementById("ch_p").checked){
        dannie += document.getElementById("k_p").value;
    }
    else{
        dannie += '0';
    }
    if (document.getElementById("ch_q").checked){
        dannie += document.getElementById("k_q").value;
    }
    else{
        dannie += '0';
    }
    if (document.getElementById("ch_r").checked){
        dannie += document.getElementById("k_r").value;
    }
    else{
        dannie += '0';
    }
    // сбор данных 7 типа
    if (document.getElementById("ch_s").checked){
        dannie += document.getElementById("k_s").value;
    }
    else{
        dannie += '0';
    }
    if (document.getElementById("ch_t").checked){
        dannie += document.getElementById("k_t").value;
    }
    else{
        dannie += '0';
    }
    // if (document.getElementById("ch_u").checked){
    //     dannie += document.getElementById("k_u").value;
    // }
    // else{
    //     dannie += '0';
    // }
    // сбор данных 8 типа
    if (document.getElementById("ch_v").checked){
        dannie += document.getElementById("k_v").value;
    }
    else{
        dannie += '0';
    }
    if (document.getElementById("ch_w").checked){
        dannie += document.getElementById("k_w").value;
    }
    else{
        dannie += '0';
    }
    if (document.getElementById("ch_x").checked){
        dannie += document.getElementById("k_x").value;
    }
    else{
        dannie += '0';
    }
    // сбор данных 9 типа
    if (document.getElementById("ch_y").checked){
        dannie += document.getElementById("k_y").value;
    }
    else{
        dannie += '0';
    }
    if (document.getElementById("ch_z").checked){
        dannie += document.getElementById("k_z").value;
    }
    else{
        dannie += '0';
    }
    // if (document.getElementById("ch_aa").checked){
    //     dannie += document.getElementById("k_aa").value;
    // }
    // else{
    //     dannie += '0';
    // }
    // сбор данных 10 типа
    if (document.getElementById("ch_bb").checked){
        dannie += document.getElementById("k_bb").value;
    }
    else{
        dannie += '0';
    }
    if (document.getElementById("ch_cc").checked){
        dannie += document.getElementById("k_cc").value;
    }
    else{
        dannie += '0';
    }
    if (document.getElementById("ch_dd").checked){
        dannie += document.getElementById("k_dd").value;
    }
    else{
        dannie += '0';
    }
    // сбор данных 11 типа
    if (document.getElementById("ch_ee").checked){
        dannie += document.getElementById("k_ee").value;
    }
    else{
        dannie += '0';
    }
    if (document.getElementById("ch_ff").checked){
        dannie += document.getElementById("k_ff").value;
    }
    else{
        dannie += '0';
    }
    if (document.getElementById("ch_gg").checked){
        dannie += document.getElementById("k_gg").value;
    }
    else{
        dannie += '0';
    }
    // сбор данных 12 типа
    if (document.getElementById("ch_hh").checked){
        dannie += document.getElementById("k_hh").value;
    }
    else{
        dannie += '0';
    }
    if (document.getElementById("ch_ii").checked){
        dannie += document.getElementById("k_ii").value;
    }
    else{
        dannie += '0';
    }
    if (document.getElementById("ch_jj").checked){
        dannie += document.getElementById("k_jj").value;
    }
    else{
        dannie += '0';
    }
    // сбор данных 13 типа
    // if (document.getElementById("ch_kk").checked){
    //     dannie += document.getElementById("k_kk").value;
    // }
    // else{
    //     dannie += '0';
    //}
    // if (document.getElementById("ch_ll").checked){
    //     dannie += document.getElementById("k_ll").value;
    // }
    // else{
    //     dannie += '0';
    // }
    // if (document.getElementById("ch_mm").checked){
    //     dannie += document.getElementById("k_mm").value;
    // }
    // else{
    //     dannie += '0';
    // }
    // сбор данных 14 типа
    // if (document.getElementById("ch_nn").checked){
    //     dannie += document.getElementById("k_nn").value;
    // }
    // else{
    //     dannie += '0';
    // }
    // if (document.getElementById("ch_oo").checked){
    //     dannie += document.getElementById("k_oo").value;
    // }
    // else{
    //     dannie += '0';
    // }
    // if (document.getElementById("ch_pp").checked){
    //     dannie += document.getElementById("k_pp").value;
    // }
    // else{
    //     dannie += '0';
    // }
    // сбор данных 15 типа
    // if (document.getElementById("ch_qq").checked){
    //     dannie += document.getElementById("k_qq").value;
    // }
    // else{
    //     dannie += '0';
    // }
    // if (document.getElementById("ch_rr").checked){
    //     dannie += document.getElementById("k_rr").value;
    // }
    // else{
    //     dannie += '0';
    // }
    // if (document.getElementById("ch_ss").checked){
    //     dannie += document.getElementById("k_ss").value;
    // }
    // else{
    //     dannie += '0';
    // }

    // вывод строки в консоль для проверки
    console.log(dannie);
    console.log(dannie.length);
    console.log(kodirovka(dannie));
    document.getElementById('zadan').style.display = 'none';
    document.getElementById('text').style.display = 'none';
    document.getElementById('btnPr').style.display = 'none';
    document.getElementById('shifr_p').style.display = 'block';
    document.getElementById('shifr').innerHTML = kodirovka(dannie);
}