<template>
  <div class="navBar">
    <div class="logoDiv">
      <svg
        class="icon"
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 384 512"
      >
        <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path
          d="M40.1 467.1l-11.2 9c-3.2 2.5-7.1 3.9-11.1 3.9C8 480 0 472 0 462.2V192C0 86 86 0 192 0S384 86 384 192V462.2c0 9.8-8 17.8-17.8 17.8c-4 0-7.9-1.4-11.1-3.9l-11.2-9c-13.4-10.7-32.8-9-44.1 3.9L269.3 506c-3.3 3.8-8.2 6-13.3 6s-9.9-2.2-13.3-6l-26.6-30.5c-12.7-14.6-35.4-14.6-48.2 0L141.3 506c-3.3 3.8-8.2 6-13.3 6s-9.9-2.2-13.3-6L84.2 471c-11.3-12.9-30.7-14.6-44.1-3.9zM160 192a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
        />
      </svg>
      <span>OU-Trips</span>
    </div>

    <div class="menu" :class="{ showNavbar: isNavbarOpen }">
      <ul>
        <li class="navList">Destination</li>
        <li class="navList">About Us</li>
        <li class="navList">Testimonial</li>
        <li class="navList">Gallery</li>
      </ul>
      <!-- Icon to remove NavBar -->
      <svg
        class="icon closeIcon"
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 512 512"
        @click="toggleNavbar"
      >
        <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path
          d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
        />
      </svg>
    </div>
    <button class="signInBtn btn">Sign Up</button>
    <!-- Icon to toggle NavBar -->
    <svg
      class="icon menuIcon"
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      viewBox="0 0 448 512"
      @click="toggleNavbar"
    >
      <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
      <path
        d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
      />
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isNavbarOpen: false,
    };
  },
  methods: {
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
    },
  },
};
</script>

<!-- <script setup>
import { ref } from "vue";

const isNavbarOpen = ref(false);

const toggleNavbar = () => {
  isNavbarOpen.value = !isNavbarOpen.value;
};
</script>
  -->
<style lang="scss">
:root {
  --primaryColor: hsl(14, 90%, 53%);
  --primaryColorLight: hsl(14, 96%, 91%);
  --bgColor: hsl(0, 0%, 100%);
  --formColor: hsl(20, 42%, 87%);
  --whiteColor: hsl(0, 0%, 100%);
  --blackColor: hsl(0, 0%, 18%);
  --greyText: hsl(0, 0%, 51%);
  --inputColor: hsl(339, 12%, 97%);
  --cardColor: hsl(300, 3%, 94%);

  /* Font and Typography */
  --biggestFontSize: 2.5rem;
  --h1FontSize: 2rem;
  --h2FontSize: 1.25rem;
  --h3FontSize: 1rem;
  --normalFontSize: 0.938rem;
  --smallFontSize: 0.831rem;
  --smallestFontSize: 0.75rem;
  --borderRadius: 3rem;
}

.navBar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1.5rem 2rem;
  position: fixed;
  border-bottom: 1.5px solid rgb(211, 211, 211);
  backdrop-filter: blur(5px);
  z-index: 1000;

  .logoDiv {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  span {
    color: var(--blackColor);
    font-size: var(--h3FontSize);
    justify-content: center;
  }

  @media screen and (max-width: 767px) {
    .menu {
      position: absolute;
      width: 70%;
      top: -100rem;
      right: 50%;
      left: 50%;
      transform: translate(-50%);
      background: rgba(225, 255, 255, 0.94);
      padding: 2rem;
      border-radius: 10px;
      transition: 0.8s ease-in-out;
      backdrop-filter: blur(5px);
      box-shadow: 0 2px 3px 4px rgba(236, 213, 213, 0.516);
    }

    li {
      font-size: var(--h3FontSize);
      font-weight: 500;
      padding: 1rem 0;
      text-align: center;
      cursor: pointer;
      &:hover {
        color: var(--primaryColor);
        border-bottom: 1.5px solid var(--primaryColor);
      }
    }
  }

  .menuIcon,
  .closeIcon {
    font-size: var(--h1FontSize);
    &:hover {
      color: var(--primaryColor);
    }
  }

  .closeIcon {
    position: absolute;
    bottom: -15px;
    right: 50%;
    left: 50%;
    color: var(--blackColor);
    transform: translate(-50%);
  }

  .showNavbar {
    top: 8rem;
  }
}
</style>
