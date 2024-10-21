<template>
  <div :class="['Item ed-item to-center', grid]">
    <img :src="image.img" :width="width" :height="height" :alt="image.alt" />
    <div class="Item--Content">
      <p class="Item--Content--Main">
        <strong>{{ primaryText }}</strong>
        <br v-if="secondaryText.length >= 0" />
        <strong v-if="secondaryText.length >= 0">{{ secondaryText }}</strong>
      </p>
      <p v-if="alternativeText.length >= 0" class="Item--Content--Secondary">
        {{ alternativeText }}
      </p>
      <p v-if="thirdText.length >= 0" class="Item--Content--Secondary">
        {{ thirdText }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CertificacionItem',

  props: {
    image: {
      type: Object,
      required: true,
    },

    width: {
      type: Number,
      required: true,
    },

    height: {
      type: Number,
      required: true,
    },

    primaryText: {
      type: String,
      required: true,
    },

    secondaryText: {
      type: String,
      default: '',
    },

    alternativeText: {
      type: String,
      default: '',
    },

    thirdText: {
      type: String,
      default: '',
    },

    grid: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.Item {
  text-align: center;
  padding: 0 15px;
  margin-bottom: 40px;

  &--Content {
    text-align: center;
    color: #ffffff;

    &--Main {
      font-size: 20px;
      line-height: 30px;
    }

    &--Secondary {
      font-size: 12px;
    }
  }

  p {
    margin: 0;
  }
}
</style>
