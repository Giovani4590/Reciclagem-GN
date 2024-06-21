
        function adicionarDados() {
            const nomeUsuario = document.getElementById("nomeUsuario").value;
            const emailUsuario = document.getElementById("emailUsuario").value;
            const dataAtual = new Date().toLocaleString();

            
           const listaUsuarios = document.getElementById("listaUsuarios");
            const itemLista = document.createElement("li");
            itemLista.textContent = `${dataAtual} - ${nomeUsuario} (${emailUsuario})`;
            listaUsuarios.appendChild(itemLista);

            
            const dadosUsuario = { name: nomeUsuario, email: emailUsuario };
            const armazenamento = JSON.parse(localStorage.getItem("usuarios")) || [];
            armazenamento.push(dadosUsuario);
            localStorage.setItem("usuarios", JSON.stringify(armazenamento));
            renderizar();
        }
 
        function limparCampos() {
            document.getElementById("nomeUsuario").value = "";
            document.getElementById("emailUsuario").value = "";
        }

      
        function renderizar(){
            document.getElementById("listaUsuarios").innerHTML="";
            const armazenamento = JSON.parse(localStorage.getItem("usuarios")) || [];
            const listaUsuarios = document.getElementById("listaUsuarios");
            armazenamento.forEach((user, index) => {
                const itemLista = document.createElement("li");
                itemLista.textContent = `${user.name} (${user.email})`;
                const botaoExcluir = document.createElement("button");
                botaoExcluir.textContent = "Excluir";
                botaoExcluir.onclick = () => excluirItem(index);
                itemLista.appendChild(botaoExcluir);
                listaUsuarios.appendChild(itemLista);
            });
        }

       
        function excluirItem(itemIndex) {
            const armazenamento = JSON.parse(localStorage.getItem("usuarios")) || [];
            armazenamento.splice(itemIndex, 1); 
            localStorage.setItem("usuarios", JSON.stringify(armazenamento));
            atualizar();
        }

  
        function excluirTodos() {
            localStorage.removeItem("usuarios");
            atualizar();
            localStorage.clear();
        }

 
        function pesquisar() {
            const pesquisado = document.getElementById("Pesquisar").value.toLowerCase();
            const armazenamento = JSON.parse(localStorage.getItem("usuarios")) || [];
            const filteredData = armazenamento.filter((user) => {
                return user.name.toLowerCase().includes(pesquisado) || user.email.toLowerCase().includes(pesquisado);
            });
            atualizar(filteredData);
        }


        function atualizar(data = []) {
            const listaUsuarios = document.getElementById("listaUsuarios");
            listaUsuarios.innerHTML = ""; 
            data.forEach((user, index) => {
                const itemLista = document.createElement("li");
                itemLista.textContent = `${user.name} (${user.email})`;
                const botaoExcluir = document.createElement("button");
                botaoExcluir.textContent = "Excluir";
                botaoExcluir.onclick = () => excluirItem(index);
                itemLista.appendChild(botaoExcluir);
                listaUsuarios.appendChild(itemLista);
            });
        }
        atualizar();