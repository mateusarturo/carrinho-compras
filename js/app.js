let totalGeral;
limpar();
// campo adicionar
function adicionar(){
  // recuperar valores nome do produto, quantidade e valor
  let produto = document.getElementById('produto').value;
  let nomeProduto = produto.split('-')[0];
  let valorUnitario = produto.split('R$')[1];
  let quantidade = document.getElementById('quantidade').value;
  // calcular o preço, o nosso subtotal
  let preco = quantidade * valorUnitario;
  // adicionar no carrinho 
  let listaProdutos = document.getElementById('lista-produtos');
  listaProdutos.innerHTML = listaProdutos.innerHTML + `<section class="carrinho__produtos__produto"><span class="texto-azul"> ${quantidade}x</span> ${nomeProduto}<span class="texto-azul"> R$${preco}</span></section>`;
  // atualizar o valor total 
  totalGeral = totalGeral + preco;
  let campoTotal = document.getElementById('valor-total');
  campoTotal.textContent = `R$ ${totalGeral}`;
  quantidade = document.getElementById('quantidade').value = 0;
}
// campo limpar
function limpar(){
  totalGeral = 0;
  // limpando a lista de produtos 
  document.getElementById('lista-produtos').innerHTML = '';
  // limpando o valor total do carrinho
  document.getElementById('valor-total').innerHTML = 'R$ 0';
}
