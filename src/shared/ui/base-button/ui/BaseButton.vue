<template>
  <button class="base-button" :class="[variant, color]">
    <slot />
  </button>
</template>

<script setup lang="ts">
export type BaseButtonProps = {
  variant: 'flat' | 'outline' | 'filled'
  color: 'primary' | 'honey' | 'green'
}

defineProps<BaseButtonProps>()
</script>

<style scoped lang="scss">
.base-button {
  @include caption-one-styles;
  border: 0;
  width: 100%;
  height: 28px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.1s;

  @include MIN_768 {
    height: 36px;
  }
}

.filled.primary {
  background: $main-primary;
  color: $base-white;

  &:hover {
    box-shadow: 0px 0px 10px rgba(35, 171, 240, 0.65);
  }

  &:focus, &:active {
    background: darken($main-primary, 10%);
  }
}

.filled.green {
  background: $base-green-light;
  color: $base-white;

  &:hover {
    box-shadow: 0px 0px 10px rgba(80, 186, 174, 0.65);
  }

  &:focus, &:active {
    background: darken($base-green-light, 10%);
  }
}

.filled.honey {
  background: $base-honey;
  color: $base-white;

  &:hover {
    box-shadow: 0px 0px 10px rgba(247, 191, 20, 0.65);
  }

  &:focus, &:active {
    background: darken($base-honey, 10%);
  }
}

.outline.primary {
  background: transparent;
  border: 1px solid $main-primary;
  color: $main-primary;

  &:hover {
    background: lighten($main-primary, 45%);
  }

  &:focus, &:active {
    background: lighten($main-primary, 40%);
  }
}

.outline.green {
  background: transparent;
  border: 1px solid $base-green-light;
  color: $base-green-light;

  &:hover {
    background: lighten($base-green-light, 45%);
  }

  &:focus, &:active {
    background: lighten($base-green-light, 40%);
  }
}

.outline.honey {
  background: transparent;
  border: 1px solid $base-honey;
  color: $base-honey;

  &:hover {
    background: lighten($base-honey, 45%);
  }

  &:focus, &:active {
    background: lighten($base-honey, 40%);
  }
}

.flat.primary {
  background: transparent;
  width: max-content;
  height: max-content;
  padding: 4px;
  color: $main-primary;

  &:hover, &:focus, &:active {
    color: darken($main-primary, 20%)
  }
}

.flat.green {
  background: transparent;
  width: max-content;
  height: max-content;
  padding: 4px;
  color: $base-green-light;

  &:hover, &:focus, &:active {
    color: darken($base-green-light, 20%)
  }
}

.flat.honey {
  background: transparent;
  width: max-content;
  height: max-content;
  padding: 4px;
  color: $base-honey;

  &:hover, &:focus, &:active {
    color: darken($base-honey, 20%)
  }
}
</style>
