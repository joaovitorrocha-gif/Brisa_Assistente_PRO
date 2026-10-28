(()=>{
const PREV=document.getElementById('BRISA_PRO_BUBBLE'); if(PREV) PREV.remove(); const PREV6=document.getElementById('BRISA_PRO_BUBBLE_V6'); if(PREV6){PREV6.remove();} const PREV9=document.getElementById('BRISA_PRO_BUBBLE_V9'); if(PREV9){PREV9.remove();} const PREV10=document.getElementById('BRISA_PRO_BUBBLE_V10'); if(PREV10){PREV10.remove();} const ID='BRISA_PRO_BUBBLE_V10';
const STORE='brisa_assistente_pro_v10_original_20261028';

// ATUALIZADO COM OS DADOS DO SEU GOOGLE DOCS
const defaults=[
  {
    "name": "Comercial",
    "items": [
      {"title": "Fim do plano de 12 meses", "text": "Foi identificado que o plano que você tinha com a empresa, com prazo de 12 meses, se encerrou. Por isso, você percebeu essa diferença no valor da sua fatura."},
      {"title": "Transferência para setor de planos", "text": "Mas, se desejar, posso te transferir para o setor de planos, para que eles possam verificar um novo plano e negociá-lo com você."},
      {"title": "Netflix Padrão com Anúncios", "text": "Olha, eu verifiquei que o seu plano da Netflix era o 'Netflix Padrão com Anúncios', no valor de R$ 20,90."},
      {"title": "Netflix Premium", "text": "E foi realizada uma alteração no aplicativo ou no site da Netflix para o plano 'Netflix Premium', no valor de R$ 59,90, no dia 19/03/2025 às 17h23."},
      {"title": "Reajuste do serviço", "text": "Olha, o seu serviço passou por um reajuste. Esse reajuste está previsto em contrato sendo aplicado anualmente."},
      {"title": "Verificar novo plano", "text": "Se desejar, posso transferi-lo para o setor responsável, para verificar um novo plano com as melhores ofertas e condições disponíveis."},
      {"title": "Sem registro de alteração", "text": "📋 Olha, não encontrei nenhum registro de alteração de plano recente. Caso você deseje, posso transferi-lo para o setor responsável, para que eles possam verificar uma nova oferta disponível para você."},
      {"title": "Sem informação de alteração", "text": "❗ Infelizmente, não há nenhuma informação no sistema indicando que foi solicitada uma alteração de plano."},
      {"title": "Realizar transferência agora", "text": "Se preferir, posso fazer essa transferência agora mesmo! 😊📞"},
      {"title": "Confirmação de transferência", "text": "📞 Você deseja que eu te transfira para o setor de planos para verificar possíveis ofertas ou ajustes? 😊"}
    ]
  },
  {
    "name": "Reajuste Anual / Sem Fidelidade",
    "items": [
      {"title": "Aviso pelo aplicativo", "text": "Todos os nossos clientes que passaram pelo reajuste, foram informados lá no nosso aplicativo brisacliente, com um mês de antecedência."},
      {"title": "Reajuste anual no contrato", "text": "Olha, no seu caso, o que ocorreu foi um **reajuste anual** no valor do serviço. Esse reajuste está previsto em contrato e é comunicado aos clientes com **30 dias de antecedência**, tanto pelo aplicativo **Brisa Cliente** quanto por **SMS**.\n\nComo a sua fidelização com a empresa já havia sido encerrada, o seu contrato passou a estar sujeito ao reajuste anual, assim como ocorreu com os demais clientes que também não possuíam fidelização ativa."},
      {"title": "Encaminhar ao Comercial", "text": "Se desejar, posso encaminhar o seu atendimento para o setor Comercial, para que eles possam verificar as opções disponíveis para o seu caso e explicar com mais detalhes a questão do reajuste."},
      {"title": "Novo valor da fatura", "text": "Olha, o reajuste está previsto em contrato. Infelizmente, após a aplicação do reajuste, esse passa a ser o novo valor das suas faturas, conforme as condições estabelecidas na contratação."}
    ]
  },
  {
    "name": "Suporte",
    "items": [
      {"title": "Sem acesso à internet?", "text": "Você está sem acesso à internet?"},
      {"title": "Serviço ativo / Problema técnico", "text": "Olha, identifiquei que seu serviço está ativo. Acredito que deva ser um problema técnico."},
      {"title": "Transferir (falta de acesso)", "text": "Mediante essa informação, vou te transferir para o setor responsável, para que eles possam verificar essa falta de acesso."},
      {"title": "Prazo Anatel 24h / Equipe no local", "text": "Olha, o prazo de normalização estabelecido pela Anatel é de até 24 horas, mas acredito que o serviço será restabelecido o mais rápido possível. Já foi identificado que há uma equipe no local realizando o reparo."},
      {"title": "Transferir para setor técnico", "text": "Vou passar para o setor técnico para verificarem a falta de acesso."},
      {"title": "Rompimento de fibra óptica", "text": "Foi identificado que a falta de acesso está relacionada a um rompimento de fibra óptica, o que acabou afetando o fornecimento do serviço. A Anatel estabelece um prazo de até 24 horas para a normalização, mas acreditamos que o acesso será restabelecido o quanto antes, pois uma equipe técnica já está no local realizando os reparos."},
      {"title": "Suporte do chip", "text": "Se você desejar, posso transferi-lo para o setor de suporte do chip, para que verifiquem a questão da falta de acesso. Eles farão a análise e irão tratar da regularização do sinal com você. 📲✅"}
    ]
  },
  {
    "name": "Financeiro",
    "items": [
      {"title": "Consumo excedente do fixo", "text": "O valor da fatura veio acima do normal devido ao consumo excedente do telefone fixo. Como você utilizou além da franquia prevista no seu plano, foi cobrado um valor adicional."},
      {"title": "Primeiro mês proporcional", "text": "Olha, o seu plano é de R$ 89,99, mas, neste primeiro mês, foram cobrados os dias proporcionais de uso do sistema. Seu serviço foi ativado no dia 09/06, com vencimento em 10/07, totalizando 31 dias de serviço fornecido pela empresa. Por isso, houve uma cobrança maior nesta primeira fatura."},
      {"title": "Próximo mês valor normal", "text": "Isso mesmo. No próximo mês, a fatura virá com o valor do plano contratado."},
      {"title": "Apenas uma fatura em atraso", "text": "Verifiquei que há apenas uma fatura em atraso no momento. A outra fatura já está disponível para pagamento, porém, o vencimento dela será apenas no dia 30/04."},
      {"title": "Pagamento já compensado", "text": "Verifiquei que o pagamento realmente já foi compensado em nosso sistema."},
      {"title": "Multas e juros (Geral)", "text": "📌 Olha, o valor da sua fatura do mês passado veio mais alto devido à cobrança de multas e juros gerados pelos atrasos no pagamento. 💸⏳"},
      {"title": "Multas e juros (Exemplo data)", "text": "O valor da sua fatura veio com acréscimo devido à aplicação de multas e juros por atraso no pagamento da fatura com vencimento em 10/05/2025, cujo pagamento foi compensado pela empresa no dia 13/05/2025 às 19h46."},
      {"title": "Valor do chip", "text": "O valor do chip é de R$29,99, porém a empresa concede um desconto de R$9,99, tornando o valor final do chip R$20,00."},
      {"title": "Cobrança por mudança de vencimento", "text": "O valor que está sendo cobrado é referente à mudança da data de vencimento."},
      {"title": "Dias adicionais de uso (Vencimento)", "text": "O valor da sua fatura veio um pouco mais alto devido à alteração do vencimento que foi realizada por você. 💬\n\nAntes, o vencimento era no dia 25, e foi alterado para o dia 30, o que gerou um acréscimo referente aos dias adicionais de uso do serviço. 📅✅"},
      {"title": "Troca de faturas", "text": "Nesse caso, o pagamento foi compensado no sistema, porém, a fatura que você pagou corresponde à do mês de novembro, e a de outubro acabou ficando em aberto, certo? 💬\n\nMas não se preocupe 😊 — nesse caso, basta trocar as faturas: você paga a de outubro no dia 30, no lugar da fatura de novembro, e assim tudo ficará regularizado. ✅📅"}
    ]
  },
  {
    "name": "Negociação de Débitos",
    "items": [
      {"title": "Quitar pendência para contratar", "text": "Para contratar o serviço de internet, você precisa quitar a pendência que tem em aberto com a empresa."},
      {"title": "Opções de parcelamento", "text": "Podemos facilitar a regularização do seu débito com duas opções de parcelamento:\n\n💳 Cartão de crédito: parcelamento em até 3x.\n\n🧾 Boleto: parcelamento em até 2x, conforme as faturas que serão geradas para cada parcela.\n\nAssim, você pode escolher a opção que ficar mais confortável para realizar a regularização do débito. 😊\n\nObservação: como se tratam de faturas referentes a consumo de serviço, a empresa não aplica descontos nesse tipo de cobrança.\n\n👉 Qual seria a primeira data de pagamento?"},
      {"title": "Pagamento agendado", "text": "O pagamento já está agendado em nosso sistema. Só reforçando: você precisa entrar em contato um dia antes para solicitar a sua fatura e realizar o pagamento."},
      {"title": "Retirada da negativação", "text": "Após realizar o pagamento do valor pendente, a empresa solicita a retirada da negativação, e em até 5 dias úteis o seu nome é regularizado junto aos órgãos de proteção ao crédito."},
      {"title": "Parcelamento de débitos antigos", "text": "Não, infelizmente não é possível. Para contratar o serviço, é necessário quitar primeiro a pendência anterior, pois a empresa não trabalha com o parcelamento de débitos antigos nas faturas de um novo serviço."}
    ]
  },
  {
    "name": "Boleto",
    "items": [
      {"title": "Realizou pagamento hoje?", "text": "Você realizou o pagamento hoje?"},
      {"title": "Solicitar comprovante (Formal)", "text": "📄 Olha, preciso que você me envie o comprovante de pagamento, por gentileza. 🙏"},
      {"title": "Solicitar comprovante (Simples)", "text": "Você pode me enviar o comprovante de pagamento, por favor?"},
      {"title": "Prazo de compensação 24h", "text": "Como o pagamento foi realizado via código de barras, há um prazo de compensação de até 24 horas."},
      {"title": "Solicitar boleto um dia antes", "text": "Recomendamos que entre