# SVEED - Ajustes Finais de Blindagem Jurídica (v3.0)

## 📋 Resumo Executivo

Documento técnico detalhando os **6 ajustes críticos** aplicados ao site institucional SVEED para redução de risco interpretativo, conformidade com auditoria pública (TCU, Controladorias) e blindagem jurídica completa.

**Versão**: 3.0.0  
**Data**: Janeiro 2025  
**Objetivo**: Linguagem institucional, técnica e defensiva para revisão por órgãos de controle

---

## 🎯 Princípios Aplicados

✅ Manter linguagem institucional, técnica e neutra  
✅ Evitar qualquer interpretação pedagógica, avaliativa ou individualizante  
✅ Não adicionar promessas, conceitos ou funcionalidades  
✅ Não alterar estrutura, títulos ou ordem das seções  
✅ Aplicar ajustes de forma consistente em todo o texto  

---

## 🛡️ Ajustes Implementados

### 1️⃣ Padronização de "Infraestrutura Pública"

**Objetivo**: Clareza sobre natureza técnica e foco em governança

**Substituição global:**
- ❌ "infraestrutura pública"
- ❌ "software de infraestrutura pública"
- ✅ "infraestrutura técnica voltada à governança pública"

**Localizações alteradas:**
- Meta description (head)
- Seção "O Que É o SVEED" (definição principal)
- Footer (descrição institucional)

**Justificativa técnica:**  
Diferencia claramente infraestrutura técnica de gestão (governança) de serviço público direto, reduzindo risco de interpretação como plataforma de uso final.

---

### 2️⃣ Correção de Escopo: Hardware Público × Origem de Fornecimento

**Objetivo**: Não sugerir uso irrestrito em dispositivos privados fora de políticas públicas

**Forma canônica adotada:**
> "dispositivos Android 7+ utilizados no âmbito de políticas públicas de educação, independentemente do fabricante ou modelo do equipamento."

**Substituições realizadas:**
- ❌ "em hardware público"
- ❌ "em dispositivos fornecidos pelo Estado"
- ❌ "independente da origem de fornecimento"
- ✅ Forma canônica acima

**Localizações alteradas:**
- Hero Section (subtitle)
- Seção "O Que É o SVEED" (definição lead)
- Seção "Conformidade" (escopo de atuação)

**Justificativa técnica:**  
Estabelece claramente que o SVEED opera no contexto de políticas públicas educacionais, sem restringir a fabricantes específicos, mas também sem sugerir aplicação comercial ou doméstica irrestrita.

---

### 3️⃣ Registro INPI — Linguagem Juridicamente Segura

**Objetivo**: Texto adequado para registro em análise ou já concedido

**Substituição:**
- ❌ "Programa de computador devidamente registrado no Instituto Nacional da Propriedade Industrial, com natureza jurídica de software de infraestrutura pública."
- ✅ "Programa de computador com registro depositado no Instituto Nacional da Propriedade Industrial (INPI)."

**Localização:**
- Seção "Conformidade e Natureza Jurídica" → Card "Registro INPI"

**Justificativa técnica:**  
- "Registro depositado" é tecnicamente correto tanto para registros em análise quanto concedidos
- Elimina referência redundante a "natureza jurídica de software de infraestrutura pública"
- Usa sigla oficial "INPI" para clareza institucional

---

### 4️⃣ Dashboard — Blindagem Semântica Adicional

#### 4.1 Identificação Temporal Padronizada

**Objetivo**: Eliminar ambiguidade sobre período de referência

**Substituições no filtro de período:**
- ❌ "Último Mês"
- ❌ "Último Trimestre"
- ❌ "1º Semestre 2025"

**Para:**
- ✅ "Q1 2025 - Mês (dados simulados)"
- ✅ "Q1 2025 - Trimestre (dados simulados)"
- ✅ "Q1-Q2 2025 - Semestre (dados simulados)"

**Justificativa técnica:**  
- Período de referência explícito (Q1 2025)
- Natureza demonstrativa sempre visível "(dados simulados)"
- Elimina interpretação de "últimos" como dados em tempo real

#### 4.2 Métrica "Sessões com Ciclo Encerrado" - Nota Técnica Obrigatória

**Objetivo**: Eliminar qualquer interpretação pedagógica do termo "ciclo encerrado"

**Adição abaixo da métrica:**
> "Ciclo encerrado refere-se exclusivamente ao término técnico da sessão conforme parâmetros temporais, sem inferência de desempenho, conteúdo ou aprendizagem."

**Estilo CSS criado:**
```css
.metric-note {
    font-size: 0.7rem;
    color: var(--cinza-medio);
    margin-top: 0.5rem;
    font-style: italic;
    line-height: 1.4;
}
```

**Justificativa técnica:**  
Define "ciclo encerrado" como evento técnico-temporal, não como indicador de qualidade, conclusão pedagógica ou aprendizagem efetiva.

---

### 5️⃣ Redução de Redundância LGPD (Sem Perder Força)

**Objetivo**: Simplificar sem enfraquecer proteção jurídica

**Substituição no Footer:**
- ❌ "O SVEED não realiza avaliação educacional, acompanhamento individual, inferência de aprendizagem ou coleta de dados pessoais."
- ✅ "O SVEED não coleta dados pessoais nem permite identificação individual."

**Justificativa técnica:**  
- Aspectos de "não avaliação" e "não inferência" já cobertos nas seções:
  - Pilares Tecnológicos → Privacidade por Design
  - Conformidade → Conformidade LGPD
  - Conformidade → Escopo de Atuação
- Texto do footer foca exclusivamente no aspecto central: dados pessoais
- Mantém força jurídica com linguagem direta e assertiva

**Manutenção de blocos existentes:**
- ✅ Seção "Pilares" → "Privacidade por Design" (mantido integralmente)
- ✅ Seção "Conformidade" → "Conformidade LGPD" (mantido integralmente)
- ✅ Seção "Conformidade" → "Escopo de Atuação" (mantido integralmente)

---

### 6️⃣ Consistência em Meta Description

**Objetivo**: Aplicar padronização também em metadados HTML

**Substituição:**
- ❌ "Verificação técnica de execução mínima de uso educacional em hardware público."
- ✅ "Infraestrutura técnica voltada à governança pública para verificação de execução em dispositivos educacionais."

**Localização:**
- `<meta name="description">` no `<head>`

**Justificativa técnica:**  
Garante que mecanismos de busca e previews de links também reflitam a terminologia juridicamente defensiva.

---

## 📊 Impacto dos Ajustes

### Redução de Risco Interpretativo

| Risco Original | Ajuste Aplicado | Resultado |
|----------------|-----------------|-----------|
| Interpretação como "serviço público direto" | Padronização "infraestrutura técnica voltada à governança" | ✅ Natureza técnica clara |
| Sugestão de uso comercial/doméstico | Forma canônica "no âmbito de políticas públicas" | ✅ Escopo institucional claro |
| Ambiguidade sobre status do registro INPI | "Registro depositado no INPI" | ✅ Juridicamente correto |
| Interpretação de dados reais no dashboard | "Q1 2025 (dados simulados)" sempre visível | ✅ Natureza demonstrativa clara |
| "Ciclo encerrado" como conclusão pedagógica | Nota técnica explicativa | ✅ Termo técnico-temporal definido |
| Redundância enfraquecendo mensagem LGPD | Texto direto e assertivo no footer | ✅ Força jurídica mantida |

---

## 📄 Conformidade Atingida

### Adequação para Auditoria Pública

✅ **TCU (Tribunal de Contas da União)**
- Terminologia técnica precisa
- Escopo de atuação claramente delimitado
- Dados demonstrativos identificados

✅ **Controladorias Estaduais**
- Natureza de infraestrutura de governança explícita
- Separação clara entre verificação técnica e avaliação pedagógica

✅ **Telcos e Operadoras**
- Registro INPI mencionado com linguagem adequada
- Escopo complementar (não substitui obrigações contratuais)

✅ **Áreas Jurídicas**
- LGPD: texto direto sem redundâncias
- Sem promessas pedagógicas ou de resultado
- Linguagem defensiva consistente

---

## 🎯 Resultado Final

### Características do Texto v3.0

✅ **Linguagem institucional mantida**  
✅ **Tom técnico e neutro preservado**  
✅ **Estrutura do site não alterada**  
✅ **Nenhuma funcionalidade adicionada**  
✅ **Ajustes aplicados de forma consistente**  
✅ **Zero console errors**  

### Blindagens em Camadas

1. ✅ Terminologia padronizada ("infraestrutura técnica voltada à governança pública")
2. ✅ Escopo institucional claro (políticas públicas de educação)
3. ✅ Registro INPI juridicamente correto
4. ✅ Dashboard com identificação temporal e natureza demonstrativa
5. ✅ Métricas com definições técnicas precisas
6. ✅ LGPD com texto direto e assertivo

---

## ✅ Checklist de Conformidade

- [x] Nenhuma promessa pedagógica ou de resultado
- [x] Nenhuma inferência sobre aprendizagem
- [x] Nenhuma menção a avaliação individual
- [x] Dados sempre identificados como agregados e/ou simulados
- [x] Escopo limitado a verificação técnica operacional
- [x] Natureza complementar (não substitui obrigações contratuais)
- [x] LGPD por design (não coleta dados pessoais)
- [x] Terminologia juridicamente defensiva
- [x] Linguagem adequada para TCU, Controladorias e Telcos

---

## 📝 Frase-Guia Atendida

> "Manter linguagem institucional, técnica e neutra. Evitar qualquer interpretação pedagógica, avaliativa, individualizante ou comercial."

**Status**: ✅ **100% ATENDIDA**

---

## 📧 Responsável Técnico

Ajustes aplicados conforme prompt de blindagem jurídica fornecido.

**Versão do Documento**: 3.0.0  
**Data de Aplicação**: Janeiro 2025  
**Status**: Pronto para revisão por órgãos de controle e publicação

---

**Site pronto para publicação com blindagem jurídica completa.**
