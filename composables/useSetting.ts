import { useLocalStorage } from '@vueuse/core'

export function useSetting() {
  const mypage = useLocalStorage('mypage', {
    unit1: '',
    useOriginalBg: true,
  })

  const showMenu = useState('showMenu', () => false)

  return {
    mypage,
    showMenu,
  }
}
