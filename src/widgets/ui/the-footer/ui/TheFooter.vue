import OzonIcon from '@/app/icons/OzonIcon.vue';

<template>
  <div class="background-grey">
    <div class="container">
      <footer class="container__fill footer">
        <div class="footer__map">
          <nav class="footer__map__nav">
            <router-link to="/" class="footer__map__nav__link">Главная</router-link>
            <router-link to="/about" class="footer__map__nav__link">О нас</router-link>
            <!-- <router-link to="/products" class="footer__map__nav__link">Продукция</router-link> -->
            <router-link to="/contact" class="footer__map__nav__link">Контакты</router-link>
          </nav>

          <div class="footer__map__contacts">
            <a class="footer__map__contacts__link" href="tel:+74951422330">+7(495)142-23-30</a>

            <a class="footer__map__contacts__link" href="mailto:Sanwhite22@mail.ru"
              >Sanwhite22@mail.ru</a
            >

            <a href="https://www.ozon.ru/seller/sanwhite-197936/products/?miniapp=seller_197936">
              <OzonIcon />
            </a>
          </div>
        </div>

        <p class="footer__footnote">2023 © Sanwhite. All rights reserved.</p>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import OzonIcon from '@/app/icons/OzonIcon.vue'
</script>

<style scoped lang="scss">
.background-grey {
  background: $base-grey;
  margin-top: auto;
}

.footer {
  padding: 12px 0;
  display: flex;
  flex-direction: column;

  @include MIN_768 {
    padding: 16px 0;
  }

  @include MIN_1200 {
    padding: 20px 0;
  }

  &__map {
    display: flex;
    justify-content: space-between;

    &__nav {
      display: flex;
      flex-direction: column;

      &__link {
        @include subtitle-two-styles;
        padding: 4px 0;
        transition: color 0.2s;

        &:first-child {
          padding-top: 0;
        }

        &:last-child {
          padding-bottom: 0;
        }

        &:hover {
          color: $main-primary;
        }
      }
    }

    &__contacts {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 8px;

      @include MIN_768 {
        gap: 12px;
      }

      &__link {
        @include caption-one-styles;
        transition: color 0.2s;

        &:hover {
          color: $main-primary;
          text-decoration: underline;
        }
      }
    }
  }

  &__footnote {
    @include footnote-one-styles;
    margin: 12px auto 0;

    @include MIN_768 {
      margin: 16px 0 0 auto;
    }

    @include MIN_1200 {
      margin-top: 20px;
    }
  }
}
</style>
