<template>
<div class="headerTop">
  <div class="top" v-show="listShow">
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
  <div class="header">
    <div class="left" @click="toHome">
      <i class=" iconfont icon-home"></i>
    </div>
    <a href="javascript;" class="text">网易严选</a>
    <div class="right">
    <i class="iconfont iconfont icon-artboard9-copy"></i>
    <i class="iconfont icon-cart" @click="toCart"></i>
    </div>
  </div>
</div>
</template>

<script>
  /* */
export default {
  computed:{
    listShow(){
        return false
    }
  },
  methods:{
    toHome(){
      this.$router.push('/home')
    },
    toCart(){
      this.$router.push('/shopCar')
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .headerTop
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
    .header
      width 96%
      height 4rem
      padding: .21333rem .4rem;
      overflow hidden
      margin-left 1%
      position relative
      .left
        display inline-block
        width 2rem
        height 3rem
        line-height 3rem
        margin-right 2rem
        i
          font-size 2rem
          color #7e8c8d
      a
        display inline-block
        width 6rem
        height 2rem
        margin-left 4rem
        font 1.5rem "微软雅黑"
        color black
        line-height 2rem
        text-align center
      .right
        display inline-block
        width 6rem
        height 3rem
        margin-left 4.2rem
        i
         font-size 2rem
         margin-right .5rem
         color #7e8c8d

</style>
