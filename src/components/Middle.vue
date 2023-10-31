<template>
  <div class="middle section">
    <div class="secContainer container">
      <div class="grid">
        <span class="flex">
          <h1>10</h1>
          <p>World of Experience</p>
        </span>
        <span class="flex">
          <h1>2K+</h1>
          <p>Fine Destionations</p>
        </span>
        <span class="flex">
          <h1>10K+</h1>
          <p>Customer Reviews</p>
        </span>
        <span class="flex">
          <h1>4.6</h1>
          <p>Overall Rating</p>
        </span>
      </div>
    </div>
  </div>
</template>

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

.middle {
  width: 100%;

  .secContainer {
    .grid {
      padding: 1rem;
      border-radius: var(--borderRadius);
      background: var(--primaryColorLight);
      justify-content: center;
      margin: auto;
      gap: 2rem;

      span{
        justify-content: center;
        gap: .5rem;

        h1{
            font-size: var(--h1FontSize);
            font-weight: 700;
            color: var(--blackColor);
        }

        p{
            opacity: .8;
            max-width: 80px;
        }
      }
    }
  }
}
</style>