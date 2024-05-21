<template>
    <nav class="news__pagination">
                <a class="news__pagination-link" href="#"> <svg class="news__pagination-svg" width="52.000000"
                        height="52.000000" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink">
                        <circle class="circle" cx="26.000000" cy="26.000000" r="26.000000" stroke="#CDA274"
                            stroke-opacity="1.000000" stroke-width="1.000000" />
                        <text x="17" y="32" class="news__pagination-link">01
                        </text>
                    </svg></a>
                <a class="news__pagination-link" href="#"> <svg class="news__pagination-svg" width="52.000000"
                        height="52.000000" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink">
                        <circle class="circle" cx="26.000000" cy="26.000000" r="26.000000" stroke="#CDA274"
                            stroke-opacity="1.000000" stroke-width="1.000000" />
                        <text x="17" y="32" class="news__pagination-link">02
                        </text>
                    </svg></a>
                <a class="news__pagination-link" href="#"> <svg class="news__pagination-svg" width="52.000000"
                        height="52.000000" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink">
                        <circle class="circle" cx="26.000000" cy="26.000000" r="26.000000" stroke="#CDA274"
                            stroke-opacity="1.000000" stroke-width="1.000000" />
                        <text x="17" y="32" class="news__pagination-link">03
                        </text>
                    </svg></a>
                <a class="news__pagination-link" href="#"> <svg class="news__pagination-svg" width="52.000000"
                        height="52.000000" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink">
                        <defs />
                        <circle class="circle" cx="25.500000" cy="26.000000" r="25.500000" stroke="#CDA274"
                            stroke-opacity="1.000000" stroke-width="1.000000" />
                        <path id="Vector" d="M22.55 32L28.5 25.31L22.55 18.62" stroke="#292F36"
                            stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round"
                            stroke-linecap="round" />
                    </svg>
                </a>
    </nav>
</template>

<script>

export default {
  name: 'PaginationComponent',
};
</script>

<style lang="scss" scoped>
.news{


&__pagination {
        display: flex;
        justify-content: center;
        gap: 20px;
        margin-top: 51px;
    }

    &__pagination-link {
        color: rgb(54, 41, 45);
        font-size: 16px;
        font-weight: 400;
        line-height: 150%;
        text-align: left;
        text-transform: capitalize;
        fill: rgb(54, 41, 45);
    }

    &__pagination-link:hover &__pagination-svg .circle {
        fill: rgb(244, 240, 236);
        stroke: rgb(244, 240, 236);
    }
}
</style>