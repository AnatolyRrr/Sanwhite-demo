<template>
  <section>
    <div class="container">
      <main class="container__fill contact">
        <div class="card-layout">
          <h1>Где купить?</h1>
          <h3>Все наши товары доступны для покупки онлайн:</h3>

          <a href="https://www.ozon.ru/seller/sanwhite-197936/products/?miniapp=seller_197936">
            <BaseButton variant="flat" color="primary">ПЕРЕЙТИ В МАГАЗИН</BaseButton>
          </a>

          <h2>Контакты</h2>

          <h4>Телефон: <a href="tel:+74951422330">+7(495)142-23-30</a></h4>
          <h4>Почта: <a href="mailto:Sanwhite22@mail.ru">Sanwhite22@mail.ru</a></h4>
        </div>
      </main>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseButton from '@/shared/ui/base-button/ui/BaseButton.vue';
</script>

<style scoped lang="scss">
.container__fill {
  @include MIN_1200 {
    grid-column: 3 / span 8;
  }
}

.contact {
  padding-bottom: 40px;
  .card-layout {
    margin-top: 40px;
    color: $base-green-dark;

    h3 {
      margin-top: 32px;
      margin-bottom: 8px;
      margin-right: 8px;
      display: inline-block;
    }

    h2 {
      margin-top: 32px;
      margin-bottom: 12px;
    }

    h4 {
      margin-top: 8px;

      a {
        @include subtitle-one-styles;
        color: $main-primary;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    .base-button {
      @include heading-three-styles;
      padding: 0;
    }
  }
}
</style>