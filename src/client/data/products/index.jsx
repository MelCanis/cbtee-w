class Product {
    sold = false;
    constructor (name, price, category, description, gemstone) {
        this.name = name;
        this.price = price;
        this.category = category;
        this.description = description;
        this.gemstone = gemstone;
    }
}

const products = [
    new Product("Fluorite Stones", 65),
    new Product("Hematite Stone with Red Turqoise in Cage", 65),
    new Product("Hematite with Dalmation", 65),
    new Product("Red Turqoise with Black Onyx (Dalmation Signature)", 65),
    new Product("Red Turquoise (Dalmation Signature)", 65),
    new Product("Green Jades with Carnelian (Dalmation Signature)", 65),
    new Product("Purple Sea Sediment with Aquamarine (Dalmation Signature) ", 65),
    new Product("Hematite Beads", 65),
    new Product("Black Obsidian with Lapis", 65),
    new Product("Blue Sodalite", 65),
    new Product("Tiger Eye #1", 65),
    new Product("Amber with Rainbow Hematite", 65),
    new Product("Sea Sediment with Green Cat Eye", 65),
    new Product("Red Jasper & Dalmation", 65),
    new Product("Red Jasper with White Jade", 65),
    new Product("Turqoise with Chakra Stones", 65),
    new Product("Tiger Eye #2", 65),
    new Product("Cintrine & Carnelian", 65),
    new Product("Chakra Chips (Multiple Stones) (Orange Calcite Pointer)", 65),
    new Product("Chakra Chips (Multiple Stones) (Turquoise Pointer)", 65),
    new Product("Turqoise with Red Jasper Chips", 65),
    new Product("Aventurine & Orange Calcite (Chakra Pendant)", 65),
    new Product("Unacite with Glow Stones (Dalmation Siganature)", 65),
    new Product("Amethyst with Ruby Zoisite", 65),
    new Product("Red Jasper with Orange Calcite (Red Jasper Pendant)", 65),
    new Product("Tiger Eye & Carnelian", 65),
    new Product("Dalmation & Orange Calcite (Signature Necklace)", 65),
    new Product("Labradorite", 65),
    new Product("Australian Zebra Stone & Picture Jasper", 75),
    new Product("Garnet with Dalmation #1", 75),
    new Product("Garnet with Dalmation #2", 75),
    new Product("Raw Pyrite with Turquoise", 100),
    new Product("Tiger Eye & Shungite", 100),
    new Product("Clear Crystal with Gold Hematite (Raw Opal in Cage)", 120, "set"),
    new Product("Amethyst with Raw Amethyst Ear Rings (Abalone Pendant)", 120, "set"),
    new Product("Tree Cages with Crystal Ear Rings (Multiple Stones in Cages)", 125, "cage"),
    new Product("Alexandrite Stone (Stainless Steel Chain)", 40, "cage"),
    new Product("Black Onyx (Stainless Steel Chain)", 40, "cage"),
    new Product("Leopardite (Stainless Steal Chain)", 40, "cage"),
];

export default products;