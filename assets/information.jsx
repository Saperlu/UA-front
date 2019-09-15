/* eslint-disable max-len */
import React from 'react';
import Link from 'next/link';

import { Title } from '../components';

export default {
  presentation: (
    <>
      L'<span className="accent">UTT Arena</span> (UA) est le plus gros événement de l'association <span className="accent"><Link href="https://ung.utt.fr">UTT Net Group</Link></span> (UNG) en matière d'esport.
      L'UNG a été créée en 1998 pour rassembler tous les passionnés d'informatique et des nouvelles technologies de l'Université de Technologie de Troyes (UTT).<br /><br />
      L'UTT Arena revient cette année pour sa <span className="accent">17<sup>ème</sup> édition</span> !
      D'une simple salle d'examen de l'UTT à 1500m² au cœur du Festival des Jeux, l'UTT Arena a évolué de manière à proposer chaque année des tournois de meilleure qualité à ses joueurs !<br /><br />

      À présent l'UTT Arena c'est <span className="accent">460 joueurs</span>, <span className="accent">5 tournois spotlights</span>, une scène de <span className="accent">70 m²</span> et plus d'une <span className="accent">centaine</span> de bénévoles !
      Et tout cela, c'est grâce à vous, les joueurs, coachs, visiteurs, qui nous faites confiance chaque année pour organiser cet événement dans l'ambiance qu'on lui connaît !
      C'est aussi grâce à tous nos partenaires qui nous soutiennent chaque année dans l'organisation de la LAN !
    </>
  ),
  tickets: (
    <>
      Il sera possible d'acheter une place courant octobre.
      <ul>
        <li>Il faut d'abord s'inscrire (bouton "Connexion" dans la barre de navigation)</li>
        <li>Ensuite, il faut payer sa place</li>
        <li>Cette année, le paiement groupé est possible</li>
        <li>Le paiement se fait uniquement par carte bancaire sur le site</li>
      </ul>

      Les tarifs sont les suivants :
      <ul>
        <li>Joueur : 20€</li>
        <li>Accompagnateur : 12€ (limité à 40 places)</li>
      </ul>
    </>
  ),
  playersInfo: (
    <>
      <strong className="accent">Rappel : l'âge minimum pour participer au tournoi est de 15 ans.</strong><br />

      <Title level={4}>Joueur mineur</Title>
      <p>Une autorisation parentale sera demandée lors de l'événement. Elle sera bientôt disponible sur notre site pour que tu puisses la remplir.</p>

      <Title level={4}>Ce qu'il faut apporter</Title>
      <ul>
        <li>Ton PC</li>
        <li>Ton casque</li>
        <li>Ton écran</li>
        <li>Ton clavier et ta souris</li>
        <li>Une multiprise</li>
        <li>Un câble ethernet de 5m minimum</li>
      </ul>
      <p>Nous vendons sur place des multiprises et des câbles RJ45 de 5m et 7m.</p>

      <Title level={4}>Ce qui est fourni</Title>
      <ul>
        <li>Une table ainsi qu'une place assise bien évidemment</li>
        <li>Un port ethernet pour te brancher au réseau de l'UTT Arena</li>
        <li>Une prise électrique pour y brancher ta multiprise</li>
      </ul>

      <Title level={4}>Streaming</Title>
      <p>
        Pour les joueurs souhaitant streamer pendant la LAN, il faudra en faire la demande au moins 2 semaines avant l'UTT Arena.
        Même si on te permet de streamer, nous nous réservons le droit d'empêcher le stream lors de l'événement.
      </p>
    </>
  ),
  services: (
    <>
      <Title level={4}>Nourriture</Title>
      <p>
        On sait que compétition esport de 48h non-stop ça creuse ! Nous te proposons donc un service de restauration sur place !
        Des croque-monsieur, crêpes, pizzas, boissons, snack... tout le nécessaire pour te sustenter au mieux !
        Et tout cela à un prix abordable.
      </p>

      <Title level={4}>Couchage</Title>
      <p>
        Nous mettons à disposition des joueurs des loges communes avec un accès à l'eau et aux douches !
        Pensez à ramener vos duvets si vous souhaitez vous reposer ! Nous mettrons à disposition des tapis de gym fins pour plus de confort.
      </p>

      <Title level={4}>Location de matériel</Title>
      <p>
        Grâce à notre partenaire Scoup eSport, nous vous proposons de louer du matériel gaming pour toute la durée de l'événement.
        Pour cela, choisissez votre matériel dans votre dashboard après avoir payé votre place et vous pourrez le récupérer à partir du vendredi.
      </p>
    </>
  ),
  access: (
    <>
      <p><strong>Adresse :</strong> UTT Arena, 20 rue des Gayettes, 10000 Troyes</p>

      <div className="access">
        <div>
          <iframe
            height="320"
            width="100%"
            title="Google Maps"
            src="https://maps.google.com/maps?q=UTT+Arena&t=&z=15&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          />
        </div>

        <div>
          <Title level={4}>Parking</Title>
          <p>Parking gratuit mis à disposition juste en face du Parc des Expositions</p>

          <Title level={4}>Train</Title>
          <p>Gare de Troyes à 10 min à pied du festival</p>

          <Title level={4}>Bus</Title>
          <p>Lignes 2, 6, 8 : arrêt Terrasses ou Ligne 5 : arrêt CCI</p>
        </div>
      </div>
    </>
  ),
  timetable: {
    columns: [
      { title: '', key: 'type' },
      { title: <>Vendredi&nbsp;6</>, key: 'ven' },
      { title: <>Samedi&nbsp;7</>, key: 'sam' },
      { title: <>Dimanche&nbsp;8</>, key: 'dim' },
    ],
    rows: [
      { type: <>UTT&nbsp;Arena</>, ven: '17h - 00h', sam: '00h - 00h', dim: '00h - 18h' },
      { type: <>Festival&nbsp;des&nbsp;jeux</>, ven: '11h - 21h', sam: '11h - 21h', dim: '11h - 18h' },
    ],
  },
};