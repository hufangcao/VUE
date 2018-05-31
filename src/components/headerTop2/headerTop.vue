<template>
  <div class="head-wrap">
    <div class="top" v-show="false">
      <i class="close"></i>
      <div class="wrap">
        <i class="logo"></i>
        <div class="text">
          <p>网易严选</p>
          <p>立即领取APP新人专享1000元礼包</p>
        </div>

      </div>
      <a href="javascript">打开APP</a>
    </div>
    <div class="bottom">
    <a href="javascript;" class="text">网易严选</a>
    <div class="input">
      <i  class=" guide_item iconfont icon-artboard9-copy"></i>
      <span class="inputText">搜索商品, 共9882款好物</span>
    </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .head-wrap
    position relative
    z-index 2
    background white
    .top
      width 100%
      height 35px
      background #333
      padding 7px
      position relative
      .close
        width 20px
        height 20px
        background aliceblue
        display inline-block
        margin-top 10px

      .wrap
        display inline-block
        margin-left 10px
        .logo
          float left
          display inline-block
          width 35px
          height 35px
          background #B9383D
          margin-right 10px
        .text
          float right
          p
            font-size 12px
            color #fff
            line-height 20px
      a
        display inline-block
        width 70px
        height 25px
        position absolute
        right 20px
        top 10px
        border-radius 3px
        font-size 12px
        text-align center
        line-height 25px
        background  #B9383D
        color #eee
        clearFix()

    .bottom
      width 96%
      margin-left  2%
      height 4rem
      a
        display inline-block
        width 6rem
        height 4rem
        margin-left 1rem
        font 1.3rem "微软雅黑"
        color black
        line-height 4rem
        text-align center

      .input
        width 16rem
        height 1.7rem
        position absolute
        right 1.5rem
        top 1.3rem
        border-radius .2rem
        background #eee
        padding 0 .5rem
        box-sizing border-box
        text-align center
        line-height 1.7rem
        .guide_item
          display inline-block
          font-size 1rem
        span
          display inline-block
          font-size .7px
          color #7e8c8d
          font-family "Microsoft YaHei"
</style>
