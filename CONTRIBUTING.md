# Contributing to AMI Code Dashboard

First off, thank you for considering contributing to AMI Code Dashboard! It's people like you that make this tool better for healthcare professionals worldwide.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Getting Started](#getting-started)
- [Development Guidelines](#development-guidelines)
- [Clinical Content Guidelines](#clinical-content-guidelines)
- [Submitting Changes](#submitting-changes)

---

## Code of Conduct

This project adheres to a code of professional conduct. By participating, you are expected to uphold this code:

- **Be respectful** - Healthcare professionals from diverse backgrounds use this tool
- **Be constructive** - Focus on improving patient care and clinical accuracy
- **Be evidence-based** - All clinical recommendations must be supported by current guidelines
- **Be professional** - Maintain medical confidentiality and ethical standards

---

## How Can I Contribute?

### 🐛 Reporting Bugs

**Before submitting a bug report:**
- Check the [existing issues](https://github.com/yourusername/ami-code-dashboard/issues) to avoid duplicates
- Gather information about the bug (browser, OS, steps to reproduce)

**How to submit a good bug report:**

```markdown
**Describe the bug**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '...'
3. Enter data '...'
4. See error

**Expected behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment:**
- Browser: [e.g. Chrome 120, Firefox 121]
- OS: [e.g. Windows 11, macOS 14, iOS 17]
- Device: [e.g. Desktop, iPad Pro]

**Additional context**
Any other context about the problem.
```

### 🆕 Suggesting Features

**Before suggesting a feature:**
- Check if the feature already exists or is planned
- Consider if it aligns with the project's goals (emergency AMI management)

**How to suggest a feature:**

```markdown
**Feature Description**
Clear description of the proposed feature.

**Clinical Rationale**
Why is this clinically important? What problem does it solve?

**Evidence Base**
Guidelines or studies supporting this feature:
- Reference 1
- Reference 2

**Use Case**
Describe a specific clinical scenario where this would be useful.

**Implementation Ideas**
If you have technical suggestions, include them here.
```

### 🌍 Translating

We welcome translations to make this tool accessible worldwide!

**To contribute a translation:**

1. **Announce your intention** - Open an issue: "Translation: [Language]"
2. **Create a language branch** - `git checkout -b translation/spanish`
3. **Translate interface elements** - All text strings in the HTML
4. **Translate help system** - ECG patterns, protocols, criteria
5. **Medical terminology** - Use official medical translations for your region
6. **Review by native speaker** - Ideally a healthcare professional
7. **Submit pull request**

**Translation priorities:**
1. English (high priority)
2. French
3. Spanish
4. Catalan
5. Portuguese
6. Italian
7. German

### 📚 Improving Documentation

Documentation improvements are always welcome:
- Fix typos or unclear explanations
- Add clinical examples
- Improve README sections
- Create tutorials or videos
- Add FAQ entries

### 💻 Contributing Code

**Areas where code contributions are needed:**
- Performance optimizations
- Accessibility improvements (WCAG compliance)
- Mobile responsiveness fixes
- Print layout enhancements
- New clinical calculators
- Integration examples (HL7, FHIR)

---

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Basic understanding of HTML, CSS, JavaScript
- For clinical content: Medical training or healthcare background

### Setting Up Development Environment

```bash
# 1. Fork the repository on GitHub
# 2. Clone your fork
git clone https://github.com/YOUR-USERNAME/ami-code-dashboard.git
cd ami-code-dashboard

# 3. Create a branch for your changes
git checkout -b feature/your-feature-name

# 4. Open the HTML file in your browser
# No build process required!
open dashboard-iam.html

# 5. Make your changes
# Edit dashboard-iam.html directly

# 6. Test thoroughly
# Test in multiple browsers and screen sizes
```

### Testing Your Changes

**Manual Testing Checklist:**
- [ ] Test in Chrome, Firefox, Safari
- [ ] Test on mobile device (or responsive mode)
- [ ] Test all modified features
- [ ] Test edge cases (missing data, extreme values)
- [ ] Verify clinical accuracy of any medical content
- [ ] Check that print layout still works
- [ ] Verify no console errors

**Clinical Testing:**
- [ ] Verify dosing calculations with reference sources
- [ ] Check contraindication logic against guidelines
- [ ] Test time-based recommendations
- [ ] Validate ECG criteria against examples

---

## Development Guidelines

### Code Style

#### HTML
- Use semantic HTML5 elements
- Maintain consistent indentation (4 spaces)
- Add comments for complex sections
- Keep inline styles minimal (use CSS classes)

#### CSS
- Follow existing naming conventions
- Use CSS variables for colors
- Maintain responsive design principles
- Comment media query breakpoints

#### JavaScript
- Use descriptive variable names
- Add comments for complex logic
- Prefer `const` and `let` over `var`
- Use arrow functions where appropriate
- Keep functions focused and modular

**Example:**
```javascript
// Good
function calculateTNKDose(weight, age) {
    const isElderly = age > 75;
    const reducedDose = isElderly ? 0.5 : 1.0;
    
    if (weight < 60) return 30 * reducedDose;
    if (weight <= 70) return 35 * reducedDose;
    // ... etc
}

// Avoid
function calc(w,a){var x=a>75?.5:1;if(w<60)return 30*x;if(w<=70)return 35*x;}
```

### File Structure
Since this is a single-file application:
- Keep all styles in the `<style>` section
- Keep all scripts in the `<script>` section
- Use clear section comments

```html
<!-- ============================================ -->
<!-- PATIENT DATA SECTION                        -->
<!-- ============================================ -->
```

### Performance Guidelines
- Minimize DOM manipulations
- Use event delegation where possible
- Debounce rapid input events if needed
- Keep functions under 50 lines when possible
- Avoid memory leaks (remove event listeners)

---

## Clinical Content Guidelines

### Evidence Requirements

**All clinical recommendations must be supported by:**
1. **Current guidelines** (ESC, AHA/ACC, national protocols)
2. **Major clinical trials** (published in peer-reviewed journals)
3. **Expert consensus** (when guidelines are silent)

**When adding/modifying clinical content:**

```markdown
## Change Description
[Brief description of clinical change]

## Evidence Base
- **Guideline**: ESC 2023 ACS Guidelines, Section 4.2.1
- **Trial**: STREAM Trial (Lancet 2013) - Fibrinolysis timing
- **Reference**: PMID: 23473396

## Clinical Rationale
[Why this change improves patient care]

## Potential Conflicts
[Any contradicting guidelines or regional variations]
```

### Medication Dosing
- Must match current drug formularies
- Include age/weight adjustments
- List all major contraindications
- Cite source (guideline, package insert)

### ECG Interpretation
- Provide diagnostic criteria
- Include clinical context
- Link to visual examples if possible
- Cite original description or validation study

### Safety Features
- Prioritize safety over convenience
- Implement multiple validation layers
- Provide clear warnings
- Allow override only with explicit confirmation

---

## Submitting Changes

### Pull Request Process

1. **Update documentation** - If you changed functionality, update README.md
2. **Test thoroughly** - Complete the testing checklist
3. **Commit with clear messages**:
   ```
   feat: Add Wellens' syndrome guide to ECG pattern references
   fix: Correct morphine dosing for renal impairment
   docs: Update README with new ECG patterns
   style: Improve mobile responsiveness for medication section
   ```

4. **Create Pull Request**:
   - Use a descriptive title
   - Reference any related issues
   - Provide before/after screenshots if visual
   - List testing performed
   - Note any breaking changes

### Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix (non-breaking change fixing an issue)
- [ ] New feature (non-breaking change adding functionality)
- [ ] Breaking change (fix or feature causing existing functionality to change)
- [ ] Documentation update
- [ ] Clinical content update

## Clinical Justification (if applicable)
- Evidence base:
- Clinical rationale:

## Testing
- [ ] Tested in Chrome
- [ ] Tested in Firefox
- [ ] Tested in Safari
- [ ] Tested on mobile
- [ ] Verified clinical accuracy
- [ ] No console errors

## Screenshots (if applicable)
[Add screenshots]

## Additional Notes
[Any other relevant information]
```

### Review Process

1. **Initial Review** - Maintainer checks for completeness
2. **Technical Review** - Code quality and functionality
3. **Clinical Review** - For clinical content changes
4. **Testing** - Maintainer tests in multiple environments
5. **Approval & Merge** - Changes merged into main branch

---

## Recognition

Contributors will be:
- Listed in the README.md Contributors section
- Credited in release notes
- Acknowledged in the application (major contributions)

---

## Questions?

- **General questions**: Open a [Discussion](https://github.com/yourusername/ami-code-dashboard/discussions)
- **Technical questions**: Comment on relevant issue
- **Clinical questions**: Email [your.email@example.com]

---

## License

By contributing, you agree that your contributions will be licensed under the MIT License with the Medical Disclaimer as stated in the LICENSE file.

---

**Thank you for contributing to better patient care! 🏥❤️**
