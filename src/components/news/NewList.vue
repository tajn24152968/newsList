<template>
    <div class="tmpl">
         <nav-bar title="新闻列表"></nav-bar>
    <div class="demo">
      <ul>
            <li v-for="list in newList" :key="list.id">
                <router-link :to="{name:'news.detail',query:{listId:list.id}}">
                    <img class="" :src="list.img_url">
                    <div >
                        <span>{{list.title|covertTitle(13)}}</span>
                        <div class="news-desc">
                            <p>点击数:{{list.click}}</p>
                            <p>发表时间:{{list.add_time|convertTime}}</p>
                        </div>
                    </div>
                </router-link>
            </li>
            <li class="line"></li>
        </ul>
    </div>

    </div>
</template>
<script>
    export default {
        created(){
            this.$axios.get('getnewslist')
            .then(res=>{
                this.newList=res.data.message
            })

        },
        data(){
            return{
               newList:[]
            }
        }

       
    }
</script>
<style scoped>
.demo a {
    display: block;
    width: 330px;
    height: 44px;
    color: #000;
    padding: 10px 15px;
}
.demo img {
    float: left;
    width: 42px;
    height: 42px;
    margin-right: 20px;
}
.demo a div {
    float: left;
    width: 238px;
    margin-right: 20px;
}
.demo span {
    display: block;
    width: 100%;
    font-size: 17px;
    line-height: 21px;
/*    white-space: nowrap;
    overflow: hidden;*/
}
.demo a p {
    float: left;
    color: #0bb0f5;
    font-size: 14px;
    line-height: 21px;
}
.demo p:nth-child(2) {
    float: right;
}

.line {
    margin-left: 16px;
    transform: scaleY(.5);
    border-bottom: 1px solid #c8c7cc;
}




</style>
