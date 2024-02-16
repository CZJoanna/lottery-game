<script lang="ts" setup>
const counts = ref(6)
const currPage = ref('lottery-result')
const showPage = (pageName: string) => {
  currPage.value = pageName
}
</script>

<template>
  <div un-position="relative">
    <div
      v-show="currPage === 'lottery-result'"
      un-min-h="screen"
      un-flex="~ justify-center items-center"
    >
      <div
        un-w="100%"
        un-p="y-2rem sm:4rem"
        un-gap="2rem"
        class="grid-container"
      >
        <div
          v-for="i in 10"
          :key="i"
        >
          <div
            un-p="1rem"
            un-bg="#2b8dcf"
            un-rd="1rem"
            un-text="#fff"
            class="animate"
            :style="{ animationDelay: `${i * 0.5}s` }"
          >
            <div
              un-flex="~ col items-center"
              un-text="1.8rem"
              un-gap="1rem"
            >
              <span>陳大明</span>
              <span un-text="1rem">20210906</span>
              <span un-text="1rem">資訊研發</span>
              <span>恭喜獲得 iphone 15 1 支</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-button
      un-position="!fixed"
      un-z="!5"
      un-left="!5px"
      un-top="!5px"
      @click="showPage('game-start')"
    >
      繼續抽獎
    </el-button>
  </div>
</template>

<style scoped lang="scss">
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30vh, 30vw));
  justify-content: space-around;
}

.animate {
  animation: popup 1s ease-in-out;
  animation-fill-mode: backwards;
}

@keyframes popup {

  0% {
    opacity: 0;
    transform: scale(0);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
