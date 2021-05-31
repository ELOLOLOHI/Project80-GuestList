var list= [];

function put(){
    var take= document.getElementById("newguest").value;
    list.push(take);
    document.getElementById("blank").innerHTML= list;
    console.log(list);
}

function show(){
    var htmlstuff=[];
    for(var i=0;i<list.length;i++) {
        htmlstuff.push("<h4>Guest- "+list[i]+"</h4>");

    };
    console.log("htmlstuff");
var commaremove= htmlstuff.join(" ");
console.log(commaremove);
document.getElementById("blankshow").innerHTML= commaremove;
}

function sort() {
    htmlstuff.sort();
    var commaremove2= htmlstuff.join(" ");
    document.getElementById("blanksort").innerHTML=commaremove2; 
}

function search() {
    var s= document.getElementById("searchinput").value;
    var found=0; 
    var j;
    for(j=0;j<list.length; j++) {
        if(s==list[j]) {
            found=found+1;
        }
    }


document.getElementById("blanksearch").innerHTML= "name found "+found+" time/s";
console.log("name found "+found+" time/s");
}