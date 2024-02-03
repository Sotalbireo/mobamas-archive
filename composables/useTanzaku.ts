export function useTanzaku() {
  const list = useState<string[]>(() => [])

  const fetch = async () => {
    list.value = await useFetch('/api/v1/images/tanzaku').data.value ?? []
  }

  return {
    list,
    fetch,
  }
}
