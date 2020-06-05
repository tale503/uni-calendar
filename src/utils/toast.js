export function showToast(title) {
  uni.showToast({
    title: title,
    duration: 2000,
    icon: 'none'
  });
}

export function hideToast() {
  uni.hideToast();
}

export function showLoading(title) {
  uni.showLoading({
    title: title
  });
}

export function hideLoading() {
  uni.hideLoading();
}

export function showModal(data) {
  let {title, content, showCancel = true, cancelText = '取消', confirmText = '确定', confirm, cancel } = data
  uni.showModal({
    title: title,
    content: content,
    showCancel: showCancel,
    cancelText: cancelText,
    confirmText: confirmText,
    confirmColor: '#ffd800',
    success: (res) => {
      if (res.confirm) {
        confirm()
      } else if (res.cancel) {
        cancel()
      }
    }
  })
}
