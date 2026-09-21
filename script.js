<script>
    const botoes = document.querySelectorAll("button"); //esse código é oque que cria a função do botão//

    botoes.forEach(function (botao) {
        let curtiu = false;
        botao.addEventListener("click", botaoClicando);//esse faz adicionar um evento de click quando o botão criado for clicado//
        function botaoClicando() {
            console.log("fui clicado");
            let texto = botao.querySelector("span");
            if (curtiu === false){
                texto.textContent++;
                curtiu = true;
            } else{
                texto.textContent--;
                curtiu = false;
            }
        }
    })



</script>