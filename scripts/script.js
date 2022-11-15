// DESENHANDO O GRÁFICO ATRAVÉS DA GOOGLE CHARTS, UMA BIBLIOTECA DA API DE VISUALIZAÇÃO DE DADOS DO GOOGLE ESCRITA EM JAVASCRIPT

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
        'height': 900,
        'width': 900,
        //'is3D': true,
    }

    // direciona ao div graficoPizza
    var grafico = new google.visualization.PieChart(document.getElementById('graficoPizza'));

    //desenha o gráfico
    grafico.draw(tabela, options);
}
google.charts.setOnLoadCallback(desenharPizza);


// FUNÇÃO RESPONSÁVEL PELA FERRAMENTA DE PESQUISA
function search() {
    
    let input = document.getElementById('searchBar').value;
    input = input.toLowerCase();
    let
}