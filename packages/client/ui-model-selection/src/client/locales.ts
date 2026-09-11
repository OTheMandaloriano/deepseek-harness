/**
 * `model` namespace dictionaries.
 *
 * `trigger.selectAria` intentionally matches `trigger.fallback` but remains a
 * separate key: the visible fallback label and the accessible name of
 * an unset trigger are free to diverge per locale, and folding it into
 * `trigger.aria` would announce the degenerate "Select model, current Select
 * model".
 */

/** Simplified Chinese dictionary (the key-set source of truth). */
export const zh = {
  'command.label': '模型',
  'command.description': '选择本会话使用的模型',
  'option.loadError': '目录加载失败：{message}',
  'option.deepseekV4Flash.description': '快速、高效且经济；适合目标明确、常规或并行任务。',
  'option.deepseekV4Pro.description': '更强的自主编码、知识与复杂推理能力；适合复杂或质量优先的任务，但成本更高。',
  'trigger.fallback': '选择模型',
  'trigger.loading': '正在加载模型…',
  'trigger.selectAria': '选择模型',
  'trigger.aria': '选择模型，当前 {model}',
  'trigger.ariaEffort': '选择模型，当前 {model}，推理等级 {effort}',
  'menu.aria': '模型与推理等级',
  'menu.model': '模型',
  'menu.effort': '推理等级',
  'effort.providerDefault': 'Default',
  'status.loading': '正在刷新模型列表…',
  'error.action': '模型操作失败：{message}',
  'action.reload': '重新加载',
  'warning.groupLoad': '{name} 加载失败：{message}',
  'empty.models': '没有可用的模型。',
  'blocked.composer': '当前模型不可用，请先选择模型',
  'empty.efforts': '当前模型未提供推理等级。',
} satisfies Record<string, string>

/** The model namespace key union. */
export type ModelKey = keyof typeof zh

/** English dictionary, checked complete against the zh key set. */
export const en = {
  'command.label': 'Model',
  'command.description': 'Select the model for this conversation',
  'option.loadError': 'Catalog failed to load: {message}',
  'option.deepseekV4Flash.description': 'Fast, efficient, and economical; suited to focused, routine, or parallel tasks.',
  'option.deepseekV4Pro.description': 'Stronger agentic coding, knowledge, and difficult reasoning; suited to complex or quality-critical tasks at higher cost.',
  'trigger.fallback': 'Select model',
  'trigger.loading': 'Loading models…',
  'trigger.selectAria': 'Select model',
  'trigger.aria': 'Select model, current {model}',
  'trigger.ariaEffort': 'Select model, current {model}, reasoning effort {effort}',
  'menu.aria': 'Model and reasoning effort',
  'menu.model': 'Model',
  'menu.effort': 'Effort',
  'effort.providerDefault': 'Default',
  'status.loading': 'Refreshing model list…',
  'error.action': 'Model operation failed: {message}',
  'action.reload': 'Reload',
  'warning.groupLoad': '{name} failed to load: {message}',
  'empty.models': 'No models available.',
  'blocked.composer': 'This model is unavailable — select one to continue',
  'empty.efforts': 'This model provides no reasoning effort levels.',
} satisfies Record<ModelKey, string>


/** Brazilian Portuguese dictionary for model selection. */
export const ptBR = {
  'command.label': 'Modelo',
  'command.description': 'Selecionar modelo para esta sessão',
  'option.loadError': 'Erro ao carregar modelo: {message}',
  'option.deepseekV4Flash.description': 'Rápido, eficiente e otimizado para tarefas cotidianas de codificação.',
  'option.deepseekV4Pro.description': 'Raciocínio avançado e máxima capacidade para arquitetura de código complexa.',
  'trigger.fallback': 'Selecionar modelo',
  'trigger.loading': 'Carregando modelos…',
  'trigger.selectAria': 'Selecionar modelo',
  'trigger.aria': 'Selecionar modelo, atual {model}',
  'trigger.ariaEffort': 'Selecionar modelo, atual {model}, esforço de raciocínio {effort}',
  'menu.aria': 'Modelo e esforço de raciocínio',
  'menu.model': 'Modelo',
  'menu.effort': 'Esforço de raciocínio',
  'effort.providerDefault': 'Padrão',
  'status.loading': 'Atualizando catálogo de modelos…',
  'error.action': 'Falha na operação do modelo: {message}',
  'action.reload': 'Tentar novamente',
  'warning.groupLoad': 'Falha ao carregar {name}: {message}',
  'empty.models': 'Nenhum modelo disponível.',
  'blocked.composer': 'O modelo atual está indisponível. Por favor, selecione outro.',
  'empty.efforts': 'O modelo atual não suporta ajuste de esforço de raciocínio.',
} satisfies Record<ModelKey, string>
