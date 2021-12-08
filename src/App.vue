<template>
  <div class="App">
    <div class="swipe">
      <van-swipe :autoplay="3000" :height="160">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img class="van-swipe-item-img" v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="notice">
      <van-notice-bar left-icon="volume-o" text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。" />
    </div>
    <div class="main">
      <ul>
        <li v-for="(item, index) in icons" :key="index"><img :src="item" alt="" /><span>多多超市</span></li>
      </ul>
    </div>
    <div class="container">
      22
      <router-view></router-view>
    </div>
    <div class="footer">
      <van-tabbar v-model="active" @change="onChange" active-color="#ee0a24" inactive-color="#000">
        <van-tabbar-item icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item icon="search">分类</van-tabbar-item>
        <van-tabbar-item icon="friends-o">购物车</van-tabbar-item>
        <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import {mapState,mapGetters,mapMutations ,mapActions} from 'vuex';
import Vant from 'vant';
import 'vant/lib/index.css';
import { Lazyload } from 'vant';
Vue.use(Lazyload);
Vue.use(Vant);
export default {
  name: 'App',
  data() {
    return {
      num: 10,
      active: 0,
      images: [
        'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/181068/13/16622/771845/6102a71aE15dbe36e/c7f4953bb30e1efe.png!cr_1053x420_4_0!q70.jpg.dpg',
        'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/187260/5/17810/152610/6115d753E6e1be741/c0c1860e0ad3036f.jpg!cr_1053x420_4_0!q70.jpg.dpg',
        'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/172166/20/20372/178803/60f5d479E8938e491/6688e406c3e4c391.jpg!cr_1125x449_0_166!q70.jpg.dpg',
        'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/190297/34/14988/66270/60fe63cfE3a0a87dc/19112ae83598729a.jpg!cr_1125x449_0_166!q70.jpg.dpg',
      ],
      icons: [
        'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/175540/24/19329/6842/60ec0b0aEf35f7384/ec560dbf9b82b90b.png!q70.jpg.dpg',
        'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/178015/31/13828/6862/60ec0c04Ee2fd63ac/ccf74d805a059a44.png!q70.jpg.dpg',
        'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/41867/2/15966/7116/60ec0e0dE9f50d596/758babcb4f911bf4.png!q70.jpg.dpg',
        'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/177902/16/13776/5658/60ec0e71E801087f2/a0d5a68bf1461e6d.png!q70.jpg.dpg',
        'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/196472/7/12807/7127/60ec0ea3Efe11835b/37c65625d94cae75.png!q70.jpg.dpg',
        'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/185733/21/13527/6648/60ec0f31E0fea3e0a/d86d463521140bb6.png!q70.jpg.dpg',
        'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/36069/14/16068/6465/60ec0f67E155f9488/595ff3e606a53f02.png!q70.jpg.dpg',
        'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/186080/16/13681/8175/60ec0fcdE032af6cf/c5acd2f8454c40e1.png!q70.jpg.dpg',
        'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/196711/35/12751/6996/60ec1000E21b5bab4/38077313cb9eac4b.png!q70.jpg.dpg',
        'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/37709/6/15279/6118/60ec1046E4b5592c6/a7d6b66354efb141.png!q70.jpg.dpg',
      ],
    };
  },
   async mounted() {
    // console.log('olderAge',this.aliasAge);
     await this.newsetAge(10)
    // console.log('newAge',this.aliasAge);
    // console.log('11',this.aliasName);
    // this.$store.commit('setName','传参')
    // this.fn('fn传参')
    // console.log('22',this.aliasName);

  },
  computed:{
    ...mapGetters({newGetMessage:'getMessage'}),
    ...mapState({aliasName:'name'}),
    ...mapState({aliasAge:'age'}),
  },
  methods: {
    ...mapActions({newsetAge:'setAge'}),
    ...mapMutations({fn:'setName'}),
    onChange(index) {
      console.log(111, index);
      if(index === 0) this.$router.push({path:'/foo'});
      if(index === 1) this.$router.push({path:'/bar'});
      if(index === 2) this.$router.push({path:'/car'});
      if(index === 3) this.$router.push({path:'/my'});
      // Notify({ type: 'primary', message: index });
    },
  },
};
</script>
<style scoped lang="scss">
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.van-swipe-item-img {
  // background-size:100%;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
}
.main {
  padding: 30px 10px 30px 10px;
  ul {
    width: 100%;
    height: 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 40px 0px;
    li {
      width: 60px;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      img {
        width: 80%;
        height: 80%;
      }
      span {
        font-size: 14px;
        line-height: 40px;
      }
    }
  }
}
.container{
  margin-top: 50px;
  box-sizing: border-box;
  border: 1px red solid;
  width: 100%;
  height: 200px;
}
</style>