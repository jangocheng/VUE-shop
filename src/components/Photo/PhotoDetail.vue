<template>
    <div>  
        <nav-bar title="图文详情"></nav-bar>
        <div class="photo-title">
            <p>{{img.title}}</p>
            <span>发起日期：{{img.add_time|convertTime}}</span>
            <span>{{img.click}}次浏览</span>
            <span>分类：民生经济</span>
        </div>
        <my-ul>
            <my-li v-for="(i,index) in imgs" :key="index">
                <img class="preview-img" :src="i.src" @click="$preview.open(index, imgs)">
            </my-li>
        </my-ul>
        <div class="photo-desc">
            <p v-html="img.content"></p>
        </div>
    </div>
</template>
 
<script>
export default {
    data () {
      return {
        list: [{
          src: 'https://placekitten.com/600/400',
          w: 600,
          h: 400
        }, {
          src: 'https://placekitten.com/1200/900',
          w: 1200,
          h: 900
        }]
      }
    }
  }
</script>
            </my-li>    
        </my-ul>
        <div class="photo-desc">
            <p v-html="img.content"></p>
        </div>
    </div>
</template>
<script>
export default{
    created(){
        let imgId = this.$route.params.imgId;
        this.$axios.get('getimageInfo/' + imgId)
        .then(res=>{
            this.img = res.data.message[0];
        })
        .catch(err=>{
            console.log(err);
        });
        this.$axios.get('getthumimages/' + imgId)
        .then(res=>{
            this.imgs = res.data.message;
            this.imgs.forEach(element => {
                element.w = 600;
                element.h = 400;
            });
        })
    },
    data(){
        return{
            img:[],
            imgs:[]
        }
    },

}
</script>
<style scoped>
img{
    width:100%;
    height: 100%;
}
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

</style>
