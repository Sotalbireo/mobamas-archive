export function useTanzaku() {
  const list = useState<string[]>(() => [])

  const asyncData = useAsyncData('tanzakuList', () => $fetch('/api/v1/images/tanzaku'), {
    immediate: false,
    transform: res => { list.value = res }
  })

  return {
    list,
    fetch: asyncData.execute,
  }
}
