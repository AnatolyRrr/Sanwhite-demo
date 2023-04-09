<template>
  <section>
    <div class="container">
      <main class="container__fill about">
        <div class="about__paragraph">
          <img
            src="/images/logo-large.png"
            alt="Логотип компании"
            class="about__paragraph__image left-small"
          />

          <p class="about__paragraph__text right-big">
            <b>Sanwhite</b> появился на свет в самый подходящий и важный период в нашей истории.
            Период, когда стране нужен свой <b>высококачественный</b> и достойный продукт по
            <b>выгодной цене</b>, и Sanwhite определенно оставит безукоризненно блестящий след в
            истории бытовой химии, потому что мы совершенно точно знаем потребности современных
            домохозяек и любителей чистоты ­— это
            <b>ЭФФЕКТИВНОСТЬ, ДОСТУПНОСТЬ, БЕЗОПАСНОСТЬ.</b>
          </p>
        </div>

        <div class="about__paragraph mobile-hidden">
          <img
            src="/images/whiteness-empty.png"
            alt="Изображение товара"
            class="about__paragraph__image two-columns"
          />

          <p class="about__paragraph__text center">
            Любовь к чистоте и порядку подтолкнули нас на создание самых важных и нужных средств в
            доме. Спрей «АНТИЖИР 1 минутка» и универсальная «Белизна 3в1» — самые востребованные
            средства в арсенале каждой домохозяйки.
          </p>

          <img
            src="/images/antifat-empty.png"
            alt="Изображение товара"
            class="about__paragraph__image two-columns"
          />
        </div>

        <div class="about__paragraph reverse">
          <img
            src="/images/meter.png"
            alt="Изображение измерителя"
            class="about__paragraph__image right-small"
          />

          <p class="about__paragraph__text left-big">
            Мы позаботились о том, чтобы процесс уборки проходил <b>БЫСТРО</b> и <b>ЭФФЕКТИВНО</b>,
            а это значит, что хозяйки берегут самое ценное в современном мире — <b>ВРЕМЯ</b> и
            наслаждаются счастливыми моментами с семьей.
          </p>
        </div>

        <div class="about__paragraph">
          <img
            src="/images/rating.png"
            alt="Изображение рейтинга"
            class="about__paragraph__image left-small"
          />

          <p class="about__paragraph__text right-big">
            Наша продукция изготовлена на заводе под присмотром
            <b>высококвалифицированных</b> опытных специалистов и чутких работников склада по всем
            требуемым стандартам, поэтому мы полностью уверены в том, что <b>Sanwhite</b> достоин
            вашего внимания и должен быть в каждом доме!
          </p>
        </div>

        <div class="about__store-btn">
          <a href="https://www.ozon.ru/seller/sanwhite-197936/products/?miniapp=seller_197936">
            <BaseButton variant="outline" color="primary">ПЕРЕЙТИ В МАГАЗИН</BaseButton>
          </a>
        </div>
      </main>
    </div>
  </section>
</template>

<script setup lang="ts">
import { BaseButton } from '@/shared/ui'
</script>

<style scoped lang="scss">
.about {
  display: flex;
  flex-direction: column;

  @include MIN_768 {
    padding-top: 24px;
  }

  .mobile-hidden {
    display: none;

    @include MIN_768 {
      display: grid;
    }
  }

  &__paragraph {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 12px;
    margin-bottom: 24px;

    @include MIN_768 {
      grid-template-columns: repeat(12, 1fr);
      grid-auto-flow: dense;
      margin-bottom: 32px;
      grid-gap: 16px;

      .left-small {
        grid-column: 2 / span 4;
      }

      .right-big {
        grid-column: 6 / span 6;
      }

      .right-small {
        grid-column: 8 / span 4;
      }

      .left-big {
        grid-column: 2 / span 6;
      }

      .center {
        grid-column: 3 / span 8;
        margin: auto;
        background: rgb(80, 186, 174, 0.2);
        padding: 40px;
        text-align: center;
        border-radius: 12px;
      }

      .two-columns {
        grid-column: span 2;
        margin: auto;
      }
    }

    @include MIN_1200 {
      grid-gap: 20px;
      margin-bottom: 36px;
    }

    &__image {
      width: 100%;
      border-radius: 12px;
    }

    &__text,
    b {
      @include subtitle-one-styles;
      text-align: justify;
      line-height: 24px;

      @include MIN_768 {
        font-size: 1.8rem;
        line-height: 28px;
      }

      @include MIN_1200 {
        font-size: 2.4rem;
        line-height: 36px;
      }
    }

    b {
      font-weight: 600;
    }
  }

  &__store-btn {
    width: 100%;
    margin: 0 auto 40px;

    @include MIN_768 {
      width: 70%;
    }

    @include MIN_1200 {
      width: 50%;
      margin: 12px auto 40px;
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
