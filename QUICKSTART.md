# 🚀 Quick Start Guide - AMI Code Dashboard

**Get started in 5 minutes!**

---

## 📥 Installation (1 minute)

### Option 1: Download and Use Locally
1. Download `dashboard-iam.html`
2. Double-click to open in your browser
3. ✅ Done! Start using immediately

### Option 2: Online Deployment (Netlify)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag and drop the HTML file
3. Get your live URL instantly
4. ✅ Share with colleagues!

---

## 🏥 Basic Workflow (3 minutes)

### Step 1: Patient Data
```
Enter basic information:
├─ Age, Weight, Sex
├─ Allergies
└─ Oral anticoagulation status (if applicable)
```

### Step 2: Timeline
```
Mark critical times:
├─ Symptom onset
├─ First medical contact
├─ ECG performed
└─ Use "Ahora" (Now) buttons for instant timestamps
```

### Step 3: ECG Findings
```
Check all that apply:
├─ ST elevation
├─ De Winter pattern (⚠️ STEMI equivalent!)
├─ RV infarction
├─ LBBB/RBBB
└─ Review help guide if unsure (📚 button)
```

### Step 4: Clinical Data
```
Indicate clinical presentation:
├─ Typical vs Atypical symptoms
├─ Vital signs (BP, HR, SpO2)
├─ Killip classification
└─ High-risk features (shock, refractory pain)
```

### Step 5: Check Recommendations
```
Review automatically generated:
├─ 💡 Clinical Recommendations
└─ ⏰ Time-based Reminders
```

### Step 6: Contraindications
```
The system will AUTO-CHECK:
├─ HTA refractaria (>180/110)
└─ Manually check others if present
```

### Step 7: Strategy
```
Select reperfusion approach:
├─ Primary PCI (if time <120 min)
└─ Fibrinolysis (if time >120 min + no contraindications)
```

### Step 8: Medications
```
Check medications administered:
├─ System provides dose options
├─ AUTO-BLOCKS dangerous combinations
├─ Shows preparation instructions
└─ Records time automatically
```

### Step 9: Generate Report
```
Click: 📋 Copiar Informe al Portapapeles
├─ Report copies to clipboard
├─ Share via WhatsApp, email, SMS
└─ Paste into medical records
```

---

## ⚡ Quick Tips

### 🎯 For Speed
- Use "Ahora" buttons for instant timestamps
- Let the system auto-detect contraindications
- Trust the automatic recommendations

### 🔒 For Safety
- Always verify the aspirin is checked
- Review red alerts carefully
- Don't override safety blocks without justification

### 📱 For Mobile Use
- Portrait mode works best
- Recommendations panel scrolls independently
- Report copies easily to messaging apps

---

## 🆘 Common Scenarios

### Scenario 1: Classic STEMI
```
Patient: 65yo male, crushing chest pain 30 min
ECG: ST elevation in II, III, aVF
Action:
1. Mark "Clínica TÍPICA"
2. Check "Elevación del segmento ST"
3. System says: "¡ACTIVAR CÓDIGO IAM AHORA!"
4. Select strategy (ICP if <120 min)
5. Administer aspirin immediately
6. Check second antiplatelet
7. Generate report and call 061
```

### Scenario 2: Atypical Presentation
```
Patient: 45yo female, atypical chest discomfort
ECG: ST elevation in V2-V4
Action:
1. Mark "Clínica ATÍPICA"
2. Check ECG findings
3. System suggests: "NTG + ECG control at 15 min"
4. If elevation persists → Activate code
5. If resolves → Consider vasospasm
```

### Scenario 3: RV Infarction
```
Patient: 70yo, inferior STEMI + hypotension
ECG: ST elevation II, III, aVF + V4R
Action:
1. Check "Infarto ventrículo derecho"
2. Enter BP (e.g., TAS 85)
3. System AUTO-BLOCKS nitroglycerin ✅
4. Recommendations: Volume expansion
5. Avoid diuretics
```

### Scenario 4: Elderly with Renal Issues
```
Patient: 80yo, STEMI, creatinine 2.8
Action:
1. Age >75 → Enoxaparin auto-adjusts to 0.75 mg/kg
2. Check "AVC isquémico" if stroke history
3. System blocks Prasugrel, suggests Ticagrelor
4. TNK calculator reduces dose automatically
```

---

## 🚨 Red Flags to Watch

### IMMEDIATE ACTION REQUIRED
- 🔴 "¡ACTIVAR CÓDIGO IAM INMEDIATAMENTE!" alert
- 🔴 Shock cardiogénico detected
- 🔴 Killip IV classification

### CAUTION ALERTS
- ⚠️ Nitroglycerin blocked (pay attention!)
- ⚠️ HTA refractaria detected
- ⚠️ Pregnancy flagged

### TIME-SENSITIVE
- ⏰ ECG >10 min without completion
- ⏰ Aspirin not administered
- ⏰ >15 min for ECG control (if atypical)

---

## 📚 When to Use Help Guide

Click **📚 Guía de Ayuda** when you need to:
- ✓ Identify ECG patterns (De Winter, Sgarbossa, etc.)
- ✓ Understand the decision algorithm
- ✓ Review Sgarbossa-Smith criteria
- ✓ Check complete AMI Code protocol

**4 tabs available:**
1. **Patrones ECG** - Pattern recognition
2. **Algoritmo Decisión** - Reperfusion strategy
3. **Criterios Sgarbossa** - LBBB/pacemaker MI diagnosis
4. **Protocolo Codi IAM** - Step-by-step protocol

---

## 🎓 Training Mode

### For Students/Residents
```
Practice with scenarios:
1. Open dashboard in one tab
2. Open help guide in another
3. Work through practice cases
4. Compare your decisions with recommendations
5. Review evidence base in help system
```

### For Team Training
```
Use for simulation:
1. Project on screen
2. Team inputs data together
3. Discuss recommendations as they appear
4. Review safety blocks that trigger
5. Practice report generation
```

---

## 💡 Pro Tips

### Efficiency Hacks
- **Keyboard shortcuts**: Tab through fields quickly
- **Copy-paste**: Reports formatted for WhatsApp
- **Bookmarks**: Save to browser favorites for instant access
- **Multiple devices**: Open on tablet + phone simultaneously

### Accuracy Tips
- **Double-check weight**: TNK dosing depends on it
- **Verify creatinine**: Affects enoxaparin dosing
- **Confirm allergies**: Before selecting medications
- **Review timeline**: Accurate times matter for metrics

### Collaboration Tips
- **Share URL**: If using Netlify deployment
- **Screen sharing**: Walk remote physician through case
- **Report sharing**: Copy-paste into secure messaging
- **Print backup**: Keep physical copy for records

---

## ⚙️ Settings & Customization

### Browser Settings (Optional)
```
For best experience:
├─ Enable location (for accurate timestamps)
├─ Allow clipboard access (for report copying)
└─ Disable autofill (prevents data entry errors)
```

### Bookmarklet (Advanced)
Save as bookmark for one-click access from any page.

---

## 🐛 Troubleshooting

### Report won't copy
- **Try again**: Sometimes clipboard needs permission
- **Manual copy**: Select text and Ctrl+C (Cmd+C on Mac)
- **Alternative**: Use print instead

### Calculator not showing
- **Enter weight**: TNK calculator needs weight to display
- **Select fibrinolysis**: Only shows when strategy selected
- **Refresh page**: If still not working

### Medications not saving
- **Check checkboxes**: Must be checked to save
- **Enter time**: Auto-fills but verify it's correct
- **Browser compatibility**: Use modern browser

### Mobile issues
- **Rotate device**: Try landscape mode
- **Zoom out**: Ensure full view
- **Refresh page**: Clear any glitches

---

## 📞 Getting Help

### In-App Help
- Click **📚 Guía de Ayuda** for clinical guidance
- Review tooltips on hover (desktop)
- Check recommendations panel for guidance

### External Resources
- GitHub Issues: Technical problems
- README.md: Complete documentation
- CONTRIBUTING.md: Feature requests

---

## ✅ Checklist: First Time Setup

- [ ] Download or deploy dashboard
- [ ] Open in modern browser
- [ ] Review help guide quickly
- [ ] Try a practice scenario
- [ ] Generate a sample report
- [ ] Share URL with team (if deployed)
- [ ] Bookmark for quick access
- [ ] Read safety features section in README

---

## 🎯 Ready to Use!

You're now ready to use the AMI Code Dashboard in clinical practice.

**Remember:**
- ✅ This tool assists, doesn't replace clinical judgment
- ✅ Always verify doses independently
- ✅ Follow your local protocols
- ✅ Trust the safety blocks

**Questions?** Check the full README.md or open a GitHub issue.

---

**Built to save time and save lives. Good luck! 🏥❤️**

---

*Last updated: January 2025*
*Version: 1.0.0*
