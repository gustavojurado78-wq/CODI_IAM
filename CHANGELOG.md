# Changelog

All notable changes to the AMI Code Dashboard will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Planned
- English translation
- Dark mode support
- IndexedDB persistent storage
- QR code generation for reports
- Voice input support
- **Automatic ECG pattern recognition using AI** (future major feature)

---

## [1.0.0] - 2025-01-06

### Added - Initial Release 🎉

#### Core Features
- **Intelligent AMI Code Activation System**
  - Automatic activation criteria based on physician-entered ECG findings and clinical presentation
  - Real-time decision support for typical vs atypical presentations
  - ECG control recommendations (15 min post-NTG for atypical cases)
  
- **Comprehensive ECG Pattern Reference Guide**
  - De Winter pattern criteria and reminders (STEMI equivalent)
  - Posterior MI identification guidance
  - Right ventricular infarction assessment checklist
  - Diffuse ST depression + aVR elevation criteria
  - Sgarbossa-Smith criteria scoring guide for LBBB/pacemaker
  - Bundle branch block assessment guidance (LBBB, RBBB)
  - *Note: Physician interprets ECG and selects findings; system provides reference guides*
  
- **Advanced Safety System**
  - Automatic nitroglycerin contraindication blocking (hypotension, RV infarct)
  - Morphine warnings with hypotension
  - Prasugrel contraindication checking (age >75, weight <60, stroke/TIA)
  - Automatic HTA refractaria detection (>180/110 mmHg)
  - Shock detection via TAS <90 or Killip IV
  - Pregnancy and anticoagulation safeguards
  - Fibrinolysis contraindication comprehensive checking

- **Smart Medication Management**
  - Pre-populated dose options for 8 medications
  - Aspirin (with priority alerts)
  - Clopidogrel (age-adjusted: 600mg vs 300mg)
  - Ticagrelor (180mg loading)
  - Prasugrel (60mg with contraindication checking)
  - TNK with automatic calculator
  - Enoxaparin (age and renal function adjusted)
  - Morphine (with preparation instructions)
  - Nitroglycerin (SL and IV with safety checks)
  
- **Clinical Calculators**
  - TNK dose calculator (weight and age-based)
  - Second antiplatelet recommendation algorithm
  - Automatic blood pressure-based contraindication detection
  
- **Time-Critical Tracking**
  - Automatic timestamp marking
  - Timeline from symptom onset to intervention
  - ECG timing reminders (<10 min goal)
  - Aspirin administration tracking
  - Target metrics display (Door-to-balloon <120 min)
  
- **Dynamic Recommendations System**
  - Real-time clinical recommendations based on vital signs
  - SpO2 monitoring with oxygen therapy suggestions
  - Blood pressure warnings (hypo/hypertension)
  - Heart rate alerts (brady/tachycardia)
  - Killip classification-based recommendations
  - RV infarction-specific guidance
  - Time-based reminders and alerts

- **Comprehensive Help System**
  - ECG pattern reference guide with clinical examples (physician interprets)
  - Reperfusion strategy decision algorithm
  - Detailed Sgarbossa-Smith criteria scoring explanation
  - Complete AMI Code protocol workflow
  - Interactive modal with 4 main sections

- **Report Generation**
  - Complete clinical documentation
  - Patient demographics and timeline
  - ECG findings and clinical data
  - Medication list with doses and times
  - Copy to clipboard functionality (mobile-optimized)

#### User Interface
- Clean, clinical design optimized for emergency situations
- Color-coded sections for rapid information access
- Mobile-responsive layout for tablets and smartphones
- Print-optimized format for physical documentation
- Real-time clock with seconds display
- Collapsible sections to reduce clutter

#### Technical Implementation
- Single HTML file (no external dependencies)
- Vanilla JavaScript (no frameworks)
- Offline-capable after first load
- Cross-browser compatible (Chrome, Firefox, Safari, Edge)
- ~2,500 lines of code
- ~95 KB file size

### Clinical Evidence Base
- ESC 2023 Guidelines for Acute Coronary Syndromes
- Catalan Health System AMI Code Protocol (2023)
- AHA/ACC STEMI Guidelines
- De Winter Pattern (NEJM 2008)
- Sgarbossa Criteria (NEJM 1996)
- Modified Sgarbossa-Smith (Ann Emerg Med 2012)
- STREAM, PLATO, TRITON-TIMI 38 trials

### Languages
- Spanish/Catalan (primary interface)

---

## Version History Summary

- **v1.0.0** (2025-01-06) - Initial release with comprehensive AMI management
- **v0.9.0** (2025-01-05) - Beta testing in clinical settings
- **v0.5.0** (2024-12-15) - Alpha version with core features
- **v0.1.0** (2024-11-01) - Proof of concept

---

## Migration Notes

### From Beta (v0.9.0) to v1.0.0
No breaking changes. All beta testers can upgrade seamlessly.

### Future Breaking Changes
Will be clearly marked with ⚠️ BREAKING CHANGE in release notes.

---

## How to Read This Changelog

### Categories
- **Added** - New features
- **Changed** - Changes in existing functionality
- **Deprecated** - Soon-to-be removed features
- **Removed** - Removed features
- **Fixed** - Bug fixes
- **Security** - Vulnerability fixes

### Semantic Versioning
Given a version number MAJOR.MINOR.PATCH:
- **MAJOR** - Incompatible changes
- **MINOR** - New functionality (backwards compatible)
- **PATCH** - Bug fixes (backwards compatible)

---

## Contributors

### Core Development
- [Your Name] - Initial development, clinical protocol implementation

### Clinical Advisors
- Primary care physicians from Catalonia
- Emergency medicine specialists

### Special Thanks
- CatSalut for AMI Code protocol documentation
- European Society of Cardiology for guidelines
- All beta testers who provided valuable feedback

---

[Unreleased]: https://github.com/yourusername/ami-code-dashboard/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/yourusername/ami-code-dashboard/releases/tag/v1.0.0
