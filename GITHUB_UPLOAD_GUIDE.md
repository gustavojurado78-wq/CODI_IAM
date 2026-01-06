# 📤 How to Upload to GitHub - Step by Step

Complete guide for uploading the AMI Code Dashboard to GitHub, even if you've never used Git before.

---

## 🎯 Prerequisites

1. **GitHub Account** - [Sign up at github.com](https://github.com/signup)
2. **Git Installed** - [Download here](https://git-scm.com/downloads)
3. **All project files** downloaded in one folder

---

## 📁 Project Structure

Make sure you have these files:
```
ami-code-dashboard/
├── dashboard-iam.html      (your main application)
├── README.md               (project documentation)
├── LICENSE                 (MIT license)
├── CONTRIBUTING.md         (contribution guidelines)
├── CHANGELOG.md            (version history)
├── QUICKSTART.md           (quick start guide)
└── .gitignore              (files to ignore)
```

---

## 🚀 Method 1: GitHub Web Interface (Easiest - No Git Required)

### Step 1: Create Repository
1. Go to [github.com](https://github.com)
2. Click **"+"** (top right) → **"New repository"**
3. Fill in:
   - **Repository name**: `ami-code-dashboard`
   - **Description**: "Real-time clinical decision support for AMI management"
   - **Public** or **Private**: Choose public for open source
   - ✅ Check **"Add a README file"** (we'll replace it)
   - **License**: Choose MIT License
4. Click **"Create repository"**

### Step 2: Upload Files
1. Click **"Add file"** → **"Upload files"**
2. Drag and drop ALL your files
3. Scroll down to **"Commit changes"**
4. Write: "Initial commit - AMI Code Dashboard v1.0.0"
5. Click **"Commit changes"**

### Step 3: Enable GitHub Pages (Optional)
1. Go to **Settings** → **Pages**
2. Under **"Source"**, select **main** branch
3. Click **"Save"**
4. Wait 1-2 minutes
5. Your dashboard will be live at: `https://yourusername.github.io/ami-code-dashboard/dashboard-iam.html`

✅ **Done! Your project is now on GitHub!**

---

## 💻 Method 2: Using Git Command Line (Recommended for Developers)

### Step 1: Install and Configure Git

```bash
# Check if Git is installed
git --version

# If not installed, download from: https://git-scm.com/downloads

# Configure Git (first time only)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Step 2: Create Repository on GitHub
1. Go to [github.com](https://github.com)
2. Click **"+"** → **"New repository"**
3. Name: `ami-code-dashboard`
4. **DO NOT** initialize with README
5. Click **"Create repository"**
6. **Copy the repository URL** (e.g., `https://github.com/yourusername/ami-code-dashboard.git`)

### Step 3: Initialize Local Repository

```bash
# Navigate to your project folder
cd /path/to/your/ami-code-dashboard

# Initialize Git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit - AMI Code Dashboard v1.0.0"

# Add GitHub as remote (replace with YOUR repository URL)
git remote add origin https://github.com/yourusername/ami-code-dashboard.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Verify Upload
1. Refresh your GitHub repository page
2. All files should now be visible
3. README.md will display automatically

✅ **Done! Your project is on GitHub!**

---

## 🌐 Method 3: Using GitHub Desktop (Visual Interface)

### Step 1: Install GitHub Desktop
1. Download from [desktop.github.com](https://desktop.github.com)
2. Install and sign in with your GitHub account

### Step 2: Create Repository
1. Open GitHub Desktop
2. **File** → **New Repository**
3. **Name**: `ami-code-dashboard`
4. **Local Path**: Choose where to create folder
5. Click **"Create Repository"**

### Step 3: Add Files
1. Copy all your project files into the new folder
2. GitHub Desktop will detect the changes
3. Write commit message: "Initial commit - AMI Code Dashboard v1.0.0"
4. Click **"Commit to main"**

### Step 4: Publish to GitHub
1. Click **"Publish repository"**
2. Choose **Public** or **Private**
3. Click **"Publish repository"**

✅ **Done! Your project is on GitHub!**

---

## 🎨 Customization Before Upload

### Update README.md
Replace placeholder text:
```markdown
# Change this:
[Your Name Here]
your.email@example.com

# To your actual:
John Doe
john.doe@hospital.com
```

### Update LICENSE
```markdown
# Change this:
Copyright (c) 2025 [Your Name Here]

# To:
Copyright (c) 2025 John Doe
```

### Add Screenshot (Optional)
1. Take screenshot of dashboard
2. Save as `screenshot.png`
3. Add to repository
4. In README.md add:
```markdown
## Screenshot

![Dashboard Screenshot](screenshot.png)
```

---

## 📊 After Upload - Next Steps

### 1. Create Releases
```bash
# Tag your first release
git tag -a v1.0.0 -m "Version 1.0.0 - Initial Release"
git push origin v1.0.0

# On GitHub:
# Go to "Releases" → "Create a new release"
# Choose tag: v1.0.0
# Title: "Version 1.0.0 - Initial Release"
# Copy from CHANGELOG.md
# Attach dashboard-iam.html as download
```

### 2. Add Topics/Tags
In your repository on GitHub:
- Click ⚙️ next to "About"
- Add topics: `healthcare`, `cardiology`, `stemi`, `clinical-decision-support`, `emergency-medicine`, `html`, `javascript`

### 3. Create Issues Templates
```bash
# Create .github folder
mkdir .github
cd .github
mkdir ISSUE_TEMPLATE
```

Create bug report template (see full instructions below)

### 4. Add Social Preview
1. Go to repository **Settings**
2. Scroll to **Social preview**
3. Upload image (1280x640px recommended)

---

## 🔒 Security Considerations

### Before Publishing Publicly:

#### Check for Sensitive Data
```bash
# Search for potential issues
grep -r "password" .
grep -r "api_key" .
grep -r "secret" .
grep -r "@hospital.com" .
```

#### Review All Files
- Remove any test patient data
- Remove internal hospital references
- Remove personal email addresses (use GitHub profile email)
- Remove any proprietary protocols

#### Add Security Policy
Create `SECURITY.md`:
```markdown
# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability, please email:
security@yourdomain.com

Do not open a public issue for security vulnerabilities.
```

---

## 🔄 Keeping Your Repository Updated

### Making Changes
```bash
# Make changes to files
# Then:
git add .
git commit -m "Description of changes"
git push origin main
```

### Updating README
```bash
git add README.md
git commit -m "docs: Update README with new features"
git push origin main
```

### Creating New Version
```bash
# Update CHANGELOG.md with new version
git add CHANGELOG.md dashboard-iam.html
git commit -m "Release v1.1.0"
git tag -a v1.1.0 -m "Version 1.1.0"
git push origin main
git push origin v1.1.0
```

---

## 📱 Enable GitHub Pages

### Make Your Dashboard Live Online

**Option 1: Automatic (Recommended)**
1. Repository → **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** → folder: **/ (root)**
4. **Save**
5. Wait 1-2 minutes
6. Access at: `https://yourusername.github.io/ami-code-dashboard/dashboard-iam.html`

**Option 2: Custom Domain**
1. Buy domain (e.g., ami-dashboard.com)
2. In repository: **Settings** → **Pages** → **Custom domain**
3. Add your domain
4. Configure DNS with your domain provider
5. Enable **Enforce HTTPS**

---

## ✅ Verification Checklist

After upload, verify:
- [ ] All files uploaded successfully
- [ ] README.md displays correctly
- [ ] LICENSE file present
- [ ] No personal/sensitive data exposed
- [ ] Repository description filled in
- [ ] Topics/tags added
- [ ] Repository is Public (for open source)
- [ ] GitHub Pages enabled (optional)
- [ ] First release created
- [ ] Repository URL shared with colleagues

---

## 🆘 Troubleshooting

### "Permission denied" error
```bash
# Use HTTPS instead of SSH
git remote set-url origin https://github.com/yourusername/ami-code-dashboard.git
```

### "Large file" error
```bash
# Remove file from git
git rm --cached large-file.zip
git commit -m "Remove large file"

# Add to .gitignore
echo "large-file.zip" >> .gitignore
```

### "Merge conflict" error
```bash
# Pull first, then push
git pull origin main
# Resolve conflicts if any
git push origin main
```

### Changes not showing on GitHub Pages
- Wait 5 minutes (GitHub Pages updates can be slow)
- Check **Settings** → **Pages** for build status
- Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
- Clear browser cache

---

## 🎓 Learning Resources

### Git Basics
- [GitHub Guides](https://guides.github.com)
- [Git Handbook](https://guides.github.com/introduction/git-handbook/)
- [Interactive Git Tutorial](https://learngitbranching.js.org)

### GitHub Features
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Creating Releases](https://docs.github.com/en/repositories/releasing-projects-on-github)
- [Repository Settings](https://docs.github.com/en/repositories)

---

## 📞 Need Help?

- **Git issues**: [Git Documentation](https://git-scm.com/doc)
- **GitHub issues**: [GitHub Support](https://support.github.com)
- **Project issues**: Open an issue in your repository

---

## 🎉 Success!

Your AMI Code Dashboard is now:
- ✅ Safely stored on GitHub
- ✅ Version controlled
- ✅ Shareable with colleagues
- ✅ Open source (if public)
- ✅ Potentially live online (if GitHub Pages enabled)

**Next steps**: Star your own repo, share with colleagues, and start accepting contributions!

---

*Good luck with your open source project! 🚀*
