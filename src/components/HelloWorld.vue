<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <fullcalendar :events=demoArr ref='calendar' locale="zh-CN" @changeMonth='swipeCallBack'></fullcalendar>
    
  </div>
</template>

<script>
  import fullcalendar from "./fullCalendar/fullCalendar";
export default {
  name: 'HelloWorld',
  components:{
    fullcalendar
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      demoArr:[]
    }
  },
  methods: { 
    swipeCallBack(a, b, c) {
      let arr = this.dateFormatter(c._d).split('-');
      arr.splice(2,1);
      console.log(arr.join('-'));
    },
    dateFormatter(params) {
      if(typeof params === 'string') {
        return new Date(Date.parse(params.replace('-', '/')));
      } else {
        let year = params.getFullYear(),
          month = params.getMonth() < 9 ? '0' + (params.getMonth() + 1) : params.getMonth() + 1,
          day = params.getDate() < 9 ? '0' + params.getDate() : params.getDate();
          return `${year}-${month}-${day}`;
      }
    }
  },
  mounted() {
    //获取了年份信息-----------------------------------------
    //console.log(this.$refs.calendar.getNowMonth())
    let date=this.$refs.calendar.getNowMonth();
    console.log(this.dateFormatter('2017-11-11'));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
