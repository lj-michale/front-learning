<template>
  <div id="main">
    <div id="app1">
      <p>{{count}}</p>
      <p>{{price}}</p>
      <p>{{sum}}</p>
    </div>
    <div id="app2">
      <p>商品名称：{{name}}</p>
      <p>商品价格：{{price}}</p>
      <p>商品名称和价格：{{namePrice}}</p>
    </div>
    <div><h3 align="center">商品购物车</h3></div>
    <div>
      <label>
         <input type="checkbox" v-model="checkAll"> 全选
      </label>
      <label>
        <input type="checkbox" v-model="checkNo"> 反选
      </label>
    </div>
    <ul>
      <li v-for="(item,index) in list" :key="item.id">
        <div>
          <label>
            <input type="checkbox" v-model="item.checked">
            {{item.name}}
          </label>
          ￥ {{item.price}}
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button type="button"  @click="item.nums>1?item.nums-=1:1">-</button>
          数量：{{item.nums}}
          <button type="button"  @click="item.nums+=1">+</button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          小计：{{item.nums*item.price}}
        </div>
      </li>
    </ul>
    <p align="right">总价：{{sumPrice}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button type="button"  @click="save" >提交订单</button></p>
    <div id="app3">
      <button @click="sum2++">增加数值</button>
    </div>
  </div>

</template>

<script>
export default{
  data(){
    return {
      count:10,
      price:9.9,
      name:"洗衣机",
      price2:"6800元",
      list: [{
        id: 1,
        name: '洗衣机',
        checked: true,
        price: 6800,
        nums: 1,
      },
        {
          id: 2,
          name: '电视机',
          checked: true,
          price: 4900,
          nums: 1,
        },
        {
          id: 3,
          name: '饮水机',
          checked: true,
          price: 1000,
          nums: 3,
        },
      ],
      sum2: 1,

    }
  },
  computed:{
    sun:()=>{
      return this.count*this.price;
    },
    namePrice:{
      //getter方法，显示时调用
      get:function(){
        //拼接name和price2，getter需要return
        return this.name+ "**"+this.price2;
      },
      //setter方法，设置namePrice时调用，其中参数用来接收新设置的值，可在控制台更改namePrice
      set:function(newName){
        var names=newName.split(' ');  //以空格拆分字符串
        this.name=names[0];
        this.price2=names[1];           //setter不需要return
      }
    },
    //全选
    checkAll: {
      // 设置值,当点击全选按钮的时候触发
      set(v) {
        this.list.forEach(item => {
          item.checked = v
        });
      },
      // 取值,当列表中的选择改变之后触发
      get() {
        return this.list.length === this.list.filter(item => item.checked == true).length;
      },
    },
    //反选
    checkNo: {
      set() {
        this.list.forEach(item => {
          item.checked = !item.checked;
        });
      },
      get() {
        // return this.list.length === this.list.filter(item => item.checked == true).length;
      },
    },
    // 总价计算
    sumPrice() {
      return this.list
        .filter(item => item.checked)
        /* reduce*******************************
        arr.reduce(function (prev, cur, index, arr) {
            ...
        }, init);
        arr 表示原数组；
        prev 表示上一次调用回调时的返回值， 或者初始值 init;
        cur 表示当前正在处理的数组元素；
        index 表示当前正在处理的数组元素的索引， 若提供 init 值， 则索引为0， 否则索引为1；
        init 表示初始值。
        常用的参数只有两个： prev 和 cur
        求数组项之和
        var sum = arr.reduce(function (prev, cur) {
            return prev + cur;
        }, 0); */
        .reduce((pre, cur) => {
          return pre + cur.nums * cur.price;
        }, 0);
    },
  },
  watch:{
    sum:(newVal,oldVal)=>{
      this.sumChanged(newVal);
    },
    // New: 新值 | Old: 老值
    sum2(New, Old) {
      console.log(`新值:${New} ——— 老值:${Old}`)
    },
  },
  created(){

  },
  mounted(){

  },
  methods:{
    sumChanged(newSum){
      console.log("总价已更新为：",this.sum);
    },
    save() {
      console.log(this.list.filter(item =>
        item.checked
      ));
    }
  }
}
</script>
