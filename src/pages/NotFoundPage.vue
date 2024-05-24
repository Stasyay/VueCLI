<template>
  <div>
    <section class="page404">
            <div class="wrapper">
                <div class="page404-box">
                    <div class="page404-info">
                        <h1 class="page404-header">404</h1>
                        <p class="page404-text">
                            We are sorry, but the page you requested was not
                            found
                        </p>
                        <div class="page404-home">
                            <router-link to="/" class="page404-btn">
                                Back To Home
                                <svg
                                    width="18"
                                    height="17"
                                    viewBox="0 0 18 17"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1.85938 8.43542L15.5826 8.29857M10.4776 1.91138L17.0005 8.43436L10.3461 15.0887"
                                        stroke="#CDA274"
                                        stroke-width="2"
                                        stroke-linecap="square"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </router-link>
                        </div>
                    </div>
                    <div class="page404-img">
                        <img
                            src="@/assets/404.jpg"
                            alt="404"
                            class="page404-img"
                        />
                    </div>
                </div>
            </div>
        </section>
  </div>
</template>

<script>
export default {
  name: 'NotFoundPage',  
};
</script>

<style lang="scss" scoped>
.page404 {
    &-box {
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-template-rows: auto;
        gap: 30px;

        @media (max-width: 768px) {
            grid-template-columns: 1fr;
        }
    }

    &-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
    }

    &-header {
        font-family: "DM Serif Display", serif;
        font-weight: 400;
        font-size: min(15vw, 250px);
        line-height: 1.25;
        color: #CDA274;
    }

    &-text {
        font-family: "DM Serif Display", serif;
        font-weight: 400;
        font-size: min(3.4vw, 35px);
        line-height: 1.5;
        letter-spacing: 0.01em;
        color: #292F36;
    }

    &-home {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 23px;
    }

    &-btn {
        font-family: 'Jost', sans-serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: normal;
    font-size: 18px;
    line-height: 1.25;
    letter-spacing: 0.02em;
    text-align: center;
    padding: 26px 54px;
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 10px;
    box-shadow: 0 10px 20px 0 rgba(192, 192, 192, 0.35);
    }

    &-img {
        border-radius: 0 0 0 27vw;
    }
}
</style>