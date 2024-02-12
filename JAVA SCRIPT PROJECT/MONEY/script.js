
function fun1(){
    let one = document.getElementById("note").value = "2000";
    let two = document.getElementById("note").value = "500";
    let three = document.getElementById("note").value = "200";
    let four = document.getElementById("note").value = "100";
    let five = document.getElementById("note").value = "50";
    let six = document.getElementById("note").value = "20";
    let seven = document.getElementById("note").value = "10";
    let eight = document.getElementById("note").value = "5";
    let nine = document.getElementById("note").value = "2";
    let ten = document.getElementById("note").value = "1";

    let one1 = document.getElementById("note-1-2000").value;
    let two1 = document.getElementById("note-1-500").value;
    let three1 = document.getElementById("note-1-200").value;
    let four1 = document.getElementById("note-1-100").value;
    let five1 = document.getElementById("note-1-50").value;
    let six1 = document.getElementById("note-1-20").value;
    let seven1 = document.getElementById("note-1-10").value;
    let eight1 = document.getElementById("note-1-5").value;
    let nine1 = document.getElementById("note-1-2").value;
    let ten1 = document.getElementById("note-1-1").value;

     
    let one2 = one*one1;
    document.getElementById("note-2-2000").value = one2;
    let two2 = two * two1;
    document.getElementById("note-2-500").value = two2;
    let three2 = three * three1;
    document.getElementById("note-2-200").value = three2;
    let four2 = four * four1;
    document.getElementById("note-2-100").value = four2;
    let five2 = five * five1;
    document.getElementById("note-2-50").value = five2;
    let six2 = six * six1;
    document.getElementById("note-2-20").value = six2;
    let seven2 = seven * seven1;
    document.getElementById("note-2-10").value = seven2;
    let eight2 = eight * eight1;
    document.getElementById("note-2-5").value = eight2;
    let nine2 = nine * nine1;
    document.getElementById("note-2-2").value = nine2;
    let ten2 = ten * ten1;
    document.getElementById("note-2-1").value = ten2;

   let total_cash = one2 + two2 + three2 + four2 + five2 + six2 + seven2 + eight2 + nine2 + ten2; 
  document.getElementById("total_cash").innerHTML = total_cash ; 

  let total_note = +one1 + +two1 + +three1 + +four1 + +five1 + +six1 + +seven1 + +eight1 + +nine1 + +ten1;
  document.getElementById("total_note").innerHTML = total_note;


  document.getElementById("total_text").innerHTML = numberToWords(total_cash)

}

function delet(){
 document.getElementById("total_cash").innerHTML = "";
 document.getElementById("total_note").innerHTML = "";
 document.getElementById("total_text").innerHTML = "";
}







