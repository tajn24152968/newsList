<template>
    <div class="tmpl">
        <!-- 引入返回导航 -->
        <div class="photo-header">
            <ul>
                <li v-for="cate in cateInfo" :key="cate.id">
                    <a href="javascript:;" @click="category(cate.id)">{{cate.title}}</a>
                </li>
            </ul>
        </div>
        <div class="photo-list">
            <ul>
                <li v-for="img in imgInfo" :key="img.id">
                    <router-link :to="{name:'img.detail',params:{imgId:img.id}}">
                        <img :src="img.img_url">
                        <p>
                            <span>{{img.title}}</span>
                            <br>
                            <span>{{img.zhaiyao}}</span>
                        </p>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
  export default {
      data(){
          return {
              imgInfo:[],
              cateInfo:[]
          }
      },
      methods:{
         category(id){
             this.$axios.get('getimages/'+id)
             .then(res=>{
                 this.imgInfo=res.data.message
                 if(this.imgInfo.length==0){
                     this.$toast({
                      message: '暂时没有图片',
                      position: 'middle',
                      duration: 5000
});
                 }
             })
         }
      },
      created(){
            let categoryId=this.$route.params.categoryId;
            console.log(categoryId);
          this.$axios.all([
              this.$axios.get('getimages/'+categoryId),
              this.$axios.get('getimgcategory')
          ])
          .then(this.$axios.spread(
              (imgRes,catRes)=>{
                   this.imgInfo=imgRes.data.message;
                   this.cateInfo=catRes.data.message
                   this.cateInfo.unshift({
                       id:0,
                       title:'全部'
                   })
              }
              ))
      }
  }
</script>
<style>
.photo-header li {
    list-style: none;
    display: inline-block;
    margin-left: 10px;
    height: 30px;
}

.photo-header ul {
    /*强制不换行*/
    white-space: nowrap;
    overflow-x: auto;
    padding-left: 0px;
    margin: 5;
}


/*下面的图片*/

.photo-list li {
    list-style: none;
    position: relative;
}

.photo-list li img {
    width: 100%;
    height: 230px;
    vertical-align: top;
}

.photo-list ul {
    padding-left: 0px;
    margin: 0;
}

.photo-list p {
    position: absolute;
    bottom: 0px;
    color: white;
    background-color: rgba(0, 0, 0, 0.3);
    margin-bottom: 0px;
}

.photo-list p span:nth-child(1) {
    font-weight: bold;
    font-size: 16px;
}



</style>
