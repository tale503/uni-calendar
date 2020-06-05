export function navigateTo(url) {
  uni.navigateTo({
    url: url
  })
}

export function redirectTo(url) {
  uni.redirectTo({
    url: url
  })
}

export function reLaunch(url) {
  uni.reLaunch({
    url: url
  })
}

export function switchTab(url) {
  uni.switchTab({
    url: url
  })
}

export function navigateBack(delta = 1) {
  uni.navigateBack({
    delta: delta
  })
}
