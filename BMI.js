function per(){
    let height=document.querySelector("#hg1").value;
    let weight=document.querySelector("#wg1").value;
    res=weight/(height/100 * height/100);
    document.querySelector("#res1").innerHTML=(`your BMI is ${res} %`)

}