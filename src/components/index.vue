<template>
	<div class="index" @click="notify">
		Dione	
	</div>	
</template>
<script>
	export default {
		name: 'index',
		data ()　{
			return {

			}
		},
		methods: {
		    notify () {
		      this.$notify({
		        content: 'test $notify',
		        btn: 'close'
		      })
		      console.log(this)
		    }
        },
	};
</script>
<style lang="less" scoped>
	.index{
		width:100%;
		height:100%;
		line-height:100%;
		font-size: 48px;
		text-align:center;
	}
</style>