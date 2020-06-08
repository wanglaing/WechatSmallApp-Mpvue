<template>
  <div :class="isIphoneX ? 'pageViewtab isIphoneX': 'pageViewtab'">
    <navigation-bar
      :title="'校品直购'"
      :navBackgroundColor="'#ff5555'"
      :titleColor="barTitleColor"
      :Navlist="[]"
      :back-visible="false"
      :home-path="''"
    ></navigation-bar>
    <div class="ApplyCarcontainer">
      <div class="ApplyTopInfo">
        <div class="CardInfo">
          <img
            class="CardBg"
            src="http://q1471.img.aiyichuan.com/urm_huodong/20190402/1554168337927.jpg"
            mode="widthFix"
          />
          <div class="UserInfo">
            <div class="left">
              <div class="txImg">
                <img
                  src="https://wx.qlogo.cn/mmopen/vi_32/YNV2U2IJlQuoDEV8VZJHVm6AxibXRdmCxEsx2Ieu9XjzfufxqRQcNnFd04EEk067ia2QQQhasAl3CjBnjmkJvu3g/132"
                  mode="widthFix"
                />
              </div>
              <div class="word">干得少，赚得多</div>
            </div>
            <div class="right">
              <p>已加入会员</p>
              <p>264人</p>
            </div>
          </div>
        </div>
      </div>
      <div class="ApplyBottomInfo">
        <div class="ApplyTitle">选择会员</div>
        <div class="ApplyCardList">
          <div  v-for="(item,index) in CardList" :key="index" :class="selectCards===index ? 'list select' : 'list'" @click="handCarsSelect(index)">
            <div class="list-info">
              <p>{{item.TypeText}}</p>
              <h2>{{item.Redenvelopes}}</h2>
              <p>有效期：{{item.term}}</p>
            </div>
            <div class="list-pries">
              <label class="big">{{item.Price}}</label>
              <label class="Small">{{item.OriginalPrice}}</label>
            </div>
          </div>
          <div class="ApplyCardsBtn">
            <a href="javascript:void(0)">
              立即开通
            </a>
            <p>
              若有会员激活码，请输入<text>激活码</text>
            </p>
          </div>
        </div>
      </div>
      <div class="ApplyBottomInfo" style="padding-top:40rpx;border-bottom:0;">
        <div class="ApplyTitle">会员权益</div>
        <div class="MenberInfo">
          <img src="http://q1471.img.aiyichuan.com/urm_huodong/20181107/1541563547692.jpg" mode="widthFix">
        </div>
      </div>
      <div class="MenberShop" v-if="false">
        <img class="bgImg" src="http://ui.aiyichuan.com/xcx_urm/img/card/bg_card-tabs.png" mode="widthFix">
        <h2 class="MenberTitle">
          会员专属
        </h2>
      <div class="shopList">
        <div class="list">
          <a href="../shopDetails/main?Id=0">
            <div class="list-img">
              <img
                src="http://q1471.img.aiyichuan.com/urm_huodong/20191014/1571021935953.jpg"
                mode="widthFix"
              />
            </div>
            <div class="list-word">【全国200家酒店 1年免费住】如程会员一晚就回本！只要￥688！近200家特色酒店一年内免费住！</div>
            <div class="list-price">
              <div class="MerberInfo">
                <span>会员</span>
                <label>
                  优惠
                  <text>5</text>元
                </label>
              </div>
              <div class="price">
                <div class="PriceLeft">
                  <label class="big">￥688.00</label>
                  <label class="Small">￥880.00</label>
                </div>
                <div class="ByBtn">立即购买</div>
              </div>
            </div>
          </a>
        </div>
        <div class="list">
          <a href="../shopDetails/main?Id=0">
            <div class="list-img">
              <img
                src="http://q1471.img.aiyichuan.com/urm_huodong/20191107/1573094364597.jpg"
                mode="widthFix"
              />
            </div>
            <div
              class="list-word"
            >【前滩&闵行星河湾 | 奈尔宝3次1大1小 双11年度福利巨献】抢原价1600元【奈尔宝家庭中心】“轻奢卡”一张！每卡含3次1大1小亲子入场门票！有效期长达半年！可拆分3次使用，也可和好友分享，同时使用！最高可同时使用3组！明星孩子都打卡的“航母级”儿童乐园，引爆一线城市！</div>
            <div class="list-price">
              <div class="MerberInfo">
                <span>会员</span>
                <label>
                  优惠
                  <text>5</text>元
                </label>
              </div>
              <div class="price">
                <div class="PriceLeft">
                  <label class="big">￥666.00</label>
                  <label class="Small">￥1600.00</label>
                </div>
                <div class="ByBtn">立即购买</div>
              </div>
            </div>
          </a>
        </div>
        <div class="list">
          <a href="../shopDetails/main?Id=0">
            <div class="list-img">
              <img
                src="http://q1471.img.aiyichuan.com/urm_huodong/20191107/1573092151249.jpg"
                mode="widthFix"
              />
            </div>
            <div
              class="list-word"
            >【上海24店通用 | 三件任洗 上门取送件】上海24店通用，衣服洗的好，秋冬没烦恼~112元抢原价225元海马洗衣三件任洗套餐，秋冬必抢，买起来！</div>
            <div class="list-price">
              <div class="MerberInfo">
                <span>会员</span>
                <label>
                  优惠
                  <text>5</text>元
                </label>
              </div>
              <div class="price">
                <div class="PriceLeft">
                  <label class="big">￥112.00</label>
                  <label class="Small">￥225.00</label>
                </div>
                <div class="ByBtn">立即购买</div>
              </div>
            </div>
          </a>
        </div>
      </div>
      </div>
    </div>
    <vue-tabBar :selectNavIndex="1"></vue-tabBar>
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
      barBgColor: '#FBA306',
      barTitleColor: '#FFFFFF',
      selectCards: 0,
      CardList: [
        {
          Id: 1,
          Type: 2,
          TypeText: '季度',
          Redenvelopes: '',
          term: '90天',
          Price: '￥150.00',
          OriginalPrice: '￥168.00'
        },
        {
          Id: 2,
          Type: 2,
          TypeText: '半年卡',
          Redenvelopes: '',
          term: '半年',
          Price: '200.00',
          OriginalPrice: '228.00'
        },
        {
          Id: 3,
          Type: 3,
          TypeText: '年卡超级会员',
          Redenvelopes: '',
          term: '一年',
          Price: '300.00',
          OriginalPrice: '328.00'
        }
      ]
    }
  },
  components: {
    navigationBar,
    vueTabBar
  },
  onShow () {
    // this.GetData()
  },
  onPageScroll (e) {},
  created () {},
  methods: {
    handCarsSelect (i) {
      this.selectCards = i
    },
    async GetData () {
      let self = this
      self.GetBanner()
    },
    async GetBanner () {
      let self = this
      self.$request({
        method: 'get',
        data: {
          Action: 'BannerList',
          Type: 1
        }
      }).then(res => {
        self.Banner = res.DecorateTypeList.map(item => {
          item.BigImgUrl = self.$config.requeststatic + item.BigImgUrl
          return item
        })
      }).catch(err => {
        // console.log(err)
      })
    }
  },
  computed: {
    count () {
      return this.$store.state.main.count
    }
  }
}
</script>
<style lang="less" scoped>
.pageViewtab {
  padding-bottom: 110rpx;
  min-height: calc(100% - 110rpx);
  width: 100%;
  .ApplyCarcontainer {
    .ApplyTopInfo {
      background-color: #ff5555;
      height: 260rpx;
      padding: 30rpx;
      padding-bottom: 0rpx;
      position: relative;
      border-radius: 0 0 40rpx 40rpx;
      .CardInfo {
        margin-top: 20rpx;
        position: relative;
        img.CardBg {
          width: 100%;
        }
        .UserInfo {
          position: absolute;
          bottom: 15%;
          left: 4%;
          right: 4%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #ffffff;
          .left {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            .txImg {
              width: 100rpx;
              height: 100rpx;
              border-radius: 50%;
              overflow: hidden;
              margin-right: 10rpx;
              img {
                width: 100%;
                border-radius: 50%;
              }
            }
            .word {
              font-size: 22rpx;
              color: #ffffff;
            }
          }
          .right {
            p {
              font-size: 22rpx;
              line-height: 1.8;
            }
          }
        }
      }
    }
    .ApplyBottomInfo {
      padding: 20rpx 30rpx;
      padding-top: 100rpx;
      border-bottom: 20rpx solid #f8f8f8;
      .ApplyTitle {
        font-size: 32rpx;
        font-weight: 600;
        position: relative;
        margin-bottom: 20rpx;
        &::before {
          content: "";
          display: block;
          position: absolute;
          top: 104%;
          width: 32rpx;
          height: 4rpx;
          background-color: #ff5555;
        }
      }
      .ApplyCardList{
        padding-bottom: 20rpx;
        .list{
          border:2rpx solid #DCDCDC;
          box-sizing: border-box;
          padding: 20rpx;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 20rpx;
          &.select{
            border-color: #ff5555;
            position: relative;
            &::before{
              content: "";
              display: black;
              background-image: url(data:image/png;base64,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);
              width: 70rpx;
              height: 70rpx;
              background-size: 100%;
              position: absolute;
              top: 0;
              right: 0;
            }
          }
          .list-info{
            p{
              font-size: 26rpx;
              color: #666666
            }
            h2{
              font-size: 28rpx;
              color: #222222;
              font-weight: bold;
              margin: 10rpx 0;
            }
          }
          .list-pries{
            display: flex;
            justify-content: flex-start;
            align-items: flex-end;
            flex-direction: column;
            .big{
              font-size: 30rpx;
              font-weight: 600;
              color: #ff5555;
            }
            .Small{
              font-size:26rpx;
              color: #666666;
              text-decoration: line-through;
            }
          }
        }
        .ApplyCardsBtn {
          a{
            display: block;
            border-radius: 40rpx;
            background-color: #ff5555;
            color: #ffffff;
            font-size: 32rpx;
            font-weight: 600;
            text-align: center;
            padding: 20rpx 0;
            margin: 20px 0;
          }
          p{
            font-size: 26rpx;
            color: #666666;
            text-align: center;
            text{
              color: #ff5555;
            }
          }
        }
      }
      .MenberInfo{
        img{
          width: 100%;
        }
      }
    }
    .MenberShop{
      position: relative;
      img.bgImg{
        width: 100%;
        position: absolute;
        top: 0;
        left:0;
        width: 100%;
      }
      .MenberTitle{
        position: relative;
        z-index: 1;
        font-size: 32rpx;
        color: #222222;
        text-align: center;
        font-weight: 600;
        padding-top: 30rpx;
        padding-bottom: 40rpx;
      }
      .shopList {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin: 20rpx;
        position: relative;
        z-index: 1;
        .list {
          display: flex;
          flex-direction: column;
          width: 100%;
          margin-top: 30rpx;
          .list-img {
            img {
              width: 100%;
              border-radius: 5px;
            }
          }
          .list-word {
            font-size: 28rpx;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            margin: 10rpx auto;
          }
          .list-price {
            .MerberInfo {
              display: flex;
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
              justify-content: space-between;
              align-items: center;
              .PriceLeft{
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
              }
              .ByBtn{
                background-color: #ff5555;
                color: #ffffff;
                font-size: 26rpx;
                padding: 10rpx 18rpx;
                border-radius: 10rpx;
              }
            }
          }
        }
      }
    }
  }
}
</style>
