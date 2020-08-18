import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import MenuBar from "../utils/MenuBar";
import Button from "@material-ui/core/Button";
import { Multiselect } from 'multiselect-react-dropdown';
import axios from "axios";

const styles = theme => ({
    container: {
        display: "flex",
        flexDirection: "column"
    },
    btnQuiz: {
        backgroundColor: "#EDBA2D",
        '&:hover': {
            // textDecoration: 'underline',
            backgroundColor: "#E58F1E",
        },
    },
});

class QuizPrimaire extends Component {
    constructor(props){
        super(props);
        this.state = {
            optionsRealiste: [
                {id: 1,name: 'Fiable sérieux',cat: 'Je suis :'},
                {id: 2,name: 'Pratique', cat: 'Je suis :'},
                {id: 3,name: 'Econome', cat: 'Je suis :'},
                {id: 4,name: 'Persévérant', cat: 'Je suis :'},
                {id: 5,name: 'Réservé', cat: 'Je suis :'},
                {id: 6,name: 'Aventureux', cat: 'Je suis :'},
                {id: 7,name: 'Sportif', cat: 'Je suis :'},
                {id: 8,name: 'Terre à terre', cat: 'Je suis :'},
                {id: 9,name: 'Adroit', cat: 'Je suis :'},
                {id: 10,name: 'Autonome', cat: 'Je suis :'},
                {id: 11,name: 'Prudent', cat: 'Je suis :'},
                {id: 12,name: 'Naturel', cat: 'Je suis :'},
                {id: 13,name: 'Raisonnable', cat: 'Je suis :'},
                {id: 14,name: 'Athlétique', cat: 'Je suis :'},

                {id: 15,name: 'La force physique', cat: 'J`apprécie :'},
                {id: 16,name: 'La maitrise du métier', cat: 'J`apprécie :'},
                {id: 17,name: 'L’expertise', cat: 'J`apprécie :'},
                {id: 18,name: 'La fiabilité', cat: 'J`apprécie :'},
                {id: 19,name: 'La tradition', cat: 'J`apprécie :'},
                {id: 20,name: 'Les applications', cat: 'J`apprécie :'},
                {id: 21,name: 'Les choses utiles', cat: 'J`apprécie :'},

                {id: 22,name: 'Faire marcher les choses', cat: 'Ce que j`aime faire :'},
                {id: 23,name: 'Me dépasser physiquement', cat: 'Ce que j`aime faire :'},
                {id: 24,name: 'Etre actif, bouger', cat: 'Ce que j`aime faire :'},
                {id: 25,name: 'Construire des choses', cat: 'Ce que j`aime faire :'},
                {id: 26,name: 'Voir le résultat de mon travail', cat: 'Ce que j`aime faire :'},
                {id: 27,name: 'Utiliser les machines', cat: 'Ce que j`aime faire :'},
                {id: 28,name: 'Travailler avec précision', cat: 'Ce que j`aime faire :'},
                {id: 29,name: 'Résoudre des problèmes pratiques', cat: 'Ce que j`aime faire :'},
                {id: 30,name: 'M’entrainer physiquement', cat: 'Ce que j`aime faire :'},
                {id: 31,name: 'Assembler ou réparer des ordinateurs', cat: 'Ce que j`aime faire :'},

                {id: 32,name: 'Construire, réparer ou rénover des objets', cat: 'Je m’imaginerais bien :'},
                {id: 33,name: 'Produire des résultats tangibles', cat: 'Je m’imaginerais bien :'},
                {id: 34,name: 'Travailler de mes mains', cat: 'Je m’imaginerais bien :'},
                {id: 35,name: 'Piloter des engins lourds', cat: 'Je m’imaginerais bien :'},

            ],

            optionsInvestigateur: [
                {id: 1,name: 'Pensif',cat: 'Je suis :'},
                {id: 2,name: 'Analytique', cat: 'Je suis :'},
                {id: 3,name: 'Intellectuel', cat: 'Je suis :'},
                {id: 4,name: 'Studieux', cat: 'Je suis :'},
                {id: 5,name: 'Désireux d’apprendre', cat: 'Je suis :'},
                {id: 6,name: 'Complexe', cat: 'Je suis :'},
                {id: 7,name: 'Indépendant', cat: 'Je suis :'},
                {id: 8,name: 'Motivé déterminé', cat: 'Je suis :'},
                {id: 9,name: 'Curieux', cat: 'Je suis :'},
                {id: 10,name: 'Original', cat: 'Je suis :'},
                {id: 11,name: 'Non conformiste', cat: 'Je suis :'},
                {id: 12,name: 'Introspective', cat: 'Je suis :'},
                {id: 13,name: 'Réservé', cat: 'Je suis :'},
                {id: 14,name: 'Perspicace', cat: 'Je suis :'},
                {id: 15,name: 'Critique', cat: 'Je suis :'},
                {id: 16,name: 'Rationnel', cat: 'Je suis :'},

                {id: 17,name: 'Connaissance', cat: 'J’apprécie :'},
                {id: 18,name: 'L’indépendance', cat: 'J’apprécie :'},
                {id: 19,name: 'Les nouvelles idées', cat: 'J’apprécie :'},
                {id: 20,name: 'L’innovation', cat: 'J’apprécie :'},
                {id: 21,name: 'L’originalité', cat: 'J’apprécie :'},
                {id: 22,name: 'L’intelligence', cat: 'J’apprécie :'},
                {id: 23,name: 'De penser de façon originale', cat: 'J’apprécie :'},
                {id: 24,name: 'Les défis intellectuels', cat: 'J’apprécie :'},
                {id: 25,name: 'Résoudre des problèmes abstraits', cat: 'J’apprécie :'},

                {id: 26,name: 'Analyser', cat: 'Ce que j’aime faire :'},
                {id: 27,name: 'Me questionner sur la cause des choses', cat: 'Ce que j’aime faire :'},
                {id: 28,name: 'Rechercher la vérité', cat: 'Ce que j’aime faire :'},
                {id: 29,name: 'Chercher à comprendre le monde ou les événements', cat: 'Ce que j’aime faire :'},
                {id: 30,name: 'Mettre à jour la vérité', cat: 'Ce que j’aime faire :'},
                {id: 31,name: 'Etre stimulé intellectuellement', cat: 'Ce que j’aime faire :'},
                {id: 32,name: 'Collecter organiser des données', cat: 'Ce que j’aime faire :'},
                {id: 33,name: 'Calculer', cat: 'Ce que j’aime faire :'},
                {id: 34,name: 'Apprendre des faits des principes', cat: 'Ce que j’aime faire :'},

                {id: 35,name: 'travailler de façon indépendante', cat: 'Je m’imaginerais bien :'},
                {id: 36,name: 'enseigner', cat: 'Je m’imaginerais bien :'},
                {id: 37,name: 'concevoir', cat: 'Je m’imaginerais bien :'},
                {id: 38,name: 'faire de la recherche', cat: 'Je m’imaginerais bien :'},
                {id: 39,name: 'résoudre des problèmes abstraits', cat: 'Je m’imaginerais bien :'},
                {id: 40,name: 'enquêter pour découvrir la vérité', cat: 'Je m’imaginerais bien :'},
                {id: 41,name: 'analyser des faits ou de données', cat: 'Je m’imaginerais bien :'},
            ],

            optionsArtistique: [
                {id: 1,name: 'Créatif',cat: 'Je suis :'},
                {id: 2,name: 'Indépendant', cat: 'Je suis :'},
                {id: 3,name: 'Non-conformiste', cat: 'Je suis :'},
                {id: 4,name: 'Impulsif', cat: 'Je suis :'},
                {id: 5,name: 'Expressif', cat: 'Je suis :'},
                {id: 6,name: 'Passionné', cat: 'Je suis :'},
                {id: 7,name: 'Libre', cat: 'Je suis :'},
                {id: 8,name: 'Intuitif', cat: 'Je suis :'},
                {id: 9,name: 'Complexe', cat: 'Je suis :'},
                {id: 10,name: 'Intense', cat: 'Je suis :'},
                {id: 11,name: 'Sensible', cat: 'Je suis :'},
                {id: 12,name: 'Ouvert', cat: 'Je suis :'},
                {id: 13,name: 'Imaginatif', cat: 'Je suis :'},
                {id: 14,name: 'Original', cat: 'Je suis :'},
                {id: 15,name: 'Idéaliste', cat: 'Je suis :'},

                {id: 16,name: 'Les belles choses', cat: 'J’apprécie : '},
                {id: 17,name: 'l’esthétique', cat: 'J’apprécie : '},
                {id: 18,name: 'le langage', cat: 'J’apprécie : '},
                {id: 19,name: 'l’art dramatique', cat: 'J’apprécie : '},
                {id: 20,name: 'l’expression créative', cat: 'J’apprécie : '},
                {id: 21,name: 'les émotions', cat: 'J’apprécie : '},
                {id: 22,name: 'l’indépendance', cat: 'J’apprécie : '},
                {id: 23,name: 'l’indépendance', cat: 'J’apprécie : '},
                {id: 24,name: 'l’intuition', cat: 'J’apprécie : '},
                {id: 25,name: 'le changement', cat: 'J’apprécie : '},
                {id: 26,name: 'l’imprévu', cat: 'J’apprécie : '},

                {id: 27,name: 'avoir des idées créatives', cat: 'Ce que j’aime faire :'},
                {id: 28,name: 'travailler de façon autonome', cat: 'Ce que j’aime faire :'},
                {id: 29,name: 'exprimer mes gouts et ma personnalité', cat: 'Ce que j’aime faire :'},
                {id: 30,name: 'pouvoir faire les choses comme je les vois', cat: 'Ce que j’aime faire :'},
                {id: 31,name: 'faire de la musique, peindre, chanter, dessiner', cat: 'Ce que j’aime faire :'},
                {id: 32,name: 'jouer la comédie', cat: 'Ce que j’aime faire :'},
                {id: 33,name: 'décorer, rendre les choses belles', cat: 'Ce que j’aime faire :'},
                {id: 34,name: 'cuisiner, inventer de nouvelles recettes', cat: 'Ce que j’aime faire :'},
                {id: 35,name: 'apprendre des faits, des principes', cat: 'Ce que j’aime faire :'},
                {id: 36,name: 'composer écrire', cat: 'Ce que j’aime faire :'},


                {id: 37,name: 'enseigner la danse, la musique', cat: 'Je m’imaginerais bien : '},
                {id: 38,name: 'avoir une activité professionnelle qui me permet avant tout de\n' +
                        'm’exprimer personnellement', cat: 'Je m’imaginerais bien : '},
                {id: 39,name: 'travailler dans un milieu culturel ou artistique', cat: 'Je m’imaginerais bien : '},
                {id: 40,name: 'étudier des œuvres d’art', cat: 'Je m’imaginerais bien : '},
                {id: 41,name: 'répondre à des demandes d’ordre esthétique pour mes clients', cat: 'Je m’imaginerais bien : '},

            ],

            optionsSocial: [
                {id: 1,name: 'humaniste',cat: 'Je suis :'},
                {id: 2,name: 'attentionné', cat: 'Je suis :'},
                {id: 3,name: 'serviable', cat: 'Je suis :'},
                {id: 4,name: 'plein de tact', cat: 'Je suis :'},
                {id: 5,name: 'coopératif', cat: 'Je suis :'},
                {id: 6,name: 'gentil', cat: 'Je suis :'},
                {id: 7,name: 'généreux', cat: 'Je suis :'},
                {id: 8,name: 'à l’écoute des autres', cat: 'Je suis :'},
                {id: 9,name: 'compréhensif', cat: 'Je suis :'},
                {id: 10,name: 'bavard', cat: 'Je suis :'},
                {id: 11,name: 'perspicace', cat: 'Je suis :'},
                {id: 12,name: 'sympathique', cat: 'Je suis :'},
                {id: 13,name: 'souriant/gai', cat: 'Je suis :'},
                {id: 14,name: 'patient', cat: 'Je suis :'},
                {id: 15,name: 'Idéaliste', cat: 'Je suis :'},
                {id: 16,name: 'chaleureux', cat: 'Je suis :'},

                {id: 17,name: 'la communication', cat: 'J’apprécie : '},
                {id: 18,name: 'le bien être des autres', cat: 'J’apprécie : '},
                {id: 19,name: 'les relations humaines', cat: 'J’apprécie : '},
                {id: 20,name: 'l’esprit de communauté', cat: 'J’apprécie : '},
                {id: 21,name: 'la croissance personnelle', cat: 'J’apprécie : '},
                {id: 22,name: 'changement', cat: 'J’apprécie : '},
                {id: 23,name: 'la spiritualité', cat: 'J’apprécie : '},
                {id: 24,name: 'la confiance', cat: 'J’apprécie : '},
                {id: 25,name: 'le consensus', cat: 'J’apprécie : '},
                {id: 26,name: 'la coopération', cat: 'J’apprécie : '},

                {id: 27,name: 'écouter les autres', cat: 'Ce que j’aime faire :'},
                {id: 28,name: 'aider les autres', cat: 'Ce que j’aime faire :'},
                {id: 29,name: 'permettre aux autres de se sentir mieux', cat: 'Ce que j’aime faire :'},
                {id: 30,name: 'm’occuper des autres, les prendre en charge', cat: 'Ce que j’aime faire :'},
                {id: 31,name: 'aider et encourager les autres', cat: 'Ce que j’aime faire :'},
                {id: 32,name: 'accompagner les gens', cat: 'Ce que j’aime faire :'},
                {id: 33,name: 'orienter ou guider les autres', cat: 'Ce que j’aime faire :'},

                {id: 34,name: 'enseigner, former :', cat: 'Je m’imaginerais bien : '},
                {id: 35,name: 'faciliter des situations difficiles pour autrui', cat: 'Je m’imaginerais bien : '},
                {id: 36,name: 'résoudre des problèmes humains', cat: 'Je m’imaginerais bien : '},
                {id: 37,name: 'mener des débats', cat: 'Je m’imaginerais bien : '},
                {id: 38,name: 'conseiller les autres', cat: 'Je m’imaginerais bien : '},
                {id: 39,name: 'prendre soin des gens ou des animaux', cat: 'Je m’imaginerais bien : '},
                {id: 40,name: 'améliorer la vie des gens', cat: 'Je m’imaginerais bien : '},
                {id: 41,name: 'apporter une aide concrète aux gens dans le besoin', cat: 'Je m’imaginerais bien : '},
                {id: 42,name: 'assister des personnes en difficulté économique, psychologique ou\n' +
                        'physique', cat: 'Je m’imaginerais bien : '},

            ],

            optionsEntreprenant: [
                {id: 1,name: 'ambitieux',cat: 'Je suis :'},
                {id: 2,name: 'désireux d’endosser des responsabilités', cat: 'Je suis :'},
                {id: 3,name: 'compétitif', cat: 'Je suis :'},
                {id: 4,name: 'persuasif', cat: 'Je suis :'},
                {id: 5,name: 'affirmé/sûr de moi', cat: 'Je suis :'},
                {id: 6,name: 'orienté vers le résultat', cat: 'Je suis :'},
                {id: 7,name: 'bavard', cat: 'Je suis :'},
                {id: 8,name: 'audacieux', cat: 'Je suis :'},
                {id: 9,name: 'matérialiste', cat: 'Je suis :'},
                {id: 10,name: 'énergique', cat: 'Je suis :'},
                {id: 11,name: 'populaire', cat: 'Je suis :'},
                {id: 12,name: 'plein d’esprit', cat: 'Je suis :'},
                {id: 13,name: 'sociable/extraverti', cat: 'Je suis :'},
                {id: 14,name: 'original', cat: 'Je suis :'},
                {id: 15,name: 'aventureux', cat: 'Je suis :'},
                {id: 16,name: 'optimiste', cat: 'Je suis :'},

                {id: 17,name: 'd’être écouté', cat: 'J’apprécie : '},
                {id: 18,name: 'de décider de choses', cat: 'J’apprécie : '},
                {id: 19,name: 'de prendre la responsabilité', cat: 'J’apprécie : '},
                {id: 20,name: 'd’être utile à un projet', cat: 'J’apprécie : '},
                {id: 21,name: 'l’excitation', cat: 'J’apprécie : '},
                {id: 22,name: 'la prise de risque', cat: 'J’apprécie : '},
                {id: 23,name: 'd’influencer les autres', cat: 'J’apprécie : '},
                {id: 24,name: 'le pouvoir', cat: 'J’apprécie : '},
                {id: 25,name: 'le statut social', cat: 'J’apprécie : '},
                {id: 26,name: 'le matérialisme', cat: 'J’apprécie : '},

                {id: 27,name: 'diriger', cat: 'Ce que j’aime faire :'},
                {id: 28,name: 'décider', cat: 'Ce que j’aime faire :'},
                {id: 29,name: 'lancer des initiatives et des projets', cat: 'Ce que j’aime faire :'},
                {id: 30,name: 'divertir des clients', cat: 'Ce que j’aime faire :'},
                {id: 31,name: 'accomplir des choses', cat: 'Ce que j’aime faire :'},
                {id: 32,name: 'convaincre les autres', cat: 'Ce que j’aime faire :'},
                {id: 33,name: 'débattre', cat: 'Ce que j’aime faire :'},
                {id: 34,name: 'donner des discours', cat: 'Ce que j’aime faire :'},
                {id: 35,name: 'faire des présentations orales', cat: 'Ce que j’aime faire :'},

                {id: 36,name: 'discuter d’affaires', cat: 'Je m’imaginerais bien : '},
                {id: 37,name: 'faire la promotion de produits ou de services', cat: 'Je m’imaginerais bien : '},
                {id: 38,name: 'vendre des produits ou des services', cat: 'Je m’imaginerais bien : '},
                {id: 39,name: 'discuter avec des responsables d’entreprises', cat: 'Je m’imaginerais bien : '},
                {id: 40,name: 'm’engager dans la politique', cat: 'Je m’imaginerais bien : '},
                {id: 41,name: 'gérer des équipes/ des projets', cat: 'Je m’imaginerais bien : '},
                {id: 42,name: 'parler devant de grandes audiences', cat: 'Je m’imaginerais bien : '},


            ],

            optionsConventionnel: [
                {id: 1,name: 'pratique',cat: 'Je suis :'},
                {id: 2,name: 'organisé', cat: 'Je suis :'},
                {id: 3,name: 'consciencieux', cat: 'Je suis :'},
                {id: 4,name: 'peu démonstratif', cat: 'Je suis :'},
                {id: 5,name: 'ordonné', cat: 'Je suis :'},
                {id: 6,name: 'systématique', cat: 'Je suis :'},
                {id: 7,name: 'prudent', cat: 'Je suis :'},
                {id: 8,name: 'précis', cat: 'Je suis :'},
                {id: 9,name: 'précis', cat: 'Je suis :'},
                {id: 10,name: 'exact', cat: 'Je suis :'},
                {id: 11,name: 'économe', cat: 'Je suis :'},
                {id: 12,name: 'respectueux', cat: 'Je suis :'},
                {id: 13,name: 'ponctuel', cat: 'Je suis :'},

                {id: 14,name: 'l’ordre', cat: 'J’apprécie : '},
                {id: 15,name: 'l’exactitude', cat: 'J’apprécie : '},
                {id: 16,name: 'la précision', cat: 'J’apprécie : '},
                {id: 17,name: 'la prévisibilité', cat: 'J’apprécie : '},
                {id: 18,name: 'la sécurité', cat: 'J’apprécie : '},
                {id: 19,name: 'l’organisation', cat: 'J’apprécie : '},
                {id: 20,name: 'les faits', cat: 'J’apprécie : '},
                {id: 21,name: 'la fiabilité', cat: 'J’apprécie : '},

                {id: 22,name: 'organiser les choses', cat: 'Ce que j’aime faire :'},
                {id: 23,name: 'analyser les faits', cat: 'Ce que j’aime faire :'},
                {id: 24,name: 'classer et structurer l’information', cat: 'Ce que j’aime faire :'},
                {id: 25,name: 'faire des schémas pour expliquer une situation', cat: 'Ce que j’aime faire :'},
                {id: 26,name: 'optimiser la façon de procéder', cat: 'Ce que j’aime faire :'},
                {id: 27,name: 'gérer des informations', cat: 'Ce que j’aime faire :'},
                {id: 28,name: 'faire respecter des règles', cat: 'Ce que j’aime faire :'},
                {id: 29,name: 'collecter des données', cat: 'Ce que j’aime faire :'},
                {id: 30,name: 'analyser des situations', cat: 'Ce que j’aime faire :'},
                {id: 31,name: 'm’assurer que tout est bien organisé', cat: 'Ce que j’aime faire :'},
                {id: 32,name: 'faire marcher les choses', cat: 'Ce que j’aime faire :'},

                {id: 33,name: 'concevoir des procédures de travail', cat: 'Je m’imaginerais bien : '},
                {id: 34,name: 'vérifier la conformité d’actions ou de produits', cat: 'Je m’imaginerais bien : '},
                {id: 35,name: 'gérer un bureau, un environnement de travail', cat: 'Je m’imaginerais bien : '},
                {id: 36,name: 'tenir des dossiers', cat: 'Je m’imaginerais bien : '},
                {id: 37,name: 'établir/faire respecter des règles', cat: 'Je m’imaginerais bien : '},
                {id: 38,name: 'réaliser des analyses financières', cat: 'Je m’imaginerais bien : '},
                {id: 39,name: 'organiser des événements', cat: 'Je m’imaginerais bien : '},
                {id: 40,name: 'entretenir un parc informatique', cat: 'Je m’imaginerais bien : '},
            ],

            selectListReal: [],
            selectListInve: [],
            selectListArt: [],
            selectListSoc: [],
            selectListEntr: [],
            selectListConv: [],

        };
    }

    submit = (e) => {
        e.preventDefault();
        alert("x = "+this.state.selectListReal.length);
        let result = "<h3> Nom : "+localStorage.getItem('lastName')+"</h3>" +
            "<h4> Prénom : "+localStorage.getItem('firstName')+"</h4>" +
            "<h5> Email : "+localStorage.getItem('email')+"</h5>" +
            "<h5> Numéro : "+localStorage.getItem('number')+"</h5>" +
            "<br/><table>\n" +
            "    <thead>\n" +
            "        <tr>\n" +
            "            <th style='border: 1px solid;  background-color: #333; color: white' colspan=\"6\">TRICAM</th>\n" +
            "        </tr>\n" +
            "    </thead>\n" +
            "    <tbody>\n" +
            "        <tr>\n" +
            "            <td style='border: 1px solid'>LE REALISTE</td>\n" +
            "            <td style='border: 1px solid'>L’INVESTIGATEUR</td>\n" +
            "            <td style='border: 1px solid'>L’ARTISTIQUE</td>\n" +
            "            <td style='border: 1px solid'>LE SOCIAL</td>\n" +
            "            <td style='border: 1px solid'>L’ENTREPRENANT</td>\n" +
            "            <td style='border: 1px solid'>LE CONVENTIONNEL</td>\n" +
            "        </tr>\n" +
            "        <tr>\n" +
            "              <td style='border: 1px solid'>"+this.state.selectListReal.length+"</td>\n" +
            "              <td style='border: 1px solid'>"+this.state.selectListInve.length+"</td>\n" +
            "              <td style='border: 1px solid'>"+this.state.selectListArt.length+"</td>\n" +
            "              <td style='border: 1px solid'>"+this.state.selectListSoc.length+"</td>\n" +
            "              <td style='border: 1px solid'>"+this.state.selectListEntr.length+"</td>\n" +
            "              <td style='border: 1px solid'>"+this.state.selectListConv.length+"</td>\n" +
            "          </tr>\n" +
            "    </tbody>\n" +
            "</table>";

        axios.post("/users/quiz", {
            userEmail: "fabricesumsa2000@gmail.com",
            subject: "Quiz phase 2 - primaire",
            container: result
        }).then(res=>{
            console.log(res.data.text);
            if(res.status === 200){alert("Vos informations ont bien été transmises");}
        })
            .catch(err=>{
                if(err.response.status === 409){
                }
            });
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.container}>
                <div>
                    <MenuBar/>
                </div>
                <div style={{marginTop: "200px"}}>
                    <h2 style={{textAlign: "center",color:"#000"}}>LA FONCTION</h2><br/><br/>
                    <h4 style={{textAlign: "center"}}>Le réaliste</h4>
                    <div style={{marginLeft: "20%",marginRight: "20%"}}>
                        <Multiselect
                            options={this.state.optionsRealiste} // Options to display in the dropdown
                            onSelect={selectedList=>this.setState({selectListReal: selectedList})}
                            onRemove={selectedList=>this.setState({selectListReal: selectedList})}
                            displayValue="name" // Property name to display in the dropdown options
                            groupBy="cat"
                            showCheckbox={true}
                        />
                    </div>
                    <br/>
                    <h3 style={{textAlign: "center"}}>L’investigateur</h3>
                    <div style={{marginLeft: "20%",marginRight: "20%"}}>
                        <Multiselect
                            options={this.state.optionsInvestigateur}
                            onSelect={selectedList=>this.setState({selectListInve: selectedList})}
                            onRemove={selectedList=>this.setState({selectListInve: selectedList})}
                            displayValue="name"
                            groupBy="cat"
                            showCheckbox={true}
                        />
                    </div>
                    <h4 style={{textAlign: "center"}}>L’artistique</h4>
                    <div style={{marginLeft: "20%",marginRight: "20%"}}>
                        <Multiselect
                            options={this.state.optionsArtistique}
                            onSelect={selectedList=>this.setState({selectListArt: selectedList})}
                            onRemove={selectedList=>this.setState({selectListArt: selectedList})}
                            displayValue="name"
                            groupBy="cat"
                            showCheckbox={true}
                        />
                    </div>
                    <h4 style={{textAlign: "center"}}>Le social</h4>
                    <div style={{marginLeft: "20%",marginRight: "20%"}}>
                        <Multiselect
                            options={this.state.optionsSocial}
                            onSelect={selectedList=>this.setState({selectListSoc: selectedList})}
                            onRemove={selectedList=>this.setState({selectListSoc: selectedList})}
                            displayValue="name"
                            groupBy="cat"
                            showCheckbox={true}
                        />
                    </div>
                    <h4 style={{textAlign: "center"}}>L'entreprenant</h4>
                    <div style={{marginLeft: "20%",marginRight: "20%"}}>
                        <Multiselect
                            options={this.state.optionsEntreprenant}
                            onSelect={selectedList=>this.setState({selectListEntr: selectedList})}
                            onRemove={selectedList=>this.setState({selectListEntr: selectedList})}
                            displayValue="name"
                            groupBy="cat"
                            showCheckbox={true}
                        />
                    </div>
                    <h4 style={{textAlign: "center"}}>Le conventionnel</h4>
                    <div style={{marginLeft: "20%",marginRight: "20%"}}>
                        <Multiselect
                            options={this.state.optionsConventionnel}
                            onSelect={selectedList=>this.setState({selectListConv: selectedList})}
                            onRemove={selectedList=>this.setState({selectListConv: selectedList})}
                            displayValue="name"
                            groupBy="cat"
                            showCheckbox={true}
                        />
                    </div>
                    <div style={{textAlign: "center"}}>
                        <Button className={classes.btnQuiz}
                                onClick={this.submit}
                        >
                            Envoyer
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}


export default withStyles(styles)(QuizPrimaire);
