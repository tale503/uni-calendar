<template>
	<view class="content">
		<v-calendar
			name="calendar"
			bgColor="#4198f8"
			selColor="#4198f8"
			textColor="#4198f8"
			:showText="true"
			:showDot="true"
			:defaultTime="time"
			:extraData="extraData"
			@calendarTap="calendarTap"
		/>
	</view>
</template>

<script>
	import calendar from '../../components/calendar';
	export default {
		data() {
			return {
				time: {
					year: 2020,
					month: 5
				},
				extraData: [
					{date: '2020-6-3', value: '签到', dot: true, active: true},
					{date: '2020-6-5', value: '未签到', dot: false, active: false},
					{date: '2020-6-8', value: '', dot: true, active: false},
					{date: '2020-6-11', value: '', dot: true, active: true},
					{date: '2020-7-3', value: '签到', dot: true, active: true}
				]
			}
		},
		components: {
			'v-calendar': calendar
		},
		onLoad() {

		},
		methods: {
			calendarTap(e) {
				console.log(e);
			}
		}
	}
</script>

<style lang="scss">

</style>
