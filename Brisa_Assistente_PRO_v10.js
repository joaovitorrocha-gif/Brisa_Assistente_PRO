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
      {"title": "Solicitar boleto um dia antes", "text": "Recomendamos que entre em contato um dia antes e solicite o boleto, pois a empresa só consegue gerar um boleto com validade de até 3 dias."},
      {"title": "Canais para solicitar boleto", "text": "Você pode entrar em contato pelo número 10517 ou pelo WhatsApp da empresa para solicitar o seu boleto."},
      {"title": "Fatura no e-mail e SMS", "text": "👉 A fatura já foi enviada para o seu e-mail. O prazo para recebimento é de até 10 minutos. 📧⏳\n\n🔐 Caso seja solicitada uma senha para abrir o arquivo, utilize os 4 primeiros dígitos do seu CPF.\n\n📲 O código de barras também já foi enviado por SMS. ✅"},
      {"title": "Envio apenas por e-mail", "text": "Não consigo fazer o envio pelo WhatsApp, só tenho acesso a fazer o envio pelo e-mail."}
    ]
  },
  {
    "name": "Duplicidade",
    "items": [
      {"title": "Crédito ou estorno", "text": "Olha, isso pode ser resolvido de duas formas: o valor que você pagou pode ser lançado como crédito, parcelado em duas vezes, ou pode ser feito o estorno."},
      {"title": "Informar conta para estorno", "text": "Para podermos realizar o estorno, solicitamos que nos informe os dados de uma conta-corrente ou conta digital."},
      {"title": "Dados bancários (Agência/Conta/Banco)", "text": "Solicito, por gentileza, que informe os seguintes dados bancários para prosseguirmos com o estorno: agência, número da conta e nome do banco."},
      {"title": "Processo de verificação", "text": "Verifiquei que o pagamento realizado em duplicidade já está em processo de verificação. Peço, por gentileza, que aguarde, pois o estorno será efetuado quanto antes."},
      {"title": "Sem prazo específico", "text": "Informo que não há um prazo específico definido para a conclusão, mas peço, por gentileza, que aguarde, pois estamos acompanhando o processo e ele será finalizado o mais breve possível."},
      {"title": "Formulário de dados bancários", "text": "Para podermos realizar o estorno do valor, por gentileza, me confirme os dados da sua conta bancária (conta-corrente ou conta digital):\n\nNome do banco:\nAgência:\nNúmero da conta (com dígito):\nTipo de conta (corrente ou digital):\nNome completo do titular da conta:\n\nLembrando que os dados devem estar em nome do titular do contrato, conforme política da empresa."},
      {"title": "Registrado (até 10 dias úteis)", "text": "📝 Perfeito! Já foi registrado no sistema. Assim que a duplicidade for identificada, o prazo máximo para compensação é de até 10 dias úteis. ⏳"},
      {"title": "Desconto em faturas ou estorno", "text": "📌 Olha, como o pagamento foi realizado em duplicidade, podemos seguir de duas formas: o valor total pode ser lançado como desconto parcelado nas faturas dos meses de junho e julho, ou, se preferir, podemos solicitar o estorno. 💰"},
      {"title": "Verificaremos a duplicidade", "text": "Olha, no caso, será verificada a questão da duplicidade, e se realmente for confirmada, podemos proceder da seguinte forma, tudo bem? 😊✔️"},
      {"title": "Baixa e crédito futuro", "text": "Nós podemos dar baixa na fatura do mês de novembro, que ainda consta aberta em nosso sistema, e o valor restante poderá ser lançado como crédito na sua próxima fatura, referente ao mês de dezembro. 💳✨\n\nAssim, você não terá nenhum prejuízo e o valor fica totalmente ajustado no seu histórico de pagamentos. Caso deseje, posso dar continuidade ao procedimento para você! 😊📲"}
    ]
  },
  {
    "name": "36 Horas",
    "items": [
      {"title": "Desbloqueio de confiança", "text": "Como o pagamento foi realizado via código de barras, há um prazo de compensação de até 24 horas. No entanto, realizei o desbloqueio de confiança enquanto o pagamento é compensado no sistema."},
      {"title": "Liberação - Reiniciar roteador", "text": "Acabei de realizar a liberação do seu acesso. ✅\n\nPeço, por gentileza, que retire o roteador da tomada, aguarde alguns instantes e conecte-o novamente. O acesso deverá ser normalizado em até 5 minutos."},
      {"title": "Prazo Anatel", "text": "Conforme orientação da Anatel, o prazo regulamentar pode ser de até 24 horas, mas acredito que, em poucos minutos, o serviço já estará restabelecido."},
      {"title": "Fatura do mês seguinte pendente", "text": "O pagamento foi compensado no mês de fevereiro, portanto, será necessário realizar o pagamento da fatura de março para o seu serviço ser reativado."},
      {"title": "Retirar roteador da tomada", "text": "Olha, eu acabei de fazer a liberação do acesso. Agora, você pode retirar o roteador da tomada e conectá-lo novamente. O seu acesso deverá ser normalizado dentro do prazo que informei."},
      {"title": "Desbloqueio pelo Brisa Cliente", "text": "O desbloqueio temporário pode ser solicitado pelo aplicativo Brisa Cliente, pois não é mais possível solicitá-lo por meio dos atendentes. Agora, você pode realizá-lo diretamente no aplicativo Brisa Cliente."},
      {"title": "Suspensão por atraso", "text": "Olha, seu serviço acabou passando pela suspensão mediante o atraso de pagamento da sua fatura."},
      {"title": "Desbloqueio App ou 10517", "text": "Infelizmente, não é possível realizar o desbloqueio, pois o desbloqueio é pelo aplicativo Brisa Cliente. Se você desejar, você pode entrar em contato com o número 10517, que você consegue também realizar a solicitação no atendimento da atendente virtual."},
      {"title": "Válido por 36 horas", "text": "Olha, o desbloqueio é válido por 36 horas, tá bom? 💬⏱️\n\nApós esse período, caso o pagamento ainda não tenha sido compensado, o acesso pode ser bloqueado novamente. ✅📶"},
      {"title": "Pagamento agendado sem garantia", "text": "Neste caso, vou registrar a informação em nosso sistema e deixar o seu pagamento agendado para o dia 16. Porém, preciso esclarecer que não consigo garantir que o seu serviço não será suspenso, pois esse processo é automático e realizado diretamente pelo sistema — não é algo que conseguimos evitar manualmente."}
    ]
  },
  {
    "name": "Desconto Sem Acesso",
    "items": [
      {"title": "Desconto lançado (ex: 5 dias)", "text": "Perfeito! ✅\n\nO desconto foi lançado para sua próxima fatura.\n\nO valor do desconto é de R$13,33, referente a 5 dias sem acesso ao serviço."},
      {"title": "Aplicado na próxima fatura", "text": "O desconto só pode ser aplicado na fatura do mês seguinte, pois o sistema só permite lançar ajustes e compensações em faturas que ainda não foram geradas ou que ainda estão em aberto, garantindo o correto controle financeiro e evitando divergências. 😊"},
      {"title": "Apenas após normalização", "text": "Eu não consigo lançar o desconto referente à falta de acesso, pois ele só pode ser aplicado assim que o acesso for normalizado"}
    ]
  },
  {
    "name": "Fechamento Temporário",
    "items": [
      {"title": "Confirmação de fechamento", "text": "Você deseja realizar o fechamento temporário? 📝"},
      {"title": "Prazo de até 4 meses", "text": "Olha, o fechamento temporário pode ser realizado por um prazo de até 4 meses.\n\nQual é o prazo de fechamento que você deseja?"},
      {"title": "Quitar atraso primeiro", "text": "O fechamento temporário só pode ser realizado após o pagamento da fatura em atraso. Sem a quitação dessa fatura, não será possível efetuar o fechamento."}
    ]
  },
  {
    "name": "Pagamento Não Compensado",
    "items": [
      {"title": "Verificar com banco", "text": "🔎 Por gentileza, verifique com sua instituição financeira, pois até o momento o pagamento ainda não foi compensado em nosso sistema."},
      {"title": "Desconsiderar cobrança (venc 30/05)", "text": "📑 Fique tranquilo, sua fatura vence apenas no dia 30/05. Caso tenha recebido alguma cobrança antes desse prazo, por gentileza, desconsidere essa informação."},
      {"title": "Falta de acesso por atraso", "text": "📌 Olha, identifiquei que a sua falta de acesso está atrelada ao atraso no pagamento da fatura do mês de abril.\n\nPor isso, o serviço acabou passando por suspensão. Assim que o pagamento for confirmado, o acesso será normalizado. 😊💳"}
    ]
  },
  {
    "name": "Retenção / Cancelamento",
    "items": [
      {"title": "Deseja cancelar?", "text": "Você deseja cancelar o serviço?"},
      {"title": "Serviço não cancelado (Transferir)", "text": "Olha, verifiquei que o seu serviço não foi cancelado. Se desejar, posso transferi-lo para o setor responsável para que façam a verificação."},
      {"title": "Cancelamento adicionais", "text": "Para verificar o cancelamento dos serviços adicionais, será necessário entrar em contato com o setor responsável."},
      {"title": "Transferir cancelamento", "text": "Mediante a sua solicitação de cancelamento, vou transferi-lo(a) para o setor responsável."},
      {"title": "Transferir cancelamento adicionais", "text": "Para verificar o cancelamento dos serviços adicionais, vou transferi-lo(a) para o setor responsável."},
      {"title": "Cancelamento (Apenas horário comercial)", "text": "Para verificar o cancelamento dos serviços adicionais, será necessário entrar em contato com o setor responsável. Informo que esse setor funciona apenas em horário comercial, de segunda a sábado. Portanto, será preciso entrar em contato novamente amanhã para dar continuidade ao cancelamento."},
      {"title": "Cancelar Paramount e Brisamusic", "text": "📢 Olá! Se desejar, posso te transferir para o setor responsável, para que possam realizar o cancelamento do serviço Paramount no valor de R$ 9,90 e do Brisamusic no valor de R$ 4,90."},
      {"title": "Análise da fatura no cancelamento", "text": "📢 Como você deseja prosseguir com o cancelamento, o setor responsável irá analisar também a situação da sua fatura para fornecer todos os esclarecimentos necessários."},
      {"title": "Remover Paramount", "text": "A mediante a sua solicitação que você deseje remover o paramount do seu pacote, eu vou te transferir para o setor responsável para que eles possam verificar essa questão, tá bom?"},
      {"title": "Cancelamento e valores (Transferir)", "text": "Olha, essas questões relacionadas a cancelamento e valores são tratadas diretamente pelo setor responsável. Nesse caso, vou te transferir para o setor competente para que possam verificar junto com você, tudo bem? Peço, por gentileza, que aguarde na linha enquanto realizo a transferência."},
      {"title": "Cancelar BrisaMusic", "text": "Se você desejar, eu posso te transferir para o setor responsável pelo cancelamento para que eles possam verificar o cancelamento do BrisaMusic."}
    ]
  },
  {
    "name": "Não é o Titular",
    "items": [
      {"title": "Atendimento barrado", "text": "🚫 Infelizmente, como você não é o titular do serviço, não posso seguir com o atendimento.\n\nEssa medida é necessária por questão de segurança e em conformidade com as normas da empresa. Agradeço a compreensão! 😊🔒"},
      {"title": "Deve ser titular", "text": "O atendimento deve ser realizado com o titular do serviço."},
      {"title": "Não quer confirmar (Ligar 10517)", "text": "✅ Perfeito! Como você não deseja confirmar os dados neste momento, você pode entrar em contato diretamente com a empresa através do número 10517 📞.\n\nEstamos à disposição para ajudar quando precisar! 😊"},
      {"title": "Endereço divergente", "text": "📢 Verifiquei que o endereço informado está divergente do que consta em nosso cadastro. Vou seguir com o atendimento mais solícito que por gentileza, envie um comprovante de residência atualizado para o e-mail: dados@grupobrisanet.com.br assim que possível."},
      {"title": "Confirmação de dados LGPD", "text": "Olha, nesse caso, infelizmente, precisamos da confirmação dos dados para dar continuidade ao atendimento. Sem essa confirmação, não conseguimos prosseguir. Essa é uma norma da empresa e também está em conformidade com a Lei Geral de Proteção de Dados (LGPD)."}
    ]
  },
  {
    "name": "Adicional",
    "items": [
      {"title": "Desculpas pela demora", "text": "🙏 Peço desculpas pela demora no retorno. Foi realizada uma verificação detalhada de todas as suas faturas anteriores para garantir a precisão das informações repassadas. 😊"},
      {"title": "Atendimento posterior", "text": "📞 Olha, como você não consegue realizar o atendimento neste momento, você pode entrar em contato com a empresa posteriormente.\n\nEste atendimento está sendo encerrado por agora, tudo bem? 😊\n\nEstaremos à disposição quando precisar!"},
      {"title": "Transferência para responsável", "text": "📲 Mediante a essa solicitação, vou te transferir para o setor responsável, para que eles possam dar continuidade ao atendimento e verificar sua demanda corretamente. 😊"},
      {"title": "Solicitar esclarecimento", "text": "📝 Não consegui compreender exatamente a sua solicitação. Poderia, por gentileza, ser mais específico para que eu possa lhe ajudar da melhor forma possível? 😊"},
      {"title": "Ouvidoria 0800", "text": "O número da ouvidoria da empresa é 0800-281-4000. Caso você deseje registrar sua reclamação, você pode entrar em contato com esse número."},
      {"title": "Mensagens digitadas (Não áudio)", "text": "Para melhor controle e registro do atendimento, pedimos que as mensagens sejam enviadas por escrito (digitadas), e não por áudio. Assim conseguimos acompanhar e responder com mais agilidade. Agradecemos a compreensão!"},
      {"title": "Rompimento / Facções na região", "text": "Ao verificar em nosso sistema, identifiquei que a falta de acesso está ocorrendo devido a um rompimento de fibra na sua localidade. Infelizmente, no momento, a equipe técnica não está conseguindo realizar o reparo, pois a região apresenta risco para os colaboradores, devido à atuação de facções no local. 😔⚠️\n\nPara que você não fique prejudicado(a), podemos seguir de duas formas:\n\n1️⃣ Solicitar o fechamento temporário do serviço, para que você não seja cobrado(a) enquanto o acesso não puder ser restabelecido.\n\n2️⃣ Solicitar o cancelamento, caso você prefira encerrar o contrato devido à indisponibilidade na sua região."}
    ]
  },
  {
    "name": "Desconto 20%",
    "items": [
      {"title": "Oferta 20% - 24 horas", "text": "📢 Olá! Identifiquei que a empresa está com uma oferta especial para você! 💥\n\nCaso consiga realizar o pagamento da fatura que está em atraso e da próxima que ainda vai vencer, no prazo de até 24 horas, você garante um desconto de 20% na sua próxima fatura. 💸✨"},
      {"title": "Valor com desconto", "text": "💰 Com esse desconto de 20%, a sua fatura viria no valor de R$ 68,59."},
      {"title": "Deseja aproveitar a oferta?", "text": "📢 Você deseja aproveitar essa oferta especial com 20% de desconto na próxima fatura? 💰\n\n⏳ Lembrando que, para receber o desconto, o pagamento precisa ser compensado em nosso sistema em até 24 horas. ✅"},
      {"title": "Já pagou uma fatura", "text": "📢 Como você já realizou um dos pagamentos, caso consiga efetuar o outro e o pagamento compense em até 24 horas no sistema, a empresa lançará o desconto de forma automática na sua próxima fatura."},
      {"title": "Oportunidade de regularização", "text": "Tenho uma excelente oportunidade para você aproveitar agora.\n\nA empresa está liberando um desconto especial de 20% na sua próxima fatura como benefício pela regularização das pendências.\n\nPara garantir esse desconto, basta realizar o pagamento das duas faturas em atraso no prazo de até 24 horas. É importante que os valores sejam compensados em nosso sistema dentro desse período.\n\nAssim que a compensação for confirmada, o desconto será aplicado automaticamente na fatura seguinte.\n\nÉ uma ótima chance de colocar tudo em dia e ainda pagar menos no próximo mês. Se desejar, posso registrar a oferta neste momento e acompanhar todo o processo para você."}
    ]
  },
  {
    "name": "Mudança de Endereço",
    "items": [
      {"title": "Mudança não concluída", "text": "📌 Olha, identifiquei que a mudança de endereço não foi concluída. Se desejar, posso te transferir para o setor responsável para que eles possam verificar essa situação. 🏠📞"},
      {"title": "Desconto após mudança", "text": "📌 Assim que a mudança de endereço for concluída, você pode solicitar o desconto referente aos dias em que ficou sem acesso. 💡✅"},
      {"title": "Sem disponibilidade no novo local", "text": "Verifiquei em nosso sistema que o seu novo endereço não possui disponibilidade dos nossos serviços. Nesse caso, infelizmente, não será possível abrir o processo de mudança de endereço, pois é necessário que a nova localidade esteja ativa."},
      {"title": "Reativar antes de mudar", "text": "Para alterar o endereço, é necessário reativar o seu serviço, pois foi solicitado o fechamento anteriormente."},
      {"title": "Transferir para mudança", "text": "Mediante à sua solicitação de mudança de endereço, vou transferi-lo para o setor responsável."}
    ]
  },
  {
    "name": "Chip 5G",
    "items": [
      {"title": "Visita técnica gratuita", "text": "Antes de finalizarmos, quero te oferecer uma condição especial que está sendo liberada para poucos clientes 😊💙\n\nA Brisanet está disponibilizando uma visita técnica exclusiva, gratuita e sem compromisso, diretamente na sua residência 📶✨\n\nNessa visita, o técnico vai te mostrar, na prática, todas as vantagens do nosso chip e como você pode melhorar sua conexão no dia a dia, com mais economia e qualidade. O agendamento é feito no dia e horário que for melhor para você.\n\nE pode ficar tranquilo: não há nenhuma obrigação de contratação. É realmente uma oportunidade para você conhecer com mais detalhes. Caso faça sentido, a adesão pode ser realizada na hora, de forma simples e rápida."}
    ]
  },
  {
    "name": "Planos",
    "items": [
      {"title": "Alteração Combo indisponível", "text": "No momento, a alteração de plano para clientes Combo não está disponível devido a uma limitação sistêmica. No entanto, a empresa já está trabalhando para que esse processo seja disponibilizado em breve. Pedimos desculpas pelo transtorno e agradecemos pela compreensão."},
      {"title": "Pagar atraso para mudar de plano", "text": "Olha, para que a mudança de plano seja realizada, é necessário pagar a fatura que está com mais tempo de atraso, tá bom? 😊💳"}
    ]
  },
  {
    "name": "Filas",
    "items": [
      {"title": "COMERCIAL DIGITAL", "text": "COMERCIAL DIGITAL"},
      {"title": "SAC DIGITAL", "text": "SAC DIGITAL"},
      {"title": "COBRANCA CORPORATIVA DIGITAL", "text": "COBRANCA CORPORATIVA DIGITAL"},
      {"title": "COBRANCA RECEPTIVO DIGITAL", "text": "COBRANCA RECEPTIVO DIGITAL"},
      {"title": "SUPORTE VAREJO DIGITAL", "text": "SUPORTE VAREJO DIGITAL"},
      {"title": "RETENCAO DIGITAL", "text": "RETENCAO DIGITAL"},
      {"title": "COBRANCA 5G DIGITAL", "text": "COBRANCA 5G DIGITAL"},
      {"title": "SUPORTE TÉCNICO 5G", "text": "SUPORTE TÉCNICO 5G"}
    ]
  },
  {
    "name": "Mudança de Vencimento",
    "items": [
      {"title": "Opções de dias", "text": "Qual seria a data de vencimento que você deseja? A empresa possui as seguintes opções disponíveis: dias 5, 10, 15, 20, 25 e 30."},
      {"title": "Aviso de acréscimo", "text": "Lembrando que haverá um acréscimo devido à utilização adicional do serviço. No caso da alteração do vencimento do dia 5 para o dia 15, o acréscimo será de R$ 43,40."},
      {"title": "Posso realizar a alteração", "text": "Posso realizar a alteração da data de vencimento."},
      {"title": "Vencimento para o dia 15", "text": "Olha, a alteração do vencimento ficará para o dia 15 de cada mês. Quanto ao valor do acréscimo, ele será cobrado apenas uma vez, e essa cobrança ocorrerá na próxima fatura."}
    ]
  },
  {
    "name": "Callback",
    "items": [
      {"title": "Referência a débito", "text": "Estou entrando em contato para tratar a referência a um débito que você tem aberto com a empresa e gostaria de saber se você está disponível no momento."},
      {"title": "Débito outubro R$ 79,99", "text": "Verifiquei que você possui um débito em aberto no valor de R$ 79,99, referente ao mês de outubro."}
    ]
  },
  {
    "name": "Nota Fiscal",
    "items": [
      {"title": "Apenas demonstrativo, não cobrança", "text": "Olha, não se preocupe 😊\n O que você recebeu é apenas a nota fiscal, não se trata de uma cobrança.\n\n📌 Atualmente, a Anatel exige que as empresas enviem a nota fiscal mensalmente aos clientes.\n\nPor isso, você continuará recebendo essas notas todos os meses, normalmente. Mas fique tranquilo: não é um pagamento e você não precisa realizar nenhuma ação. É apenas um demonstrativo do serviço. 📄✔️"},
      {"title": "1️⃣ Sem vazamento de dados", "text": "Fique tranquilo(a), não houve qualquer vazamento de dados.\n\nA mudança no formato da nota fiscal foi exigida pela Secretaria da Fazenda, que tornou obrigatório o modelo NFCom para as operadoras de telecomunicações.\n\nSeus dados permanecem protegidos e usados apenas para fins fiscais, conforme a lei."},
      {"title": "2️⃣ Divergência boleto x nota", "text": "A nota fiscal nesse primeiro momento irá mostrar apenas o valor do serviço de internet ou telefonia.\n\nJá o boleto pode incluir descontos, serviços adicionais, taxas ou ajustes proporcionais do seu contrato.\n\nPor isso os valores podem ser diferentes, mas o valor cobrado está correto."},
      {"title": "3️⃣ Veio de outra empresa", "text": "A emissão agora é feita diretamente pelo sistema oficial da Secretaria da Fazenda, que é o órgão responsável pela NFCom.\n\nA cobrança continua sendo da Brisanet, apenas o modelo e o emissor da nota mudaram por determinação fiscal."},
      {"title": "4️⃣ Comunicado oficial", "text": "Essa mudança não foi uma decisão da Brisanet, e sim uma obrigação legal aplicada ao setor de telecomunicações.\n\nPor isso, não houve comunicado próprio, estamos apenas cumprindo a legislação vigente."},
      {"title": "5️⃣ Como validar a NFCom", "text": "Você pode validar sua NFCom usando a chave de acesso que aparece na própria nota.\n\nCom ela, basta acessar o portal oficial da Secretaria da Fazenda do seu estado e consultar a emissão."}
    ]
  },
  {
    "name": "Finalização",
    "items": [
      {"title": "Abordagem para débito pendente", "text": "Estou entrando em contato referente a um débito pendente em seu cadastro. Gostaria de te apresentar algumas condições especiais que consegui liberar aqui para quitarmos esse valor e deixar seu histórico atualizado. Vamos resolver?"},
      {"title": "Chip 5G grátis (final)", "text": "Prontinho! Ah, antes de ir: você sabia que tem direito a um chip 5G grátis da Brisanet?"},
      {"title": "Aviso 5 minutos sem resposta", "text": "Olá! 😊 Caso você fique mais de 5 minutos sem responder, o atendimento será encerrado automaticamente."}
    ]
  }
];

let saved={};try{saved=JSON.parse(localStorage.getItem(STORE)||'{}')}catch(e){}
let groups=(Array.isArray(saved.groups)?saved.groups:defaults.map(g=>({name:g.name,items:g.items.map(i=>({...i}))}))).filter(g=>g.name!=='Apresentação');

const css=`#${ID}{position:fixed!important;left:auto;top:auto;right:24px;bottom:24px;z-index:2147483647!important;font:15px/1.5 Inter,Arial,sans-serif;color:#ff3b3b!important;pointer-events:none}#${ID} *{box-sizing:border-box}#${ID} .bubble,#${ID} .panel{pointer-events:auto}#${ID} .bubble{position:relative;z-index:2147483647;width:58px;height:58px;border:2px solid #ff3030;border-radius:50%;background:#050505;color:#ff4545;font-size:23px;font-weight:900;box-shadow:0 0 0 3px #ff303044,0 8px 28px #000c;cursor:grab;touch-action:none;user-select:none}#${ID} .bubble:active{cursor:grabbing}#${ID} .bubble:hover{background:#1b0505;box-shadow:0 0 0 4px #ff303055,0 8px 28px #000c}#${ID} .panel{display:none;position:absolute;right:0;bottom:70px;width:min(620px,calc(100vw - 24px));max-height:min(88vh,900px);background:#050505;color:#ff4545;border:1.5px solid #ff3030;border-radius:14px;overflow:hidden;box-shadow:0 0 0 1px #ff303033,0 20px 60px #000}#${ID} .top{display:flex;align-items:center;gap:10px;padding:13px 14px;background:#0c0c0c;color:#ff4545;border-bottom:1.5px solid #ff3030;cursor:default;user-select:none}#${ID} .brand{font-size:13px;font-weight:900;letter-spacing:1px;color:#ff4545}#${ID} .sub{font-size:11px;color:#d86b6b;margin-top:3px}#${ID} .close{margin-left:auto;border:1px solid #ff3030;background:#080808;color:#ff4545;border-radius:8px;padding:7px 11px;font-weight:900;cursor:pointer;min-width:38px;min-height:36px}#${ID} .content{padding:12px;overflow:auto;max-height:calc(min(88vh,900px) - 62px);background:#050505;color:#ff4545}#${ID} .section{border:1px solid #ff3030;border-radius:10px;margin-bottom:11px;overflow:hidden;background:#080808}#${ID} .secthead{width:100%;border:0;background:#0d0d0d;color:#ff4545;text-align:left;padding:13px;font-weight:900;font-size:14px;letter-spacing:.45px;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:8px;min-height:48px}#${ID} .secthead:hover{background:#190707}#${ID} .sectbody{display:none;padding:11px;background:#050505;color:#ff4545;border-top:1px solid #ff3030}#${ID} .sectbody.open{display:block}#${ID} input,#${ID} select,#${ID} textarea{width:100%;background:#090909!important;color:#ff7070!important;border:1px solid #ff3030!important;border-radius:7px;padding:10px;margin:5px 0 9px;font:inherit;outline-color:#ff4545}#${ID} input::placeholder,#${ID} textarea::placeholder{color:#b85b5b!important;opacity:1}#${ID} select option{background:#090909;color:#ff7070}#${ID} textarea{min-height:90px;resize:vertical}#${ID} .small{font-size:13px;color:#e0a0a0;margin:5px 0 10px}#${ID} .btn{border:1px solid #ff3030;background:#080808;color:#ff6262;border-radius:7px;padding:11px 12px;font-weight:800;cursor:pointer;min-height:42px;font-size:13px;transition:background .12s,color .12s;white-space:normal}#${ID} .btn:hover{background:#270707;color:#fff;border-color:#ff8585}#${ID} .primary{background:#100707!important;border:1.5px solid #ff3030!important;color:#ff5b5b!important;font-weight:900}#${ID} .primary:hover{background:#320808!important;color:#fff!important}#${ID} .danger{background:#120707;color:#ff8585}#${ID} .reply{padding:14px;border:1px solid #ff3030;border-radius:10px;margin:10px 0;background:#0a0a0a;color:#ff7777}#${ID} .replytitle{font-weight:900;color:#ff5555;margin-bottom:5px;font-size:14px}#${ID} .replyactions{display:flex;gap:7px;margin-top:9px;flex-wrap:wrap}#${ID} .row{display:flex;gap:7px;margin-top:7px}#${ID} .row>*{flex:1;min-width:0}#${ID} .toast{position:absolute;right:0;bottom:130px;background:#050505;color:#ff4545;border:1px solid #ff3030;padding:9px 12px;border-radius:8px;display:none;box-shadow:0 4px 16px #0008;font-weight:900;pointer-events:none}#${ID} .muted{color:#d97777;font-size:13px}#${ID} .editbox{display:none;border-top:1px solid #702222;padding-top:10px;margin-top:10px}#${ID} button:focus-visible,#${ID} input:focus-visible,#${ID} select:focus-visible,#${ID} textarea:focus-visible{outline:2px solid #ff8585;outline-offset:2px}#${ID} .empty{padding:14px;border:1px dashed #702222;border-radius:8px;color:#d97777;text-align:center;line-height:1.6}#${ID} .count{font-size:10px;color:#d97777;border:1px solid #702222;border-radius:20px;padding:3px 7px;white-space:nowrap}#${ID} .sectionhint{font-size:11px;color:#d97777;margin:0 0 8px}#${ID} .replyactions .btn{flex:1}`
const cssV7=`#${ID} .panel{width:min(660px,calc(100vw - 20px));max-height:min(90vh,960px);border-width:2px}#${ID} .content{max-height:calc(min(90vh,960px) - 62px);padding:16px}#${ID} .top{padding:16px 18px}#${ID} .brand{font-size:16px}#${ID} .sub{font-size:13px}#${ID} .secthead{font-size:14px;padding:15px;min-height:54px}#${ID} .sectbody{padding:14px}#${ID} .small{font-size:13px;line-height:1.55}#${ID} input,#${ID} select,#${ID} textarea{font-size:14px!important;padding:12px}#${ID} .reply{padding:15px;margin:12px 0;border-color:#ff3030}#${ID} .replytitle{font-size:15px;line-height:1.4;color:#ff6262}#${ID} .replypreview{font-size:13px;line-height:1.55;color:#f0b0b0;white-space:pre-wrap;overflow-wrap:anywhere;background:#111;border-left:3px solid #ff3030;border-radius:4px;padding:10px 12px;margin-top:8px;max-height:140px;overflow:auto}#${ID} .muted{font-size:12px;color:#e0a0a0}#${ID} .replyactions{gap:8px}#${ID} .replyactions .btn{font-size:13px;min-height:44px}#${ID} .btn{font-size:13px;min-height:42px}#${ID} .bubble{width:62px;height:62px;font-size:25px}#${ID} .count{font-size:11px}#${ID} .empty{font-size:13px}#${ID} .section{margin-bottom:14px}`;

/* v8: Blue/Teal Theme */
const cssV8=`
#${ID}{font-family:Inter,Segoe UI,Arial,sans-serif!important;color:#e7edf5!important}
#${ID} .bubble{background:#172234!important;color:#e9f2ff!important;border:2px solid #40c4b8!important;box-shadow:0 8px 26px #0008,0 0 0 4px #40c4b822!important}
#${ID} .bubble:hover{background:#24374c!important;box-shadow:0 8px 28px #0009,0 0 0 5px #40c4b833!important}
#${ID} .panel{width:min(760px,calc(100vw - 24px))!important;max-height:min(92vh,1000px)!important;background:#101722!important;color:#e7edf5!important;border:1px solid #3b526a!important;border-radius:16px!important;box-shadow:0 24px 70px #000b!important}
#${ID} .top{background:linear-gradient(120deg,#172638,#14202d)!important;color:#f4f7fb!important;border-bottom:1px solid #40c4b8!important;padding:17px 19px!important}
#${ID} .brand{font-size:16px!important;letter-spacing:.8px!important;color:#f4f7fb!important}
#${ID} .sub{font-size:12px!important;color:#aebfd0!important}
#${ID} .close{background:#202c3b!important;color:#f4f7fb!important;border:1px solid #51667a!important}
#${ID} .content{background:#101722!important;color:#e7edf5!important;padding:16px!important;max-height:calc(min(92vh,1000px) - 68px)!important}
#${ID} .section{background:#141f2c!important;border:1px solid #35495d!important;border-radius:12px!important}
#${ID} .secthead{background:#1b2938!important;color:#f4f7fb!important;padding:15px 16px!important;font-size:14px!important;border-bottom:1px solid #344b60!important}
#${ID} .secthead:hover{background:#243649!important}
#${ID} .sectbody{background:#111b27!important;color:#e7edf5!important;border-top:0!important;padding:15px!important}
#${ID} .small{color:#bdc9d6!important;font-size:13px!important;line-height:1.6!important}
#${ID} input,#${ID} select,#${ID} textarea{background:#0d141e!important;color:#f1f5f9!important;border:1px solid #41566b!important;border-radius:9px!important;padding:12px!important;font-size:14px!important}
#${ID} input::placeholder,#${ID} textarea::placeholder{color:#93a4b6!important}
#${ID} select option{background:#111b27!important;color:#f1f5f9!important}
#${ID} .btn{background:#1b2938!important;color:#e9f2ff!important;border:1px solid #50657a!important;border-radius:9px!important;font-weight:700!important;min-height:42px!important}
#${ID} .btn:hover{background:#293c50!important;border-color:#40c4b8!important;color:#fff!important}
#${ID} .primary{background:#176e70!important;color:#fff!important;border:1px solid #42c9bd!important}
#${ID} .primary:hover{background:#208b87!important;color:#fff!important}
#${ID} .danger{background:#39232a!important;color:#ffdce2!important;border-color:#81515b!important}
#${ID} .reply{background:#172231!important;color:#e7edf5!important;border:1px solid #354a5f!important;border-radius:12px!important;padding:15px!important;margin:12px 0!important}
#${ID} .replytitle{font-size:15px!important;color:#f4f7fb!important;font-weight:750!important;line-height:1.4!important}
#${ID} .replypreview{display:block!important;max-height:260px!important;overflow:auto!important;white-space:pre-wrap!important;overflow-wrap:anywhere!important;background:#0e1722!important;color:#e0e8f0!important;border-left:3px solid #40c4b8!important;border-radius:8px!important;padding:13px!important;margin-top:10px!important;font-size:14px!important;line-height:1.65!important}
#${ID} .muted{color:#aab9c8!important;font-size:12px!important}
#${ID} .count{color:#bcebe5!important;border:1px solid #3a7778!important;background:#172e36!important;border-radius:20px!important;font-size:11px!important;padding:4px 8px!important}
#${ID} .empty{background:#172231!important;color:#d0dbe5!important;border:1px dashed #4a657b!important}
#${ID} .editbox{border-top:1px solid #354a5f!important}
#${ID} .toast{background:#172638!important;color:#eafaf8!important;border:1px solid #40c4b8!important}
#${ID} .replyactions .btn{font-size:13px!important;flex:1 1 150px!important}
#${ID} .bubble{width:64px!important;height:64px!important;font-size:23px!important}
@media(max-width:600px){#${ID} .panel{width:calc(100vw - 16px)!important;right:-8px!important}#${ID} .content{padding:10px!important}#${ID} .replypreview{max-height:220px!important}}
`;

const root=document.createElement('div');root.id=ID;
root.innerHTML=`<style>${css}${cssV7}${cssV8}</style><button class="bubble" title="Abrir respostas de atendimento">V</button><div class="panel"><div class="top" id="drag"><div><div class="brand">BRISA RESPOSTAS PRO</div><div class="sub">Mensagens organizadas para agilizar o atendimento • Brisanet</div></div><button class="close" title="Fechar painel">×</button></div><div class="content"><div class="section"><button class="secthead" data-open="msgs"><span>RESPOSTAS DE ATENDIMENTO</span><span class="count" id="msgcount">MENSAGENS</span></button><div class="sectbody open" id="msgs"><div class="small">As mensagens aparecem com o texto completo para você conferir antes de copiar. Escolha uma categoria ou pesquise por palavra.</div><input id="search" placeholder="Pesquisar: boleto, atraso, suporte, reajuste…"><select id="cat" aria-label="Filtrar por tópico"></select><div id="replies"></div><div class="row" style="margin-top:10px"><button class="btn primary" id="new">＋ Nova mensagem</button><button class="btn" id="export">Exportar backup</button></div><div class="row"><button class="btn" id="import">Importar backup</button><input id="file" type="file" accept="application/json" style="display:none"></div><div class="editbox" id="editbox"><div class="small">Título da mensagem</div><input id="edtitle" placeholder="Ex.: Prazo de compensação"><div class="small">Categoria</div><select id="edcat"></select><div class="small">Texto para copiar</div><textarea id="edtext" placeholder="Digite a mensagem completa"></textarea><div class="row"><button class="btn primary" id="save">Salvar mensagem</button><button class="btn" id="cancel">Cancelar</button></div></div></div></div><div class="small footnote">Selecione um assunto, confira a resposta completa e copie somente quando estiver certo.</div></div><div class="toast" id="toast">Copiado!</div>`
document.body.appendChild(root);
const $=s=>root.querySelector(s), $$=s=>[...root.querySelectorAll(s)];let editing=null;

function persist(){try{localStorage.setItem(STORE,JSON.stringify({groups}))}catch(e){toast('Não foi possível salvar localmente.')}}
function toast(t='Copiado!'){const el=$('.toast');el.textContent=t;el.style.display='block';clearTimeout(window.__brisaToastTimer);window.__brisaToastTimer=setTimeout(()=>el.style.display='none',1200)}

function copyText(t){
  const fallback=()=>{const x=document.createElement('textarea');x.value=t;x.style.position='fixed';x.style.opacity='0';document.body.appendChild(x);x.select();document.execCommand('copy');x.remove();toast()};
  if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(t).then(()=>toast()).catch(fallback);
  else fallback()
}

function fillCats(){const cats=groups.map(g=>g.name);const current=$('#cat').value || (groups[0]&&groups[0].name) || '';$('#cat').innerHTML='<option value="">— Escolha um assunto —</option><option value="*">Todas as categorias</option>'+cats.map(c=>`<option value="${esc(c)}">${esc(c)}</option>`).join('');if(current!==undefined&&[...$('#cat').options].some(o=>o.value===current))$('#cat').value=current;$('#edcat').innerHTML=cats.map(c=>`<option value="${esc(c)}">${esc(c)}</option>`).join('')}

function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}

function render(){
  fillCats();
  const q=$('#search').value.trim().toLowerCase(),cat=$('#cat').value;const out=[];
  if(!q&&!cat){
    $('#msgcount').textContent=groups.reduce((n,g)=>n+g.items.length,0)+' ATALHOS';
    $('#replies').innerHTML='<div class="empty"><strong>Por onde começar?</strong><br>1. Escolha um assunto no campo abaixo.<br>2. Localize a mensagem pelo título.<br>3. Confira a prévia e clique em “Copiar resposta”.<br><br>Use a pesquisa se lembrar de uma palavra do texto.</div>';
    return
  }
  groups.forEach((g,gi)=>{
    if(cat&&cat!=='*'&&g.name!==cat)return;
    g.items.forEach((it,ii)=>{
      if((it.title+' '+it.text+' '+g.name).toLowerCase().includes(q))out.push({g,gi,it,ii})
    })
  });
  
  $('#msgcount').textContent=out.length+' MENSAGENS';
  
  // PRÉVIA LIMITADA NA TELA, TEXTO COMPLETO NO BOTÃO
  $('#replies').innerHTML=out.map(o=>{
    const fullText = o.it.text;
    const limit = 110; 
    const preview = fullText.length > limit ? fullText.substring(0, limit) + '...' : fullText;
    return `<div class="reply"><div class="replytitle">${esc(o.it.title)}</div><div class="muted">ASSUNTO: ${esc(o.g.name)}</div><div class="replypreview" title="${esc(fullText)}">${esc(preview)}</div><div class="replyactions"><button class="btn primary" data-copy="${o.gi}:${o.ii}">Copiar resposta</button><button class="btn" data-edit="${o.gi}:${o.ii}">Editar texto</button><button class="btn danger" data-del="${o.gi}:${o.ii}">Excluir</button></div></div>`;
  }).join('')||'<div class="muted">Nenhuma mensagem encontrada.</div>';

  $$('[data-copy]').forEach(b=>b.onclick=()=>{const [a,c]=b.dataset.copy.split(':').map(Number);copyText(groups[a].items[c].text)});
  $$('[data-edit]').forEach(b=>b.onclick=()=>openEdit(...b.dataset.edit.split(':').map(Number)));
  $$('[data-del]').forEach(b=>b.onclick=()=>{const [a,c]=b.dataset.del.split(':').map(Number);groups[a].items.splice(c,1);persist();render()})
}

function openEdit(gi=null,ii=null){editing=gi===null?null:{gi,ii};$('#editbox').style.display='block';$('#edtitle').value=editing?groups[gi].items[ii].title:'';$('#edtext').value=editing?groups[gi].items[ii].text:'';$('#edcat').value=editing?groups[gi].name:groups[0].name;$('#save').textContent=editing?'Salvar alterações':'Salvar mensagem'}
function closeEdit(){$('#editbox').style.display='none';editing=null}

$('#search').oninput=render;$('#cat').onchange=render;$('#new').onclick=()=>openEdit();$('#cancel').onclick=closeEdit;
$('#save').onclick=()=>{const title=$('#edtitle').value.trim(),text=$('#edtext').value.trim(),cat=$('#edcat').value;if(!title||!text){toast('Preencha título e texto');return}let g=groups.find(x=>x.name===cat);if(!g){g={name:cat,items:[]};groups.push(g)}if(editing){const old=groups[editing.gi].items[editing.ii];if(groups[editing.gi].name===cat){old.title=title;old.text=text}else{groups[editing.gi].items.splice(editing.ii,1);g.items.push({title,text})}}else g.items.unshift({title,text});persist();closeEdit();render();toast('Mensagem salva')};

$$('[data-open]').forEach(b=>b.onclick=()=>{const el=$('#'+b.dataset.open);const is=el.classList.toggle('open');b.firstChild.textContent=(is?'▾ ':'▸ ')});
$('#export').onclick=()=>{const blob=new Blob([JSON.stringify({groups},null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='brisa-assistente-backup.json';a.click();URL.revokeObjectURL(a.href)};
$('#import').onclick=()=>$('#file').click();$('#file').onchange=async e=>{try{const d=JSON.parse(await e.target.files[0].text());if(Array.isArray(d.groups))groups=d.groups.filter(g=>g.name!=='Apresentação');persist();render();toast('Backup importado')}catch(err){toast('Arquivo de backup inválido')}e.target.value=''};

const panel=$('.panel'),bubble=$('.bubble');$('.close').onclick=()=>{panel.style.display='none';bubble.textContent='V'};
let dragging=false,dragMoved=false,dx=0,dy=0,startX=0,startY=0;
function dragStart(e){if(e.target.closest('button')&&e.currentTarget!==bubble)return;dragging=true;dragMoved=false;startX=e.clientX;startY=e.clientY;const r=root.getBoundingClientRect();dx=e.clientX-r.left;dy=e.clientY-r.top;try{e.currentTarget.setPointerCapture(e.pointerId)}catch(_){}e.preventDefault()}
function dragMove(e){if(!dragging)return;if(Math.abs(e.clientX-startX)>4||Math.abs(e.clientY-startY)>4)dragMoved=true;const w=root.offsetWidth||58,h=root.offsetHeight||58;root.style.left=Math.max(0,Math.min(window.innerWidth-w,e.clientX-dx))+'px';root.style.top=Math.max(0,Math.min(window.innerHeight-h,e.clientY-dy))+'px';root.style.right='auto';root.style.bottom='auto'}
function dragEnd(){dragging=false}
bubble.addEventListener('pointerdown',dragStart);bubble.addEventListener('pointermove',dragMove);bubble.addEventListener('pointerup',dragEnd);bubble.addEventListener('pointercancel',dragEnd);
bubble.addEventListener('click',e=>{if(dragMoved){e.preventDefault();e.stopPropagation();dragMoved=false;return}panel.style.display=panel.style.display==='block'?'none':'block';bubble.textContent=panel.style.display==='block'?'×':'V'});
window.addEventListener('resize',()=>{const r=root.getBoundingClientRect();root.style.left=Math.max(0,Math.min(window.innerWidth-r.width,r.left))+'px';root.style.top=Math.max(0,Math.min(window.innerHeight-r.height,r.top))+'px';root.style.right='auto';root.style.bottom='auto'});
render();
})();