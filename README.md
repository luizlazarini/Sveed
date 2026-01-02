# SVEED - Site Institucional

## 📋 Visão Geral do Projeto

Site institucional para o **SVEED** (Verificação de Rotinas de Uso na Educação) — um programa de computador de infraestrutura técnica voltada à governança pública para verificação de execução mínima de uso na educação em dispositivos Android 7+ com 1.5GB RAM+, utilizados no âmbito de políticas públicas de educação.

O SVEED **não é EdTech**, não é IA educacional, não ensina, não avalia e não coleta dados pessoais.

---

## 🎯 Público-Alvo

O site foi desenvolvido para ser compreendido por:

- **Secretários de Estado**
- **Diretorias de Operadoras de Telecomunicações** (Claro, Vivo, TIM)
- **Órgãos de Controle** (TCU, controladorias)
- **Gestores Públicos**

---

## ✅ Funcionalidades Implementadas

### 0. **Branding e Identidade Visual** 🎨
- Logo oficial SVEED integrada ao header (gorila tech com elementos de circuito)
- Favicon personalizado com a logo
- Logo também presente no footer
- Design responsivo da logo para todos os tamanhos de tela
- Box-shadow e bordas arredondadas para destaque visual
- Hover effects sutis e profissionais

### 0.1. **Ajustes de Redução de Risco Semântico** 🛡️
- Terminologia ajustada: "Verificação de Rotinas" (removido "Sustentação")
- Clareza jurídica na Acessibilidade Operacional ("estritamente operacional, não pedagógica")
- Dashboard identificado como demonstrativo com dados simulados
- Métrica renomeada: "Sessões com Ciclo Encerrado" (evita interpretação pedagógica)
- Reforço de neutralidade: "O SVEED não induz, orienta ou interfere na prática pedagógica"
- CTA com disclaimer: "Documento técnico-institucional, sem caráter comercial ou pedagógico"
- Rodapé com blindagem final de escopo

### 1. **Hero Section**
- Apresentação institucional do SVEED
- Call-to-Action para solicitar Nota Técnica de Viabilidade
- Design com gradiente azul marinho institucional

### 2. **O Desafio da Evidência**
- Três cards explicativos sobre:
  - Entrega física vs. uso efetivo
  - Desafio de comprovação operacional
  - Risco de ociosidade e questionamento
- Iconografia profissional usando Font Awesome

### 3. **O Que É o SVEED**
- Definição técnica do programa
- Natureza funcional e características técnicas
- Destaque para operação offline, compatibilidade com hardware legado
- Lista de características técnicas com ícones

### 4. **Dinâmica Operacional na Prática** 🔄
- **Nova seção** que explica o funcionamento do SVEED no dia a dia
- **Subtítulo**: Respeito à rotina da escola e da família
- **Contexto claro**: Autonomia total durante horário de aula, finais de semana, feriados e férias
- **Fluxo em 5 etapas** (cards numerados):
  1. **Orientação Inicial por Áudio**: Explicação humanizada sem necessidade de leitura
  2. **Bloco de Reforço**: Tempo de exposição sem avaliação ou pressão
  3. **Pausa Obrigatória**: Saúde digital (hidratação e alongamento)
  4. **Bloco de Execução**: Verificação de interação funcional, sem notas
  5. **Encerramento e Liberação**: Dispositivo totalmente livre até o dia seguinte
- **Nota de rodapé**: Priorização de saúde digital e engajamento positivo
- **Design**: Cards com números, ícones Font Awesome e hover effects

### 5. **Pilares Tecnológicos**
- Três pilares principais em cards:
  - **Precisão Temporal**: Relógio monotônico
  - **Privacidade por Design**: Conformidade LGPD nativa
  - **Acessibilidade Operacional**: Interface simplificada
- Hover effects para interatividade sutil

### 6. **Dashboard Público Interativo** ⭐
- **Disclaimer obrigatório** sobre dados agregados
- **Filtros dinâmicos**:
  - Período: Último Mês / Trimestre / Semestre
  - Região: Todas / Zona Urbana / Zona Rural / Zona Norte / Zona Sul
- **Métricas principais**:
  - Tempo médio diário
  - Sessões concluídas (%)
  - Total de sessões
- **Gráficos interativos** (Chart.js):
  - Distribuição por área de conhecimento (gráfico de rosca com **NOME + PORCENTAGEM visíveis diretamente**: "Português 29%", "Matemática 27%")
  - Evolução temporal de execução (gráfico de linha)
- **Dados placeholder realistas** do 1º semestre de 2025
- **Nota técnica** reforçando ausência de dados individuais

### 7. **Para Operadoras e Integradores**
- Quatro benefícios principais:
  - Redução de risco contratual
  - Evidência objetiva de uso
  - Proteção reputacional
  - Integração técnica
- Aviso sobre escopo complementar do SVEED

### 8. **Conformidade e Natureza Jurídica**
- Destaque visual para natureza técnica do SVEED
- Seis itens de conformidade:
  - Registro INPI
  - Arquitetura determinística
  - Operação offline
  - Conformidade LGPD
  - Dados agregados
  - Auditabilidade
- Escopo de atuação detalhado

### 8. **Footer Institucional**
- Navegação completa do site
- Informações de contato
- Texto institucional padrão
- Design escuro (azul marinho) para contraste

### 9. **Modal de Contato**
- Formulário completo para solicitação de Nota Técnica
- Campos: Nome, Cargo, Instituição, Email, Telefone, Mensagem
- Animação de abertura/fechamento suave
- Mensagem de sucesso após envio
- Pode ser fechado com ESC ou clique fora

---

## 🎨 Design e Identidade Visual

### Paleta de Cores
- **Azul Marinho** (#0A2342): Cor primária institucional
- **Cinza Chumbo** (#4A5568): Cor secundária para textos
- **Branco** (#FFFFFF): Fundo principal
- **Laranja Âmbar** (#ED8936): Apenas para alertas neutros (disclaimer)
- **Verde Neutro** (#48BB78): Indicadores positivos

### Tipografia
- **Fonte principal**: Inter (Google Fonts)
- Peso variável: 300-700
- Sans-serif institucional e moderna
- Excelente legibilidade

### Estilo Visual
✅ **Utilizado:**
- **Logo oficial SVEED** com gorila tech em destaque
- Design corporativo e institucional
- Iconografia técnica (Font Awesome)
- Gráficos de dados profissionais
- Paleta sóbria e neutra
- Hover effects sutis e profissionais

❌ **Evitado:**
- Imagens de crianças
- Linguagem emocional
- Gamificação
- Estética "startup educacional"
- Promessas pedagógicas

---

## 📂 Estrutura de Arquivos

```
/
├── index.html              # Página principal (PT/EN/ES via JS)
├── css/
│   └── style.css           # Estilos principais (28KB)
├── js/
│   ├── i18n.js            # Sistema de traduções (14KB) 🌍
│   ├── main.js            # Dashboard e interatividade (18KB)
│   └── translations.js    # (legado - não usado)
├── images/
│   └── logo-sveed.jpg     # Logo oficial SVEED (64KB)
├── AJUSTES-FINAIS.md      # Documentação de ajustes v3.0
└── README.md              # Este arquivo
```

### Arquivos Multi-idioma:
- **`js/i18n.js`**: Sistema completo de tradução PT/EN/ES
- **Bandeiras**: Via CDN [flagcdn.com](https://flagcdn.com/w20/) (20px width)
- **localStorage**: Salva preferência em `sveed-language`


---

## 🔧 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos modernos com variáveis CSS
- **JavaScript (ES6+)**: Interatividade e manipulação de dados
- **Chart.js** (CDN): Gráficos profissionais e responsivos
- **Font Awesome** (CDN): Iconografia institucional
- **Google Fonts** (CDN): Tipografia Inter

---

## 📊 Funcionalidade do Dashboard

### Dados Implementados

O dashboard contém **dados placeholder realistas** para demonstração, organizados por:

**Períodos:**
- Último Mês (4 semanas)
- Último Trimestre (3 meses)
- 1º Semestre 2025 (6 meses)

**Regiões:**
- Todas as Regiões
- Zona Urbana
- Zona Rural
- Zona Norte
- Zona Sul

### Métricas Exibidas

1. **Tempo Médio Diário**: 31-47 minutos (varia por região/período)
2. **Sessões com Ciclo Encerrado**: 63-83% (varia por região/período)
3. **Total de Sessões**: 12.779 - 247.658 (varia por região/período)

### Áreas de Conhecimento

- Português: 26-31%
- Matemática: 24-29%
- Ciências: 17-20%
- História: 12-17%
- Outras: 10-16%

### Interatividade

- **Filtros em tempo real**: Ao alterar período ou região, todos os gráficos e métricas são atualizados instantaneamente
- **Gráficos responsivos**: Ajustam-se automaticamente ao tamanho da tela
- **Hover effects**: Tooltips informativos nos gráficos

---

## 🔒 Privacidade e Conformidade

### Princípios Implementados

✅ **Apenas dados agregados**  
✅ **Impossibilidade técnica de identificação individual**  
✅ **Disclaimer obrigatório em destaque**  
✅ **Nota técnica sobre escopo de atuação**  
✅ **Linguagem defensiva e técnica**

### Avisos Presentes

1. **Dashboard demo note**: "Painel demonstrativo com dados simulados, apresentado exclusivamente para visualização técnica de indicadores agregados de execução."

2. **Dashboard disclaimer**: "Este painel apresenta exclusivamente indicadores agregados de execução de política pública. Não contém dados pessoais, individuais ou identificáveis."

3. **Nota técnica**: "Os indicadores apresentados referem-se exclusivamente a dados agregados de execução operacional. Não representam avaliação de qualidade pedagógica, desempenho individual ou eficácia de conteúdos."

4. **Conformidade highlight**: "O SVEED é infraestrutura técnica de verificação, não plataforma educacional."

5. **Escopo do SVEED**: "O SVEED não induz, orienta ou interfere na prática pedagógica, limitando-se à verificação técnica da execução operacional."

6. **CTA disclaimer**: "Documento técnico-institucional, sem caráter comercial ou pedagógico."

7. **Footer blindagem**: "O SVEED não realiza avaliação educacional, acompanhamento individual, inferência de aprendizagem ou coleta de dados pessoais."

---

## 📱 Responsividade

O site é completamente responsivo e otimizado para:

- **Desktop** (1200px+): Layout completo com grids de 3 colunas
- **Tablet** (768px-1024px): Layout adaptado com grids de 2 colunas
- **Mobile** (< 768px): Layout em coluna única, navegação adaptada
- **Mobile pequeno** (< 480px): Ajustes adicionais de espaçamento e tipografia

### Breakpoints Principais

- 1024px: Ajuste de gráficos
- 768px: Mudança para layout mobile
- 480px: Otimizações finais para telas pequenas

---

## 🚀 Como Usar

### Visualização Local

1. Baixe todos os arquivos do projeto
2. Abra `index.html` em qualquer navegador moderno
3. Não é necessário servidor local (site estático)
4. **Troca de idioma**: Clique nos botões PT/EN/ES no header

### Multi-idioma

**Como trocar o idioma:**
1. Clique no botão com a bandeira desejada no header
2. O conteúdo é atualizado instantaneamente
3. A preferência é salva automaticamente no navegador

**Idiomas disponíveis:**
- 🇧🇷 **PT** - Português (Brasil)
- 🇺🇸 **EN** - English (United States)
- 🇪🇸 **ES** - Español (España)

**Persistência:**
- A escolha do idioma é salva em `localStorage`
- Ao retornar ao site, o idioma escolhido é mantido
- Para resetar: limpar cache/localStorage do navegador

### Deploy

Para publicar o site:

1. Vá até a **aba Publish** na interface
2. Clique em **Publicar Projeto**
3. Aguarde a geração do link público
4. Compartilhe o link com stakeholders

---

## 🎯 Pontos de Entrada (URIs)

### Navegação Principal

- `/` ou `/index.html` - Página principal
- `#desafio` - Seção O Desafio da Evidência
- `#sobre` - Seção O Que É o SVEED
- `#pilares` - Seção Pilares Tecnológicos
- `#dashboard` - Seção Dashboard Público
- `#operadoras` - Seção Para Operadoras
- `#conformidade` - Seção Conformidade

### Interações

- **Click em CTA buttons**: Abre modal de contato
- **Filtros de dashboard**: Atualiza métricas e gráficos em tempo real
- **Navegação interna**: Smooth scroll para seções

---

## 📝 Linguagem e Tom

### Características da Comunicação

✅ **Utilizado:**
- Tom de consultor técnico sênior
- Frases objetivas e claras
- Linguagem defensiva apropriada
- Terminologia técnica precisa
- Foco em governança e conformidade

❌ **Evitado:**
- Adjetivos motivacionais
- Promessas pedagógicas
- Linguagem emocional
- Termos como "aprendizado", "melhoria de desempenho"
- Rankings ou comparações entre instituições

---

## 🔮 Próximos Passos Recomendados

### Funcionalidades Futuras

1. **Integração com API real**: Substituir dados placeholder por dados reais via endpoint
2. **Exportação de relatórios**: Permitir download de PDFs técnicos do dashboard
3. **Sistema de login institucional**: Para acesso a dados específicos por região/estado
4. **Comparação temporal avançada**: Permitir comparar múltiplos períodos lado a lado
5. **Filtros adicionais**: Por tipo de dispositivo, sistema operacional, etc.
6. **Notificações por email**: Sistema automatizado para respostas às solicitações de nota técnica

### Melhorias de Conteúdo

1. **Estudos de caso**: Adicionar exemplos anônimos de implementação
2. **FAQ técnico**: Seção de perguntas frequentes para gestores
3. **Documentação técnica**: PDFs disponíveis para download
4. **Vídeos institucionais**: Explicações técnicas em formato audiovisual
5. **Glossário**: Termos técnicos explicados

### Otimizações Técnicas

1. **Performance**: Implementar lazy loading para gráficos
2. **PWA**: Transformar em Progressive Web App para acesso offline
3. **Acessibilidade**: Adicionar leitores de tela otimizados
4. **SEO**: Implementar meta tags Open Graph e Twitter Cards
5. **Analytics**: Integrar Google Analytics ou similar (sem PII)

---

## 📞 Solicitação de Contato

O site inclui um formulário institucional para solicitação de:

- Nota Técnica de Viabilidade
- Esclarecimentos técnicos
- Informações sobre integração

**Campos do formulário:**
- Nome completo
- Cargo/Função
- Instituição/Órgão
- E-mail institucional
- Telefone
- Contexto/Objetivo da solicitação

---

## 🛡️ Compliance e Governança

### Conformidade Implementada

- ✅ **LGPD**: Não coleta dados pessoais por design
- ✅ **TCU**: Linguagem apropriada para órgãos de controle
- ✅ **INPI**: Menção ao registro de programa de computador
- ✅ **Transparência**: Dados agregados e auditáveis

### Disclaimers e Avisos

Todos os avisos legais e técnicos necessários estão presentes em:
- Hero section (CTA)
- Dashboard (disclaimer laranja)
- Conformidade (destaque principal)
- Footer (texto institucional)

---

## 🎨 Customização

### Logo SVEED

A logo oficial está localizada em `images/logo-sveed.jpg` e é utilizada em:
- **Header**: Logo de 60px de altura com hover effect
- **Footer**: Logo de 80px de altura 
- **Favicon**: Ícone da aba do navegador

Para substituir a logo, basta substituir o arquivo mantendo o mesmo nome, ou atualizar as referências no HTML.

### Cores CSS (variáveis em `style.css`)

```css
--azul-marinho: #0A2342;
--cinza-chumbo: #4A5568;
--branco: #FFFFFF;
--laranja-ambar: #ED8936;
--verde-neutro: #48BB78;
```

### Dados do Dashboard (`main.js`)

Os dados estão estruturados no objeto `dashboardData` e podem ser facilmente substituídos por dados reais de uma API.

---

## 🛡️ Ajustes de Redução de Risco Semântico (v2.0)

Esta versão implementa **7 ajustes estratégicos** para redução de risco interpretativo:

### 1️⃣ Terminologia Ajustada
**Mudança**: "Verificação e Sustentação" → "Verificação"  
**Localização**: Header, Hero, Footer  
**Motivo**: Evitar leitura de "sustentação" como indução pedagógica

### 2️⃣ Clareza Jurídica na Acessibilidade
**Adição**: Frase final clarificando escopo  
**Localização**: Pilares Tecnológicos → Acessibilidade Operacional  
**Texto**: "A acessibilidade aqui é estritamente operacional, não pedagógica ou curricular."

### 3️⃣ Dashboard Identificado como Demonstrativo
**Adição**: Nota técnica discreta  
**Localização**: Topo do Dashboard  
**Texto**: "Painel demonstrativo com dados simulados..."

### 4️⃣ Renomeação de Métrica
**Mudança**: "Sessões Concluídas" → "Sessões com Ciclo Encerrado"  
**Localização**: Dashboard → Métricas Principais  
**Motivo**: Evitar interpretação pedagógica de "conclusão"

### 5️⃣ Reforço de Neutralidade
**Adição**: Declaração de não-interferência  
**Localização**: Seção "O Que É o SVEED"  
**Texto**: "O SVEED não induz, orienta ou interfere na prática pedagógica..."

### 6️⃣ Disclaimer no CTA
**Adição**: Subtítulo abaixo do botão principal  
**Localização**: Hero Section  
**Texto**: "Documento técnico-institucional, sem caráter comercial ou pedagógico."

### 7️⃣ Blindagem Final no Rodapé
**Adição**: Linha conclusiva de escopo  
**Localização**: Footer  
**Texto**: "O SVEED não realiza avaliação educacional, acompanhamento individual..."

**Resultado**: Linguagem institucional, técnica e neutra, com blindagem jurídica completa.

### 📋 Ajustes Adicionais (v2.1)

**8️⃣ Escopo de Dispositivos Ampliado**  
**Mudança**: Definição de compatibilidade expandida  
**Localização**: Seção "O Que É o SVEED"  
**De**: "dispositivos fornecidos pelo Estado"  
**Para**: "dispositivos Android 7+ utilizados no âmbito de políticas públicas de educação, independentemente do fabricante ou modelo"  
**Motivo**: SVEED aplica-se a políticas públicas, não exclusivamente a hardware público

**9️⃣ Gráfico de Pizza com Valores Visíveis**  
**Melhoria**: Labels com porcentagens diretamente no gráfico e na legenda  
**Localização**: Dashboard → Distribuição por Área de Conhecimento  
**Implementação**: Plugin customizado que exibe valores sobre cada fatia do gráfico  
**Resultado**: Usuário visualiza imediatamente "Português: 29%", "Matemática: 27%" etc. sem necessidade de hover

### 🛡️ Ajustes Finais de Blindagem Jurídica (v3.0)

Esta versão implementa **6 ajustes críticos** para redução de risco interpretativo e conformidade com auditoria pública:

**🔟 Padronização "Infraestrutura Técnica Voltada à Governança Pública"**  
**Mudança**: Substituição consistente em todo o site  
**De**: "infraestrutura pública" / "software de infraestrutura pública"  
**Para**: "infraestrutura técnica voltada à governança pública"  
**Motivo**: Clareza sobre natureza técnica e foco em governança, não em serviço público direto

**1️⃣1️⃣ Escopo de Dispositivos - Forma Canônica**  
**Mudança**: Texto juridicamente defensivo  
**Para**: "dispositivos Android 7+ utilizados no âmbito de políticas públicas de educação, independentemente do fabricante ou modelo do equipamento"  
**Motivo**: Não sugere uso irrestrito em dispositivos privados fora de políticas públicas

**1️⃣2️⃣ Registro INPI - Linguagem Juridicamente Segura**  
**De**: "Programa de computador devidamente registrado..."  
**Para**: "Programa de computador com registro depositado no Instituto Nacional da Propriedade Industrial (INPI)"  
**Motivo**: Linguagem adequada tanto para registro em análise quanto concedido

**1️⃣3️⃣ Dashboard - Identificação Temporal Padronizada**  
**Mudança**: Substituição de termos ambíguos  
**De**: "Último Mês", "Último Trimestre", "1º Semestre 2025"  
**Para**: "Q1 2025 - Mês (dados simulados)", "Q1 2025 - Trimestre (dados simulados)", etc.  
**Motivo**: Clareza sobre período de referência e natureza demonstrativa

**1️⃣4️⃣ Métrica "Sessões com Ciclo Encerrado" - Nota Técnica**  
**Adição**: Nota explicativa obrigatória  
**Texto**: "Ciclo encerrado refere-se exclusivamente ao término técnico da sessão conforme parâmetros temporais, sem inferência de desempenho, conteúdo ou aprendizagem."  
**Localização**: Abaixo da métrica no dashboard  
**Motivo**: Eliminar qualquer interpretação pedagógica

**1️⃣5️⃣ Footer - Redução de Redundância LGPD**  
**Mudança**: Texto simplificado mantendo força jurídica  
**De**: "O SVEED não realiza avaliação educacional, acompanhamento individual, inferência de aprendizagem ou coleta de dados pessoais."  
**Para**: "O SVEED não coleta dados pessoais nem permite identificação individual."  
**Motivo**: Eliminar redundância (já coberto em Pilares e Conformidade)

---

## 📄 Licença e Propriedade

Site institucional desenvolvido para o programa SVEED. Todos os direitos reservados.

**Programa de computador com registro depositado no INPI.**

**Versão atualizada com blindagem jurídica completa e conformidade para auditoria pública.**

---

## 📧 Suporte

Para dúvidas técnicas sobre o site, utilize o formulário de contato disponível na interface.

---

**Última atualização**: Janeiro 2025  
**Versão**: 3.4.0  
**Status**: Produção ✅ (**multi-idioma**: PT / EN / ES + seletor dinâmico)

---

## 🌍 **Multi-idioma / Multilingual / Multiidioma**

O site SVEED está disponível em **3 idiomas** com troca dinâmica via JavaScript:

- 🇧🇷 **Português** (padrão)
- 🇺🇸 **English**
- 🇪🇸 **Español**

### Como Funciona:
- **Seletor de idioma** visível no header (bandeiras + códigos)
- **Troca instantânea** sem recarregar a página
- **Preferência salva** no localStorage do navegador
- **Todas as seções traduzidas**: Hero, Desafio, Sobre, Dinâmica, Pilares, Dashboard, Operadoras, Conformidade, Footer
- **Meta tags atualizadas** dinamicamente (SEO multi-idioma)

### Implementação Técnica:
- Arquivo: `js/i18n.js` (14KB)
- Sistema de traduções: objeto `siteTranslations` com 3 idiomas
- CSS responsivo para o seletor: `.lang-selector` e `.lang-btn`
- Bandeiras via CDN: [flagcdn.com](https://flagcdn.com)

---

## 📋 Changelog de Versões

### v3.4.0 (Atual) - Sistema Multi-idioma Completo com Gráficos Traduzidos

**Sistema de Internacionalização 100% Implementado:**
- ✅ **3 idiomas**: Português (BR), English (US), Español (ES)
- ✅ **Seletor visual** com bandeiras no header
- ✅ **Troca dinâmica** via JavaScript sem reload
- ✅ **localStorage** para salvar preferência do usuário
- ✅ **Traduções completas** de TODAS as seções do site
- ✅ **Meta tags dinâmicas** (title, description, keywords) para SEO
- ✅ **Design responsivo** do seletor de idioma
- ✅ **Hover effects** e estado ativo nos botões de idioma
- ✅ **Gráficos Chart.js traduzidos** dinamicamente

**Todas as seções traduzidas (100%):**
1. ✅ Meta tags e título da página
2. ✅ Header e navegação completa
3. ✅ Hero Section
4. ✅ O Desafio da Evidência (3 cards)
5. ✅ O Que É o SVEED (definição + 3 cards + características técnicas)
6. ✅ Dinâmica Operacional na Prática (5 etapas + nota)
7. ✅ Pilares Tecnológicos (3 pilares)
8. ✅ **Dashboard Público** (labels, métricas, **gráficos Chart.js**, disclaimers)
9. ✅ Para Operadoras e Integradores (4 cards + disclaimer)
10. ✅ Conformidade e Natureza Jurídica (6 itens + escopo)
11. ✅ Footer completo (navegação, contato, copyright)
12. ✅ Modal de Contato (formulário + mensagem sucesso)

**Correção Crítica de Gráficos (v3.4.0):**
- ✅ **Áreas de conhecimento traduzidas**: Portuguese/Portugués, Mathematics/Matemáticas, Science/Ciencias, History/Historia, Other/Otras
- ✅ **Labels temporais traduzidos**: Week/Sem, Month/Mes/Mês, meses (Jan-Jun) em cada idioma
- ✅ **Label do gráfico de linha**: "Average Time (minutes)" / "Tiempo Promedio (minutos)" / "Tempo Médio (minutos)"
- ✅ **Sistema inteligente**: Gráficos atualizam automaticamente ao trocar idioma
- ✅ **Implementação técnica**: Funções `getTranslatedKnowledgeAreas()` e `getTranslatedTimeLabels()` em `main.js`

**Implementação Técnica dos Gráficos:**
- Arquivo `js/i18n.js`: Adicionado objeto `chartKnowledgeAreas` e `chartTimeLabels` para cada idioma
- Arquivo `js/main.js`: Refatorado `dashboardData` para usar estrutura `labelType` (week/month/months)
- Função `updateDashboardWithLanguage()` atualiza gráficos dinamicamente
- Exposição global via `window.updateDashboardWithLanguage` para uso pelo sistema i18n

### v3.3.0 - Nova Seção Dinâmica Operacional

**Nova Seção Adicionada:**
- ✅ **"Dinâmica Operacional na Prática"** inserida entre "O Que É o SVEED" e "Pilares Tecnológicos"
- ✅ Explica o funcionamento do SVEED no dia a dia de forma clara e humanizada
- ✅ Fluxo operacional em 5 etapas com cards numerados e iconografia
- ✅ Contexto: autonomia total durante horário de aula, férias e finais de semana
- ✅ Verificação única diária no primeiro uso fora do horário escolar
- ✅ Ênfase em saúde digital, engajamento positivo e ausência de frustração
- ✅ Design consistente com o padrão visual do site (cards + hover effects)
- ✅ Adicionada ao menu de navegação e footer

**Conteúdo da nova seção:**
1. Orientação Inicial por Áudio (acessibilidade)
2. Bloco de Reforço sem avaliação
3. Pausa Obrigatória para saúde digital
4. Bloco de Execução verificando interação funcional
5. Encerramento e Liberação total do dispositivo

**Nota técnica:** Prioriza saúde digital eliminando mecanismos de frustração ou cobrança pedagógica.

### v3.2.0 - Padronização Linguística Final

**Padronização "educacional" → "da educação":**
- ✅ "Verificação de Rotinas de Uso na Educação" (antes: "Educacional")
- ✅ "uso na educação" em todo o site (antes: "uso educacional")
- ✅ "hardware da educação" (antes: "hardware educacional")
- ✅ "rotinas no contexto da educação" (antes: "rotinas educacionais")
- ✅ "plataforma da educação" (antes: "plataforma educacional")

**Título institucional atualizado:**
- ✅ "SVEED — Governança Pública da Última Milha Educacional" (antes: "Governança da Última Milha na Educação Digital")

**Refinamentos técnicos:**
- ✅ Definição SVEED: "1.5GB RAM+" (formato técnico simplificado)
- ✅ Dashboard: "Q1 2025 (dados simulados)" sem redundância "Trimestre/Mês/Semestre"
- ✅ Dashboard disclaimer: "execução operacional no contexto de políticas públicas"
- ✅ Natureza funcional: "Sistema determinístico de verificação operacional"
- ✅ Hardware: "Compatível com hardware legado de uso na educação pública"
- ✅ Infraestrutura técnica: "Não realiza ensino, não executa avaliação"
- ✅ Operadoras: "encerramento técnico de sessões" (não "conclusão")
- ✅ Footer: "última milha educacional" (consistência total)

**Resultado**: Terminologia técnica uniforme, juridicamente defensiva e institucionalmente coerente.

### v3.1.0 - Ajustes Finais + UX Gráfico Pizza Otimizado

**Correções de Texto:**
- ✅ Definição do SVEED: adicionado requisitos de hardware explícitos (≈1.5GB RAM)
- ✅ Nota métrica: "parâmetros temporais do sistema" (linguagem mais precisa)
- ✅ Registro INPI: incluída natureza jurídica completa na seção Conformidade
- ✅ Copyright footer: terminologia padronizada ("infraestrutura técnica voltada à governança pública")

**Melhoria Crítica de UX - Gráfico de Pizza:**
- ✅ **NOME da área + PORCENTAGEM** visíveis simultaneamente em cada fatia
- ✅ Exemplo visual: "Português" (linha 1) + "29%" (linha 2) diretamente sobre a fatia azul marinho
- ✅ Usuário identifica área e valor imediatamente, sem necessidade de hover ou consulta à legenda
- ✅ Fonte: Inter Bold 13px em branco para máxima legibilidade
- ✅ Implementação: Plugin customizado com dois níveis de texto (label + value)

**Resultado UX:**
Ao bater o olho no gráfico, o usuário vê instantaneamente:
- "Português 29%" (fatia maior, azul marinho escuro)
- "Matemática 27%" (fatia grande, azul marinho médio)
- "Ciências 18%" (fatia média, cinza chumbo)
- "História 14%" (fatia menor, cinza médio)
- "Outras 12%" (fatia menor, cinza claro)

### v3.0.0 - Blindagem Jurídica Final
- ✅ Padronização: "infraestrutura técnica voltada à governança pública"
- ✅ Escopo dispositivos: forma canônica juridicamente defensiva
- ✅ Registro INPI: linguagem para depósito/concessão
- ✅ Dashboard: identificação temporal padronizada (Q1 2025 + dados simulados)
- ✅ Métrica: nota técnica sobre "ciclo encerrado"
- ✅ Footer: texto LGPD simplificado e direto

### v2.1.0
- ✅ Escopo de dispositivos ampliado (Android 7+, não só hardware público)
- ✅ Gráfico de pizza com valores sempre visíveis
- ✅ Legenda do gráfico com porcentagens

### v2.0.0
- ✅ Logo atualizada
- ✅ 7 ajustes de redução de risco semântico
- ✅ Blindagem jurídica inicial

### v1.0.0
- ✅ Site institucional completo
- ✅ Dashboard interativo
- ✅ Todas as seções implementadas
