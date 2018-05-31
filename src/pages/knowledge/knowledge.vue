<template>
  <div>
    <HeaderTop/>
  <div class="m-knowledge-scroll">
    <div class="m-knowledge-wrap">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"  v-for="(item,index) in banner" :key="index">
            <a href="javascript:;" >
              <img :src="item.picUrl" alt="pic">
              <div class="img-text">
                <div class="one-text">
                  <span class="line">—</span>
                  <p>{{item.subTitle}}</p>
                  <span class="line">—</span>
                </div>
                <p class="two-text">{{item.title}}</p>
                <p class="three-text">{{item.desc}}</p>
              </div>
            </a>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

      </div>
      <div class="m-exploreChannels">
        <ul class="m-exploreChannels-list">
          <li class="m-exploreChannels-item" v-for="(item,index) in column">
            <a href="javascript:;">
              <div class="m-pic">
                <img :src="item.picUrl" alt="pic">
              </div>
              <span class="m-text">{{item.articleCount}}</span>
              <span class="m-titel">{{item.title}}</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="m-exploreRcmds">
        <div class="m-container">
          <div class="m-header">为你推荐</div>
          <a href="javascript:;" class="m-bottom">
            <img :src="recommendOne.picUrl" alt="pic">
            <div class="m-exploreTag">{{recommendOne.typeName}}</div>
            <div class="topicInfo">
              <div class="line1">
                <span class="title">{{recommendOne.title}}</span>
                <span class="price">{{recommendOne.priceInfo}}元起</span>
              </div>
              <div class="line2">{{recommendOne.subTitle}}</div>
      </div>
          </a>
          <a href="javascript:;" class="m-minorPosItem">
            <div class="item-left">
              <div class="author">
                <img :src="recommendTwo.avatar" alt="pic">
                <span >{{recommendTwo.nickname}}</span>
              </div>
              <div class="title-one">{{recommendTwo.title}}</div>
              <div class="title-two">{{recommendTwo.subTitle}}</div>
            </div>
            <div class="item-right">
              <img :src="recommendTwo.picUrl" alt="pic">
              <div class="m-exploreTag">{{recommendTwo.typeName}}</div>
            </div>
          </a>
          <a href="javascript:;" class="m-minorPosItem">
            <div class="item-left">
              <div class="author">
                <img :src="recommendThree.avatar" alt="pic">
                <span >{{recommendThree.nickname}}</span>
              </div>
              <div class="title-one">{{recommendThree.title}}</div>
              <div class="title-two">{{recommendThree.subTitle}}</div>
            </div>
            <div class="item-right">
              <img :src="recommendThree.picUrl" alt="pic">
              <div class="m-exploreTag">{{recommendThree.typeName}}</div>
            </div>
          </a>
        </div>
      </div>
      <div class="m-exploreTenFifteen">
        <div class="inner">
          <a href="javascript:;" class="innerItem" v-for="(tenfif,index) in tenfifteen" :key="index">
            <div class="line-title">
              <span>--</span>
              <p>今日话题</p>
              <span>--</span>
            </div>
            <div class="line-text-one">{{tenfif.desc}}</div>
            <div class="line-text-two">{{tenfif.title}}</div>
            <div class="line-pic"  >
              <img :src="participant" v-for="(participant,index) in tenfif.participantAvatar" :key="index" v-if="">
              <span v-if="!tenfif.participantNum===0">{{tenfif.participantNum}}人参与话题</span>
            </div>
          </a>
        </div>
      </div>
      <div class="m-exploreRcmds">
        <div class="m-container">
          <div class="m-header">为你推荐</div>
          <a href="javascript:;" class="m-bottom">
            <img :src="zhenOne.picUrl" alt="pic">
            <div class="m-exploreTag">{{zhenOne.nickname}}</div>
            <div class="topicInfo">
              <div class="line1">
                <span class="title">{{zhenOne.title}}</span>
              </div>
              <div class="line2">{{zhenOne.subTitle}}</div>
            </div>
          </a>
          <a href="javascript:;" class="m-minorPosItem">
            <div class="item-left">
              <div class="title-one">{{zhenTwo.title}}</div>
              <div class="title-two">{{zhenTwo.subTitle}}</div>
            </div>
            <div class="item-right">
              <div class="m-exploreTag">{{zhenTwo.nickname}}</div>
              <img :src="zhenTwo.picUrl" alt="pic">
            </div>
          </a>
          <a href="javascript:;" class="m-minorPosItem">
            <div class="item-left">
              <div class="title-one">{{zhenThree.title}}</div>
              <div class="title-two">{{zhenThree.subTitle}}</div>
            </div>
            <div class="item-right">
              <div class="m-exploreTag">{{zhenThree.nickname}}</div>
              <img :src="zhenThree.picUrl" alt="pic">
            </div>
          </a>
        </div>
      </div>
      <div class="m-exploreLook">
        <div class="module-title">严选LOOK</div>
        <a href="javascript:;" class="module-pic">
          <img src="http://yanxuan.nosdn.127.net/93555375e875d8347dd6886c144b6379.jpg?imageView&quality=75" alt="pic">
          <div class="author-container">
            <img src="http://yanxuan.nosdn.127.net/2c970bc69e1a056fc1a8c7298c4607e1.jpg?imageView&quality=75&thumbnail=48y48" alt="">
            <span>米****糊</span>
          </div>
          <span></span>
        </a>
      </div>
      <div class="m-exploreMore">
        <div class="line-title">
          <span class="line"></span>
          <p>更多精彩</p>
          <span class="line"></span>
        </div>
        <div class="content three" v-for="(item,index) in findMore" :key="index" v-if="item.picList">
          <div class="left">
            <img :src="item.picList[0]" alt="">
          </div>
          <div class="right">
            <img :src="item.picList[1]" alt="">
            <img :src="item.picList[2]" alt="">
          </div>

        </div>
        <div class="content one" v-else>
          <div class="onlyOne">
            <img :src="item.itemPicUrl" alt="">
          </div>
          <span>{{item.title}}</span>
        </div>
      </div>
    </div>
  </div>

  </div>
</template>

<script>
  import Swiper from 'swiper'
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  import HeaderTop from '../../components/headerTop/headerTop'
export default {
    components:{
      HeaderTop,
    },
    computed:{
      ...mapState(['banner','column','recommendOne','recommendThree','recommendTwo','tenfifteen','zhenOne','zhenTwo','zhenThree','findMore']),
      /*filterPicList(){
          let arr = []
          arr = this.findMore.forEach((item,index)=>{
            if(!item.picList){
             return
            }
           arr = item.picList.slice(0,3)
          console.log(arr)
          return arr
          })

      }*/
    },
    mounted(){
      this.$store.dispatch('getBanner')
      this.$store.dispatch('getColumn')
      this.$store.dispatch('getRecommendOne')
      this.$store.dispatch('getRecommendThree')
      this.$store.dispatch('getRecommendTwo')
      this.$store.dispatch('getTenfifteen')
      //推荐
      this.$store.dispatch('getZhenOne')
      this.$store.dispatch('getZhenTwo')
      this.$store.dispatch('getZhenThree')
      this.$store.dispatch('getFindMore')



      let scroll = new BScroll('.m-exploreChannels',{
        scrollX: true,
        click: true
      })
      let scrol2 = new BScroll('.m-exploreTenFifteen',{
        scrollX: true,
        click: true
      })
      let scrol3 = new BScroll('.m-knowledge-scroll',{
        scrollY: true,
        click: true
      })
    },
  watch:{
    banner(val){
      //轮播需要监听一下数据是否过来否则划不动
      this.$nextTick(()=>{
        new Swiper('.swiper-container', {
          loop: true, // 可以循环轮播
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
            type :'bullet',
          },
        })
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .m-knowledge-scroll
    width 100%
    height 10px
    .m-knowledge-wrap
      width 100%
      .swiper-container
        width 90%
        height 12rem
        a
          width 100%
          height 12rem
          display block
          img
            width 100%
            height 12rem
          .img-text
            width 14rem
            height 6rem
            position absolute
            top 2.5rem
            left 4rem
            background #F0F1F0
            .one-text
              width 7rem
              height 2rem
              margin-top 1rem
              margin-left 4.5rem
              p
                font-size 12px
                display inline-block
              .line
                color #7e8c8d
                font-size 14px
                display inline-block


            .two-text
              display block
              font-size 1rem
              font-weight 900
              margin-left 3rem
              margin-top -.5rem
              color  #404040
            .three-text
              display block
              font-size .7rem
              font-weight 700
              margin-left 3rem
              margin-top .5rem
              color #939595




      .m-exploreChannels
        width 100%
        height 8rem
        margin-top 1.7rem
        border-bottom 1rem solid #F4F4F4
        box-sizing border-box

        .m-exploreChannels-list
          height 7rem
          white-space nowrap
          float left
          .m-exploreChannels-item
            width 5.5rem
            height 7rem
            display inline-block
            margin-left .8rem
            overflow hidden
            a
              width 100%
              height 5rem
              display inline-block
              .m-pic
                width 5rem
                height 5rem
                display inline-block
                img
                  width 5.2rem
                  height 5.2rem
                  border-radius .4rem
              .m-text
                display block
                font-size 12px
                color white
                margin-top -5rem
                margin-left 1.5rem
              .m-titel
                display block
                font-size 14px
                margin-top 4.5rem
                margin-left 1rem
                color #404040
      .m-exploreRcmds
        width 100%
        overflow hidden
        .m-container
          width 90%
          overflow hidden
          margin-left 5%
          .m-header
            width 100%
            height 4rem
            font-size 1rem
            text-align center
            line-height 4rem
          .m-bottom
            width 100%
            height 17rem
            display block
            position relative
            border solid 1px #eee
            img
              width 100%
              height 11rem
            .m-exploreTag
              width 4rem
              height 1.5rem
              background #f5fffd
              border-radius .5rem
              line-height 1.5rem
              text-align center
              font-size .7rem
              position absolute
              top 1rem
              left 1rem
            .topicInfo
              width 100%
              height 5rem
              .line1
                width 90%
                height 2rem
                background lavenderblush
                margin-left 5%
                line-height 2rem
                .title
                  float left
                .price
                  float right
                span
                  font-size 1rem
                  color #4F4F4F
                  display block

              .line2
                width 90%
                height 2rem
                margin-left 5%
                font-size .9rem
                color #7e8c8d
          .m-minorPosItem
            display block
            width 100%
            height 9rem
            border 1px solid #eee
            margin-bottom 1rem
            .item-left
              display inline-block
              width 50%
              overflow hidden
              .author
                width 90%
                height 3rem
                margin-left 5%
                img
                  width 2.5rem
                  height 2.5rem
                  border-radius 50%
                  vertical-align middle
                span
                  font-size .5rem
                  vertical-align middle
                  color #4F4F4F
              .title-one
                width 90%
                height 2rem
                margin-left 5%
                margin-top .5rem
                font-size .9rem
                color #4F4F4F
                overflow hidden
                white-space nowrap
                text-overflow ellipsis
              .title-two
                width 90%
                height 3rem
                margin-left 5%
                font-size .7rem
                line-height 1rem
                color #4F4F4F
                white-space nowrap
                overflow hidden
                text-overflow ellipsis
            .item-right
              display inline-block
              position relative
              img
                width 9rem
                height 9rem
                margin-left .5rem
                border-radius .3rem
              .m-exploreTag
                width 4rem
                height 1.2rem
                background #fbf9ff
                border-radius .5rem
                line-height 1.2rem
                text-align center
                font-size .5rem
                position absolute
                top .5rem
                left .5rem
      .m-exploreTenFifteen
        width 100%
        height 13rem
        .inner
          height 12rem
          margin-left 5%
          white-space nowrap
          float left
          .innerItem
            display inline-block
            width 19.5rem
            margin-left .3rem
            height 11rem
            border #878c8d solid .3rem
            border-radius 2rem
            overflow hidden
            .line-title
              width 100%
              height 2rem
              text-align center
              margin-top 1.5rem
              span
                font-size 1rem
                display inline-block
              p
                display inline-block
                font-size .7rem
            .line-text-one
              width 100%
              height 2rem
              text-align center
              font-size 1.3rem
              color #4F4F4F
              font-weight 700
            .line-text-two
              width 100%
              height 2rem
              text-align center
              font-size .9rem
              color #4F4F4F
              margin-top 1rem

            .line-pic
              width 100%
              height 2rem
              text-align center
              img
                width 1.5rem
                height 1.5rem
                border-radius 50%
                vertical-align middle
              span
                font-size .7rem
                vertical-align middle
      .m-exploreLook
        width 100%
        height 21.5rem
        .module-title
          width 100%
          height 3rem
          text-align center
          line-height 3rem
          font-size 1rem
          border-top solid 1rem #F4F4F4
        .module-pic
          display block
          width 100%
          height 18rem
          img
            width 100%
            height 14rem
          .author-container
            width 90%
            margin-left 5%
            height 2rem
            img
              width 2rem
              height 2rem
              border-radius 50%
              vertical-align center
            span
              font-size 1rem
              vertical-align center
      .m-exploreMore
        width 100%
        height 20rem
        background #F4F4F4
        .line-title
          width 100%
          height 5rem
          text-align center
          line-height 5rem
          span
            width 8rem
            height .1rem
            display inline-block
            background #eee
            vertical-align center
          p
            display inline-block
            font-size .9rem
            vertical-align center

        .content
          width 90%
          height 14rem
          margin-left 5%
          margin-top 4rem
          &.three
            .left
              width 70%
              height 14rem
              float left
              img
                width 100%
                height 14rem

            .right
              float right
              width 30%
              height 14
              img
                width 100%
                height 7rem

          &.one
            .onlyOne
              width 100%
              height 14rem
              img
                width 100%
                height 14rem

          span
            width 100%
            height 3rem
            display block
            text-align center
            line-height 3rem
            color #4F4F4F
            font-size .8rem
</style>
