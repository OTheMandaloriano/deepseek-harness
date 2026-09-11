/** Shell chrome and General-nav dictionaries; feature rows own their copy. */

/** Simplified Chinese dictionary (the key-set source of truth). */
export const zh = {
  'trigger': '设置',
  'title': '设置',
  'close': '关闭',
  'openDocument': '打开配置文件',
  'openDocument.error': '无法打开配置文件',
  'general.nav': '通用设置',
  'connection.error': '连接异常',
  'connection.retry': '立即重连',
  'connection.connecting': '自动重连中',
  'connection.connected': '连接成功',
  'connection.reconnect': '连接异常，点击立即重连',
  'connection.restart': '连接中断，正在自动重试，点击立即重连',
} satisfies Record<string, string>

/** The settings namespace key union. */
export type SettingsKey = keyof typeof zh

/** English dictionary, checked complete against the zh key set. */
export const en = {
  'trigger': 'Settings',
  'title': 'Settings',
  'close': 'Close',
  'openDocument': 'Open configuration file',
  'openDocument.error': 'Could not open configuration file',
  'general.nav': 'General',
  'connection.error': 'Disconnected',
  'connection.retry': 'Reconnect now',
  'connection.connecting': 'Reconnecting',
  'connection.connected': 'Connected',
  'connection.reconnect': 'Disconnected, reconnect now',
  'connection.restart': 'Reconnecting automatically, reconnect now',
} satisfies Record<SettingsKey, string>


/** Brazilian Portuguese dictionary for settings general. */
export const ptBR = {
  'trigger': 'Configurações',
  'title': 'Configurações',
  'close': 'Fechar',
  'openDocument': 'Abrir arquivo de configuração',
  'openDocument.error': 'Não foi possível abrir o arquivo de configuração',
  'general.nav': 'Geral',
  'connection.error': 'Desconectado',
  'connection.retry': 'Reconectar agora',
  'connection.connecting': 'Reconectando',
  'connection.connected': 'Conectado',
  'connection.reconnect': 'Desconectado, reconectar agora',
  'connection.restart': 'Reconectando automaticamente, reconectar agora',
} satisfies Record<SettingsKey, string>
