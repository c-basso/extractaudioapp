/**
 * Guias em português do Brasil → /pt/guides/<slug>/
 * Slugs idênticos a build/guides/en.js (ligados por hreflang). Keywords: seção «Português (PT-BR)» em /keywords.md.
 * Termos de iOS em pt-BR: Compartilhar, Arquivos, Salvar em Arquivos, Atalhos, Central de Controle.
 * Capturas: 1 capa · 2 extração · 3 corte · 4 menu Compartilhar · 5 biblioteca
 */

const APP = 'Extrair Áudio de Vídeo⁺';

const STEP = {
    open: {
        name: 'Abra o app e escolha um vídeo',
        text: `Abra o ${APP} e escolha um vídeo de Fotos ou de Arquivos. Mais rápido: em Fotos, toque em Compartilhar no vídeo e escolha o app.`,
        image: 2
    },
    share: {
        name: 'Envie o vídeo para o app',
        text: 'Abra o vídeo em Fotos ou Arquivos, toque em Compartilhar e escolha o app. Ele abre com o vídeo já carregado.',
        image: 2
    },
    trim: {
        name: 'Corte o trecho que você precisa (opcional)',
        text: 'Toque em «Cortar vídeo», arraste os marcadores amarelos para o início e o fim do trecho, ouça e toque em «Salvar».',
        image: 3
    },
    extract: {
        name: 'Toque em «Extrair áudio»',
        text: 'Toque em «Extrair áudio». A faixa de som é convertida no seu iPhone em segundos — nada é enviado para a internet.',
        image: 2
    },
    save: {
        name: 'Salve ou compartilhe o áudio',
        text: 'O novo arquivo de áudio aparece na biblioteca. Toque em Compartilhar para salvar em Arquivos, enviar por AirDrop ou para qualquer app.',
        image: 4
    }
};

const guides = [];
module.exports = guides;

guides.push(
    {
        slug: 'extract-audio-from-video-iphone',
        keyword: 'como extrair áudio de vídeo no iphone',
        eyebrow: 'Guia básico',
        title: 'Como extrair o áudio de um vídeo no iPhone (guia 2026)',
        description: 'Extraia o áudio de qualquer vídeo no iPhone em 4 toques: escolha o vídeo, corte, toque em «Extrair áudio» e salve em MP3 ou M4A. Grátis e sem upload.',
        h1: 'Como extrair o áudio de um vídeo no iPhone',
        answer: `Para extrair o áudio de um vídeo no iPhone, abra o ${APP}, escolha o vídeo em Fotos, corte se quiser e toque em «Extrair áudio». O app salva a faixa de som em MP3 ou M4A no seu iPhone em segundos. É grátis para começar e funciona offline: nada é enviado.`,
        intro: '<p>O app Fotos não tem um botão de «salvar só o som». Dá para criar um atalho (veja <a href="/pt/guides/extract-audio-without-app-iphone/">o método sem app</a>) ou subir o vídeo num site, mas as duas opções são lentas quando você só quer o áudio. Aqui está o jeito mais rápido: um app grátis que funciona direto pelo Compartilhar.</p>',
        steps: [STEP.open, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'O que você precisa',
                html: `<ul>
<li>Um iPhone com iOS 18.6 ou mais recente.</li>
<li>${APP}, grátis na App Store (cerca de 23 MB).</li>
<li>Um vídeo com som: gravações da câmera (MOV), downloads (MP4), gravações de tela ou vídeos recebidos no Mensagens.</li>
</ul>`
            },
            {
                h2: 'O jeito mais rápido: pelo Compartilhar',
                html: '<p>Você nem precisa abrir o app. Em <strong>Fotos</strong> ou <strong>Arquivos</strong>, abra o vídeo, toque em <strong>Compartilhar</strong>, deslize a fileira de apps e escolha o app. Se ele não aparecer, toque em «Mais» e adicione aos favoritos uma vez — a partir daí ele fica sempre à mão.</p>'
            },
            {
                h2: 'MP3 ou M4A: qual escolher?',
                html: '<p><strong>MP3</strong> toca em tudo: Windows, Android, som do carro, sites e editores. <strong>M4A</strong> (AAC) é o formato da Apple: mais leve com a mesma qualidade, ideal para toques, GarageBand e iMovie. Na dúvida, escolha MP3. Mais em <a href="/pt/guides/convert-video-to-mp3-iphone/">vídeo em MP3</a> e <a href="/pt/guides/video-to-m4a-iphone/">vídeo em M4A</a>.</p>'
            },
            {
                h2: 'Onde o áudio fica salvo?',
                html: '<p>Cada arquivo extraído aparece na biblioteca do app com duração, tamanho e data. De lá, toque em <strong>Compartilhar → Salvar em Arquivos</strong> para guardar no iCloud Drive ou «No iPhone», ou envie para WhatsApp, Mail, Notas, GarageBand ou para o Mac por AirDrop.</p>'
            },
            {
                h2: 'Se algo der errado',
                html: `<ul>
<li><strong>O áudio saiu mudo.</strong> O vídeo não tem faixa de som — comum em gravações de tela sem microfone. Reproduza o vídeo em Fotos antes.</li>
<li><strong>O vídeo está no iCloud.</strong> O Fotos baixa o original primeiro: espere o círculo de progresso terminar.</li>
<li><strong>Só preciso de 20 segundos.</strong> Corte antes de extrair — veja <a href="/pt/guides/trim-audio-from-video-iphone/">extrair só uma parte do áudio</a>.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'É grátis extrair o áudio de um vídeo no iPhone?', a: `Sim. O ${APP} é grátis para baixar e a extração básica é gratuita. Compras no app opcionais liberam recursos extras.` },
            { q: 'Extrair o áudio perde qualidade?', a: 'O app converte a faixa de som do vídeo em um MP3 ou M4A de alta qualidade. Não vai soar melhor que o original, mas igual ao que você ouve ao reproduzir o vídeo.' },
            { q: 'Dá para extrair o áudio de um vídeo longo?', a: 'Sim. Aulas, shows e reuniões funcionam do mesmo jeito, só demoram um pouco mais. Se precisar de um trecho, corte antes.' }
        ],
        related: ['convert-video-to-mp3-iphone', 'trim-audio-from-video-iphone', 'extract-audio-without-app-iphone'],
        card: { title: 'Extrair áudio de vídeo no iPhone', text: 'O método em 4 toques, por Fotos ou Compartilhar.' }
    },
    {
        slug: 'convert-video-to-mp3-iphone',
        keyword: 'converter vídeo em mp3 no iphone',
        eyebrow: 'Vídeo em MP3',
        title: 'Como converter vídeo em MP3 no iPhone — rápido e grátis',
        description: 'Converta qualquer vídeo do iPhone em MP3 em segundos com um conversor grátis. Direto de Fotos, sem upload e com corte antes de exportar. Veja o passo a passo.',
        h1: 'Como converter vídeo em MP3 no iPhone',
        answer: `Abra o vídeo em Fotos, toque em Compartilhar e escolha o ${APP}. Corte se precisar, toque em «Extrair áudio» e exporte em MP3. O MP3 fica no seu iPhone e pode ser salvo em Arquivos, enviado por AirDrop ou para qualquer app. Sem computador, sem upload e sem cadastro.`,
        intro: '<p>MP3 é o formato de áudio mais compatível que existe: toca em qualquer carro, computador e editor. Veja como converter qualquer vídeo do iPhone em MP3 sem largar o celular.</p>',
        steps: [STEP.share, STEP.trim, { name: 'Extraia em MP3', text: 'Toque em «Extrair áudio» e escolha MP3. A conversão acontece no seu iPhone.', image: 2 }, STEP.save],
        sections: [
            {
                h2: 'Por que um app e não um conversor online?',
                html: '<p>Conversores online obrigam você a subir o vídeo inteiro, esperar e baixar o MP3 de novo — lento no 4G/5G e arriscado para vídeos pessoais. O app funciona offline, mantém o arquivo no aparelho e corta antes de converter. Comparação: <a href="/pt/guides/extract-audio-online-vs-app/">online ou app</a>.</p>'
            },
            {
                h2: 'Quais vídeos posso converter em MP3?',
                html: '<p>Tudo que o iPhone reproduz: gravações da câmera (<a href="/pt/guides/mov-to-mp3-iphone/">MOV</a>), clipes baixados (<a href="/pt/guides/mp4-to-mp3-iphone/">MP4</a>), <a href="/pt/guides/screen-recording-to-audio-iphone/">gravações de tela</a> e vídeos recebidos pelo Mensagens, WhatsApp ou AirDrop.</p>'
            },
            {
                h2: 'O que fazer com o MP3',
                html: `<ul>
<li>Salvar em <strong>Arquivos</strong> e ouvir offline.</li>
<li>Enviar para o Mac por <strong>AirDrop</strong>.</li>
<li>Transformar 30 segundos em <a href="/pt/guides/video-to-ringtone-iphone/">toque</a>.</li>
<li>Levar para o GarageBand, CapCut ou um editor de podcast.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'O iPhone converte vídeo em MP3 sem app?', a: 'Não diretamente. O Atalhos só salva o áudio em M4A, não em MP3. Para ter MP3 no iPhone você precisa de um app conversor ou de um site.' },
            { q: 'A conversão para MP3 é grátis?', a: `Sim, a conversão básica no ${APP} é grátis. Compras no app adicionam recursos extras.` },
            { q: 'Preciso de Wi-Fi para converter vídeo em MP3?', a: 'Não. A conversão acontece no iPhone e funciona offline. Só vídeos guardados no iCloud precisam ser baixados antes.' }
        ],
        related: ['mp4-to-mp3-iphone', 'mov-to-mp3-iphone', 'video-to-m4a-iphone'],
        card: { title: 'Converter vídeo em MP3', text: 'Qualquer vídeo do iPhone em MP3 universal.' }
    },
    {
        slug: 'mp4-to-mp3-iphone',
        keyword: 'extrair áudio de vídeo mp4 iphone',
        eyebrow: 'MP4 para MP3',
        title: 'Extrair áudio de vídeo MP4 no iPhone: MP4 para MP3 grátis',
        description: 'Extraia o áudio de um MP4 no iPhone de graça: abra o arquivo em Arquivos ou Fotos, toque em Compartilhar e escolha o app. Offline e com corte. Em 4 passos.',
        h1: 'Como extrair o áudio de um vídeo MP4 no iPhone (MP4 para MP3)',
        answer: `Para extrair o áudio de um MP4 no iPhone, abra o arquivo em Arquivos ou Fotos, toque em Compartilhar e escolha o ${APP}. Corte se quiser, toque em «Extrair áudio», escolha MP3 e salve. Grátis, no aparelho e sem internet.`,
        intro: '<p>Arquivos MP4 costumam chegar como download, anexo de e-mail ou por AirDrop, então muitas vezes estão no app <strong>Arquivos</strong>, e não em Fotos. O app funciona com os dois.</p>',
        steps: [
            { name: 'Encontre o arquivo MP4', text: 'Abra Arquivos (Downloads, iCloud Drive ou «No iPhone») ou Fotos e localize o MP4.', image: 2 },
            { name: 'Envie para o app', text: 'Toque e segure o arquivo, toque em Compartilhar e escolha o app. O MP4 abre nele.', image: 2 },
            STEP.trim,
            { name: 'Salve como MP3', text: 'Toque em «Extrair áudio», escolha MP3 e depois Compartilhar → Salvar em Arquivos para deixar o MP3 ao lado do MP4 original.', image: 4 }
        ],
        sections: [
            {
                h2: 'MP4 e MP3 em uma frase',
                html: '<p>MP4 é um contêiner com imagem <em>e</em> som; MP3 é só som. Na conversão, a faixa de áudio é mantida e a imagem é descartada: o arquivo fica bem menor e toca em qualquer player.</p>'
            },
            {
                h2: 'MP4 do WhatsApp, Telegram e e-mail',
                html: '<p>Salve o anexo primeiro: na conversa, abra o vídeo → Compartilhar → «Salvar Vídeo» (vai para Fotos) ou «Salvar em Arquivos». Depois siga os passos acima. Converta só vídeos seus ou sobre os quais você tem direitos.</p>'
            },
            {
                h2: 'Prefere M4A?',
                html: '<p>Para toques e apps da Apple, M4A é a melhor opção. Veja <a href="/pt/guides/video-to-m4a-iphone/">como converter vídeo em M4A no iPhone</a>.</p>'
            }
        ],
        faq: [
            { q: 'Dá para converter MP4 em MP3 de graça no iPhone?', a: `Sim. O ${APP} converte MP4 em MP3 de graça direto no aparelho. Compras no app liberam extras.` },
            { q: 'O MP3 vai ficar menor que o MP4?', a: 'Sim, geralmente bem menor, porque a faixa de vídeo é removida e só o som fica.' },
            { q: 'Posso converter vários MP4?', a: 'Sim. Converta um depois do outro — cada MP3 fica salvo na biblioteca do app.' }
        ],
        related: ['convert-video-to-mp3-iphone', 'mov-to-mp3-iphone', 'extract-audio-online-vs-app'],
        card: { title: 'Extrair áudio de MP4', text: 'MP4 de Arquivos ou Fotos para MP3.' }
    },
    {
        slug: 'mov-to-mp3-iphone',
        keyword: 'mov para mp3 iphone',
        eyebrow: 'MOV para MP3',
        title: 'MOV para MP3 no iPhone: tire o som dos vídeos da câmera',
        description: 'Os vídeos gravados com o iPhone são MOV. Converta em MP3 direto no celular: escolha o clipe, corte e toque em «Extrair áudio». Grátis e offline.',
        h1: 'Como converter vídeo MOV para MP3 no iPhone',
        answer: `Todo vídeo gravado com a câmera do iPhone é um arquivo MOV. Para converter MOV em MP3, abra o clipe em Fotos, toque em Compartilhar, escolha o ${APP}, corte se precisar e toque em «Extrair áudio». O MP3 fica salvo no seu iPhone, sem computador.`,
        intro: '<p>MOV é o formato de vídeo da Apple e o que a sua câmera usa: shows, discursos, um amigo no violão, uma voz que você quer guardar. Em MP3, você ouve em qualquer lugar.</p>',
        steps: [STEP.share, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Para que serve converter MOV em MP3',
                html: `<ul>
<li>Guardar o som de um show ou apresentação que você filmou.</li>
<li>Guardar um discurso ou brinde como lembrança em áudio.</li>
<li>Mandar um ensaio para a banda sem um vídeo enorme.</li>
<li>Ouvir uma <a href="/pt/guides/lecture-video-to-audio-iphone/">aula gravada</a> no caminho.</li>
</ul>`
            },
            {
                h2: 'HEVC, 4K e modo Cinema',
                html: '<p>Vídeos HEVC e 4K são convertidos do mesmo jeito. Só o som é processado, então até MOVs enormes viram arquivos de áudio pequenos.</p>'
            },
            {
                h2: 'Por que não no computador?',
                html: '<p>Passar um MOV de vários gigas para o computador só para tirar o som demora mais do que converter no iPhone. O app faz isso onde o vídeo já está.</p>'
            }
        ],
        faq: [
            { q: 'Em que formato o iPhone grava vídeo?', a: 'A câmera do iPhone grava arquivos MOV, normalmente com vídeo HEVC ou H.264 e áudio AAC.' },
            { q: 'Perde qualidade ao converter MOV em MP3?', a: 'O app mantém a qualidade da gravação original: o MP3 soa igual ao vídeo na reprodução.' },
            { q: 'Posso converter MOV em M4A?', a: 'Sim, escolha o formato M4A. É uma boa opção para toques e apps da Apple.' }
        ],
        related: ['mp4-to-mp3-iphone', 'convert-video-to-mp3-iphone', 'save-music-from-video-iphone'],
        card: { title: 'MOV para MP3', text: 'Vídeos da câmera transformados em áudio.' }
    }
);

guides.push(
    {
        slug: 'video-to-m4a-iphone',
        keyword: 'converter vídeo em m4a iphone',
        eyebrow: 'Vídeo em M4A',
        title: 'Converter vídeo em M4A no iPhone — MP4 e MOV para M4A',
        description: 'Salve o áudio dos seus vídeos em M4A para toques, GarageBand e apps da Apple. Grátis, no aparelho e com corte. De MP4 ou MOV para M4A em 4 toques.',
        h1: 'Como converter vídeo em M4A no iPhone',
        answer: `Para converter um vídeo em M4A no iPhone, envie de Fotos ou Arquivos pelo Compartilhar para o ${APP}, corte se quiser, toque em «Extrair áudio» e escolha M4A. Você recebe um arquivo M4A (AAC) que funciona no GarageBand, iMovie, players de áudio e como toque.`,
        intro: '<p>M4A é o formato de áudio da Apple. Com qualidade parecida, é mais leve que o MP3 — e é justamente o formato que o iPhone espera para toques e projetos do GarageBand.</p>',
        steps: [STEP.share, STEP.trim, { name: 'Extraia em M4A', text: 'Toque em «Extrair áudio» e escolha M4A.', image: 2 }, STEP.save],
        sections: [
            {
                h2: 'M4A ou MP3: quando escolher M4A',
                html: `<table class="guide-table"><thead><tr><th></th><th>M4A (AAC)</th><th>MP3</th></tr></thead><tbody>
<tr><td>Ideal para</td><td>iPhone, Mac, toques, GarageBand</td><td>Todo o resto: Windows, Android, carro</td></tr>
<tr><td>Tamanho</td><td>Menor com a mesma qualidade</td><td>Um pouco maior</td></tr>
<tr><td>Compatibilidade</td><td>Muito boa</td><td>Universal</td></tr>
</tbody></table>`
            },
            {
                h2: 'Use o M4A como toque',
                html: '<p>No iOS 26, um M4A com menos de 30 segundos pode virar toque direto pelo Arquivos. Guia completo: <a href="/pt/guides/video-to-ringtone-iphone/">fazer um toque com um vídeo</a>.</p>'
            },
            {
                h2: 'Abra no GarageBand ou iMovie',
                html: '<p>Salve o M4A em Arquivos e importe pelo navegador de arquivos do GarageBand ou do iMovie como trilha, narração ou efeito sonoro.</p>'
            }
        ],
        faq: [
            { q: 'M4A é melhor que MP3?', a: 'Com a mesma taxa de bits, o M4A (AAC) geralmente soa igual ou melhor e ocupa menos espaço. O MP3 é compatível com mais aparelhos.' },
            { q: 'Dá para gerar M4A com o Atalhos?', a: 'Sim, a ação «Codificar Mídia» com «Somente Áudio» gera um M4A. Mas ela não corta nem exporta MP3 — o app faz as duas coisas.' },
            { q: 'Converter para M4A é grátis?', a: `Sim, a extração básica do ${APP} é grátis, incluindo exportar em M4A.` }
        ],
        related: ['video-to-ringtone-iphone', 'convert-video-to-mp3-iphone', 'extract-audio-without-app-iphone'],
        card: { title: 'Vídeo em M4A', text: 'O formato da Apple para toques e GarageBand.' }
    },
    {
        slug: 'extract-audio-without-app-iphone',
        keyword: 'extrair áudio de vídeo no iphone sem app',
        eyebrow: 'Atalhos ou app',
        title: 'Extrair áudio de vídeo no iPhone sem app (com Atalhos)',
        description: 'Dá para extrair o áudio no iPhone sem instalar nada, com o Atalhos e «Codificar Mídia». Configuração completa, limites (só M4A) e um jeito mais rápido.',
        h1: 'Como extrair o áudio de um vídeo no iPhone sem app',
        answer: 'Sem app extra, o caminho é um atalho: adicione a ação «Codificar Mídia», ative «Somente Áudio», adicione «Salvar Arquivo» e ative «Mostrar na Folha de Compartilhamento». Depois compartilhe o vídeo com o atalho. Ele só exporta M4A e não corta — para MP3 ou trechos curtos, um app é mais rápido.',
        intro: '<p>O app gratuito Atalhos, da Apple, consegue separar o som de um vídeo. A configuração leva uns dois minutos. Aqui está a receita exata — e os limites dela.</p>',
        steps: [
            { name: 'Crie um novo atalho', text: 'Abra o Atalhos, toque em + e dê o nome «Áudio do vídeo».', image: 2 },
            { name: 'Adicione «Codificar Mídia»', text: 'Toque em «Adicionar Ação», busque «Codificar Mídia», adicione, expanda as opções e ative «Somente Áudio».', image: 2 },
            { name: 'Adicione «Salvar Arquivo»', text: 'Adicione a ação «Salvar Arquivo» para que o resultado vá para o Arquivos.', image: 4 },
            { name: 'Mostre no Compartilhar', text: 'Abra os ajustes do atalho (ícone i), ative «Mostrar na Folha de Compartilhamento» e permita «Mídia». Agora compartilhe um vídeo de Fotos e escolha o atalho.', image: 4 }
        ],
        sections: [
            {
                h2: 'Limites do método com Atalhos',
                html: `<ul>
<li><strong>Só M4A</strong> — sem MP3.</li>
<li><strong>Sem corte</strong> — sempre salva a faixa inteira.</li>
<li><strong>Sem biblioteca</strong> — os arquivos vão para o Arquivos e você precisa encontrar e renomear na mão.</li>
<li>Com vídeos longos, o atalho pode parar sem um erro claro.</li>
</ul>`
            },
            {
                h2: 'A alternativa em um toque',
                html: `<p>O ${APP} faz a mesma coisa com corte, MP3 ou M4A e uma biblioteca com tudo o que você extraiu. Ele também está no menu Compartilhar, então é igualmente rápido — e não há nada para configurar.</p>`
            },
            {
                h2: 'Outras opções sem app',
                html: '<p>O iMovie e o GarageBand também separam o som, mas com mais passos e formatos de exportação limitados. Sites funcionam, mas é preciso subir o vídeo — veja <a href="/pt/guides/extract-audio-online-vs-app/">online ou app</a>.</p>'
            }
        ],
        faq: [
            { q: 'O iPhone tem um extrator de áudio nativo?', a: 'Não como botão no Fotos. O mais próximo é a ação «Codificar Mídia» com «Somente Áudio» no app Atalhos.' },
            { q: 'Em que formato o atalho salva?', a: 'Em M4A. Com o Atalhos não dá para salvar em MP3.' },
            { q: 'O atalho consegue cortar o áudio?', a: `Não de um jeito prático. Para cortar, use um app com linha do tempo como o ${APP}.` }
        ],
        related: ['extract-audio-from-video-iphone', 'extract-audio-online-vs-app', 'video-to-m4a-iphone'],
        card: { title: 'Sem app (Atalhos)', text: 'A receita grátis do Atalhos e os limites.' }
    },
    {
        slug: 'extract-audio-online-vs-app',
        keyword: 'extrair áudio de vídeo online grátis',
        eyebrow: 'Online ou app',
        title: 'Extrair áudio de vídeo online grátis ou com app no iPhone',
        description: 'Extrair áudio de vídeo online ou com um app? Compare privacidade, velocidade, limites e corte no iPhone — e veja por que no celular o app vence.',
        h1: 'Extrair áudio de vídeo online (grátis) ou com um app de iPhone',
        answer: `Sites online funcionam em qualquer aparelho, mas exigem subir o vídeo inteiro, esperar e baixar o resultado — lento no 4G/5G e pouco privado. No iPhone, um app como o ${APP} é mais rápido, funciona offline, mantém os vídeos no aparelho e corta antes de exportar.`,
        intro: '<p>Quem busca «extrair áudio de vídeo online grátis» encontra dezenas de sites. No notebook com internet boa, eles quebram um galho. No iPhone, a conta é outra.</p>',
        steps: [STEP.share, STEP.trim, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Comparação',
                html: `<table class="guide-table"><thead><tr><th></th><th>Site online</th><th>${APP}</th></tr></thead><tbody>
<tr><td>Privacidade</td><td>Vídeo enviado para servidor de terceiros</td><td>Fica no iPhone</td></tr>
<tr><td>Velocidade</td><td>Upload + fila + download</td><td>Segundos, no aparelho</td></tr>
<tr><td>Offline</td><td>Não</td><td>Sim</td></tr>
<tr><td>Limite de tamanho</td><td>Comum nos planos grátis</td><td>Só o armazenamento</td></tr>
<tr><td>Corte</td><td>Às vezes</td><td>Linha do tempo integrada</td></tr>
<tr><td>Anúncios e pop-ups</td><td>Frequentes</td><td>Sem pop-ups de site</td></tr>
<tr><td>Preço</td><td>Grátis com limites</td><td>Recursos básicos grátis</td></tr>
</tbody></table>`
            },
            {
                h2: 'Quando um site online faz sentido',
                html: '<p>Se você está num PC com Windows e o vídeo já está lá, um site confiável resolve. Mas não suba nada pessoal: vídeos de família, reuniões ou material de clientes.</p>'
            },
            {
                h2: 'Quando o app é melhor',
                html: '<p>Se o vídeo está no seu iPhone, o app ganha: nada de subir o vídeo pelos dados móveis, sem espera, sem download, e você corta exatamente o trecho que precisa.</p>'
            }
        ],
        faq: [
            { q: 'É seguro extrair áudio de vídeo online?', a: 'Depende do site. O vídeo vai parar num servidor de terceiros, então evite com conteúdo pessoal. Apps que trabalham no aparelho não enviam nada.' },
            { q: 'Tem um jeito grátis no iPhone sem subir o vídeo?', a: `Sim. O ${APP} é grátis para começar e converte no aparelho — o vídeo nunca é enviado.` },
            { q: 'Por que converter online é tão lento no celular?', a: 'Porque primeiro é preciso subir o vídeo inteiro. Vídeos do celular são pesados e o upload nos dados móveis costuma ser bem mais lento que o download.' }
        ],
        related: ['extract-audio-from-video-iphone', 'extract-audio-without-app-iphone', 'mp4-to-mp3-iphone'],
        card: { title: 'Online ou app', text: 'Privacidade, velocidade e limites comparados.' }
    },
    {
        slug: 'save-music-from-video-iphone',
        keyword: 'tirar música de um vídeo no iphone',
        eyebrow: 'Música',
        title: 'Como tirar a música de um vídeo no iPhone (MP3 ou M4A)',
        description: 'Salve a música ou a trilha de fundo de um vídeo no iPhone em MP3 ou M4A. Corte certinho na música, ouça offline e compartilhe onde quiser. Guia rápido.',
        h1: 'Como tirar a música de um vídeo no iPhone',
        answer: `Para tirar a música de um vídeo no iPhone, abra o vídeo em Fotos, toque em Compartilhar, escolha o ${APP}, posicione os marcadores de corte em volta da música e toque em «Extrair áudio». A música é salva em MP3 ou M4A para ouvir offline no Arquivos ou compartilhar com qualquer app.`,
        intro: '<p>A música do casamento, o cover de um amigo, a trilha da sua própria edição — às vezes o mais importante do vídeo é o som. Veja como salvar como arquivo de música separado.</p>',
        steps: [STEP.share, { name: 'Corte em volta da música', text: 'Toque em «Cortar vídeo» e arraste os marcadores amarelos para ficar só a música. Ouça o começo e o fim.', image: 3 }, STEP.extract, STEP.save],
        sections: [
            {
                h2: 'Dicas para o melhor som',
                html: `<ul>
<li>Corte conversas e aplausos no começo e no fim.</li>
<li>MP3 para o som do carro e players antigos; M4A para aparelhos Apple.</li>
<li>Renomeie o arquivo no Arquivos (toque e segure → Renomear) para achar depois.</li>
</ul>`
            },
            {
                h2: 'Sobre direitos autorais',
                html: '<p>Salve música só dos seus vídeos ou daqueles sobre os quais você tem direitos. Músicas comerciais são protegidas: uma cópia pessoal da sua gravação tudo bem; republicar música de outra pessoa, não.</p>'
            },
            {
                h2: 'Use como toque',
                html: '<p>Achou seus 30 segundos favoritos? <a href="/pt/guides/video-to-ringtone-iphone/">Transforme em toque</a>.</p>'
            }
        ],
        faq: [
            { q: 'Como pego a música de um vídeo no meu iPhone?', a: `Envie o vídeo para o ${APP}, corte em volta da música e toque em «Extrair áudio». A música é salva como arquivo de áudio.` },
            { q: 'Dá para adicionar a música ao Apple Music?', a: 'O app Música do iPhone não importa arquivos locais diretamente. Guarde o arquivo no Arquivos ou sincronize a partir de um Mac ou PC.' },
            { q: 'Funciona com vídeos do WhatsApp ou do Mensagens?', a: 'Sim. Salve o vídeo em Fotos ou Arquivos primeiro e depois extraia o áudio.' }
        ],
        related: ['trim-audio-from-video-iphone', 'video-to-ringtone-iphone', 'mov-to-mp3-iphone'],
        card: { title: 'Tirar música de um vídeo', text: 'Fique com a música, sem a imagem.' }
    }
);

guides.push(
    {
        slug: 'trim-audio-from-video-iphone',
        keyword: 'cortar áudio de vídeo no iphone',
        eyebrow: 'Corte',
        title: 'Extrair só uma parte do áudio de um vídeo no iPhone',
        description: 'Precisa de só 10 segundos de som? Corte o vídeo no iPhone e extraia só esse trecho em MP3 ou M4A. Arraste os marcadores, ouça e exporte. Grátis.',
        h1: 'Como extrair só uma parte do áudio de um vídeo no iPhone',
        answer: `Para extrair só uma parte do áudio de um vídeo no iPhone, abra no ${APP}, toque em «Cortar vídeo», arraste os marcadores amarelos de início e fim em volta do trecho, toque em «Salvar» e depois em «Extrair áudio». Só a parte selecionada é exportada, em MP3 ou M4A.`,
        intro: '<p>Quase nunca você precisa da faixa inteira: só uma frase, um refrão ou um efeito sonoro. Cortando antes, você fica com um arquivo pequeno e limpo.</p>',
        steps: [
            STEP.open,
            { name: 'Toque em «Cortar vídeo»', text: 'Na tela de extração, toque em «Cortar vídeo» para abrir a linha do tempo.', image: 2 },
            { name: 'Arraste os marcadores', text: 'Leve o marcador amarelo da esquerda até o início e o da direita até o fim. Os tempos mostram a seleção exata. Ouça e toque em «Salvar».', image: 3 },
            { name: 'Extraia e salve o trecho', text: 'Toque em «Extrair áudio». Só a parte cortada é exportada — compartilhe ou salve em Arquivos.', image: 4 }
        ],
        sections: [
            {
                h2: 'Dicas para um corte preciso',
                html: `<ul>
<li>Deixe meio segundo antes e depois da fala para não cortar palavras.</li>
<li>Para toque, selecione no máximo 30 segundos.</li>
<li>Vários trechos do mesmo vídeo? Repita o corte para cada um — tudo fica na biblioteca.</li>
</ul>`
            },
            {
                h2: 'O que mais se corta',
                html: '<p>Uma frase de um discurso, o refrão de uma música, um efeito para uma edição, as primeiras palavras do seu filho ou aquele minuto importante de uma reunião longa.</p>'
            }
        ],
        faq: [
            { q: 'Dá para cortar o áudio de um vídeo no iPhone?', a: `Sim. Corte o vídeo no trecho que você precisa no ${APP} e extraia — só essa parte é salva como áudio.` },
            { q: 'Cortar altera o vídeo original?', a: 'Não. O original em Fotos continua intacto; só o áudio exportado é cortado.' },
            { q: 'Posso tirar várias partes do mesmo vídeo?', a: 'Sim. Corte e extraia de novo para cada parte.' }
        ],
        related: ['video-to-ringtone-iphone', 'save-music-from-video-iphone', 'extract-audio-from-video-iphone'],
        card: { title: 'Extrair só uma parte', text: 'Corte no segundo exato.' }
    },
    {
        slug: 'screen-recording-to-audio-iphone',
        keyword: 'tirar áudio de gravação de tela iphone',
        eyebrow: 'Gravação de tela',
        title: 'Como tirar o áudio de uma gravação de tela no iPhone',
        description: 'Transforme uma gravação de tela do iPhone em arquivo MP3 ou M4A. Entenda por que ela ficou muda, corte o trecho certo e salve o som. Passos simples.',
        h1: 'Como tirar o áudio de uma gravação de tela no iPhone',
        answer: `As gravações de tela do iPhone ficam salvas como vídeos em Fotos. Para tirar o áudio, abra a gravação, toque em Compartilhar, escolha o ${APP}, corte se precisar e toque em «Extrair áudio». Se o arquivo sair mudo, a gravação não captou som: ative o microfone antes de gravar.`,
        intro: '<p>Gravar a tela é um jeito comum de guardar um áudio de mensagem, uma ligação no viva-voz ou um trecho de um app. Veja como ficar só com o som.</p>',
        steps: [
            { name: 'Ache a gravação em Fotos', text: 'As gravações de tela ficam em Fotos → «Tipos de Mídia» → «Gravações de Tela».', image: 2 },
            { name: 'Envie para o app', text: 'Abra a gravação, toque em Compartilhar e escolha o app.', image: 2 },
            STEP.trim,
            { name: 'Extraia e salve', text: 'Toque em «Extrair áudio» e salve o MP3 ou M4A em Arquivos.', image: 4 }
        ],
        sections: [
            {
                h2: 'Por que minha gravação de tela ficou sem som?',
                html: `<ul>
<li><strong>Microfone desligado:</strong> na Central de Controle, toque e segure o botão de Gravação de Tela e ative «Microfone» para gravar sua voz.</li>
<li><strong>Modo silencioso:</strong> alguns apps ficam sem som no modo silencioso.</li>
<li><strong>Conteúdo protegido:</strong> muitos apps de streaming bloqueiam o som em gravações de tela — é proposital e não dá para contornar.</li>
</ul>`
            },
            {
                h2: 'Respeite a privacidade',
                html: '<p>Grave e guarde ligações ou conversas só com o consentimento de todos os participantes e respeitando a lei do seu país.</p>'
            }
        ],
        faq: [
            { q: 'Dá para converter gravação de tela em MP3?', a: 'Sim. Gravações de tela são vídeos comuns, então o áudio delas pode ser salvo em MP3 ou M4A.' },
            { q: 'Onde o iPhone salva as gravações de tela?', a: 'No app Fotos, em «Tipos de Mídia» → «Gravações de Tela».' },
            { q: 'Por que não dá para ouvir nada na minha gravação de tela?', a: 'O microfone estava desligado ou o app gravado bloqueia o som. Confira se a gravação tem som antes de extrair.' }
        ],
        related: ['extract-audio-from-video-iphone', 'trim-audio-from-video-iphone', 'lecture-video-to-audio-iphone'],
        card: { title: 'Áudio de gravação de tela', text: 'Salve o som e entenda por que ele sumiu.' }
    },
    {
        slug: 'lecture-video-to-audio-iphone',
        keyword: 'transformar videoaula em áudio',
        eyebrow: 'Estudos',
        title: 'Como transformar videoaula em áudio no iPhone (MP3)',
        description: 'Transforme aulas gravadas, webinars e palestras em MP3 no iPhone e estude em qualquer lugar. Arquivos leves, escuta offline e fácil de compartilhar.',
        h1: 'Como transformar uma videoaula em áudio no iPhone',
        answer: `Para transformar uma videoaula em áudio, abra a gravação em Fotos ou Arquivos, toque em Compartilhar, escolha o ${APP} e toque em «Extrair áudio». Salve o MP3 em Arquivos e ouça offline — no ônibus, na academia ou com a tela desligada — ocupando uma fração do espaço.`,
        intro: '<p>Numa aula, o que importa é o que é dito, não o que aparece. Em áudio, a aula vira um podcast para ouvir de novo onde você quiser.</p>',
        steps: [
            STEP.share,
            { name: 'Tire a espera e as pausas (opcional)', text: 'Toque em «Cortar vídeo» para tirar a espera antes do início e as perguntas que você não precisa.', image: 3 },
            STEP.extract,
            { name: 'Salve numa pasta de aulas', text: 'Toque em Compartilhar → Salvar em Arquivos e crie uma pasta por matéria para achar tudo rápido.', image: 4 }
        ],
        sections: [
            {
                h2: 'Por que estudar com áudio',
                html: `<ul>
<li><strong>Arquivos leves:</strong> uma hora de áudio ocupa uma fração de uma hora de vídeo.</li>
<li><strong>Tela desligada:</strong> ouça com o celular bloqueado e economize bateria.</li>
<li><strong>Em qualquer lugar:</strong> ônibus, caminhada, academia — sem Wi-Fi.</li>
</ul>`
            },
            {
                h2: 'Transforme em anotações',
                html: '<p>Quer texto? Importe o áudio no app de transcrição que você já usa e pesquise na transcrição depois.</p>'
            },
            {
                h2: 'Confira as regras',
                html: '<p>Muitas faculdades permitem gravar para uso pessoal, mas não compartilhar. Confira as regras da sua disciplina antes de gravar ou compartilhar uma aula.</p>'
            }
        ],
        faq: [
            { q: 'Dá para ouvir um vídeo no iPhone com a tela desligada?', a: 'A maioria dos players de vídeo pausa ao bloquear a tela. Convertido em MP3, dá para ouvir com a tela desligada no Arquivos ou em qualquer player de áudio.' },
            { q: 'Funciona com uma aula de uma hora?', a: 'Sim. Gravações longas funcionam do mesmo jeito, só demoram um pouco mais.' },
            { q: 'Posso converter gravações do Zoom ou de webinars?', a: 'Sim, assim que a gravação MP4 estiver em Fotos ou Arquivos no seu iPhone.' }
        ],
        related: ['screen-recording-to-audio-iphone', 'mp4-to-mp3-iphone', 'extract-audio-from-video-iphone'],
        card: { title: 'Videoaula em áudio', text: 'Estude em qualquer lugar com MP3 leves.' }
    },
    {
        slug: 'video-to-ringtone-iphone',
        keyword: 'como fazer toque com vídeo no iphone',
        eyebrow: 'Toques',
        title: 'Como fazer um toque com um vídeo no iPhone (iOS 26)',
        description: 'Transforme um vídeo em toque do iPhone: corte o áudio em 30 s, salve em Arquivos e toque em Compartilhar → «Usar como Toque». iOS 26, com GarageBand no iOS 18.',
        h1: 'Como fazer um toque com um vídeo no iPhone',
        answer: `Para fazer um toque com um vídeo, abra no ${APP}, corte em no máximo 30 segundos, extraia em M4A ou MP3 e salve em Arquivos. No iOS 26, toque e segure o arquivo no Arquivos, toque em Compartilhar e escolha «Usar como Toque». Em versões anteriores do iOS, importe o áudio no GarageBand e exporte como toque.`,
        intro: '<p>Uma risada, uma música de festa, o latido do seu cachorro — qualquer som dos seus vídeos pode virar toque. Com o iOS 26 ficou fácil, é só ter o arquivo de áudio.</p>',
        steps: [
            STEP.share,
            { name: 'Corte em 30 segundos', text: 'Toque em «Cortar vídeo» e selecione no máximo 30 segundos — o limite para toques.', image: 3 },
            { name: 'Extraia e salve em Arquivos', text: 'Toque em «Extrair áudio» (M4A ou MP3) e depois em Compartilhar → Salvar em Arquivos.', image: 4 },
            { name: 'Usar como Toque', text: 'No Arquivos, toque e segure o áudio, toque em Compartilhar → «Usar como Toque» (iOS 26). Confira em Ajustes → Sons e Tátil → Toque.', image: 4 }
        ],
        sections: [
            {
                h2: 'No iOS 18: o método com GarageBand',
                html: `<ol>
<li>Extraia e corte o áudio como acima e salve em Arquivos.</li>
<li>Abra o GarageBand, crie um projeto com o «Gravador de Áudio» e mude para a visualização de faixas.</li>
<li>Abra o navegador de loops → «Arquivos» → «Explorar itens do app Arquivos» e arraste o áudio para uma faixa.</li>
<li>Volte para «Minhas Músicas», toque e segure o projeto → Compartilhar → Toque → Exportar.</li>
</ol>`
            },
            {
                h2: 'Por que «Usar como Toque» não aparece',
                html: `<ul>
<li>O arquivo tem mais de 30 segundos — corte de novo.</li>
<li>O arquivo não é MP3 nem M4A.</li>
<li>Seu iPhone ainda não tem iOS 26 — use o GarageBand.</li>
</ul>`
            }
        ],
        faq: [
            { q: 'Quanto tempo pode ter um toque de iPhone?', a: 'Até 30 segundos para toques personalizados criados a partir de arquivos de áudio.' },
            { q: 'Qual formato um toque de iPhone precisa?', a: 'No iOS 26, arquivos MP3 ou M4A com menos de 30 segundos podem ser definidos com «Usar como Toque».' },
            { q: 'Posso usar um vídeo direto como toque?', a: 'Não. Primeiro extraia o áudio do vídeo e depois defina o arquivo de áudio como toque.' }
        ],
        related: ['trim-audio-from-video-iphone', 'video-to-m4a-iphone', 'save-music-from-video-iphone'],
        card: { title: 'Toque com um vídeo', text: '«Usar como Toque» no iOS 26, em 4 passos.' }
    }
);
