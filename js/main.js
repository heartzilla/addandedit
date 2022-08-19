const Addbtn = document.getElementById('btn')
Addbtn.style.fontSize = '2em'
const mymodal = document.getElementById('mymodal')
const modalContent = document.getElementById('modal-content')

const Edmymodal = document.getElementById('Edmymodal')
const EdmodalContent = document.getElementById('Edmodal-content')
Addbtn.onclick = function() {
    mymodal.style.display = 'block'
    inName.value = ''
    inAge.value = ''
    inJob.value =''
    inPhone.value =''
}
window.onclick = function(e){
    if(e.target == mymodal){
        mymodal.style.display = 'none'
    }
}

//SIMPLE MODAL
const inID = document.getElementById('ID')
const inName = document.getElementById('inname')
const inAge = document.getElementById('inage')
const inJob = document.getElementById('injob')
const inPhone = document.getElementById('inphone')
const sendBtn = document.getElementById('btnsend')
//EDITED MODAL
const EdinName = document.getElementById('Edinname')
const EdinAge = document.getElementById('Edinage')
const EdinJob = document.getElementById('Edinjob')
const EdinPhone = document.getElementById('Edinphone')
const Edbtn = document.getElementById('Edbtn')


const table = document.getElementById('table')
const tbody = document.createElement('tbody')
table.appendChild(tbody)
let cnt = 0
sendBtn.onclick = function(){
    const tr = document.createElement('tr')
    const tdID = document.createElement('td')
    tdID.innerHTML = ++cnt
    tr.appendChild(tdID)
    const tdName = document.createElement('td')
    tdName.innerHTML = inName.value
    tr.appendChild(tdName)
    const tdAge = document.createElement('td')
    tdAge.innerHTML = inAge.value
    tr.appendChild(tdAge)
    const tdJob = document.createElement('td')
    tdJob.innerHTML = inJob.value
    tr.appendChild(tdJob)
    const tdPhone = document.createElement('td')
    tdPhone.innerHTML = inPhone.value
    tr.appendChild(tdPhone)
    
    const tdedBtn = document.createElement('td')
    tr.appendChild(tdedBtn)
    const edBtn = document.createElement('button')
    edBtn.innerHTML = 'EDIT'
    edBtn.style.marginTop = '6px'
    edBtn.style.marginRight = '6px'
    edBtn.style.fontSize = '1em'
    tdedBtn.appendChild(edBtn)

    edBtn.onclick = function(){
       EdinName.value = tdName.innerHTML
       EdinAge.value = tdAge.innerHTML
       EdinJob.value = tdJob.innerHTML
       EdinPhone.value = tdPhone.innerHTML 
       Edmymodal.style.display = 'block'
    }
    Edbtn.onclick = function(){
      Edmymodal.style.display = 'none'
      tdName.innerHTML = EdinName.value  
      tdAge.innerHTML= EdinAge.value 
      tdJob.innerHTML= EdinJob.value
      tdPhone.innerHTML = EdinPhone.value
      
    }
    
    const tddelBtn = document.createElement('td')
    tr.appendChild(tddelBtn)
    const delBtn = document.createElement('button')
    delBtn.innerHTML = 'DELETE'
    delBtn.style.marginTop = '6px'
    delBtn.style.marginRight= '6px'
    delBtn.style.fontSize = '1em'
    tddelBtn.appendChild(delBtn)
    
    
    tbody.appendChild(tr)
    delBtn.onclick = function() {
        tbody.removeChild(tr)
    }
    mymodal.style.display = 'none'
   
    
}

