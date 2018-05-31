<template>
  <div>
    <Cover/>
    <HeaderTop/>
  <div class="wrap-home">
    <div class="home">
      <div class="content">
        <ul class="navWrap" >
        <li class="item " v-for="(headCate,index) in headCateList" :key="index" @click="Bar(index)" >
          <span :class="{on:targetIndex===index}" >{{headCate.name}}</span>
        </li>
        </ul>
      </div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(carousel,index) in carouselList" :key="index">
            <a href="javascript">
              <img v-lazy="carousel.picUrl" alt="pic">
            </a>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

      </div>
      <ul class="ensure">
        <li class="item" v-for="(PolicyDesc,index) in PolicyDescList" :key="index">
            <i class="textIcon"><img :src="PolicyDesc.icon" alt="pic"></i>
          <span class="ensureText">{{PolicyDesc.desc}}</span>
        </li>
      </ul>
      <div class="m-indexFllor">
        <div class="m-header">
          <span class="m-header-text">品牌制造供应商</span>
          <i class="m-header-icon iconfont icon-arrow-right1"></i>
        </div>
        <div class="m-goods">
          <ul class="m-list">
            <li class="m-item" v-for="(Supplier,index) in Suppliers" :key="index">
              <a href="javascript">
                <div class="m-item-text">
                  <h4>{{Supplier.name}}</h4>
                  <div>{{Supplier.floorPrice}}元起</div>
                </div>
                <span class="newIcon" v-show="Supplier.newOnShelf"> 上新</span>
                <img :src="Supplier.picUrl" alt="pic">
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="m-newItems">
        <header class="hd">
          <a href="javascript;">
            <span class="new-text">新品首发</span>
            <div class="findAll">
              <span class="findAll-text">查看全部</span>
              <i class="findAll-Icon iconfont icon-arrow-right1"></i>
            </div>
          </a>
        </header>
        <div class="m-goodGrid">
          <ul class="m-goodGrid-list">
            <li class="m-goodGrid-item" v-for="(newItem,index) in newItemList" :key="index">
              <a href="javascript:;">
                <div class="m-goodGrid-item-img">
                  <img :src="newItem.listPicUrl" alt="pic">
                </div>
                <span  class="icontext" v-for="(itemTag,index) in newItem.itemTagList" :key="index" v-if="itemTag.type===2">{{itemTag.name}}</span>
                <div class="m-goodGrid-shopInfo">
                  <span>{{newItem.name}}</span>
                </div>
                <p>{{newItem.simpleDesc}}</p>
                <div class="price">￥{{newItem.retailPrice}}</div>

              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="m-newItems m-newItem2">
        <header class="hd bg-color ">
          <a href="javascript;">
            <span class="new-text ">人气推荐 · 好物精选</span>
            <div class="findAll">
              <span class="findAll-text">查看全部</span>
              <i class="findAll-Icon iconfont icon-arrow-right1"></i>
            </div>
          </a>
        </header>
        <div class="m-goodGrid m-goodGrid2">
          <ul class="m-goodGrid-list">
            <li class="m-goodGrid-item" v-for="(popularItem,index) in popularItemList" :key="index">
              <a href="javascript:;">
                <div class="m-goodGrid-item-img">
                  <img :src="popularItem.listPicUrl" alt="pic">
                </div>
                <span  class="icontext" v-for="(itemTag,index) in popularItem.itemTagList" :key="index" v-if="itemTag.type===2">{{itemTag.name}}</span>
                <div class="m-goodGrid-shopInfo">
                  <span>{{popularItem.name}}</span>
                </div>
                <p>{{popularItem.simpleDesc}}</p>
                <div class="price">￥{{popularItem.retailPrice}}</div>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="m-indexFlash-wrap">
        <a href="javascript:;">
          <div class="m-indexFlash">
            <div class="item-left">
              <div class="title">严选限时购</div>
              <div class="m-countdown ">
                <span class="hours">{{hour}}</span>
                <span class="colon">:</span>
                <span class="mins">{{minute}}</span>
                <span class="colon">:</span>
                <span class="secs"> {{second}}</span>
              </div>
              <div class="next-title">
                <span > 下一场 18：00 开始</span>
              </div>
            </div>
            <div class="item-right">
              <div class="m-lazyload ">
                <img src="http://yanxuan.nosdn.127.net/28dc5d97295fdd001cbeb2123f4adca6.png?imageView&quality=85&thumbnail=330x330" alt="pic">
              </div>
              <div class="price">
                <span class="rmb1">￥109</span>
                <span class="rmb2">￥149</span>
              </div>
            </div>
          </div>
        </a>
      </div>

      <div class="m-sale">
        <a href="javascript:;">
          <img src="http://yanxuan.nosdn.127.net/a3ea2d1108c94c7dece05eddf95f6df5.jpg" alt="pic">
        </a>
      </div>
      <div class="m-special">
        <header class="hd-special ">
          <a href="javascript;">
            <span class="special-text ">专题选择</span>
            <i class="findAll-Icon"></i>
          </a>
        </header>
        <div class="m-special-slide">
          <ul class="m-special-list">
            <li class="m-special-item" v-for="(topItem,index) in topicList" :key="index">
              <a href="javascript:;">
                <div class="special-item-img">
                  <img :src="topItem.itemPicUrl" alt="pic">
                </div>
              </a>
              <div class="m-special-wrap">
              <div class="m-special-shopInfo">
                <span>{{topItem.title}}</span>
              </div>
              <p class="text-one"> {{topItem.subtitle}}</p>
              <div class="special-price">￥{{topItem.priceInfo}}元起</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="m-titleGoodGrid" v-for="(cateItem,index) in cateList" :key="index">
        <h3>{{cateItem.name}}好物</h3>
        <div class="m-goodGrid" >
          <ul class="m-goodGrid-list">
            <li class="m-goodGrid-item" v-for="(filerItem,index) in cateItem.itemList.slice(0,7)" :key="index">
              <a href="javascript:;">
                <div class="wrap">
                  <img :src="filerItem.listPicUrl" alt="pic">
                  <span class="m-goodGrid-text">{{filerItem.simpleDesc}} </span>s
                </div>
                <div class="m-text-bottom">
                  <span>{{filerItem.name}}</span>
                </div>
                <div class="m-price">
                  ￥{{filerItem.retailPrice}}
                </div>
              </a>
            </li>
            <li class="m-goodGrid-lastItem">
              <a href="javascript:;">
                <p>更多家具好物</p>
                <div class="toolsIcon">
                <i class="  iconfont icon-right"></i>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
    <Tab/>
  </div>

</template>

<script>
  import Swiper from 'swiper'
  import BScroll from 'better-scroll'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'vuex'
  import HeaderTop from '../../components/headerTop2/headerTop'
  import Cover from '../../components/cover/cover'
  import Tab from '../../components/tab/tab'
  export default {
    components: {
      HeaderTop,
      Cover,
      Tab
    },
    data() {
      return {
        targetIndex: 0,
        //倒计时
        hour: '00',
        minute: '00',
        second: '00',
        count: 0,
        interval: null

      }
    },
    computed: {
      ...mapState(['carouselList', 'SupplierList', 'newItemList', 'popularItemList', 'topicList', 'cateList', 'flashSaleIndexVO', 'PolicyDescList', 'headCateList']),
      //只显示四个的item
      Suppliers() {
        /* let array = []
        this.SupplierList.forEach((Supplier,index)=>{
          //切记返回一个新的数组
          array = Supplier.slice(0,4)
        })
          return array*/

        return this.SupplierList.reduce((prop, Supplier) => {
          if (prop.length < 4) {
            prop.push(Supplier)
          }
          //console.log(prop)
          return prop
        }, [])
      },
    },
    mounted() {
      this.$store.dispatch('getCarousel')
      this.$store.dispatch('getSupplier')
      this.$store.dispatch('getNewItem')
      this.$store.dispatch('getPopularItem')
      this.$store.dispatch('getTopicList')
      this.$store.dispatch('getCateList')
      this.$store.dispatch('getPolicyDescList')
      this.$store.dispatch('getFlashSaleIndexVO')
      this.$store.dispatch('reqHeadCateList')

      let scroll = new BScroll('.content', {
        scrollX: true,
        click: true
      })
      let scroll2 = new BScroll('.m-goodGrid', {
        scrollX: true,
        click: true
      })
      let scroll3 = new BScroll('.m-goodGrid2', {
        scrollX: true,
        click: true
      })
      let scroll4 = new BScroll('.m-special-slide', {
        scrollX: true,
        click: true
      })
      let scroll5 = new BScroll('.wrap-home', {
        scrollY: true,
        click: true
      })




    },
    methods: {
      Bar(index) {
        this.targetIndex = index
      },
      start() {
        this.interval = setInterval(() => {
          this.count = this.count - 1000
          if (this.count <= 0) {
            this.second = '00'
            clearInterval(this.interval)
            this.timeDown()
            return
          }
          this.hour = parseInt(this.count / (60 * 60 * 1000)) + ''
          if (this.hour < 10) {
            this.hour = '0' + this.hour
          }
          let n = this.count % (60 * 60 * 1000)
          this.minute = parseInt(n / (60 * 1000)) + ''
          if (this.minute < 10) {
            this.minute = '0' + this.minute
          }
          let n2 = n % (60 * 1000)
          this.second = parseInt(n2 / 1000) + ''
          if (this.second < 10) {
            this.second = '0' + this.second
          }
        }, 1000)
      },
      timeDown() {
        this.$emit('timeDown')
      }
  },
    watch:{
      //监视轮播图
      carouselList(val){
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
      },
      //监视
      flashSaleIndexVO(val){
        this.count = this.flashSaleIndexVO.nextStartTime - new Date().getTime(),
          console.log(this.flashSaleIndexVO.nextStartTime, new Date().getTime())
        this.start()
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .wrap-home
    width 100%
    height 10px
    .home
      width 100%
      .content
        width 100%
        height 2rem
        .navWrap
          float left
          height 2rem
          white-space nowrap
          .item
            display inline-block
            width 2.4rem
            height 2rem
            margin-left  2rem
            span
              display inline-block
              width 2.4rem
              height 2rem
              margin-left  1rem
              font-size 16px
              line-height 2.3rem
              font-weight  700
              border-bottom rgba(0,0,0,0) solid 3px
              &.on
                border-bottom solid 3px #B9383D
                color #B9383D

      .swiper-container
        width: 100%
        height: 12rem
        img
          width 100%

      .ensure
        width 100%
        height 3rem
        text-align center
        line-height 2rem
        .item
          width 29%
          height 3rem
          display inline-block
          .textIcon
            width 2rem
            height 2rem
            img
              width 1rem
              height 1rem
          .ensureText
            font-size 12px
            margin-top -2rem


      .m-indexFllor
        width 100%
        height 19rem
        .m-header
          width 100%
          height 3rem
          text-align center
          line-height 3rem
          .m-header-text
            font-size 16px
            color #39474a
          .m-header-icon
            font-size 20px
            color #7e8c8d

        .m-goods
          width 100%
          height 16rem
          margin-bottom 2rem
          .m-list
            width 94%
            height 16rem
            margin-left 3%
            .m-item
              width 10rem
              height 8rem
              display inline-block
              margin-left: 1.5rem;
              background #F4F4F4
              margin-top 1rem
              border-radius .5rem
              a
                width 100%
                height 8rem
                display inline-block
                overflow hidden
                .m-item-text
                  width 100%
                  font-size 12px
                  color #333333
                  font-weight 200
                img
                  width 100%
                  display block
                  //height 7rem
                  margin-top -1rem
                .newIcon
                  display inline-block
                  width 2rem
                  height 1rem
                  border solid 1px #c9cc95
                  font-size 12px
                  font-family "微软雅黑"
                  margin-top .5rem

      .m-newItems
        width 100%
        height 18rem
        margin-top 3rem
        .hd
          width 100%
          height 7rem
          position relative
          overflow hidden
          background #F1F7FD
          margin-top 2rem
          &.bg-color
            background #FEF7E3
          a
            width 100%
            height 7rem
            .new-text
              height 3rem
              display block
              font-size 20px
              color #eee
              text-align center
              margin-top 2.3rem
            .findAll
              width 7rem
              height 1rem
              margin-top -1.3rem
              margin-left 40%
              .findAll-text
                font-size 14px
              .findAll-Icon
                font-size 20px
                color #7e8c8d

        .m-goodGrid
          width 100%
          height 13rem
          .m-goodGrid-list
            height 12rem
            white-space nowrap
            display inline-block
            .m-goodGrid-item
              width 9rem
              height 12rem
              display inline-block
              overflow hidden

              a
                display inline-block
                width 8.7rem
                height 12rem
                background  #F4F4F4
                .m-goodGrid-item-img
                  width 8rem
                  height 8rem
                  margin-left .4rem
                  img
                    width 100%
                    height 7rem
                .icontext
                  display block
                  width 2.5rem
                  height 1rem
                  font-size 12px
                  background orange
                  margin-left 1rem
                  color white
                  border-radius .2rem
                  word-spacing 2px
                .m-goodGrid-shopInfo
                  width 80%
                  height 1.5rem
                  margin-left .3rem
                  span
                    display block
                    width 100%
                    height 1.5rem
                    overflow hidden
                    margin-left 10%
                    text-overflow ellipsis
                    font-size 12px
                p
                  width 80%
                  margin-left 10%
                  font-size 12px
                  margin-top -.5rem
                  color: #7f7f7f

                .price
                  width: 80%;
                  height: 2rem;
                  margin-left: 10%;
                  color firebrick
                  font-size 14px
                  margin-top .4rem

      .m-indexFlash
        width 100%
        height 12.5rem
        padding 1rem
        box-sizing border-box
        position relative
        bottom-border-1px(#8896a7)
        .item-left
          width 10rem
          height 10rem
          overflow hidden
          float left
          bottom-border-1px(#8896a7)
          .title
            width 80%
            height 80%
            margin-left 10%
            margin-top 2rem
            font-size 1.2rem
            letter-spacing .4rem
            color blue
          .m-countdown
            width 80%
            height 2rem
            margin-top -6rem
            margin-left 10%
            span
              display inline-block
              height 1.8rem
            .hours
              width 1.8rem
              background black
              color white
              font-weight 400
              font-size 1.1rem
              text-align center
              line-height 2rem
              border-radius .2rem
            .mins
              width 1.8rem
              background black
              color white
              font-weight 400
              font-size 1.1rem
              text-align center
              line-height 2rem
              border-radius .2rem
            .secs
              width 1.8rem
              background black
              color white
              font-weight 400
              font-size 1.1rem
              text-align center
              line-height 2rem
              border-radius .2rem
          .next-title
            width 80%
            height 3rem
            span
              width 100%
              height 3rem
              display inline-block
              text-align center
              line-height 3rem
              font-size 12px
              margin-left 10%
              color black
        .item-right
          width 11rem
          height 10rem
          float right
          .m-lazyload
            width 90%
            height 10rem
            bottom-border-1px(#8896a7)
            img
              width 100%
              height 9rem
              margin-left 1rem
              margin-top 1rem
          .price
            width 3rem
            height 3rem
            border-radius 50%
            background orange
            position absolute
            top 7rem
            right 1.5rem
            span
              display inline-block
              font-size 12px
              text-align center
              margin-left .5rem
              color white
            .rmb1
              margin-top .6rem

      .m-sale
        width 100%
        height 9rem
        a
          width 100%
          height 100%
          img
            width 100%
      .m-special
        width 100%
        height 15rem
        .hd-special
          width 100%
          height 4.5rem
          .special-text
            display inline-block
            text-align center
            line-height 4rem
            font-size 20px
            color #eee
            margin-left 37%
          .findAll-Icon
            display inline-block
            width 1rem
            height 1rem
            background white

        .m-special-slide
          width 100%
          height 13rem
          .m-special-list
            display inline-block
            white-space nowrap
            .m-special-item
              width 18rem
              height 13rem
              display inline-block
              margin-left 1rem
              a
                display inline-block
                width 100%
                height 10rem
                font-size 0
                .special-item-img
                  width 100%
                  height 100%
                  display inline-block
                  overflow hidden
                  border-radius 1rem
                  img
                    width 100%


          .m-special-wrap
            width 100%
            height 3rem
            position relative
            .m-special-shopInfo
              margin-top .5rem
              width 100%
              height 1rem
              color #4E4E4E
              span
                font-size 14px
            .text-one
              font-size 12px
              color #7e8c8d
              display block
              line-height 1.5rem
            .special-price
              position absolute
              top 0
              right 0
              color #CB696C
              font-size 12px
              font-weight 500


      .m-titleGoodGrid
        width 100%
        margin-top 3rem
        h3
          width 100%
          height 4rem
          text-align center
          line-height 4rem
          font-size 14px
        .m-goodGrid
          width 100%
          .m-goodGrid-list
            width 100%
            .m-goodGrid-item
              display inline-block
              width 43%
              height 15rem
              margin-left 1rem
              a
                width 100%
                height 70%
                display inline-block
                background #F4F4F4
                .wrap
                  width 100%
                  img
                    width 100%
                  .m-goodGrid-text
                    display block
                    width 100%
                    height 2rem
                    background #F1ECE2
                    font-size 12px
                    text-align center
                    line-height 2rem


                .m-text-bottom
                  width 100%
                  height 2rem
                  span
                    width 100%
                    height 2rem
                    display block
                    text-align center
                    line-height 2rem
                    white-space nowrap
                    overflow hidden
                    text-overflow ellipsis
                    font-size 14px
                    color  black

                .m-price
                  color #B4282D
            .m-goodGrid-lastItem
              display inline-block
              width 43%
              height 15rem
              margin-left 1rem
              overflow hidden
              a
                width 100%
                height 70%
                display inline-block
                background #F4F4F4
                p
                  width 100%
                  height 7rem
                  font-size 16px
                  text-align center
                  line-height 7rem
                .toolsIcon
                  text-align center
                  width 4rem
                  height 4rem
                  margin-top -2rem
                  margin-left 3rem
                  i
                    font-size 4rem
                    color #7e8c8d

</style>
