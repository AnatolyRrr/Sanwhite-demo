<template>
  <section>
    <div class="container">
      <main class="container__fill products">
        <div class="products__card-wrapper">
          <ProductCard
            v-for="product of products"
            :key="product.id"
            :id="product.id"
            :title="product.title"
            :description="product.description"
            :image="product.imageEmpty"
          />
        </div>

        <div class="products__store-btn">
          <a href="https://www.ozon.ru/seller/sanwhite-197936/products/?miniapp=seller_197936">
            <BaseButton variant="outline" color="primary">ПЕРЕЙТИ В МАГАЗИН</BaseButton>
          </a>
        </div>
      </main>
    </div>
  </section>
</template>

<script setup lang="ts">
import { products } from '@/entities/lib/products'
import { ProductCard } from '@/entities/ui'
import { BaseButton } from '@/shared/ui'
</script>

<style scoped lang="scss">
.products {
  @include MIN_768 {
    margin-top: 12px;
  }

  &__card-wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;

    @include MIN_768 {
      gap: 16px;
      justify-content: flex-start;
    }

    @include MIN_1200 {
      gap: 20px;
    }
  }

  &__store-btn {
    width: 100%;
    margin: 40px auto;

    @include MIN_768 {
      width: 70%;
    }

    @include MIN_1200 {
      width: 50%;
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
