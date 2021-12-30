<template>
  <div class="container">
    <div class="home">home</div>
     <van-grid :column-num="3">
			<van-grid-item v-for="value in 9" :key="value" icon="photo-o" text="文字" />
		</van-grid>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>
<style lang="less" scoped>
  .home{
    margin-bottom: 20px;
    width: 750px;
    height: 60px;
    font-size: 28px;
    background:red;
  }
</style>
