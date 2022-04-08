export interface ExamResultInterface {
    patientID?: String;
    medicalExamID?: String;
    questions?: String | {
		FIRST_NAME?:string,
		LAST_NAME?:string,
		SEXE?:string,
		AGE?:string,
		DD1?:string,
		DD2?:string,
		DD3A?:string,
		DD3B?:string,
		DD3C?:string,
		DD3D?:string,
		QS1?:string,
		QS2?:string,
		QS3?:string,
		QS4A?:string,
		QS4B?:string,
		QS4C?:string,
		QS5?:string,
		QS6?:string,
		QS7A?:string,
		QS7B?:string,
		QS7C?:string,
		QS7D?:string,
		QS8?:string,
		QS8E?:string,
		QS9?:string,
		QS9E?:string,
		QS10?:string,
		QS10E?:string,
		QS11?:string,
		QS11E?:string,
		QS12?:string,
		QS12E?:string,
		QS13?:string,
		QS13E?:string,
		QS14?:string,
		QS14E?:string,
		DEMO1?:string,
		DEMO2?:string,
		DEMO3?:string,
		DEMO4?:string,
		DEMO5?:string,
		E1B_D?: String,
		E1B_G?: String,
		E1_DOUL_D_ATM?: String,
		E1_DOUL_D_DIGASTRIQUEPOS?: String,
		E1_DOUL_D_MASSETER_BODY?: String,
		E1_DOUL_D_MASSETER_INSERTION?: String,
		E1_DOUL_D_MASSETER_ORIGIN?: String,
		E1_DOUL_D_PTERIGOIDIENMEDIAL?: String,
		E1_DOUL_D_TEMPORAL_ANTERIOR?: String,
		E1_DOUL_D_TEMPORAL_MIDDLE?: String,
		E1_DOUL_D_TEMPORAL_POSTERIOR?: String,
		E1_DOUL_G_ATM?: String,
		E1_DOUL_G_DIGASTRIQUEPOS?: String,
		E1_DOUL_G_MASSETER_BODY?: String,
		E1_DOUL_G_MASSETER_INSERTION?: String,
		E1_DOUL_G_MASSETER_ORIGIN?: String,
		E1_DOUL_G_PTERIGOIDIENMEDIAL?: String,
		E1_DOUL_G_TEMPORAL_ANTERIOR?: String,
		E1_DOUL_G_TEMPORAL_MIDDLE?: String,
		E1_DOUL_G_TEMPORAL_POSTERIOR?: String,
		E2DEVIA_MEDIA?: String,
		E2DIST_H?: String,
		E2DIST_MEDIA?: String,
		E2DIST_V?: String,
		E2NEG_H?: String,
		E2NEG_V?: String,
		E2REF?: String,
		E31?: String,
		E32?: String,
		E4A?: String,
		E4B?: String,
		E4C?: String,
		E4D?: String,
		E4_DH_G_D_TEMPORAL?: String,
		E4_MA_D_ATM?: String,
		E4_MA_D_DIGASTRIQUEPOS?: String,
		E4_MA_D_MASSETER_BODY?: String,
		E4_MA_D_MASSETER_INSERTION?: String,
		E4_MA_D_MASSETER_ORIGIN?: String,
		E4_MA_D_PTERIGOIDIENMEDIAL?: String,
		E4_MA_D_TEMPORAL_ANTERIOR?: String,
		E4_MA_D_TEMPORAL_MIDDLE?: String,
		E4_MA_D_TEMPORAL_POSTERIOR?: String,
		E4_MA_G_ATM?: String,
		E4_MA_G_DIGASTRIQUEPOS?: String,
		E4_MA_G_MASSETER_BODY?: String,
		E4_MA_G_MASSETER_INSERTION?: String,
		E4_MA_G_MASSETER_ORIGIN?: String,
		E4_MA_G_PTERIGOIDIENMEDIAL?: String,
		E4_MA_G_TEMPORAL_ANTERIOR?: String,
		E4_MA_G_TEMPORAL_MIDDLE?: String,
		E4_MA_G_TEMPORAL_POSTERIOR?: String,
		E4_MS_D_ATM?: String,
		E4_MS_D_DIGASTRIQUEPOS?: String,
		E4_MS_D_MASSETER_BODY?: String,
		E4_MS_D_MASSETER_INSERTION?: String,
		E4_MS_D_MASSETER_ORIGIN?: String,
		E4_MS_D_PTERIGOIDIENMEDIAL?: String,
		E4_MS_D_TEMPORAL_ANTERIOR?: String,
		E4_MS_D_TEMPORAL_MIDDLE?: String,
		E4_MS_D_TEMPORAL_POSTERIOR?: String,
		E4_MS_G_ATM?: String,
		E4_MS_G_DIGASTRIQUEPOS?: String,
		E4_MS_G_MASSETER_BODY?: String,
		E4_MS_G_MASSETER_INSERTION?: String,
		E4_MS_G_MASSETER_ORIGIN?: String,
		E4_MS_G_PTERIGOIDIENMEDIAL?: String,
		E4_MS_G_TEMPORAL_ANTERIOR?: String,
		E4_MS_G_TEMPORAL_MIDDLE?: String,
		E4_MS_G_TEMPORAL_POSTERIOR?: String,
		E4_MA_MT_D_TEMPORAL_ANTERIOR?: String,
		E4_MA_MT_D_TEMPORAL_MIDDLE?: String,
		E4_MA_MT_D_TEMPORAL_POSTERIOR?: String,
		E4_MA_MT_G_TEMPORAL_ANTERIOR?: String,
		E4_MA_MT_G_TEMPORAL_MIDDLE?: String,
		E4_MA_MT_G_TEMPORAL_POSTERIOR?: String,
		E4_MS_MT_D_TEMPORAL_ANTERIOR?: String,
		E4_MS_MT_D_TEMPORAL_MIDDLE?: String,
		E4_MS_MT_D_TEMPORAL_POSTERIOR?: String,
		E4_MS_MT_G_TEMPORAL_ANTERIOR?: String,
		E4_MS_MT_G_TEMPORAL_MIDDLE?: String,
		E4_MS_MT_G_TEMPORAL_POSTERIOR?: String,
		E5A?: String,
		E5B?: String,
		E5C?: String,
		E5D?: String,
		E5_LD_D_ATM?: String,
		E5_LD_D_DIGASTRIQUEPOS?: String,
		E5_LD_D_MASSETER_BODY?: String,
		E5_LD_D_MASSETER_INSERTION?: String,
		E5_LD_D_MASSETER_ORIGIN?: String,
		E5_LD_D_PTERIGOIDIENMEDIAL?: String,
		E5_LD_D_TEMPORAL_ANTERIOR?: String,
		E5_LD_D_TEMPORAL_MIDDLE?: String,
		E5_LD_D_TEMPORAL_POSTERIOR?: String,
		E5_LD_G_ATM?: String,
		E5_LD_G_DIGASTRIQUEPOS?: String,
		E5_LD_G_MASSETER_BODY?: String,
		E5_LD_G_MASSETER_INSERTION?: String,
		E5_LD_G_MASSETER_ORIGIN?: String,
		E5_LD_G_PTERIGOIDIENMEDIAL?: String,
		E5_LD_G_TEMPORAL_ANTERIOR?: String,
		E5_LD_G_TEMPORAL_MIDDLE?: String,
		E5_LD_G_TEMPORAL_POSTERIOR?: String,
		E5_LD_MT_D_TEMPORAL_ANTERIOR?: String,
		E5_LD_MT_D_TEMPORAL_MIDDLE?: String,
		E5_LD_MT_D_TEMPORAL_POSTERIOR?: String,
		E5_LD_MT_G_TEMPORAL_ANTERIOR?: String,
		E5_LD_MT_G_TEMPORAL_MIDDLE?: String,
		E5_LD_MT_G_TEMPORAL_POSTERIOR?: String,
		E5_LG_D_ATM?: String,
		E5_LG_D_DIGASTRIQUEPOS?: String,
		E5_LG_D_MASSETER_BODY?: String,
		E5_LG_D_MASSETER_INSERTION?: String,
		E5_LG_D_MASSETER_ORIGIN?: String,
		E5_LG_D_PTERIGOIDIENMEDIAL?: String,
		E5_LG_D_TEMPORAL_ANTERIOR?: String,
		E5_LG_D_TEMPORAL_MIDDLE?: String,
		E5_LG_D_TEMPORAL_POSTERIOR?: String,
		E5_LG_G_ATM?: String,
		E5_LG_G_DIGASTRIQUEPOS?: String,
		E5_LG_G_MASSETER_BODY?: String,
		E5_LG_G_MASSETER_INSERTION?: String,
		E5_LG_G_MASSETER_ORIGIN?: String,
		E5_LG_G_PTERIGOIDIENMEDIAL?: String,
		E5_LG_G_TEMPORAL_ANTERIOR?: String,
		E5_LG_G_TEMPORAL_MIDDLE?: String,
		E5_LG_G_TEMPORAL_POSTERIOR?: String,
		E5_LG_MT_D_TEMPORAL_ANTERIOR?: String,
		E5_LG_MT_D_TEMPORAL_MIDDLE?: String,
		E5_LG_MT_D_TEMPORAL_POSTERIOR?: String,
		E5_LG_MT_G_TEMPORAL_ANTERIOR?: String,
		E5_LG_MT_G_TEMPORAL_MIDDLE?: String,
		E5_LG_MT_G_TEMPORAL_POSTERIOR?: String,
		E5_PI_D_ATM?: String,
		E5_PI_D_DIGASTRIQUEPOS?: String,
		E5_PI_D_MASSETER_BODY?: String,
		E5_PI_D_MASSETER_INSERTION?: String,
		E5_PI_D_MASSETER_ORIGIN?: String,
		E5_PI_D_PTERIGOIDIENMEDIAL?: String,
		E5_PI_D_TEMPORAL_ANTERIOR?: String,
		E5_PI_D_TEMPORAL_MIDDLE?: String,
		E5_PI_D_TEMPORAL_POSTERIOR?: String,
		E5_PI_G_ATM?: String,
		E5_PI_G_DIGASTRIQUEPOS?: String,
		E5_PI_G_MASSETER_BODY?: String,
		E5_PI_G_MASSETER_INSERTION?: String,
		E5_PI_G_MASSETER_ORIGIN?: String,
		E5_PI_G_PTERIGOIDIENMEDIAL?: String,
		E5_PI_G_TEMPORAL_ANTERIOR?: String,
		E5_PI_G_TEMPORAL_MIDDLE?: String,
		E5_PI_G_TEMPORAL_POSTERIOR?: String,
		E5_PI_MT_D_TEMPORAL_ANTERIOR?: String,
		E5_PI_MT_D_TEMPORAL_MIDDLE?: String,
		E5_PI_MT_D_TEMPORAL_POSTERIOR?: String,
		E5_PI_MT_G_TEMPORAL_ANTERIOR?: String,
		E5_PI_MT_G_TEMPORAL_MIDDLE?: String,
		E5_PI_MT_G_TEMPORAL_POSTERIOR?: String,
		E6_CRAQ_FERM_D?:string,
		E7_CRAQ_DOUL_G?:string,
		E7_CREP_DOUL_HAB_G?:string,
		E6_CREP_OUV_G?:string,
		E6_CREP_DOUL_G?:string,
		E7_CRAQ_FERM_D?:string,
		E7_CREP_DOUL_G?:string,
		E6_CREP_DOUL_D?:string,
		E6_CREP_OUV_D?:string,
		E6_CREP_DOUL_HAB_G?:string,
		E6_CREP_DOU_HAB_D?:string,
		E6_CRAQ_OUV_G?:string,
		E7_CRAQ_FERM_G?:string,
		E6_CRAQ_DOUL_D?:string,
		E6_CRAQ_DOUL_G?:string,
		E6_CREP_PAT_G?:string,
		E6_CRAQ_PAT_D?:string,
		E6_CRAQ_FERM_G?:string,
		E7_CRAQ_OUV_D?:string,
		E7_CREP_PAT_D?:string,
		E6_CREP_FERM_G?:string,
		E7_CREP_DOUL_D?:string,
		E7_CRAQ_PAT_G?:string,
		E7_CREP_FERM_G?:string,
		E6_CRAQ_DOUL_HAB_D?:string,
		E6_CREP_PAT_D?:string,
		E6_CRAQ_PAT_G?:string,
		E7_CRAQ_OUV_G?:string,
		E6_CRAQ_OUV_D?:string,
		E7_CREP_OUV_D?:string,
		E7_CRAQ_PAT_D?:string,
		E7_CRAQ_DOUL_HAB_D?:string,
		E7_CREP_DOUL_HAB_D?:string,
		E7_CREP_FERM_D?:string,
		E6_CRAQ_DOUL_HAB_G?:string,
		E7_CRAQ_DOUL_D?:string,
		E6_CREP_FERM_D?:string,
		E7_CREP_PAT_G?:string,
		E7_CREP_OUV_G?:string,
		E7_CRAQ_DOUL_HAB_G?:string,
		E8_OUVERT_BLOC_D?:string,
		E8_OUVERT_PAT_D?:string,
		E8_OUVERT_EXAM_D?:string,
		E8_OUVRANT_EXAM_G?:string,
		E8_OUVERT_EXAM_G?:string,
		E8_OUVERT_PAT_G?:string,
		E8_OUVERT_BLOC_G?:string,
		E8_OUVERT_REDUC_G?:string,
		E8_OUVRANT_PAT_G?:string,
		E8_OUVRANT_BLOC_D?:string,
		E8_OUVRANT_EXAM_D?:string,
		E8_OUVRANT_REDUC_G?:string,
		E8_OUVRANT_REDUC_D?:string,
		E8_OUVRANT_BLOC_G?:string,
		E8_OUVRANT_PAT_D?:string,
		E8_OUVERT_REDUC_D?:string,
		E9_AL_DH_D?: String,
		E9_AL_DH_G?: String,
		E9_AL_DOU_REF_D?: String,
		E9_AL_MTH_D?: String,
		E9_AL_MTH_G?: String,
		E9_PALP_D_ATM?: String,
		E9_PALP_D_DIGASTRIQUEPOS?: String,
		E9_PALP_D_MASSETER_BODY?: String,
		E9_PALP_D_MASSETER_INSERTION?: String,
		E9_PALP_D_MASSETER_ORIGIN?: String,
		E9_PALP_D_PTERIGOIDIENMEDIAL?: String,
		E9_PALP_D_TEMPORAL_ANTERIOR?: String,
		E9_PALP_D_TEMPORAL_MIDDLE?: String,
		E9_PALP_D_TEMPORAL_POSTERIOR?: String,
		E9_PALP_G_ATM?: String,
		E9_PALP_G_DIGASTRIQUEPOS?: String,
		E9_PALP_G_MASSETER_BODY?: String,
		E9_PALP_G_MASSETER_INSERTION?: String,
		E9_PALP_G_MASSETER_ORIGIN?: String,
		E9_PALP_G_PTERIGOIDIENMEDIAL?: String,
		E9_PALP_G_TEMPORAL_ANTERIOR?: String,
		E9_PALP_G_TEMPORAL_MIDDLE?: String,
		E9_PALP_G_TEMPORAL_POSTERIOR?: String,
		E9_PL_DH_D?: String,
		E9_PL_DH_G?: String,
		E9_PL_DOU_REF_D?: String,
		E9_PL_DOU_REF_G?: String,
		E9_PL_MTH_D?: String,
		E9_PL_MTH_G?: String,
		E9_PALP_MT_D_TEMPORAL_ANTERIOR?: String,
		E9_PALP_MT_D_TEMPORAL_MIDDLE?: String,
		E9_PALP_MT_D_TEMPORAL_POSTERIOR?: String,
		E9_PALP_MT_G_TEMPORAL_ANTERIOR?: String,
		E9_PALP_MT_G_TEMPORAL_MIDDLE?: String,
		E9_PALP_MT_G_TEMPORAL_POSTERIOR?: String,
		E10_REG_MAND_DOUL_D?: String,
		E10_REG_MAND_DOUL_G?: String,
		E10_REG_MAND_DOUL_HAB_D?: String,
		E10_REG_MAND_DOUL_HAB_G?: String,
		E10_REG_MAND_DOUL_REF_D?: String,
		E10_REG_MAND_DOUL_REF_G?: String,
		E10_REG_PTER_DOUL_D?: String,
		E10_REG_PTER_DOUL_G?: String,
		E10_REG_PTER_DOUL_HAB_D?: String,
		E10_REG_PTER_DOUL_HAB_G?: String,
		E10_REG_PTER_DOUL_REF_D?: String,
		E10_REG_PTER_DOUL_REF_G?: String,
		E10_REG_SOUS_DOUL_D?: String,
		E10_REG_SOUS_DOUL_G?: String,
		E10_REG_SOUS_DOUL_HAB_D?: String,
		E10_REG_SOUS_DOUL_HAB_G?: String,
		E10_REG_SOUS_DOUL_REF_D?: String,
		E10_REG_SOUS_DOUL_REF_G?: String,
		E10_TEND_DOUL_D?: String,
		E10_TEND_DOUL_G?: String,
		E10_TEND_DOUL_HAB_D?: String,
		E10_TEND_DOUL_HAB_G?: String,
		E10_TEND_DOUL_REF_D?: String,
		E10_TEND_DOUL_REF_G?: String,
		E11_AD?: String,
		E11_ATMD?: String,
		E11_ATMG?: String,
		E11_DATMD?: String,
		E11_DATMG?: String,
		E11_DD?: String,
		E11_MTAD?: String,
		E11_MYO_D_D?: String,
		E11_MYO_D_G?: String,
		E11_MYO_M_D?: String,
		E11_MYO_M_G?: String,
		E11_MYO_T_D?: String,
		E11_MYO_T_G?: String,
		E11_MY_D_D?: String,
		E11_MY_D_G?: String,
		E11_MY_M_D?: String,
		E11_MY_M_G?: String,
		E11_MY_P_D?: String,
		E11_MY_P_G?: String,
		E11_MY_T_D? : String,
		E11_MY_T_G?: String,
		E11_NO?: String,
		E12?: String,
		E13_ET?: String,
		E13_HYP?: String,
		E13_KIN?: String,
		E13_OO?: String,
		E13_TB?: String,
		E13_TCC?: String,
		E13_TP?: String,
		E13_Trait?: String,
		COMMENT?:string,
		MD_MOR_D_ATM?: String,
		MD_MOR_D_DIGASTRIQUEPOS?: String,
		MD_MOR_D_MASSETER_BODY?: String,
		MD_MOR_D_MASSETER_INSERTION?: String,
		MD_MOR_D_MASSETER_ORIGIN?: String,
		MD_MOR_D_PTERIGOIDIENMEDIAL?: String,
		MD_MOR_D_TEMPORAL_ANTERIOR?: String,
		MD_MOR_D_TEMPORAL_MIDDLE?: String,
		MD_MOR_D_TEMPORAL_POSTERIOR?: String,
		MD_MOR_G_ATM?: String,
		MD_MOR_G_DIGASTRIQUEPOS?: String,
		MD_MOR_G_MASSETER_BODY?: String,
		MD_MOR_G_MASSETER_ORIGIN?: String,
		MD_MOR_G_PTERIGOIDIENMEDIAL?: String,
		MD_MOR_G_TEMPORAL_ANTERIOR?: String,
		MD_MOR_G_TEMPORAL_MIDDLE?: String,
		MD_MOR_G_TEMPORAL_POSTERIOR?: String,
		MD_MOR_G_MASSETER_INSERTION?: String,
		MD1?:string,
		DC1?:string,
		DC2?:string,
		DC3?:string,
		DC4?:string,
		DC5?:string,
		DC6?:string,
		DC7?:string,
		DC8?:string,
		FM81?:string,
		FM82?:string,
		FM83?:string,
		FM84?:string,
		FM85?:string,
		FM86?:string,
		FM87?:string,
		FM88?:string,
		FM201?:string,
		FM202?:string,
		FM203?:string,
		FM204?:string,
		FM205?:string,
		FM206?:string,
		FM207?:string,
		FM208?:string,
		FM209?:string,
		FM2010?:string,
		FM2011?:string,
		FM2012?:string,
		PHQ41?:string,
		PHQ42?:string,
		PHQ43?:string,
		PHQ44?:string,
		PHQ91?:string,
		PHQ92?:string,
		PHQ93?:string,
		PHQ94?:string,
		PHQ95?:string,
		PHQ96?:string,
		PHQ97?:string,
		PHQ151?:string,
		PHQ152?:string,
		PHQ153?:string,
		PHQ154?:string,
		PHQ155?:string,
		PHQ156?:string,
		PHQ157?:string,
		PHQ158?:string,
		PHQ159?:string,
		PHQ1510?:string,
		PHQ1511?:string,
		PHQ1512?:string,
		PHQ1513?:string,
		PHQ1514?:string,
		PHQ1515?:string,
		GAD1?:string,
		GAD2?:string,
		GAD3?:string,
		GAD4?:string,
		GAD5?:string,
		GAD6?:string,
		GAD7?:string,
		OBC1?:string,
		OBC2?:string,
		OBC3?:string,
		OBC4?:string,
		OBC5?:string,
		OBC6?:string,
		OBC7?:string,
		OBC8?:string,
		OBC9?:string,
		OBC10?:string,
		OBC11?:string,
		OBC12?:string,
		OBC13?:string,
		OBC14?:string,
		OBC15?:string,
		OBC16?:string,
		OBC17?:string,
		OBC18?:string,
		OBC19?:string,
		OBC20?:string,
		OBC21?:string
      }
}

export const res: ExamResultInterface =  {
	"questions": {
		"FIRST_NAME": "Jean clément",
		"LAST_NAME": "Cadel15",
		"SEXE": "Femme",
		"AGE": "25",
		"DD1": "La douleur apparait et disparait",
		"DD2": "Non",
		"DD3A": "Oui",
		"DD3B": "Oui",
		"DD3C": "Oui",
		"DD3D": "Oui",
		"QS1": "Oui",
		"QS2": "3",
		"QS3": "Douleur qui vient et part",
		"QS4A": "Oui",
		"QS4B": "Oui",
		"QS4C": "Oui",
		"QS5": "Non",
		"QS6": "0",
		"QS7A": "Non",
		"QS7B": "Non",
		"QS7C": "Non",
		"QS7D": "Non",
		"QS8": "Oui",
		"QS8E": "G",
		"QS9": "Oui",
		"QS9E": "G",
		"QS10": "Oui",
		"QS10E": "G",
		"QS11": "Oui",
		"QS11E": "G",
		"QS12": "Non",
		"QS12E": "NSP",
		"QS13": "Non",
		"QS13E": "NSP",
		"QS14": "Non",
		"QS14E": "NSP",
		"DEMO1": "Jamais marié(e)",
		"DEMO2": "Toulouse",
		"DEMO3": "Professions libérales et assimilés",
		"DEMO4": "Universitaire 2e ou 3e cycle",
		"E1B_D": "Non",
		"E1B_G": "Autre",
		"E1_DOUL_D_ATM": "NA",
		"E1_DOUL_D_DIGASTRIQUEPOS": "NA",
		"E1_DOUL_D_MASSETER_BODY": "NA",
		"E1_DOUL_D_MASSETER_INSERTION": "NA",
		"E1_DOUL_D_MASSETER_ORIGIN": "NA",
		"E1_DOUL_D_PTERIGOIDIENMEDIAL": "NA",
		"E1_DOUL_D_TEMPORAL_ANTERIOR": "NA",
		"E1_DOUL_D_TEMPORAL_MIDDLE": "NA",
		"E1_DOUL_D_TEMPORAL_POSTERIOR": "NA",
		"E1_DOUL_G_ATM": "NA",
		"E1_DOUL_G_DIGASTRIQUEPOS": "NA",
		"E1_DOUL_G_MASSETER_BODY": "NA",
		"E1_DOUL_G_MASSETER_INSERTION": "NA",
		"E1_DOUL_G_MASSETER_ORIGIN": "NA",
		"E1_DOUL_G_PTERIGOIDIENMEDIAL": "NA",
		"E1_DOUL_G_TEMPORAL_ANTERIOR": "NA",
		"E1_DOUL_G_TEMPORAL_MIDDLE": "NA",
		"E1_DOUL_G_TEMPORAL_POSTERIOR": "NA",
		"E2DIST_H": "2",
		"E2DIST_MEDIA": "2",
		"E2DIST_V": "2",
		"E2NEG_H": "negatif",
		"E2NEG_V": "negatif",
		"E2REF": "Aucune",
		"E4A": "30",
		"E4B": "35",
		"E4C": "40",
		"E4D": "N",
		"E4_MA_D_ATM": "NA",
		"E4_MA_D_DIGASTRIQUEPOS": "NA",
		"E4_MA_D_MASSETER_BODY": "NA",
		"E4_MA_D_MASSETER_INSERTION": "NA",
		"E4_MA_D_MASSETER_ORIGIN": "NA",
		"E4_MA_D_PTERIGOIDIENMEDIAL": "NA",
		"E4_MA_D_TEMPORAL_ANTERIOR": "NA",
		"E4_MA_D_TEMPORAL_MIDDLE": "NA",
		"E4_MA_D_TEMPORAL_POSTERIOR": "NA",
		"E4_MA_G_ATM": "DH",
		"E4_MA_G_DIGASTRIQUEPOS": "NA",
		"E4_MA_G_MASSETER_BODY": "NA",
		"E4_MA_G_MASSETER_INSERTION": "NA",
		"E4_MA_G_MASSETER_ORIGIN": "NA",
		"E4_MA_G_PTERIGOIDIENMEDIAL": "NA",
		"E4_MA_G_TEMPORAL_ANTERIOR": "NA",
		"E4_MA_G_TEMPORAL_MIDDLE": "NA",
		"E4_MA_G_TEMPORAL_POSTERIOR": "NA",
		"E4_MS_D_ATM": "NA",
		"E4_MS_D_DIGASTRIQUEPOS": "NA",
		"E4_MS_D_MASSETER_BODY": "NA",
		"E4_MS_D_MASSETER_INSERTION": "NA",
		"E4_MS_D_MASSETER_ORIGIN": "NA",
		"E4_MS_D_PTERIGOIDIENMEDIAL": "NA",
		"E4_MS_D_TEMPORAL_ANTERIOR": "NA",
		"E4_MS_D_TEMPORAL_MIDDLE": "NA",
		"E4_MS_D_TEMPORAL_POSTERIOR": "NA",
		"E4_MS_G_ATM": "DH",
		"E4_MS_G_DIGASTRIQUEPOS": "NA",
		"E4_MS_G_MASSETER_BODY": "NA",
		"E4_MS_G_MASSETER_INSERTION": "NA",
		"E4_MS_G_MASSETER_ORIGIN": "NA",
		"E4_MS_G_PTERIGOIDIENMEDIAL": "NA",
		"E4_MS_G_TEMPORAL_ANTERIOR": "NA",
		"E4_MS_G_TEMPORAL_MIDDLE": "NA",
		"E4_MS_G_TEMPORAL_POSTERIOR": "NA",
		"E5A": "7",
		"E5B": "10",
		"E5C": "8",
		"E5D": "N",
		"E5_LD_D_ATM": "NA",
		"E5_LD_D_DIGASTRIQUEPOS": "NA",
		"E5_LD_D_MASSETER_BODY": "NA",
		"E5_LD_D_MASSETER_INSERTION": "NA",
		"E5_LD_D_MASSETER_ORIGIN": "NA",
		"E5_LD_D_PTERIGOIDIENMEDIAL": "NA",
		"E5_LD_D_TEMPORAL_ANTERIOR": "NA",
		"E5_LD_D_TEMPORAL_MIDDLE": "NA",
		"E5_LD_D_TEMPORAL_POSTERIOR": "NA",
		"E5_LD_G_ATM": "DH",
		"E5_LD_G_DIGASTRIQUEPOS": "NA",
		"E5_LD_G_MASSETER_BODY": "NA",
		"E5_LD_G_MASSETER_INSERTION": "NA",
		"E5_LD_G_MASSETER_ORIGIN": "NA",
		"E5_LD_G_PTERIGOIDIENMEDIAL": "NA",
		"E5_LD_G_TEMPORAL_ANTERIOR": "NA",
		"E5_LD_G_TEMPORAL_MIDDLE": "NA",
		"E5_LD_G_TEMPORAL_POSTERIOR": "NA",
		"E5_LG_D_ATM": "NA",
		"E5_LG_D_DIGASTRIQUEPOS": "NA",
		"E5_LG_D_MASSETER_BODY": "NA",
		"E5_LG_D_MASSETER_INSERTION": "NA",
		"E5_LG_D_MASSETER_ORIGIN": "NA",
		"E5_LG_D_PTERIGOIDIENMEDIAL": "NA",
		"E5_LG_D_TEMPORAL_ANTERIOR": "NA",
		"E5_LG_D_TEMPORAL_MIDDLE": "NA",
		"E5_LG_D_TEMPORAL_POSTERIOR": "NA",
		"E5_LG_G_ATM": "NA",
		"E5_LG_G_DIGASTRIQUEPOS": "NA",
		"E5_LG_G_MASSETER_BODY": "NA",
		"E5_LG_G_MASSETER_INSERTION": "NA",
		"E5_LG_G_MASSETER_ORIGIN": "NA",
		"E5_LG_G_PTERIGOIDIENMEDIAL": "NA",
		"E5_LG_G_TEMPORAL_ANTERIOR": "NA",
		"E5_LG_G_TEMPORAL_MIDDLE": "NA",
		"E5_LG_G_TEMPORAL_POSTERIOR": "NA",
		"E5_PI_D_ATM": "NA",
		"E5_PI_D_DIGASTRIQUEPOS": "NA",
		"E5_PI_D_MASSETER_BODY": "NA",
		"E5_PI_D_MASSETER_INSERTION": "NA",
		"E5_PI_D_MASSETER_ORIGIN": "NA",
		"E5_PI_D_PTERIGOIDIENMEDIAL": "NA",
		"E5_PI_D_TEMPORAL_ANTERIOR": "NA",
		"E5_PI_D_TEMPORAL_MIDDLE": "NA",
		"E5_PI_D_TEMPORAL_POSTERIOR": "NA",
		"E5_PI_G_ATM": "DH",
		"E5_PI_G_DIGASTRIQUEPOS": "NA",
		"E5_PI_G_MASSETER_BODY": "NA",
		"E5_PI_G_MASSETER_INSERTION": "NA",
		"E5_PI_G_MASSETER_ORIGIN": "NA",
		"E5_PI_G_PTERIGOIDIENMEDIAL": "NA",
		"E5_PI_G_TEMPORAL_ANTERIOR": "NA",
		"E5_PI_G_TEMPORAL_MIDDLE": "NA",
		"E5_PI_G_TEMPORAL_POSTERIOR": "NA",
		"E6_CRAQ_FERM_D": "N",
		"E7_CRAQ_DOUL_G": "Y",
		"E7_CREP_DOUL_HAB_G": "N",
		"E6_CREP_OUV_G": "N",
		"E6_CREP_DOUL_G": "N",
		"E7_CRAQ_FERM_D": "N",
		"E7_CREP_DOUL_G": "N",
		"E6_CREP_DOUL_D": "N",
		"E6_CREP_OUV_D": "N",
		"E6_CREP_DOUL_HAB_G": "N",
		"E6_CREP_DOU_HAB_D": "N",
		"E6_CRAQ_OUV_G": "Y",
		"E7_CRAQ_FERM_G": "Y",
		"E6_CRAQ_DOUL_D": "N",
		"E6_CRAQ_DOUL_G": "Y",
		"E6_CREP_PAT_G": "N",
		"E6_CRAQ_PAT_D": "N",
		"E6_CRAQ_FERM_G": "Y",
		"E7_CRAQ_OUV_D": "N",
		"E7_CREP_PAT_D": "N",
		"E6_CREP_FERM_G": "N",
		"E7_CREP_DOUL_D": "N",
		"E7_CRAQ_PAT_G": "Y",
		"E7_CREP_FERM_G": "N",
		"E6_CRAQ_DOUL_HAB_D": "N",
		"E6_CREP_PAT_D": "N",
		"E6_CRAQ_PAT_G": "Y",
		"E7_CRAQ_OUV_G": "Y",
		"E6_CRAQ_OUV_D": "N",
		"E7_CREP_OUV_D": "N",
		"E7_CRAQ_PAT_D": "N",
		"E7_CRAQ_DOUL_HAB_D": "N",
		"E7_CREP_DOUL_HAB_D": "N",
		"E7_CREP_FERM_D": "N",
		"E6_CRAQ_DOUL_HAB_G": "Y",
		"E7_CRAQ_DOUL_D": "N",
		"E6_CREP_FERM_D": "N",
		"E7_CREP_PAT_G": "N",
		"E7_CREP_OUV_G": "N",
		"E7_CRAQ_DOUL_HAB_G": "Y",
		"E8_OUVERT_BLOC_D": "N",
		"E8_OUVERT_PAT_D": "N",
		"E8_OUVERT_EXAM_D": "N",
		"E8_OUVRANT_EXAM_G": "Y",
		"E8_OUVERT_EXAM_G": "N",
		"E8_OUVERT_PAT_G": "N",
		"E8_OUVERT_BLOC_G": "N",
		"E8_OUVRANT_PAT_G": "Y",
		"E8_OUVRANT_BLOC_D": "N",
		"E8_OUVRANT_EXAM_D": "N",
		"E8_OUVRANT_BLOC_G": "Y",
		"E8_OUVRANT_PAT_D": "N",
		"E9_AL_DH_D": "N",
		"E9_AL_DH_G": "Y",
		"E9_AL_DOU_REF_D": "N",
		"E9_AL_MTH_D": "N",
		"E9_AL_MTH_G": "N",
		"E9_PALP_D_ATM": "NA",
		"E9_PALP_D_DIGASTRIQUEPOS": "NA",
		"E9_PALP_D_MASSETER_BODY": "NA",
		"E9_PALP_D_MASSETER_INSERTION": "NA",
		"E9_PALP_D_MASSETER_ORIGIN": "NA",
		"E9_PALP_D_PTERIGOIDIENMEDIAL": "NA",
		"E9_PALP_D_TEMPORAL_ANTERIOR": "NA",
		"E9_PALP_D_TEMPORAL_MIDDLE": "NA",
		"E9_PALP_D_TEMPORAL_POSTERIOR": "NA",
		"E9_PALP_G_ATM": "DH",
		"E9_PALP_G_DIGASTRIQUEPOS": "NA",
		"E9_PALP_G_MASSETER_BODY": "NA",
		"E9_PALP_G_MASSETER_INSERTION": "NA",
		"E9_PALP_G_MASSETER_ORIGIN": "NA",
		"E9_PALP_G_PTERIGOIDIENMEDIAL": "NA",
		"E9_PALP_G_TEMPORAL_ANTERIOR": "NA",
		"E9_PALP_G_TEMPORAL_MIDDLE": "NA",
		"E9_PALP_G_TEMPORAL_POSTERIOR": "NA",
		"E9_PL_DH_D": "N",
		"E9_PL_DH_G": "Y",
		"E9_PL_DOU_REF_D": "N",
		"E9_PL_DOU_REF_G": "N",
		"E9_PL_MTH_D": "N",
		"E9_PL_MTH_G": "N",
		"E10_REG_MAND_DOUL_D": "N",
		"E10_REG_MAND_DOUL_G": "N",
		"E10_REG_MAND_DOUL_HAB_D": "N",
		"E10_REG_MAND_DOUL_HAB_G": "N",
		"E10_REG_MAND_DOUL_REF_D": "N",
		"E10_REG_MAND_DOUL_REF_G": "N",
		"E10_REG_PTER_DOUL_D": "N",
		"E10_REG_PTER_DOUL_G": "Y",
		"E10_REG_PTER_DOUL_HAB_D": "N",
		"E10_REG_PTER_DOUL_HAB_G": "Y",
		"E10_REG_PTER_DOUL_REF_D": "N",
		"E10_REG_PTER_DOUL_REF_G": "N",
		"E10_REG_SOUS_DOUL_D": "N",
		"E10_REG_SOUS_DOUL_G": "N",
		"E10_REG_SOUS_DOUL_HAB_D": "N",
		"E10_REG_SOUS_DOUL_HAB_G": "N",
		"E10_REG_SOUS_DOUL_REF_D": "N",
		"E10_REG_SOUS_DOUL_REF_G": "N",
		"E10_TEND_DOUL_D": "N",
		"E10_TEND_DOUL_G": "N",
		"E10_TEND_DOUL_HAB_D": "N",
		"E10_TEND_DOUL_HAB_G": "N",
		"E10_TEND_DOUL_REF_D": "N",
		"E10_TEND_DOUL_REF_G": "N",
		"E11_AD": "Y",
		"E11_ATMD": "N",
		"E11_ATMG": "DEP_REDUC_BLOC",
		"E11_MTAD": "N",
		"E11_MYO_D_D": "N",
		"E11_MYO_D_G": "N",
		"E11_MYO_M_D": "N",
		"E11_MYO_M_G": "N",
		"E11_MYO_T_D": "N",
		"E11_MYO_T_G": "N",
		"E11_MY_D_D": "N",
		"E11_MY_D_G": "N",
		"E11_MY_M_D": "N",
		"E11_MY_M_G": "N",
		"E11_MY_P_D": "N",
		"E11_MY_P_G": "N",
		"E11_MY_T_D": "N",
		"E11_MY_T_G": "N",
		"E11_NO": "N",
		"E13_ET": "Y",
		"E13_HYP": "N",
		"E13_KIN": "N",
		"E13_OO": "Y",
		"E13_TB": "N",
		"E13_TCC": "N",
		"E13_TP": "N",
		"MD_MOR_D_ATM": "NA",
		"MD_MOR_D_DIGASTRIQUEPOS": "NA",
		"MD_MOR_D_MASSETER_BODY": "NA",
		"MD_MOR_D_MASSETER_INSERTION": "NA",
		"MD_MOR_D_MASSETER_ORIGIN": "NA",
		"MD_MOR_D_PTERIGOIDIENMEDIAL": "NA",
		"MD_MOR_D_TEMPORAL_ANTERIOR": "NA",
		"MD_MOR_D_TEMPORAL_MIDDLE": "NA",
		"MD_MOR_D_TEMPORAL_POSTERIOR": "NA",
		"MD_MOR_G_ATM": "D",
		"MD_MOR_G_DIGASTRIQUEPOS": "NA",
		"MD_MOR_G_MASSETER_BODY": "NA",
		"MD_MOR_G_MASSETER_ORIGIN": "NA",
		"MD_MOR_G_PTERIGOIDIENMEDIAL": "NA",
		"MD_MOR_G_TEMPORAL_ANTERIOR": "NA",
		"MD_MOR_G_TEMPORAL_MIDDLE": "NA",
		"MD_MOR_G_TEMPORAL_POSTERIOR": "NA",
		"MD_MOR_G_MASSETER_INSERTION": "NA",
		"MD1": "30",
		"DC1": "30",
		"DC2": "0",
		"DC3": "0",
		"DC4": "5",
		"DC5": "0",
		"DC6": "2",
		"DC7": "2",
		"DC8": "0",
		"FM81": "6",
		"FM82": "4",
		"FM83": "2",
		"FM84": "5",
		"FM85": "0",
		"FM86": "7",
		"FM87": "0",
		"GAD1": "0",
		"GAD2": "2",
		"GAD3": "3",
		"GAD4": "2",
		"GAD5": "1",
		"GAD6": "2",
		"GAD7": "3",
		"PHQ41": "0",
		"PHQ42": "0",
		"PHQ43": "0",
		"PHQ44": "0",
		"PHQ94": "0",
		"OBC1": "1-3 Nuit/semaine",
		"OBC2": "Jamais",
		"OBC3": "Jamais",
		"OBC4": "La pluspart du temps",
		"OBC5": "La pluspart du temps",
		"OBC6": "La pluspart du temps",
		"OBC7": "La pluspart du temps",
		"OBC8": "Jamais",
		"OBC9": "Jamais",
		"OBC10": "Jamais",
		"OBC11": "Jamais",
		"OBC12": "Jamais",
		"OBC13": "Un peu de temps",
		"OBC14": "Jamais",
		"OBC15": "Jamais",
		"OBC16": "La pluspart du temps",
		"OBC17": "Un peu de temps",
		"OBC18": "Un peu de temps",
		"OBC19": "Jamais",
		"OBC20": "Une partie du temps",
		"OBC21": "Un peu de temps"
	},
	"patientID": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImZpcnN0TG9nSW4iOmZhbHNlLCJfaWQiOiI1Y2ExOTVmZjUxZGEzMDBjNDA2YjBkYzIiLCJyb2xlIjp7Il9pZCI6IjVjYTE5NGQ0MzVkNGY0NTk5MDcwMmM3NyIsIm5hbWUiOiJzdXBlci1hZG1pbiIsIl9fdiI6MH0sInVzZXJuYW1lIjoic3VwZXItYWRtaW4iLCJfX3YiOjB9LCJpYXQiOjE1NzMzODAzMTJ9.-gQ-kt0E6IRYLUGOb9jFqDE6VQCk0LC5ApVuIuO4QnA"
}