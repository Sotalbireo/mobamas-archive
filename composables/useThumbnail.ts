export function useThumbnail() {
  const blobs = useState(() => new Map<string, string>())

  const { data: list, execute: fetchId } = useAsyncData(() => $fetch('/api/v1/images/thumb'), { immediate: true })

  const { execute: fetchBlobs } = useAsyncData(async () => {
    return $fetch('/api/v1/images/thumb/blobs')
  }, {
    immediate: true,
    transform: res => {
      blobs.value.clear()
      res.forEach(i => blobs.value.set(i[0], addImageHeader(i[1])))
      return ''
    }
  })

  return {
    blobs,
    list,
    fetchBlobs,
    fetchId,
  }
}
