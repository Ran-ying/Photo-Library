<script>
export default {
    data() {
        return {
            photos: [
                {
                    2023: [
                        {
                            9: [
                                {
                                    1: 
                                    []
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    mounted() {
        document.title = "Ying's Photo Library"
    }
}
</script>

<template>
    <body>
        <header>
            <div style="width: 110px; height: 110px; margin: 20px auto; text-align: center; position: relative;">
                <div id="backgroundBorder"></div>
                <div id="headpic"></div>
            </div>
            <div>
                <div id="title">
                    <h1>Ying's<br> Photo Library</h1>
                </div>
                <div id="calendar">
                    <div>
                        <div class="icon">
                            <svg enable-background="new 0 0 48 48" viewBox="0 0 48 48" xml:space="preserve"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <path clip-rule="evenodd"
                                    d="M43,43H5c-2.209,0-4-1.791-4-4V9c0-2.209,1.791-4,4-4h38c2.209,0,4,1.791,4,4v30  C47,41.209,45.209,43,43,43z M45,9c0-1.104-0.896-2-2-2H5C3.896,7,3,7.896,3,9v6h42V9z M45,17H3v22c0,1.104,0.896,2,2,2h38  c1.104,0,2-0.896,2-2V17z M41,31h-2c-0.552,0-1-0.447-1-1v-2c0-0.552,0.448-1,1-1h2c0.553,0,1,0.448,1,1v2  C42,30.553,41.553,31,41,31z M41,24h-2c-0.552,0-1-0.447-1-1v-2c0-0.553,0.448-1,1-1h2c0.553,0,1,0.447,1,1v2  C42,23.553,41.553,24,41,24z M33,31h-2c-0.552,0-1-0.447-1-1v-2c0-0.552,0.448-1,1-1h2c0.553,0,1,0.448,1,1v2  C34,30.553,33.553,31,33,31z M33,24h-2c-0.552,0-1-0.447-1-1v-2c0-0.553,0.448-1,1-1h2c0.553,0,1,0.447,1,1v2  C34,23.553,33.553,24,33,24z M25,31h-2c-0.553,0-1-0.447-1-1v-2c0-0.552,0.447-1,1-1h2c0.553,0,1,0.448,1,1v2  C26,30.553,25.553,31,25,31z M25,24h-2c-0.553,0-1-0.447-1-1v-2c0-0.553,0.447-1,1-1h2c0.553,0,1,0.447,1,1v2  C26,23.553,25.553,24,25,24z M17,38h-2c-0.553,0-1-0.447-1-1v-2c0-0.553,0.447-1,1-1h2c0.553,0,1,0.447,1,1v2  C18,37.553,17.553,38,17,38z M17,31h-2c-0.553,0-1-0.447-1-1v-2c0-0.552,0.447-1,1-1h2c0.553,0,1,0.448,1,1v2  C18,30.553,17.553,31,17,31z M17,24h-2c-0.553,0-1-0.447-1-1v-2c0-0.553,0.447-1,1-1h2c0.553,0,1,0.447,1,1v2  C18,23.553,17.553,24,17,24z M9,38H7c-0.553,0-1-0.447-1-1v-2c0-0.553,0.447-1,1-1h2c0.553,0,1,0.447,1,1v2C10,37.553,9.553,38,9,38  z M9,31H7c-0.553,0-1-0.447-1-1v-2c0-0.552,0.447-1,1-1h2c0.553,0,1,0.448,1,1v2C10,30.553,9.553,31,9,31z M23,34h2  c0.553,0,1,0.447,1,1v2c0,0.553-0.447,1-1,1h-2c-0.553,0-1-0.447-1-1v-2C22,34.447,22.447,34,23,34z"
                                    fill-rule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    <div v-for="year in photos">
                        <span>{{ Object.keys(year)[0] }}</span> - 
                        <span v-for="month in year[Object.keys(year)[0]]">{{Object.keys(month)[0]}} /</span>
                    </div>
                </div>
            </div>

        </header>
        <main>
            <div class="month">
                <div class="monthTitle">
                    <h2>09/2023</h2>
                </div>
                <div class="day">
                    <div class="dayTitle">
                        <h3>01/09/2023</h3>
                    </div>
                    <div class="dayCard">
                        <div class="dayImage">
                            <img src="IMG_5217.jpeg">
                        </div>
                        <div class="dayContent">
                            <h4>ул. Профессора Попова, Санкт Петербург</h4>
                            <div class="text">一辆特斯拉 Model 3</div>
                            <div class="like">
                                <div class="svg">
                                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                        <defs></defs>
                                        <title />
                                        <g data-name="Layer 54" id="Layer_54">
                                            <path class="cls-1"
                                                d="M16,28.72a3,3,0,0,1-2.13-.88L3.57,17.54a8.72,8.72,0,0,1-2.52-6.25,8.06,8.06,0,0,1,8.14-8A8.06,8.06,0,0,1,15,5.68l1,1,.82-.82h0a8.39,8.39,0,0,1,11-.89,8.25,8.25,0,0,1,.81,12.36L18.13,27.84A3,3,0,0,1,16,28.72ZM9.15,5.28A6.12,6.12,0,0,0,4.89,7a6,6,0,0,0-1.84,4.33A6.72,6.72,0,0,0,5,16.13l10.3,10.3a1,1,0,0,0,1.42,0L27.23,15.91A6.25,6.25,0,0,0,29,11.11a6.18,6.18,0,0,0-2.43-4.55,6.37,6.37,0,0,0-8.37.71L16.71,8.8a1,1,0,0,1-1.42,0l-1.7-1.7a6.28,6.28,0,0,0-4.4-1.82Z" />
                                        </g>
                                    </svg>
                                </div>
                                <div>0</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </body>
</template>

<style scoped>
body {
    max-width: 804px;
    margin: 0 auto;
    padding: 8px;
}

header {
    text-align: center;
}

#backgroundBorder {
    display: inline-block;
    width: 108px;
    height: 108px;
    background-image: linear-gradient(to top, #cc208e 0%, #6713d2 100%);
    border-radius: 100px;
    position: absolute;
    left: 0px;
    top: 0px;
}

#headpic {
    display: inline-block;
    width: 100px;
    height: 100px;
    border-radius: 100px;
    position: absolute;
    cursor: pointer;
    user-select: none;
    left: 4px;
    top: 4px;
    background: url(headpic.webp);
    background-size: cover;
    border: 0px;
}

.icon {
    width: 32px;
    height: 32px;
    display: inline-block;
}


@media screen and (width >=832px) {
    #title {
        width: 400px;
        display: inline-block;
        vertical-align: top;
        text-align: left;
    }
    #calendar {
        width: 400px;
        display: inline-block;
        vertical-align: top;
        text-align: left;
    }
}
@media screen and (width <832px) {
}

.monthTitle h2 {
    border-left: 8px solid;
    padding-left: 1rem;
}

.dayTitle h3 {
    border-left: 8px solid;
    padding-left: 1rem;
}

/* .day {
    margin-left: 1rem;
} */
@media screen and (width >=832px) {

    .dayCard {
        border-radius: 1rem;
        overflow: hidden;
        border: 2px solid;
        width: 800px;
        height: 300px;
        /* box-sizing: border-box; */
    }

    .dayImage {
        display: inline-block;
        width: 400px;
        height: 300px;
        border-right: 2px solid;
        overflow: hidden;
        box-sizing: border-box;
    }

    .dayImage img {
        height: 100%;
    }

    .dayContent {
        display: inline-block;
        width: 400px;
        height: 300px;
        vertical-align: top;
        padding: 1rem;
        box-sizing: border-box;
        position: relative;
    }
}

@media screen and (width < 832px) {
    .dayCard {
        border-radius: 1rem;
        overflow: hidden;
        border: 2px solid;
        width: 100%;
    }

    .dayImage {
        display: inline-block;
        width: 100%;
        height: 60vw;
        border-bottom: 2px solid;
        overflow: hidden;
        box-sizing: border-box;
    }

    .dayImage img {
        width: 100%;
    }

    .dayContent {
        display: inline-block;
        width: 100%;
        min-height: 200px;
        vertical-align: top;
        padding: 1rem;
        box-sizing: border-box;
        position: relative;
    }
}

.dayContent .text {
    padding: 1rem;
    font-size: 1rem;
}

.dayContent .like {
    position: absolute;
    bottom: 1rem;
    height: 32px;
}

.dayContent .like .svg {
    width: 32px;
    margin-right: 8px;
}

.dayContent .like div {
    vertical-align: middle;
    line-height: 32px;
    height: 32px;
    display: inline-block;
}</style>