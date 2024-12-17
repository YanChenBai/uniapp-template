type NavToOptions = UniNamespace.NavigateToOptions & NavigateToOptions
export function navigateTo(options: NavToOptions, data?: Record<string, any>) {
  let query = ''
  if (data)
    query = `?${Object.entries(data).map(([key, value]) => `${key}=${encodeURIComponent(value)}`).join('&')}`

  options.url = `${options.url}${query}` as any
  return uni.navigateTo(options)
}

export function goto(url: NavigateToOptions['url'], data?: Record<string, any>) {
  navigateTo({
    url,
  }, data)
}
