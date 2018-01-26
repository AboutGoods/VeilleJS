<template>
    <div>
        <h1>VeilleJs</h1>
    </div>
</template>

<script>
    import { articleService } from "../services/index.js";
    export default {
        data() {
            return {
                articles : []
            }
        },
        mounted(){
            articleService.find({}).then(articles => {
                this.articles = articles.data;
                console.log(this.articles);
            });
        }
    }
</script>

<style scoped>

</style>
