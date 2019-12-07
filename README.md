# vida

https://prezi.com/view/KxO3hcrXEJgBY7WQJK0C/

Primeiro, foi criado o projeto no github, em seguida, foram feitas as criações dos prototipos no projeto. 
Ou seja, foi criado uma page .html que seria o menu, com os componetes "Fazer login, Cadastro de Usuário e Cadastro de Hospital", que seriam direcionados para outra aba. 
Já na page .css, foi definido os espaçamentos, as margens, as larguras e etc..
O projeto seria composto por 9 page, a cadastro-hospital, cadastro-usuario, detalhes-doadores, o home, lista-doador, login, recuperar senha, visualizar-por-hospital e visualizar-por-sangue. O Projeto em si, foi construido no angular e no ionic.

O Cadastro-hospital seria composto pelos os intens, Nome, Endereço, Telefone, Cnpj, E-mail, Senha e o Tipo de Sangue que está sendo necessitado através das caixinhas de marcações. Nele, foi importado o angular e ionic, com largura de 300px, e altura de 50px. 
Essa page foi exportada pela classe Hospital, com os métodos String e com o construtor vazio e falso.

O Cadastro-Usuário seria composto pelos os intens, Nome Completo, CPF, Data de nascimento, Peso, Endereço, Telefone, Tipo Sanguineo, que seria escolhido uma das 8 opções, o E-mail e a Senha. Foi importado o angular, o ionic-native/sqlite, e que o construtor sqlite seria privado. Todas as classes seriam do tipo String, menos a data de nascimento, que seria do tipo "Data", e o paramêtro dela seria nulo, e os demais vazios. A largura seria exatamente do mesmo tamanho das outras, por causa do padrão, ou seja, seria 300px e 50px de altura.

O detalhes-doadores seria seria composto pelas informações dos doadores detalhadas. Porém, ela não foi implementada no projeto. Iria ser listado o Nome, o Endereço completo e entre outras informações. 

O Home, foi composto por 8 campos de sangue, A-, B-, AB-, O-, A+, B+, AB+, O+, com a cor preta. E com outra opção de Hospitais. No canto esquerdo teria um botão que abriria outra aba com as informações, Alterar Dados e Sair. Foi importado o angular. A altura máxima dele seria de 35vh, a normal de 50px e a largura de 100px. 

A Lista-Doador seria composto por varias pessoas que doou sangue. Ou seja, se eu apertasse no sangue A+, aparecia todos os doadores que doou esse sangue, e assim por diante. Nele, foi importado o ionic e o angular que foi exportada da classe ListaDoadorPageModule.

O Login seria composto pelos campos, E-mail, senha e o botão acessar. E teria outra opção de Esqueceu a senha? Caso a pessoa tivesse esquecido a senha. O campo seria do tipo String, e o construtor daquele e-mail e senha estariam vazios. Foi importado o angular. A largura do tamanho 50px e a altura de 300px.

O Recuperar-Senha teria o campo de colocar o e-mail para ser enviado uma mensagem pro mesmo. E um único botão de enviar. Assim que enviado, receberia uma mensagem, "E-mail enviado com sucesso!". Essa  classe está sendo exportada da classe RecSenha, com o comando String e o construtor vazio. A largura com 300px e a altura de 50px.

O Visualizar-Hospital seria no campo menu, quando apertasse ele abriria todos os hospitais que estão precisando de sangue. Sendo mais proxímos, mais longes, não importa. Foi importado o angular na page.

O Visualizar-por-sangue, fica no menu. são 8 tipos de sangue, quando selecionado vai mostrar os hospitais que estão precisando daquele sangue. Foi importado o angular e o ionic. Os botões com a cor preta. 
