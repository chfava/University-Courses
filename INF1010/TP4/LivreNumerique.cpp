/////////////////////////////////////////////////////////////////////////////////////////////////////////
//Fichier: LivreNumerique.cpp
//	Auteur(s) : Charles - Olivier Favreau et St?phanie Leclerc
//	Date de creation : 01 mars 2016
//	Date de modification : 03 mars 2016
//Description : Fonctions reli?es ? classe LivreNumerique
////////////////////////////////////////////////////////////////////////////////////////////////////////
#include "LivreNumerique.h"


using namespace std;

////////////////////////////////////////////////////////////////////////////////////////////////////////
// 
// Le constructeur par d?faut construit un objet de type LivreNum?rique
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
LivreNumerique::LivreNumerique(){

};

////////////////////////////////////////////////////////////////////////////////////////////////////////
// 
// Le constructeur par param?tres construit un objet de type LivreNum?rique avec les attributs initialis?s au valeurs des param?tres.
//@param FORMAT_DOCUMENT format (R?f?rence)
//@param unsigned int tailleOctet (R?f?rence)
//@param string lien (R?f?rence)
//@param string cote (R?f?rence)
//@param string titre (R?f?rence)
//@param unsigned int annee (R?f?rence)
//@param unsigned int ageMin (R?f?rence)
//@param unsigned int nbExemplaires (R?f?rence)
//@param string auteur (R?f?rence)
//@param string genre (R?f?rence)
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
LivreNumerique::LivreNumerique(FORMAT_DOCUMENT& format, unsigned int& tailleOctet, std::string& lien,
	const std::string& cote, const std::string& titre, unsigned int annee,
	unsigned int ageMin, unsigned int nbExemplaires, const std::string& auteur, const std::string& genre):Livre(cote,titre,annee, ageMin,nbExemplaires, auteur, genre), ObjetNumerique(){
	format_ = format;
	tailleOctet_ = tailleOctet;
	lien_ = lien;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////
// 
// Le destructeur lib?re la m?moire occup?e par un objet de type LivreNum?rique
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
LivreNumerique::~LivreNumerique(){

};

////////////////////////////////////////////////////////////////////////////////////////////////////////
// 
// Retourne l'attribut format_ d'un objet de type LivreNumerique
//@return FORMAT_DOCUMENT
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
FORMAT_DOCUMENT LivreNumerique::obtenirFormat()const{
	return format_;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////
// 
//Modifie l'attribut format_ d'un objet de type LivreNumerique
//@param FORMAT_DOCUMENT format (R?f?rence)
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
void LivreNumerique::modifierFormat(FORMAT_DOCUMENT& format){
	format_ = format;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////
// 
// Retourne l'attribut tailleOctet_ d'un objet de type LivreNumerique
//@return unsigned int
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
unsigned int LivreNumerique::obtenirTailleOctet()const{
	return tailleOctet_;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////
// 
//Modifie l'attribut tailleOctets_ d'un objet de type LivreNumerique
//@param unsigned int tailleOctet (R?f?rence)
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
void LivreNumerique::modifierTailleOctet(unsigned int tailleOctet){
	tailleOctet_ = tailleOctet;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////
// 
// Retourne l'attribut lien_ d'un objet de type LivreNumerique
//@return string
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
std::string LivreNumerique::obtenirLien()const{
	return lien_;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////
// 
//Modifie l'attribut lien_ d'un objet de type LivreNumerique
//@param string lien (R?f?rence)
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
void LivreNumerique::modifierLien(std::string& lien){
	lien_ = lien;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////
// 
// Retourne un string indiquand le type de format d'un objet de type LivreNumerique
//@return string
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
std::string LivreNumerique::obtenirFormatStr()const{
	switch (format_){
	case '0' :
		return "pdf";
		break;
	case '1' :
		return "epub";
		break;
	case '2':
		return "docx";
		break;
	case '3':
		return "txt";
		break;
	case '4':
		return "inconnu";
		break;
	}
};

////////////////////////////////////////////////////////////////////////////////////////////////////////
// 
// Recherche un mot cl? (string) ? travers les attributs d'un objet de type LivreNum?rique et retourne vrai si un r?sulat est trouv?.
//@param string motsCle (R?f?rence)
//@return bool
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
bool LivreNumerique::recherche(const std::string& motsCle) const{
	bool trouv?;
	std::size_t format = obtenirFormatStr().find(convertirMinuscule(motsCle));
	trouv? = Livre::recherche(motsCle) || (format != string::npos)  ;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////
// 
// L'op?rateur >> appelle la fonction rechercherObjetEmpruntable() en premant en param?tre un string pass? par le istream
//@param ostream in (R?f?rence)
//@param LivreNumerique livreNumerique (R?f?rence)
//@return ostream in (R?f?rence)
//
////////////////////////////////////////////////////////////////////////////////////////////////////////
ostream& operator<<(ostream& o, LivreNumerique& livreNumerique){
	o << "Objet Num?rique: Taille: " << livreNumerique.tailleOctet_ << "Lien Internet: " << livreNumerique.lien_;
	o << Livre(livreNumerique);
	return o;
};





