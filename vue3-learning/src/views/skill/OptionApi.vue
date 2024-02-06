<template>
  <div id="main">
    <p>{{count}}</p>
    <p>{{price}}</p>
    <p>{{sum}}</p>
    <div id="app">
      <p>商品名称：{{name}}</p>
      <p>商品价格：{{price}}</p>
      <p>商品名称和价格：{{namePrice}}</p>
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
      price2:"6800元"
    }
  },
  computed:{
    sun:()=>{
      return this.count*this.price2;
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
    }
  },
  watch:{
    sum:(newVal,oldVal)=>{
      this.sumChanged(newVal);
    }
  },
  created(){

  },
  mounted(){

  },
  methods:{
    sumChanged(newSum){
      console.log("总价已更新为：",this.sum);
    }
  }
}
</script>
