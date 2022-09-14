import { Tarif } from '../interfaces/tarif.interface';

export const HERO_SECTION = {
  title: `Ouvrez gratuitement un compte Djamo`,
  content: `Fini les frais élevés, rien que des prix justes et honnêtes. Choisissez simplement l'offre qui vous convient.`,
};

export const TARIFS: Tarif[] = [
  {
    title: 'Free',
    subtitle: 'Le plan pour démarrer',
    plan: '0 FCFA / mois',
    img: '../../../assets/icons/djamo-free-card-icon-coin.svg',
    isPremium: false,
    content: {
      top: ['Dépôts 0F', 'Paiements 0F', 'Retraits 0F', 'Djamo vers Djamo 0F'],
      bottom: [
        'Djamo vers Mobile Money 1.5%',
        'Djamo vers banques 1.5%',
        '2 coffres simultanés',
      ],
    },
  },
  {
    title: 'PREMIUM',
    subtitle: 'Le plan sans limites - 1er mois offert',
    plan: '2.000 FCFA / mois',
    img: '../../../assets/icons/djamo-premium-card-icon-king.svg',
    isPremium: true,
    content: {
      top: ['Dépôts 0F', 'Paiements 0F', 'Retraits 0F', 'Djamo vers Djamo 0F'],
      bottom: [
        'Djamo vers Mobile Money 0F',
        'Djamo vers banques 0F',
        "Jusqu'à 10 coffres simultanés",
        'Support client prioritaire',
      ],
    },
  },
];
