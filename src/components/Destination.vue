<template>
  <div class="destination section container">
    <div class="secContainer">
      <div class="">
        <span class="redText"> EXPLORE NOW </span>
        <h3>Find Your Dream Destination</h3>
        <p>
          Fill in the fields below to find the best spot for your next tour.
        </p>
      </div>

      <div class="searchField grid">
        <div class="inputField flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 384 512"
            class="icon"
          >
            <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
            />
          </svg>
          <input type="text" placeholder="Location" />
        </div>
      </div>

      <div class="searchField grid">
        <div class="inputField flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 576 512"
            class="icon"
          >
            <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M64 32C28.7 32 0 60.7 0 96v32H576V96c0-35.3-28.7-64-64-64H64zM576 224H0V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V224zM112 352h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16z"
            />
          </svg>
          <input type="text" placeholder="Location" />
        </div>
        <div class="inputField flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
            class="icon"
          >
            <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"
            />
          </svg>
          <input type="text" placeholder="Location" />
        </div>

        <button class="btn flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
            class="icon"
          >
            <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
            />
          </svg>
          Search
        </button>
      </div>

      <div class="secMenu">
        <ul class="flex">
          <li class="active">All</li>
          <li>Recommended</li>
          <li>Beach</li>
          <li>Park</li>
          <li>Nature</li>
          <li>Mountain</li>
        </ul>
      </div>

      <div class="destinationContainer grid">
        <div
          class="singleDestination"
          v-for="destination in destinations"
          :key="destination.id"
        >
          <div class="imgDiv">
            <img :src="destination.img" alt="Destination Image" />
            <div class="descInfo flex">
              <div class="text">
                <span class="name">{{ destination.name }}</span>
                <p class="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 384 512"
                    class="icon"
                  >
                    <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                      d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                    />
                  </svg>
                  Sri Lanka
                </p>
              </div>
              <span class="rating">{{ destination.rating }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sigiriya from "../assets/sigiriya.jpg";
import yala from "../assets/yala.jpg";
import templeOfTooth from "../assets/templeOfTooth.jpg";
import hortonPlains from "../assets/hortonPlains.jpg";

export default {
  data() {
    return {
      destinations: [
        {
          id: 1,
          img: sigiriya,
          name: "Sigiriya",
          location: "Dambulla",
          rating: 4.7,
        },
        {
          id: 2,
          img: yala,
          name: "Yala National Park",
          location: "Dambulla",
          rating: 4.2,
        },
        {
          id: 3,
          img: templeOfTooth,
          name: "Temple of Tooth",
          location: "Kandy",
          rating: 4.8,
        },
        {
          id: 4,
          img: hortonPlains,
          name: "Horton Plains",
          location: "Dambulla",
          rating: 4.2,
        },
      ],
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
  --h1FontSize: 1.6rem;
  --h2FontSize: 1.25rem;
  --h3FontSize: 1rem;
  --normalFontSize: 0.938rem;
  --smallFontSize: 0.831rem;
  --smallestFontSize: 0.75rem;
  --borderRadius: 3rem;
}
.destination {
  .secContainer {
    .redText {
      color: var(--primaryColor);
      font-size: var(--smallFontSize);
      font-weight: 500;
    }

    h3 {
      font-size: var(--h1FontSize);
    }

    .searchField {
      margin-top: 2rem;
      gap: 1rem;
      .inputField {
        background: var(--primaryColorLight);
        padding: 1rem;
        border-radius: var(--borderRadius);
        gap: 0.5rem;

        input {
          background: transparent;
          border: none;
          outline: none;
          width: 100%;
        }

        .icon {
          color: var(--blackColor);
        }
      }

      .btn {
        gap: 0.5rem;
        margin: auto;
        width: 100%;
        align-items: center;
        justify-content: center;
      }
    }

    .secMenu {
      display: none;
    }

    .destinationContainer {
      margin-top: 2rem;

      .singleDestination {
        position: relative;
        overflow: hidden;
        border-radius: 1rem;
        height: 260px;

        .imgDiv {
          position: relative;
          height: 100%;
          width: 100%;
          img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            transition: all 0.3s ease-in-out;
          }
        }

        &:hover {
          .imgDiv {
            img {
              scale: 1.1;
            }
          }
        }

        .descInfo {
          position: absolute;
          z-index: 2;
          bottom: 0;
          width: 100%;
          padding: 1rem 2rem 1rem;
          justify-content: space-between;

          &::after {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            background: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0),
              rgba(0, 0, 0, 0.76)
            );
            z-index: -1;
          }

          .text {
            gap: 0.5rem;
            color: var(--whiteColor);

            .name {
              display: block;
              font-weight: 500;
              padding-bottom: 0.3rem;
              font-weight: var(--h2FontSize);
            }

            .flex .icon {
              font-size: var(--normalFontSize);
            }
          }

          .rating {
            padding: 8px 1rem;
            border-radius: var(--borderRadius);
            background: rgba(245, 245, 245, 0.37);
            border: 1.5px solid rgba(255, 255, 255, 0.241);
            font-size: var(--h3FontSize);
            font-weight: 600;
            color: var(--whiteColor);
          }
        }
      }
    }
  }
}
</style>