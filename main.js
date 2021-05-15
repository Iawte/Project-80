var studentArray = [];
var displayArray = [];
function submit() {
    for (var i = 1; i <= 4; i++) {
        var name = document.getElementById("student" + i).value
        studentArray.push(name);
    }
    var length = studentArray.length;
    for (var j = 0; j < length; j++) {
        displayArray.push("<h4>Name-" + studentArray[j] + "</h4>")
    }
    document.getElementById("nameDivWithComas").innerHTML = displayArray;
    var removeComas = displayArray.join(" ");
    document.getElementById("nameDivWithoutComas").innerHTML = removeComas;


    document.getElementById("submitButton").style.display = "none";
    document.getElementById("sortButton").style.display = "inline-block";
}

function sort() {
    studentArray.sort();
    var displayArraySorted = [];
    var length = studentArray.length;
    for (var a = 0; a < length; a++) {
        displayArray.push("<h4>Name-" + studentArray[a] + "</h4>");
    }
    var removeComas = displayArray.join(" ");
    document.getElementById("nameDivWithoutComas").innerHTML = removeComas;
}

function search()
{
var s=document.getElementById("Searchstudent").value;
var found=0;
var j;
for(j=0; j<names_of_people.length; j++)
{
    if(s==names_of_people[j]){
        found=found+1;
    }

}
document.getElementById("p2").innerHTML="name found"+found+" time/s";
console.log("found name "+found+" time/s");
}


