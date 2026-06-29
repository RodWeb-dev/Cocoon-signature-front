<script setup lang="ts">

    const { t } = useI18n()

    useSeoMeta({
        title: t('pages.presentation.seo-title'),
        description: t('pages.presentation.seo-description'),
        ogTitle: t('pages.presentation.seo-title'),
        ogDescription: t('pages.presentation.seo-description'),
        ogUrl: 'https://www.cocoon-signature.fr/presentation/',
        ogImage: 'https://www.cocoon-signature.fr/img/og-presentation.webp'
    })

</script>

<template>
    <main>
        <h1>{{ $t('pages.presentation.h1') }}</h1>

        <section id="identite">
            <hr>
            <h2>{{ $t('pages.presentation.once-h2') }}</h2>
            <hr>

            <article>
                <h3>| {{ $t('pages.presentation.once-a1h') }} |</h3>
                <div>
                    <p>{{ $t('pages.presentation.once-a1p1') }}</p>
                    <p>{{ $t('pages.presentation.once-a1p2') }}</p>
                    <p>{{ $t('pages.presentation.once-a1p3') }}</p>
                </div>
                <picture>
                    <source srcset="/img/presentation/corinne_400.webp" media="(width >= 400px)" />
                    <source srcset="/img/presentation/corinne_600.webp" media="(width >= 600px)" />
                    <source srcset="/img/presentation/corinne_800.webp" media="(width >= 800px)" />
                    <source srcset="/img/presentation/corinne_1000.webp" media="(width >= 1000px)" />
                    <source srcset="/img/presentation/corinne_1200.webp" media="(width >= 1200px)" />
                    <img src="/img/presentation/corinne_600.webp" :alt="$t('alt.presentation-corinne')">
                </picture>
            </article>
            <article>
                <h3>| {{ $t('pages.presentation.once-a2h') }} |</h3>
                <div>
                    <p>{{ $t('pages.presentation.once-a2p1') }}</p>
                    <p>{{ $t('pages.presentation.once-a2p2') }}</p>
                    <p>{{ $t('pages.presentation.once-a2p3') }}</p>
                </div>
                 <picture>
                    <source srcset="/img/presentation/inspiration_400.webp" media="(width >= 400px)" />
                    <source srcset="/img/presentation/inspiration_600.webp" media="(width >= 600px)" />
                    <source srcset="/img/presentation/inspiration_800.webp" media="(width >= 800px)" />
                    <source srcset="/img/presentation/inspiration_1000.webp" media="(width >= 1000px)" />
                    <source srcset="/img/presentation/inspiration_1200.webp" media="(width >= 1200px)" />
                    <img src="/img/presentation/inspiration_600.webp" :alt="$t('alt.presentation-inspiration')">
                </picture>
            </article>
        </section>

        <section id="secrets">
            <hr>
            <h2>{{ $t('pages.presentation.secret-h2') }}</h2>
            <hr>

            <article>
                <h3>| {{ $t('pages.presentation.secret-a1h') }} |</h3>
                <picture>
                    <source srcset="/img/presentation/saw_400.webp" media="(width >= 400px)" />
                    <source srcset="/img/presentation/saw_600.webp" media="(width >= 600px)" />
                    <source srcset="/img/presentation/saw_800.webp" media="(width >= 800px)" />
                    <source srcset="/img/presentation/saw_1000.webp" media="(width >= 1000px)" />
                    <source srcset="/img/presentation/saw_1200.webp" media="(width >= 1200px)" />
                    <img src="/img/presentation/saw_600.webp" :alt="$t('alt.presentation-saw')">
                </picture>
                <div>
                    <p>{{ $t('pages.presentation.secret-a1p1') }}</p>
                    <p>{{ $t('pages.presentation.secret-a1p2') }}</p>
                </div>
                <picture>
                    <source srcset="/img/presentation/gluing_400.webp" media="(width >= 400px)" />
                    <source srcset="/img/presentation/gluing_600.webp" media="(width >= 600px)" />
                    <source srcset="/img/presentation/gluing_800.webp" media="(width >= 800px)" />
                    <source srcset="/img/presentation/gluing_1000.webp" media="(width >= 1000px)" />
                    <source srcset="/img/presentation/gluing_1200.webp" media="(width >= 1200px)" />
                    <img src="/img/presentation/gluing_600.webp" :alt="$t('alt.presentation-gluing')">
                </picture>
            </article>
            <article>
                <h3>| {{ $t('pages.presentation.secret-a2h') }} |</h3>
                <picture>
                    <source srcset="/img/presentation/wood_400.webp" media="(width >= 400px)" />
                    <source srcset="/img/presentation/wood_600.webp" media="(width >= 600px)" />
                    <source srcset="/img/presentation/wood_800.webp" media="(width >= 800px)" />
                    <source srcset="/img/presentation/wood_1000.webp" media="(width >= 1000px)" />
                    <source srcset="/img/presentation/wood_1200.webp" media="(width >= 1200px)" />
                    <img src="/img/presentation/wood_600.webp" :alt="$t('alt.presentation-wood')">
                </picture>
                <div>
                    <p>{{ $t('pages.presentation.secret-a2p1') }}</p>
                    <p>{{ $t('pages.presentation.secret-a2p2') }}</p>
                </div>
                <picture>
                    <source srcset="/img/presentation/stock_400.webp" media="(width >= 400px)" />
                    <source srcset="/img/presentation/stock_600.webp" media="(width >= 600px)" />
                    <source srcset="/img/presentation/stock_800.webp" media="(width >= 800px)" />
                    <source srcset="/img/presentation/stock_1000.webp" media="(width >= 1000px)" />
                    <source srcset="/img/presentation/stock_1200.webp" media="(width >= 1200px)" />
                    <img src="/img/presentation/stock_600.webp" :alt="$t('alt.presentation-stock')">
                </picture>
            </article>
            <article>
                <h3>| {{ $t('pages.presentation.secret-a3h') }} |</h3>
                <picture>
                    <source srcset="/img/presentation/spray_400.webp" media="(width >= 400px)" />
                    <source srcset="/img/presentation/spray_600.webp" media="(width >= 600px)" />
                    <source srcset="/img/presentation/spray_800.webp" media="(width >= 800px)" />
                    <source srcset="/img/presentation/spray_1000.webp" media="(width >= 1000px)" />
                    <source srcset="/img/presentation/spray_1200.webp" media="(width >= 1200px)" />
                    <img src="/img/presentation/spray_600.webp" :alt="$t('alt.presentation-spray')">
                </picture>
                <div>
                    <p>{{ $t('pages.presentation.secret-a3p1') }}</p>
                    <p>{{ $t('pages.presentation.secret-a3p2') }}</p>
                </div>
                <picture>
                    <source srcset="/img/presentation/brush_400.webp" media="(width >= 400px)" />
                    <source srcset="/img/presentation/brush_600.webp" media="(width >= 600px)" />
                    <source srcset="/img/presentation/brush_800.webp" media="(width >= 800px)" />
                    <source srcset="/img/presentation/brush_1000.webp" media="(width >= 1000px)" />
                    <source srcset="/img/presentation/brush_1200.webp" media="(width >= 1200px)" />
                    <img src="/img/presentation/brush_600.webp" :alt="$t('alt.presentation-brush')">
                </picture>
            </article>
        </section>

        <section id="tomorrow">
            <hr>
            <h2>{{ $t('pages.presentation.avenir-h2') }}</h2>
            <hr>

            <article>
                <h3>| {{ $t('pages.presentation.avenir-a1h') }} |</h3>
                <picture>
                    <source srcset="/img/presentation/forest_400.webp" media="(width >= 400px)" />
                    <source srcset="/img/presentation/forest_600.webp" media="(width >= 600px)" />
                    <source srcset="/img/presentation/forest_800.webp" media="(width >= 800px)" />
                    <source srcset="/img/presentation/forest_1000.webp" media="(width >= 1000px)" />
                    <source srcset="/img/presentation/forest_1200.webp" media="(width >= 1200px)" />
                    <img src="/img/presentation/forest_600.webp" :alt="$t('alt.presentation-forest')">
                </picture>
                <div>
                    <p>{{ $t('pages.presentation.avenir-a1p1') }}</p>
                    <p>{{ $t('pages.presentation.avenir-a1p2') }}</p>
                    <p>{{ $t('pages.presentation.avenir-a1p3') }}</p>
                </div>
                <picture>
                    <source srcset="/img/presentation/plant_400.webp" media="(width >= 400px)" />
                    <source srcset="/img/presentation/plant_600.webp" media="(width >= 600px)" />
                    <source srcset="/img/presentation/plant_800.webp" media="(width >= 800px)" />
                    <source srcset="/img/presentation/plant_1000.webp" media="(width >= 1000px)" />
                    <source srcset="/img/presentation/plant_1200.webp" media="(width >= 1200px)" />
                    <img src="/img/presentation/plant_600.webp" :alt="$t('alt.presentation-plant')">
                </picture>
            </article>
        </section>

        <section id="partenaires"></section>
    </main>
</template>

<style lang="css" scoped>

    h2 {
        font-family: var(--cite);
        font-size: 3rem;
        margin: 2dvh;
    }

    hr {
        margin: 5vh 5vw;
    }

    article {
        display: grid;
    }

</style>
