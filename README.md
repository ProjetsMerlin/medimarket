# Refonte website existant — Design System

This folder was exported from [Relume](https://www.relume.io) on 2026-10-12. The below instructions are for any LLM Agent interacting with these files.

## Commandes utiles

npm install next@latest react@latest react-dom@latest @radix-ui/react-slot @radix-ui/react-dialog @radix-ui/react-tabs class-variance-authority clsx tailwind-merge lucide-react motion tailwindcss tw-animate-css @relume_io/relume-icons && npm install -D @tailwindcss/postcss postcss
npm install -D @tailwindcss/typography

## Assets

Logos, images, and SVGs included in this export.

### Logos

| File | Theme |
|------|-------|
| `logo/logo-light.svg` | Light |
| `logo/logo-dark.svg` | Dark |

### Images

Place each image in the locations indicated below.

| File | Component | Location | Source |
| ------ | ----------- | ---------- | -------- |
| `images/accueil-section-accès-anticipé.jpg` | `components/accueil/cta-54` | Accueil / Section Accès Anticipé | placeholder |
| `images/accueil-section-en-tête-de-liste-d-événements-en-vedette.jpg` | `components/accueil/event-header-05` | Accueil / Section En-tête de Liste d'Événements En Vedette | placeholder |
| `images/accueil-section-liste-d-événements-0.jpg` | `components/accueil/event-14` | Accueil / Section Liste d'Événements | placeholder |
| `images/accueil-section-liste-d-événements-1.jpg` | `components/accueil/event-14` | Accueil / Section Liste d'Événements | placeholder |
| `images/accueil-section-liste-de-produits-ecommerce-0.jpg` | `components/accueil/product-04` | Accueil / Section Liste de Produits Ecommerce | placeholder |
| `images/accueil-section-liste-de-produits-ecommerce-1.jpg` | `components/accueil/product-04` | Accueil / Section Liste de Produits Ecommerce | placeholder |
| `images/accueil-section-liste-de-produits-ecommerce-2.jpg` | `components/accueil/product-04` | Accueil / Section Liste de Produits Ecommerce | placeholder |
| `images/accueil-section-liste-de-produits-ecommerce-3.jpg` | `components/accueil/product-04` | Accueil / Section Liste de Produits Ecommerce | placeholder |
| `images/accueil-section-liste-de-produits-ecommerce-4.jpg` | `components/accueil/product-04` | Accueil / Section Liste de Produits Ecommerce | placeholder |
| `images/accueil-section-liste-de-produits-ecommerce-5.jpg` | `components/accueil/product-04` | Accueil / Section Liste de Produits Ecommerce | placeholder |
| `images/accueil-section-en-tête-de-liste-de-blogs-en-vedette-0.jpg` | `components/accueil/blog-18` | Accueil / Section En-tête de Liste de Blogs en Vedette | placeholder |
| `images/accueil-section-en-tête-de-liste-de-blogs-en-vedette-1.jpg` | `components/accueil/blog-18` | Accueil / Section En-tête de Liste de Blogs en Vedette | placeholder |
| `images/accueil-section-en-tête-de-liste-de-blogs-en-vedette-2.jpg` | `components/accueil/blog-18` | Accueil / Section En-tête de Liste de Blogs en Vedette, Accueil / Section En-tête Hero | placeholder |
| `images/accueil-section-en-tête-de-liste-de-blogs-en-vedette-3.jpg` | `components/accueil/blog-18` | Accueil / Section En-tête de Liste de Blogs en Vedette, Accueil / Section Liste de Produits Ecommerce | placeholder |
| `images/accueil-section-liste-de-blogs-0.jpg` | `components/accueil/blog-40` | Accueil / Section Liste de Blogs, Accueil / Section Liste de Produits Ecommerce | placeholder |
| `images/accueil-section-liste-de-blogs-1.jpg` | `components/accueil/blog-40` | Accueil / Section Liste de Blogs | placeholder |
| `images/accueil-section-liste-de-blogs-2.jpg` | `components/accueil/blog-40` | Accueil / Section Liste de Blogs | placeholder |
| `images/accueil-section-liste-de-produits-ecommerce-6.jpg` | `components/accueil/product-01` | Accueil / Section Liste de Produits Ecommerce, Accueil / Section En-tête de Liste d'Événements En Vedette, Accueil / Section Liste de Produits Ecommerce | placeholder |
| `images/accueil-section-liste-de-produits-ecommerce-7.jpg` | `components/accueil/product-01` | Accueil / Section Liste de Produits Ecommerce | placeholder |
| `images/accueil-section-liste-de-produits-ecommerce-8.jpg` | `components/accueil/product-01` | Accueil / Section Liste de Produits Ecommerce | placeholder |
| `images/accueil-section-liste-de-produits-ecommerce-9.jpg` | `components/accueil/product-01` | Accueil / Section Liste de Produits Ecommerce | placeholder |
| `images/accueil-section-liste-de-produits-ecommerce-10.jpg` | `components/accueil/product-01` | Accueil / Section Liste de Produits Ecommerce | placeholder |
| `images/accueil-section-liste-de-produits-ecommerce-11.jpg` | `components/accueil/product-01` | Accueil / Section Liste de Produits Ecommerce | placeholder |
| `images/accueil-section-liste-de-produits-ecommerce-12.jpg` | `components/accueil/product-01` | Accueil / Section Liste de Produits Ecommerce | placeholder |
| `images/accueil-section-newsletter.jpg` | `components/accueil/cta-32` | Accueil / Section Newsletter, Accueil / Section En-tête de Liste de Blogs en Vedette | placeholder |
| `images/accueil-section-témoignages-0.jpg` | `components/accueil/testimonial-17` | Accueil / Section Témoignages | placeholder |
| `images/accueil-section-témoignages-1.jpg` | `components/accueil/testimonial-17` | Accueil / Section Témoignages | placeholder |
| `images/accueil-section-témoignages-2.jpg` | `components/accueil/testimonial-17` | Accueil / Section Témoignages | placeholder |
| `images/accueil-section-cta-appel-à-l-action.jpg` | `components/accueil/cta-31` | Accueil / Section CTA (Appel à l'Action) | placeholder |

### SVGs

SVGs extracted from the home page.

| File | Locations |
| ------ | ----------- |
| `svgs/barre-de-navigation-0.svg` | Barre de navigation |
| `svgs/barre-de-navigation-1.svg` | Barre de navigation |
| `svgs/barre-de-navigation-2.svg` | Barre de navigation |
| `svgs/barre-de-navigation-3.svg` | Barre de navigation |
| `svgs/barre-de-navigation-4.svg` | Barre de navigation |
| `svgs/barre-de-navigation-5.svg` | Barre de navigation |
| `svgs/barre-de-navigation-6.svg` | Barre de navigation |
| `svgs/barre-de-navigation-7.svg` | Barre de navigation |
| `svgs/barre-de-navigation-8.svg` | Barre de navigation |
| `svgs/barre-de-navigation-9.svg` | Barre de navigation |
| `svgs/barre-de-navigation-10.svg` | Barre de navigation |
| `svgs/barre-de-navigation-11.svg` | Barre de navigation |
| `svgs/barre-de-navigation-12.svg` | Barre de navigation |

## IMPORTANT - Workflow steps

1. Before using other tools, **copy all the files in this local folder, including subfolders, to a "/reference" folder in the current project**
2. Read **the entire DESIGN.md** — it contains every design token (colors, typography, radii, schemes) as YAML.
3. Read sitemap.md to learn the page structure, section order, and which color scheme each section uses.
4. Use the React components in `react/` as your starting implementation
5. Read assets.md for the exact placement of logos, images, and SVGs.

## Goals

1. Recreate the design system in DESIGN.md exactly — every token, every scheme.
2. Build a landing page using the sitemap and components provided that perfectly matches `homepage/full.png` and the per-section screenshots in `homepage/` — same components, same order, same schemes, same images. Place it at the root of your project so it is easy to find.

## Folder contents

- DESIGN.md — design tokens (read first)
- sitemap.md — page structure, section order, scheme assignments
- assets.md — logo, image, and SVG placement
- homepage/full.png — full-page homepage screenshot for layout context
- homepage/{NN}-{section}.png — per-section homepage screenshots, higher detail than the full-page image
- react/globals.css — design tokens as CSS custom properties
- react/ — pre-styled component source files
- logo/ — light and dark logo files
- images/ — project images
- svgs/ — inline SVGs from the homepage
- fonts/ — Google Font woff2 files

## Rules

Do:

- Reference design tokens via CSS custom properties from `react/globals.css` — never hardcode colors, font sizes, or radii.
- Use `react/<component>.jsx` as your starting point when a section has one.
- Apply the scheme CSS class on each section as specified in `sitemap.md`.
- Use `logo/logo-light.svg` on light backgrounds and `logo/logo-dark.svg` on dark backgrounds.
- Load fonts locally with `@font-face` from the woff2 files in `fonts/`.
- Use the logos, images, and SVGs provided in this bundle at the locations specified in `assets.md`.

Don't:

- Reimplement components from scratch when one exists in react/.
- Hardcode hex values, font sizes, or radii anywhere in your output.
- Load fonts from the Google Fonts CDN — use the bundled woff2 files.
- Invent new color schemes — only use those defined in DESIGN.md.

## Verification

Before reporting complete, manually verify the following:

- [ ] Ensure the design system is exactly the same as in DESIGN.md
- [ ] Ensure ALL schemes described in DESIGN.md are present in the design system.
- [ ] Check the sections are the same as described in sitemap.md - and use the correct scheme.
- [ ] Visually check the created homepage spacing and images look correct.
- [ ] Visually check that homepage/full.png and the per-section screenshots in homepage/ match the created landing page

If any check fails, fix and run through the list again.

## Sitemap

### Accueil

| # | Section | Component | Scheme |
| --- | --------- | ----------- | -------- |
| 1 | Barre de navigation | `components/navbar-08` | 2 |
| 2 | Section En-tête Hero | `components/accueil/header-15` | 2 |
| 3 | Section Liste de Fonctionnalités | `components/accueil/layout-401` | 1 |
| 4 | Section Accès Anticipé | `components/accueil/cta-54` | 1 |
| 5 | Section En-tête de Liste d'Événements En Vedette | `components/accueil/event-header-05` | 2 |
| 6 | Section Liste d'Événements | `components/accueil/event-14` | 1 |
| 7 | Section Liste de Produits Ecommerce | `components/accueil/product-04` | 3 |
| 8 | Section En-tête de Liste de Blogs en Vedette | `components/accueil/blog-18` | 3 |
| 9 | Section Liste de Blogs | `components/accueil/blog-40` | 1 |
| 10 | Section En-tête de Liste d'Événements En Vedette | `components/accueil/event-header-05_1` | 2 |
| 11 | Section Liste de Produits Ecommerce | `components/accueil/product-01` | 1 |
| 12 | Section Newsletter | `components/accueil/cta-32` | 2 |
| 13 | Section Témoignages | `components/accueil/testimonial-17` | 1 |
| 14 | Section Liste de Logos | `components/accueil/logo-06` | 3 |
| 15 | Section CTA (Appel à l'Action) | `components/accueil/cta-31` | 1 |
| 16 | Pied de Page | `components/footer-08` | 1 |

- Barre de navigation [Scheme 2]
- Section En-tête Hero [Scheme 2]: Bandeau promotionnel principal mettant en avant les offres du moment (ex. Crazy Days) avec visuels produits, message promotionnel et bouton d'action vers la page Promotions.
- Section Liste de Fonctionnalités [Scheme 1]: Présentation des avantages clés du site : livraison rapide, conseils de pharmaciens, large choix de produits, programme de fidélité.
- Section Accès Anticipé [Scheme 1]: Mise en avant du programme de fidélité avec invitation à s'inscrire et à découvrir les avantages exclusifs réservés aux membres.
- Section En-tête de Liste d'Événements En Vedette [Scheme 2]: Introduction aux promotions en cours avec titre accrocheur et lien vers toutes les promotions.
- Section Liste d'Événements [Scheme 1]: Liste des promotions actives avec visuels, durées de validité et liens vers les pages promotion dédiées.
- Section Liste de Produits Ecommerce [Scheme 3]: Grille des produits les plus populaires avec images, noms, prix, avantages fidélité et boutons d'ajout au panier.
- Section En-tête de Liste de Blogs en Vedette [Scheme 3]: Introduction aux conseils santé et bien-être avec titre invitant à consulter les articles du blog.
- Section Liste de Blogs [Scheme 1]: Sélection d'articles de blog récents sur la santé, la parapharmacie et le bien-être avec images et extraits.
- Section En-tête de Liste d'Événements En Vedette [Scheme 2]: Introduction aux univers de produits mis en avant (ex. Bébé & maman, Vitalité & équilibre) avec titre et description.
- Section Liste de Produits Ecommerce [Scheme 1]: Grille de produits par univers avec images, descriptions courtes et liens vers les catégories correspondantes.
- Section Newsletter [Scheme 2]: Encouragement à s'inscrire à la newsletter pour recevoir les offres exclusives, conseils santé et actualités de la parapharmacie.
- Section Témoignages [Scheme 1]: Témoignages de clients satisfaits mettant en avant la qualité des produits, la rapidité de livraison et le service client.
- Section Liste de Logos [Scheme 3]: Liste des marques partenaires et des laboratoires disponibles sur le site pour renforcer la confiance des visiteurs.
- Section CTA (Appel à l'Action) [Scheme 1]: Appel à l'action final invitant les visiteurs à découvrir l'ensemble des produits ou à consulter les promotions en cours.
- Pied de Page [Scheme 1]

#### Promotions

| # | Section | Component | Scheme |
| --- | --------- | ----------- | -------- |
| 1 | Barre de navigation | `components/navbar-08` | 2 |
| 2 | Section En-tête Hero | `components/promotions/header-15` | 2 |
| 3 | Section En-tête de Liste d'Événements En Vedette | `components/promotions/event-header-05` | 2 |
| 4 | Section Liste d'Événements | `components/promotions/event-14` | 1 |
| 5 | Section Liste de Produits Ecommerce | `components/promotions/product-04` | 3 |
| 6 | Section CTA (Appel à l'Action) | `components/promotions/cta-31` | 1 |
| 7 | Pied de Page | `components/footer-08` | 1 |

- Barre de navigation [Scheme 2]
- Section En-tête Hero [Scheme 2]: Bandeau promotionnel principal présentant les offres en cours avec visuels accrocheurs, message incitatif et bouton d'action pour découvrir les promotions.
- Section En-tête de Liste d'Événements En Vedette [Scheme 2]: Introduction aux promotions phares du moment avec titre dynamique et description des avantages offerts.
- Section Liste d'Événements [Scheme 1]: Liste complète des promotions actives avec visuels produits, pourcentages de réduction, dates de validité et liens vers les pages promotion dédiées.
- Section Liste de Produits Ecommerce [Scheme 3]: Grille des produits en promotion avec images, noms, prix barrés, prix réduits, avantages fidélité et boutons d'ajout au panier.
- Section CTA (Appel à l'Action) [Scheme 1]: Appel à l'action invitant les visiteurs à consulter toutes les promotions ou à s'inscrire à la newsletter pour ne manquer aucune offre.
- Pied de Page [Scheme 1]

###### Promotion

- Barre de navigation [Scheme 2]
- Section En-tête Hero [Scheme 2]: Bandeau promotionnel principal dédié à la promotion en cours avec visuel produit, message promotionnel, durée de validité et bouton d'action vers la liste des produits concernés.
- Section Liste de Fonctionnalités [Scheme 1]: Présentation des avantages spécifiques de cette promotion : réduction immédiate, avantages fidélité, livraison offerte selon conditions.
- Section Liste de Produits Ecommerce [Scheme 3]: Grille des produits inclus dans la promotion avec images, noms, prix barrés, prix promotionnels, badges de réduction et boutons d'ajout au panier.
- Section CTA (Appel à l'Action) [Scheme 1]: Invitation à découvrir les autres promotions en cours ou à consulter les univers de produits pour profiter d'offres complémentaires.
- Section Newsletter [Scheme 2]: Encouragement à s'inscrire à la newsletter pour ne manquer aucune promotion future et recevoir des offres exclusives.
- Pied de Page [Scheme 1]

#### Tous les Produits

| # | Section | Component | Scheme |
| --- | --------- | ----------- | -------- |
| 1 | Barre de navigation | `components/navbar-08` | 2 |
| 2 | Section En-tête Hero | `components/tous-les-produits/header-15` | 2 |
| 3 | Section Liste de Produits Ecommerce | `components/tous-les-produits/product-04` | 3 |
| 4 | Section Fonctionnalité | `components/tous-les-produits/layout-492` | 3 |
| 5 | Section Liste de Fonctionnalités | `components/tous-les-produits/layout-401` | 1 |
| 6 | Section CTA (Appel à l'Action) | `components/tous-les-produits/cta-31` | 1 |
| 7 | Pied de Page | `components/footer-08` | 1 |

- Barre de navigation [Scheme 2]
- Section En-tête Hero [Scheme 2]: Banniere d'introduction presentant la page avec un titre clair, une description concise et une image d'ambiance illustrant la diversite des produits disponibles.
- Section Liste de Produits Ecommerce [Scheme 3]: Grille complete de tous les produits avec filtres par categorie, marque, prix et avantages, incluant images, noms, prix et boutons d'ajout au panier.
- Section Fonctionnalité [Scheme 3]: Filtres avancés pour affiner la recherche par univers, type de produit, marque ou gamme de prix afin de faciliter la navigation.
- Section Liste de Fonctionnalités [Scheme 1]: Presentation des avantages d'achat : livraison rapide, conseils de pharmaciens, programme de fidelite et garantie de qualite.
- Section CTA (Appel à l'Action) [Scheme 1]: Invitation à consulter les promotions en cours ou à s'inscrire à la newsletter pour beneficier d'offres exclusives.
- Pied de Page [Scheme 1]

###### Produit

- Barre de navigation [Scheme 2]
- Section En-tête de Produit Ecommerce [Scheme 2]: Présentation du produit avec image principale, nom, marque, référence, note et avis clients, prix, avantages fidélité, quantité disponible et bouton d'ajout au panier.
- Section Produit Ecommerce [Scheme 1]: Détails complets du produit : description détaillée, caractéristiques, composition, conseils d'utilisation, précautions d'emploi et informations de livraison.
- Section Avis [Scheme 3]: Affichage des avis clients sur le produit avec notes, commentaires et possibilité de laisser un avis.
- Section Liste de Produits Ecommerce [Scheme 1]: Produits similaires ou complémentaires recommandés avec images, noms, prix et boutons d'ajout au panier.
- Section FAQ [Scheme 2]: Questions fréquentes sur le produit, son utilisation, ses contre-indications et les conditions de livraison ou de retour.
- Section CTA (Appel à l'Action) [Scheme 1]: Invitation à découvrir d'autres produits de la même catégorie ou à profiter des promotions en cours.
- Pied de Page [Scheme 1]

#### Univers

| # | Section | Component | Scheme |
| --- | --------- | ----------- | -------- |
| 1 | Barre de navigation | `components/navbar-08` | 2 |
| 2 | Section En-tête Hero | `components/univers/header-15` | 2 |
| 3 | Section À Propos | `components/univers/layout-01` | 1 |
| 4 | Section Liste de Produits Ecommerce | `components/univers/product-04` | 3 |
| 5 | Section Fonctionnalité | `components/univers/layout-492` | 1 |
| 6 | Section Fonctionnalité | `components/univers/layout-503` | 2 |
| 7 | Section Fonctionnalité | `components/univers/layout-491` | 1 |
| 8 | Section Galerie | `components/univers/gallery-24` | 3 |
| 9 | Section CTA (Appel à l'Action) | `components/univers/cta-31` | 1 |
| 10 | Section Newsletter | `components/univers/cta-32` | 2 |
| 11 | Pied de Page | `components/footer-08` | 1 |

- Barre de navigation [Scheme 2]
- Section En-tête Hero [Scheme 2]: Bandeau d'introduction présentant l'univers des produits avec visuel thématique et texte d'accroche sur la diversité des catégories disponibles.
- Section À Propos [Scheme 1]: Présentation de l'approche de Medi-Market en matière de santé et bien-être, expliquant les différents univers produits et leur complémentarité.
- Section Liste de Produits Ecommerce [Scheme 3]: Grille des principales catégories d'univers (Bébé & maman, Vitalité & équilibre, Soins & beauté, etc.) avec images, descriptions courtes et liens vers les pages correspondantes.
- Section Fonctionnalité [Scheme 1]: Mise en avant d'un univers spécifique avec détails sur les produits phares, les marques disponibles et les conseils associés.
- Section Fonctionnalité [Scheme 2]: Mise en avant d'un second univers spécifique avec détails sur les produits phares, les marques disponibles et les conseils associés.
- Section Fonctionnalité [Scheme 1]: Mise en avant d'un troisième univers spécifique avec détails sur les produits phares, les marques disponibles et les conseils associés.
- Section Galerie [Scheme 3]: Galerie de visuels illustrant les différents univers produits avec des images attrayantes et des légendes descriptives.
- Section CTA (Appel à l'Action) [Scheme 1]: Invitation à explorer les produits d'un univers ou à consulter les promotions disponibles dans chaque catégorie.
- Section Newsletter [Scheme 2]: Encouragement à s'inscrire à la newsletter pour recevoir des conseils personnalisés selon les univers d'intérêt.
- Pied de Page [Scheme 1]

###### Bébé & Maman

- Barre de navigation [Scheme 2]
- Section En-tête Hero [Scheme 2]: Bandeau héro présentant l'univers Bébé & Maman avec visuels de produits pour bébé et maman, message de bienvenue et bouton d'action vers les catégories principales.
- Section Liste de Produits Ecommerce [Scheme 1]: Grille des produits populaires pour bébé et maman avec images, noms, prix, avantages fidélité et boutons d'ajout au panier.
- Section Fonctionnalité [Scheme 1]: Mise en avant des conseils de pharmaciens spécialisés en pédiatrie et maternité pour guider les parents dans leurs choix.
- Section Liste de Fonctionnalités [Scheme 3]: Présentation des avantages de l'univers : produits testés, conseils personnalisés, livraison rapide et programme de fidélité.
- Section Liste de Produits Ecommerce [Scheme 3]: Grille de produits par sous-catégorie (alimentation, soins, hygiène, puériculture) avec images et descriptions.
- Section Fonctionnalité [Scheme 1]: Section dédiée aux conseils pour la grossesse et le post-partum avec recommandations de produits adaptés.
- Section Fonctionnalité [Scheme 2]: Section dédiée aux soins du nourrisson avec recommandations de produits adaptés.
- Section CTA (Appel à l'Action) [Scheme 1]: Appel à l'action invitant les visiteurs à consulter les promotions de l'univers ou à découvrir les articles de blog liés.
- Section Newsletter [Scheme 2]: Encouragement à s'inscrire à la newsletter pour recevoir des conseils parentaux et des offres exclusives sur l'univers Bébé & Maman.
- Section Témoignages [Scheme 1]: Témoignages de parents satisfaits mettant en avant la qualité des produits et la pertinence des conseils.
- Section Liste de Logos [Scheme 3]: Liste des marques partenaires spécialisées en puériculture et soins bébé (ex. Mustela, Pampers, Babymoov).
- Section CTA (Appel à l'Action) [Scheme 1]: Appel à l'action final invitant à découvrir tous les produits de l'univers ou à prendre contact avec les conseillers.
- Pied de Page [Scheme 1]

#### Blog

| # | Section | Component | Scheme |
| --- | --------- | ----------- | -------- |
| 1 | Barre de navigation | `components/navbar-08` | 2 |
| 2 | Section En-tête de Liste de Blogs en Vedette | `components/blog/blog-18` | 3 |
| 3 | Section Liste de Blogs | `components/blog/blog-40` | 1 |
| 4 | Section Newsletter | `components/blog/cta-32` | 2 |
| 5 | Section FAQ | `components/blog/faq-06` | 1 |
| 6 | Section CTA (Appel à l'Action) | `components/blog/cta-31` | 1 |
| 7 | Pied de Page | `components/footer-08` | 1 |

- Barre de navigation [Scheme 2]
- Section En-tête de Liste de Blogs en Vedette [Scheme 3]: Titre de la page Blog avec introduction sur les conseils santé, bien-être et parapharmacie, invitant les visiteurs à explorer les articles.
- Section Liste de Blogs [Scheme 1]: Grille des articles de blog récents avec images, titres, dates, catégories et extraits, triés par pertinence ou date de publication.
- Section Newsletter [Scheme 2]: Encouragement à s'inscrire à la newsletter pour recevoir les nouveaux articles du blog et les conseils santé directement par email.
- Section FAQ [Scheme 1]: Questions fréquentes sur les sujets santé abordés dans le blog, avec réponses pour aider les visiteurs à trouver rapidement l'information recherchée.
- Section CTA (Appel à l'Action) [Scheme 1]: Appel à l'action final invitant les visiteurs à consulter les articles les plus populaires ou à s'abonner à la newsletter du blog.
- Pied de Page [Scheme 1]

##### Article de Blog

- Barre de navigation [Scheme 2]
- Section En-tête de Publication de Blog [Scheme 2]: Titre de l'article, auteur, date de publication, catégorie et image de couverture pour contextualiser le contenu.
- Section Corps de Publication de Blog [Scheme 1]: Corps de l'article avec texte structuré en paragraphes, sous-titres, listes et citations pour une lecture claire et agréable.
- Section Galerie [Scheme 1]: Images illustratives et infographies complémentaires pour enrichir le contenu et faciliter la compréhension des informations.
- Section Témoignages [Scheme 2]: Avis de lecteurs ou d'experts sur l'article pour renforcer la crédibilité et encourager l'engagement.
- Section FAQ [Scheme 1]: Questions fréquentes en lien avec le sujet de l'article pour répondre aux interrogations des lecteurs.
- Section CTA (Appel à l'Action) [Scheme 1]: Invitation à découvrir les produits associés à l'article, consulter d'autres articles ou s'abonner à la newsletter.
- Pied de Page [Scheme 1]

---
name: "Refonte website existant"
theme: "light"

colors:
  neutral:
    shade-0: "#FFFFFF"
    shade-1: "#F2F2F2"
    shade-2: "#DADAD9"
    shade-3: "#B6B5B3"
    shade-4: "#868581"
    shade-5: "#55544E"
    shade-6: "#25231C"
    shade-7: "#0D0B03"
    white: "#FFFFFF"
  persian-green:
    shade-1: "#E5F6F2"
    shade-2: "#CCEDE6"
    shade-3: "#4CC2A8"
    shade-4: "#00A984"
    shade-5: "#008769"
    shade-6: "#004334"
    shade-7: "#003227"
  azure-radiance:
    shade-1: "#E5F1FF"
    shade-2: "#CCE4FF"
    shade-3: "#4CA2FF"
    shade-4: "#007BFF"
    shade-5: "#0062CC"
    shade-6: "#003166"
    shade-7: "#00244C"
  bittersweet:
    shade-1: "#FFF0F0"
    shade-2: "#FFE1E1"
    shade-3: "#FF9797"
    shade-4: "#FF6B6B"
    shade-5: "#CC5555"
    shade-6: "#662A2A"
    shade-7: "#4C2020"
  bright-sun:
    shade-1: "#FFFBEB"
    shade-2: "#FFF7D8"
    shade-3: "#FFE477"
    shade-4: "#FFD93D"
    shade-5: "#CCAD30"
    shade-6: "#665618"
    shade-7: "#4C4112"

typography:
  heading:
    fontFamily: "Bebas Neue"
    fontWeight: 400
  body:
    fontFamily: "Roboto"
    fontWeight: 400
  sizes:
    desktop:
      h1: 84px
      h2: 60px
      h3: 48px
      h4: 40px
      h5: 32px
      h6: 26px
      text-large: 26px
      text-medium: 20px
      text-regular: 18px
      text-small: 16px
      text-tiny: 12px
    mobile:
      h1: 48px
      h2: 44px
      h3: 32px
      h4: 24px
      h5: 20px
      h6: 18px
      text-large: 18px
      text-medium: 16px
      text-regular: 14px
      text-small: 12px
      text-tiny: 10px

ui:
  style: "bubble"
  buttonRadius: 100px
  tagRadius: 100px
  inputRadius: 12px

cards:
  style: "outlined"
  borderWidth: 1px
  dividerWidth: 1px
  radiusLarge: 8px
  radiusMedium: 8px
  radiusSmall: 8px

schemes:

- name: "Scheme 1"
    background: "neutral-shade-0"
    backgroundHex: "#FFFFFF"
    foregroundHex: "#FFFFFF"
    textHex: "#0d0b03"
    accentHex: "#00A984"
    borderValue: "#0d0b0326"
    useLogoVariant: light
    cssClass: "scheme-1"
- name: "Scheme 2"
    background: "chromatic1-shade-1"
    backgroundHex: "#E5F6F2"
    foregroundHex: "#E5F6F2"
    textHex: "#0d0b03"
    accentHex: "#0d0b03"
    borderValue: "#0d0b0326"
    useLogoVariant: light
    cssClass: "scheme-2"
- name: "Scheme 3"
    background: "neutral-shade-1"
    backgroundHex: "#F2F2F2"
    foregroundHex: "#F2F2F2"
    textHex: "#0d0b03"
    accentHex: "#0d0b03"
    borderValue: "#0d0b0326"
    useLogoVariant: light
    cssClass: "scheme-3"

---

## Design

This file contains machine-readable design tokens in the YAML frontmatter above, and human-readable guidance below.

## Colors

The design uses a **light** theme with a neutral palette and 4 chromatic palettes.

- **Neutral shades** range from shade-0 (darkest) to shade-7 (lightest), plus white
- **Persian Green** — primary shade: `#00A984`
- **Azure Radiance** — primary shade: `#007BFF`
- **Bittersweet** — primary shade: `#FF6B6B`
- **Bright Sun** — primary shade: `#FFD93D`

Use the CSS custom properties from `react/globals.css` for all colors (e.g. `--color-neutral-darkest`, `--color-blue-ribbon`).

## Typography

Headings use **Bebas Neue** at weight 400. Body text uses **Roboto** at weight 400.

The type scale has desktop and mobile sizes. Apply mobile sizes at smaller breakpoints. All values are in `react/globals.css`.

## UI Elements

UI style is **bubble** with button radius 100px. Cards use the **outlined** style with border-width 1px.

## Color Schemes

Sections use color schemes to control their visual appearance. Each scheme is derived from a single background color — all other colors (text, foreground, accent, border) are automatically computed for optimal contrast.

| Scheme | Background | Text | Accent | Logo | CSS class |
| -------- | ----------- | ------ | -------- | ------ | ----------- |
| Scheme 1 | Neutral White (#FFFFFF) | #0d0b03 | #00A984 | light | `.scheme-1` |
| Scheme 2 | Persian Green Lightest (#E5F6F2) | #0d0b03 | #0d0b03 | light | `.scheme-2` |
| Scheme 3 | Neutral Lightest (#F2F2F2) | #0d0b03 | #0d0b03 | light | `.scheme-3` |

Apply a scheme by adding its CSS class to the section element. See `sitemap.md` for which scheme each section uses.

### Tweaking Schemes

To create visual variation, you can change which scheme a section uses. When switching schemes:

- Swap the CSS class (e.g. change `.scheme-1` to `.scheme-2`)
- All child elements automatically inherit the correct text, accent, and border colors
- Use the matching logo variant (`logo-light.svg` or `logo-dark.svg`) based on the scheme's `useLogoVariant`
- Alternate between light and dark schemes to create visual rhythm
