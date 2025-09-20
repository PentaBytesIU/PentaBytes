// Disease Data
const diseases = [
  {
    name: "Fungal infection",
    symptoms: ["itching", "skin_rash", "nodal_skin_eruptions", "dischromic_patches"],
    description: "A fungal infection is a disease caused by a fungus. There are millions of species of fungi, but only a few hundred of them can make people sick.",
    precautions: ["bath twice", "use detol or neem in bathing water", "keep infected area dry", "use clean cloths"]
  },
  {
    name: "Allergy",
    symptoms: ["continuous_sneezing", "shivering", "chills", "watery_eyes"],
    description: "An allergy is a reaction by your immune system to something that does not bother most other people.",
    precautions: ["apply calamine", "cover area with bandage", "use ice to compress itching", "consult doctor"]
  },
  {
    name: "GERD",
    symptoms: ["stomach_pain", "acidity", "ulcers_on_tongue", "vomiting", "cough", "chest_pain"],
    description: "Gastroesophageal reflux disease (GERD) occurs when stomach acid frequently flows back into the tube connecting your mouth and stomach (esophagus).",
    precautions: ["avoid fatty spicy food", "avoid lying down after eating", "maintain healthy weight", "exercise"]
  },
  {
    name: "Chronic cholestasis",
    symptoms: ["itching", "vomiting", "yellowish_skin", "nausea", "loss_of_appetite", "abdominal_pain"],
    description: "Chronic cholestasis is a liver condition where bile flow is reduced or stopped.",
    precautions: ["cold baths", "anti itch medicine", "consult doctor", "eat healthy"]
  },
  {
    name: "Drug Reaction",
    symptoms: ["itching", "skin_rash", "stomach_pain", "burning_micturition", "spotting_urination"],
    description: "An adverse drug reaction (ADR) is an injury caused by taking medication.",
    precautions: ["stop irritation", "consult nearest hospital", "stop taking drug", "follow up"]
  },
  {
    name: "Peptic ulcer disease",
    symptoms: ["vomiting", "indigestion", "loss_of_appetite", "abdominal_pain", "passage_of_gases"],
    description: "Peptic ulcers are open sores that develop on the inside lining of your stomach and the upper portion of your small intestine.",
    precautions: ["avoid fatty spicy food", "consume probiotic food", "eliminate milk", "limit alcohol"]
  },
  {
    name: "AIDS",
    symptoms: ["muscle_wasting", "patches_in_throat", "high_fever", "extra_marital_contacts"],
    description: "Acquired immunodeficiency syndrome (AIDS) is a chronic, potentially life-threatening condition caused by the human immunodeficiency virus (HIV).",
    precautions: ["avoid open cuts", "wear ppe if possible", "consult doctor", "follow up"]
  },
  {
    name: "Diabetes",
    symptoms: ["fatigue", "weight_loss", "restlessness", "lethargy", "irregular_sugar_level", "blurred_and_distorted_vision"],
    description: "Diabetes is a group of metabolic disorders characterized by a high blood sugar level over a prolonged period of time.",
    precautions: ["have balanced diet", "exercise", "consult doctor", "follow up"]
  },
  {
    name: "Gastroenteritis",
    symptoms: ["vomiting", "sunken_eyes", "dehydration", "diarrhoea"],
    description: "Gastroenteritis is an inflammation of the digestive tract, particularly the stomach, and large and small intestines.",
    precautions: ["stop eating solid food for while", "try taking small sips of water", "rest", "ease back into eating"]
  },
  {
    name: "Bronchial Asthma",
    symptoms: ["fatigue", "cough", "high_fever", "breathlessness", "family_history", "mucoid_sputum"],
    description: "Bronchial asthma is a medical condition which causes the airway path of the lungs to swell and narrow.",
    precautions: ["switch to loose cloothing", "take deep breaths", "get away from trigger", "seek help"]
  },
  {
    name: "Hypertension",
    symptoms: ["headache", "chest_pain", "dizziness", "loss_of_balance", "lack_of_concentration"],
    description: "Hypertension (high blood pressure) is a long-term medical condition in which the blood pressure in the arteries is persistently elevated.",
    precautions: ["meditation", "salt baths", "reduce stress", "get proper sleep"]
  },
  {
    name: "Migraine",
    symptoms: ["acidity", "indigestion", "headache", "blurred_and_distorted_vision", "excessive_hunger", "stiff_neck", "depression", "irritability", "visual_disturbances"],
    description: "A migraine is a primary headache disorder characterized by recurrent headaches that are moderate to severe.",
    precautions: ["meditation", "reduce stress", "use poloroid glasses in sun", "consult doctor"]
  },
  {
    name: "Cervical spondylosis",
    symptoms: ["back_pain", "weakness_in_limbs", "neck_pain", "dizziness", "loss_of_balance"],
    description: "Cervical spondylosis is a general term for age-related wear and tear affecting the spinal disks in your neck.",
    precautions: ["use heating pad or cold therapy", "exercise", "take otc pain reliver", "consult doctor"]
  },
  {
    name: "Paralysis (brain hemorrhage)",
    symptoms: ["vomiting", "headache", "weakness_of_one_body_side", "altered_sensorium"],
    description: "Brain hemorrhage is a type of stroke caused by bleeding in the brain tissue.",
    precautions: ["massage", "eat healthy", "exercise", "consult doctor"]
  },
  {
    name: "Jaundice",
    symptoms: ["itching", "vomiting", "fatigue", "weight_loss", "high_fever", "yellowish_skin", "dark_urine", "abdominal_pain"],
    description: "Jaundice is a yellow discoloration of the skin, mucous membranes, and the whites of the eyes caused by increased amounts of bilirubin in the blood.",
    precautions: ["drink plenty of water", "consume milk thistle", "eat fruits and high fiber food", "medication"]
  },
  {
    name: "Malaria",
    symptoms: ["chills", "vomiting", "high_fever", "sweating", "headache", "nausea", "diarrhoea", "muscle_pain"],
    description: "Malaria is a mosquito-borne infectious disease that affects humans and other animals.",
    precautions: ["Consult nearest hospital", "avoid oily food", "avoid non veg food", "keep mosquitos out"]
  },
  {
    name: "Chicken pox",
    symptoms: ["itching", "skin_rash", "fatigue", "lethargy", "high_fever", "headache", "loss_of_appetite", "mild_fever"],
    description: "Chickenpox is a highly contagious disease caused by the initial infection with varicella zoster virus (VZV).",
    precautions: ["use neem in bathing", "consume neem leaves", "take vaccine", "avoid public places"]
  },
  {
    name: "Dengue",
    symptoms: ["skin_rash", "chills", "joint_pain", "vomiting", "fatigue", "high_fever", "headache", "nausea", "loss_of_appetite", "pain_behind_the_eyes", "back_pain", "malaise", "muscle_pain", "red_spots_over_body"],
    description: "Dengue is a mosquito-borne tropical disease caused by the dengue virus.",
    precautions: ["drink papaya leaf juice", "avoid fatty spicy food", "keep mosquitos away", "keep hydrated"]
  },
  {
    name: "Typhoid",
    symptoms: ["chills", "vomiting", "fatigue", "high_fever", "headache", "nausea", "constipation", "abdominal_pain", "diarrhoea", "toxic_look_(typhos)", "belly_pain"],
    description: "Typhoid fever is a disease caused by Salmonella serotype Typhi bacteria.",
    precautions: ["eat high calorie vegitables", "antiboitic therapy", "consult doctor", "medication"]
  },
  {
    name: "hepatitis A",
    symptoms: ["joint_pain", "vomiting", "yellowish_skin", "dark_urine", "nausea", "loss_of_appetite", "abdominal_pain", "diarrhoea", "mild_fever", "yellowing_of_eyes", "muscle_pain"],
    description: "Hepatitis A is an infectious disease of the liver caused by Hepatovirus A (HAV).",
    precautions: ["Consult nearest hospital", "wash hands through", "avoid fatty spicy food", "medication"]
  },
  {
    name: "Hepatitis B",
    symptoms: ["itching", "fatigue", "lethargy", "yellowish_skin", "dark_urine", "loss_of_appetite", "abdominal_pain", "yellow_urine", "yellowing_of_eyes", "malaise", "receiving_blood_transfusion", "receiving_unsterile_injections"],
    description: "Hepatitis B is an infectious disease caused by the hepatitis B virus (HBV) that affects the liver.",
    precautions: ["consult nearest hospital", "vaccination", "eat healthy", "medication"]
  },
  {
    name: "Hepatitis C",
    symptoms: ["fatigue", "yellowish_skin", "nausea", "loss_of_appetite", "yellowing_of_eyes", "family_history"],
    description: "Hepatitis C is an infectious disease caused by the hepatitis C virus (HCV) that primarily affects the liver.",
    precautions: ["Consult nearest hospital", "vaccination", "eat healthy", "medication"]
  },
  {
    name: "Hepatitis D",
    symptoms: ["joint_pain", "vomiting", "fatigue", "yellowish_skin", "dark_urine", "nausea", "loss_of_appetite", "abdominal_pain", "yellowing_of_eyes"],
    description: "Hepatitis D is a viral infection caused by the hepatitis D virus (HDV).",
    precautions: ["consult doctor", "medication", "eat healthy", "follow up"]
  },
  {
    name: "Hepatitis E",
    symptoms: ["joint_pain", "vomiting", "fatigue", "high_fever", "yellowish_skin", "dark_urine", "nausea", "loss_of_appetite", "abdominal_pain", "yellowing_of_eyes", "acute_liver_failure", "coma", "stomach_bleeding"],
    description: "Hepatitis E is a viral infection caused by the hepatitis E virus (HEV).",
    precautions: ["stop alcohol consumption", "rest", "consult doctor", "medication"]
  },
  {
    name: "Alcoholic hepatitis",
    symptoms: ["vomiting", "yellowish_skin", "abdominal_pain", "swelling_of_stomach", "distention_of_abdomen", "history_of_alcohol_consumption", "fluid_overload"],
    description: "Alcoholic hepatitis is hepatitis (inflammation of the liver) due to excessive intake of alcohol.",
    precautions: ["stop alcohol consumption", "consult doctor", "medication", "follow up"]
  },
  {
    name: "Tuberculosis",
    symptoms: ["chills", "vomiting", "fatigue", "weight_loss", "cough", "high_fever", "breathlessness", "sweating", "loss_of_appetite", "mild_fever", "yellowing_of_eyes", "swelled_lymph_nodes", "malaise", "phlegm", "chest_pain", "blood_in_sputum"],
    description: "Tuberculosis (TB) is an infectious disease usually caused by Mycobacterium tuberculosis (MTB) bacteria.",
    precautions: ["cover mouth", "consult doctor", "medication", "rest"]
  },
  {
    name: "Common Cold",
    symptoms: ["continuous_sneezing", "chills", "fatigue", "cough", "high_fever", "headache", "swelled_lymph_nodes", "malaise", "phlegm", "throat_irritation", "redness_of_eyes", "sinus_pressure", "runny_nose", "congestion", "chest_pain", "loss_of_smell", "muscle_pain"],
    description: "The common cold is a viral infectious disease of the upper respiratory tract that primarily affects the nose.",
    precautions: ["drink vitamin c rich drinks", "take vapour", "avoid cold food", "keep fever in check"]
  },
  {
    name: "Pneumonia",
    symptoms: ["chills", "fatigue", "cough", "high_fever", "breathlessness", "sweating", "malaise", "phlegm", "chest_pain", "fast_heart_rate", "rusty_sputum"],
    description: "Pneumonia is an inflammatory condition of the lung affecting primarily the small air sacs known as alveoli.",
    precautions: ["consult doctor", "medication", "rest", "follow up"]
  },
  {
    name: "Dimorphic hemmorhoids(piles)",
    symptoms: ["constipation", "pain_during_bowel_movements", "pain_in_anal_region", "bloody_stool", "irritation_in_anus"],
    description: "Hemorrhoids are swollen veins in the lowest part of your rectum and anus.",
    precautions: ["avoid fatty spicy food", "consume witch hazel", "warm bath with epsom salt", "consume alovera juice"]
  },
  {
    name: "Heart attack",
    symptoms: ["vomiting", "breathlessness", "sweating", "chest_pain"],
    description: "A heart attack occurs when blood flow to a part of the heart is blocked for a long enough time that part of the heart muscle is damaged or dies.",
    precautions: ["call ambulance", "chew or swallow asprin", "keep calm", "follow up"]
  },
  {
    name: "Varicose veins",
    symptoms: ["fatigue", "cramps", "bruising", "obesity", "swollen_legs", "swollen_blood_vessels", "prominent_veins_on_calf"],
    description: "Varicose veins are enlarged, twisted veins that can occur anywhere in the body, but are most common in the legs.",
    precautions: ["lie down flat and raise the leg high", "use oinments", "use vein compression", "dont stand still for long"]
  },
  {
    name: "Hypothyroidism",
    symptoms: ["fatigue", "weight_gain", "cold_hands_and_feets", "mood_swings", "lethargy", "dizziness", "puffy_face_and_eyes", "enlarged_thyroid", "brittle_nails", "swollen_extremeties", "depression", "irritability", "abnormal_menstruation"],
    description: "Hypothyroidism is a disorder of the endocrine system in which the thyroid gland does not produce enough thyroid hormone.",
    precautions: ["reduce stress", "exercise", "eat healthy", "get proper sleep"]
  },
  {
    name: "Hyperthyroidism",
    symptoms: ["fatigue", "mood_swings", "weight_loss", "restlessness", "sweating", "diarrhoea", "fast_heart_rate", "excessive_hunger", "muscle_weakness", "irritability", "abnormal_menstruation"],
    description: "Hyperthyroidism is the condition that occurs due to excessive production of thyroid hormones by the thyroid gland.",
    precautions: ["eat healthy", "massage", "avoid stress", "exercise"]
  },
  {
    name: "Hypoglycemia",
    symptoms: ["vomiting", "fatigue", "anxiety", "sweating", "headache", "nausea", "blurred_and_distorted_vision", "excessive_hunger", "drying_and_tingling_lips", "slurred_speech"],
    description: "Hypoglycemia is a condition in which your blood sugar (glucose) level is lower than normal.",
    precautions: ["lie down on side", "check in pulse", "drink sugary drinks", "consult doctor"]
  },
  {
    name: "Osteoarthristis",
    symptoms: ["joint_pain", "neck_pain", "knee_pain", "hip_joint_pain", "swelling_joints", "painful_walking"],
    description: "Osteoarthritis is a type of joint disease that results from breakdown of joint cartilage and underlying bone.",
    precautions: ["acetaminophen", "consult nearest hospital", "follow up", "salt baths"]
  },
  {
    name: "Arthritis",
    symptoms: ["muscle_weakness", "stiff_neck", "swelling_joints", "movement_stiffness", "spinning_movements", "loss_of_balance", "unsteadiness"],
    description: "Arthritis is a term often used to mean any disorder that affects joints.",
    precautions: ["exercise", "use hot and cold therapy", "try acupuncture", "massage"]
  },
  {
    name: "(vertigo) Paroymsal  Positional Vertigo",
    symptoms: ["vomiting", "headache", "nausea", "spinning_movements", "loss_of_balance", "unsteadiness"],
    description: "Benign paroxysmal positional vertigo (BPPV) is a disorder arising from a problem in the inner ear.",
    precautions: ["lie down", "avoid sudden change in body", "avoid abrupt head movement", "relax"]
  },
  {
    name: "Acne",
    symptoms: ["skin_rash", "pus_filled_pimples", "blackheads", "scurring"],
    description: "Acne is a long-term skin condition that occurs when hair follicles are clogged with dead skin cells and oil from the skin.",
    precautions: ["bath twice", "avoid fatty spicy food", "drink plenty of water", "avoid too many products"]
  },
  {
    name: "Urinary tract infection",
    symptoms: ["burning_micturition", "spotting_urination", "foul_smell_ofurine", "continuous_feel_of_urine"],
    description: "A urinary tract infection (UTI) is an infection that affects part of the urinary tract.",
    precautions: ["drink plenty of water", "increase vitamin c intake", "drink cranberry juice", "take probiotics"]
  },
  {
    name: "Psoriasis",
    symptoms: ["skin_rash", "joint_pain", "skin_peeling", "silver_like_dusting", "small_dents_in_nails", "inflammatory_nails"],
    description: "Psoriasis is a long-lasting autoimmune disease characterized by patches of abnormal skin.",
    precautions: ["wash hands with warm soapy water", "stop bleeding using pressure", "consult doctor", "salt baths"]
  },
  {
    name: "Impetigo",
    symptoms: ["skin_rash", "high_fever", "blister", "red_sore_around_nose", "yellow_crust_ooze"],
    description: "Impetigo is a bacterial infection that involves the superficial skin.",
    precautions: ["soak affected area in warm water", "use antibiotics", "remove scabs with wet compressed cloth", "consult doctor"]
  }
];

// Heat deaths data
const heatDeathsData = [
  { state: 'Bihar', deaths: 121 },
  { state: 'Telangana', deaths: 42 },
  { state: 'Andhra Pradesh', deaths: 29 },
  { state: 'Gujarat', deaths: 8 },
  { state: 'Maharashtra', deaths: 6 },
  { state: 'Rajasthan', deaths: 3 },
  { state: 'Madhya Pradesh', deaths: 2 },
  { state: 'Uttar Pradesh', deaths: 2 },
  { state: 'Tamil Nadu', deaths: 1 },
  { state: 'Kerala', deaths: 1 }
];

// Symptom severity data
const symptomSeverityData = [
  { symptom: "high_fever", weight: 7 },
  { symptom: "chest_pain", weight: 7 },
  { symptom: "swelling_of_stomach", weight: 7 },
  { symptom: "weakness_in_limbs", weight: 7 },
  { symptom: "coma", weight: 7 },
  { symptom: "burning_micturition", weight: 6 },
  { symptom: "spotting_urination", weight: 6 },
  { symptom: "patches_in_throat", weight: 6 },
  { symptom: "acute_liver_failure", weight: 6 },
  { symptom: "fluid_overload", weight: 6 },
  { symptom: "swelled_lymph_nodes", weight: 6 },
  { symptom: "malaise", weight: 6 },
  { symptom: "pain_in_anal_region", weight: 6 },
  { symptom: "irritation_in_anus", weight: 6 },
  { symptom: "enlarged_thyroid", weight: 6 },
  { symptom: "spinning_movements", weight: 6 },
  { symptom: "continuous_feel_of_urine", weight: 6 },
  { symptom: "abnormal_menstruation", weight: 6 },
  { symptom: "dischromic_patches", weight: 6 },
  { symptom: "prominent_veins_on_calf", weight: 6 },
  { symptom: "stomach_bleeding", weight: 6 },
  { symptom: "blood_in_sputum", weight: 5 },
  { symptom: "vomiting", weight: 5 },
  { symptom: "stomach_pain", weight: 5 },
  { symptom: "cold_hands_and_feets", weight: 5 },
  { symptom: "restlessness", weight: 5 },
  { symptom: "irregular_sugar_level", weight: 5 },
  { symptom: "mild_fever", weight: 5 },
  { symptom: "indigestion", weight: 5 },
  { symptom: "nausea", weight: 5 },
  { symptom: "blurred_and_distorted_vision", weight: 5 },
  { symptom: "phlegm", weight: 5 },
  { symptom: "redness_of_eyes", weight: 5 },
  { symptom: "runny_nose", weight: 5 },
  { symptom: "congestion", weight: 5 },
  { symptom: "fast_heart_rate", weight: 5 },
  { symptom: "pain_during_bowel_movements", weight: 5 },
  { symptom: "bloody_stool", weight: 5 },
  { symptom: "neck_pain", weight: 5 },
  { symptom: "swollen_legs", weight: 5 },
  { symptom: "swollen_blood_vessels", weight: 5 },
  { symptom: "puffy_face_and_eyes", weight: 5 },
  { symptom: "brittle_nails", weight: 5 },
  { symptom: "swollen_extremeties", weight: 5 },
  { symptom: "extra_marital_contacts", weight: 5 },
  { symptom: "swelling_joints", weight: 5 },
  { symptom: "movement_stiffness", weight: 5 },
  { symptom: "foul_smell_ofurine", weight: 5 },
  { symptom: "passage_of_gases", weight: 5 },
  { symptom: "toxic_look_(typhos)", weight: 5 },
  { symptom: "increased_appetite", weight: 5 },
  { symptom: "family_history", weight: 5 },
  { symptom: "receiving_blood_transfusion", weight: 5 },
  { symptom: "history_of_alcohol_consumption", weight: 5 },
  { symptom: "palpitations", weight: 4 },
  { symptom: "prognosis", weight: 5 }
];