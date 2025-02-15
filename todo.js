
/*enabling the to do button when all inputs arent empty*/
function enbablingAddButtun(){
    document.querySelectorAll(".input").forEach(input => {
        input.addEventListener('input', () => {
            const allFilled = [...document.querySelectorAll(".input")].every(input => input.value.trim() !== "");
            document.querySelector(".btn").disabled = !allFilled;
        });
    });

}
enbablingAddButtun();


/*ajoter les taches chaque fois le boutton est clické*/
let html="";
const AddButton =document.querySelector(".btn");
AddButton.addEventListener('click',()=>{
    const name=document.querySelector(".input_name").value;
    const content=document.querySelector(".input_content").value;
    const UniqueID=`${name}${content}`;
    currentTask=`<div class="row deletable" >
                <span class="task">${name}: ${content}
                    <i class="bi bi-trash" ></i>
                </span>
                </div>`;
    html+=currentTask;
    document.querySelector(".Tasks").innerHTML=html;
    document.querySelectorAll(".input").forEach(input=>input.value="");
    document.querySelector(".btn").disabled =true;
    
});


document.querySelector(".Tasks").addEventListener('click',function(e){
    let rowToRemove=e.target.closest('.deletable');

    rowToRemove.remove();
    html=document.querySelector(".Tasks").innerHTML;
    html= html.replace(rowToRemove.innerHTML,"");
    document.querySelector(".Tasks").innerHTML=html;

    console.log(html);
    
    

});



