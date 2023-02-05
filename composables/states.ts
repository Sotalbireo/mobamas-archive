export const useMyStudio = () => useState<string[]>('myState', () => [])
export const useMenu = () => useState<boolean>('menu', () => false)
export const useInfoSheet = () => useState<boolean>('infoSheet', () => false)
export const useAppTitle = () => useState<string>('appTitle', () => '')
export const useLsIds = () => useState<string[]>('lsIds', () => [])
export const useThumbIds = () => useState<string[]>('thumbIds', () => [])
