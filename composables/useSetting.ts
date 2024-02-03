import { useLocalStorage } from '@vueuse/core'

export function useSetting() {
  const mypage = useLocalStorage('mypage', {
    unit1: '',
    useOriginalBg: true,
  })

  const isReady = useState('isReady', () => false)
  const showMenu = useState('showMenu', () => false)

  return {
    isReady,
    mypage,
    showMenu,
  }
}
