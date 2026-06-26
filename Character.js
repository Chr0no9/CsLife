export function createPlayer(name, traitName) {
    const selectedTrait = traits.find(t => t.name === traitName);

    player.name = name;
    player.trait = selectedTrait.name;

    player.health = selectedTrait.stats.health;
    player.happiness = selectedTrait.stats.happiness;
    player.money = selectedTrait.stats.money;
    player.intellect = selectedTrait.stats.intellect;
    player.coding = selectedTrait.stats.coding;
    player.social = selectedTrait.stats.social;

    console.log(player);
}



const player = {
    name: "",
    trait: "",

    health: 0,
    happiness: 0,
    money: 0,

    intellect: 0,
    coding: 0,
    social: 0,

    gpa: 3.0,
    relationshipStatus: "Single",
    internship: null,
    jobOffer: null
};

const traits = [
    {
        name: "Studious",
        stats: {
            health: 30,
            happiness: 40,
            money: 250,
            intellect: 90,
            coding: 70,
            social: 5
        }
    },
    {
        name: "Well Rounded",
        stats: {
            health: 50,
            happiness: 50,
            money: 500,
            intellect: 50,
            coding: 50,
            social: 50
        }
    },
    {
        name: "Social Butterfly",
        stats: {
            health: 70,
            happiness: 95,
            money: 0,
            intellect: 40,
            coding: 10,
            social: 90
        }
    },
    {
        name: "Wealthy",
        stats: {
            health: 80,
            happiness: 80,
            money: 10000,
            intellect: 30,
            coding: 10,
            social: 30
        }
    }
];