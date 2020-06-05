const WxApiRoot = "/";

let request = async (url, params, method) => {
  try {
    let [error, res] = await uni.request({
      url: `${WxApiRoot}${url}`,
      data: params,
      method: method,
      header: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer `
      }
    });
    if (res.data.code === 200) {
      return res.data.data;
    }
  } catch (e) {
    console.log(e, '接口请求错误')
  }

}
export async function HttpGet(url, jsonData) {
  return await request(url, jsonData, 'GET');
}

export async function HttpPost(url, jsonData) {
  return await request(url, jsonData, 'POST');
}
