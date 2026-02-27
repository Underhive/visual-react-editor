export function Screenshot() {
  const target = globalThis.$target?.data || document.body
  const rect = target.getBoundingClientRect()
  const width = Math.ceil(rect.width)
  const height = Math.ceil(rect.height)

  const canvas = document.createElement('canvas')
  const dpr = window.devicePixelRatio || 1
  canvas.width = width * dpr
  canvas.height = height * dpr
  const ctx = canvas.getContext('2d')
  ctx.scale(dpr, dpr)

  const clone = target.cloneNode(true)
  // Remove editor-injected attributes
  clone.removeAttribute('data-selected')
  clone.removeAttribute('data-label-id')

  const serializer = new XMLSerializer()
  const xhtml = serializer.serializeToString(clone)

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
    <foreignObject width="100%" height="100%">
      ${xhtml}
    </foreignObject>
  </svg>`

  const img = new Image()
  img.onload = () => {
    ctx.drawImage(img, 0, 0)
    canvas.toBlob(blob => {
      if (!blob) return
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.download = `screenshot-${Date.now()}.png`
      link.href = url
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    }, 'image/png')
  }
  img.onerror = () => {
    // Fallback: use html string approach
    const dataUrl = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg)
    const link = document.createElement('a')
    link.download = `screenshot-${Date.now()}.svg`
    link.href = dataUrl
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg)

  return () => {}
}
