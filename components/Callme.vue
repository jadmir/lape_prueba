<template>
  <div class="Callme">
    <p>
      <strong>
        <span style="color: #ffffff;">
          {{ $t('producto.preguntas') }}
        </span>
        <br />
        <span style="color: #ffcc00;">
          433-3003 / 424-9022
        </span>
      </strong>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Callme',
}
</script>

<style scoped lang="scss">
.Callme {
  padding: 30px;
  background-color: #2e3f85 !important;
  margin: 20px auto;
  width: 100%;

  p {
    margin: 0;
    text-align: center;
    font-size: 1.3em;
  }
}
</style>
