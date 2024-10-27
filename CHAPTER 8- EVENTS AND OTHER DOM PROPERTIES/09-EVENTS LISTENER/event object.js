let click=function(e)// here the parameter e isa function
// you can give anything inside the poarameter either name or anything
                    {
                         console.log("click Hua")
                         // printing the event
                         console.log(e)
                         // printing the elemnt on which the user clicks
                         console.log(e.target)
                         // printing the coordibates of the soecified element on which user clicks
                         console.log(e.clientX, e.clientY)
                         // /porinting the type of the evenet
                         console.log(e.type) // here is click
                    } 

let btn=document.body.getElementsByTagName("button")[0]
btn.addEventListener("click",click)