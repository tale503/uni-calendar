import Vue from 'vue'
import App from './App'
import store from './store'
import { HttpGet, HttpPost} from './utils/request'
import { navigateTo, redirectTo, reLaunch, switchTab, navigateBack } from './utils/navigation'
import { showToast, hideToast, showLoading, hideLoading, showModal } from './utils/toast'
import { dateFormat, dateFormatNow } from './utils/moment'

Vue.config.productionTip = false

// vuex
Vue.prototype.$store = store

// 接口请求
Vue.prototype.HttpGet = HttpGet;
Vue.prototype.HttpPost = HttpPost;

// 时间转换
Vue.filter('formatDate', dateFormat);
Vue.filter('formatNow', dateFormatNow);
Vue.prototype.formatDate = dateFormat;
Vue.prototype.formatNow = dateFormatNow;


// 路由跳转
Vue.prototype.navigateTo = navigateTo;
Vue.prototype.redirectTo = redirectTo;
Vue.prototype.reLaunch = reLaunch;
Vue.prototype.switchTab = switchTab;
Vue.prototype.navigateBack = navigateBack;

// 提示
Vue.prototype.showToast = showToast;
Vue.prototype.hideToast = hideToast;
Vue.prototype.showLoading = showLoading;
Vue.prototype.hideLoading = hideLoading;
Vue.prototype.showModal = showModal;
App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
