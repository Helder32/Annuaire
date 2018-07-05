var annuaire = 
[
{
  Nom: 'Ahmed',
  Prenom: 'Dania',
  Email:'94daniak@live.fr',
  Ville: 'Auch',
  téléphone: '06.18.86.01.78'
  
},

{
  Nom: 'Badji',
  Prenom: 'Adeline',
  Email:'adeline.contact@gmail.com',
  Ville: 'Auch',
  téléphone: '06.84.62.33.30'
},

{
  Nom: 'Cano-Simon',
  Prenom: 'Luc',
  Email:'luc.cano@hotmail.fr',
  Ville: 'Fleurance',
  téléphone: '06.89.02.63.87'
},

{
  Nom: 'Chirot',
  Prenom: 'Aurelien',
  Email:'achirot@simplon.co',
  Ville: 'Auch',
  téléphone: ' 06.77.13.21.22'
},

{
  Nom: 'Clerc',
  Prenom: 'Nathan',
  Email:'clerc-nathan@hotmail.fr',
  Ville: 'Beaupuy',
  téléphone: '06 95 65 08 23'
},

{
  Nom: 'Gatien',
  Prenom: 'Océane',
  Email:'ogatien@simplon.co',
  Ville: 'Polastron',
  téléphone: '06.42.48.98.08'
},

{
  Nom: 'Gouzenne',
  Prenom: 'Dylan',
  Email:'dylan.gouzenne@gmail.com',
  Ville: 'Marciac',
  téléphone: '06.69.70.58.13'
},

{
  Nom: 'Kurowski',
  Prenom: 'Alexandra',
  Email:'alexandrakuro@gmail.com',
  Ville: 'Auch',
  téléphone: '06.61.52.19.76'
},

{
  Nom: 'Lasportes',
  Prenom: 'Nicolas',
  Email:'nicolas.lasportes@gmail.com',
  Ville: 'Saint Sauvy',
  téléphone: '06.95.57.69.37'
},

{
  Nom: 'Lupi',
  Prenom: 'Marc',
  Email:'marc.lupi@protonmail.com',
  Ville: 'Auch',
  téléphone: '07.82.10.80.37'
},

{
  Nom: 'Morais',
  Prenom: 'Helder',
  Email:'morais.helder@hotmail.fr',
  Ville: 'Auch',
  téléphone: '06.15.77.07.42'
},

{
  Nom: 'Oliveira Ribeiro',
  Prenom: 'Marco',
  Email:'marcorib1@hotmail.com',
  Ville: 'Auch',
  téléphone: '06.15.28.88.63'
},

{
  Nom: 'Philippe',
  Prenom: 'Jonathan',
  Email:'philippe1jonathan@gmail.com',
  Ville: 'Aubiet',
  téléphone: '06.12.39.50.35'
},

{
  Nom: 'Sandras',
  Prenom: 'Benjamin',
  Email:'bensand77@hotmail.fr',
  Ville: 'Auch',
  téléphone: '07.83.86.63.53'
},

{
  Nom: 'Segond',
  Prenom: 'Zakia',
  Email:'segondzakia@live.fr',
  Ville: 'Auch',
  téléphone: '07.88.75.74.92'
},

{
  Nom: 'Taha',
  Prenom: 'Max',
  Email:'tahamohamedfr@gmail.com',
  Ville: 'Toulouse',
  téléphone: '07.53.30.17.28'
},

{
  Nom: 'Zarik',
  Prenom: 'Houssine',
  Email:'houssine.zarrik@orange.fr',
  Ville: 'Castera-Verduzan',
  téléphone: '07.85.70.24.93'
},
];

for (var i = 0; i<annuaire.length; i++)
{
  $(".table").append('<tr><td>'+annuaire[i].Nom+'</td><td>'+annuaire[i].Prenom+'</td><td>'+annuaire[i].Email+'</td><td>'+annuaire[i].téléphone+'</td></tr>');
}
