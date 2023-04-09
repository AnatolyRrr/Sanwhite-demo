<template>
  <section>
    <div class="container">
      <div class="container__fill">
        <main v-if="isProduct" class="product">
          <img
            class="product__main-image"
            :src="productContent.imageSmall"
            alt="Основное изображение"
          />

          <div class="product__description">
            <h1 class="product__description__title">
              {{ productContent.title }}
            </h1>

            <p class="product__description__text">
              {{ productContent.description }}
            </p>

            <a :href="productContent.link" class="product__description__link">
              <BaseButton variant="filled" color="honey">Перейти в магазин</BaseButton>
            </a>
          </div>
        </main>

        <p v-else class="product__not-found">Страница товара не найдена</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import { products } from '@/entities/lib/products'
import { BaseButton } from '@/shared/ui'

const isProduct = ref(true)

const route = useRoute()

const productContent = reactive({
  link: '',
  imageLarge: '',
  imageSmall: '',
  title: '',
  description: ''
})

onBeforeMount(() => {
  const index = products.findIndex((product) =>
    route.params.id === product.id.toString() ? true : false
  )

  if (index === -1) {
    isProduct.value = false
  } else {
    productContent.imageLarge = products[index].imageLarge
    productContent.imageSmall = products[index].imageSmall
    productContent.title = products[index].title
    productContent.description = products[index].description
    productContent.link = products[index].link
  }
})
</script>

<style scoped lang="scss">
.product {
  margin: 0 0 32px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;

  @include MIN_768 {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    margin: 32px 0;
  }

  &__main-image {
    width: 100%;
    border-radius: 5px;
  }

  &__description {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: auto;

    @include MIN_768 {
      gap: 32px;
    }

    &__text {
      @include subtitle-one-styles;
      letter-spacing: 0.2px;
    }

    &__link {
      width: 50%;

      .base-button {
        @include subtitle-two-styles;
        height: 52px;
      }
    }
  }

  &__not-found {
    @include heading-two-styles;
    margin: 64px 0;
    text-align: center;
  }
}
</style>
