# Portfolio Content Update Guide

## 📝 How to Add/Remove Content Dynamically

Your portfolio content is stored in `src/data/portfolio.json`. Update this file and push to GitHub - Vercel will automatically redeploy!

---

## 🎓 Adding a New Certificate

### Step 1: Add Your Certificate Image

1. Save your certificate image in `public/certificates/` folder
   - Example: `public/certificates/my-new-cert.png`

2. Or use an external URL (Imgur, Cloudinary, etc.)

### Step 2: Update portfolio.json

Open `src/data/portfolio.json` and add your certificate to the `certifications` array:

```json
{
  "id": 3,
  "title": "AWS Certified Developer",
  "issuer": "Amazon Web Services",
  "date": "2025",
  "description": "Professional certification for developing and maintaining AWS applications.",
  "icon": "☁️",
  "image": "/certificates/aws-developer.png",
  "link": "https://www.credly.com/badges/your-badge-id",
  "skills": ["AWS", "Lambda", "DynamoDB"]
}
```

### Step 3: Deploy

```bash
git add .
git commit -m "Add new certificate"
git push
```

Vercel will automatically rebuild and deploy! ✨

---

## 💻 Adding/Removing Skills

### Add to Top Skills (Core Expertise)

Edit the `topSkills` array in `src/data/portfolio.json`:

```json
{
  "name": "Docker",
  "icon": "SiDocker",
  "color": "#2496ED"
}
```

### Add to Other Skills

Edit the `otherSkills` array:

```json
{
  "name": "GraphQL",
  "icon": "SiGraphql",
  "color": "#E10098"
}
```

### Remove a Skill

Simply delete the skill object from the array and push to GitHub.

---

## 🚀 Deployment Process

1. **Edit** `src/data/portfolio.json`
2. **Add images** to `public/certificates/` (if needed)
3. **Commit and Push**:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push origin main
   ```
4. **Vercel auto-deploys** in ~30 seconds!

---

## 📁 Image Management Options

### Option A: Local Images (Recommended)
- Store in `public/certificates/`
- Reference as `/certificates/image-name.png`
- ✅ Fast loading
- ✅ Full control

### Option B: External Hosting
- Upload to [Imgur](https://imgur.com), [Cloudinary](https://cloudinary.com), or [ImageKit](https://imagekit.io)
- Use full URL: `https://i.imgur.com/abc123.png`
- ✅ Saves repo space
- ⚠️ Depends on external service

---

## 🎨 Available Icons

Common icon names for skills (from react-icons):

- **Frontend**: FaReact, FaVuejs, FaAngular, FaHtml5, FaCss3Alt
- **Backend**: FaNodeJs, FaPython, FaJava, FaPhp
- **Database**: SiMongodb, SiPostgresql, SiMysql, SiRedis
- **Cloud**: FaAws, SiMicrosoftazure, SiGooglecloud
- **Tools**: FaGitAlt, FaDocker, SiKubernetes, SiJenkins
- **Languages**: FaJs, SiTypescript, FaPython, FaJava

Browse more at: https://react-icons.github.io/react-icons/

---

## 💡 Pro Tips

1. **Optimize Images**: Compress certificates before uploading (use [TinyPNG](https://tinypng.com))
2. **Consistent Naming**: Use kebab-case: `aws-cert-2024.png`
3. **Backup**: Keep original certificates in a separate folder
4. **Test Locally**: Run `npm run dev` before pushing
5. **Mobile Check**: Test on mobile view in browser DevTools

---

## 🔄 Quick Update Workflow

```bash
# 1. Add new certificate image
cp ~/Downloads/new-cert.png public/certificates/

# 2. Edit content
code src/data/portfolio.json

# 3. Test locally
npm run dev

# 4. Deploy
git add .
git commit -m "Add new certification"
git push

# Done! Check your live site in 30 seconds
```

---

## 🆘 Troubleshooting

**Image not showing?**
- Check path: `/certificates/name.png` (note the leading slash)
- Verify file exists in `public/certificates/`
- Check image format (PNG, JPG, WebP supported)

**Skills icon not rendering?**
- Update `Skills.jsx` to import the icon
- Check icon name on react-icons website

**Changes not appearing?**
- Clear browser cache (Ctrl+Shift+R / Cmd+Shift+R)
- Check Vercel deployment status
- Verify JSON syntax (use [JSONLint](https://jsonlint.com))

---

Need help? Check your Vercel deployment logs or open an issue on GitHub!
