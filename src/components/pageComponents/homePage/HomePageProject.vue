<template>
        <div class="project center">
            <div class="project__project-heading">
                <h1 class="project__project-title"> Follow Our Projects </h1>
                <p class="project__project-text">It is a long established fact that a reader will be distracted by the
                    of readable
                    content of
                    page lookings at its layouts points.</p>
            </div>
            <div class="project__box-items">
                <div class="project__project-item">
                    <img class="project__project-img" src="../../../assets/Image1.png" alt="our project">
                    <div class="project__project-content">
                        <div>
                            <h3 class="project__title-item">Modern Kitchan</h3>
                            <nav class="project__project-box-breadcrumbs">
                                <a href="#" class="project__project-blog-breadcrumbs">Decor / </a>
                                <a href="#" class="project__project-blog-breadcrumbs">Artchitecture</a>
                            </nav>
                        </div>
                        <svg width="70.000000" height="70.000000" viewBox="0 0 70 70" fill="none"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <defs />
                            <circle id="Ellipse 4" cx="35.000000" cy="35.000000" r="35.000000"
                                transform="rotate(-180 35 35)" fill="#F4F0EC" fill-opacity="1.000000" />
                            <path id="Vector" d="M32 44L40 35L32 26" stroke="#292F36" stroke-opacity="1.000000"
                                stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round" />
                        </svg>
                    </div>
                </div>

                <div class="project__project-item">
                    <img class="project__project-img" src="../../../assets/Image2.png" alt="our project">
                    <div class="project__project-content">
                        <div>
                            <h3 class="project__title-item">Modern Kitchan</h3>
                            <nav class="project__project-box-breadcrumbs">
                                <a href="#" class="project__project-blog-breadcrumbs">Decor / </a>
                                <a href="#" class="project__project-blog-breadcrumbs">Artchitecture</a>
                            </nav>
                        </div>
                        <svg width="70.000000" height="70.000000" viewBox="0 0 70 70" fill="none"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <defs />
                            <circle id="Ellipse 4" cx="35.000000" cy="35.000000" r="35.000000"
                                transform="rotate(-180 35 35)" fill="#F4F0EC" fill-opacity="1.000000" />
                            <path id="Vector" d="M32 44L40 35L32 26" stroke="#292F36" stroke-opacity="1.000000"
                                stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round" />
                        </svg>
                    </div>
                </div>

                <div class="project__project-item">
                    <img class="project__project-img" src="../../../assets/Image3.png" alt="our project">
                    <div class="project__project-content">
                        <div>
                            <h3 class="project__title-item">Modern Kitchan</h3>
                            <nav class="project__project-box-breadcrumbs">
                                <a href="#" class="project__project-blog-breadcrumbs">Decor / </a>
                                <a href="#" class="project__project-blog-breadcrumbs">Artchitecture</a>
                            </nav>
                        </div>
                        <svg width="70.000000" height="70.000000" viewBox="0 0 70 70" fill="none"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <defs />
                            <circle id="Ellipse 4" cx="35.000000" cy="35.000000" r="35.000000"
                                transform="rotate(-180 35 35)" fill="#F4F0EC" fill-opacity="1.000000" />
                            <path id="Vector" d="M32 44L40 35L32 26" stroke="#292F36" stroke-opacity="1.000000"
                                stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round" />
                        </svg>
                    </div>
                </div>

                <div class="project__project-item">
                    <img class="project__project-img" src="../../../assets/Image4.png" alt="our project">
                    <div class="project__project-content">
                        <div>
                            <h3 class="project__title-item">Modern Kitchan</h3>
                            <nav class="project__project-box-breadcrumbs">
                                <a href="#" class="project__project-blog-breadcrumbs">Decor / </a>
                                <a href="#" class="project__project-blog-breadcrumbs">Artchitecture</a>
                            </nav>
                        </div>
                        <svg width="70.000000" height="70.000000" viewBox="0 0 70 70" fill="none"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <defs />
                            <circle id="Ellipse 4" cx="35.000000" cy="35.000000" r="35.000000"
                                transform="rotate(-180 35 35)" fill="#F4F0EC" fill-opacity="1.000000" />
                            <path id="Vector" d="M32 44L40 35L32 26" stroke="#292F36" stroke-opacity="1.000000"
                                stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
  name: 'HomePageProject',
}
</script>

<style lang="scss" scoped>
.project {
    margin-bottom: 100px;

    &__project-heading {
        width: 1014px;
        padding-left: 232px;
        margin-bottom: 94px;
    }

    &__project-title {
        color: rgb(41, 47, 54);
        font-family: "DM Serif Display", serif;
        font-size: 50px;
        font-weight: 400;
        line-height: 125%;
        text-align: center;
    }

    &__project-text {
        color: rgb(77, 80, 83);
        font-size: 22px;
        font-weight: 400;
        line-height: 150%;
        text-align: center;
    }

    &__box-items {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 100px;
        padding-bottom: 54px;
    }

    &__project-content {
        display: flex;
        justify-content: space-between;
        padding-top: 28px;
    }

    &__title-item {
        color: rgb(41, 47, 54);
        font-family: "DM Serif Display", serif;
        font-size: 25px;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 2%;
        text-align: left;
    }

    &__project-blog-breadcrumbs {
        color: rgb(77, 80, 83);
        font-size: 22px;
        font-weight: 400;
        line-height: 150%;
        text-align: left;
        color: rgb(77, 80, 83);
    }
}
</style>