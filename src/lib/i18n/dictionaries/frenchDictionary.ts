import {
  TranslationKeys,
  AchievementsDialog,
  BumpkinPartRequirements,
  BumpkinTrade,
  ConfirmationTerms,
  Conversations,
  DiscordBonus,
  ErrorTerms,
  GameTerms,
  GeneralTerms,
  GuideTerms,
  HenHouseTerms,
  HowToUpgrade,
  HowToFarm,
  HowToSync,
  Intro,
  Onboarding,
  Questions,
  RetreatTerms,
  RewardTerms,
  RulesTerms,
  SeasonTerms,
  ShopItems,
  Statements,
  WarningTerms,
  WelcomeTerms,
  TransactionTerms,
  GameDescriptions,
  FishingQuests,
  IslandName,
  LevelUpMessages,
  LetsGo,
  LandscapeTerms,
  BumpkinSkillsDescription,
  BoostDescriptions,
  CropFruitDescriptions,
  FoodDescriptions,
  DecorationDescriptions,
  FishDescriptions,
  BuildingDescriptions,
  ToolDescriptions,
  BountyDescription,
} from "./types";

const generalTerms: Record<GeneralTerms, string> = {
  "2x.sale": "Vente x2",
  "add.liquidity": "Ajouter de la liquidité",
  "alr.bought": "Déjà acheté",
  "alr.claim": "Déjà réclamé !",
  "alr.completed": "Déjà terminé",
  "alr.crafted": "Déjà fabriqué !",
  "alr.minted": "Déjà minté !",
  "card.cash": "Carte/Argent liquide",
  "claim.skill": "Réclamation de compétence",
  "coming.soon": "Bientôt disponible",
  "easter.eggs": "Œufs de Pâques",
  "feed.bumpkin": "Nourrir Bumpkin",
  "fish.caught": "Poissons attrapés : ",
  "grant.wish": "Accorder un nouveau vœu",
  "hungry?": "Faim?",
  "last.updated": "Dernière mise à jour : ",
  "lets.go": "C'est parti !",
  "make.wish": "Faire un Vœu",
  "making.wish": "Faire un vœu",
  "no.mail": "Pas de courrier",
  "no.thanks": "Non merci",
  "ocean.fishing": "Pêche en mer",
  "open.gift": "Ouvrir un Cadeau",
  "pass.required": "Mot de passe requis",
  "placing.bid": "Placer une enchère",
  "providing.liquidity": "Fournir de la liquidité",
  "read.more": "Lire la suite",
  "reward.discovered": "Récompense Découverte",
  "select.resource": "Sélectionnez votre ressource :",
  "sell.all": "Tout vendre",
  "sell.one": "Vendre 1",
  "sell.ten": "Vendre 10",
  "skip.order": "Passer la commande",
  "sound.effects": "Effets sonores : ",
  "support.team": "Équipe de support",
  "total.price": "Prix total : ",
  "trash.collection": "Collecte des déchets",
  "try.again": "Réessayer",
  "unlock.land": "Débloquer plus de terrain",
  "visit.friend": "Visiter un ami",
  "wishing.well": "Puits à vœux",
  "you.are.here": "Vous êtes ici",
  achievements: "Succès",
  auctions: "Enchères",
  back: "Retour",
  bait: "Appât",
  basket: "Panier",
  beta: "Bêta",
  bounty: "Prime",
  build: "Construire",
  buy: "Acheter",
  cancel: "Annuler",
  chest: "Coffre",
  chores: "Corvées",
  claim: "Réclamation",
  clear: "Effacer",
  close: "Fermer",
  completed: "Terminé",
  confirm: "Confirmer",
  congrats: "Félicitations !",
  connected: "Connecté",
  connecting: "Connexion en cours",
  continue: "Continuer",
  cook: "Cuisiner",
  coupons: "Coupons",
  craft: "Fabriquer",
  crafting: "Fabrication",
  crops: "Cultures",
  date: "Date",
  deliveries: "Livraisons",
  delivery: "Livraison",
  details: "Détails",
  egg: "Œuf",
  equip: "Équiper",
  error: "Erreur",
  exotics: "Exotiques",
  expand: "Étendre",
  explore: "Explorer",
  farm: "Ferme",
  featured: "En vedette",
  fertilisers: "Engrais",
  fish: "Poisson",
  foods: "Aliments",
  for: "pour",
  forbidden: "Interdit",
  fruit: "Fruit",
  fruits: "Fruits",
  gotIt: "C'est compris",
  guide: "Guide",
  info: "Info",
  item: "Objet :",
  left: "Gauche",
  list: "Liste",
  loading: "Chargement",
  lvl: "Niveau",
  maintenance: "Maintenance",
  mins: "minutes",
  mint: "Mint",
  minting: "Mintage",
  music: "Musique",
  next: "Suivant",
  nextSkillPtLvl: "Prochain point de compétence : niveau",
  ok: "OK",
  print: "Imprimer",
  purchasing: "Achat en cours",
  rank: "Classement",
  refresh: "Actualiser",
  refreshing: "Actualisation en cours",
  reqSkillPts: "Points de compétence requis",
  reqSkills: "Compétences requises :",
  resources: "Ressources",
  restock: "Réapprovisionner",
  retry: "Réessayer",
  save: "Enregistrer",
  saving: "Enregistrement",
  secs: "secondes",
  seeds: "Graines",
  sell: "Vendre",
  shopping: "Achats",
  skillPts: "Points de compétence :",
  skills: "Compétences",
  success: "Succès !",
  swapping: "Échange",
  syncing: "Synchronisation",
  task: "Tâche",
  tools: "Outils",
  total: "Total",
  trades: "Échanges",
  trading: "Échange",
  travel: "Voyage",
  uhOh: "Oh oh !",
  unlocking: "Déverrouillage",
  verify: "Vérifier",
  version: "Version",
  viewAll: "Voir tout",
  wallet: "Portefeuille",
  welcome: "Bienvenue !",
  withdraw: "Retirer",
};

const gameTerms: Record<GameTerms, string> = {
  bumpkinLvl: "Niveau de Bumpkin",
  dailyLim: "Limite quotidienne de SFL",
  gobSwarm: "Essaim de Gobelins !",
  potions: "Potions",
  sflDiscord: "Serveur Discord Sunflower Land",
  "auction.winner": "Gagnant de l'Enchère !",
  "farm.banned": "Cette ferme est bannie",
  "proof.of.humanity": "Preuve d'Humanité",
  "no.sfl": "Aucun jeton SFL trouvé",
  "granting.wish": "Exaucement de votre vœu",
  "new.delivery.in": "Nouvelles livraisons disponibles dans : ",
  bumpkinBuzz: "Bumpkin Buzz",
};

const confirmationTerms: Record<ConfirmationTerms, string> = {
  "confirmation.sellCrops": "Êtes-vous sûr de vouloir vendre",
};

const welcomeTerms: Record<WelcomeTerms, string> = {
  "welcome.createAccount": "Créer un compte",
  "welcome.creatingAccount": "Création de votre compte",
  "welcome.email": "Email & Connexion sociale",
  "welcome.login": "Connexion",
  "welcome.needHelp": "Besoin d'aide ?",
  "welcome.otherWallets": "Autres portefeuilles",
  "welcome.signingIn": "Connexion en cours",
  "welcome.signInMessage":
    "Acceptez la demande de signature dans votre portefeuille de navigateur pour vous connecter.",
  "welcome.takeover":
    "Il semble que vous soyez nouveau dans Sunflower Land et ayez revendiqué la propriété du compte d'un autre joueur.",
  "welcome.promo": "Ajoute un Code Promo",
};

const rulesTerms: Record<RulesTerms, string> = {
  rules: "Règles du jeu",
  "rules.accounts": "1 compte par joueur",
  "rules.noBots": "Pas de bot ou d'automatisation",
  "rules.game": "Ceci est un jeu, pas un produit financier",
  "rules.termsOfService": "Conditions d'utilisation",
};

const seasonTerms: Record<SeasonTerms, string> = {
  "season.accessTo": "Vous avez accès à :",
  "season.banner": "Bannière saisonnière",
  "season.bonusTickets": "Billets saisonniers bonus",
  "season.boostXP": "+10 % d'EXP à partir de la nourriture",
  "season.buyNow": "Acheter maintenant",
  "season.discount": "Réduction de 25 % en SFL sur les articles saisonniers",
  "season.exclusiveOffer": "Offre exclusive !",
  "season.goodLuck": "Bonne chance dans la saison !",
  "season.includes": "Comprend :",
  "season.limitedOffer": " Offre à durée limitée !",
  "season.wearableAirdrop": "Largage de vêtements saisonniers",
  "season.ctk": "Attrapez le Kraken",
};

const introTerms: Record<Intro, string> = {
  "intro.one":
    "Salut à toi, Bumpkin ! Bienvenue à Sunflower Land, le paradis agricole abondant où tout est possible !",
  "intro.two":
    "Quelle belle île vous avez aménagée ! Je suis Pumpkin' Pete, votre voisin fermier.",
  "intro.three":
    "En ce moment, les joueurs célèbrent un festival sur la place avec des récompenses fantastiques et des objets magiques.",
  "intro.four":
    "Avant de pouvoir vous joindre à la fête, vous devrez développer votre ferme et collecter des ressources. Vous ne voulez pas venir les mains vides !",
  "intro.five":
    "Pour débuter, vous pouvez couper ces arbres et étendre votre île.",
};

const shopItems: Record<ShopItems, string> = {
  "shopItems.one": "Hé, hé ! Ravi de vous revoir..",
  "shopItems.two":
    "Vous avez contribué à résoudre la pénurie de cultures, et les prix sont revenus à la normale.",
  "shopItems.three":
    "Il est temps de passer à des cultures plus grandes et meilleures !",
  "betty.intro": "Bienvenue sur mon marché. Que souhaitez-vous faire ?",
  "betty.buySeeds": "Acheter des graines",
  "betty.sellCrops": "Vendre des recoltes",
};

const achievementTerms: Record<AchievementsDialog, string> = {
  "breadWinner.description": "Gagnez 0,001 SFL",
  "breadWinner.one":
    "Tiens, tiens, tiens, partenaire... Il semble que vous ayez besoin de quelques SFL !",
  "breadWinner.two":
    "Dans Sunflower Land, une réserve saine de SFL est la clé pour fabriquer des outils, des bâtiments et des NFT rares.",
  "breadWinner.three":
    "Le moyen le plus rapide de gagner des SFL est de planter et de vendre des cultures.",

  "sunSeeker.description": "Récoltez le tournesol 100 fois",
  "cabbageKing.description": "Récoltez le chou 200 fois",
  "jackOLantern.description": "Récoltez la citrouille 500 fois",
  "coolFlower.description": "Récoltez le chou-fleur 100 fois",
  "farmHand.description": "Récoltez des cultures 10 000 fois",
  "beetrootBeast.description": "Récoltez la betterave 2 000 fois",
  "myLifeIsPotato.description": "Récoltez la pomme de terre 5 000 fois",
  "rapidRadish.description": "Récoltez le radis 200 fois",
  "twentyTwentyVision.description": "Récoltez la carotte 10 000 fois",
  "stapleCrop.description": "Récoltez le blé 10 000 fois",
  "sunflowerSuperstar.description": "Récoltez le tournesol 100 000 fois",
  "bumpkinBillionaire.description": "Gagnez 5 000 SFL",
  "patientParsnips.description": "Récoltez le panais 5 000 fois",
  "cropChampion.description": "Récoltez 1 million de cultures",

  "busyBumpkin.description": "Atteignez le niveau 2",
  "busyBumpkin.one":
    "Salut, mon ami ambitieux ! Pour débloquer de nouvelles cultures, des agrandissements, des bâtiments et bien plus encore, vous devrez monter de niveau.",
  "busyBumpkin.two":
    "Rendez-vous au Fire Pit, préparez une délicieuse recette et nourrissez votre Bumpkin.",

  "kissTheCook.description": "Préparez 20 repas",
  "bakersDozen.description": "Cuisinez 13 cakex",
  "brilliantBumpkin.description": "Atteignez le niveau 20",
  "chefDeCuisine.description": "Préparez 5 000 repas",

  "scarecrowMaestro.description":
    "Fabriquez un épouvantail et améliorez vos cultures",
  "scarecrowMaestro.one":
    "Salut, partenaire ! Il est temps d'apprendre l'art de la fabrication et d'améliorer vos compétences en agriculture.",
  "scarecrowMaestro.two":
    "Rendez-vous à la Pumpkin Plaza, visitez le Blacksmith et fabriquez un épouvantail.",

  "bigSpender.description": "Dépensez 10 SFL",
  "museum.description":
    "Ayez 10 types différents d'objets rares placés sur votre terrain",
  "highRoller.description": "Dépensez 7 500 SFL",
  "timbeerrr.description": "Abattez 150 arbres",
  "craftmanship.description": "Fabriquez 100 outils",
  "driller.description": "Extrayez 50 roches en pierre",
  "ironEyes.description": "Extrayez 50 roches de fer",
  "elDorado.description": "Extrayez 50 roches d'or",
  "timeToChop.description": "Fabriquez 500 haches",
  "canary.description": "Extrayez 1 000 roches en pierre",
  "somethingShiny.description": "Extrayez 500 roches de fer",
  "bumpkinChainsawAmateur.description": "Abattez 5 000 arbres",
  "goldFever.description": "Extrayez 500 roches d'or",

  // Explorer
  "explorer.description": "Étendez votre terrain",
  "explorer.one":
    "Récoltons du bois en abattant ces arbres et agrandissons l'île. Allez-y et trouvez la meilleure façon de le faire.",

  "expansion.description": "Étendez votre terrain vers de nouveaux horizons.",

  // Well of Prosperity
  "wellOfProsperity.description": "Construisez un puits",
  "wellOfProsperity.one": "Tien, tien, tien, qu'avons-nous ici ?",
  "wellOfProsperity.two":
    "On dirait que vos cultures ont soif. Pour en soutenir davantage, vous devez d'abord construire un puits.",

  "contractor.description": "Construire 10 bâtiments sur votre terrain",
  "fruitAficionado.description": "Récoltez 50 fruits",
  "fruitAficionado.one":
    "Salut, cueilleur de fruits ! Les fruits sont les cadeaux les plus doux de la nature, et ils apportent une explosion de saveur à votre ferme.",
  "fruitAficionado.two":
    "En collectant différents fruits, tels que des pommes, des oranges et des myrtilles, vous débloquerez des recettes uniques, renforcerez vos compétences en cuisine et créerez des délices.",

  "orangeSqueeze.description": "Récoltez 100 fois des oranges",
  "appleOfMyEye.description": "Récoltez 500 fois des pommes",
  "blueChip.description": "Récoltez 5 000 fois des myrtilles",
  "fruitPlatter.description": "Récoltez 50 000 fruits",
  "crowdFavourite.description": "Effectuez 100 livraisons",

  "deliveryDynamo.description": "Effectuez 3 livraisons",
  "deliveryDynamo.one":
    "Salut, fermier fiable ! Les Bumpkins de partout ont besoin de votre aide pour les livraisons.",
  "deliveryDynamo.two":
    "En effectuant des livraisons, vous les rendrez heureux et vous gagnerez en retour de fantastiques récompenses en SFL.",

  "seasonedFarmer.description": "Collectez 50 Ressources Saisonnières",
  "seasonedFarmer.one":
    "Salut, aventurier de la saison ! Sunflower Land est connu pour ses saisons spéciales remplies d'objets uniques et de surprises.",
  "seasonedFarmer.two":
    "En collectant des ressources saisonnières, vous aurez accès à des récompenses à durée limitée, à des créations exclusives et à des trésors rares. C'est comme avoir un billet de première rangée pour les merveilles de chaque saison.",
  "seasonedFarmer.three":
    "Alors, accomplissez des tâches, participez à des événements et collectez ces billets saisonniers pour profiter de ce que Sunflower Land a de mieux à offrir !",
  "treasureHunter.description": "Creusez 10 trous",
  "treasureHunter.one":
    "Ahoy, chasseur de trésors ! Sunflower Land regorge de trésors cachés qui n'attendent qu'à être découverts.",
  "treasureHunter.two":
    "Prenez votre pelle et rendez-vous sur l'île aux trésors, où vous pouvez creuser pour trouver des objets de valeur et des surprises rares.",
  "eggcellentCollection.description": "Collectez 10 œufs",
  "eggcellentCollection.one":
    "Salut, collectionneur d'œufs ! Les poules sont de merveilleux compagnons de ferme qui nous fournissent de délicieux œufs.",
  "eggcellentCollection.two":
    "En collectant des œufs, vous disposerez d'un approvisionnement frais d'ingrédients pour la cuisine, et vous débloquerez également des recettes spéciales et des bonus.",
};

const guideTerms: Record<GuideTerms, string> = {
  "guide.intro":
    "De modestes débuts à l'expertise en agriculture, ce guide vous couvre !",
  "gathering.description.one":
    "Pour prospérer dans Sunflower Land, maîtriser l'art de la collecte de ressources est essentiel. Commencez par équiper les outils appropriés pour collecter différentes ressources. Utilisez la fidèle hache pour abattre les arbres et obtenir du bois. Pour fabriquer des outils, visitez Workbench local et échangez vos SFL/ressources contre l'outil désiré.",
  "gathering.description.two":
    "À mesure que vous progressez et que vous collectez suffisamment de ressources, vous débloquerez la capacité d'agrandir votre territoire. L'agrandissement de votre terrain ouvre de nouveaux horizons dans Sunflower Land. Les expansions de terrain révèlent une mine de ressources, notamment des sols fertiles pour planter des cultures, des arbres majestueux, des dépôts de pierres précieuses, des veines de fer précieux, des gisements d'or scintillants, des parcelles de fruits délicieux et bien plus encore.",
  "gathering.description.three":
    "N'oubliez pas que la collecte de ressources et l'expansion du terrain sont l'épine dorsale de votre parcours agricole. Acceptez les défis et les récompenses qui accompagnent chaque étape, et regardez votre Sunflower Land prospérer avec une abondance de ressources et d'innombrables possibilités.",

  "crops.description.one":
    "Dans Sunflower Land, les cultures jouent un rôle crucial dans votre voyage vers la prospérité. En plantant et en récoltant des cultures, vous pouvez gagner des SFL (Sunflower Token) ou les utiliser pour fabriquer des recettes et des objets de valeur dans le jeu.",
  "crops.description.two":
    "Pour faire pousser des cultures, vous devez acheter les graines respectives dans la boutique du jeu. Chaque culture a un temps de croissance différent, allant d'une minute seulement pour les Tournesols à 36 heures pour le Chou frisé. Une fois que les cultures sont complètement développées, vous pouvez les récolter et récolter les récompenses.",
  "crops.description.three":
    "N'oubliez pas que, à mesure que vous agrandissez votre terrain et progressez dans le jeu, de plus en plus de cultures seront disponibles, offrant de plus grandes opportunités de gagner des SFL et d'explorer le vaste potentiel de l'économie agricole de Sunflower Land. Alors mettez-vous au travail, plantez ces graines et regardez vos cultures prospérer tout en récoltant votre chemin vers le succès !",

  "building.description.one":
    "Explorez la diversité des bâtiments disponibles à mesure que vous progressez dans Sunflower Land. Des poulaillers aux ateliers et au-delà, chaque structure apporte des avantages uniques à votre ferme. Profitez de ces bâtiments pour rationaliser vos opérations agricoles, augmenter la productivité et débloquer de nouvelles possibilités. Planifiez soigneusement votre disposition et profitez des récompenses qui accompagnent la construction d'une ferme prospère dans Sunflower Land.",
  "building.description.two":
    "Dans Sunflower Land, les bâtiments sont la pierre angulaire de votre voyage agricole. Pour accéder au menu des bâtiments, cliquez sur l'icône Inventaire et sélectionnez l'onglet Bâtiments. Choisissez la structure désirée et retournez à votre écran de ferme. Trouvez un espace ouvert, marqué en pelouse, et confirmez l'emplacement. Attendez que le minuteur se termine, et votre nouveau bâtiment sera prêt à être utilisé. Les bâtiments offrent divers avantages et débloquent des fonctionnalités de jeu passionnantes. Positionnez-les stratégiquement sur votre ferme pour maximiser l'efficacité et observez votre empire agricole grandir et prospérer.",

  "cooking.description.one":
    "La cuisine vous permet de nourrir votre Bumpkin et de l'aider à gagner des points d'expérience (XP) précieux. En utilisant les cultures que vous avez récoltées, vous pouvez préparer de délicieuses recettes dans différents bâtiments dédiés à la cuisine.",
  "cooking.description.two":
    "À partir du Foyer, chaque ferme a accès à des installations de base pour la cuisine dès le début. Cependant, à mesure que vous progressez, vous pouvez débloquer des bâtiments plus avancés tels que la Cuisine, la Boulangerie, la Charcuterie et le Stand à Smoothies, chacun offrant une plus grande variété de recettes et de délices culinaires.",
  "cooking.description.three":
    "Pour cuisiner, il suffit de sélectionner un bâtiment et de choisir une recette que vous souhaitez préparer. La recette fournira des détails sur les ingrédients requis, les XP gagnés lors de la consommation et le temps de préparation. Après avoir lancé le processus de cuisson, surveillez le minuteur pour savoir quand la nourriture sera prête à être collectée.",
  "cooking.description.four":
    "Une fois la nourriture prête, il vous suffira de la récupérer dans le bâtiment en cliquant dessus, puis elle sera automatiquement ajoutée à votre inventaire. Ensuite, vous pourrez interagir avec votre personnage Bumpkin NPC sur la ferme et lui donner la nourriture préparée, ce qui l'aidera à gagner de l'XP et à progresser davantage dans le jeu.",
  "cooking.description.five":
    "Expérimentez avec différentes recettes, débloquez de nouveaux bâtiments et découvrez la joie de cuisiner en nourrissant votre Bumpkin et en vous lançant dans une délicieuse aventure culinaire à Sunflower Land.",

  "animals.description.one":
    "Les poules dans Sunflower Land sont un ajout charmant à votre ferme, servant de source d'œufs pouvant être utilisés dans diverses recettes et créations artisanales. Pour commencer avec les poules, vous devrez atteindre le niveau de Bumpkin 9 et construire un Poulaier. À partir de là, vous avez la possibilité d'acheter des poules ou de placer celles que vous avez déjà. Il vous suffit de les faire glisser et de les déposer sur votre ferme, comme pour placer des bâtiments. Sur une ferme standard, chaque Poulaier peut abriter jusqu'à 10 poules, et si vous possédez le Coopératif de Poules SFT, cette limite s'étend à 15.",
  "animals.description.two":
    "Chaque poule a un indicateur au-dessus de sa tête, affichant son humeur ou ses besoins actuels. Cela peut aller de la faim, à la fatigue, en passant par le bonheur ou le prêt à éclore. Pour garder vos poules contentes et productives, nourrissez-les en sélectionnant du blé dans votre inventaire et en interagissant avec la poule. L'alimentation lance le minuteur des œufs, qui prend 48 heures pour que les œufs soient prêts à éclore. Une fois les œufs prêts, visitez votre ferme, vérifiez l'icône au-dessus de chaque poule et interagissez avec elles pour découvrir le type d'œuf qui a éclos. De temps en temps, vous pouvez même découvrir des poules mutantes rares, qui offrent des avantages spéciaux tels qu'une production d'œufs plus rapide, un rendement accru ou une réduction de la consommation de nourriture.",
  "animals.description.three":
    "Nourrir vos poules et collecter leurs œufs ajoute un élément dynamique et gratifiant à votre ferme dans Sunflower Land. Expérimentez avec des recettes, utilisez les œufs dans vos projets de fabrication et profitez des surprises offertes par les poules mutantes rares. Construisez une opération avicole prospère et récoltez les fruits de votre travail acharné en vous immergent dans le charmant monde des poules à Sunflower Land.",

  "crafting.description.one":
    "Dans Sunflower Land, la création d'objets NFT (tokens non fongibles) est un aspect crucial pour augmenter votre production agricole et accélérer votre progression. Ces objets spéciaux offrent divers bonus, tels que des boosts de croissance des cultures, des améliorations de la cuisine et des augmentations de ressources, qui peuvent considérablement accélérer votre voyage. En maximisant votre SFL (Sunflower Token), vous pouvez fabriquer des outils, collecter des ressources et agrandir votre terrain pour établir davantage votre empire agricole.",
  "crafting.description.two":
    "Pour commencer à fabriquer des objets, nous allons rendre visite à Igor, un artisan talentueux de Sunfloria. Après avoir pris le bateau et être arrivé à Sunfloria, rendez-vous en haut de l'île pour discuter avec Igor. Il propose actuellement un Épouvantail de base, qui booste la vitesse de croissance des Tournesols, des Pommes de terre et des Citrouilles. Il s'agit d'une excellente affaire qui nécessite l'échange de vos ressources contre l'épouvantail. Une fois obtenu, retournez sur votre île principale et entrez en mode conception en cliquant sur l'icône de main blanche en haut à droite du jeu.",
  "crafting.description.three":
    "En mode conception, vous pouvez placer stratégiquement des objets et réorganiser les ressources sur votre ferme pour optimiser sa disposition et améliorer son attrait visuel. Cette étape est cruciale pour maximiser l'efficacité de votre équipement fabriqué. Par exemple, placez l'épouvantail sur les parcelles que vous souhaitez booster. De plus, envisagez d'acheter des décorations pour ajouter du charme et de l'ordre à votre terrain.",
  "crafting.description.four":
    "En fabriquant de l'équipement et en le plaçant stratégiquement, vous pouvez amplifier vos compétences agricoles, créer une île dont vous pouvez être fier, et accélérer votre progression dans Sunflower Land.",

  "deliveries.description.one":
    "Les livraisons à Sunflower Land offrent une occasion passionnante d'aider les Gobelins affamés et les autres Bumpkins tout en gagnant des récompenses. Chaque jour, vous pourrez voir toutes les commandes que vous avez en cliquant sur le tableau de livraison en bas à gauche de l'écran. Les commandes ont été passées par quelques PNJ locaux que l'on peut trouver autour de la Pumpkin Plaza. Pour remplir une commande, vous devrez prendre un bateau pour la Pumpkin Plaza et chercher le PNJ qui attend la livraison. Une fois que vous les avez trouvés, cliquez sur eux pour livrer la commande et recevoir votre récompense.",
  "deliveries.description.two":
    "En tant que nouveau joueur, vous commencez avec trois emplacements de commande, mais à mesure que vous agrandissez votre ferme, vous débloquerez des emplacements supplémentaires, permettant aux joueurs avancés de prendre plus de commandes. De nouvelles commandes arrivent toutes les 24 heures, offrant une gamme de tâches allant de la production agricole à la cuisine et à la collecte de ressources. En remplissant les commandes, vous obtiendrez des bonus de palier, notamment des Block Bucks, des SFL, des cakex délicieux et d'autres récompenses. Le système de récompense est basé sur la difficulté de la demande, alors envisagez de prioriser les commandes offrant des récompenses plus importantes pour maximiser vos gains. Gardez un œil sur le tableau et relevez le défi avec diverses commandes, en montant de niveau et en débloquant de nouveaux bâtiments au besoin pour répondre à des demandes plus exigeantes.",

  "scavenger.description.one":
    "L'exploration à Sunflower Land offre des opportunités passionnantes pour découvrir des trésors cachés et collecter des ressources précieuses. Le premier aspect de l'exploration consiste à creuser des trésors sur Treasure Island, où vous pouvez devenir un chasseur de trésors pirate. En fabriquant une pelle à sable et en vous aventurant sur Treasure Island, vous pouvez creuser dans des zones de sable sombre pour découvrir divers trésors, y compris des butins, des décorations, et même des SFT anciens avec une utilité.",
  "scavenger.description.two":
    "Une autre forme d'exploration consiste à collecter des champignons sauvages qui apparaissent spontanément sur votre ferme et les îles environnantes. Ces champignons peuvent être collectés gratuitement et utilisés dans des recettes, des quêtes et la fabrication d'objets. Gardez un œil sur ces champignons, car ils se renouvellent toutes les 16 heures, avec une limite maximale de 5 champignons sur votre ferme. Si votre terrain est plein, les champignons apparaîtront sur les îles environnantes, vous assurant de ne pas manquer ces ressources précieuses.",

  "fruit.description.one":
    "Les fruits jouent un rôle important dans Sunflower Land en tant que ressource précieuse pouvant être vendue contre des SFL ou utilisée dans diverses recettes et fabrications. Contrairement aux cultures, les parcelles de fruits ont la capacité unique de se reconstituer plusieurs fois après chaque récolte, offrant une source durable de fruits pour les joueurs.",
  "fruit.description.two":
    "Pour planter des fruits, vous devrez acquérir des parcelles de fruits plus grandes, qui deviennent disponibles lors de la 9e-10e expansion de votre ferme.",
  "fruit.description.three":
    "En cultivant des fruits et en les intégrant dans vos stratégies agricoles, vous pouvez maximiser vos profits, créer des recettes délicieuses et débloquer de nouvelles possibilités dans Sunflower Land.",

  "seasons.description.one":
    "Les saisons à Sunflower Land apportent de l'excitation et de la fraîcheur au jeu, offrant aux joueurs de nouveaux défis et opportunités. Avec l'introduction de chaque saison, les joueurs peuvent s'attendre à une variété de nouveaux objets craftables, de décorations en édition limitée, d'animaux mutants et de trésors rares. Ces changements saisonniers créent une expérience de jeu dynamique et évolutive, encourageant les joueurs à adapter leurs stratégies et à explorer de nouvelles possibilités sur leurs fermes. De plus, les tickets saisonniers ajoutent un élément stratégique au jeu, car les joueurs doivent décider comment allouer judicieusement leurs tickets, que ce soit pour collecter des objets rares, opter pour des décorations en grande quantité, ou échanger des tickets contre des SFL. Le mécanisme saisonnier maintient le jeu captivant et garantit qu'il y a toujours quelque chose à anticiper à Sunflower Land.",
  "seasons.description.two":
    "La disponibilité d'objets saisonniers chez le Goblin Blacksmith ajoute une autre couche d'excitation. Les joueurs doivent rassembler les ressources requises et les tickets saisonniers pour fabriquer ces objets en quantité limitée, créant un sentiment de compétition et d'urgence. La planification à l'avance et la stratégie deviennent cruciales alors que les joueurs cherchent à sécuriser les objets souhaités avant que l'offre ne s'épuise. De plus, l'option d'échanger des tickets saisonniers contre des SFL offre de la flexibilité et permet aux joueurs de faire des choix conformes à leurs objectifs de jeu spécifiques. Avec les offres uniques de chaque saison et l'anticipation d'événements surprises, Sunflower Land maintient les joueurs engagés et divertis tout au long de l'année, favorisant une expérience agricole vibrante et toujours en évolution.",
  "pete.teaser.one": "Coupez les arbres",
  "pete.teaser.two": "Agrandis ton terrain",
  "pete.teaser.three": "Récolte les tournesols",
  "pete.teaser.four": "Vends les tournesols",
  "pete.teaser.five": "Achète des graines",
  "pete.teaser.six": "Plante les graines",
  "pete.teaser.seven": "Fabrique un épouvantail",
  "pete.teaser.eight": "Cuisine de la nourriture et monte de niveau",
};

const conversations: Record<Conversations, string> = {
  "hank-intro.headline": "Aider un vieil homme ?",
  "hank-intro.one":
    "Salut Bumpkin ! Bienvenue dans notre petit coin de paradis.",
  "hank-intro.two":
    "Je travaille cette terre depuis cinquante ans, mais j'aurais bien besoin d'aide.",
  "hank-intro.three":
    "Je peux vous enseigner les bases de l'agriculture, tant que vous m'aidez dans mes tâches quotidiennes.",
  "hank-crafting.headline": "Fabriquez un épouvantail",
  "hank-crafting.one":
    "Hmmm, ces cultures poussent terriblement lentement. Je n'ai pas le temps d'attendre.",
  "hank-crafting.two":
    "Fabriquez un épouvantail pour accélérer la croissance de vos cultures.",
  "betty-intro.headline": "Comment développer votre ferme",
  "betty-intro.one": "Hé, hé ! Bienvenue sur mon marché.",
  "betty-intro.two":
    "Apportez-moi votre meilleure récolte, et je vous en donnerai un bon prix !",
  "betty-intro.three":
    "Vous avez besoin de graines ? Des pommes de terre aux panais, je m'occupe de tout !",
  "betty.market-intro.one":
    "Hé toi, Bumpkin ! C'est Betty du marché fermier. Je voyage entre les îles pour acheter des récoltes et vendre des graines fraîches.",
  "betty.market-intro.two":
    "Bonne nouvelle : vous venez de tomber sur une toute nouvelle pelle étincelante ! Mauvaise nouvelle : nous avons connu une pénurie de cultures.",
  "betty.market-intro.three":
    "Pendant un temps limité, je propose aux nouveaux venus le double d'argent pour chaque récolte que vous m'apportez.",
  "betty.market-intro.four":
    "Récoltez ces Tournesols et commençons à construire votre empire agricole.",
  "bruce-intro.headline": "Introduction à la cuisine",
  "bruce-intro.one": "Je suis le propriétaire de ce charmant petit bistro.",
  "bruce-intro.two":
    "Apportez-moi des ressources et je cuisinerai autant de nourriture que vous le souhaitez !",
  "bruce-intro.three":
    "Salut fermier ! Je peux repérer un Bumpkin affamé à des kilomètres à la ronde.",
  "blacksmith-intro.headline": "Coupez, coupez, coupez.",
  "blacksmith-intro.one":
    "Je suis un maître des outils, et avec les bonnes ressources, je peux fabriquer tout ce dont vous avez besoin... y compris plus d'outils !",
  "pete.first-expansion.one":
    "Félicitations, Bumpkin ! Votre ferme grandit plus vite qu'un haricot magique sous une averse !",
  "pete.first-expansion.two":
    "À chaque expansion, vous trouverez des choses cool comme des ressources spéciales, de nouveaux arbres, et plus encore à collecter !",
  "pete.first-expansion.three":
    "Gardez un œil sur les cadeaux surprises des gobelins généreux pendant que vous explorez, ils ne sont pas seulement des experts en construction, mais aussi des donneurs de secrets astucieux !",
  "pete.blacksmith.one": "Hmm, ces cultures poussent lentement.",
  "pete.blacksmith.two":
    "Sunflower Land regorge d'objets magiques que vous pouvez fabriquer pour améliorer vos compétences en agriculture.",
  "pete.blacksmith.three":
    "Dirigez-vous vers le Workbench et fabriquez un épouvantail pour accélérer la croissance de ces Tournesols.",
  "pete.levelthree.one": "Félicitations, votre main verte brille vraiment !",
  "pete.levelthree.two":
    "Il est grand temps de vous rendre à la Plaza, où vos compétences en agriculture peuvent briller encore plus.",
  "pete.levelthree.three":
    "À la plaza, vous pouvez effectuer des livraisons pour obtenir des récompenses, fabriquer des objets magiques et échanger avec d'autres joueurs.",
  "pete.levelthree.four":
    "Vous pouvez voyager en cliquant sur l'icône du monde en bas à gauche.",
  "pete.help.zero":
    "Visitez le Fire Pit, cuisinez de la nourriture et mangez pour monter de niveau.",
  "pete.help.one":
    "À mesure que vous montez de niveau, vous débloquerez de nouvelles zones à explorer. La première est le Bumpkin's Plaza... ma maison !",
  "pete.help.two":
    "Ici, vous pouvez effectuer des livraisons pour obtenir des récompenses, fabriquer des objets magiques et échanger avec d'autres joueurs.",
  "grimbly.expansion.one":
    "Salutations, jeune fermier ! Je suis Grimbly, un gobelin constructeur expérimenté.",
  "grimbly.expansion.two":
    "Avec les bons matériaux et mes compétences artisanales ancestrales, nous pouvons transformer votre île en un chef-d'œuvre.",
};

const henHouseTerms: Record<HenHouseTerms, string> = {
  "henHouse.chickens": "Poules",
  "henHouse.text.one": "Nourrissez-les de blé et collectez des œufs",
  "henHouse.text.two": "Poule Paresseuse",
  "henHouse.text.three":
    "Mettez votre poule au travail pour commencer à collecter des œufs !",
  "henHouse.text.four": "Poule Travailleuse",
  "henHouse.text.five": "Déjà placée et travaillant dur !",
  "henHouse.text.six":
    "Construisez un autre Hen House pour élever plus de poules",
};

const rewardTerms: Record<RewardTerms, string> = {
  "reward.title": "Récompense Quotidienne",
  "reward.streak": " jours de suite",
  "reward.comeBackLater": "Revenez plus tard pour plus de récompenses",
  "reward.nextBonus": " Prochain bonus : ",
  "reward.unlock": "Débloquer la récompense",
  "reward.open": "Ouvrir la récompense",
  "reward.lvlRequirement":
    "Vous devez être niveau 3 pour réclamer les récompenses quotidiennes.",
  "reward.revealing": "Qu'est-ce que cela pourrait être ?",
  "reward.streakBonus": "Bonus de série de 3x",
  "reward.found": "Vous avez trouvé",
  "reward.spendWisely": "Utilisez-le judicieusement.",
  "reward.wearable": "Un accessoire pour votre Bumpkin",
};

const errorTerms: Record<ErrorTerms, string> = {
  "error.blocked.betaTestersOnly": "Réservé aux testeurs bêta !",
  "error.congestion.one":
    "Nous faisons de notre mieux, mais il semble que Polygon soit très sollicité ou que vous ayez perdu votre connexion.",
  "error.congestion.two":
    "Si cette erreur persiste, veuillez essayer de changer votre RPC Metamask.",
  "error.connection.one":
    "Il semble que nous n'ayons pas pu terminer cette demande.",
  "error.connection.two": "Il peut s'agir d'un simple problème de connexion.",
  "error.connection.three":
    "Vous pouvez cliquer sur Actualiser pour réessayer.",
  "error.connection.four":
    "Si le problème persiste, vous pouvez demander de l'aide en contactant notre équipe de support ou en rejoignant notre Discord et en demandant à notre communauté.",
  "error.diagnostic.info": "Informations de diagnostic",
  "error.forbidden.goblinVillage":
    "Vous n'êtes pas autorisé à visiter le village des Gobelins !",
  "error.multipleDevices.one": "Plusieurs appareils ouverts",
  "error.multipleDevices.two":
    "Veuillez fermer les autres onglets de navigateur ou appareils que vous utilisez.",
  "error.multipleWallets.one": "Portefeuilles multiples",
  "error.multipleWallets.two":
    "Il semble que vous ayez plusieurs portefeuilles installés. Cela peut entraîner un comportement inattendu. Essayez de désactiver tous les portefeuilles sauf un.",
  "error.polygonRPC":
    "Veuillez réessayer ou vérifier vos paramètres RPC Polygon.",
  "error.toManyRequest.one": "Trop de demandes !",
  "error.toManyRequest.two":
    "On dirait que vous avez été occupé ! Veuillez réessayer plus tard.",
  "error.Web3NotFound": "Web3 non trouvé",
  "error.wentWrong": "Quelque chose s'est mal passé !",
  "error.noBumpkin": "Bumpkin n'est pas défini",
  "error.clock.not.synced": "Horloge non synchronisée",
};

const warningTerms: Record<WarningTerms, string> = {
  "warning.noAxe": "Aucune hache sélectionnée !",
  "warning.chat.maxCharacters": "Caractères max :",
  "warning.chat.noSpecialCharacters": "Aucun caractère spécial",
  "warning.level.required": "Niveau requis :",
  "warning.hoarding.message":
    "Vous avez atteint la limite de stockage pour l'objet suivant",
  "warning.hoarding.one":
    "On dit que les Gobelins sont connus pour attaquer les fermes qui regorgent de ressources.",
  "warning.hoarding.two":
    "Pour vous protéger et protéger ces précieuses ressources, veuillez les synchroniser sur la chaîne avant de récolter davantage de :",
};

const transactionTerms: Record<TransactionTerms, string> = {
  "transaction.t&c.one":
    "Acceptez les termes et conditions pour vous connecter à Sunflower Land.",
  "transaction.t&c.two": "Accepter les termes et conditions",
  "transaction.mintFarm.one": "Votre ferme a été créée !",
  "transaction.mintFarm.two": "Votre ferme sera prête dans",
  "transaction.doNotRefresh": "Ne rafraîchissez pas cette page",
  "transaction.network":
    "Pour sécuriser vos NFT sur la blockchain, des frais de réseau sont nécessaires.",
  "transaction.estimated.fee": "Frais estimés :",
  "transaction.pay": "Payer par carte ou en espèces",
  "transaction.creditCard": "*Des frais de carte de crédit s'appliquent",
  "transaction.rejected": "Transaction rejetée !",
  "transaction.message":
    "Cette demande ne déclenchera pas de transaction blockchain ni ne générera de frais de gaz.",
  "transaction.maticAmount": "Montant en MATIC",
  "transaction.donate": "Faire un don",
  "transaction.donating": "Don en cours",
  "transaction.thankYou":
    "Merci pour votre soutien ! Veuillez choisir le jeu auquel vous souhaitez faire un don.",
  "transaction.minblockbucks": "Minimum 5 Block Bucks",
  "transaction.payCash": "Payer en espèces",
  "transaction.matic": "Matic",
  "transaction.payMatic": "Payer avec Matic",
  "transaction.blockBucksFarm":
    "Les Block Bucks seront stockés sur votre ferme.",
  "transaction.excludeFees":
    "*Les prix n'incluent pas les frais de transaction.",
  "transaction.blockchain.one":
    "Souhaitez-vous stocker votre progression sur la blockchain ?",
  "transaction.blockchain.two":
    "Le stockage des données sur la blockchain ne réapprovisionne pas les magasins.",
  "transaction.progress": "Stocker la progression",
  "transaction.progChain": "Stocker la progression sur la chaîne",
  "transaction.success":
    "Hourra ! Vos objets sont sécurisés sur la blockchain !",
  "transaction.congrats": "Félicitations, votre transaction a réussi",
  "transaction.transacting.one": "Traitement de votre transaction.",
  "transaction.transacting.two":
    "Veuillez attendre la confirmation de votre transaction par la blockchain.",
  "transaction.transacting.three":
    "Après 5 minutes, toutes les transactions non confirmées seront réinitialisées.",
  "transaction.withdraw.one": "Retrait en cours",
  "transaction.withdraw.two": "Vos objets/tokens ont été envoyés à :",
  "transaction.withdraw.three": "Vous pouvez voir vos objets sur",
  "transaction.openSea": "OpenSea",
  "transaction.withdraw.four":
    "Vous pouvez voir vos tokens en important le Token SFL dans votre portefeuille.",
  "transaction.withdraw.five": "Importer le Token SFL dans MetaMask",
  "transaction.withdraw.six":
    "Veuillez noter qu'OpenSea peut mettre jusqu'à 30 minutes pour afficher vos objets. Vous pouvez également voir vos objets sur",
  "transaction.withdraw.polygon": "PolygonScan",
  "transaction.id": "ID de transaction",
};

const onboarding: Record<Onboarding, string> = {
  "onboarding.welcome": "Bienvenue dans le jeu décentralisé !",
  "onboarding.step.one": "Étape 1/3",
  "onboarding.step.two": "Étape 2/3 (Créer un portefeuille)",
  "onboarding.step.three": "Étape 3/3 (Créer votre NFT)",
  "onboarding.intro.one":
    "Au cours de vos voyages, vous gagnerez des NFT rares qui doivent être protégés. Pour les sécuriser, vous aurez besoin d'un portefeuille Web3.",
  "onboarding.intro.two":
    "Pour commencer votre voyage, votre portefeuille recevra :",
  "onboarding.cheer": "Vous y êtes presque !",
  "onboarding.form.one": "Remplissez vos coordonnées",
  "onboarding.form.two":
    "et nous vous enverrons un NFT gratuit pour jouer. (Cela nous prendra de 3 à 7 jours)",
  "onboarding.duplicateUser.one": "Déjà inscrit !",
  "onboarding.duplicateUser.two":
    "Il semble que vous vous soyez déjà inscrit pour les tests bêta en utilisant une adresse différente. Une seule adresse peut être utilisée pendant les tests bêta.",
  "onboarding.starterPack": "Pack de démarrage",
  "onboarding.wallet.titleOne": "Configuration de votre portefeuille",
  "onboarding.wallet.one":
    "Il existe de nombreux fournisseurs de portefeuilles, mais nous avons choisi Sequence car ils sont faciles à utiliser et sécurisés.",
  "onboarding.wallet.two":
    "Sélectionnez une méthode d'inscription dans la fenêtre contextuelle et vous êtes prêt. Je vous retrouve ici dans quelques instants !",
  "onboarding.wallet.haveWallet": "J'ai déjà un portefeuille",
  "onboarding.wallet.createButton": "Créer un portefeuille",
  "onboarding.wallet.titleTwo": "Acceptez les conditions d'utilisation",
  "onboarding.wallet.three":
    "Pour acheter votre ferme, vous devrez accepter les conditions d'utilisation de Sunflower Land.",
  "onboarding.wallet.four":
    "Cette étape vous renverra à votre nouveau portefeuille Sequence pour accepter les conditions d'utilisation.",
  "onboarding.wallet.acceptButton": "Accepter les conditions d'utilisation",
  "onboarding.wallet.acceptLoading": "Acceptation des conditions...",
  "onboarding.wallet.titleThree": "Achetez votre ferme !",
  "onboarding.wallet.five":
    "Maintenant que votre portefeuille est configuré, il est temps d'obtenir votre propre NFT de ferme !",
  "onboarding.wallet.six":
    "Ce NFT stockera en toute sécurité tout votre progrès dans Sunflower Land et vous permettra de revenir pour entretenir votre ferme.",
  "onboarding.wallet.final": "C'est parti !",
};

const questions: Record<Questions, string> = {
  "questions.obtain.MATIC": "Comment obtenir du MATIC ?",
  "questions.lowCash": "Vous manquez de liquidités ?",
};

const statements: Record<Statements, string> = {
  "statements.adventure": "Commencez votre aventure !",
  "statements.auctioneer.one":
    "J'ai parcouru de vastes étendues de Sunflower Land à la recherche de trésors exotiques à partager avec mes camarades Bumpkins.",
  "statements.auctioneer.two":
    "Ne manquez pas nos enchères, où le coup de mon puissant marteau peut transformer vos ressources durement gagnées en merveilles rares et mintées !",
  "statements.beta.one":
    "La bêta est accessible uniquement aux agriculteurs OG.",
  "statements.beta.two":
    "Restez à l'écoute pour les mises à jour. Nous serons bientôt en direct !",
  "statements.better.luck": "Meilleure chance la prochaine fois !",
  "statements.blacklist.one":
    "Le système de détection anti-bot et multi-comptes a détecté un comportement étrange. Des actions ont été restreintes.",
  "statements.blacklist.two":
    "Veuillez soumettre un ticket avec des détails et nous vous répondrons.",
  "statements.clickBottle":
    "Cliquez sur une bouteille pour l'ajouter à votre choix.",
  "statements.clock.one":
    "Oh oh, il semble que votre horloge ne soit pas synchronisée avec le jeu. Réglez la date et l'heure sur automatique pour éviter les interruptions.",
  "statements.clock.two":
    "Besoin d'aide pour synchroniser votre horloge ? Consultez notre guide !",
  "statements.conversation.one": "J'ai quelque chose pour vous !",
  "statements.cooldown":
    "Pour protéger la communauté, nous imposons une période d'attente de 2 semaines avant que cette ferme puisse être accessible.",
  "statements.docs": "Accédez à la documentation",
  "statements.dontRefresh": "Ne rafraîchissez pas votre navigateur !",
  "statements.guide.one": "Consultez le guide",
  "statements.guide.two": "Consultez ce guide pour vous aider à démarrer.",
  "statements.jigger.one":
    "Vous serez redirigé vers un service tiers pour prendre un selfie rapide. Ne partagez jamais d'informations personnelles ou de données crypto.",
  "statements.jigger.two":
    "Vous avez échoué au test de preuve d'humanité de Jigger.",
  "statements.jigger.three":
    "Vous pouvez continuer à jouer, mais certaines actions seront restreintes pendant que vous êtes vérifié.",
  "statements.jigger.four":
    "Veuillez contacter support@usejigger.com si vous pensez que c'était une erreur.",
  "statements.jigger.five":
    "Votre preuve d'humanité est toujours en cours de traitement par Jigger. Cela peut prendre jusqu'à 2 heures.",
  "statements.jigger.six":
    "Le système de détection multi-comptes a détecté un comportement étrange.",
  "statements.jigger.seven":
    "Vous pouvez continuer à jouer, mais certaines actions seront restreintes pendant que vous êtes vérifié.",
  "statements.lvlUp": "Nourrissez votre Bumpkin pour monter de niveau.",
  "statements.maintenance":
    "De nouvelles choses arrivent ! Merci pour votre patience, le jeu sera bientôt de retour en ligne.",
  "statements.make.a.wish":
    "Accordez un nouveau vœu et voyez à quel point vous êtes chanceux !",
  "statements.minted": "Les gobelins ont fabriqué votre ",
  "statements.minting":
    "Veuillez patienter pendant que votre objet est minté sur la blockchain.",
  "statements.mutant.chicken":
    "Félicitations, votre poulet a pondu un poulet mutant très rare !",
  "statements.new.wish":
    "Un nouveau vœu a été fait pour vous en fonction de votre solde actuel en jetons LP !",
  "statements.news":
    "Recevez les dernières nouvelles, accomplissez les tâches et nourrissez votre Bumpkin.",
  "statements.no.reward":
    "Vous n'avez aucune récompense disponible ! La liquidité doit être détenue pendant 3 jours pour obtenir une récompense !",
  "statements.ohNo": "Oh non ! Quelque chose s'est mal passé !",
  "statements.openGuide": "Ouvrir le guide",
  "statements.patience": "Merci pour votre patience.",
  "statements.potionRule.one":
    "Objectif : Trouvez la combinaison. Vous avez 3 essais pour réussir. Le jeu se terminera si vous avez une potion parfaite ou si vous avez épuisé tous vos essais.",
  "statements.potionRule.two":
    "Choisissez une combinaison de potions et tentez de les mélanger.",
  "statements.potionRule.three":
    "Ajustez votre prochaine combinaison en fonction des commentaires donnés.",
  "statements.potionRule.four":
    "Lorsque le jeu est terminé, le score de votre dernière tentative aidera à déterminer votre récompense.",
  "statements.potionRule.five": "Une potion parfaite à la position parfaite",
  "statements.potionRule.six": "Bonne potion mais mauvaise position",
  "statements.potionRule.seven": "Oops, mauvaise potion",
  "statements.sfl.rewards.received": "Récompenses SFL reçues : ",
  "statements.sflLim.one": "Vous avez atteint la limite quotidienne de SFL.",
  "statements.sflLim.two":
    "Vous pouvez continuer à jouer, mais devrez attendre demain pour vous synchroniser à nouveau.",
  "statements.sniped": "Oh non ! Un autre joueur a acheté ce trade avant vous.",
  "statements.switchNetwork": "Ajouter ou changer de réseau",
  "statements.sync":
    "S'il vous plaît, soyez patients pendant que nous synchronisons toutes vos données sur la chaîne.",
  "statements.tapCont": "Appuyez pour continuer",
  "statements.thankYou": "Merci !",
  "statements.tutorial.one":
    "Le bateau vous emmènera entre les îles où vous pourrez découvrir de nouvelles terres et des aventures passionnantes.",
  "statements.tutorial.two":
    "De nombreuses terres sont éloignées et nécessiteront un Bumpkin expérimenté avant que vous puissiez les visiter.",
  "statements.tutorial.three":
    "Votre aventure commence maintenant, jusqu'où vous explorez... cela dépend de vous.",
  "statements.visit.firePit":
    "Visitez le Fire Pit pour cuisiner de la nourriture et nourrir votre Bumpkin.",
  "statements.wish.granted.time": "Il est temps d'accorder votre vœu !",
  "statements.wish.granted": "Votre vœu a été exaucé.",
  "statements.wish.made": "Vous avez fait un vœu !",
  "statements.wish.ready.in": "Temps avant le prochain vœu : ",
  "statements.wish.thanks": "Merci de soutenir le projet et de faire un vœu.",
  "statements.wish.time":
    "Revenez dans le laps de temps suivant pour voir à quel point vous avez de la chance : ",
  "statements.wish.warning.one":
    "Sachez que seuls les jetons LP que vous avez détenus au moment où le vœu a été fait seront pris en compte lorsque le vœu sera exaucé.",
  "statements.wish.warning.two":
    "Si vous retirez votre liquidité pendant cette période, vous ne recevrez aucune récompense.",
  "statements.wishing-well.info.one":
    "Le puits à souhaits est un endroit magique où des récompenses SFL peuvent être obtenues en faisant un vœu !",
  "statements.wishing-well.info.two":
    "Les vœux sont accordés aux agriculteurs qui ont fourni de la liquidité dans le jeu. Plus d'informations :",
  "statements.wishing-well.info.three":
    "Il semble que vous ayez ces jetons LP magiques dans votre portefeuille !",
  "statements.wishing-well.not.providing.liquidity":
    "Il semble que vous ne fournissiez pas encore de liquidité. Plus d'informations : ",
  "statements.wishing.well.amount": "Montant des récompenses dans le puits : ",
  "statements.wishing.well.luck": "Voyons à quel point vous êtes chanceux !",
  "statements.wrongChain.one":
    "Consultez ce guide pour vous aider à vous connecter.",
  "statements.feed.bumpkin.one":
    "Vous n'avez pas de nourriture dans votre inventaire.",
  "statements.feed.bumpkin.two":
    "Vous devrez cuisiner de la nourriture pour nourrir votre Bumpkin.",
  "statements.empty.chest":
    "Votre coffre est vide, découvrez des objets rares aujourd'hui !",
  "statements.chest.captcha": "Appuyez sur le coffre pour l'ouvrir",
  "statements.gold.pass.required":
    "Un Gold Pass est requis pour mint des NFT rares.",
  "statements.frankie.plaza":
    "Rendez-vous à la place pour fabriquer des décorations rares !",
  "statements.blacksmith.plaza":
    "Rendez-vous à la place pour plus d'objets rares.",
  "statements.water.well.needed.one":
    "Un puits d'eau supplémentaire est nécessaire.",
  "statements.water.well.needed.two":
    "Pour prendre en charge plus de cultures, construisez un puits.",
  "statements.soldOut": "Épuisé",
  "statements.inStock": "En stock",
  "statements.soldOutWearables": "Voir les accessoires épuisés",
  "statements.craft.composter": "Fabriquer au composteur",
};

const bumpkinTrade: Record<BumpkinTrade, string> = {
  "bumpkinTrade.askPrice": "Prix demandé :",
  "bumpkinTrade.purchased": "Felicitations, votre annonce a été achetée !",
  "bumpkinTrade.plaza":
    "Rendez-vous à la place pour que d'autres joueurs puissent commercer avec vous",
  "bumpkinTrade.lvl": "Vous devez être niveau 10 pour commercer",
  "bumpkinTrade.noTradeLs":
    "Vous n'avez aucune annonce commerciale répertoriée.",
  "bumpkinTrade.sell":
    "Vendez vos ressources à d'autres joueurs en échange de SFL.",
  "bumpkinTrade.list": "Lister le commerce",
};

const landscapeTerms: Record<LandscapeTerms, string> = {
  "landscape.intro.one": "Concevez votre île de rêve !",
  "landscape.intro.two":
    "En mode conception, vous pouvez tenir, faire glisser et déplacer des objets.",
  "landscape.intro.three": "Fabriquez des décorations rares",
  "landscape.intro.four": "Placez des objets de collection de votre coffre",
  "landscape.expansion.one":
    "Chaque parcelle de terrain est accompagnée de ressources uniques pour vous aider à construire votre empire agricole !",
  "landscape.expansion.two":
    "D'autres expansions seront bientôt disponibles...",
  "landscape.timerPopover": "Prochaine expansion",
  "landscape.dragMe": "Faites glisser-moi",
};

const bumpkinPartRequirements: Record<BumpkinPartRequirements, string> = {
  "part.hair": "Les cheveux sont requis",
  "part.body": "Le corps est requis",
  "part.shoes": "Les chaussures sont requises",
  "part.shirt": "La chemise est requise",
  "part.pants": "Le pantalon est requis",
  "part.background": "L'arrière-plan est requis",
};

const retreatTerms: Record<RetreatTerms, string> = {
  "retreatTerms.introTravel.one": "Hey voyageur ! Prêt à explorer ?",
  "retreatTerms.introTravel.two":
    "Sunflower Land regorge d'îles passionnantes où vous pouvez effectuer des livraisons, fabriquer des NFT rares et même chercher des trésors !",
  "retreatTerms.introTravel.three":
    "Différents endroits offrent différentes opportunités pour dépenser vos ressources durement gagnées.",
  "retreatTerms.introTravel.four":
    "À tout moment, cliquez sur le bouton de voyage pour rentrer chez vous.",
  "retreatTerms.resale.title": "À la recherche d'objets rares ?",
  "retreatTerms.resale.one":
    "Les joueurs peuvent échanger des objets spéciaux qu'ils ont fabriqués en jeu.",
  "retreatTerms.resale.two":
    "Vous pouvez les acheter sur des marchés secondaires comme OpenSea.",
  "retreatTerms.resale.three": "Voir les objets sur OpenSea",
};

const boostDescriptions: Record<BoostDescriptions, string> = {
  // Mutant Chickens
  "description.speed.chicken.one":
    "Vos poules produiront maintenant des œufs 10 % plus rapidement.",
  "description.speed.chicken.two": "Produit des œufs 10 % plus rapidement",
  "description.fat.chicken.one":
    "Vos poules auront désormais besoin de 10 % de moins de blé par repas.",
  "description.fat.chicken.two":
    "10 % de blé en moins nécessaire pour nourrir une poule",
  "description.rich.chicken.one":
    "Vos poules produiront maintenant 10 % de plus d'œufs.",
  "description.rich.chicken.two": "Produit 10 % de plus d'œufs",
  "description.ayam.cemani": "La poule la plus rare qui existe !",
  "description.el.pollo.veloz.one":
    "Vos poules pondront des œufs 4 heures plus rapidement !",
  "description.el.pollo.veloz.two":
    "Donnez-moi ces œufs, vite ! Boost de vitesse de ponte de 4 heures.",
  "description.banana.chicken":
    "Une poule qui booste les bananes. Quel monde nous vivons.",

  // Boosts
  "description.victoria.sisters": "Les sœurs passionnées de citrouilles",
  "description.undead.rooster":
    "Une victime malheureuse de la guerre. Augmentation de 10% de la production d'œufs.",
  "description.observatory":
    "Explorez les étoiles et améliorez le développement scientifique",
  "description.time.warp.totem":
    "Vitesse doublée pour les cultures, arbres, cuisine & minéraux. Dure seulement 2 heures",
  "description.cabbage.boy": "Ne réveillez pas le bébé !",
  "description.cabbage.girl": "Chut, il dort",
  "description.wood.nymph.wendy":
    "Lance un enchantement pour séduire les fées des bois.",
  "description.peeled.potato":
    "Une pomme de terre précieuse, encourage des pommes de terre bonus à la récolte.",
  "description.potent.potato":
    "Puissante ! Donne 3% de chance d'obtenir +10 pommes de terre à la récolte.",
  "description.radical.radish":
    "Radical ! Donne 3% de chance d'obtenir +10 radis à la récolte.",
  "description.stellar.sunflower":
    "Stellaire ! Donne 3% de chance d'obtenir +10 tournesols à la récolte.",
  "description.lady.bug":
    "Un incroyable insecte qui se nourrit de pucerons. Améliore la qualité des pommes.",
  "description.squirrel.monkey":
    "Un prédateur naturel des oranges. Les orangers ont peur quand un singe écureuil est à proximité.",
  "description.black.bearry":
    "Son en-cas favori - de grosses myrtilles juteuses. Il les dévore à pleines mains !",
  "description.maneki.neko":
    "Le chat qui invite. Tirez sur son bras et la chance viendra",
  "description.easter.bunny": "Un objet rare de Pâques",
  "description.pablo.bunny": "Un lapin de Pâques magique",
  "description.foliant": "Un livre de sorts.",
  "description.tiki.totem":
    "Le Totem Tiki ajoute 0,1 de bois à chaque arbre que vous abattez.",
  "description.lunar.calendar":
    "Les cultures suivent désormais le cycle lunaire ! Augmentation de 10 % de la vitesse de croissance des cultures.",
  "description.heart.davy.jones":
    "Celui qui le possède détient un immense pouvoir sur les sept mers, peut chercher des trésors sans se fatiguer.",
  "description.treasure.map":
    "Une carte enchantée qui guide son détenteur vers des trésors précieux. +20 % de profit sur les objets trouvés sur la plage.",
  "description.genie.lamp":
    "Une lampe magique qui contient un génie qui vous accordera trois vœux.",
  "description.basic.scarecrow":
    "Défenseur exigeant des plantes très importantes de votre ferme.",
  "description.scary.mike":
    "Le chuchoteur de légumes et champion des récoltes effrayamment bonnes !",
  "description.laurie.chuckle.crow":
    "Avec son rire déconcertant, elle chasse les picoreurs loin de vos cultures.",
  "description.immortal.pear":
    "Une poire à longue durée de vie qui fait durer les arbres fruitiers plus longtemps.",
  "description.bale":
    "Le voisin préféré des volailles, offrant un refuge confortable aux poules.",
  "description.sir.goldensnout":
    "Un membre de la royauté, Sir Goldensnout infuse votre ferme d'une prospérité souveraine grâce à son fumier doré.",
  "description.freya.fox":
    "Gardienne enchanteresse, elle stimule la croissance des citrouilles avec son charme mystique. Récoltez des citrouilles abondantes sous son regard bienveillant.",
  "description.queen.cornelia":
    "Commandez le pouvoir royal de la Reine Cornelia et bénéficiez d'un magnifique boost en zone pour votre production de maïs. +1 Maïs.",
};

const cropFruitDescriptions: Record<CropFruitDescriptions, string> = {
  // Crops
  "description.sunflower": "Une fleur ensoleillée",
  "description.potato": "Plus sain que vous ne le pensez.",
  "description.pumpkin": "Il y a plus dans la citrouille que dans la tarte.",
  "description.carrot": "Ils sont bons pour vos yeux !",
  "description.cabbage":
    "Autrefois un luxe, maintenant un aliment pour beaucoup.",
  "description.beetroot": "Bon contre la gueule de bois !",
  "description.cauliflower": "Excellent substitut du riz !",
  "description.parsnip": "À ne pas confondre avec les carottes.",
  "description.eggplant": "Œuvre d'art comestible de la nature.",
  "description.corn":
    "Des grains de maïs ensoleillés, trésor estival de la nature.",
  "description.radish": "Ça prend du temps mais ça vaut la peine d'attendre !",
  "description.wheat": "La culture la plus récoltée au monde.",
  "description.kale": "Un aliment puissant pour les Bumpkins !",

  // Fruits
  "description.blueberry": "La faiblesse d'un Goblin",
  "description.orange":
    "De la vitamine C pour garder votre Bumpkin en bonne santé",
  "description.apple": "Parfait pour une tarte aux pommes maison",
  "description.banana": "Oh, la banane !",

  // Exotic Crops
  "description.white.carrot": "Une carotte pâle aux racines pâles",
  "description.warty.goblin.pumpkin":
    "Une citrouille fantasque et couverte de verrues",
  "description.adirondack.potato":
    "Une pomme de terre robuste, style Adirondack !",
  "description.purple.cauliflower": "Un chou-fleur pourpre royal",
  "description.chiogga": "Une betterave arc-en-ciel !",
  "description.golden.helios": "Grandeur baignée de soleil !",
  "description.black.magic": "Une fleur sombre et mystérieuse !",
};

const foodDescriptions: Record<FoodDescriptions, string> = {
  // Fire Pit
  "description.pumpkin.soup": "Une soupe crémeuse que les gobelins adorent",
  "description.mashed.potato": "Ma vie, c'est la pomme de terre.",
  "description.bumpkin.broth":
    "Un bouillon nutritif pour reconstituer votre Bumpkin",
  "description.boiled.eggs":
    "Les œufs durs sont parfaits pour le petit-déjeuner",
  "description.kale.stew": "Un parfait booster pour votre Bumpkin !",
  "description.mushroom.soup": "Réchauffez l'âme de votre Bumpkin.",
  "description.reindeer.carrot":
    "Rudolph ne peut pas s'arrêter de les manger !",
  "description.kale.omelette": "Un petit-déjeuner sain",
  "description.cabbers.mash": "Choux et pommes de terre en purée",
  "description.popcorn": "Un snack croustillant fait maison classique.",
  "description.gumbo":
    "Un pot plein de magie ! Chaque cuillerée est une parade de Mardi Gras !",

  // Kitchen
  "description.roast.veggies":
    "Même les Gobelins doivent manger leurs légumes !",
  "description.bumpkin.salad": "Il faut garder votre Bumpkin en bonne santé !",
  "description.goblins.treat": "Les Gobelins en raffolent !",
  "description.cauliflower.burger": "Appel à tous les amateurs de chou-fleur !",
  "description.club.sandwich":
    "Rempli de carottes et de graines de tournesol grillées",
  "description.mushroom.jacket.potatoes":
    "Garnissez ces pommes de terre avec ce que vous avez !",
  "description.sunflower.crunch":
    "Un délice croustillant. Essayez de ne pas le brûler.",
  "description.bumpkin.roast": "Un plat traditionnel de Bumpkin",
  "description.goblin.brunch": "Un plat traditionnel des Gobelins",
  "description.fruit.salad": "Salade de fruits, Miam Miam",
  "description.bumpkin.ganoush": "Une tartinade d'aubergine rôtie zestée.",
  "description.chowder":
    "Le délice des marins dans un bol ! Plongez, il y a un trésor à l'intérieur !",
  "description.pancakes": "Un excellent début de journée pour un Bumpkin !",

  // Bakery
  "description.apple.pie": "La célèbre recette de Bumpkin Betty",
  "description.kale.mushroom.pie": "Une recette traditionnelle de Sapphiron",
  "description.cornbread": "Un pain ferme et doré, tout frais de la ferme.",
  "description.sunflower.cake": "Gâteau au tournesol",
  "description.potato.cake": "Gâteau à la pomme de terre",
  "description.pumpkin.cake": "Gâteau à la citrouille",
  "description.carrot.cake": "Gâteau aux carottes",
  "description.cabbage.cake": "Gâteau au chou",
  "description.beetroot.cake": "Gâteau à la betterave",
  "description.cauliflower.cake": "Gâteau au chou-fleur",
  "description.parsnip.cake": "Gâteau au panais",
  "description.radish.cake": "Gâteau au radis",
  "description.wheat.cake": "Gâteau au blé",
  "description.eggplant.cake": "Une délicieuse surprise sucrée de la ferme.",
  "description.orange.cake":
    "Content que nous ne cuisinions pas de pommes, n'est-ce pas ?",
  "description.pirate.cake":
    "Idéal pour les fêtes d'anniversaire sur le thème des pirates.",

  // Deli
  "description.blueberry.jam":
    "Les gobelins feraient n'importe quoi pour cette confiture",
  "description.fermented.carrots": "Vous avez un surplus de carottes ?",
  "description.sauerkraut": "Fini le chou ennuyeux !",
  "description.fancy.fries": "Choux et pommes de terre écrasées",
  "description.fermented.fish":
    "Délice audacieux ! Libérez le Viking en vous à chaque bouchée !",

  // Smoothie Shack
  "description.apple.juice": "Une boisson rafraîchissante et croquante",
  "description.orange.juice":
    "Le jus d'orange se marie parfaitement avec un Club Sandwich",
  "description.purple.smoothie": "Vous pouvez à peine goûter le chou",
  "description.power.smoothie":
    "Boisson officielle de la Société d'Haltérophilie des Bumpkins",
  "description.bumpkin.detox": "Lavez les péchés de la veille",
  "description.banana.blast":
    "Le carburant fruité ultime pour ceux qui ont une peau pour la puissance !",

  // Unused foods
  "description.roasted.cauliflower": "Le préféré des gobelins",
  "description.radish.pie": "Détestée par les humains, adorée par les gobelins",
};

const decorationDescriptions: Record<DecorationDescriptions, string> = {
  // Decorations
  "description.wicker.man":
    "Joignez vos mains et formez une chaîne, l'ombre de Wicker Man se lèvera à nouveau",
  "description.golden bonsai": "Les gobelins adorent aussi les bonsaïs",
  "description.christmas.bear": "Le préféré du Père Noël",
  "description.war.skull": "Décorez la terre avec les os de vos ennemis.",
  "description.war.tombstone": "R.I.P",
  "description.white.tulips": "Éloignez l'odeur des gobelins.",
  "description.potted.sunflower": "Illuminez votre terrain.",
  "description.potted.potato":
    "Le sang de la pomme de terre coule dans votre Bumpkin.",
  "description.potted.pumpkin": "Des citrouilles pour les Bumpkins",
  "description.cactus": "Économisez de l'eau et embellissez votre ferme !",
  "description.basic.bear":
    "Un ours basique. Utilisez-le au Goblin Retreat pour construire un ours !",
  "description.bonnies.tombstone":
    "Une addition effrayante à n'importe quelle ferme, la pierre tombale humaine de Bonnie vous donnera des frissons dans le dos.",
  "description.grubnashs.tombstone":
    "Ajoutez un charme espiègle avec la pierre tombale du gobelin de Grubnash.",
  "description.town.sign": "Montrez fièrement votre identifiant de ferme !",
  "description.dirt.path":
    "Gardez vos bottes de fermier propres avec un chemin bien foulé.",
  "description.bush": "Qu'y a-t-il qui se cache dans les buissons ?",
  "description.fence": "Ajoutez une touche de charme rustique à votre ferme.",
  "description.stone.fence":
    "Adoptez l'élégance intemporelle d'une clôture en pierre.",
  "description.pine.tree": "Debout, grand et puissant, un rêve aux aiguilles.",
  "description.shrub":
    "Améliorez votre aménagement paysager en jeu avec un magnifique arbuste.",
  "description.field.maple":
    "Un charmeur petit qui étend ses feuilles comme une délicate canopée verte.",
  "description.red.maple": "Foliage ardant et chaleur automnale dans le cœur.",
  "description.golden.maple":
    "Rayonnant de brillance avec ses feuilles dorées scintillantes.",
  "description.crimson.cap":
    "Un champignon imposant et vibrant, le champigion Crimson Cap Giant donnera vie à votre ferme.",
  "description.toadstool.seat":
    "Asseyez-vous et détendez-vous sur le whimsical Toadstool Seat en forme de champignon.",
  "description.chestnut.fungi.stool":
    "Le Chestnut Fungi Stool est un ajout robuste et rustique à n'importe quelle ferme.",
  "description.mahogany.cap":
    "Ajoutez une touche de sophistication avec le champigion Mahogany Cap Giant.",
  "description.candles":
    "Enchantez votre ferme avec des flammes spectrales scintillantes pendant la Witches' Eve.",
  "description.haunted.stump":
    "Invoquez des esprits et ajoutez un charme inquiétant à votre ferme.",
  "description.spooky.tree":
    "Un ajout amusant et hanté à la décoration de votre ferme !",
  "description.observer":
    "Un globe oculaire perpétuellement en mouvement, toujours vigilant et observateur !",
  "description.crow.rock": "Un corbeau perché sur une roche mystérieuse.",
  "description.mini.corn.maze":
    "Un souvenir du labyrinthe bien-aimé de la saison de la Veille des Sorcières 2023.",
  "description.lifeguard.ring":
    "Restez à flot avec style, votre sauveur en bord de mer !",
  "description.surfboard":
    "Ridez les vagues de l'émerveillement, béatitude de plage à bord !",
  "description.hideaway.herman":
    "Herman est là pour se cacher, mais il jette toujours un coup d'œil pour une fête !",
  "description.shifty.sheldon":
    "Sheldon est rusé, toujours en train de se faufiler vers la prochaine surprise sablonneuse !",
  "description.tiki.torch":
    "Allumez la nuit, ambiance tropicale brûlant brillamment !",
  "description.beach.umbrella":
    "Ombre, abri et élégance balnéaire dans une seule configuration ensoleillée !",
  "description.magic.bean": "Que va-t-il pousser ?",
  "description.giant.potato": "Une pomme de terre géante.",
  "description.giant.pumpkin": "Une citrouille géante.",
  "description.giant.cabbage": "Un chou géant.",
  "description.chef.bear": "Chaque chef a besoin d'un coup de main",
  "description.construction.bear":
    "Toujours construire dans un marché baissier",
  "description.angel.bear":
    "Il est temps de transcender l'agriculture paysanne",
  "description.badass.bear": "Rien ne peut vous arrêter.",
  "description.bear.trap": "C'est un piège !",
  "description.brilliant.bear": "Pure génie !",
  "description.classy.bear": "Plus de SFL que vous ne sauriez quoi en faire !",
  "description.farmer.bear": "Rien ne vaut une bonne journée de travail !",
  "description.rich.bear": "Une possession précieuse",
  "description.sunflower.bear": "La culture chérie d'un ours",
  "description.beta.bear":
    "Un ours découvert lors d'événements de test spéciaux",
  "description.rainbow.artist.bear":
    "Le propriétaire est un magnifique artiste ours !",
  "description.devil.bear":
    "Mieux vaut connaître le Diable que de ne pas connaître le Diable",
  "description.collectible.bear":
    "Un ours de collection, toujours en parfait état !",
  "description.cyborg.bear": "Hasta la vista, ours",
  "description.christmas.snow.globe":
    "Faites tourbillonner la neige et regardez-la s'animer",
  "description.kraken.tentacle":
    "Plongez dans le mystère des profondeurs marines ! Cette tentacule évoque des contes de légendes océaniques anciennes et de merveilles aquatiques.",
  "description.kraken.head":
    "Plongez dans le mystère des profondeurs marines ! Cette tête évoque des contes de légendes océaniques anciennes et de merveilles aquatiques.",
  "description.abandoned.bear": "Un ours qui a été laissé derrière sur l'île.",
  "description.turtle.bear": "Assez turtley pour le club des tortues.",
  "description.trex.skull": "Un crâne de T-Rex ! Incroyable !",
  "description.sunflower.coin": "Une pièce en tournesol.",
  "description.skeleton.king.staff": "Tous saluent le Roi Squelette !",
  "description.lifeguard.bear":
    "L'ours sauveteur est là pour sauver la journée !",
  "description.snorkel.bear": "L'ours tuba aime nager.",
  "description.parasaur.skull": "Un crâne de parasaur !",
  "description.goblin.bear": "Un ours gobelin. C'est un peu effrayant.",
  "description.golden.bear.head": "Effrayant, mais cool.",
  "description.pirate.bear": "Argh, moussaillon ! Serre-moi dans tes bras !",
  "description.galleon": "Un navire jouet, encore en assez bon état.",
  "description.dinosaur.bone":
    "Un os de dinosaure ! De quelle créature s'agit-il ?",
  "description.human.bear":
    "Un ours humain. Encore plus effrayant qu'un ours gobelin.",
  "description.flamingo":
    "Représente un symbole de la beauté de l'amour, se tenant haut et confiant.",
  "description.blossom.tree":
    "Ses pétales délicats symbolisent la beauté et la fragilité de l'amour.",
  "description.heart.balloons":
    "Utilisez-les comme décoration pour des occasions romantiques.",
  "description.whale.bear":
    "Il a un corps rond et poilu comme un ours, mais avec les nageoires, la queue et le souffle d'une baleine.",
  "description.valentine.bear": "Pour ceux qui aiment.",
  "description.easter.bear": "Comment un lapin peut-il pondre des œufs ?",
  "description.easter.bush": "Qu'y a-t-il à l'intérieur ?",
  "description.giant.carrot":
    "Une énorme carotte se dressait, projetant des ombres amusantes, tandis que les lapins contemplaient avec émerveillement.",
  "description.beach.ball":
    "Une balle rebondissante apporte des vibes de plage, chasse l'ennui.",
  "description.palm.tree":
    "Grands, de plage, ombragés et élégants, les palmiers font danser les vagues.",
  // Banners
  "description.goblin.war.banner":
    "Une démonstration d'allégeance à la cause des Gobelins",
  "description.human.war.banner":
    "Une démonstration d'allégeance à la cause humaine",
};

const fishDescriptions: Record<FishDescriptions, string> = {
  // Fish
  "description.anchovy.one":
    "L'acrobate miniature pressé de l'océan, toujours en mouvement !",
  "description.anchovy.two": "Petit poisson, grande saveur !",
  "description.butterflyfish.one":
    "Un poisson à la mode, exhibant ses rayures vives et élégantes.",
  "description.butterflyfish.two": "Nagez dans les couleurs et les saveurs !",
  "description.blowfish.one":
    "Le comique rond et gonflé de la mer, garanti pour vous faire sourire.",
  "description.blowfish.two": "Dînez avec danger, une surprise épineuse !",
  "description.clownfish.one":
    "Le bouffon sous-marin, arborant un smoking tangerine et un charme clownesque.",
  "description.clownfish.two":
    "Pas de blagues, juste de la délicieuseté pure !",
  "description.seabass.one":
    "Votre ami 'pas si excitant' aux écailles argentées - une prise de base !",
  "description.seabass.two": "L'essentiel de la cuisine en bord de mer !",
  "description.seahorse.one":
    "Le danseur au ralenti de l'océan, se balançant gracieusement dans le ballet aquatique.",
  "description.seahorse.two": "Délicat, rare et étonnamment savoureux !",
  "description.horsemackerel.one":
    "Un coureur avec un pelage brillant, toujours en course à travers les vagues.",
  "description.horsemackerel.two":
    "Galopez à travers les saveurs à chaque bouchée !",
  "description.squid.one":
    "L'énigme des profondeurs avec des tentacules pour titiller votre curiosité.",
  "description.squid.two": "Encrez votre chemin vers des saveurs exquises !",
  "description.redsnapper.one":
    "Une prise digne de son poids en or, vêtue de rouge cramoisi ardent.",
  "description.redsnapper.two":
    "Plongez dans des océans de saveurs riches et zestées !",
  "description.morayeel.one":
    "Un traînard sournois dans les coins ombragés de l'océan.",
  "description.morayeel.two": "Glissant, savoureux et sensationnel !",
  "description.oliveflounder.one":
    "Le maître du camouflage du fond marin, toujours confondu avec la foule.",
  "description.oliveflounder.two": "Tâtonnez dans la richesse et la saveur !",
  "description.napoleanfish.one":
    "Rencontrez le poisson au complexe de Napoléon - petit, mais royal !",
  "description.napoleanfish.two": "Conquérez votre faim avec cette prise !",
  "description.surgeonfish.one":
    "Le guerrier néon de l'océan, armé d'une attitude tranchante.",
  "description.surgeonfish.two": "Opérez vos papilles avec précision !",
  "description.zebraturkeyfish.one":
    "Des rayures, des épines et une disposition zestée, ce poisson est un véritable arrêt sur image !",
  "description.zebraturkeyfish.two":
    "Rayé, épineux et spectaculairement savoureux !",
  "description.ray.one":
    "Le planeur sous-marin, une belle aile sereine à travers les vagues.",
  "description.ray.two": "Planez dans un monde de saveurs riches !",
  "description.hammerheadshark.one":
    "Rencontrez le requin à tête d'affiche, avec une tête pour les affaires et un corps pour l'aventure !",
  "description.hammerheadshark.two": "Un choc frontal avec la saveur !",
  "description.tuna.one":
    "Le sprinter musclé de l'océan, prêt pour une course fantastique de nageoires !",
  "description.tuna.two": "Un titan de la saveur dans chaque tranche !",
  "description.mahimahi.one":
    "Un poisson qui croit vivre la vie en couleurs avec des nageoires dorées.",
  "description.mahimahi.two": "Double le nom, double la déliciosité !",
  "description.bluemarlin.one":
    "Une légende océanique, le marlin avec une attitude aussi profonde que la mer.",
  "description.bluemarlin.two":
    "Dirigez votre appétit avec cette prise royale !",
  "description.oarfish.one":
    "Le long et le long de lui - un voyageur océanique énigmatique.",
  "description.oarfish.two": "Ramez vers une saveur légendaire !",
  "description.footballfish.one":
    "Le MVP des profondeurs, une étoile bioluminescente prête à jouer !",
  "description.footballfish.two": "Marquez un touchdown en saveur !",
  "description.sunfish.one":
    "Le preneur de soleil de l'océan, se prélassant sous les projecteurs avec des nageoires bien levées.",
  "description.sunfish.two":
    "Prélassez-vous dans l'éclat de sa saveur délectable !",
  "description.coelacanth.one":
    "Un vestige préhistorique, avec un goût pour le passé et le présent.",
  "description.coelacanth.two":
    "Une saveur préhistorique qui a résisté à l'épreuve du temps !",
  "description.whaleshark.one":
    "Le doux géant des profondeurs, filtrant les trésors du buffet de l'océan.",
  "description.whaleshark.two":
    "Un festin colossal pour des envies monumentales !",
  "description.barredknifejaw.one":
    "Un hors-la-loi océanique avec des rayures en noir et blanc et un cœur en or.",
  "description.barredknifejaw.two":
    "Tranchez la faim avec des saveurs tranchantes !",
  "description.sawshark.one":
    "Avec un museau en forme de scie, c'est le menuisier de l'océan, toujours à la pointe !",
  "description.sawshark.two": "Saveur de pointe des profondeurs !",
  "description.whiteshark.one":
    "Le requin au sourire meurtrier, régnant sur les mers avec une intensité de nageoire !",
  "description.whiteshark.two": "Plongez dans un océan de saveur palpitante !",

  // Marine Marvels
  "description.twilight.anglerfish":
    "Un poisson-hameçon des profondeurs avec une lumière intégrée, guidant son chemin dans l'obscurité.",
  "description.starlight.tuna":
    "Un thon qui brille plus que les étoiles, prêt à illuminer votre collection.",
  "description.radiant.ray":
    "Une raie qui préfère briller dans l'obscurité, avec un secret scintillant à partager.",
  "description.phantom.barracuda":
    "Un poisson-barracuda insaisissable et spectral des profondeurs, se cachant dans les ombres.",
  "description.gilded.swordfish":
    "Un poisson-épée aux écailles qui scintillent comme de l'or, la prise ultime !",
};

const buildingDescriptions: Record<BuildingDescriptions, string> = {
  // Buildings
  "description.water.well": "Les cultures ont besoin d'eau !",
  "description.kitchen": "Améliorez vos compétences culinaires",
  "description.compost.bin":
    "Produit de l'appât et de l'engrais régulièrement.",
  "description.hen.house": "Développez votre empire avicole",
  "description.bakery": "Faites cuire vos gâteaux préférés",
  "description.turbo.composter":
    "Produit de l'appât et de l'engrais avancés régulièrement.",
  "description.deli": "Satisfaites votre appétit avec ces délices !",
  "description.smoothie.shack": "Fraîchement pressé !",
  "description.warehouse": "Augmente vos stocks de graines de 20%",
  "description.toolshed": "Augmente vos stocks d'outils d'atelier de 50%",
  "description.premium.composter":
    "Produit de l'appât et de l'engrais experts régulièrement.",
  "description.town.center":
    "Rassemblez-vous autour du Town Center pour les dernières nouvelles",
  "description.market": "Achetez et vendez au Market des fermiers",
  "description.fire.pit":
    "Rôtissez vos tournesols, nourrissez et montez de niveau votre Bumpkin",
  "description.workbench": "Fabriquez des outils pour collecter des ressources",
  "description.tent": "(Arrêté)",
};

const toolDescriptions: Record<ToolDescriptions, string> = {
  // Tools
  "description.axe": "Utilisé pour collecter du bois",
  "description.pickaxe": "Utilisé pour collecter de la pierre",
  "description.stone.pickaxe": "Utilisé pour collecter du fer",
  "description.iron.pickaxe": "Utilisé pour collecter de l'or",
  "description.hammer": "Bientôt disponible",
  "description.rod": "Utilisé pour attraper du poisson",
  "description.rusty.shovel":
    "Utilisé pour retirer des bâtiments et des objets de collection",
  "description.shovel": "Plantez et récoltez des cultures.",
  "description.sand.shovel": "Utilisé pour creuser des trésors",
  "description.sand.drill":
    "Percez profondément pour trouver des trésors peu communs ou rares",
};

const gameDescriptions: Record<GameDescriptions, string> = {
  // Quest Items
  "description.goblin.key": "La clé du gobelin",
  "description.sunflower.key": "La clé du tournesol",
  "description.ancient.goblin.sword": "Une épée ancienne de gobelin",
  "description.ancient.human.warhammer": "Un marteau de guerre humain ancien",

  // Coupons
  "description.block.buck": "Un jeton précieux dans Sunflower Land !",
  "description.beta.pass":
    "Accédez en avant-première à des fonctionnalités pour les tests.",
  "description.war.bond": "Une marque d'un véritable guerrier",
  "description.jack.o.lantern": "Un objet spécial de l'événement d'Halloween",
  "description.golden.crop": "Une culture dorée brillante",
  "description.red.envelope": "Waouh, vous avez de la chance !",
  "description.love.letter": "Exprimez des sentiments d'amour",
  "description.solar.flare.ticket":
    "Un billet utilisé pendant la Saison de Solar Flare",
  "description.dawn.breaker.ticket":
    "Un billet utilisé pendant la Saison de Dawn Breake",
  "description.crow.feather":
    "Un billet utilisé pendant la Saison de Witches' Eve",
  "description.mermaid.scale":
    "Un billet utilisé pendant la Saison Catch the Kraken",
  "description.sunflower.supporter":
    "La marque d'un véritable supporter du jeu !",

  // Easter Items
  "description.egg.basket": "Événement de Pâques",
  "description.blue.egg": "Un œuf de Pâques bleu",
  "description.orange.egg": "Un œuf de Pâques orange",
  "description.green.egg": "Un œuf de Pâques vert",
  "description.yellow.egg": "Un œuf de Pâques jaune",
  "description.red.egg": "Un œuf de Pâques rouge",
  "description.pink.egg": "Un œuf de Pâques rose",
  "description.purple.egg": "Un œuf de Pâques violet",
};

const fishingQuests: Record<FishingQuests, string> = {
  "quest.basic.fish": "Attrapez chaque poisson de base",
  "quest.advanced.fish": "Attrapez chaque poisson avancé",
  "quest.all.fish": "Découvrez chaque poisson de base, avancé et expert",
  "quest.300.fish": "Attrapez 300 poissons",
  "quest.1500.fish": "Attrapez 1500 poissons",
  "quest.marine.marvel": "Attrapez chaque Marine Marvel",
};
const islandName: Record<IslandName, string> = {
  "island.home": "Home",
  "island.pumpkin.plaza": "Pumpkin Plaza",
  "island.beach": "Beach",
  "island.woodlands": "Woodlands",
  "island.helios": "Helios",
  "island.goblin.retreat": "Goblin Retreat",
};

const levelUpMessages: Record<LevelUpMessages, string> = {
  "levelUp.2":
    "Yeehaw, vous avez atteint le niveau 2 ! Les cultures tremblent dans leurs bottes.",
  "levelUp.3":
    "Félicitations pour le niveau 3 ! Vous grandissez comme une mauvaise herbe...",
  "levelUp.4":
    "Félicitations pour le niveau 4 ! Vous avez officiellement dépassé votre main verte.",
  "levelUp.5":
    "Niveau 5 et toujours en vie ! Votre dur labeur porte ses fruits... ou devrions-nous dire 'travail du foin' ?",
  "levelUp.6":
    "Wow, niveau 6 déjà ? Vous devez être fort comme un bœuf. Ou du moins votre charrue l'est.",
  "levelUp.7":
    "Félicitations pour avoir atteint le niveau 7 ! Votre ferme est é-maïs-nante.",
  "levelUp.8": "Niveau 8, très bien ! Vous semez les graines du succès.",
  "levelUp.9":
    "Neuf neuf, niveau 9ieme ! Votre récolte grandit aussi vite que vos compétences.",
  "levelUp.10":
    "Niveau 10, chiffres doubles ! Votre ferme a tellement fière allure que même les poules sont impressionnées.",
  "levelUp.11": "Niveau 11, vous faites pleuvoir (de l'eau, bien sûr) !",
  "levelUp.12":
    "Félicitations pour le niveau 12 ! Votre ferme commence vraiment à cultiver du caractère.",
  "levelUp.13":
    "Niveau 13 chanceux ! Vous commencez vraiment à prendre le coup de cette agriculture.",
  "levelUp.14":
    "Niveau 14, c'est incroyable de voir les progrès que tu as réalisés !",
  "levelUp.15": "15 et prospère ! Votre ferme n'a jamais été aussi belle.",
  "levelUp.16":
    "Félicitations pour le niveau 16 ! Vos compétences en agriculture prennent vraiment racine.",
  "levelUp.17":
    "Niveau 17, vous récoltez ce que vous semez (et ça a l'air bien !).",
  "levelUp.18": "18 et bourgeonnant de potentiel !",
  "levelUp.19":
    "Félicitations pour le niveau 19 ! Votre ferme grandit aussi vite que vos compétences.",
  "levelUp.20": "Niveau 20, vous êtes la crème de la récolte !",
  "levelUp.21": "21 et récoltant comme un pro !",
  "levelUp.22":
    "Félicitations pour le niveau 22 ! Votre ferme est en train de réussir.",
  "levelUp.23":
    "Niveau 23, vos compétences en agriculture commencent vraiment à s'épanouir !",
  "levelUp.24": "Vous êtes vraiment en train de fleurir au niveau 24 !",
  "levelUp.25":
    "Niveau du quart de siècle ! Vous faites du foin pendant que le soleil brille.",
  "levelUp.26":
    "Félicitations pour le niveau 26 ! Vous exploitez vraiment cette agriculture.",
  "levelUp.27":
    "Niveau 27, vous commencez vraiment à vous démarquer dans le domaine !",
  "levelUp.28": "Vous élevez vraiment la barre au niveau 28 !",
  "levelUp.29":
    "Félicitations pour le niveau 29 ! Vous commencez vraiment à cultiver des compétences sérieuses.",
  "levelUp.30": "Niveau 30, vous êtes maintenant un vrai fermier !",
  "levelUp.31": "31 et toujours en pleine croissance !",
  "levelUp.32":
    "Félicitations pour le niveau 32 ! Votre ferme est en pleine floraison.",
  "levelUp.33":
    "Niveau 33, vos compétences en agriculture commencent vraiment à s'enraciner !",
  "levelUp.34": "Vous êtes vraiment en train de germer au niveau 34 !",
  "levelUp.35": "Niveau 35, vous êtes le tracteur-remorque de l'agriculture !",
  "levelUp.36":
    "Félicitations pour le niveau 36 ! Votre ferme commence vraiment à récolter du succès.",
  "levelUp.37":
    "Niveau 37, vos compétences commencent vraiment à se développer !",
  "levelUp.38":
    "Vous êtes vraiment en train de semer les graines du succès au niveau 38 !",
  "levelUp.39":
    "Félicitations pour le niveau 39 ! Votre ferme commence vraiment à mûrir.",
  "levelUp.40": "Niveau 40, vous êtes un véritable héros de la récolte !",
  "levelUp.41": "41 et toujours en pleine croissance !",
  "levelUp.42":
    "Félicitations pour le niveau 42 ! Votre ferme commence vraiment à récolter les récompenses.",
  "levelUp.43":
    "Niveau 43, vos compétences en agriculture commencent vraiment à s'enraciner !",
  "levelUp.44": "Vous récoltez vraiment le succès au niveau 44 !",
  "levelUp.45": "Niveau 45, vous êtes un véritable maître de la récolte !",
  "levelUp.46":
    "Félicitations pour le niveau 46 ! Vos compétences en agriculture commencent vraiment à porter leurs fruits.",
  "levelUp.47":
    "Niveau 47, vous commencez vraiment à devenir une légende de l'agriculture.",
  "levelUp.48": "Vous prospérez vraiment au niveau 48 !",
  "levelUp.49":
    "Félicitations pour le niveau 49 ! Vous commencez vraiment à récolter les fruits de votre dur labeur.",
  "levelUp.50":
    "À mi-chemin vers 100 ! Vous êtes maintenant un véritable professionnel de l'agriculture.",
  "levelUp.51": "51 et toujours en pleine croissance !",
  "levelUp.52":
    "Félicitations pour le niveau 52 ! Votre ferme est une véritable œuvre d'art.",
  "levelUp.53": "Niveau 53, vos compétences commencent vraiment à s'enraciner.",
  "levelUp.54": "Vous récoltez vraiment le bonheur au niveau 54 !",
  "levelUp.55": "Niveau 55, vous êtes une véritable force de l'agriculture.",
  "levelUp.56":
    "Félicitations pour le niveau 56 ! Votre ferme commence vraiment à s'épanouir.",
  "levelUp.57":
    "Niveau 57, Vous commencez vraiment à cultiver des compétences sérieuses.",
  "levelUp.58": "Vous semez vraiment les graines du succès au niveau 58 !",
  "levelUp.59":
    "Félicitations pour le niveau 59 ! Votre ferme est la crème de la crème.",
  "levelUp.60":
    "Niveau 60, vous êtes maintenant une véritable superstar de l'agriculture !",
};

const discordBonus: Record<DiscordBonus, string> = {
  "discord.bonus.niceHat": "Wow, joli chapeau !",
  "discord.bonus.attentionEvents":
    "N'oubliez pas de prêter attention aux événements spéciaux et aux cadeaux sur Discord pour ne rien manquer.",
  "discord.bonus.bonusReward": "Récompense bonus",
  "discord.bonus.payAttention":
    "Faites attention aux événements spéciaux et aux cadeaux sur Discord pour ne rien manquer.",
  "discord.bonus.enjoyCommunity":
    "Nous espérons que vous appréciez faire partie de notre communauté !",
  "discord.bonus.claimGift": "Réclamer le cadeau",
  "discord.bonus.communityInfo":
    "Saviez-vous qu'il y a plus de 100 000 joueurs dans notre communauté Discord vibrante ?",
  "discord.bonus.farmingTips":
    "Si vous cherchez des astuces et conseils pour l'agriculture, c'est l'endroit idéal.",
  "discord.bonus.freeGift":
    "Le meilleur... tout le monde qui rejoint reçoit un cadeau gratuit !",
  "discord.bonus.connect": "Se connecter à Discord",
};
// How To Play
const howToFarm: Record<HowToFarm, string> = {
  // Page 1
  "howToFarm.title": "Comment cultiver ?",
  "howToFarm.stepOne": "1. Récoltez les cultures lorsqu'elles sont prêtes",
  "howToFarm.stepTwo": "2. Visitez la ville et cliquez sur le magasin",
  "howToFarm.stepThree": "3. Vendez les cultures au magasin contre des SFL",
  "howToFarm.stepFour": "4. Achetez des graines avec vos SFL",
  "howToFarm.stepFive": "5. Plantez les graines et attendez",
};

const howToUpgrade: Record<HowToUpgrade, string> = {
  // Page 2
  "howToUpgrade.title": "Comment améliorer ?",
  "howToUpgrade.stepOne": "1. Parlez à un gobelin bloquant les champs",
  "howToUpgrade.stepTwo": "2. Visitez la ville et cliquez sur la cuisine",
  "howToUpgrade.stepThree": "3. Préparez la nourriture que le gobelin veut",
  "howToUpgrade.stepFour":
    "4. Voilà ! Profitez de vos nouveaux champs et récoltes",
};

const howToSync: Record<HowToSync, string> = {
  // Page 3
  "howToSync.title": "Comment synchroniser ?",
  "howToSync.description":
    "Tous vos progrès sont sauvegardés sur notre serveur de jeu. Vous devrez synchroniser sur la chaîne lorsque vous voudrez déplacer vos jetons, NFTs et ressources sur Polygon.",
  "howToSync.stepOne": "1. Ouvrez le menu",
  "howToSync.stepTwo": `2. Cliquez sur "Synchroniser sur la chaîne"`,
};

const letsGo: Record<LetsGo, string> = {
  //Page 4
  "letsGo.title": "C'est l'heure de jouer !",
  "letsGo.description":
    "Merci de jouer à la version bêta ! Nous travaillons encore sur le jeu et apprécions votre soutien durant ces premières étapes !",
  "letsGo.readMore": "Vous pouvez en savoir plus sur le jeu dans les ",
  "letsGo.officialDocs": "documents officiels",
  "letsGo.officialDocsLink": "https://docs.sunflower-land.com",
};

const bumpkinSkillsDescription: Record<BumpkinSkillsDescription, string> = {
  // Crops
  "description.green.thumb": "Les cultures produisent 5% de plus",
  "description.cultivator": "Les cultures poussent 5% plus vite",
  "description.master.farmer": "Les cultures produisent 10% de plus",
  "description.golden.flowers":
    "Chance d'obtenir de l'or en récoltant des tournesols",
  "description.happy.crop": "Chance d'obtenir 2x plus de récoltes",
  // Trees
  "description.lumberjack": "Les arbres laissent tomber 10% de plus",
  "description.tree.hugger": "Les arbres repoussent 20% plus rapidement",
  "description.tough.tree":
    "Chance d'obtenir 3x plus de bois en coupant des arbres",
  "description.money.tree":
    "Chance d'obtenir des drops SFL en coupant des arbres",
  // Rocks
  "description.digger": "Les pierres laissent tomber 10% de plus",
  "description.coal.face": "Les pierres se régénèrent 20% plus rapidement",
  "description.seeker": "Attire les Monstres des Roches",
  "description.gold.rush": "Chance d'obtenir 2.5x plus de drops d'or",
  // Cooking
  "description.rush.hour": "Cuisinez les repas 10% plus rapidement",
  "description.kitchen.hand":
    "Les repas rapportent 5% d'expérience supplémentaire",
  "description.michelin.stars":
    "Nourriture de haute qualité, rapporte 5% de plus de SFL",
  "description.curer":
    "Consommer les produits du Deli ajoute 15% d'expérience supplémentaire",
  // Animals
  "description.stable.hand": "Les animaux produisent 10% plus rapidement",
  "description.free.range": "Les animaux produisent 10% de plus",
  "description.horse.whisperer": "Augmente les chances d'obtenir des mutants",
  "description.buckaroo": "Chance d'obtenir des récoltes doubles",
};

const bountyDescription: Record<BountyDescription, string> = {
  "description.clam.shell": "Une coquille de palourde.",
  "description.sea.cucumber": "Un concombre de mer.",
  "description.coral": "Un morceau de corail, c'est joli.",
  "description.crab": "Un crabe, attention à ses pinces !",
  "description.starfish": "L'étoile de la mer.",
  "description.pirate.bounty":
    "Une prime pour un pirate. Ça vaut beaucoup d'argent.",
  "description.wooden.compass":
    "Ce n'est peut-être pas high-tech, mais il vous dirigera toujours dans la bonne direction, vous y croyez en bois ?",
  "description.iron.compass":
    "Fermez votre chemin vers le trésor ! Ce compas est 'attirant', et pas seulement vers le Nord magnétique !",
  "description.emerald.compass":
    "Guidez votre chemin à travers les mystères luxuriants de la vie ! Ce compas ne pointe pas seulement vers le Nord, il pointe vers l'opulence et la grandeur !",
  "description.old.bottle":
    "Bouteille de pirate antique, résonnant des récits d'aventures en haute mer.",
  "description.pearl": "Brille au soleil.",
  "description.pipi": "Plebidonax deltoides, trouvé dans l'océan Pacifique.",
  "description.seaweed": "Algues marines.",
};

export const FRENCH_TERMS: Record<TranslationKeys, string> = {
  ...achievementTerms,
  ...bountyDescription,
  ...boostDescriptions,
  ...buildingDescriptions,
  ...bumpkinSkillsDescription,
  ...bumpkinPartRequirements,
  ...bumpkinTrade,
  ...confirmationTerms,
  ...conversations,
  ...cropFruitDescriptions,
  ...decorationDescriptions,
  ...discordBonus,
  ...errorTerms,
  ...fishDescriptions,
  ...fishingQuests,
  ...foodDescriptions,
  ...gameDescriptions,
  ...gameTerms,
  ...generalTerms,
  ...howToUpgrade,
  ...howToFarm,
  ...howToSync,
  ...guideTerms,
  ...henHouseTerms,
  ...introTerms,
  ...islandName,
  ...landscapeTerms,
  ...letsGo,
  ...levelUpMessages,
  ...onboarding,
  ...questions,
  ...retreatTerms,
  ...rewardTerms,
  ...rulesTerms,
  ...seasonTerms,
  ...shopItems,
  ...statements,
  ...toolDescriptions,
  ...transactionTerms,
  ...warningTerms,
  ...welcomeTerms,
};
