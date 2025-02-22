const goalInput=document.getElementById('goalInput');
const mainDiv=document.getElementById('main')
let goalList=[];
function addGoal(){
    goalList.push({
        goal: goalInput.value
    });
    display()
}
function display(){
    mainDiv.textContent=''
    goalList.forEach((g , ind)=>{
    const div=document.createElement("div")
    div.classList.add("goaldiv")
    const completed=document.createElement("input")
    completed.type="checkbox";
    completed.classList.add('check');
    
    const goalName=document.createElement("p");
    goalName.textContent=g.goal;
    const delButton=document.createElement("button");
    delButton.textContent="✖";
    
    delButton.onclick=function(){
        const res = confirm("Do you want to remove this Goal?")
        if(res){
            goalList.splice(ind,1);
            alert("You removed this goal")
            display()
        }
    }
    
    div.append(completed,goalName,delButton);
    mainDiv.appendChild(div)
    goalInput.value='';
});
}
display()
