export const useMyStudio = () => useState<string[]>('myState', () => [])
export const useMenu = () => useState<boolean>('menu', () => false)
export const useInfoSheet = () => useState<boolean>('infoSheet', () => false)