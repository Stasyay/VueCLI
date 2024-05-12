<template>
<header class="header center">
            <nav class="header__left">
                <a href="index.html"><img class="header__logo" src="../assets/Logo-1.png" alt="logo"></a>
            </nav>
            <nav class="header__right">
                <a class="header__link" href="index.html">Home</a>
                <a class="header__link" href="#">Project</a>
                <a class="header__link" href="blog.html">Blog</a>
            </nav>
        </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
};
</script>

<style lang="scss" scoped>

a {
    text-decoration: none;
}


.header {
    height: 138px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__logo {
        width: 177px;
        left: 0;
        right: 143px;
        top: 8px;
        bottom: 8px;
    }

    &__left {
        display: flex;
        align-items: center;
        gap: 41px;
    }

    &__right {
        display: flex;
        align-items: center;
        gap: 32px;

    }

    &__link {
        color: rgb(41, 47, 54);
        font-size: 20px;
        font-weight: 400;
        line-height: 125%;
    }
}

</style>