let users = [
    {
        id: "1",
        name: "Alex",
        surname: "John",
        age: 24,
    },
    {
        id: "2",
        name: "Mia",
        surname: "Smith",
        age: 30,
    },
    {
        id: "3",
        name: "Ethan",
        surname: "Brown",
        age: 28,
    },
    {
        id: "4",
        name: "Sophia",
        surname: "Davis",
        age: 26,
    },
    {
        id: "5",
        name: "Liam",
        surname: "Wilson",
        age: 32,
    },
    {
        id: "6",
        name: "Emma",
        surname: "Taylor",
        age: 25,
    },
];











let form = document.forms.auth;

let obj = {};
form.onsubmit = (event) => {
    event.preventDefault()
    let fun = new FormData(form);
    fun.forEach((value, key) => {
        obj[key] = value
    })
    let newId = (users.length + 1).toString()
    obj.id = newId
    users.push(obj)
    reload(users)
    console.log(users);
}





function reload(users) {
    let date = new Date()
    let tbody = document.querySelector('tbody')
    tbody.innerHTML = ""
    let inputs = document.querySelectorAll('.required')
    inputs.forEach(inp =>{
       let key = inp.getAttribute("name")
        if(obj[key] == key){
        obj.value = inp.value
        }
       
    })
    for (let item of users) {
        let tr = document.createElement('tr')
        let td = document.createElement('td')
        let td2 = document.createElement('td')
        let td3 = document.createElement('td')
        let td4 = document.createElement('td')
        let change = document.createElement('button')
        let del = document.createElement('button')
        let img1 = document.createElement('img')
        let img2 = document.createElement('img')

        change.classList.add('change')
        del.classList.add('delete')
        del.onclick = () =>{
            let idx = users.indexOf(item)
            if(idx !== -1){
                users.splice(idx,1)
                reload(users)
            }
        
            
        }
      

        td.textContent = item.id
        td2.textContent = `${item.name} ${item.surname}`
        td3.textContent = date.getFullYear() - item.age
        img1.src = './img/write.png'
        img2.src = './img/delete.png'

        tbody.append(tr)
        tr.append(td,td2,td3,td4)
        td4.append(change,del)
        change.append(img1)
        del.append(img2)
    }
   
}

// reload(users)







