// FUNÇÃO RESPONSÁVEL PELA FERRAMENTA DE PESQUISA
function search() {
    var input = document.querySelector("#pesquisa-input");
    var sgring = input.value;
}

// DESENHANDO O GRÁFICO ATRAVÉS DA GOOGLE CHARTS, UMA BIBLIOTECA DA API DE VISUALIZAÇÃO DE DADOS DA GOOGLE CHARTS ESCRITA EM JAVASCRIPT
google.charts.load('current', {packages: ['corechart']});

// função que desenha o gráfico
function desenharPizza() {
    var tabela = new google.visualization.DataTable();
    // adiciona as colunas 'categorias' e 'valores'
    tabela.addColumn('string', 'categorias');
    tabela.addColumn('number', 'valores');
    // dados
    tabela.addRows([
        ['Biomassa',8.2],
        ['Eólica',10.6],
        ['Solar',2.47],
        ['Carvão e derivados',3.9],
        ['Gás natural',12.8],
        ['Derivados de petróleo',3],
        ['Nuclear',2.2],
        ['Hidráulica',56.8]
    ]);

    // passando valores opcionais, como altura e largura do gráfico
    var options = {
        //'title': 'Oferta Interna de Energia Elétrica por Fonte',
        'legend': 'right',
        'height': 850,
        'width': 850,
        'is3D': true,
        'colors': ['#2B6003', '#4bafd1', '#F5B545', '#8e8c87', '#7f6539', '#494742', '#ea88da', '#22738e']
    }

    // direciona ao div graficoPizza
    var grafico = new google.visualization.PieChart(document.getElementById('graficoPizza'));

    //desenha o gráfico
    grafico.draw(tabela, options);
}
google.charts.setOnLoadCallback(desenharPizza);