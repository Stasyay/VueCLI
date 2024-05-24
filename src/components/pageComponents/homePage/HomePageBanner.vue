<template>
<div class="banner center">
            <div class="banner__banner-item">
                <img class="banner__banner-photo" src="../../../assets/Photo.png" alt="banner">
            </div>
            <div class="banner__banner-dsc">
                <p class="banner__banner-title">Let Your Home
                    Be Unique</p>
                <p class="banner__banner-text">There are many variations of the passages of
                    lorem Ipsum fromavailable, majority.</p>
                <router-link class="banner__banner-btn" to="/GetStarted">Get Started <svg width="18.000000" height="16.000000"
                        viewBox="0 -2 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink">
                        <defs />
                        <path id="Vector" d="M1 7.43L14.72 7.29M9.61 0.91L16.14 7.43L9.48 14.08" stroke="#CDA274"
                            stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" />
                    </svg></router-link>
            </div>
        </div>
</template>

<script>
export default {
  name: 'HomePageBanner'
}
</script>

<style lang="scss" scoped>
.banner {

height: 758px;
margin-bottom: 96px;

&__banner-item {
    position: relative;
    width: 1200px;
    height: 758px;
    overflow: hidden;
    border-radius: 78px;
}

&__banner-photo {
    width: auto;
    height: auto;
    padding: 0;
    margin: 0;
}

&__banner-item>&__banner-photo {
    display: block;
    margin-left: -94px;
    margin-top: -542px;
}

&__banner-dsc {
    position: relative;
    width: 433px;
    bottom: 542px;
    left: 52px;
}

&__banner-title {
    color: rgb(41, 47, 54);
    font-family: "DM Serif Display", serif;
    font-size: 65px;
    font-weight: 400;
    line-height: 125%;
    text-align: left;
    height: 162px;
}

&__banner-text {
    color: rgb(77, 80, 83);
    font-size: 22px;
    font-weight: 400;
    line-height: 150%;
    text-align: left;
    height: 66px;
    margin: 18px 0px 48px;
}

&__banner-btn {
    padding: 14px 49px;
    border: 1px solid rgb(41, 47, 54);
    border-radius: 18px;
    background-color: rgb(41, 47, 54);
    color: rgb(255, 255, 255);
    font-size: 18px;
    font-weight: 400;
    line-height: 125%;
    text-align: center;
}
}
</style>