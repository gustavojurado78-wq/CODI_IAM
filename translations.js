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
        "patient.age": "Edat (anys)",
        "patient.age.placeholder": "Anys",
        "patient.weight": "Pes (kg)",
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
        "patient.anticoagulation": "Anticoagulació oral activa",

        // Cronología
        "timeline.info": "⏰ Tots els temps es registren automàticament. El temps és crucial en l'IAM.",
        "timeline.pragmatic.info": "💡 Criteri pragmàtic: Si clínica TÍPICA + ECG compatible → ACTIVAR JA (no esperar ECG control). ECG control només en casos DUBTOSOS.",
        "timeline.symptom.onset": "Inici de símptomes",
        "timeline.first.contact": "Primer contacte mèdic",
        "timeline.ecg": "Realització ECG",
        "timeline.ecg.initial": "ECG inicial realitzat",
        "timeline.ecg.control": "ECG control (15 min post-NTG)",
        "timeline.activation": "Activació Codi IAM",
        "timeline.diagnosis": "Diagnòstic IAM",
        "timeline.transfer.decision": "Decisió de trasllat",
        "timeline.reperfusion.start": "Inici reperfusió",
        "btn.now": "Ara",
        "time.not.registered": "No registrat",
        "time.door.to.needle": "Temps porta-agulla",
        "time.minutes": "minuts",

        // ECG
        "ecg.st.elevation": "Elevació del segment ST",
        "ecg.new.lbbb": "BBEFH de nova aparició",
        "ecg.new.rbbb": "BBDFH de nova aparició",
        "ecg.winter.pattern": "⚠️ Patró de De Winter (Equivalent STEMI)",
        "ecg.st.depression.avr": "Depressió ST difusa + elevació aVR",
        "ecg.posterior.infarction": "Infart posterior",
        "ecg.right.ventricle": "⚠️ Infart ventricle dret",
        "ecg.pacemaker": "Ritme de marcapassos",
        "ecg.other.findings": "Altres troballes ECG...",
        "ecg.alert.st.detected": "Elevació del ST detectada!",
        "ecg.alert.ntg.instructions": "Administrar NTG i realitzar ECG de control als 15 min per confirmar elevació PERSISTENT",
        "ecg.anterior": "Anterior (V1-V4)",
        "ecg.lateral": "Lateral (I, aVL, V5-V6)",
        "ecg.inferior": "Inferior (II, III, aVF)",
        "ecg.posterior": "Posterior (V7-V9)",
        "ecg.right": "Ventricle dret (V3R-V4R)",
        "ecg.location.label": "Localització:",
        "ecg.location.placeholder": "Selecciona ubicació",

        // Datos clínicos
        "clinical.typical.question": "¿Clínica TÍPICA d'IAM?",
        "clinical.typical.yes": "SÍ - Típica",
        "clinical.typical.no": "NO - Atípica/Dubdosa",
        "clinical.typical.description": "<strong>Típica:</strong> Dolor opressiu >20 min, irradiació a braç/mandíbula, acompanyament vegetatiu, no respon a NTG<br><strong>Atípica:</strong> Dolor breu, localització atípica, pacient molt jove, dubtes diagnòstiques",
        "clinical.sbp": "TAS (mmHg)",
        "clinical.dbp": "TAD (mmHg)",
        "clinical.sbp.placeholder": "mmHg",
        "clinical.dbp.placeholder": "mmHg",
        "clinical.refractory.pain": "Dolor refractari al tractament",
        "clinical.shock.alert": "Possible SHOCK CARDIOGÈNIC detectat",
        "clinical.shock.description": "TAS <90 mmHg suggereix shock. Valorar clínica completa.",
        "clinical.recommendations.title": "💡 Recomanacions Clíniques",
        "clinical.reminders.title": "⏰ Recordatoris de Temps",
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
        "contra.recent.stroke": "AVC isquèmic <6 mesos",
        "contra.recent.trauma.surgery": "Traumatisme/cirurgia recent <3 mesos",
        "contra.active.bleeding": "Sagnat actiu",
        "contra.refractory.hypertension": "HTA refractaria (>180/110)",
        "contra.pregnancy": "Gestació",
        "contra.previous.stroke": "Ictus/AIT previ",
        "contra.intracranial.neoplasm": "Neoplàsia intracranial",
        "contra.recent.trauma": "Traumatisme craneal recent (<3 mesos)",
        "contra.recent.surgery": "Cirurgia major recent (<3 setmanes)",
        "contra.dissecting.aneurysm": "Aneurisma dissecant",
        "contra.severe.hypertension": "Hipertensió arterial greu no controlada",

        // Estrategia
        "strategy.decision": "Decisió",
        "strategy.select": "Seleccionar...",
        "strategy.title": "Selecciona estratègia de reperfusió",
        "strategy.primary.pci": "Angioplàstia primària (ICP)",
        "strategy.fibrinolysis": "Fibrinòlisi in situ",
        "strategy.fibrinolysis.reason": "Motiu de fibrinòlisi",
        "strategy.fibrinolysis.reason.placeholder": "Ex: Temps trasllat estimat >90 min",
        "strategy.pharmacoinvasive": "Estratègia Farmacoinvasiva (fibrinòlisi + trasllat)",
        "strategy.conservative": "Tractament conservador",
        "strategy.hospital.label": "Hospital de destinació",
        "strategy.hospital.placeholder": "Nom de l'hospital",
        "strategy.estimated.time": "Temps estimat de trasllat",
        "strategy.estimated.time.placeholder": "minuts",
        "strategy.antiplatelet.title": "Segon antiagregant recomanat:",
        "strategy.antiplatelet.calculate": "Calcular recomanació",
        "strategy.tnk.title": "Dosis Tenecteplasa calculada:",
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
        "btn.copy.report": "📋 Copiar Informe al Portapapeles",
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
        "patient.age": "Edad (años)",
        "patient.age.placeholder": "Años",
        "patient.weight": "Peso (kg)",
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
        "patient.anticoagulation": "Anticoagulación oral activa",

        // Cronología
        "timeline.info": "⏰ Todos los tiempos se registran automáticamente. El tiempo es crucial en el IAM.",
        "timeline.pragmatic.info": "💡 Criterio pragmático: Si clínica TÍPICA + ECG compatible → ACTIVAR YA (no esperar ECG control). ECG control solo en casos DUDOSOS.",
        "timeline.symptom.onset": "Inicio de síntomas",
        "timeline.first.contact": "Primer contacto médico",
        "timeline.ecg": "Realización ECG",
        "timeline.ecg.initial": "ECG inicial realizado",
        "timeline.ecg.control": "ECG control (15 min post-NTG)",
        "timeline.activation": "Activación Código IAM",
        "timeline.diagnosis": "Diagnóstico IAM",
        "timeline.transfer.decision": "Decisión de traslado",
        "timeline.reperfusion.start": "Inicio reperfusión",
        "btn.now": "Ahora",
        "time.not.registered": "No registrado",
        "time.door.to.needle": "Tiempo puerta-aguja",
        "time.minutes": "minutos",

        // ECG
        "ecg.st.elevation": "Elevación del segmento ST",
        "ecg.new.lbbb": "BBEFH de nueva aparición",
        "ecg.new.rbbb": "BBDFH de nueva aparición",
        "ecg.winter.pattern": "⚠️ Patrón de De Winter (Equivalente STEMI)",
        "ecg.st.depression.avr": "Depresión ST difusa + elevación aVR",
        "ecg.posterior.infarction": "Infarto posterior",
        "ecg.right.ventricle": "⚠️ Infarto ventrículo derecho",
        "ecg.pacemaker": "Ritmo de marcapassos",
        "ecg.other.findings": "Otros hallazgos ECG...",
        "ecg.alert.st.detected": "¡Elevación del ST detectada!",
        "ecg.alert.ntg.instructions": "Administrar NTG y realizar ECG de control a los 15 min para confirmar elevación PERSISTENTE",
        "ecg.anterior": "Anterior (V1-V4)",
        "ecg.lateral": "Lateral (I, aVL, V5-V6)",
        "ecg.inferior": "Inferior (II, III, aVF)",
        "ecg.posterior": "Posterior (V7-V9)",
        "ecg.right": "Ventrículo derecho (V3R-V4R)",
        "ecg.location.label": "Localización:",
        "ecg.location.placeholder": "Selecciona ubicación",

        // Datos clínicos
        "clinical.typical.question": "¿Clínica TÍPICA de IAM?",
        "clinical.typical.yes": "SÍ - Típica",
        "clinical.typical.no": "NO - Atípica/Dudosa",
        "clinical.typical.description": "<strong>Típica:</strong> Dolor opresivo >20 min, irradiación a brazo/mandíbula, cortejo vegetativo, no responde a NTG<br><strong>Atípica:</strong> Dolor breve, localización atípica, paciente muy joven, dudas diagnósticas",
        "clinical.sbp": "TAS (mmHg)",
        "clinical.dbp": "TAD (mmHg)",
        "clinical.sbp.placeholder": "mmHg",
        "clinical.dbp.placeholder": "mmHg",
        "clinical.refractory.pain": "Dolor refractario a tratamiento",
        "clinical.shock.alert": "Posible SHOCK CARDIOGÉNICO detectado",
        "clinical.shock.description": "TAS <90 mmHg sugiere shock. Valorar clínica completa.",
        "clinical.recommendations.title": "💡 Recomendaciones Clínicas",
        "clinical.reminders.title": "⏰ Recordatorios de Tiempo",
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
        "contra.recent.stroke": "AVC isquémico <6 meses",
        "contra.recent.trauma.surgery": "Trauma/cirugía reciente <3 meses",
        "contra.active.bleeding": "Sangrado activo",
        "contra.refractory.hypertension": "HTA refractaria (>180/110)",
        "contra.pregnancy": "Gestación",
        "contra.previous.stroke": "Ictus/AIT previo",
        "contra.intracranial.neoplasm": "Neoplasia intracraneal",
        "contra.recent.trauma": "Traumatismo craneal reciente (<3 meses)",
        "contra.recent.surgery": "Cirugía mayor reciente (<3 semanas)",
        "contra.dissecting.aneurysm": "Aneurisma disecante",
        "contra.severe.hypertension": "Hipertensión arterial grave no controlada",

        // Estrategia
        "strategy.decision": "Decisión",
        "strategy.select": "Seleccionar...",
        "strategy.title": "Selecciona estrategia de reperfusión",
        "strategy.primary.pci": "Angioplastia primaria (ICP)",
        "strategy.fibrinolysis": "Fibrinólisis in situ",
        "strategy.fibrinolysis.reason": "Motivo de fibrinólisis",
        "strategy.fibrinolysis.reason.placeholder": "Ej: Tiempo traslado estimado >90 min",
        "strategy.pharmacoinvasive": "Estrategia Farmacoinvasiva (fibrinólisis + traslado)",
        "strategy.conservative": "Tratamiento conservador",
        "strategy.hospital.label": "Hospital de destino",
        "strategy.hospital.placeholder": "Nombre del hospital",
        "strategy.estimated.time": "Tiempo estimado de traslado",
        "strategy.estimated.time.placeholder": "minutos",
        "strategy.antiplatelet.title": "Segundo antiagregante recomendado:",
        "strategy.antiplatelet.calculate": "Calcular recomendación",
        "strategy.tnk.title": "Dosis Tenecteplasa calculada:",
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
        "btn.copy.report": "📋 Copiar Informe al Portapapeles",
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
        "patient.age": "Âge (ans)",
        "patient.age.placeholder": "Ans",
        "patient.weight": "Poids (kg)",
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
        "patient.anticoagulation": "Anticoagulation orale active",

        // Cronología
        "timeline.info": "⏰ Tous les temps sont enregistrés automatiquement. Le temps est crucial dans l'IAM.",
        "timeline.pragmatic.info": "💡 Critère pragmatique: Si clinique TYPIQUE + ECG compatible → ACTIVER MAINTENANT (ne pas attendre ECG contrôle). ECG contrôle seulement dans cas DOUTEUX.",
        "timeline.symptom.onset": "Début des symptômes",
        "timeline.first.contact": "Premier contact médical",
        "timeline.ecg": "Réalisation ECG",
        "timeline.ecg.initial": "ECG initial réalisé",
        "timeline.ecg.control": "ECG contrôle (15 min post-NTG)",
        "timeline.activation": "Activation Code IAM",
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
        "ecg.new.rbbb": "Nouveau bloc de branche droit",
        "ecg.winter.pattern": "⚠️ Schéma de De Winter (Équivalent STEMI)",
        "ecg.st.depression.avr": "Dépression ST diffuse + élévation aVR",
        "ecg.posterior.infarction": "Infarctus postérieur",
        "ecg.right.ventricle": "⚠️ Infarctus du ventricule droit",
        "ecg.pacemaker": "Rythme de stimulateur cardiaque",
        "ecg.other.findings": "Autres résultats ECG...",
        "ecg.alert.st.detected": "Élévation ST détectée!",
        "ecg.alert.ntg.instructions": "Administrer NTG et réaliser ECG de contrôle à 15 min pour confirmer élévation PERSISTANTE",
        "ecg.anterior": "Antérieur (V1-V4)",
        "ecg.lateral": "Latéral (I, aVL, V5-V6)",
        "ecg.inferior": "Inférieur (II, III, aVF)",
        "ecg.posterior": "Postérieur (V7-V9)",
        "ecg.right": "Ventricule droit (V3R-V4R)",
        "ecg.location.label": "Localisation:",
        "ecg.location.placeholder": "Sélectionnez l'emplacement",

        // Datos clínicos
        "clinical.typical.question": "Clinique TYPIQUE d'IAM ?",
        "clinical.typical.yes": "OUI - Typique",
        "clinical.typical.no": "NON - Atypique/Douteuse",
        "clinical.typical.description": "<strong>Typique:</strong> Douleur oppressive >20 min, irradiation au bras/mâchoire, accompagnement végétatif, ne répond pas à NTG<br><strong>Atypique:</strong> Douleur brève, localisation atypique, patient très jeune, doutes diagnostiques",
        "clinical.sbp": "PAS (mmHg)",
        "clinical.dbp": "PAD (mmHg)",
        "clinical.sbp.placeholder": "mmHg",
        "clinical.dbp.placeholder": "mmHg",
        "clinical.refractory.pain": "Douleur réfractaire au traitement",
        "clinical.shock.alert": "Possible CHOC CARDIOGÉNIQUE détecté",
        "clinical.shock.description": "PAS <90 mmHg suggère un choc. Évaluer la clinique complète.",
        "clinical.recommendations.title": "💡 Recommandations Cliniques",
        "clinical.reminders.title": "⏰ Rappels de Temps",
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
        "contra.recent.stroke": "AVC ischémique <6 mois",
        "contra.recent.trauma.surgery": "Traumatisme/chirurgie récent <3 mois",
        "contra.active.bleeding": "Saignement actif",
        "contra.refractory.hypertension": "HTA réfractaire (>180/110)",
        "contra.pregnancy": "Grossesse",
        "contra.previous.stroke": "AVC/AIT antérieur",
        "contra.intracranial.neoplasm": "Néoplasie intracrânienne",
        "contra.recent.trauma": "Traumatisme crânien récent (<3 mois)",
        "contra.recent.surgery": "Chirurgie majeure récente (<3 semaines)",
        "contra.dissecting.aneurysm": "Anévrisme disséquant",
        "contra.severe.hypertension": "Hypertension artérielle sévère non contrôlée",

        // Estrategia
        "strategy.decision": "Décision",
        "strategy.select": "Sélectionner...",
        "strategy.title": "Sélectionner la stratégie de reperfusion",
        "strategy.primary.pci": "Angioplastie primaire (ICP)",
        "strategy.fibrinolysis": "Fibrinolyse in situ",
        "strategy.fibrinolysis.reason": "Raison de la fibrinolyse",
        "strategy.fibrinolysis.reason.placeholder": "Ex: Temps de transfert estimé >90 min",
        "strategy.pharmacoinvasive": "Stratégie Pharmacoinvasive (fibrinolyse + transfert)",
        "strategy.conservative": "Traitement conservateur",
        "strategy.hospital.label": "Hôpital de destination",
        "strategy.hospital.placeholder": "Nom de l'hôpital",
        "strategy.estimated.time": "Temps de transfert estimé",
        "strategy.estimated.time.placeholder": "minutes",
        "strategy.antiplatelet.title": "Deuxième antiplaquettaire recommandé:",
        "strategy.antiplatelet.calculate": "Calculer recommandation",
        "strategy.tnk.title": "Dose de Ténectéplase calculée:",
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
        "btn.copy.report": "📋 Copier Rapport au Presse-papiers",
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
        "patient.age": "Age (years)",
        "patient.age.placeholder": "Years",
        "patient.weight": "Weight (kg)",
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
        "patient.anticoagulation": "Active oral anticoagulation",

        // Cronología
        "timeline.info": "⏰ All times are automatically recorded. Time is crucial in AMI.",
        "timeline.pragmatic.info": "💡 Pragmatic criterion: If TYPICAL symptoms + compatible ECG → ACTIVATE NOW (don't wait for control ECG). Control ECG only in DOUBTFUL cases.",
        "timeline.symptom.onset": "Symptom onset",
        "timeline.first.contact": "First medical contact",
        "timeline.ecg": "ECG performed",
        "timeline.ecg.initial": "Initial ECG performed",
        "timeline.ecg.control": "Control ECG (15 min post-NTG)",
        "timeline.activation": "AMI Code Activation",
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
        "ecg.new.rbbb": "New right bundle branch block",
        "ecg.winter.pattern": "⚠️ De Winter Pattern (STEMI Equivalent)",
        "ecg.st.depression.avr": "Diffuse ST depression + aVR elevation",
        "ecg.posterior.infarction": "Posterior infarction",
        "ecg.right.ventricle": "⚠️ Right ventricle infarction",
        "ecg.pacemaker": "Pacemaker rhythm",
        "ecg.other.findings": "Other ECG findings...",
        "ecg.alert.st.detected": "ST elevation detected!",
        "ecg.alert.ntg.instructions": "Administer NTG and perform control ECG at 15 min to confirm PERSISTENT elevation",
        "ecg.anterior": "Anterior (V1-V4)",
        "ecg.lateral": "Lateral (I, aVL, V5-V6)",
        "ecg.inferior": "Inferior (II, III, aVF)",
        "ecg.posterior": "Posterior (V7-V9)",
        "ecg.right": "Right ventricle (V3R-V4R)",
        "ecg.location.label": "Location:",
        "ecg.location.placeholder": "Select location",

        // Datos clínicos
        "clinical.typical.question": "TYPICAL Clinical Presentation of AMI?",
        "clinical.typical.yes": "YES - Typical",
        "clinical.typical.no": "NO - Atypical/Doubtful",
        "clinical.typical.description": "<strong>Typical:</strong> Oppressive pain >20 min, radiation to arm/jaw, vegetative symptoms, does not respond to NTG<br><strong>Atypical:</strong> Brief pain, atypical location, very young patient, diagnostic doubts",
        "clinical.sbp": "SBP (mmHg)",
        "clinical.dbp": "DBP (mmHg)",
        "clinical.sbp.placeholder": "mmHg",
        "clinical.dbp.placeholder": "mmHg",
        "clinical.refractory.pain": "Refractory pain to treatment",
        "clinical.shock.alert": "Possible CARDIOGENIC SHOCK detected",
        "clinical.shock.description": "SBP <90 mmHg suggests shock. Assess complete clinical presentation.",
        "clinical.recommendations.title": "💡 Clinical Recommendations",
        "clinical.reminders.title": "⏰ Time Reminders",
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
        "contra.recent.stroke": "Ischemic stroke <6 months",
        "contra.recent.trauma.surgery": "Recent trauma/surgery <3 months",
        "contra.active.bleeding": "Active bleeding",
        "contra.refractory.hypertension": "Refractory hypertension (>180/110)",
        "contra.pregnancy": "Pregnancy",
        "contra.previous.stroke": "Previous stroke/TIA",
        "contra.intracranial.neoplasm": "Intracranial neoplasm",
        "contra.recent.trauma": "Recent head trauma (<3 months)",
        "contra.recent.surgery": "Recent major surgery (<3 weeks)",
        "contra.dissecting.aneurysm": "Dissecting aneurysm",
        "contra.severe.hypertension": "Severe uncontrolled arterial hypertension",

        // Estrategia
        "strategy.decision": "Decision",
        "strategy.select": "Select...",
        "strategy.title": "Select reperfusion strategy",
        "strategy.primary.pci": "Primary angioplasty (PCI)",
        "strategy.fibrinolysis": "Fibrinolysis in situ",
        "strategy.fibrinolysis.reason": "Reason for fibrinolysis",
        "strategy.fibrinolysis.reason.placeholder": "E.g.: Estimated transfer time >90 min",
        "strategy.pharmacoinvasive": "Pharmacoinvasive Strategy (fibrinolysis + transfer)",
        "strategy.conservative": "Conservative treatment",
        "strategy.hospital.label": "Destination hospital",
        "strategy.hospital.placeholder": "Hospital name",
        "strategy.estimated.time": "Estimated transfer time",
        "strategy.estimated.time.placeholder": "minutes",
        "strategy.antiplatelet.title": "Recommended second antiplatelet:",
        "strategy.antiplatelet.calculate": "Calculate recommendation",
        "strategy.tnk.title": "Calculated Tenecteplase dose:",
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
        "btn.copy.report": "📋 Copy Report to Clipboard",
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
                    // Usar innerHTML para soportar HTML en las traducciones
                    element.innerHTML = translation;
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

        // Actualizar título del documento
        document.title = this.t('app.title') + ' - ' + this.t('app.subtitle');
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
