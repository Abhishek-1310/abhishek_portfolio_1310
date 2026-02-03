# Portfolio Certificates

Store your certificate images here.

## Naming Convention
Use descriptive, lowercase names with hyphens:
- ✅ `aws-solutions-architect-2024.png`
- ✅ `freecodecamp-javascript.png`
- ❌ `cert1.png`
- ❌ `My Certificate.png`

## Supported Formats
- PNG (recommended for certificates)
- JPG/JPEG
- WebP

## Image Optimization
Before adding certificates, optimize them:
- Use [TinyPNG](https://tinypng.com) or [Squoosh](https://squoosh.app)
- Target size: < 500KB per image
- Recommended resolution: 1200x900px or similar

## Usage
Reference in `src/data/portfolio.json` as:
```json
"image": "/certificates/your-cert-name.png"
```

Note: The path starts with `/` because files in `public/` are served from the root.
