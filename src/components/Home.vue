<template>
  <div class="Home">
    <div class="videoBg">
      <video :src="videoSource" autoplay loop muted></video>
    </div>

    <div class="sectionText">
      <h1>Unlock Your Travel Dreams with Us!</h1>
      <p>
        Discover the world's most adventurous nature, life is si short for a
        trip.
      </p>
      <button class="btn flex">GET STARTED</button>
    </div>

    <div class="popularPlaces">
      <div class="content">
        <h3>Popular Places</h3>
        <div class="images flex"></div>
      </div>
    </div>
  </div>
</template>

<script>
import videoSource from "../assets/Video_01.mp4";

export default {
  data() {
    return {
      videoSource,
    };
  },
};
</script>


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

.Home {
  position: relative;
  height: 95vh;
  width: 100%;
  top: 0;

  .videoBg {
    position: absolute;
    height: 100%;
    width: 100%;

    video {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .sectionText {
    position: absolute;
    height: 100%;
    top: 30%;
    bottom: 50%;
    color: var(--whiteColor);
    padding: 0 1.3rem;

    h1 {
      font-size: var(--biggestFontSize);
      font-weight: 900;
    }

    p {
      padding: 1rem 0;
      font-size: var(--normalFontSize);
      font-weight: 500;
    }
    .btn {
      gap: 0.5rem;
      padding-left: 2rem;
      padding-right: 2rem;
      font-size: var(--h3FontSize);
    }
  }

  .popularPlaces{
    display: none;
  }
}
</style>