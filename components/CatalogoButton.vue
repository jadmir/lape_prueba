<template>
  <a v-if="$i18n.locale === 'es'" href="/#productos" class="Button">{{
    $t('home.cat_button')
  }}</a>
  <a v-else href="/en/#productos" class="Button">{{ $t('home.cat_button') }}</a>
</template>

<script>
export default {
  name: 'CatalogoButton',
}
</script>

<style lang="scss" scoped>
.Button {
  display: block;
  background: none;
  border-color: rgb(255, 255, 255);
  border-style: solid;
  border-width: 1px;
  color: rgb(255, 255, 255);
  cursor: pointer;
  font-family: Roboto;
  font-size: 17px;
  line-height: 17px;
  padding: 12px 35px;
  transition: all 0.8s;
  margin: 5px auto;
  text-decoration: none;
  height: 50px;
  width: 270px;
  justify-content: center;
  align-items: center;
  display: flex;
  font-family: Arial, Helvetica, sans-serif;

  &:hover {
    background-color: rgb(46, 63, 133);
    border-color: rgb(46, 63, 133);
  }
}
</style>
