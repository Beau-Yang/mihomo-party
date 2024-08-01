export const defaultConfig: IAppConfig = {
  core: 'mihomo',
  silentStart: false,
  sysProxy: { enable: false, mode: 'manual' }
}

export const defaultControledMihomoConfig: Partial<IMihomoConfig> = {
  'external-controller': '127.0.0.1:9090',
  ipv6: false,
  mode: 'rule',
  'mixed-port': 7890,
  'allow-lan': false,
  'log-level': 'info',
  tun: { enable: false }
}

export const defaultProfileConfig: IProfileConfig = {
  items: []
}

export const defaultProfile: Partial<IMihomoConfig> = {
  proxies: [],
  'proxy-groups': [],
  rules: []
}
