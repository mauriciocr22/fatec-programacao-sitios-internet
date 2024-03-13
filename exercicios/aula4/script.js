function listaAlunos(alunos) {
  var tabela = "<table><thead><tr><th>Nome</th><th>RA</><th>P1</th><th>P2</th><th>Media</th></thead><tbody>";
  let somap1 = 0;
  let somap2 = 0;
  let media = 0;
  let aprovados = 0;
  let reprovados = 0


  for (let i = 0; i < alunos.length; i++) {
    p1 = alunos[i].p1 >= 6 ? "<td style='color: blue'>" + alunos[i].p1 + "</td>" : "<td style='color: red'>" + alunos[i].p1 + "</td>";
    p2 = alunos[i].p2 >= 6 ? "<td style='color: blue'>" + alunos[i].p2 + "</td>" : "<td style='color: red'>" + alunos[i].p2 + "</td>";

    somap1 += alunos[i].p1;
    somap2 += alunos[i].p2;

    media = (alunos[i].p1 + alunos[i].p2) / 2 >= 6 ?
      "<td style='color: blue'>" + (alunos[i].p1 + alunos[i].p2) / 2 + "</td>" :
      "<td style='color: red'>" + (alunos[i].p1 + alunos[i].p2) / 2 + "</td>"

    if ((alunos[i].p1 + alunos[i].p2) / 2 >= 6) {
      aprovados++;
    } else {
      reprovados++;
    }

    tabela += "<tr><td>" + alunos[i].nome + "</td>" + "<td>" + alunos[i].ra + "</td>" + p1 + p2 + media + "</tr>";
  }


  tabela += "<tr><td></td><td></td><td>" + somap1 / alunos.length + "</td><td>" + somap2 / alunos.length +
    "</td></tr></tbody><caption>Tabela de notas com " + aprovados + " aprovados e " + reprovados + " reprovados </caption></table>";
  document.write(tabela);
}