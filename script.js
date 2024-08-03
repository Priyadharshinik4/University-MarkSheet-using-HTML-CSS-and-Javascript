function submit()
{   
    inp1=parseFloat(document.getElementById("inp1").value);
    inp2=parseFloat(document.getElementById("inp2").value);
    inp3=parseFloat(document.getElementById("inp3").value);
    inp4=parseFloat(document.getElementById("inp4").value);
    inp5=parseFloat(document.getElementById("inp5").value);
    inp6=parseFloat(document.getElementById("inp6").value);
    inp7=parseFloat(document.getElementById("inp7").value);
    inp8=parseFloat(document.getElementById("inp8").value);
    inp9=parseFloat(document.getElementById("inp9").value);
    inp10=parseFloat(document.getElementById("inp10").value);
    inp11=parseFloat(document.getElementById("inp11").value);
    inp12=parseFloat(document.getElementById("inp12").value);
    inp13=parseFloat(document.getElementById("inp13").value);
    inp14=parseFloat(document.getElementById("inp14").value);
    inp15=parseFloat(document.getElementById("inp15").value);
    inp16=parseFloat(document.getElementById("inp16").value);
    

    res1=document.getElementById("res1");
    res1.value=inp1+inp2;
    if(res1.value>100)
    {
        alert("Total should be less than 100...");
        return;
    }
    res2=document.getElementById("res2");
    res2.value=inp3+inp4;
    if(res2.value>100)
    {
        alert("Total should be less than 100...");
        return;
    }
    res3=document.getElementById("res3");
    res3.value=inp5+inp6;
    if(res3.value>100)
    {
        alert("Total should be less than 100...");
        return;
    }
    res4=document.getElementById("res4");
    res4.value=inp7+inp8;
    if(res4.value>100)
    {
        alert("Total should be less than 100...");
        return;
    }
    res5=document.getElementById("res5");
    res5.value=inp9+inp10;
    if(res5.value>100)
    {
        alert("Total should be less than 100...");
        return;
    }
    res6=document.getElementById("res6");
    res6.value=inp11+inp12;
    if(res6.value>100)
    {
        alert("Total should be less than 100...");
        return;
    }
    res7=document.getElementById("res7");
    res7.value=inp13+inp14;
    if(res7.value>100)
    {
        alert("Total should be less than 100...");
        return;
    }
    res8=document.getElementById("res8");
    res8.value=inp15+inp16;
    if(res8.value>100)
    {
        alert("Total should be less than 100...");
        return;
    }


    tot=document.getElementById("tot");
    const total=inp1+inp2+inp3+inp4+inp5+inp6+inp7+inp8+inp9+inp10+inp11+inp12+inp13+inp14+inp15+inp16;
    tot.value=total.toFixed(2);


    result=document.getElementById("result");
    if(total>=400)
    {
        result.value="PASS";
    }
    else if(total<400)
    {
        result.value="FAIL";
    }


    percent=document.getElementById("percent");
    percentage=(total*100)/800;
    percent.value=percentage.toFixed(0)+"%";


    grade=document.getElementById("grade");
    if(percentage>=90)
    {
        grade.value="A";
    }
    else if(percentage>=80)
    {
        grade.value="B";
    } 
    else if(percentage>=70)
    {
        grade.value="C";
    } 
    else if(percentage>=60)
    {
        grade.value="D";
    } 
    else if(percentage>=50)
    {
        grade.value="E";
    } 
    else
    {
        grade.value="F";
    }

    // const button=document.getElementById("button");
    // button.remove();

}
