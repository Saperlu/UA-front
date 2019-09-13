/* eslint-disable max-len */
import React from 'react';

const faq = [
  {
    title: 'Général',
    entries: [
      {
        question: 'Quand commencent les tournois ?',
        answer: 'Tous les tournois commencent le samedi à 10h.',
      },
      {
        question: 'Puis-je jouer à la manette ?',
        answer: 'Oui.',
      },
      {
        question: 'Puis-je streamer pendant la LAN ?',
        answer: 'Bien-sûr ! Mais il faudra dans un premier temps se déclarer auprès des organisateurs. De plus, l’équipe organisatrice se réserve le droit de te refuser de faire du stream.',
      },
      {
        question: 'Où puis-je trouver des joueurs pour mon équipe ?',
        answer: "Sur le discord de l'UTT Arena tu trouveras sûrement d'autres joueurs qui cherchent une équipe. Tu peux trouver le lien du discord en bas du site.",
      },
    ],
  },
  {
    title: 'Inscription',
    entries: [
      {
        question: 'Quelle place doivent acheter les coachs/managers de mon équipe ?',
        answer: "Les coachs et managers d'équipes doivent acheter une place visiteur.",
      },
      {
        question: 'Combien coûte la LAN pour les joueurs et les accompagnateurs ?',
        answer: 'La LAN coûte 15€ pour tous les joueurs, avec une réduction de 5€ pour les écoles partenaires. La place accompagnateur/visiteur est à 6€.',
      },
      {
        question: "Je me suis inscrit et je n'ai pas reçu mon mail de confirmation",
        answer:
  <>
    Si lors de votre inscription votre adresse e-mail est rejetée, cela peut être dû à trois choses:
    <ul>
      <li>On ne peut pas avoir plus d&apos;un compte par mail</li>
      <li>Cet e-mail a été banni. Contactez les organisateurs afin d&apos;en savoir plus.</li>
      <li>Vous vous êtes trompé lors de la saisie de votre adresse mail. Contactez les organisateurs grâce au formulaire de contact.</li>
    </ul>
  </>,
      },
      {
        question: "Quel est l'âge minimum pour la LAN ?",
        answer:
  <>
    15 ans. Pour les mineurs, une autorisation parentale ou du responsable légal sera demandée le jour de la LAN.
    <br />
    <a href="https://drive.google.com/file/d/1w15X9dXEaqkEQjqLNkXL_OZhDC7SIs2V/view">Vous pouvez la télécharger ici.</a>
  </>,
      },
    ],
  },
  {
    title: 'Paiement',
    entries: [
      {
        question: 'Puis-je payer en espèces ?',
        answer: 'Il sera possible de payer en espèces sur place, mais à tes risques et périls, car il y a de fortes chances que toutes les places soient déjà parties.',
      },
      {
        question: 'Puis-je payer par PayPal ?',
        answer: 'Non, sur le site, seul le paiement par carte bancaire est disponible.',
      },
      {
        question: 'Est ce que je peux payer pour toute mon équipe ?',
        answer: 'Non, chacun doit payer sa place.',
      },
    ],
  },
  {
    title: 'Déroulement des tournois',
    entries: [
      {
        question: 'Puis-je jouer à Fortnite sur PS4 ?',
        answer: 'Non, seuls les PCs sont autorisés.',
      },
    ],
  },
  {
    title: 'Tournoi Super Smash Bros Ultimate',
    entries: [
      {
        question: 'Dois-je ramener ma console ?',
        answer: 'Non, nous fournissons tout le matériel.',
      },
      {
        question: 'Puis-je ramener mon PC ?',
        answer: "Non, vous n'aurez pas de place attribuée.",
      },
    ],
  },
];

export default faq;