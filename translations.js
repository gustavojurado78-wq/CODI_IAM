// Traducciones para el Dashboard Código IAM
const translations = {
    ca: {
        // Header
        "app.title": "Tauler Codi IAM",
        "app.subtitle": "Atenció Primària - Protocol actualitzat 2023",
        "btn.help": "📚 Guia d'Ajuda",

        // Secciones principales
        "section.patient": "👤 Dades del Pacient",
        "section.timeline": "🕐 Cronologia",
        "section.ecg": "📊 Troballes Electrocardiogràfiques",
        "section.clinical": "🏥 Dades Clíniques",
        "section.contraindications": "⚠️ Contraindicacions per a Fibrinòlisi",
        "section.strategy": "💉 Estratègia de Reperfusió",
        "section.medication": "💊 Medicació Administrada",

        // Datos del paciente
        "patient.name": "Nom complet",
        "patient.name.placeholder": "Nom i cognoms del pacient",
        "patient.age": "Edat",
        "patient.age.placeholder": "Anys",
        "patient.weight": "Pes",
        "patient.weight.placeholder": "kg",
        "patient.height": "Alçada",
        "patient.height.placeholder": "cm",
        "patient.gender": "Sexe",
        "patient.gender.male": "Masculí",
        "patient.gender.female": "Femení",
        "patient.id": "DNI/NIE",
        "patient.id.placeholder": "Document d'identitat",
        "patient.cip": "CIP",
        "patient.cip.placeholder": "Codi d'Identificació Personal",

        // Cronología
        "timeline.info": "⏰ Tots els temps es registren automàticament. El temps és crucial en l'IAM.",
        "timeline.symptom.onset": "Inici de símptomes",
        "timeline.first.contact": "Primer contacte mèdic",
        "timeline.ecg": "Realització ECG",
        "timeline.diagnosis": "Diagnòstic IAM",
        "timeline.transfer.decision": "Decisió de trasllat",
        "timeline.reperfusion.start": "Inici reperfusió",
        "btn.now": "Ara",
        "time.not.registered": "No registrat",
        "time.door.to.needle": "Temps porta-agulla",
        "time.minutes": "minuts",

        // ECG
        "ecg.st.elevation": "Elevació del segment ST",
        "ecg.new.lbbb": "Bloqueig de branca esquerra nou",
        "ecg.anterior": "Anterior (V1-V4)",
        "ecg.lateral": "Lateral (I, aVL, V5-V6)",
        "ecg.inferior": "Inferior (II, III, aVF)",
        "ecg.posterior": "Posterior (V7-V9)",
        "ecg.right": "Ventricle dret (V3R-V4R)",
        "ecg.location.label": "Localització:",
        "ecg.location.placeholder": "Selecciona ubicació",

        // Datos clínicos
        "clinical.killip.title": "Classificació Killip",
        "clinical.killip.class": "Classe Killip",
        "clinical.killip.1": "Classe I - Sense signes d'insuficiència cardíaca",
        "clinical.killip.2": "Classe II - Estertors, galop S3, PVY elevada",
        "clinical.killip.3": "Classe III - Edema pulmonar agut",
        "clinical.killip.4": "Classe IV - Xoc cardiogènic",
        "clinical.bp": "Pressió arterial",
        "clinical.bp.placeholder": "mmHg (ex: 120/80)",
        "clinical.hr": "Freqüència cardíaca",
        "clinical.hr.placeholder": "lpm",
        "clinical.o2sat": "Saturació O₂",
        "clinical.o2sat.placeholder": "%",
        "clinical.glycemia": "Glicèmia",
        "clinical.glycemia.placeholder": "mg/dl",
        "clinical.allergies": "Al·lèrgies medicamentoses",
        "clinical.allergies.placeholder": "Especificar al·lèrgies conegudes",
        "clinical.previous.treatments": "Tractaments previs",
        "clinical.previous.treatments.placeholder": "Medicació habitual del pacient",

        // Contraindicaciones
        "contra.cerebral.hemorrhage": "Hemorràgia cerebral prèvia",
        "contra.recent.stroke": "Ictus isquèmic recent (<3 mesos)",
        "contra.intracranial.neoplasm": "Neoplàsia intracranial",
        "contra.recent.trauma": "Traumatisme craneal recent (<3 mesos)",
        "contra.recent.surgery": "Cirurgia major recent (<3 setmanes)",
        "contra.active.bleeding": "Sagnat actiu o diàtesi hemorràgica",
        "contra.dissecting.aneurysm": "Aneurisma dissecant",
        "contra.severe.hypertension": "Hipertensió arterial greu no controlada",

        // Estrategia
        "strategy.title": "Selecciona estratègia de reperfusió",
        "strategy.primary.pci": "ICP Primària (hospital amb hemodinàmica)",
        "strategy.pharmacoinvasive": "Estratègia Farmacoinvasiva (fibrinòlisi + trasllat)",
        "strategy.conservative": "Tractament conservador",
        "strategy.hospital.label": "Hospital de destinació",
        "strategy.hospital.placeholder": "Selecciona hospital",
        "strategy.estimated.time": "Temps estimat de trasllat",
        "strategy.estimated.time.placeholder": "minuts",
        "strategy.fibrinolytic": "Agent fibrinolític",
        "strategy.fibrinolytic.placeholder": "Selecciona fibrinolític",

        // Medicación
        "med.common.title": "Medicació Comuna IAM",
        "med.add": "➕ Afegir Medicació",
        "med.aspirin": "Aspirina 300mg VO (mastegable)",
        "med.clopidogrel": "Clopidogrel 600mg VO (o Ticagrelor 180mg)",
        "med.heparin": "Heparina (segons pes i protocol)",
        "med.morphine": "Morfina 3-5mg IV (si dolor persistent)",
        "med.nitroglycerin": "Nitroglicerina sublingual",
        "med.oxygen": "Oxigen (si SatO₂ <90%)",
        "med.beta.blocker": "Betabloqueig IV (si no contraindicat)",

        // Botones
        "btn.generate.report": "📄 Generar Informe Complet",
        "btn.print": "🖨️ Imprimir",
        "btn.reset": "🔄 Reiniciar Tot",

        // Modal ayuda
        "help.title": "📚 Guia d'Ajuda - Dashboard Codi IAM",
        "help.close": "×",

        // Mensajes
        "msg.confirm.reset": "Estàs segur que vols reiniciar totes les dades? Aquesta acció no es pot desfer.",
        "msg.time.registered": "Temps registrat correctament",
    },

    es: {
        // Header
        "app.title": "Dashboard Código IAM",
        "app.subtitle": "Atención Primaria - Protocolo actualizado 2023",
        "btn.help": "📚 Guía de Ayuda",

        // Secciones principales
        "section.patient": "👤 Datos del Paciente",
        "section.timeline": "🕐 Cronología",
        "section.ecg": "📊 Hallazgos Electrocardiográficos",
        "section.clinical": "🏥 Datos Clínicos",
        "section.contraindications": "⚠️ Contraindicaciones para Fibrinólisis",
        "section.strategy": "💉 Estrategia de Reperfusión",
        "section.medication": "💊 Medicación Administrada",

        // Datos del paciente
        "patient.name": "Nombre completo",
        "patient.name.placeholder": "Nombre y apellidos del paciente",
        "patient.age": "Edad",
        "patient.age.placeholder": "Años",
        "patient.weight": "Peso",
        "patient.weight.placeholder": "kg",
        "patient.height": "Altura",
        "patient.height.placeholder": "cm",
        "patient.gender": "Sexo",
        "patient.gender.male": "Masculino",
        "patient.gender.female": "Femenino",
        "patient.id": "DNI/NIE",
        "patient.id.placeholder": "Documento de identidad",
        "patient.cip": "CIP",
        "patient.cip.placeholder": "Código de Identificación Personal",

        // Cronología
        "timeline.info": "⏰ Todos los tiempos se registran automáticamente. El tiempo es crucial en el IAM.",
        "timeline.symptom.onset": "Inicio de síntomas",
        "timeline.first.contact": "Primer contacto médico",
        "timeline.ecg": "Realización ECG",
        "timeline.diagnosis": "Diagnóstico IAM",
        "timeline.transfer.decision": "Decisión de traslado",
        "timeline.reperfusion.start": "Inicio reperfusión",
        "btn.now": "Ahora",
        "time.not.registered": "No registrado",
        "time.door.to.needle": "Tiempo puerta-aguja",
        "time.minutes": "minutos",

        // ECG
        "ecg.st.elevation": "Elevación del segmento ST",
        "ecg.new.lbbb": "Bloqueo de rama izquierda nuevo",
        "ecg.anterior": "Anterior (V1-V4)",
        "ecg.lateral": "Lateral (I, aVL, V5-V6)",
        "ecg.inferior": "Inferior (II, III, aVF)",
        "ecg.posterior": "Posterior (V7-V9)",
        "ecg.right": "Ventrículo derecho (V3R-V4R)",
        "ecg.location.label": "Localización:",
        "ecg.location.placeholder": "Selecciona ubicación",

        // Datos clínicos
        "clinical.killip.title": "Clasificación Killip",
        "clinical.killip.class": "Clase Killip",
        "clinical.killip.1": "Clase I - Sin signos de insuficiencia cardíaca",
        "clinical.killip.2": "Clase II - Estertores, galope S3, PVY elevada",
        "clinical.killip.3": "Clase III - Edema pulmonar agudo",
        "clinical.killip.4": "Clase IV - Shock cardiogénico",
        "clinical.bp": "Presión arterial",
        "clinical.bp.placeholder": "mmHg (ej: 120/80)",
        "clinical.hr": "Frecuencia cardíaca",
        "clinical.hr.placeholder": "lpm",
        "clinical.o2sat": "Saturación O₂",
        "clinical.o2sat.placeholder": "%",
        "clinical.glycemia": "Glucemia",
        "clinical.glycemia.placeholder": "mg/dl",
        "clinical.allergies": "Alergias medicamentosas",
        "clinical.allergies.placeholder": "Especificar alergias conocidas",
        "clinical.previous.treatments": "Tratamientos previos",
        "clinical.previous.treatments.placeholder": "Medicación habitual del paciente",

        // Contraindicaciones
        "contra.cerebral.hemorrhage": "Hemorragia cerebral previa",
        "contra.recent.stroke": "Ictus isquémico reciente (<3 meses)",
        "contra.intracranial.neoplasm": "Neoplasia intracraneal",
        "contra.recent.trauma": "Traumatismo craneal reciente (<3 meses)",
        "contra.recent.surgery": "Cirugía mayor reciente (<3 semanas)",
        "contra.active.bleeding": "Sangrado activo o diátesis hemorrágica",
        "contra.dissecting.aneurysm": "Aneurisma disecante",
        "contra.severe.hypertension": "Hipertensión arterial grave no controlada",

        // Estrategia
        "strategy.title": "Selecciona estrategia de reperfusión",
        "strategy.primary.pci": "ICP Primaria (hospital con hemodinámica)",
        "strategy.pharmacoinvasive": "Estrategia Farmacoinvasiva (fibrinólisis + traslado)",
        "strategy.conservative": "Tratamiento conservador",
        "strategy.hospital.label": "Hospital de destino",
        "strategy.hospital.placeholder": "Selecciona hospital",
        "strategy.estimated.time": "Tiempo estimado de traslado",
        "strategy.estimated.time.placeholder": "minutos",
        "strategy.fibrinolytic": "Agente fibrinolítico",
        "strategy.fibrinolytic.placeholder": "Selecciona fibrinolítico",

        // Medicación
        "med.common.title": "Medicación Común IAM",
        "med.add": "➕ Añadir Medicación",
        "med.aspirin": "Aspirina 300mg VO (masticable)",
        "med.clopidogrel": "Clopidogrel 600mg VO (o Ticagrelor 180mg)",
        "med.heparin": "Heparina (según peso y protocolo)",
        "med.morphine": "Morfina 3-5mg IV (si dolor persistente)",
        "med.nitroglycerin": "Nitroglicerina sublingual",
        "med.oxygen": "Oxígeno (si SatO₂ <90%)",
        "med.beta.blocker": "Betabloqueo IV (si no contraindicado)",

        // Botones
        "btn.generate.report": "📄 Generar Informe Completo",
        "btn.print": "🖨️ Imprimir",
        "btn.reset": "🔄 Reiniciar Todo",

        // Modal ayuda
        "help.title": "📚 Guía de Ayuda - Dashboard Código IAM",
        "help.close": "×",

        // Mensajes
        "msg.confirm.reset": "¿Estás seguro de que quieres reiniciar todos los datos? Esta acción no se puede deshacer.",
        "msg.time.registered": "Tiempo registrado correctamente",
    },

    fr: {
        // Header
        "app.title": "Tableau de Bord Code IAM",
        "app.subtitle": "Soins Primaires - Protocole mis à jour 2023",
        "btn.help": "📚 Guide d'Aide",

        // Secciones principales
        "section.patient": "👤 Données du Patient",
        "section.timeline": "🕐 Chronologie",
        "section.ecg": "📊 Résultats Électrocardiographiques",
        "section.clinical": "🏥 Données Cliniques",
        "section.contraindications": "⚠️ Contre-indications à la Fibrinolyse",
        "section.strategy": "💉 Stratégie de Reperfusion",
        "section.medication": "💊 Médication Administrée",

        // Datos del paciente
        "patient.name": "Nom complet",
        "patient.name.placeholder": "Nom et prénom du patient",
        "patient.age": "Âge",
        "patient.age.placeholder": "Ans",
        "patient.weight": "Poids",
        "patient.weight.placeholder": "kg",
        "patient.height": "Taille",
        "patient.height.placeholder": "cm",
        "patient.gender": "Sexe",
        "patient.gender.male": "Masculin",
        "patient.gender.female": "Féminin",
        "patient.id": "ID/Passeport",
        "patient.id.placeholder": "Document d'identité",
        "patient.cip": "CIP",
        "patient.cip.placeholder": "Code d'Identification Personnel",

        // Cronología
        "timeline.info": "⏰ Tous les temps sont enregistrés automatiquement. Le temps est crucial dans l'IAM.",
        "timeline.symptom.onset": "Début des symptômes",
        "timeline.first.contact": "Premier contact médical",
        "timeline.ecg": "Réalisation ECG",
        "timeline.diagnosis": "Diagnostic IAM",
        "timeline.transfer.decision": "Décision de transfert",
        "timeline.reperfusion.start": "Début reperfusion",
        "btn.now": "Maintenant",
        "time.not.registered": "Non enregistré",
        "time.door.to.needle": "Temps porte-aiguille",
        "time.minutes": "minutes",

        // ECG
        "ecg.st.elevation": "Élévation du segment ST",
        "ecg.new.lbbb": "Nouveau bloc de branche gauche",
        "ecg.anterior": "Antérieur (V1-V4)",
        "ecg.lateral": "Latéral (I, aVL, V5-V6)",
        "ecg.inferior": "Inférieur (II, III, aVF)",
        "ecg.posterior": "Postérieur (V7-V9)",
        "ecg.right": "Ventricule droit (V3R-V4R)",
        "ecg.location.label": "Localisation:",
        "ecg.location.placeholder": "Sélectionnez l'emplacement",

        // Datos clínicos
        "clinical.killip.title": "Classification Killip",
        "clinical.killip.class": "Classe Killip",
        "clinical.killip.1": "Classe I - Aucun signe d'insuffisance cardiaque",
        "clinical.killip.2": "Classe II - Râles, galop S3, PVJ élevée",
        "clinical.killip.3": "Classe III - Œdème pulmonaire aigu",
        "clinical.killip.4": "Classe IV - Choc cardiogénique",
        "clinical.bp": "Pression artérielle",
        "clinical.bp.placeholder": "mmHg (ex: 120/80)",
        "clinical.hr": "Fréquence cardiaque",
        "clinical.hr.placeholder": "bpm",
        "clinical.o2sat": "Saturation O₂",
        "clinical.o2sat.placeholder": "%",
        "clinical.glycemia": "Glycémie",
        "clinical.glycemia.placeholder": "mg/dl",
        "clinical.allergies": "Allergies médicamenteuses",
        "clinical.allergies.placeholder": "Spécifier les allergies connues",
        "clinical.previous.treatments": "Traitements précédents",
        "clinical.previous.treatments.placeholder": "Médication habituelle du patient",

        // Contraindicaciones
        "contra.cerebral.hemorrhage": "Hémorragie cérébrale antérieure",
        "contra.recent.stroke": "AVC ischémique récent (<3 mois)",
        "contra.intracranial.neoplasm": "Néoplasie intracrânienne",
        "contra.recent.trauma": "Traumatisme crânien récent (<3 mois)",
        "contra.recent.surgery": "Chirurgie majeure récente (<3 semaines)",
        "contra.active.bleeding": "Saignement actif ou diathèse hémorragique",
        "contra.dissecting.aneurysm": "Anévrisme disséquant",
        "contra.severe.hypertension": "Hypertension artérielle sévère non contrôlée",

        // Estrategia
        "strategy.title": "Sélectionner la stratégie de reperfusion",
        "strategy.primary.pci": "ICP Primaire (hôpital avec hémodynamique)",
        "strategy.pharmacoinvasive": "Stratégie Pharmacoinvasive (fibrinolyse + transfert)",
        "strategy.conservative": "Traitement conservateur",
        "strategy.hospital.label": "Hôpital de destination",
        "strategy.hospital.placeholder": "Sélectionnez l'hôpital",
        "strategy.estimated.time": "Temps de transfert estimé",
        "strategy.estimated.time.placeholder": "minutes",
        "strategy.fibrinolytic": "Agent fibrinolytique",
        "strategy.fibrinolytic.placeholder": "Sélectionnez fibrinolytique",

        // Medicación
        "med.common.title": "Médication Commune IAM",
        "med.add": "➕ Ajouter Médication",
        "med.aspirin": "Aspirine 300mg VO (à mâcher)",
        "med.clopidogrel": "Clopidogrel 600mg VO (ou Ticagrelor 180mg)",
        "med.heparin": "Héparine (selon poids et protocole)",
        "med.morphine": "Morphine 3-5mg IV (si douleur persistante)",
        "med.nitroglycerin": "Nitroglycérine sublinguale",
        "med.oxygen": "Oxygène (si SatO₂ <90%)",
        "med.beta.blocker": "Bêta-bloquant IV (si non contre-indiqué)",

        // Botones
        "btn.generate.report": "📄 Générer Rapport Complet",
        "btn.print": "🖨️ Imprimer",
        "btn.reset": "🔄 Réinitialiser Tout",

        // Modal ayuda
        "help.title": "📚 Guide d'Aide - Tableau de Bord Code IAM",
        "help.close": "×",

        // Mensajes
        "msg.confirm.reset": "Êtes-vous sûr de vouloir réinitialiser toutes les données? Cette action ne peut pas être annulée.",
        "msg.time.registered": "Temps enregistré correctement",
    },

    en: {
        // Header
        "app.title": "AMI Code Dashboard",
        "app.subtitle": "Primary Care - Updated Protocol 2023",
        "btn.help": "📚 Help Guide",

        // Secciones principales
        "section.patient": "👤 Patient Data",
        "section.timeline": "🕐 Timeline",
        "section.ecg": "📊 Electrocardiographic Findings",
        "section.clinical": "🏥 Clinical Data",
        "section.contraindications": "⚠️ Contraindications for Fibrinolysis",
        "section.strategy": "💉 Reperfusion Strategy",
        "section.medication": "💊 Administered Medication",

        // Datos del paciente
        "patient.name": "Full name",
        "patient.name.placeholder": "Patient's first and last name",
        "patient.age": "Age",
        "patient.age.placeholder": "Years",
        "patient.weight": "Weight",
        "patient.weight.placeholder": "kg",
        "patient.height": "Height",
        "patient.height.placeholder": "cm",
        "patient.gender": "Gender",
        "patient.gender.male": "Male",
        "patient.gender.female": "Female",
        "patient.id": "ID/Passport",
        "patient.id.placeholder": "Identification document",
        "patient.cip": "CIP",
        "patient.cip.placeholder": "Personal Identification Code",

        // Cronología
        "timeline.info": "⏰ All times are automatically recorded. Time is crucial in AMI.",
        "timeline.symptom.onset": "Symptom onset",
        "timeline.first.contact": "First medical contact",
        "timeline.ecg": "ECG performed",
        "timeline.diagnosis": "AMI diagnosis",
        "timeline.transfer.decision": "Transfer decision",
        "timeline.reperfusion.start": "Reperfusion start",
        "btn.now": "Now",
        "time.not.registered": "Not registered",
        "time.door.to.needle": "Door-to-needle time",
        "time.minutes": "minutes",

        // ECG
        "ecg.st.elevation": "ST segment elevation",
        "ecg.new.lbbb": "New left bundle branch block",
        "ecg.anterior": "Anterior (V1-V4)",
        "ecg.lateral": "Lateral (I, aVL, V5-V6)",
        "ecg.inferior": "Inferior (II, III, aVF)",
        "ecg.posterior": "Posterior (V7-V9)",
        "ecg.right": "Right ventricle (V3R-V4R)",
        "ecg.location.label": "Location:",
        "ecg.location.placeholder": "Select location",

        // Datos clínicos
        "clinical.killip.title": "Killip Classification",
        "clinical.killip.class": "Killip Class",
        "clinical.killip.1": "Class I - No signs of heart failure",
        "clinical.killip.2": "Class II - Rales, S3 gallop, elevated JVP",
        "clinical.killip.3": "Class III - Acute pulmonary edema",
        "clinical.killip.4": "Class IV - Cardiogenic shock",
        "clinical.bp": "Blood pressure",
        "clinical.bp.placeholder": "mmHg (e.g.: 120/80)",
        "clinical.hr": "Heart rate",
        "clinical.hr.placeholder": "bpm",
        "clinical.o2sat": "O₂ saturation",
        "clinical.o2sat.placeholder": "%",
        "clinical.glycemia": "Blood glucose",
        "clinical.glycemia.placeholder": "mg/dl",
        "clinical.allergies": "Drug allergies",
        "clinical.allergies.placeholder": "Specify known allergies",
        "clinical.previous.treatments": "Previous treatments",
        "clinical.previous.treatments.placeholder": "Patient's regular medication",

        // Contraindicaciones
        "contra.cerebral.hemorrhage": "Previous cerebral hemorrhage",
        "contra.recent.stroke": "Recent ischemic stroke (<3 months)",
        "contra.intracranial.neoplasm": "Intracranial neoplasm",
        "contra.recent.trauma": "Recent head trauma (<3 months)",
        "contra.recent.surgery": "Recent major surgery (<3 weeks)",
        "contra.active.bleeding": "Active bleeding or hemorrhagic diathesis",
        "contra.dissecting.aneurysm": "Dissecting aneurysm",
        "contra.severe.hypertension": "Severe uncontrolled arterial hypertension",

        // Estrategia
        "strategy.title": "Select reperfusion strategy",
        "strategy.primary.pci": "Primary PCI (hospital with catheterization)",
        "strategy.pharmacoinvasive": "Pharmacoinvasive Strategy (fibrinolysis + transfer)",
        "strategy.conservative": "Conservative treatment",
        "strategy.hospital.label": "Destination hospital",
        "strategy.hospital.placeholder": "Select hospital",
        "strategy.estimated.time": "Estimated transfer time",
        "strategy.estimated.time.placeholder": "minutes",
        "strategy.fibrinolytic": "Fibrinolytic agent",
        "strategy.fibrinolytic.placeholder": "Select fibrinolytic",

        // Medicación
        "med.common.title": "Common AMI Medication",
        "med.add": "➕ Add Medication",
        "med.aspirin": "Aspirin 300mg PO (chewable)",
        "med.clopidogrel": "Clopidogrel 600mg PO (or Ticagrelor 180mg)",
        "med.heparin": "Heparin (according to weight and protocol)",
        "med.morphine": "Morphine 3-5mg IV (if persistent pain)",
        "med.nitroglycerin": "Sublingual nitroglycerin",
        "med.oxygen": "Oxygen (if SatO₂ <90%)",
        "med.beta.blocker": "IV beta-blocker (if not contraindicated)",

        // Botones
        "btn.generate.report": "📄 Generate Complete Report",
        "btn.print": "🖨️ Print",
        "btn.reset": "🔄 Reset All",

        // Modal ayuda
        "help.title": "📚 Help Guide - AMI Code Dashboard",
        "help.close": "×",

        // Mensajes
        "msg.confirm.reset": "Are you sure you want to reset all data? This action cannot be undone.",
        "msg.time.registered": "Time registered successfully",
    }
};

// Sistema de internacionalización
class I18n {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'ca'; // Catalán por defecto
        this.init();
    }

    init() {
        // Aplicar idioma guardado
        this.applyLanguage(this.currentLang);

        // Actualizar visualización de banderas
        this.updateFlagSelection();
    }

    changeLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('language', lang);
        this.applyLanguage(lang);
        this.updateFlagSelection();
    }

    applyLanguage(lang) {
        // Actualizar atributo lang del HTML
        document.documentElement.lang = lang;

        // Traducir todos los elementos con data-i18n
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = translations[lang][key];

            if (translation) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    if (element.hasAttribute('placeholder')) {
                        element.placeholder = translation;
                    } else {
                        element.value = translation;
                    }
                } else {
                    element.textContent = translation;
                }
            }
        });

        // Traducir placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            const translation = translations[lang][key];
            if (translation) {
                element.placeholder = translation;
            }
        });

        // Traducir valores de opciones select
        document.querySelectorAll('[data-i18n-value]').forEach(element => {
            const key = element.getAttribute('data-i18n-value');
            const translation = translations[lang][key];
            if (translation) {
                element.textContent = translation;
            }
        });
    }

    updateFlagSelection() {
        // Actualizar clase activa en banderas
        document.querySelectorAll('.language-flag').forEach(flag => {
            flag.classList.remove('active');
        });

        const activeFlag = document.querySelector(`.language-flag[data-lang="${this.currentLang}"]`);
        if (activeFlag) {
            activeFlag.classList.add('active');
        }
    }

    t(key) {
        return translations[this.currentLang][key] || key;
    }
}

// Inicializar sistema de traducción cuando se carga la página
let i18n;
document.addEventListener('DOMContentLoaded', () => {
    i18n = new I18n();
});
