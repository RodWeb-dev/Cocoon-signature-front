export const useJsonLd = () => {

    const setWebsite = () => {
        useHead({
            script: [
                {
                    type: "application/ld+json",
                    id: 'json-ld-website',
                    innerHTML: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "Cocoon-Signature",
                        "url": "https://www.cocoon-signature.fr",
                        "potentialAction": {
                            "@type": "SearchAction",
                            "target": "https://www.cocoon-signature.fr/produits/?q={search_term_string}",
                            "query-input": "required name=search_term_string"
                        }
                    })
                }
            ]
        })
    }
    return { setWebsite }
}
