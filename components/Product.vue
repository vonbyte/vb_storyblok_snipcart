<template>
  <div class="product">
    <div class="product__images">
      <div v-if="blok.images.length">
        <img :src="selectedImage.filename || blok.images[0].filename" :alt="selectedImage.name">
        <ul class="product__thumbs">
          <li class="product__thumb" v-for="image in blok.images" :key="image.filename" @click="selectedImage = image">
            <img class="product__thumb-image" :src="image.filename" :alt="image.name">
          </li>
        </ul>
      </div>
    </div>
    <div class="product__information">
      <h1 class="product__headline">{{blok.name}}</h1>
      <div class="product__price">CHF {{blok.price}}</div>
      <div class="product__description" v-html="$options.filters.markdown(blok.description)" />
      <button
        class="snipcart-add-item"
        :data-item-id="blok._uid"
        :data-item-name="blok.name"
        :data-item-price="blok.price"
        :data-item-url="`localhost:3000${$nuxt.$route.path}`">
        In den Warenkorb
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Product',
  props: ['blok'],
  data () {
    return {
      selectedImage: {}
    }
  }
}
</script>

<style lang="scss">
  .product {
    padding-top: 60px;
    margin: 0 auto;
    max-width: 1000px;
    display: flex;
    flex-direction: row;

    &__thumbs {
      margin-top: 50px;
    }
    &__thumb {
      display: inline-block;
      list-style: none;
      width: 55px;
      margin-right: 10px;
      padding: 5px 10px 5px 5px;
      border: 1px solid #ccc;
      cursor: pointer;

    }
    &__images,
    &__information {
      margin: 0 0.5rem;
      width: calc(100% / 3 * 1);
    }

    &__images {
      margin-right: 25px;
      img {
        max-width: 100%;
      }
    }

    &__price {
      font-size: 30px;
      margin-top: 20px;
      margin-bottom: 25px;
    }

    &__description {
      margin-bottom: 20px;
      h2 {
        margin-top: 20px;
        margin-bottom: 10px;
      }
    }
  }
  .snipcart-add-item {
    appearance: none;
    display: inline-block;
    padding: 15px 20px;
    cursor: pointer;
    font-size: 20px;
    background: #000;
    color: #ffffff;
  }

</style>
