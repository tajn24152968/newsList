<template>
    <div>  
        <div class="photo-title">
            <p>{{imgInfo.title}}</p>
            <span>发起日期:{{imgInfo.add_time|convertTime}}</span>
            <span>{{imgInfo.click}}次浏览</span>
            <span>分类：民生经济</span>
        </div>
        <my-ul>
            <my-li v-for="(img,index) in humImg" :key="index">
               <img class="preview-img":src="img.src" alt="" @click="$preview.open(index, humImg)">
            </my-li>    
        </my-ul>
        <div class="photo-desc">
            <p></p>
        </div>
    </div>
</template>
<script>
     export default{
         data(){
              return {
                  imgInfo:{},
                  humImg:[]
              }
         },
         created(){
              let id=this.$route.params.imgId;
              console.log(id)
              this.$axios.all([
                  this.$axios.get('getimageInfo/'+id),
                  this.$axios.get('getthumimages/'+id)
              ])
              .then(this.$axios.spread((imgRes,humRes)=>{
                  this.imgInfo=imgRes.data.message[0]
                  this.humImg=humRes.data.message
                 this.humImg.forEach(ele=>{
                      ele.h = 400;
                      ele.w = 600;
            })
              }))
         }
     }
</script>
<style scoped>
li {
    list-style: none;
}

ul {
    margin: 0;
    padding: 0;
}

.photo-title {
    overflow: hidden;
}

.photo-title,
.photo-desc {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding-bottom: 5px;
    margin-bottom: 5px;
    padding-left: 5px;
}

.photo-title p {
    color: #13c2f7;
    font-size: 20px;
    font-weight: bold;
}

.photo-title span {
    margin-right: 20px;
}

.photo-desc p {
    font-size: 18px;
}
img {
    width: 100%;
}

</style>
