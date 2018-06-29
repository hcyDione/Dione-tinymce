<template>
  <div id="app" class="main">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
html,body{
    width: 100%;
    height: 100%;
    box-sizing:content-box;
}
.main{
    width: 100%;
    height: 100%;
}
@import './style/common.less';
</style>
