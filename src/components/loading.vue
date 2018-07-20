<template>
	<div class="loading">
		<div class="win">
			<div class="win-progress"> 
				<p class="title">上传中...</p>
				<img src="./../assets/loading.gif" style="width:85%;margin:0px 7.5%;">
		    </div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'loading',
		data ()　{
			return {

			}
		}
	};
</script>
<style lang="less" scoped>
	.loading{
		width: 100%;
	    height: 100%;
	    background: rgba(0, 0, 0, .5);
	    position: fixed;
	    z-index: 999;
	    left: 0;
	    top: 0;
	}
	.win{
		width:100%;
		height:100%;
		position:relative;
	}
	.win-progress{
		position: absolute;
	    top: 0;
	    left: 0;
	    bottom: 0;
	    right: 0;
	    border-radius: 18px;
	    background: #fff;
	    margin: auto;
		width: 240px;
	    height: 135px;
	    overflow: hidden;
		p{
			text-align:center;
			font-size:18px;
			margin:30px 0px;
		}
	}
</style>