<template>
  <div class="container">
    <section class="container__fill home">
      <picture class="home__main-image">
        <source class="home__main-image" media="(max-width: 768px)" srcset="/images/main-small.png" />
        <img class="home__main-image" src="/images/main-large.png" alt="Основное изображение" />
      </picture>

      <main class="home__main">
        <h2 class="home__main__title">ПОПУЛЯРНЫЕ ТОВАРЫ</h2>

        <div class="home__main__products">
          <ProductCard
            v-for="product of popularProducts"
            :key="product.id"
            :id="product.id"
            :title="product.title"
            :description="product.description"
            :image="product.imageEmpty"
          />
        </div>
      </main>

      <div class="home__store-btn">
        <a href="https://www.ozon.ru/seller/sanwhite-197936/products/?miniapp=seller_197936">
          <BaseButton variant="outline" color="primary">ПЕРЕЙТИ В МАГАЗИН</BaseButton>
        </a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { products } from '@/entities/lib/products'
import { ProductCard } from '@/entities/ui'
import { BaseButton } from '@/shared/ui';

const popularProducts = computed(() =>  products.filter(product => product.popular === true));
</script>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  gap: 12px;

  @include MIN_768 {
    margin-top: 12px;
    gap: 20px;
  }

  @include MIN_1200 {
    gap: 32px;
  }

  &__main-image {
    width: 100%;
    border-radius: 12px;
  }

  &__main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;

    &__title {
      color: $base-green-dark;
    }

    &__products {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 12px;

      @include MIN_768 {
        gap: 16px;
      }

      @include MIN_1200 {
        gap: 20px;
      }
    }
  }

  &__store-btn {
    width: 100%;
    margin: 28px auto 40px;

    @include MIN_768 {
      width: 70%;
      margin: 20px auto 40px;
    }

    @include MIN_1200 {
      width: 50%;
      margin: 8px auto 40px;
    }

    .base-button {
      height: 48px;

      @include MIN_1200 {
        height: 60px;
      }
    }
  }
}
</style>
