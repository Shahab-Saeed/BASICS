let a=document.body.getElementsByClassName("container")[0].firstElementChild

a.onmouseenter=()=>{
     console.log("Mouse Enter Hua")
}

a.onmouseover=()=>{
     console.log("mouse over ho raha he")
}

a.onmouseleave=()=>{
     console.log("Mouse bahir Nikla")
}
a.onclick=()=>{
     let b=document.body.getElementsByClassName("container")[0]
     b.innerHTML="<h1>Shahab Saeed</h1>"
}