<template>
  <div class="card-layout product-card">
    <img :src="image" alt="Антижир" class="product-card__image" />

    <h3 class="product-card__title">{{ title }}:</h3>

    <p class="product-card__description">
      {{ description }}
    </p>

    <div class="product-card__btn">
      <router-link :to="`/products/${id}`">
        <BaseButton variant="filled" color="green">Подробнее</BaseButton>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BaseButton } from '@/shared/ui';

export type ProductCardProps = {
  id: string | number;
  title: string;
  description: string;
  image: string;
}

defineProps<ProductCardProps>();
</script>

<style scoped lang="scss">
.product-card {
  max-width: 360px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  &__image {
    width: auto;
    margin: auto;
    height: 300px;
    border-radius: 8px;
  }

  &__description {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }

  &__btn {
    width: 50%;
    margin-left: auto;
  }
}
</style>
