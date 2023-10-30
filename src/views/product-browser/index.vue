<template>
  <div class="seckill-content">
    <h2 style="margin-left: 17px;">{{ productsWithCat.catName }}</h2>
    <el-card v-for="product in productsWithCat.products" :key="product.proId" class="seckill-item" shadow="hover">
      <router-link :to="'productDetail/'+ product.proId">
        <div class="seckill-item-img">
          <img :src="product.image">
        </div>
        <div class="seckill-item-info">
          <p>{{ product.title }}</p>
          <p>
            <span class="seckill-price text-danger">
              <svg-icon icon-class="money" />{{ product.minRetailPrice }}
            </span>
            <span class="seckill-retail-price"><s>{{ product.retailPrice }}</s></span>
          </p>
        </div>
      </router-link>
    </el-card>
  </div>
</template>

<script>
import {
  getAllProduct
} from '@/api/product-browser.js'
export default {
  name: 'BvoGoodsView',
  data() {
    return {
      pageLoading: true,
      currentDate: new Date(),
      productsWithCats: []// {catName: "", products: [{proId: "",image: "",title: "",minRetailPrice: "",retailPrice: ""}]}
    }
  },
  created() {
    this.getAllProductInfo()
  },
  methods: {
    getAllProductInfo() {
      this.tableLoading = true
      return new Promise((resolve, reject) => {
        getAllProduct().then(response => {
          this.productsWithCats = response.data
          console.log(response.data)
          resolve()
          this.tableLoading = false
          this.pageLoading = false
        }).catch(error => {
          reject(error)
          this.tableLoading = false
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
