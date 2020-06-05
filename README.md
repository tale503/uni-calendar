# uni-calendar

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

## 使用方法

#### template中创建dom
```
<template>
    <view class="content">
        <v-calendar name="calendar" :defaultTime="time" :extraData="extraData"  @calendarTap="calendarTap" />
    </view>
</template>
```

#### 引入
```
<script>
    import calendar from '../../components/calendar';
    export default {
        data() {
            return {
                time: {year: 2020, month: 5},
                extraData: [
                    {date: '2020-6-3', value: '签到', dot: true, active: true},
                    {date: '2020-6-5', value: '未签到', dot: true, active: false},
                    {date: '2020-7-3', value: '签到', dot: true, active: true}
                ]
            }
        },
        components: {
            'v-calendar': calendar
        },
        methods: {
            calendarTap(e) {
                console.log(e);
            }
        }
    }
</script>
```
#### 可选参数 
<font size=2>bgColor: 背景颜色 </font>
 
<font size=2 >selColor：选中背景颜色  </font>
 
<font size=2 >textColor：文字颜色 </font>

<font size=2 >showText: 是否显示文字  </font>

<font size=2 >showDot：是否显示圆点  </font>

<font size=2 >defaultTime：默认日期</font>

<font size=2 >extraData: 额外参数</font>


<font size=2 >注： defaultTime的月份跟随日历月份，例：6月份传5; extraData中日期格式为：YYYY-M-D 或者YYYY/M/D</font>
```
<v-calendar
    name="calendar"
    bgColor="#4198f8"
    selColor="#4198f8"
    textColor="#4198f8"
    :showText="false"
    :showDot="false"
    :defaultTime="time"
    :extraData="extraData"
    @calendarTap="calendarTap"
/>
```