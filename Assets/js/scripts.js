
document.querySelector('#botaoTarefa').onclick = function(){
    if(document.querySelector('#inputTarefas input').value.length == 0){
        alert("Por favor digite uma tarefa a ser feita");
    }
    else{
        document.querySelector('#tarefas').innerHTML +=`
        <div class="tarefa">
            <input type="checkbox" id="checkbox">
            <span id="nomeTarefa">
                ${document.querySelector('#inputTarefas input').value}
            </span>
            <button class="delete"> delete
            </button>
        </div>
        <br>
        `;
        var tarefasAtuais = document.querySelectorAll(".delete");
        for(var i=0; i<tarefasAtuais.length; i++){
            tarefasAtuais[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}