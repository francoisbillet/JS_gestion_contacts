function options() {
	console.log("1 : Lister les contacts");
	console.log("2 : Ajouter un contact");
	console.log("0 : Quitter");
}

class Contact {
	constructor(prenom, nom) {
		this.prenom = prenom;
		this.nom = nom;
	}
	afficherContact() {
		console.log(`Nom : ${this.nom}, prénom : ${this.prenom} `);
	}

}

caroleLevisse = new Contact("Carole", "Lévisse");
melodieNelsonne = new Contact("Mélodie", "Nelsonne");

let contacts = [];
contacts.push(caroleLevisse);
contacts.push(melodieNelsonne);

console.log("Bienvenue dans le gestionnaire des contacts !");

let value=3;
while (value!=0) {
	options();
	value = prompt("Choisissez une option :");
	if (value == 1) {
		console.log("Voici la liste de tous vos contacts :");
		contacts.forEach(contact => {
			contact.afficherContact();
		});
	}
	else if (value == 2) {
		const nom = prompt("Entrez le nom du nouveau contact :");
		const prenom = prompt("Entrez le prénom du nouveau contact :");
		contact = new Contact(nom, prenom);
		contacts.push(contact);
		console.log("Le nouveau contact a été ajouté");
	}
	console.log("\n");
}