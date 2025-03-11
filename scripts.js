document.addEventListener("DOMContentLoaded", () => {
    const painel = document.querySelector(".text-painel");
    let expressao = "";

    painel.textContent = "0";

    function addCaracter(text) {
        expressao += text;
        painel.textContent = expressao;
    }

    function limparPainel() {
        expressao = "";
        painel.textContent = "0";
    }

    function calcular() {
        try {
            expressao = eval(expressao).toString();
            painel.textContent = expressao;
        } catch {
            painel.textContent = "Erro";
            expressao = "";
        }
    }

    function apagarUltimo() {
        expressao = expressao.slice(0, -1);
        painel.textContent = expressao || "0";
    }

    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", () => {
            const value = button.textContent;
            if (value === "AC") {
                limparPainel();
            } else if (value === "=") {
                calcular();
            } else if (value === "X") {
                apagarUltimo();
            } else {
                addCaracter(value);
            }
        });
    });
});
