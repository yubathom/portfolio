<template>
  <header class="section-open-source-item-header">
    <div class="section-open-source-item-header__icon-container">
      <slot name="icon" />
    </div>
    <hr>
    <p class="section-open-source-item-header__from-now">
      {{ createdAtFromNow }}
    </p>
  </header>
</template>
<script>
export default {
  name: 'SectionOpenSourceItemHeader',
  props: {
    createdAtFromNow: {
      type: String,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
.section-open-source-item-header {
  display: flex;
  align-items: center;
  font-size: small;
  &__icon-container {
    height: 22px;
    margin-right: 0.5rem;
  }
  hr {
    width: -moz-available;
    width: -webkit-fill-available;
    height: 0;
    border-top: 1px solid $grey-1;
  }
  &__from-now {
    margin-left: 0.5rem;
    white-space: nowrap;
    text-align: right;
  }
}
</style>
