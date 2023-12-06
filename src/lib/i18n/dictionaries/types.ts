import { InteractableModals } from "features/world/ui/InteractableModals";

export type GeneralTerms =
  | "2x.sale"
  | "achievements"
  | "add.liquidity"
  | "alr.bought"
  | "alr.claim"
  | "alr.completed"
  | "alr.crafted"
  | "alr.minted"
  | "auctions"
  | "back"
  | "bait"
  | "basket"
  | "beta"
  | "bounty"
  | "build"
  | "buy"
  | "cancel"
  | "card.cash"
  | "chest"
  | "chores"
  | "claim.skill"
  | "claim"
  | "clear"
  | "close"
  | "coming.soon"
  | "completed"
  | "confirm"
  | "congrats"
  | "connected"
  | "connecting"
  | "continue"
  | "cook"
  | "coupons"
  | "craft"
  | "crafting"
  | "crops"
  | "date"
  | "deliveries"
  | "delivery"
  | "details"
  | "easter.eggs"
  | "egg"
  | "equip"
  | "error"
  | "exotics"
  | "expand"
  | "explore"
  | "farm"
  | "featured"
  | "feed.bumpkin"
  | "fertilisers"
  | "fish.caught"
  | "fish"
  | "foods"
  | "for"
  | "forbidden"
  | "fruit"
  | "fruits"
  | "gotIt"
  | "grant.wish"
  | "guide"
  | "hungry?"
  | "info"
  | "item"
  | "last.updated"
  | "left"
  | "lets.go"
  | "list"
  | "loading"
  | "lvl"
  | "maintenance"
  | "make.wish"
  | "making.wish"
  | "mins"
  | "mint"
  | "minting"
  | "music"
  | "next"
  | "nextSkillPtLvl"
  | "no.mail"
  | "no.thanks"
  | "ocean.fishing"
  | "ok"
  | "open.gift"
  | "pass.required"
  | "placing.bid"
  | "print"
  | "providing.liquidity"
  | "purchasing"
  | "rank"
  | "read.more"
  | "refresh"
  | "refreshing"
  | "reqSkillPts"
  | "reqSkillPts"
  | "reqSkills"
  | "resources"
  | "restock"
  | "retry"
  | "reward.discovered"
  | "save"
  | "saving"
  | "secs"
  | "seeds"
  | "select.resource"
  | "sell.all"
  | "sell.one"
  | "sell.ten"
  | "sell"
  | "shopping"
  | "skillPts"
  | "skills"
  | "skip.order"
  | "sound.effects"
  | "success"
  | "support.team"
  | "swapping"
  | "syncing"
  | "task"
  | "tools"
  | "total.price"
  | "total"
  | "trades"
  | "trading"
  | "trash.collection"
  | "travel"
  | "try.again"
  | "uhOh"
  | "unlock.land"
  | "unlocking"
  | "verify"
  | "version"
  | "viewAll"
  | "visit.friend"
  | "wallet"
  | "welcome"
  | "wishing.well"
  | "withdraw"
  | "you.are.here";

export type GameTerms =
  | "dailyLim"
  | "gobSwarm"
  | "potions"
  | "bumpkinLvl"
  | "sflDiscord"
  | "auction.winner"
  | "farm.banned"
  | "proof.of.humanity"
  | "no.sfl"
  | "granting.wish"
  | "new.delivery.in"
  | "bumpkinBuzz";

export type ConfirmationTerms = "confirmation.sellCrops";

export type WelcomeTerms =
  | "welcome.otherWallets"
  | "welcome.needHelp"
  | "welcome.createAccount"
  | "welcome.creatingAccount"
  | "welcome.login"
  | "welcome.signingIn"
  | "welcome.signInMessage"
  | "welcome.email"
  | "welcome.takeover"
  | "welcome.promo";

export type RulesTerms =
  | "rules"
  | "rules.accounts"
  | "rules.noBots"
  | "rules.game"
  | "rules.termsOfService";

export type SeasonTerms =
  | "season.goodLuck"
  | "season.discount"
  | "season.banner"
  | "season.wearableAirdrop"
  | "season.bonusTickets"
  | "season.boostXP"
  | "season.exclusiveOffer"
  | "season.includes"
  | "season.limitedOffer"
  | "season.accessTo"
  | "season.buyNow"
  | "season.ctk";

export type Intro =
  | "intro.one"
  | "intro.two"
  | "intro.three"
  | "intro.four"
  | "intro.five";

export type ShopItems =
  | "shopItems.one"
  | "shopItems.two"
  | "shopItems.three"
  | "betty.intro"
  | "betty.buySeeds"
  | "betty.sellCrops";

export type AchievementsDialog =
  | "breadWinner.description"
  | "breadWinner.one"
  | "breadWinner.two"
  | "breadWinner.three"
  | "sunSeeker.description"
  | "cabbageKing.description"
  | "jackOLantern.description"
  | "coolFlower.description"
  | "farmHand.description"
  | "beetrootBeast.description"
  | "myLifeIsPotato.description"
  | "rapidRadish.description"
  | "twentyTwentyVision.description"
  | "stapleCrop.description"
  | "sunflowerSuperstar.description"
  | "bumpkinBillionaire.description"
  | "patientParsnips.description"
  | "cropChampion.description"
  | "busyBumpkin.description"
  | "busyBumpkin.one"
  | "busyBumpkin.two"
  | "kissTheCook.description"
  | "bakersDozen.description"
  | "brilliantBumpkin.description"
  | "chefDeCuisine.description"
  | "scarecrowMaestro.description"
  | "scarecrowMaestro.one"
  | "scarecrowMaestro.two"
  | "bigSpender.description"
  | "museum.description"
  | "highRoller.description"
  | "timbeerrr.description"
  | "craftmanship.description"
  | "driller.description"
  | "ironEyes.description"
  | "elDorado.description"
  | "timeToChop.description"
  | "canary.description"
  | "somethingShiny.description"
  | "bumpkinChainsawAmateur.description"
  | "goldFever.description"
  | "explorer.description"
  | "explorer.one"
  | "expansion.description"
  | "wellOfProsperity.description"
  | "wellOfProsperity.one"
  | "wellOfProsperity.two"
  | "contractor.description"
  | "fruitAficionado.description"
  | "fruitAficionado.one"
  | "fruitAficionado.two"
  | "orangeSqueeze.description"
  | "appleOfMyEye.description"
  | "blueChip.description"
  | "fruitPlatter.description"
  | "crowdFavourite.description"
  | "deliveryDynamo.description"
  | "deliveryDynamo.one"
  | "deliveryDynamo.two"
  | "seasonedFarmer.description"
  | "seasonedFarmer.one"
  | "seasonedFarmer.two"
  | "seasonedFarmer.three"
  | "treasureHunter.description"
  | "treasureHunter.one"
  | "treasureHunter.two"
  | "eggcellentCollection.description"
  | "eggcellentCollection.one"
  | "eggcellentCollection.two";

export type GuideTerms =
  | "guide.intro"
  | "gathering.description.one"
  | "gathering.description.two"
  | "gathering.description.three"
  | "crops.description.one"
  | "crops.description.two"
  | "crops.description.three"
  | "building.description.one"
  | "building.description.two"
  | "cooking.description.one"
  | "cooking.description.two"
  | "cooking.description.three"
  | "cooking.description.one"
  | "cooking.description.two"
  | "cooking.description.three"
  | "cooking.description.four"
  | "cooking.description.five"
  | "animals.description.one"
  | "animals.description.two"
  | "animals.description.three"
  | "crafting.description.one"
  | "crafting.description.two"
  | "crafting.description.three"
  | "crafting.description.four"
  | "deliveries.description.one"
  | "deliveries.description.two"
  | "scavenger.description.one"
  | "scavenger.description.two"
  | "fruit.description.one"
  | "fruit.description.two"
  | "fruit.description.three"
  | "seasons.description.one"
  | "seasons.description.two"
  | "pete.teaser.one"
  | "pete.teaser.two"
  | "pete.teaser.three"
  | "pete.teaser.four"
  | "pete.teaser.five"
  | "pete.teaser.six"
  | "pete.teaser.seven"
  | "pete.teaser.eight";

export type Conversations =
  | "hank-intro.headline"
  | "hank-intro.one"
  | "hank-intro.two"
  | "hank-intro.three"
  | "hank-crafting.headline"
  | "hank-crafting.one"
  | "hank-crafting.two"
  | "betty-intro.headline"
  | "betty-intro.one"
  | "betty-intro.two"
  | "betty-intro.three"
  | "betty.market-intro.one"
  | "betty.market-intro.two"
  | "betty.market-intro.three"
  | "betty.market-intro.four"
  | "bruce-intro.headline"
  | "bruce-intro.one"
  | "bruce-intro.two"
  | "bruce-intro.three"
  | "blacksmith-intro.headline"
  | "blacksmith-intro.one"
  | "pete.first-expansion.one"
  | "pete.first-expansion.two"
  | "pete.first-expansion.three"
  | "pete.blacksmith.one"
  | "pete.blacksmith.two"
  | "pete.blacksmith.three"
  | "pete.levelthree.one"
  | "pete.levelthree.two"
  | "pete.levelthree.three"
  | "pete.levelthree.four"
  | "pete.help.zero"
  | "pete.help.one"
  | "pete.help.two"
  | "grimbly.expansion.one"
  | "grimbly.expansion.two";

export type HenHouseTerms =
  | "henHouse.chickens"
  | "henHouse.text.one"
  | "henHouse.text.two"
  | "henHouse.text.three"
  | "henHouse.text.four"
  | "henHouse.text.five"
  | "henHouse.text.six";

export type RewardTerms =
  | "reward.title"
  | "reward.streak"
  | "reward.comeBackLater"
  | "reward.nextBonus"
  | "reward.unlock"
  | "reward.open"
  | "reward.lvlRequirement"
  | "reward.revealing"
  | "reward.streakBonus"
  | "reward.found"
  | "reward.spendWisely"
  | "reward.wearable";

export type ErrorTerms =
  | "error.congestion.one"
  | "error.congestion.two"
  | "error.forbidden.goblinVillage"
  | "error.multipleDevices.one"
  | "error.multipleDevices.two"
  | "error.multipleWallets.one"
  | "error.multipleWallets.two"
  | "error.toManyRequest.one"
  | "error.toManyRequest.two"
  | "error.blocked.betaTestersOnly"
  | "error.wentWrong"
  | "error.polygonRPC"
  | "error.connection.one"
  | "error.connection.two"
  | "error.connection.three"
  | "error.connection.four"
  | "error.diagnostic.info"
  | "error.Web3NotFound"
  | "error.noBumpkin"
  | "error.clock.not.synced";

export type WarningTerms =
  | "warning.noAxe"
  | "warning.chat.maxCharacters"
  | "warning.chat.noSpecialCharacters"
  | "warning.level.required"
  | "warning.hoarding.message"
  | "warning.hoarding.one"
  | "warning.hoarding.two";

export type TransactionTerms =
  | "transaction.blockBucksFarm"
  | "transaction.blockchain.one"
  | "transaction.blockchain.two"
  | "transaction.congrats"
  | "transaction.creditCard"
  | "transaction.donate"
  | "transaction.donating"
  | "transaction.doNotRefresh"
  | "transaction.estimated.fee"
  | "transaction.excludeFees"
  | "transaction.id"
  | "transaction.matic"
  | "transaction.maticAmount"
  | "transaction.message"
  | "transaction.minblockbucks"
  | "transaction.mintFarm.one"
  | "transaction.mintFarm.two"
  | "transaction.network"
  | "transaction.openSea"
  | "transaction.pay"
  | "transaction.payCash"
  | "transaction.payMatic"
  | "transaction.progChain"
  | "transaction.progress"
  | "transaction.rejected"
  | "transaction.success"
  | "transaction.t&c.one"
  | "transaction.t&c.two"
  | "transaction.thankYou"
  | "transaction.transacting.one"
  | "transaction.transacting.two"
  | "transaction.transacting.three"
  | "transaction.withdraw.one"
  | "transaction.withdraw.two"
  | "transaction.withdraw.three"
  | "transaction.withdraw.four"
  | "transaction.withdraw.five"
  | "transaction.withdraw.six"
  | "transaction.withdraw.polygon";

export type Onboarding =
  | "onboarding.welcome"
  | "onboarding.step.one"
  | "onboarding.step.two"
  | "onboarding.step.three"
  | "onboarding.intro.one"
  | "onboarding.intro.two"
  | "onboarding.cheer"
  | "onboarding.form.one"
  | "onboarding.form.two"
  | "onboarding.duplicateUser.one"
  | "onboarding.duplicateUser.two"
  | "onboarding.starterPack"
  | "onboarding.wallet.titleOne"
  | "onboarding.wallet.one"
  | "onboarding.wallet.two"
  | "onboarding.wallet.haveWallet"
  | "onboarding.wallet.createButton"
  | "onboarding.wallet.titleTwo"
  | "onboarding.wallet.three"
  | "onboarding.wallet.four"
  | "onboarding.wallet.acceptButton"
  | "onboarding.wallet.acceptLoading"
  | "onboarding.wallet.titleThree"
  | "onboarding.wallet.five"
  | "onboarding.wallet.six"
  | "onboarding.wallet.final";

export type Questions = "questions.obtain.MATIC" | "questions.lowCash";

export type Statements =
  | "statements.adventure"
  | "statements.auctioneer.one"
  | "statements.auctioneer.two"
  | "statements.beta.one"
  | "statements.beta.two"
  | "statements.better.luck"
  | "statements.blacklist.one"
  | "statements.blacklist.two"
  | "statements.clickBottle"
  | "statements.clock.one"
  | "statements.clock.two"
  | "statements.conversation.one"
  | "statements.cooldown"
  | "statements.craft.composter"
  | "statements.docs"
  | "statements.dontRefresh"
  | "statements.feed.bumpkin.one"
  | "statements.feed.bumpkin.two"
  | "statements.gold.pass.required"
  | "statements.guide.one"
  | "statements.guide.two"
  | "statements.jigger.one"
  | "statements.jigger.two"
  | "statements.jigger.three"
  | "statements.jigger.four"
  | "statements.jigger.five"
  | "statements.jigger.six"
  | "statements.jigger.seven"
  | "statements.lvlUp"
  | "statements.maintenance"
  | "statements.make.a.wish"
  | "statements.minted"
  | "statements.minting"
  | "statements.mutant.chicken"
  | "statements.new.wish"
  | "statements.news"
  | "statements.no.reward"
  | "statements.ohNo"
  | "statements.openGuide"
  | "statements.patience"
  | "statements.potionRule.one"
  | "statements.potionRule.two"
  | "statements.potionRule.three"
  | "statements.potionRule.four"
  | "statements.potionRule.five"
  | "statements.potionRule.six"
  | "statements.potionRule.seven"
  | "statements.sfl.rewards.received"
  | "statements.sflLim.one"
  | "statements.sflLim.two"
  | "statements.sniped"
  | "statements.switchNetwork"
  | "statements.sync"
  | "statements.tapCont"
  | "statements.thankYou"
  | "statements.tutorial.one"
  | "statements.tutorial.two"
  | "statements.tutorial.three"
  | "statements.visit.firePit"
  | "statements.wish.granted.time"
  | "statements.wish.granted"
  | "statements.wish.made"
  | "statements.wish.ready.in"
  | "statements.wish.thanks"
  | "statements.wish.time"
  | "statements.wish.warning.one"
  | "statements.wish.warning.two"
  | "statements.wishing-well.info.one"
  | "statements.wishing-well.info.two"
  | "statements.wishing-well.info.three"
  | "statements.wishing-well.not.providing.liquidity"
  | "statements.wishing.well.amount"
  | "statements.wishing.well.luck"
  | "statements.wrongChain.one"
  | "statements.empty.chest"
  | "statements.chest.captcha"
  | "statements.frankie.plaza"
  | "statements.blacksmith.plaza"
  | "statements.water.well.needed.one"
  | "statements.water.well.needed.two"
  | "statements.soldOut"
  | "statements.inStock"
  | "statements.soldOutWearables";

export type LandscapeTerms =
  | "landscape.intro.one"
  | "landscape.intro.two"
  | "landscape.intro.three"
  | "landscape.intro.four"
  | "landscape.expansion.one"
  | "landscape.expansion.two"
  | "landscape.timerPopover"
  | "landscape.dragMe";

export type BumpkinTrade =
  | "bumpkinTrade.askPrice"
  | "bumpkinTrade.purchased"
  | "bumpkinTrade.plaza"
  | "bumpkinTrade.lvl"
  | "bumpkinTrade.noTradeLs"
  | "bumpkinTrade.sell"
  | "bumpkinTrade.list";

export type BumpkinPartRequirements =
  | "part.hair"
  | "part.body"
  | "part.shoes"
  | "part.shirt"
  | "part.pants"
  | "part.background";

export type RetreatTerms =
  | "retreatTerms.introTravel.zero"
  | "retreatTerms.introTravel.one"
  | "retreatTerms.introTravel.two"
  | "retreatTerms.introTravel.three"
  | "retreatTerms.introTravel.four"
  | "retreatTerms.resale.title"
  | "retreatTerms.resale.one"
  | "retreatTerms.resale.two"
  | "retreatTerms.resale.three";

export type BoostDescriptions =
  // Mutant Chickens
  | "description.speed.chicken.one"
  | "description.speed.chicken.two"
  | "description.fat.chicken.one"
  | "description.fat.chicken.two"
  | "description.rich.chicken.one"
  | "description.rich.chicken.two"
  | "description.ayam.cemani"
  | "description.el.pollo.veloz.one"
  | "description.el.pollo.veloz.two"
  | "description.banana.chicken"

  // Boosts
  | "description.victoria.sisters"
  | "description.undead.rooster"
  | "description.observatory"
  | "description.time.warp.totem"
  | "description.cabbage.boy"
  | "description.cabbage.girl"
  | "description.wood.nymph.wendy"
  | "description.peeled.potato"
  | "description.potent.potato"
  | "description.radical.radish"
  | "description.stellar.sunflower"
  | "description.lady.bug"
  | "description.squirrel.monkey"
  | "description.black.bearry"
  | "description.maneki.neko"
  | "description.easter.bunny"
  | "description.pablo.bunny"
  | "description.foliant"
  | "description.tiki.totem"
  | "description.lunar.calendar"
  | "description.heart.davy.jones"
  | "description.treasure.map"
  | "description.genie.lamp"
  | "description.sir.goldensnout"
  | "description.freya.fox"
  | "description.queen.cornelia"

  // Blacksmith items
  | "description.basic.scarecrow"
  | "description.scary.mike"
  | "description.laurie.chuckle.crow"
  | "description.immortal.pear"
  | "description.bale";

// export type BoostEffectDescriptions = "";

export type CropFruitDescriptions =
  // Crops
  | "description.sunflower"
  | "description.potato"
  | "description.pumpkin"
  | "description.carrot"
  | "description.cabbage"
  | "description.beetroot"
  | "description.cauliflower"
  | "description.parsnip"
  | "description.eggplant"
  | "description.corn"
  | "description.radish"
  | "description.wheat"
  | "description.kale"

  // Fruit
  | "description.blueberry"
  | "description.orange"
  | "description.apple"
  | "description.banana"

  // Exotic Crops
  | "description.white.carrot"
  | "description.warty.goblin.pumpkin"
  | "description.adirondack.potato"
  | "description.purple.cauliflower"
  | "description.chiogga"
  | "description.golden.helios"
  | "description.black.magic";

export type FoodDescriptions =
  // Fire Pit
  | "description.pumpkin.soup"
  | "description.mashed.potato"
  | "description.bumpkin.broth"
  | "description.boiled.eggs"
  | "description.kale.stew"
  | "description.mushroom.soup"
  | "description.reindeer.carrot"
  | "description.kale.omelette"
  | "description.cabbers.mash"
  | "description.popcorn"
  | "description.gumbo"

  // Kitchen
  | "description.roast.veggies"
  | "description.bumpkin.salad"
  | "description.goblins.treat"
  | "description.cauliflower.burger"
  | "description.club.sandwich"
  | "description.mushroom.jacket.potatoes"
  | "description.sunflower.crunch"
  | "description.bumpkin.roast"
  | "description.goblin.brunch"
  | "description.fruit.salad"
  | "description.bumpkin.ganoush"
  | "description.chowder"
  | "description.pancakes"

  // Bakery
  | "description.apple.pie"
  | "description.kale.mushroom.pie"
  | "description.cornbread"
  | "description.sunflower.cake"
  | "description.potato.cake"
  | "description.pumpkin.cake"
  | "description.carrot.cake"
  | "description.cabbage.cake"
  | "description.beetroot.cake"
  | "description.cauliflower.cake"
  | "description.parsnip.cake"
  | "description.radish.cake"
  | "description.wheat.cake"
  | "description.eggplant.cake"
  | "description.orange.cake"
  | "description.pirate.cake"

  // Deli
  | "description.blueberry.jam"
  | "description.fermented.carrots"
  | "description.sauerkraut"
  | "description.fancy.fries"
  | "description.fermented.fish"

  // Smoothie Shack
  | "description.apple.juice"
  | "description.orange.juice"
  | "description.purple.smoothie"
  | "description.power.smoothie"
  | "description.bumpkin.detox"
  | "description.banana.blast"

  // Unused foods
  | "description.roasted.cauliflower"
  | "description.radish.pie";

export type DecorationDescriptions =
  // Decorations
  | "description.wicker.man"
  | "description.golden bonsai"
  | "description.christmas.bear"
  | "description.war.skull"
  | "description.war.tombstone"
  | "description.white.tulips"
  | "description.potted.sunflower"
  | "description.potted.potato"
  | "description.potted.pumpkin"
  | "description.cactus"
  | "description.basic.bear"
  | "description.bonnies.tombstone"
  | "description.grubnashs.tombstone"
  | "description.town.sign"
  | "description.dirt.path"
  | "description.bush"
  | "description.fence"
  | "description.stone.fence"
  | "description.pine.tree"
  | "description.shrub"
  | "description.field.maple"
  | "description.red.maple"
  | "description.golden.maple"
  | "description.crimson.cap"
  | "description.toadstool.seat"
  | "description.chestnut.fungi.stool"
  | "description.mahogany.cap"
  | "description.candles"
  | "description.haunted.stump"
  | "description.spooky.tree"
  | "description.observer"
  | "description.crow.rock"
  | "description.mini.corn.maze"
  | "description.lifeguard.ring"
  | "description.surfboard"
  | "description.hideaway.herman"
  | "description.shifty.sheldon"
  | "description.tiki.torch"
  | "description.beach.umbrella"
  | "description.magic.bean"
  | "description.giant.potato"
  | "description.giant.pumpkin"
  | "description.giant.cabbage"
  | "description.chef.bear"
  | "description.construction.bear"
  | "description.angel.bear"
  | "description.badass.bear"
  | "description.bear.trap"
  | "description.brilliant.bear"
  | "description.classy.bear"
  | "description.farmer.bear"
  | "description.rich.bear"
  | "description.sunflower.bear"
  | "description.christmas.bear"
  | "description.beta.bear"
  | "description.rainbow.artist.bear"
  | "description.devil.bear"
  | "description.collectible.bear"
  | "description.cyborg.bear"
  | "description.abandoned.bear"
  | "description.turtle.bear"
  | "description.christmas.snow.globe"
  | "description.kraken.tentacle"
  | "description.kraken.head"
  | "description.trex.skull"
  | "description.sunflower.coin"
  | "description.skeleton.king.staff"
  | "description.lifeguard.bear"
  | "description.snorkel.bear"
  | "description.parasaur.skull"
  | "description.goblin.bear"
  | "description.golden.bear.head"
  | "description.pirate.bear"
  | "description.galleon"
  | "description.dinosaur.bone"
  | "description.human.bear"
  | "description.heart.balloons"
  | "description.flamingo"
  | "description.blossom.tree"
  | "description.whale.bear"
  | "description.valentine.bear"
  | "description.easter.bear"
  | "description.easter.bush"
  | "description.giant.carrot"
  | "description.beach.ball"
  | "description.palm.tree"

  // Banners
  | "description.goblin.war.banner"
  | "description.human.war.banner";

export type FishDescriptions =
  // Fish
  | "description.anchovy.one"
  | "description.anchovy.two"
  | "description.butterflyfish.one"
  | "description.butterflyfish.two"
  | "description.blowfish.one"
  | "description.blowfish.two"
  | "description.clownfish.one"
  | "description.clownfish.two"
  | "description.seabass.one"
  | "description.seabass.two"
  | "description.seahorse.one"
  | "description.seahorse.two"
  | "description.horsemackerel.one"
  | "description.horsemackerel.two"
  | "description.squid.one"
  | "description.squid.two"
  | "description.redsnapper.one"
  | "description.redsnapper.two"
  | "description.morayeel.one"
  | "description.morayeel.two"
  | "description.oliveflounder.one"
  | "description.oliveflounder.two"
  | "description.napoleanfish.one"
  | "description.napoleanfish.two"
  | "description.surgeonfish.one"
  | "description.surgeonfish.two"
  | "description.zebraturkeyfish.one"
  | "description.zebraturkeyfish.two"
  | "description.ray.one"
  | "description.ray.two"
  | "description.hammerheadshark.one"
  | "description.hammerheadshark.two"
  | "description.tuna.one"
  | "description.tuna.two"
  | "description.mahimahi.one"
  | "description.mahimahi.two"
  | "description.bluemarlin.one"
  | "description.bluemarlin.two"
  | "description.oarfish.one"
  | "description.oarfish.two"
  | "description.footballfish.one"
  | "description.footballfish.two"
  | "description.sunfish.one"
  | "description.sunfish.two"
  | "description.coelacanth.one"
  | "description.coelacanth.two"
  | "description.whaleshark.one"
  | "description.whaleshark.two"
  | "description.barredknifejaw.one"
  | "description.barredknifejaw.two"
  | "description.sawshark.one"
  | "description.sawshark.two"
  | "description.whiteshark.one"
  | "description.whiteshark.two"

  // Marine Marvels
  | "description.twilight.anglerfish"
  | "description.starlight.tuna"
  | "description.radiant.ray"
  | "description.phantom.barracuda"
  | "description.gilded.swordfish";

export type BuildingDescriptions =
  // Buildings
  | "description.water.well"
  | "description.kitchen"
  | "description.compost.bin"
  | "description.hen.house"
  | "description.bakery"
  | "description.turbo.composter"
  | "description.deli"
  | "description.smoothie.shack"
  | "description.warehouse"
  | "description.toolshed"
  | "description.premium.composter"
  | "description.town.center"
  | "description.market"
  | "description.fire.pit"
  | "description.workbench"
  | "description.tent";

export type ToolDescriptions =
  // Tools
  | "description.axe"
  | "description.pickaxe"
  | "description.stone.pickaxe"
  | "description.iron.pickaxe"
  | "description.hammer"
  | "description.rod"
  | "description.rusty.shovel"
  | "description.shovel"
  | "description.sand.shovel"
  | "description.sand.drill";

export type GameDescriptions =
  // Quest Items
  | "description.goblin.key"
  | "description.sunflower.key"
  | "description.ancient.goblin.sword"
  | "description.ancient.human.warhammer"

  // Coupons
  | "description.block.buck"
  | "description.beta.pass"
  | "description.war.bond"
  | "description.jack.o.lantern"
  | "description.golden.crop"
  | "description.red.envelope"
  | "description.love.letter"
  | "description.solar.flare.ticket"
  | "description.dawn.breaker.ticket"
  | "description.crow.feather"
  | "description.mermaid.scale"
  | "description.sunflower.supporter"

  // Easter Items
  | "description.egg.basket"
  | "description.blue.egg"
  | "description.orange.egg"
  | "description.green.egg"
  | "description.yellow.egg"
  | "description.red.egg"
  | "description.pink.egg"
  | "description.purple.egg";

export type BumpkinSkillsDescription =
  // Crops
  | "description.green.thumb"
  | "description.cultivator"
  | "description.master.farmer"
  | "description.golden.flowers"
  | "description.happy.crop"

  // Trees
  | "description.lumberjack"
  | "description.tree.hugger"
  | "description.tough.tree"
  | "description.money.tree"

  // Rocks
  | "description.digger"
  | "description.coal.face"
  | "description.seeker"
  | "description.gold.rush"

  // Cooking
  | "description.rush.hour"
  | "description.kitchen.hand"
  | "description.michelin.stars"
  | "description.curer"

  // Animals
  | "description.stable.hand"
  | "description.free.range"
  | "description.horse.whisperer"
  | "description.buckaroo";

export type BountyDescription =
  | "description.clam.shell"
  | "description.sea.cucumber"
  | "description.coral"
  | "description.crab"
  | "description.starfish"
  | "description.pirate.bounty"
  | "description.wooden.compass"
  | "description.iron.compass"
  | "description.emerald.compass"
  | "description.old.bottle"
  | "description.pearl"
  | "description.pipi"
  | "description.seaweed";

export type FishingQuests =
  | "quest.basic.fish"
  | "quest.advanced.fish"
  | "quest.all.fish"
  | "quest.300.fish"
  | "quest.1500.fish"
  | "quest.marine.marvel";

export type IslandName =
  | "island.home"
  | "island.pumpkin.plaza"
  | "island.beach"
  | "island.woodlands"
  | "island.helios"
  | "island.goblin.retreat";

export type DiscordBonus =
  | "discord.bonus.niceHat"
  | "discord.bonus.attentionEvents"
  | "discord.bonus.bonusReward"
  | "discord.bonus.payAttention"
  | "discord.bonus.enjoyCommunity"
  | "discord.bonus.claimGift"
  | "discord.bonus.communityInfo"
  | "discord.bonus.farmingTips"
  | "discord.bonus.freeGift"
  | "discord.bonus.connect";

//How To Play
export type HowToFarm =
  // Page 1
  | "howToFarm.title"
  | "howToFarm.stepOne"
  | "howToFarm.stepTwo"
  | "howToFarm.stepThree"
  | "howToFarm.stepFour"
  | "howToFarm.stepFive";

export type HowToUpgrade =
  // Page 2
  | "howToUpgrade.title"
  | "howToUpgrade.stepOne"
  | "howToUpgrade.stepTwo"
  | "howToUpgrade.stepThree"
  | "howToUpgrade.stepFour";

export type HowToSync =
  //Page 3
  | "howToSync.title"
  | "howToSync.description"
  | "howToSync.stepOne"
  | "howToSync.stepTwo";

export type LetsGo =
  //Page 4
  | "letsGo.title"
  | "letsGo.description"
  | "letsGo.readMore"
  | "letsGo.officialDocs"
  | "letsGo.officialDocsLink";

export type SettingsMenu =
  | "settingsMenu.timeMachine"
  | "settingsMenu.storeOnChain"
  | "settingsMenu.howToPlay"
  | "settingsMenu.community"
  | "settingsMenu.swapMaticForSFL"
  | "settingsMenu.plazaSettings"
  | "settingsMenu.settings"
  | "settingsMenu.communityGarden"
  | "settingsMenu.share";

// Delivery NPC
export type GOBLIN_MESSAGES =
  | "goblinMessages.msg1"
  | "goblinMessages.msg2"
  | "goblinMessages.msg3"
  | "goblinMessages.msg4"
  | "goblinMessages.msg5"
  | "goblinMessages.msg6"
  | "goblinMessages.msg7"
  | "goblinMessages.msg8"
  | "goblinMessages.msg9"
  | "goblinMessages.msg10";

export type NPC_MESSAGE =
  // Betty
  | "npcMessages.betty.msg1"
  | "npcMessages.betty.msg2"
  | "npcMessages.betty.msg3"
  | "npcMessages.betty.msg4"
  | "npcMessages.betty.msg5"
  | "npcMessages.betty.msg6"
  | "npcMessages.betty.msg7"
  // Blacksmith
  | "npcMessages.blacksmith.msg1"
  | "npcMessages.blacksmith.msg2"
  | "npcMessages.blacksmith.msg3"
  | "npcMessages.blacksmith.msg4"
  | "npcMessages.blacksmith.msg5"
  | "npcMessages.blacksmith.msg6"
  | "npcMessages.blacksmith.msg7"
  // pumpkin' pete
  | "npcMessages.pumpkinpete.msg1"
  | "npcMessages.pumpkinpete.msg2"
  | "npcMessages.pumpkinpete.msg3"
  | "npcMessages.pumpkinpete.msg4"
  | "npcMessages.pumpkinpete.msg5"
  | "npcMessages.pumpkinpete.msg6"
  | "npcMessages.pumpkinpete.msg7"
  // Cornwell
  | "npcMessages.cornwell.msg1"
  | "npcMessages.cornwell.msg2"
  | "npcMessages.cornwell.msg3"
  | "npcMessages.cornwell.msg4"
  | "npcMessages.cornwell.msg5"
  | "npcMessages.cornwell.msg6"
  | "npcMessages.cornwell.msg7"
  // Raven
  | "npcMessages.raven.msg1"
  | "npcMessages.raven.msg2"
  | "npcMessages.raven.msg3"
  | "npcMessages.raven.msg4"
  | "npcMessages.raven.msg5"
  | "npcMessages.raven.msg6"
  | "npcMessages.raven.msg7"
  // Bert
  | "npcMessages.bert.msg1"
  | "npcMessages.bert.msg2"
  | "npcMessages.bert.msg3"
  | "npcMessages.bert.msg4"
  | "npcMessages.bert.msg5"
  | "npcMessages.bert.msg6"
  | "npcMessages.bert.msg7"
  // Timmy
  | "npcMessages.timmy.msg1"
  | "npcMessages.timmy.msg2"
  | "npcMessages.timmy.msg3"
  | "npcMessages.timmy.msg4"
  | "npcMessages.timmy.msg5"
  | "npcMessages.timmy.msg6"
  | "npcMessages.timmy.msg7"
  // Tywin
  | "npcMessages.tywin.msg1"
  | "npcMessages.tywin.msg2"
  | "npcMessages.tywin.msg3"
  | "npcMessages.tywin.msg4"
  | "npcMessages.tywin.msg5"
  | "npcMessages.tywin.msg6"
  | "npcMessages.tywin.msg7"
  // Tango
  | "npcMessages.tango.msg1"
  | "npcMessages.tango.msg2"
  | "npcMessages.tango.msg3"
  | "npcMessages.tango.msg4"
  | "npcMessages.tango.msg5"
  | "npcMessages.tango.msg6"
  | "npcMessages.tango.msg7"
  // Miranda
  | "npcMessages.miranda.msg1"
  | "npcMessages.miranda.msg2"
  | "npcMessages.miranda.msg3"
  | "npcMessages.miranda.msg4"
  | "npcMessages.miranda.msg5"
  | "npcMessages.miranda.msg6"
  | "npcMessages.miranda.msg7"
  // Finn
  | "npcMessages.finn.msg1"
  | "npcMessages.finn.msg2"
  | "npcMessages.finn.msg3"
  | "npcMessages.finn.msg4"
  | "npcMessages.finn.msg5"
  | "npcMessages.finn.msg6"
  | "npcMessages.finn.msg7"
  | "npcMessages.finn.msg8"
  //Findley
  | "npcMessages.findley.msg1"
  | "npcMessages.findley.msg2"
  | "npcMessages.findley.msg3"
  | "npcMessages.findley.msg4"
  | "npcMessages.findley.msg5"
  | "npcMessages.findley.msg6"
  | "npcMessages.findley.msg7"
  | "npcMessages.findley.msg8"
  | "npcMessages.findley.msg9"
  // Corale
  | "npcMessages.corale.msg1"
  | "npcMessages.corale.msg2"
  | "npcMessages.corale.msg3"
  | "npcMessages.corale.msg4"
  | "npcMessages.corale.msg5"
  | "npcMessages.corale.msg6"
  | "npcMessages.corale.msg7"
  //Shelly
  | "npcMessages.shelly.msg1"
  | "npcMessages.shelly.msg2"
  | "npcMessages.shelly.msg3"
  | "npcMessages.shelly.msg4"
  | "npcMessages.shelly.msg5"
  | "npcMessages.shelly.msg6"
  | "npcMessages.shelly.msg7"
  | "npcMessages.shelly.msg8";

export type HayseedHankV2 =
  | "hayseedHankv2.dialog1"
  | "hayseedHankv2.dialog2"
  | "hayseedHankv2.action"
  | "hayseedHankv2.title"
  | "hayseedHankv2.newChoresAvailable"
  | "hayseedHankv2.skipChores";

export type SnorklerDialogues = "snorkler.vastOcean" | "snorkler.goldBeneath";

export type SharkBumpkinDialogues =
  | "sharkBumpkin.dialogue.shhhh"
  | "sharkBumpkin.dialogue.scareGoblins";

export type IslandNotFound =
  | "islandNotFound.message"
  | "islandNotFound.takeMeHome";

export type VisitislandNotFound = "visitislandNotFound.title";

export type VisitislandEnter =
  | "visitIsland.enterIslandId"
  | "visitIsland.visit";

export type GoldPassModal =
  | "goldPass.unlockPower"
  | "goldPass.craftNFTs"
  | "goldPass.trade"
  | "goldPass.participateAuction"
  | "goldPass.withdrawTransferNFTs"
  | "goldPass.accessRestrictedAreas"
  | "goldPass.readMore"
  | "common.noThanks"
  | "goldPass.buyNow"
  | "goldPass.priceInMatic";

export type FishermanModal =
  | "fishermanModal.attractFish"
  | "fishermanModal.royChallenge"
  | "fishermanModal.fishBenefits"
  | "fishermanModal.baitAndResources"
  | "fishermanModal.crazyHappening"
  | "fishermanModal.bonusFish"
  | "fishermanModal.dailyLimitReached"
  | "fishermanModal.needCraftRod";

export type NpcDialogues =
  // Blacksmith Intro
  | "npcDialogues.blacksmith.intro1"
  | "npcDialogues.blacksmith.intro2"
  | "npcDialogues.blacksmith.intro3"
  | "npcDialogues.blacksmith.intro4"
  // Blacksmith Positive Delivery
  | "npcDialogues.blacksmith.positiveDelivery1"
  | "npcDialogues.blacksmith.positiveDelivery2"
  | "npcDialogues.blacksmith.positiveDelivery3"
  | "npcDialogues.blacksmith.positiveDelivery4"
  | "npcDialogues.blacksmith.positiveDelivery5"
  // Blacksmith Negative Delivery
  | "npcDialogues.blacksmith.negativeDelivery1"
  | "npcDialogues.blacksmith.negativeDelivery2"
  | "npcDialogues.blacksmith.negativeDelivery3"
  | "npcDialogues.blacksmith.negativeDelivery4"
  | "npcDialogues.blacksmith.negativeDelivery5"
  // Blacksmith NoOrder
  | "npcDialogues.blacksmith.noOrder1"
  | "npcDialogues.blacksmith.noOrder2"
  // Betty Intro
  | "npcDialogues.betty.intro1"
  | "npcDialogues.betty.intro2"
  | "npcDialogues.betty.intro3"
  | "npcDialogues.betty.intro4"
  | "npcDialogues.betty.intro5"
  // Betty Positive Delivery
  | "npcDialogues.betty.positiveDelivery1"
  | "npcDialogues.betty.positiveDelivery2"
  | "npcDialogues.betty.positiveDelivery3"
  | "npcDialogues.betty.positiveDelivery4"
  | "npcDialogues.betty.positiveDelivery5"
  // Betty Negative Delivery
  | "npcDialogues.betty.negativeDelivery1"
  | "npcDialogues.betty.negativeDelivery2"
  | "npcDialogues.betty.negativeDelivery3"
  | "npcDialogues.betty.negativeDelivery4"
  | "npcDialogues.betty.negativeDelivery5"
  // Betty NoOrder
  | "npcDialogues.betty.noOrder1"
  | "npcDialogues.betty.noOrder2"
  // Grimbly Intro
  | "npcDialogues.grimbly.intro1"
  | "npcDialogues.grimbly.intro2"
  | "npcDialogues.grimbly.intro3"
  | "npcDialogues.grimbly.intro4"
  // Grimbly Positive Delivery
  | "npcDialogues.grimbly.positiveDelivery1"
  | "npcDialogues.grimbly.positiveDelivery2"
  | "npcDialogues.grimbly.positiveDelivery3"
  | "npcDialogues.grimbly.positiveDelivery4"
  // Grimbly Negative Delivery
  | "npcDialogues.grimbly.negativeDelivery1"
  | "npcDialogues.grimbly.negativeDelivery2"
  | "npcDialogues.grimbly.negativeDelivery3"
  | "npcDialogues.grimbly.negativeDelivery4"
  // Grimbly NoOrder
  | "npcDialogues.grimbly.noOrder1"
  | "npcDialogues.grimbly.noOrder2"
  // Grimtootk Intro
  | "npcDialogues.grimtooth.intro1"
  | "npcDialogues.grimtooth.intro2"
  | "npcDialogues.grimtooth.intro3"
  | "npcDialogues.grimtooth.intro4"
  // Grimtootk Positive Delivery
  | "npcDialogues.grimtooth.positiveDelivery1"
  | "npcDialogues.grimtooth.positiveDelivery2"
  | "npcDialogues.grimtooth.positiveDelivery3"
  | "npcDialogues.grimtooth.positiveDelivery4"
  // Grimtootk Negative Delivery
  | "npcDialogues.grimtooth.negativeDelivery1"
  | "npcDialogues.grimtooth.negativeDelivery2"
  | "npcDialogues.grimtooth.negativeDelivery3"
  | "npcDialogues.grimtooth.negativeDelivery4"
  // Grimtootk NoOrder
  | "npcDialogues.grimtooth.noOrder1"
  | "npcDialogues.grimtooth.noOrder2"
  // Old Salty Intro
  | "npcDialogues.oldSalty.intro1"
  | "npcDialogues.oldSalty.intro2"
  | "npcDialogues.oldSalty.intro3"
  // Old Salty Positive
  | "npcDialogues.oldSalty.positiveDelivery1"
  | "npcDialogues.oldSalty.positiveDelivery2"
  | "npcDialogues.oldSalty.positiveDelivery3"
  // Old Salty Negative
  | "npcDialogues.oldSalty.negativeDelivery1"
  | "npcDialogues.oldSalty.negativeDelivery2"
  | "npcDialogues.oldSalty.negativeDelivery3"
  // Old Salty NoOrder
  | "npcDialogues.oldSalty.noOrder1"
  | "npcDialogues.oldSalty.noOrder2"
  // Raven Intro
  | "npcDialogues.raven.intro1"
  | "npcDialogues.raven.intro2"
  | "npcDialogues.raven.intro3"
  | "npcDialogues.raven.intro4"
  // Raven Positive Delivery
  | "npcDialogues.raven.positiveDelivery1"
  | "npcDialogues.raven.positiveDelivery2"
  | "npcDialogues.raven.positiveDelivery3"
  | "npcDialogues.raven.positiveDelivery4"
  // Raven Negative Delivery
  | "npcDialogues.raven.negativeDelivery1"
  | "npcDialogues.raven.negativeDelivery2"
  | "npcDialogues.raven.negativeDelivery3"
  // Raven NoOrder
  | "npcDialogues.raven.noOrder1"
  | "npcDialogues.raven.noOrder2"
  // Tywin Intro
  | "npcDialogues.tywin.intro1"
  | "npcDialogues.tywin.intro2"
  | "npcDialogues.tywin.intro3"
  | "npcDialogues.tywin.intro4"
  // Tywin Positive Delivery
  | "npcDialogues.tywin.positiveDelivery1"
  | "npcDialogues.tywin.positiveDelivery2"
  | "npcDialogues.tywin.positiveDelivery3"
  | "npcDialogues.tywin.positiveDelivery4"
  // Tywin Negative Delivery
  | "npcDialogues.tywin.negativeDelivery1"
  | "npcDialogues.tywin.negativeDelivery2"
  | "npcDialogues.tywin.negativeDelivery3"
  | "npcDialogues.tywin.negativeDelivery4"
  // Tywin NoOrder
  | "npcDialogues.tywin.noOrder1"
  | "npcDialogues.tywin.noOrder2"
  //Bert Intro
  | "npcDialogues.bert.intro1"
  | "npcDialogues.bert.intro2"
  | "npcDialogues.bert.intro3"
  | "npcDialogues.bert.intro4"
  //Bert Positive Delivery
  | "npcDialogues.bert.positiveDelivery1"
  | "npcDialogues.bert.positiveDelivery2"
  | "npcDialogues.bert.positiveDelivery3"
  | "npcDialogues.bert.positiveDelivery4"
  //Bert Negative Delivery
  | "npcDialogues.bert.negativeDelivery1"
  | "npcDialogues.bert.negativeDelivery2"
  | "npcDialogues.bert.negativeDelivery3"
  | "npcDialogues.bert.negativeDelivery4"
  //Bert NoOrder
  | "npcDialogues.bert.noOrder1"
  | "npcDialogues.bert.noOrder2"
  // Timmy Intro
  | "npcDialogues.timmy.intro1"
  | "npcDialogues.timmy.intro2"
  | "npcDialogues.timmy.intro3"
  | "npcDialogues.timmy.intro4"
  | "npcDialogues.timmy.intro5"
  // Timmy Positive Delivery
  | "npcDialogues.timmy.positiveDelivery1"
  | "npcDialogues.timmy.positiveDelivery2"
  | "npcDialogues.timmy.positiveDelivery3"
  | "npcDialogues.timmy.positiveDelivery4"
  | "npcDialogues.timmy.positiveDelivery5"
  // Timmy Negative Delivery
  | "npcDialogues.timmy.negativeDelivery1"
  | "npcDialogues.timmy.negativeDelivery2"
  | "npcDialogues.timmy.negativeDelivery3"
  | "npcDialogues.timmy.negativeDelivery4"
  | "npcDialogues.timmy.negativeDelivery5"
  // Timmy NoOrder
  | "npcDialogues.timmy.noOrder1"
  | "npcDialogues.timmy.noOrder2"
  // Cornwell Intro
  | "npcDialogues.cornwell.intro1"
  | "npcDialogues.cornwell.intro2"
  | "npcDialogues.cornwell.intro3"
  | "npcDialogues.cornwell.intro4"
  | "npcDialogues.cornwell.intro5"
  // Cornwell Positive Delivery
  | "npcDialogues.cornwell.positiveDelivery1"
  | "npcDialogues.cornwell.positiveDelivery2"
  | "npcDialogues.cornwell.positiveDelivery3"
  | "npcDialogues.cornwell.positiveDelivery4"
  | "npcDialogues.cornwell.positiveDelivery5"
  // Cornwell Negative Delivery
  | "npcDialogues.cornwell.negativeDelivery1"
  | "npcDialogues.cornwell.negativeDelivery2"
  | "npcDialogues.cornwell.negativeDelivery3"
  | "npcDialogues.cornwell.negativeDelivery4"
  | "npcDialogues.cornwell.negativeDelivery5"
  // Cornwell No Order
  | "npcDialogues.cornwell.noOrder1"
  | "npcDialogues.cornwell.noOrder2"
  | "npcDialogues.cornwell.noOrder3"
  | "npcDialogues.cornwell.noOrder4"
  // Pumpkin Pete Intor
  | "npcDialogues.pumpkinPete.intro1"
  | "npcDialogues.pumpkinPete.intro2"
  | "npcDialogues.pumpkinPete.intro3"
  | "npcDialogues.pumpkinPete.intro4"
  | "npcDialogues.pumpkinPete.intro5"
  // Pumpkin Pete Positive Delivery
  | "npcDialogues.pumpkinPete.positiveDelivery1"
  | "npcDialogues.pumpkinPete.positiveDelivery2"
  | "npcDialogues.pumpkinPete.positiveDelivery3"
  | "npcDialogues.pumpkinPete.positiveDelivery4"
  | "npcDialogues.pumpkinPete.positiveDelivery5"
  // Pumpkin Pete Negative Delivery
  | "npcDialogues.pumpkinPete.negativeDelivery1"
  | "npcDialogues.pumpkinPete.negativeDelivery2"
  | "npcDialogues.pumpkinPete.negativeDelivery3"
  | "npcDialogues.pumpkinPete.negativeDelivery4"
  | "npcDialogues.pumpkinPete.negativeDelivery5"
  // Pumpkin Pete NoOrder
  | "npcDialogues.pumpkinPete.noOrder1"
  | "npcDialogues.pumpkinPete.noOrder2";

export type DefaultDialogue =
  | "defaultDialogue.intro"
  | "defaultDialogue.positiveDelivery"
  | "defaultDialogue.negativeDelivery"
  | "defaultDialogue.noOrder";

export type SceneDialogueKey = "sceneDialogues.chefIsBusy";

export type ShellyDialogue =
  | "shellyPanelContent.tasksFrozen"
  | "shellyPanelContent.canTrade"
  | "shellyPanelContent.cannotTrade"
  | "shellyPanelContent.swap"
  | "shellyPanelContent.close"
  | "krakenIntro.congrats"
  | "krakenIntro.noMoreTentacles"
  | "krakenIntro.gotIt"
  | "krakenIntro.appetiteChanges"
  | "krakenIntro.currentHunger"
  | "krakenIntro.catchInstruction";

export type PurchaseableBaitTranslation =
  | "purchaseableBait.fishingLure.description";

export type InteractableModals =
  | "interactableModals.fatChicken.message"
  | "interactableModals.lazyBud.message"
  | "interactableModals.bud.message"
  | "interactableModals.walrus.message"
  | "interactableModals.plazaBlueBook.message1"
  | "interactableModals.plazaBlueBook.message2"
  | "interactableModals.plazaOrangeBook.message1"
  | "interactableModals.plazaOrangeBook.message2"
  | "interactableModals.beachGreenBook.message1"
  | "interactableModals.beachGreenBook.message2"
  | "interactableModals.beachBlueBook.message1"
  | "interactableModals.beachBlueBook.message2"
  | "interactableModals.beachBlueBook.message3"
  | "interactableModals.beachOrangeBook.message1"
  | "interactableModals.beachOrangeBook.message2"
  | "interactableModals.plazaGreenBook.message1"
  | "interactableModals.plazaGreenBook.message2"
  | "interactableModals.fanArt1.message"
  | "interactableModals.fanArt2.message"
  | "interactableModals.fanArt2.linkLabel"
  | "interactableModals.fanArt3.message"
  | "interactableModals.clubhouseReward.message1"
  | "interactableModals.clubhouseReward.message2"
  | "interactableModals.plazaStatue.message"
  | "interactableModals.dawnBook1.message1"
  | "interactableModals.dawnBook1.message2"
  | "interactableModals.dawnBook1.message3"
  | "interactableModals.dawnBook2.message1"
  | "interactableModals.dawnBook2.message2"
  | "interactableModals.dawnBook3.message1"
  | "interactableModals.dawnBook3.message2"
  | "interactableModals.dawnBook3.message3"
  | "interactableModals.dawnBook4.message1"
  | "interactableModals.dawnBook4.message2"
  | "interactableModals.dawnBook4.message3"
  | "interactableModals.timmyHome.message"
  | "interactableModals.windmill.message"
  | "interactableModals.igorHome.message"
  | "interactableModals.potionHouse.message1"
  | "interactableModals.potionHouse.message2"
  | "interactableModals.guildHouse.message"
  | "interactableModals.guildHouse.readMore"
  | "interactableModals.guildHouse.budsCollection"
  | "interactableModals.bettyHome.message"
  | "interactableModals.bertHome.message"
  | "interactableModals.beach.message1"
  | "interactableModals.beach.message2"
  | "interactableModals.castle.message"
  | "interactableModals.woodlands.message"
  | "interactableModals.port.message";

export type LevelUpMessages =
  | "levelUp.2"
  | "levelUp.3"
  | "levelUp.4"
  | "levelUp.5"
  | "levelUp.6"
  | "levelUp.7"
  | "levelUp.8"
  | "levelUp.9"
  | "levelUp.10"
  | "levelUp.11"
  | "levelUp.12"
  | "levelUp.13"
  | "levelUp.14"
  | "levelUp.15"
  | "levelUp.16"
  | "levelUp.17"
  | "levelUp.18"
  | "levelUp.19"
  | "levelUp.20"
  | "levelUp.21"
  | "levelUp.22"
  | "levelUp.23"
  | "levelUp.24"
  | "levelUp.25"
  | "levelUp.26"
  | "levelUp.27"
  | "levelUp.28"
  | "levelUp.29"
  | "levelUp.30"
  | "levelUp.31"
  | "levelUp.32"
  | "levelUp.33"
  | "levelUp.34"
  | "levelUp.35"
  | "levelUp.36"
  | "levelUp.37"
  | "levelUp.38"
  | "levelUp.39"
  | "levelUp.40"
  | "levelUp.41"
  | "levelUp.42"
  | "levelUp.43"
  | "levelUp.44"
  | "levelUp.45"
  | "levelUp.46"
  | "levelUp.47"
  | "levelUp.48"
  | "levelUp.49"
  | "levelUp.50"
  | "levelUp.51"
  | "levelUp.52"
  | "levelUp.53"
  | "levelUp.54"
  | "levelUp.55"
  | "levelUp.56"
  | "levelUp.57"
  | "levelUp.58"
  | "levelUp.59"
  | "levelUp.60";

export type TranslationKeys =
  | AchievementsDialog
  | BoostDescriptions
  | BountyDescription
  | BuildingDescriptions
  | BumpkinPartRequirements
  | BumpkinSkillsDescription
  | BumpkinTrade
  | ConfirmationTerms
  | Conversations
  | CropFruitDescriptions
  | PurchaseableBaitTranslation
  | DecorationDescriptions
  | DefaultDialogue
  | DiscordBonus
  | ErrorTerms
  | FishDescriptions
  | FishingQuests
  | FishermanModal
  | FoodDescriptions
  | GameDescriptions
  | GameTerms
  | GeneralTerms
  | GuideTerms
  | GOBLIN_MESSAGES
  | GoldPassModal
  | HayseedHankV2
  | HenHouseTerms
  | HowToUpgrade
  | HowToFarm
  | HowToSync
  | InteractableModals
  | Intro
  | IslandName
  | IslandNotFound
  | LandscapeTerms
  | LevelUpMessages
  | LetsGo
  | NpcDialogues
  | NPC_MESSAGE
  | Onboarding
  | Questions
  | RetreatTerms
  | RewardTerms
  | RulesTerms
  | SceneDialogueKey
  | SeasonTerms
  | SettingsMenu
  | SharkBumpkinDialogues
  | ShellyDialogue
  | ShopItems
  | SnorklerDialogues
  | Statements
  | ToolDescriptions
  | TransactionTerms
  | VisitislandEnter
  | VisitislandNotFound
  | WarningTerms
  | WelcomeTerms;
