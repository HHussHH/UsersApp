<template>
  <header class="header">
    <Container>
      <div class="header__inner">
        <h1 class="header__title">admin customer service</h1>
        <nav class="header__nav">
          <RouterLink to="/" class="header__link">
            Список покупателей
          </RouterLink>

          <ModalWindow>
            <template #btn="{ toggleOpenModalWin }">
              <a class="header__link" @click="toggleOpenModalWin">
                Создать нового пользователя
              </a>
            </template>
            <template #windowContent="{ toggleOpenModalWin }">
              <CreateNewUserWindow :toggleOpenModalWin="toggleOpenModalWin" />
            </template>
          </ModalWindow>
        </nav>
      </div>
    </Container>
  </header>
</template>

<script setup lang="ts">
import { Container } from "@/shared/ui";
import { CreateNewUserWindow, ModalWindow } from "@/entities/ui";
</script>

<style lang="less" scoped>
@import "@/app/styles/vars.less";
.header {
  position: sticky;
  top: 0px;
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid @gray;
  @media (min-width: @TV) {
    border-bottom: 2px solid @gray;
  }

  &__inner {
    height: 60px;
    display: flex;
    align-items: center;
    gap: 30px;
    flex-direction: row;
    @media (min-width: @TV) {
      height: 70px;
    }
    @media (max-width: @mobile) {
      flex-direction: row;
      gap: 0px;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  &__title {
    text-transform: capitalize;

    font-weight: 600;
    font-size: 20px;

    line-height: 24px;

    color: #000;

    @media (min-width: @TV) {
      font-size: 26px;
    }

    @media (max-width: @tablet) {
      font-size: 14px;
    }
    @media (max-width: @mobile) {
      font-size: 18px;
    }
  }
  &__nav {
    display: flex;
    gap: 30px;
    @media (max-width: @tablet) {
      flex-direction: column;
      gap: 0px;
    }
  }
  &__link {
    color: @gray-dark;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    line-height: 17px;
    @media (min-width: @TV) {
      font-size: 20px;
    }
  }
}
</style>
