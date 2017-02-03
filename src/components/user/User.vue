<template>
    <div>
        <h1>The User Page</h1>
        <button @click="renderHome" class="btn btn-primary">Go to Home</button>
        <hr>
        <router-view></router-view>
    </div>
</template>
<script>
    export default{
        methods :{
            renderHome() {
                this.$router.push('/')
            }
        }
    }

//    export default{
//        data(){
//            return {
//                id: this.$route.params.id
//            }
//        },
//        watch:{
//            '$route'(to,from){
//                this.id=to.params.id;
//            }
//        },
//        methods :{
//            renderHome() {
//                this.$router.push('/')
//            }
//        }
//    }
</script>