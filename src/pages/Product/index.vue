<template>
  <div :class=" isIphoneX ? 'pageViewtab isIphoneX': 'pageViewtab'">
    <navigation-bar
      :title="'校品直购'"
      :navBackgroundColor="'#ffffff'"
      :titleColor="'#222222'"
      :Navlist="[]"
      :back-visible="false"
      :home-path="'../home/main'"
    ></navigation-bar>
    <div class="ShopNav">
      <div
        class="croll_x_box"
        style="height: 90rpx;line-height:90rpx;"
        >
        <div v-for="(item,index) in ShopNav" :key="index" :data-Select="item.Select" :data-index="index"  :class="item.Select ? 'Item active' : 'Item'" @click="handSelect(index,$event)">{{item.Name}}</div>
      </div>
    </div>
    <div class="ShopNav" style="position: static;"></div>
    <div class="shopList">
      <div class="list" v-for="(item,index) in Bew.Shoplist" :key="index">
<!--        +'&IsDJ='+item.IsDJ-->
        <a :href="'../ShopDetails/main?Id='+item.Id">
          <div class="list-img">
            <img
              :src="item.img"
              mode="widthFix"
            />
<!--            <span v-if="item.IsDJ==1" class="TipsWord">预售</span>-->
          </div>
          <div class="list-word">
            {{item.name}}
          </div>
          <div class="list-price">
            <div class="MerberInfo">
              <span>会员</span>
              <label>
                优惠
                <text>5</text>元
              </label>
            </div>
            <div class="price">
              <label class="big">￥ {{item.price}}</label>
              <label class="Small">￥ {{item.oprice}}</label>
              <label class="salecount">销量:{{item.salecount}}</label>
            </div>
          </div>
        </a>
      </div>
    </div>
    <vue-tabBar :selectNavIndex="2"></vue-tabBar>
  </div>
</template>

<script>
import navigationBar from '@/components/navigationBar.vue'
import vueTabBar from '@/components/vueTabBar.vue'
import mixin from '@/mixin'

export default {
  mixins: [mixin],
  data () {
    return {
      ScrollLeft: 0,
      page: 1,
      Bew: {'State': 1, 'Shoplist': [{'Id': 1, 'name': '三季园服', 'price': '68.00', 'oprice': '98.00', 'discount': '10.0', 'salecount': '3532', 'img': 'https://dummyimage.com/790x790'}, {'Id': 2, 'name': '三季园服', 'price': '68.00', 'oprice': '108.00', 'discount': '10.0', 'salecount': '601', 'img': 'https://dummyimage.com/790x790'}, {'Id': 3, 'name': '三季园服', 'price': '29.90', 'oprice': '46.00', 'discount': '10.0', 'salecount': '424', 'img': 'https://dummyimage.com/790x790'}, {'Id': 4, 'name': '三季园服', 'price': '75.00', 'oprice': '0.00', 'discount': '10.0', 'salecount': '329', 'img': 'https://dummyimage.com/790x790'}, {'Id': 5, 'name': '三季园服', 'price': '60.00', 'oprice': '0.00', 'discount': '10.0', 'salecount': '30', 'img': 'https://dummyimage.com/790x790'}, {'Id': 6, 'name': '三季园服', 'price': '80.00', 'oprice': '0.00', 'discount': '10.0', 'salecount': '30', 'img': 'https://dummyimage.com/790x790'}]},
      ShopNav: [{'Type': 0, 'Select': true, 'Name': '最新发布'}, {'Type': 1, 'Select': false, 'Name': '销量最高'}, {'Type': 2, 'Select': false, 'Name': '价格最低'}, {'Type': 3, 'Select': false, 'Name': '价格最高'}]
    }
  },
  components: {
    navigationBar,
    vueTabBar
  },
  async onShow () {
    // await this.GetData()
  },
  onPageScroll (e) { },
  created () {},
  methods: {
    async GetData () {
      try {
        const { Shoplist } = await this.$service.app.GetShopsList({
          page: this.page,
          OpenId: this.OpenId,
          Type: this.ShopNav.filter(item => item.Select === true)[0].Type
        })
        this.Bew = Shoplist
      } catch (e) {

      }
    },
    async handSelect (i, e) {
      this.ScrollLeft = e.currentTarget.offsetLeft
      this.ShopNav = this.ShopNav.map(item => {
        item.Select = false
        return item
      })
      this.ShopNav[i].Select = true
      this.GetData()
    }
  },
  mounted () { },
  computed: { }
}
</script>
<style lang="less">
.pageViewtab {
  padding-bottom: 110rpx;
  min-height: calc(100% - 110rpx);
  width: 100%;
  background-color: #f5f5f5;
  .ShopNav{
    background-color: #ffffff;
    width: 100%;
    height:90rpx;
    line-height:90rpx;
    margin-top: -1rpx;
    position: fixed;
    z-index: 9999;
    .croll_x_box{
      width:100%;/* calc( 100% - 100rpx)*/
      display: flex;
      justify-content: space-around;
      align-items: center;
      .Item{
        padding: 0 20rpx;
        color: #222222;
        font-size: 28rpx;
        white-space: nowrap;
        position: relative;
        &::before{
          content: "";
          display: block;
          width: 0%;
          height: 4rpx;
          background-color: #ff5555;
          transition: all 0.5s;
          transform-origin: center center;
          position: absolute;
          top: calc(100% - 4rpx);
          left: 50%;
          transform: translate(-50%,0);
        }
        &.active{
          color: #ff5555;
          font-weight: 600;
          font-size: 30rpx;
          &::before{
            width: 80%;
          }
        }
      }
    }
  }
   .shopList {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 20rpx;
    padding-top: 20rpx;
    background-color: #f5f5f5;
    font-size: 0;
    .list {
      display: flex;
      flex-direction: column;
      width: calc((100% / 2) - 20rpx);
      margin-top: 20rpx;
      background-color: #ffffff;
      border-radius: 15rpx;
      box-shadow: 0 0 8rpx 2rpx rgba(0, 0, 0, 0.02);
      &:nth-child(2n) {
        margin-left: 20rpx;
      }
      &:nth-child(1) {
        margin-top: 0;
      }
      &:nth-child(2) {
        margin-top: 0;
      }
      a{
        display: block;
        margin: 10rpx;
      }
      .list-img {
        position: relative;
        img {
          width: 100%;
          border-radius: 5px;
        }
        .TipsWord{
          position: absolute;
          top: 0;
          right: 0;
          padding: 10rpx;
          border-radius: 0 0 0 20rpx;
          background-color: #ff5555;
          color: #fff;
          font-size: 24rpx;
          padding-left: 18rpx;
        }
      }
      .list-word {
        font-size: 28rpx;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        margin: 10rpx auto;
      }
      .list-price {
        .MerberInfo {
          display: none;
          justify-content: flex-start;
          align-items: center;
          padding: 5rpx;
          span {
            font-size: 18rpx;
            color: #222222;
            background-color: #ff5555;
            padding: 2rpx 8rpx;
            border-radius: 5rpx 0 0 5rpx;
            position: relative;
            z-index: 3;
          }
          label {
            background-color: #222222;
            padding: 2rpx 8rpx;
            padding-left: 12rpx;
            font-size: 18rpx;
            border-radius: 0rpx 5rpx 5rpx 0rpx;
            color: #ffffff;
            position: relative;
            overflow: hidden;
            &::after {
              content: "";
              background-color: #ff5555;
              width: 12rpx;
              height: 120%;
              position: absolute;
              top: 0;
              right: 91%;
              transform: rotate(-15deg);
            }
            text {
              color: #ff5555;
            }
          }
        }
        .price {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          position: relative;
          .big {
            font-size: 30rpx;
            color: #ff5555;
            font-weight: 600;
          }
          .Small {
            font-size: 22rpx;
            color: #999999;
            padding: 0 5rpx;
            text-decoration: line-through;
          }
          .salecount{
            position: absolute;
            right: 0;
            font-size: 22rpx;
            color: #999999;
            font-weight: bold;
          }
        }
      }
    }
  }
}
</style>
