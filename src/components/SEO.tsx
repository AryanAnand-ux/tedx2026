import { Helmet } from "react-helmet-async";

interface SEOProps {
    title?: string;
    description?: string;
    canonical?: string;
    ogImage?: string;
    type?: string;
}

const SEO = ({
    title = "TEDxJUET 2025 | Pratibimb – Reflections of Tomorrow",
    description = "Join TEDxJUET 2025 for 'Pratibimb – Reflections of Tomorrow'. Experience inspiring talks, captivating performances, and transformative ideas at JUET, Guna on March 22, 2025.",
    canonical = "https://tedxjuet.com",
    ogImage = "/og-image.jpg",
    type = "website",
}: SEOProps) => {
    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <link rel="canonical" href={canonical} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={canonical} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={canonical} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={ogImage} />
        </Helmet>
    );
};

export default SEO;
