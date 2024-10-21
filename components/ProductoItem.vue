<template>
  <nuxt-link :to="link" class="ed-item m-30 Card">
    <div class="Card--content">
      <img
        :style="
          image.img === '/productos-also/cover-shoes.webp'
            ? 'height: 280px !important;'
            : ''
        "
        :src="image.img"
        alt="image.alt"
      />
    </div>
    <h2 class="Card--Title">{{ title }}</h2>
  </nuxt-link>
</template>

<script>
export default {
  name: 'ProductoItem',

  props: {
    image: {
      required: true,
      type: Object,
    },

    link: {
      type: String,
      required: true,
    },

    title: {
      required: true,
      type: String,
    },
  },
}
</script>

<style lang="scss" scoped>
a {
  color: #000;
  text-decoration: none;
  &:hover {
    color: #000;
  }
}
.Card {
  background: #f7f7f7;
  border-radius: 10px;
  cursor: pointer;
  margin: 1em;
  transition: 0.8s;
  /* border: 1px solid red; */
  width: 360px;
  height: 400px;

  &:hover {
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  }

  &--content {
    width: 100%;
    height: 320px;
    /* border: 1px solid blue; */

    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  &--Title {
    font-family: 'Open Sans', sans-serif;
    font-size: 20px;
    padding: 15px;
    text-align: center;
    font-weight: 700;
  }
}
</style>
