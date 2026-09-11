/** `goal` namespace dictionaries. */

/** Simplified Chinese dictionary (the key-set source of truth). */
export const zh = {
  'phase.active': '进行中的目标',
  'phase.active.disarmed': '未运行的目标',
  'phase.paused': '已暂停的目标',
  'phase.blocked': '受阻的目标',
  'objective.aria': '目标内容',
  'commandInput.aria': '指令输入',
  'action.save': '保存目标',
  'action.cancel': '取消编辑',
  'action.pause': '暂停目标',
  'action.resume': '恢复目标',
  'action.edit': '编辑目标',
  'action.clear': '清除目标',
} satisfies Record<string, string>

/** The goal namespace key union. */
export type GoalKey = keyof typeof zh

/** English dictionary, checked complete against the zh key set. */
export const en = {
  'phase.active': 'Ongoing Goal',
  'phase.active.disarmed': 'Inactive Goal',
  'phase.paused': 'Paused Goal',
  'phase.blocked': 'Blocked Goal',
  'objective.aria': 'Goal objective',
  'commandInput.aria': 'Command input',
  'action.save': 'Save goal',
  'action.cancel': 'Cancel edit',
  'action.pause': 'Pause goal',
  'action.resume': 'Resume goal',
  'action.edit': 'Edit goal',
  'action.clear': 'Clear goal',
} satisfies Record<GoalKey, string>


/** Brazilian Portuguese dictionary for goals. */
export const ptBR: Record<GoalKey, string> = {
  'phase.active': 'Objetivo em andamento',
  'phase.active.disarmed': 'Objetivo inativo',
  'phase.paused': 'Objetivo pausado',
  'phase.blocked': 'Objetivo bloqueado',
  'objective.aria': 'Conteúdo do objetivo',
  'commandInput.aria': 'Entrada de comando',
  'action.save': 'Salvar objetivo',
  'action.cancel': 'Cancelar edição',
  'action.pause': 'Pausar objetivo',
  'action.resume': 'Retomar objetivo',
  'action.edit': 'Editar objetivo',
  'action.clear': 'Limpar objetivo',
}
