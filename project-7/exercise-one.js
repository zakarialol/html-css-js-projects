/*
    challenge
*/
let myAdmins=['Ahmad','Osama','Sayed','Stop','Samira'];
let myEmployees=['Amgad','Samah','Ammer','Omar','Othman','Amany','Samia'];
let characterToCheck=['A','O','S']

let count=3;
let k=0;
let i=0;

document.write(`<p>we have ${count}  admins</p>`)
    for(i<0 ; i<count ;i++){
        document.write(`<div>`)
        document.write(`<hr>`)
        document.write(`the Admin for team is ${i +1} ${myAdmins[i]}`)
        document.write(`<h1>team members:</h1>`)
            for(j=0; j<myEmployees.length ;j++){
                if(myEmployees[j].charAt(0)===characterToCheck[i]){
                    document.write(`<p>- ${k+1} ${myEmployees[j]}`)
                    k++
                }
            }
        document.write(`<hr>`)
        document.write(`</div>`)
}
