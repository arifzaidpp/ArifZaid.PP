
function submitform(form) {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == 'arifzaidaiju@gmail.com' && password == "Aiju995#") {
        alert("Login Successful...");
        document.getElementById("login").value = "CV<ZJ1l069Z8l[e[F{i95S8lIUCHmWEUi3Jdy>Y2<([V#kQUT1#`]?IPM5Mf|!d1k@D9;r6iJk';WL^g7h651k|M8]snl3<3RT0VP7509P=%U0rzDw7>jp*0$p4h+I5YS}A_F3o6`S1bWz19ELA47P0=2Zt-?@&Q86.6C[Hg`34i`p_ywM@5X167F9m0jTubBG28&J06RzR36$Tjg{4S7'fDnOnEjdr6Z[(f2G6_jC:T)6Y[21Rj]9Ua?{p/~,2$)\l8EK.B7[Qu0W666$qu28060w~g4MHl4AGvy%vKeBN5371M5PXvY/3L}o5]ap1x65F2nN8p9J]]\c?NNn_%f/:@53t-1v13QQ<!w2pgc1IAY'b<ZnaU27GTD3(*87I%1R8ff>0{s4b0VstL(mj5}h_508`DOX2R3puNj9gzD5Ucs)7K+(2\8I_-Hc^0s83<8u&1a2EV<9W'!632#X'qTA/=X(348hgWHeIn&|bTc.u,16=2b";
        return true;
    }else{
        alert( "validation failed! please enter correct value." );
        return false;
    }
}