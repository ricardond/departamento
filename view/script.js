const btnAcademico = document.getElementById('btn-academico');
const btnEstagios = document.getElementById('btn-estagios');
const conteudo = document.getElementById('conteudo');

btnAcademico.addEventListener('click', () => {
    conteudo.innerHTML = `
        <h2>Departamento Acadêmico</h2>
        <ul>
            <li><a href="https://ifsertaope.edu.br/institucional/a-instituicao/" target="_blank">Estude no IFSertãoPE</a></li>
            <li><a href="https://ifsertaope.edu.br/petrolina/educacional/cursos/" target="_blank">Cursos Campus Petrolina</a></li>
            <li><a href="https://ifsertaope.edu.br/documentos/" target="_blank">Documentos Oficiais IFSertãoPE</a></li>
            <li><a href="https://ifsertaope.edu.br/petrolina/educacional/calendario-e-horario-escolar/" target="_blank">Calendário Escolar</a></li>
            <li><a href="https://ifsertaope.edu.br/petrolina/educacional/calendario-e-horario-escolar/" target="_blank">Horário Escolar</a></li>
        </ul>
    `;
    btnEstagios.style.backgroundColor = "#4CAF50";
    btnAcademico.style.backgroundColor = "#11644d";
});

btnEstagios.addEventListener('click', () => {
    conteudo.innerHTML = `
        <h2>Estágios e Egressos</h2>
        <ul>
        <li>LEGISLAÇÃO/NORMAS/REGULAMENTOS</li>
        <ul>
        <li>Regulamento de Estágio, acesse <a href="https://ifsertaope.edu.br/petrolina/wp-content/uploads/sites/2/2024/01/Regulamento-Estagio.pdf" target="_blank">aqui</a></li>
        <li>Manual do Estagiário, acesse <a href="https://ifsertaope.edu.br/petrolina/wp-content/uploads/sites/2/2024/01/Manual-do-Estagirio.pdf" target="_blank">aqui</a>.</li>
        <li>Lei do estagiário ( Lei nº 11.788, de 25/09/2008), acesse <a href="https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2008/lei/l11788.htm" target="_blank">aqui</a>.</li>
        <li>Documentação IF Sertão-PE, acesse <a href="https://drive.google.com/drive/folders/1Z8DqhqRX3_-7fXjnP3eX2YbclMvlA9Lr" target="_blank">aqui</a>.</li>
        <li>Ficha cadastro de estágio, acesse <a href="https://drive.google.com/drive/folders/17CbJvmM3RMYLh7dQ1rYejH0DWMkz1jUU" target="_blank">aqui</a>.</li>
        </ul>
    </ul>
    `;
    btnEstagios.style.backgroundColor = "#11644d";
    btnAcademico.style.backgroundColor = "#4CAF50";
});