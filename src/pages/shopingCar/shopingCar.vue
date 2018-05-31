<template>
<div>
  <div class="header-cart">网易严选</div>
  <div class="shopCat">
  <ul class="m-servicePolicy">
    <li class="item">
      <i></i>
      <span class="text1">48小时快速退款</span>
    </li>
    <li class="item">
      <i></i>
      <span class="text1">48小时快速退款</span>
    </li>
    <li class="item">
      <i></i>
      <span class="text1">48小时快速退款</span>
    </li>
  </ul>
  <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png" alt="">
  <span>去添加点东西吧</span>
  <div class="noCart-btn" @click="toPsonal">登陆</div>
</div>
</div>
</template>

<script>
export default {
  methods:{
    toPsonal(){
      this.$router.push('/personal')
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .header-cart
    width 100%
    height 4rem
    font-size 1.5rem
    color #4F4F4F
    text-align center
    line-height 4rem
    font-weight 600
    font-family "宋体"
  .shopCat
    width 100%
    height 100%
    position absolute
    background  #F4F4F4
    line-height 100%
    text-align center
    .m-servicePolicy
      width 100%
      height 2rem
      text-align center
      .item
        width 32%
        height 2rem
        display inline-block
        text-align center
        line-height 2rem
        i
          float left
          width .5rem
          height .5rem
          border-radius 50%
          margin-top .7rem
          background lavender
        .text1
          font-size .8rem
          color #4F4F4F
    img
      width 40%
      margin-top 10rem
    span
      display block
      font-size 1.2rem
      color  #7e8c8d
    .noCart-btn
      width 14rem
      height 2.5rem
      background #d3636a
      border-radius .2rem
      line-height 2.5rem
      display inline-block
      margin-top 3rem



</style>
