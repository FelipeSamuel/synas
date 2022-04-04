import React from 'react';

import { Modal } from '../index';
import { Button } from '../../index';

//STYLES
import { 
  ModalText,
  ModalButtonContainer,
} from './styles.js';

export default function ModalTerms({
  show,
  hide,
}) {
  return (
    <Modal
      show={show}
      hide={hide}
      title={<b>USO DA PLATAFORMA SYNAS</b>}
    >
      <ModalText>
        TERMOS E CONDIÇÕES DE USO
        <br />
        O presente instrumento (“Termos e Condições de Uso”), tem por objeto
        regular os termos e as condições de uso dos serviços oferecidos pelo
        Synas, aplicativo de propriedade da SYNAS SERVIÇOS DE INFORMAÇÃO NA
        INTERNET LTDA., sociedade limitada inscrita no CNPJ/MF sob o nº
        31.495.143/0001-45 e com sede na Rua Rodrigo Silva, nº 18, 12º andar,
        Centro, na Cidade e Estado do Rio de Janeiro, detentora de seus
        direitos autorais.
        <br />
        A aceitação destes Termos e Condições de Uso e de todas as demais
        políticas e princípios que o regem é absolutamente indispensável a
        qualquer pessoa física ou jurídica que pretenda se tornar usuário do
        Synas.
        <br />
        POR FAVOR, LEIA ESTE DOCUMENTO COM ATENÇÃO, POIS O USO DOS SERVIÇOS DO
        APLICATIVO SYNAS POR VOCÊ DEMONSTRA A SUA CONCORDÂNCIA COM O MESMO.
        <br />
        AO CLICAR EM “LI E ACEITO”, VOCÊ CONCORDA COM ESTES TERMOS E CONDIÇÕES
        DE USO E COM A POLÍTICA DE PRIVACIDADE DO APLICATIVO SYNAS. CASO VOCÊ
        TENHA QUALQUER DÚVIDA SOBRE ESSES INSTRUMENTOS, RECOMENDAMOS QUE ENTRE
        EM CONTATO COM A SYNAS ATRAVÉS DA SEÇÃO DE CONTATO DE SEU APLICATIVO.
        <br />
        A SYNAS PODERÁ MODIFICAR ESTE DOCUMENTO, A QUALQUER MOMENTO, PARA
        REFLETIR EVENTUAIS ALTERAÇÕES NECESSÁRIAS. EVENTUAIS VERSÕES
        ATUALIZADAS SERÃO PUBLICADAS NO MESMO SITE INDICADO ACIMA, QUE DEVERÁ
        SER CONSULTADO REGULARMENTE.
        <br />
        Para a sua comodidade, a data da última atualização é incluída no topo
        desta página e, posteriormente, enviaremos avisos sobre eventuais
        atualizações.
        <br />
        Em caso de conflito entre este documento e eventual versão posterior,
        esta última prevalecerá sobre a primeira. <br />
        • DEFINIÇÕES
        <br />
        Toda vez que houver menção aos termos “Sociedade”, “nós” ou “nossos”
        estaremos nos referindo à Synas Serviços de Informação na Internet
        Ltda.; e toda vez que houver menção aos termos “Usuário”, “você”,
        “seu” ou “sua”, estaremos nos referindo à pessoa física ou jurídica
        que pretenda utilizar o aplicativo Synas.
        <br />
        Ademais, para facilitar seu entendimento e evitar repetições, os
        termos constantes neste documento, sempre que usados com a primeira
        letra em maiúsculo, identificarão um termo ou expressão definida, e
        serão aplicáveis para as eventuais atualizações que este documento
        possa vir a sofrer, exceto se expressamente indicado o contrário.
        <br />
        • O SYNAS
        <br />
        • O Synas é um algoritmo de compatibilidade astrológica em website e
        aplicativo de relacionamento desenvolvido pela Sociedade, disponível
        para utilização nos sistemas IOS/Android, que se utiliza de parâmetros
        astrológicos para determinar a compatibilidade entre seus Usuários.
        <br />
        • UTILIZAÇÃO DO SOFTWARE
        <br />
        • Para utilizar o Synas versão website, o Usuário deverá realizar seu
        cadastro através do envio dos seguintes dados: (i) nome completo; (ii)
        sexo; (iii) endereço de e-mail pessoal válido (login) que seja
        acessado regularmente; (iv) data, local e horário de nascimento. Em
        seguida, deverá criar uma senha pessoal e intransferível.
        <br />
        • O USUÁRIO DECLARA ESTAR CIENTE DE QUE SEU SIGNO, ASCENDENTE E
        ELEMENTOS INFLUENCIADORES COMO A LUA, SATURNO, NETUNO, VÊNUS,
        MERCÚRIO, MARTE, JÚPITER, PLUTÃO, URANO E SUAS RESPECTIVAS CASAS
        PODERÃO SER DISPONIBILIZADOS AOS OUTROS USUÁRIOS DO SYNAS,
        IDENTIFICADOS COMO COMPATÍVEIS, E VICE-VERSA, PARA QUE POSSAM DECIDIR
        SE DESEJAM OU NÃO INICIAR UM RELACIONAMENTO.
        <br />
        • EM QUE PESE O SYNAS SE UTILIZAR DE INFORMAÇÕES FORNECIDAS PELO MAPA
        ASTRAL DE SEUS USUÁRIOS, ELABORADO A PARTIR DOS DADOS DE SEU CADASTRO,
        O USUÁRIO DECLARA E RECONHECE QUE A DISPONIBILIZAÇÃO DO REFERIDO MAPA
        ASTRAL NÃO FAZ PARTE DOS SERVIÇOS OFERECIDOS NO APLICATIVO.
        <br />
        • O Usuário declara estar ciente de que a realização do seu cadastro
        corresponde à aceitação do disposto neste documento, e de todas as
        demais políticas e princípios que o regem, podendo esta informação ser
        utilizada como prova de sua anuência, independentemente de outra
        formalidade.
        <br />
        • A pessoa física que deseja utilizar os serviços disponibilizados
        pelo Synas deverá ser civilmente capaz, nos moldes da legislação civil
        vigente no Brasil, para que possa figurar como Usuário. No caso de
        qualquer eventual cadastro de Usuário absoluta ou relativamente
        incapaz (por exemplo, menores de 18 anos de idade), com ou sem
        permissão de seus pais, tutores ou representantes legais, estes serão
        responsáveis por todos os atos praticados pelo menor, na forma da lei.
        <br />
        • O Usuário será o único responsável pelas operações efetuadas por seu
        cadastro e pela utilização do serviço oferecido pelo Synas, mediante a
        aposição de senha que é de seu conhecimento exclusivo. Nesse sentido,
        o Usuário reconhece que:
        <br />
        • desde o primeiro acesso, estará concordando com os presentes Termos
        e Condições de Uso e a Política de Privacidade e Proteção de Dados do
        Synas;
        <br />
        • acessará sua conta através de login e senha individuais, se
        comprometendo a não informar esses dados a terceiros e
        responsabilizando-se integralmente pelo uso que deles seja feito; e
        <br />
        • deverá notificar à Sociedade imediatamente, através da seção de
        contato disponibilizada no aplicativo, sobre qualquer uso ou acesso
        não autorizado de sua conta.
        <br />
        • III.4. A responsabilidade pela utilização de seu login e senha é de
        inteira responsabilidade do Usuário, bem como a atualização de seus
        dados cadastrais.
        <br />
        • III.5. Embora o serviço oferecido pelo Synas possa ser acessado de
        forma gratuita, para que o Usuário tenha acesso a algumas
        funcionalidades especiais (“Serviços Premium”), deverá realizar a
        aquisição de um plano de acesso e realizar o respectivo pagamento,
        conforme disposto na Seção 4.1 deste documento. A liberação do acesso
        ao conteúdo dos Serviços Premium está condicionada à confirmação de
        pagamento.
        <br />
        • CADASTRO E CANCELAMENTO
        <br />
        • Ao efetuar o seu cadastro e aceitar o presente instrumento, o
        Usuário reconhece que, no momento, somente a versão gratuita do
        serviço está disponível para acesso ao público.
        <br />
        • O Usuário poderá cancelar seu cadastro no Synas a qualquer tempo,
        mediante o envio de comunicação nesse sentido para a Sociedade através
        da seção de contato disponibilizada no aplicativo, devendo aguardar o
        recebimento da mensagem de confirmação de cancelamento.
        <br />
        • CONFIDENCIALIDADE
        <br />
        • A Sociedade se compromete a manter a confidencialidade, integridade
        e segurança de quaisquer Informações disponibilizadas pelo Usuário ou
        a ele relacionadas.
        <br />
        • A concordância do Usuário ao presente instrumento manifesta sua
        anuência expressa para que a Sociedade utilize as informações por ele
        inseridas no aplicativo exclusivamente para os fins aqui descritos.
        <br />
        • Com a finalidade de garantir a privacidade do Usuário, bem como a
        segurança de suas informações, a Sociedade se compromete a
        regularmente reavaliar a sua política de segurança e adaptá-la,
        conforme necessário.
        <br />
        • Para o tratamento de questões relacionadas à atribuição de
        confidencialidade destes Termos e Condições de Uso, entende-se por:
        <br />
        • “Informações”: os dados, os documentos e os materiais que lhe sejam
        pertinentes;
        <br />
        • “Informações Confidenciais”: todas e quaisquer informações reveladas
        direta ou indiretamente, pela Sociedade, tais como características de
        produtos/sistemas (pré-existentes, novos e em desenvolvimento),
        informações envolvendo direito e propriedade industrial ou direito
        autoral, informações sobre ferramentas de software, designs de
        hardware, algoritmos, design de interface de usuário, documentação em
        qualquer formato, técnicas e métodos, fórmulas, demonstrações,
        apresentações, relatórios, listas e preços. As Informações
        Confidenciais incluem todo e qualquer conteúdo compartilhado com o
        Cliente, em virtude das atividades exercidas pela Sociedade, e todas
        as informações fornecidas (seja de forma escrita ou oral, direta ou
        indiretamente) por esta, seus representantes, conselheiros, diretores
        e empregados, sejam antes ou depois da data de anuência com estes
        Termos e Condições de Uso e marcadas, ou indicadas, como
        “Confidencial” ou similar, ou cujo destinatário entenda, de forma
        razoável, serem Informações Confidenciais devido à sua natureza;
        <br />
        • “Pessoas Autorizadas”: representantes e procuradores do Usuário; e
        <br />
        • “Sigilo”: proteção contra o tratamento não autorizado de Informações
        Confidenciais.
        <br />
        • As Informações Confidenciais reveladas deverão ser guardadas em
        segredo, não devendo ser reveladas a terceiros ou utilizadas para fins
        diversos daqueles definidos neste instrumento, sem a devida
        autorização da Parte reveladora.
        <br />
        • As Informações Confidenciais fornecidas só deverão ser divulgadas às
        Pessoas Autorizadas, na estrita medida em que se fizer necessária tal
        divulgação, devendo a Sociedade informar as mesmas sobre a natureza
        confidencial das Informações, bem como a fazer com que essas pessoas
        tratem referidas Informações como confidenciais, na forma disposta
        nestes Termos e Condições de Uso.
        <br />
        • A Sociedade, sem prejuízo das demais obrigações previstas nestes
        Termos e Condições de Uso, compromete-se a comunicar previamente ao
        Usuário, na hipótese de solicitação de divulgação das Informações
        Confidenciais em razão do cumprimento de lei, determinação judicial ou
        de órgão competente fiscalizador das atividades envolvidas por
        qualquer das Partes, sendo, em qualquer dos casos, divulgadas somente
        nos limites estritamente requeridos para a sua divulgação.
        <br />
        • Só serão legítimos motivos de exceção à obrigatoriedade de sigilo, a
        ocorrência de divulgação, nas hipóteses em que a Informação:
        <br />
        • for de domínio público anteriormente à sua divulgação à Sociedade,
        por fontes legítimas diversas do Usuário;
        <br />
        • já for de conhecimento do Usuário no momento em que seja divulgada
        ao mesmo, por fontes legítimas diversas da Sociedade;
        <br />
        • se tornar publicamente disponível para terceiros após a divulgação
        para o Usuário, sem que tal fato tenha ocorrido por culpa ou dolo da
        mesma;
        <br />
        • tenha sido comprovadamente obtida, de forma legal e legítima, por
        outra fonte que não tenha, direta ou indiretamente, obrigação de
        sigilo com o Usuário;
        <br />
        • cuja revelação para terceiros (que não as Pessoas Autorizadas) seja
        prévia e expressamente autorizada por escrito pelo Usuário; e
        <br />
        • for requisitada através de ordem judicial por uma autoridade
        governamental competente, sendo, neste caso, necessário que o Usuário
        notifique com antecedência a Sociedade e seus representantes do
        pedido, além de utilizar esforços comercialmente razoáveis para
        limitar a extensão de tal abertura.
        <br />
        • PROPRIEDADE INTELECTUAL
        <br />
        • O uso comercial da expressão “Synas” como marca, nome empresarial ou
        nome de domínio, bem como todo conteúdo disponível no aplicativo,
        incluindo, mas não se limitando a marcas, logotipos, textos, gráficos,
        imagens, logos, telas, conteúdo editorial, notificações, software,
        bancos de dados e demais instrumentos que permitem que o Usuário
        acesse e use sua conta, são propriedades da Sociedade e estão
        protegidos pelas leis e tratados internacionais de direito autoral,
        marcas, patentes, modelos e desenhos industriais. A cópia, reprodução,
        distribuição, transmissão, publicação, conexão ou qualquer outra forma
        de uso indevido dos conteúdos mencionados acima é proibida, salvo se
        com autorização expressa da Sociedade.
        <br />
        • O Usuário declara e reconhece que a reprodução de qualquer conteúdo
        disponível pelo aplicativo do Synas não lhe confere sua titularidade;
        assim como a adesão ao presente instrumento lhe atribui nenhum direito
        de propriedade intelectual ou outros direitos exclusivos da Sociedade,
        incluindo patentes, desenhos, marcas, código fonte do software,
        direitos sobre informações confidenciais ou segredos de negócio.
        <br />
        • Quaisquer marcas exibidas no aplicativo não devem ser consideradas
        como de domínio público e são de titularidade exclusiva da Sociedade,
        de seus parceiros ou de terceiros licenciantes, conforme o caso.
        <br />
        • A reprodução do conteúdo disponibilizado pelo Synas sem a devida
        autorização, ou ainda sem a correspondente citação e referência ao
        Synas constituirá infração aos direitos de propriedade intelectual da
        Sociedade, e sujeitará o Usuário às sanções administrativas, civis e
        criminais cabíveis.
        <br />
        • PRIVACIDADE DA INFORMAÇÃO
        <br />
        • Toda informação ou dado pessoal prestado pelo Usuário à Sociedade
        para utilização do Synas é armazenada em banco de dados próprio,
        através de servidores ou meios magnéticos de alta segurança.
        <br />
        • A Sociedade tomará todas as medidas possíveis para manter a
        confidencialidade e a segurança necessárias, porém não responderá por
        prejuízo que possa ser derivado da violação dessas medidas por parte
        de terceiros que utilizem as redes públicas ou a internet, subvertendo
        os sistemas de segurança para acessar as informações de seus Usuários.
        <br />
        • A Sociedade, ao se utilizar de qualquer das informações destes
        Termos e Condições de Uso, não identificará a titularidade dos dados,
        mantendo o anonimato do Usuário.
        <br />
        • Em caso de dúvidas sobre a proteção a dados pessoais ou para obter
        maiores informações sobre dados pessoais e os casos nos quais poderá
        ser quebrado o sigilo de que trata esta Seção, o Usuário deverá
        consultar a Política de Privacidade e Proteção de Dados do Synas, que
        é parte integrante destes Termos e Condições de Uso.
        <br />
        • DEVERES E LIMITAÇÕES DE USO
        <br />
        • Ao se cadastrar no Synas, o Usuário declara e reconhece que:
        <br />
        • aceita receber informações, materiais e mensagens relacionadas ao
        Synas;
        <br />
        • deverá cumprir com os termos e condições ora estabelecidos; e
        <br />
        • não está autorizado a republicar o conteúdo do aplicativo em nenhum
        outro meio, incluindo outros sites.
        <br />
        • Uma vez constatado o uso fraudulento do Synas, a Sociedade promoverá
        a exclusão do Usuário do website, nada lhe sendo devido a que título
        for.
        <br />
        • O Usuário declara, ainda, reconhecer que não poderá:
        <br />
        • incluir informações falsas ou de propriedade de terceiros em seu
        cadastro;
        <br />
        • utilizar o Synas para divulgar informações de qualquer forma que
        possa implicar em violação de normas aplicáveis no Brasil, de direitos
        de propriedade da Synas e/ou de terceiros ou dos bons costumes,
        incluindo, sem limitação, a violação de direitos intelectuais,
        autorais e de privacidade, ou a produção e divulgação de conteúdo
        ilegal, imoral, inapropriado ou ofensivo;
        <br />
        • copiar, ceder, sublicenciar, vender, dar em locação ou em garantia,
        reproduzir, doar, alienar de qualquer forma, transferir total ou
        parcialmente, sob quaisquer modalidades, gratuita ou onerosamente,
        provisória ou permanentemente, o acesso ao Synas, assim como seus
        módulos, partes, manuais ou quaisquer informações relativas ao mesmo;
        <br />
        • empregar softwares, técnicas e/ou artifícios com o intuito de
        utilizar indevidamente o Synas para práticas nocivas à Sociedade ou a
        terceiros, tais como a prática de fraudes, spamming, flooding e
        spoofing, etc;
        <br />
        • reproduzir, adaptar, modificar e/ou empregar, no todo ou em parte,
        para qualquer fim, o aplicativo sem a autorização expressa da
        Sociedade;
        <br />
        • publicar ou transmitir qualquer arquivo que contenha vírus,
        malwares, spywares ou qualquer outro programa contaminante ou
        destrutivo, ou que de outra forma possa interferir no bom
        funcionamento do Synas; ou
        <br />
        • utilizar o aplicativo para finalidade diversa daquela para a qual
        foi disponibilizado pela Sociedade.
        <br />
        • RESPONSABILIDADE DAS PARTES
        <br />
        • Adicionalmente às declarações prestadas e obrigações assumidas
        nestes Termos e Condições de Uso, o Usuário declara que está ciente de
        que o Synas, assim como qualquer outra plataforma de tecnologia, está
        suscetível a falhas, erros, problemas de acesso e similares, que fogem
        do controle da Sociedade.
        <br />
        • O Usuário assumirá toda a responsabilidade civil e criminal perante
        a Sociedade pelo descumprimento das obrigações previstas neste
        documento, pela inexatidão das suas declarações e por qualquer conduta
        ilícita, devendo indenizá-la, imediatamente, por quaisquer prejuízos e
        despesas, incluindo honorários de advogado e custas judiciais,
        incorridas pela Sociedade.
        <br />
        • A Sociedade não responderá, em nenhuma hipótese, ainda que em
        caráter solidário ou subsidiário:
        <br />
        • pela autenticidade, validade e precisão dos dados fornecidos pelo
        Usuário;
        <br />
        • por eventuais prejuízos sofridos pelo Usuário em razão da tomada de
        decisões com base nas informações disponibilizadas no Synas;
        <br />
        • por situações de caso fortuito ou força maior, nos termos do artigo
        393 do Código Civil Brasileiro; e
        <br />
        • eventuais prejuízos sofridos pelo Usuário em razão de falhas no
        sistema de informática ou nos servidores que independam de culpa da
        Sociedade ou em sua conectividade com a internet de modo geral,
        devendo o Usuário manter, às suas expensas, linha de telecomunicação,
        modem, software de comunicação, endereço de correio eletrônico e
        outros recursos necessários para a comunicação com a Sociedade.
        <br />
        • A Sociedade não garante que as funções contidas no Synas atendam às
        suas necessidades, que sua operação será ininterrupta ou livre de
        erros ou que o aplicativo será compatível ou funcione com qualquer
        outro aplicativo, software ou serviços de terceiros.
        <br />
        • Em nenhum caso, a Sociedade será responsabilizada por danos pessoais
        ou qualquer prejuízo incidental, especial, indireto ou consequente,
        lucros cessantes, incluindo, sem limitação, prejuízos por perda de
        lucro, corrupção ou perda de dados, falha de transmissão ou recepção
        de dados, não continuidade do negócio ou qualquer outro prejuízo ou
        perda comercial, decorrentes ou relacionados ao uso de seu aplicativo,
        por qualquer outro motivo.
        <br />
        • O Usuário entende e concorda que a Sociedade irá adotar medidas de
        segurança e de proteção compatíveis com a natureza dos dados
        coletados, usados e armazenados pela Sociedade, no entanto, a
        Sociedade não garante de forma alguma que tais medidas de segurança
        sejam isentas de erros ou que não estejam sujeitas a interferência de
        terceiros (hackers, entre outros). Por sua natureza, apesar dos
        melhores esforços da Sociedade, qualquer medida de segurança pode
        falhar e qualquer dado do Usuário fornecido ou coletado pela Sociedade
        pode se tornar público. AO ACEITAR O TERMO DE USO E/OU USAR O SYNAS, O
        USUÁRIO ENTENDE E ASSUME EXPRESSAMENTE ESSE RISCO E CONCORDA QUE A
        SOCIEDADE NÃO SERÁ RESPONSÁVEL POR TAL TIPO DE VAZAMENTO DE DADOS,
        DESDE QUE COMPROVADO QUE TODAS AS MEDIDAS DE SEGURANÇA FORAM ADOTADAS.
        <br />
        • No eventual caso de vazamento de dados, a Sociedade informará
        imediatamente o Usuário para que sejam tomadas as medidas necessárias
        de contenção de danos.
        <br />
        • VIGÊNCIA
        <br />
        • Estes Termos e Condições terão prazo indeterminado, tendo início a
        partir do aceite do Usuário.
        <br />
        • DISPOSIÇÕES FINAIS
        <br />
        • Na hipótese de qualquer cláusula, termo ou disposição destes Termos
        e Condições de Uso vir a ser declarada nula ou inexequível, tal
        nulidade ou inexequibilidade não afetará quaisquer outras cláusulas,
        termos ou condições aqui contidos, os quais permanecerão em pleno
        vigor e efeito.
        <br />
        • Estes Termos e Condições de Uso constituem a totalidade do acordo
        sobre as condições de uso do Synas. O Usuário declara ter ciência dos
        direitos e obrigações decorrentes deste documento, tendo lido,
        compreendido e aceito todos os termos e condições aqui dispostos.
        <br />
        • A tolerância de uma parte em relação à outra quanto ao
        descumprimento de qualquer uma das obrigações assumidas neste
        instrumento não implicará em novação ou renúncia de direito. A parte
        tolerante poderá, a qualquer tempo, exigir da outra parte o fiel e
        cabal cumprimento do conteúdo previsto.
        <br />
        • O Usuário concorda que a Sociedade possa enviar notificações via
        correio eletrônico sobre parcerias e campanhas relacionadas aos
        serviços disponibilizados pelo Synas.
        <br />
        • LEI E FORO APLICÁVEIS
        <br />
        • Estes Termos e Condições de Uso serão interpretados exclusivamente
        segundo as leis do Brasil.
        <br />• As partes elegem o Foro da Comarca da Capital do Rio de
        Janeiro como o único competente para dirimir qualquer litígio
        resultante deste instrumento.
      </ModalText>
      <ModalButtonContainer>
        <Button onClick={hide}>
          Entendi
        </Button>
      </ModalButtonContainer>
    </Modal>
  );
}
