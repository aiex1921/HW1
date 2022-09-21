import {usersArray} from "./users";
import {usersInfoArray} from "./usersinfo";
import {organization} from "./usersinfo";

function getUsersJobPositions() {
    let out:any = [];
    let JobPositions:any = [];

    for (let i=0, len=usersArray.length; i<len; i++)
        if (out.indexOf(usersArray[i].userid) === -1){
            let u : usersArray = {userid : usersArray[i].userid, gender: usersArray[i].gender};
            out.push(u)}


    for (let i=0, len=out.length; i<len; i++)
        if (out[i].userid.includes(usersInfoArray[i].userid)) {
            let t: organization | usersInfoArray | usersArray = {
                name : usersInfoArray[i].name,
                position: usersInfoArray[i].organization.position,
                age : usersInfoArray[i].age,
                gender: out[i].gender


            }
            JobPositions.unshift(t)
        }
    return JobPositions;
}

const usersPositions = getUsersJobPositions();
console.log(usersPositions);