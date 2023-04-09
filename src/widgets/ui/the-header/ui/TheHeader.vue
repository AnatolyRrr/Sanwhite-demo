<template>
  <div class="header-background">
    <div class="container">
      <header class="container__fill header">
        <router-link to="/" class="header__logo">
          <img class="header__logo__image" src="/images/logo-short-green.png" alt="Логотип Sanwhite" />

          <h1 class="header__logo__title">Sanwhite</h1>
        </router-link>

        <nav ref="menu" class="header__nav" :class="{ 'header__nav--active': isOpenMenu }">
          <router-link
            to="/"
            class="header__nav__link"
            :class="{ 'header__nav__link--active': route.path === '/' }"
            @click="isOpenMenu = false"
            >Главная</router-link
          >
          <router-link
            to="/about"
            class="header__nav__link"
            :class="{ 'header__nav__link--active': route.path === '/about' }"
            @click="isOpenMenu = false"
            >О нас</router-link
          >
          <!-- <router-link to="/products" class="header__nav__link" :class="{'header__nav__link--active' : route.path === '/products'}" @click="isOpenMenu = false"
            >Продукция</router-link
          > -->
          <router-link
            to="/contact"
            class="header__nav__link"
            :class="{ 'header__nav__link--active': route.path === '/contact' }"
            @click="isOpenMenu = false"
            >Где купить</router-link
          >
        </nav>

        <div class="header__contact">
          <a class="header__contact__tel header__contact__link" href="tel:+74951422330"
            >+7(495)142-23-30</a
          >

          <a class="header__contact__email header__contact__link" href="mailto:Sanwhite22@mail.ru"
            >Sanwhite22@mail.ru</a
          >
        </div>

        <button
          class="header__hamburger"
          :class="{ 'header__hamburger--active': isOpenMenu }"
          @click="isOpenMenu = !isOpenMenu"
        >
          Открыть меню
        </button>
      </header>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

const route = useRoute()

const isOpenMenu = ref(false)

const menu = ref<any>(null)

watch(isOpenMenu, (newValue) => {
  if (newValue) {
    disableBodyScroll(menu)
  } else {
    enableBodyScroll(menu)
  }
})
</script>

<style scoped lang="scss">
.header-background {
  background: $base-white;
}

.header {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @include MIN_1200 {
    height: 80px;
  }

  &__logo {
    display: flex;
    align-items: center;
    height: 100%;

    &__image {
      height: 50%;
      margin-right: 8px;

      @include MIN_768 {
        height: 85%;
      }
    }

    &__title {
      @include heading-two-styles;
      color: $base-green-dark;

      @include MIN_768 {
        @include heading-one-styles;
      }
    }
  }

  &__nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: $base-white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: translateY(-100%);
    opacity: 0;
    transition: all ease-in-out 0.4s;

    &--active {
      transform: translateY(0);
      opacity: 1;
      z-index: 5;
    }

    @include MIN_768 {
      position: initial;
      width: max-content;
      flex-direction: row;
      transform: translateY(0);
      opacity: 1;
    }

    &__link {
      @include subtitle-two-styles;
      padding: 16px;
      text-transform: uppercase;
      color: $base-green-dark;
      transition: color 0.2s;

      &:hover {
        color: $base-green-light;
      }

      &--active {
        color: $base-green-light;
      }

      @include MIN_768 {
        @include caption-one-styles;
      }
    }
  }

  &__contact {
    display: none;

    @include MIN_768 {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 8px;
    }

    &__tel {
      @include subtitle-two-styles;
    }

    &__email {
      @include caption-one-styles;
    }

    &__link {
      transition: color 0.2s;
      color: $base-green-dark;

      &:hover {
        text-decoration: underline;
        color: $main-primary;
      }
    }
  }

  &__hamburger {
    @include size(24px);
    background: transparent;
    border: 0;
    font-size: 0;
    padding: 0;
    cursor: pointer;
    z-index: 6;
    position: relative;

    &::before,
    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 3px;
      background: $base-green-dark;
      position: absolute;
      top: 3px;
      left: 0;
      box-shadow: 0 8px 0 0 $base-green-dark, 0 16px 0 0 $base-green-dark;
      transition: all ease-in 0.4s;
    }

    &--active::before {
      top: 12px;
      transform: rotate(45deg);
      box-shadow: none;
    }

    &--active::after {
      top: 12px;
      transform: rotate(-45deg);
      box-shadow: none;
    }

    @include MIN_768 {
      display: none;
    }
  }
}
</style>
