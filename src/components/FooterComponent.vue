<template>
    <footer class="footer center">
            <div class="footer__footer-left">
                <a href="index.html"> <img class="footer__logo" src="../assets/Logo-1.png" alt="logo"></a>
                <p class="footer__footer-text">It is a long established fact that a reader will be distracted
                    lookings.</p>
            </div>
            <nav class="footer__footer-middle">
                <h3 class="footer__footer-title">Pages</h3>
                <a class="footer__footer-text" href="index.html">Home</a>
                <a class="footer__footer-text" href="#">Project</a>
                <a class="footer__footer-text" href="blog.html">Blog</a>
            </nav>
            <div class="footer__footer-right">
                <h3 class="footer__footer-title">Contact</h3>
                <p class="footer__footer-text">55 East Birchwood Ave. Brooklyn, New York 11201 </p>
                <p class="footer__footer-text">contact@interno.com</p>
                <p class="footer__footer-text">(123) 456 - 7890</p>
            </div>
        </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
};
</script>

<style lang="scss" scoped>

a {
    text-decoration: none;
}

.footer {
    display: flex;
    justify-content: space-between;
    padding-bottom: 134px;

    &__logo {
        width: 177px;
        left: 0;
        right: 143px;
        top: 8px;
        bottom: 8px;
    }

    &__footer-text {
        color: rgb(77, 80, 83);
        font-size: 22px;
        font-weight: 400;
        line-height: 150%;
        text-align: left;
    }

    &__footer-title {
        color: rgb(41, 47, 54);
        font-family: "DM Serif Display", serif;
        font-size: 25px;
        font-weight: 400;
        line-height: 125%;
        text-align: left;
    }

    &__footer-left {
        display: flex;
        flex-direction: column;
        width: 400px;
        gap: 18px;
    }

    &__footer-middle {
        display: flex;
        flex-direction: column;
        width: 400px;
        gap: 36px;
        padding-left: 94px;

    }

    &__footer-right {
        display: flex;
        flex-direction: column;
        width: 400px;
        gap: 36px;
        padding-left: 141px;

    }
}

</style>