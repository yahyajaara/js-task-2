
function add ()
{
    var v = document.querySelector("input").value;

    if(v != emp)
    {
        names.push(v);
        document.querySelector(".tstudent").innerHTML += `<tr>
                                                            <td> ${(names.length)-1} </td> 
                                                            <td> ${names[(names.length)-1]}</td>

                                                          </tr>` ;
    }

    else 
    {
        alert("Please enter a name");
        return;
    }
    
}



var names = [
                "Tariq", "Ali", "Rami", "Sara", "Huda", "Lina", "Ahmad", "Yara", "Mona", "Omar",
                "Noor", "Amira", "Fadi", "Hassan", "Aya", "Khalid", "Leila", "Samer", "Zain", "Nadine",
                "Ibrahim", "Hana", "Mahmoud", "Nour", "Rania", "Salim", "Rasha", "Adel", "Basma", "Waleed",
                "Yousef", "Mariam", "Samira", "Issa", "Farah", "Bilal", "Laila", "Jana", "Mustafa", "Naji",
                "Dina", "Hatem", "Maya", "Tamer", "Loubna", "Saif", "Fayez", "Salma", "Reem", "Zahra",
                "Yazan", "Nabil", "Ola", "Rita", "Jawad", "Shadi", "Kamil", "Nada", "Ibtisam", "Basel",
                "Ziad", "Manal", "Tala", "Anas", "Ghada", "Jamil", "Rabab", "Sami", "Rayan", "Fatima",
                "Walid", "Nourhan", "Karim", "Maysa", "Firas", "Amal", "Lamis", "Sahar", "Rafik", "Iman",
                "Mohammad", "Lamar", "Majed", "Tania", "Ayman", "Shereen", "Qasem", "Haifa", "Bassam", "Nada",
                "Alaa", "Marwa", "Sameh", "Noura", "Murad", "Afaf", "Nizar", "Rida", "Aziz", "Dalia"
            ];


for(var counter = 0; counter < names.length; counter++)
{
    document.querySelector(".tstudent").innerHTML += `<tr>
                                                            <td> ${counter} </td> 
                                                            <td> ${names[counter]}</td>

                                                      </tr>` ;

}

var emp = document.querySelector("input").value;
document.querySelector(".bAdd").onclick = add;










