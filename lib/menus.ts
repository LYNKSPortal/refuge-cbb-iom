// Menu content is managed through structured data so dishes, descriptions,
// prices and dietary labels can be updated easily by editing this file.
// Items marked `placeholder: true` are stand-ins until the kitchen supplies
// the real menu — do not treat them as real dishes or prices.

export type Dietary = "V" | "VG" | "GF" | "N" | "O";

export type MenuItem = {
  name: string;
  description?: string;
  price?: string;
  dietary?: Dietary[];
  placeholder?: boolean;
};

export type MenuSection = {
  title: string;
  subtitle?: string;
  items: MenuItem[];
};

export type Menu = {
  slug: "lunch" | "evening" | "winter-lunch" | "winter-evening" | "drinks";
  title: string;
  intro: string;
  pdf?: string;
  banner: string;
  sections: MenuSection[];
  note?: string;
};

export const menus: Menu[] = [
  {
    slug: "lunch",
    title: "Lunch Menu",
    intro:
      "Served Tuesday to Friday, 12–4 PM. Menus change with the seasons and the best of island produce.",
    pdf: "/menus/29.09.2026-Lunch-Menu.pdf",
    banner: "/lunch-menu.jpg",
    sections: [
      {
        title: "Small Plates",
        items: [
          { name: "Manx Queenies", description: "Pancetta, garlic butter, focaccia", price: "15" },
          { name: "Spinach & Parmesan Croquette", description: "Parma ham crumb, saffron aioli", price: "13" },
          { name: "Braised Leeks & Whipped Ricotta", description: "Focaccia, crispy onions", price: "13", dietary: ["V"] },
          { name: "Chicken Satay Toast", description: "Satay sauce, toasted nuts", price: "12" },
          { name: "Mushroom Consommé", description: "Mushroom won tons, spring onion, coriander", price: "11", dietary: ["V"] },
        ],
      },
      {
        title: "Large Plates",
        items: [
          { name: "Confit Salmon", description: "Asparagus, pea & baby gem cream fricassée, crisp salmon skin", price: "24", dietary: ["GF"] },
          { name: "Refuge Steak Sandwich", description: "Chimichurri, rocket, emmental", price: "17" },
          { name: "Hot Smoked Salmon Caesar", description: "Baby gem, croutons, soft boiled egg, parmesan", price: "17" },
          { name: "Refuge Burger", description: "Beef tomato, lettuce, emmental, burger sauce", price: "16" },
          { name: "Squash Orzo", description: "Tenderstem broccoli, crispy onions", price: "17", dietary: ["VG"] },
          { name: "King Prawn Orecchiette", description: "Cherry tomatoes, garlic & chilli butter, rocket", price: "18" },
          { name: "Spicy Korean Chicken", description: "Coconut sticky rice, Asian slaw, pickled radish, gochujang", price: "17" },
          { name: "Fillet Steak", description: "Cognac & peppercorn sauce — please allow an extra 10 minutes cooking time", price: "34", dietary: ["GF"] },
        ],
      },
      {
        title: "Desserts",
        items: [
          { name: "Popcorn Parfait", description: "Salted caramel meringue, blueberry compote", price: "7.95" },
          { name: "Stilton Burnt Basque Cheesecake", description: "Spiced pumpkin jam", price: "7.95" },
          { name: "Espresso Martini Affogato", description: "Kahlúa, vanilla Absolut, vanilla ice cream, double espresso", price: "12", dietary: ["GF"] },
          { name: "Sticky Honey Cake", description: "Vanilla ice cream", price: "7.95" },
          { name: "Sorbet", description: "Please ask your server for details", price: "7.95", dietary: ["VG", "GF"] },
        ],
      },
      {
        title: "Side Dishes",
        items: [
          { name: "Creamed Spinach", price: "5", dietary: ["GF"] },
          { name: "French Fries", price: "5", dietary: ["GF"] },
          { name: "Parmesan Fries", price: "6", dietary: ["GF"] },
          { name: "Roast Carrots", description: "Café de Paris butter", price: "5", dietary: ["GF"] },
          { name: "New Potatoes", description: "Garlic butter", price: "5", dietary: ["GF"] },
          { name: "Sweet Potato Mash", price: "5", dietary: ["GF"] },
          { name: "Cajun Corn Ribs", price: "5", dietary: ["GF"] },
        ],
      },
    ],
    note:
      "Please always inform your server of any allergies or intolerances before placing your order. Not all ingredients are listed on the menu and we cannot guarantee the total absence of allergens.",
  },
  {
    slug: "evening",
    title: "Evening Menu",
    intro:
      "Served Thursday to Saturday evening. Seasonal, ethical and locally sourced wherever possible.",
    pdf: "/menus/10.09.2026-Evening-Menu.pdf",
    banner: "/evening-menu.jpg",
    sections: [
      {
        title: "Starters",
        items: [
          { name: "Manx Queenies", description: "Pancetta, garlic butter, focaccia", price: "15" },
          { name: "Braised Leeks & Whipped Ricotta", description: "Focaccia, crispy onions", price: "13", dietary: ["V"] },
          { name: "Chicken Satay Toast", description: "Satay sauce, toasted nuts", price: "12" },
          { name: "Mushroom Consommé", description: "Mushroom won tons, spring onion", price: "11", dietary: ["VG"] },
          { name: "Spinach Croquette", description: "Parma ham crumb, saffron & parmesan aioli", price: "13" },
          { name: "Caesar Salad", description: "Parmesan, crispy egg yolk", price: "13" },
          { name: "Cajun Corn Ribs", price: "6", dietary: ["GF"] },
        ],
      },
      {
        title: "Mains",
        items: [
          { name: "Confit Salmon", description: "Asparagus, pea & baby gem fricassée, crisp salmon skin", price: "24", dietary: ["GF"] },
          { name: "Pork Belly", description: "Chorizo sauce, tenderstem broccoli", price: "27", dietary: ["GF"] },
          { name: "Nori Miso Cod", description: "Pickled shiitake mushroom, dashi beurre blanc, nori prawn cracker", price: "26.50", dietary: ["GF"] },
          { name: "Duck Breast", description: "Mandarin parsnips, duck fat carrot purée", price: "26.50", dietary: ["GF"] },
          { name: "King Prawn Orecchiette", description: "Cherry tomatoes, garlic & chilli butter, rocket", price: "18" },
          { name: "Korean Chicken", description: "Coconut sticky rice, Asian slaw, pickled radish, gochujang", price: "17" },
          { name: "Squash Orzo", description: "Tenderstem broccoli", price: "17", dietary: ["VG"] },
          { name: "Refuge Burger", description: "Beef tomato, lettuce, emmental, burger sauce", price: "17" },
          { name: "Fillet Steak", description: "Served with a choice of cognac & peppercorn sauce, Café de Paris butter or chimichurri", price: "34", dietary: ["GF"] },
        ],
      },
      {
        title: "Desserts",
        items: [
          { name: "Popcorn Parfait", description: "Salted caramel meringue, blueberry compote", price: "7.95" },
          { name: "Stilton Burnt Basque Cheesecake", description: "Spiced pumpkin jam", price: "7.95" },
          { name: "Sticky Honey Cake", description: "Vanilla ice cream", price: "7.95" },
          { name: "Watermelon & Lime Sorbet", price: "7.95", dietary: ["VG", "GF"] },
          { name: "Espresso Martini Affogato", description: "Kahlúa, vanilla Absolut, vanilla ice cream, double espresso", price: "12", dietary: ["GF"] },
        ],
      },
      {
        title: "Side Dishes",
        items: [
          { name: "Creamed Spinach", price: "5", dietary: ["GF"] },
          { name: "French Fries", price: "5", dietary: ["GF"] },
          { name: "Parmesan Fries", price: "6", dietary: ["GF"] },
          { name: "Roast Carrots", description: "Café de Paris butter", price: "5", dietary: ["GF"] },
          { name: "New Potatoes", description: "Garlic butter", price: "5", dietary: ["GF"] },
          { name: "Sweet Potato Mash", price: "5", dietary: ["GF"] },
        ],
      },
    ],
    note:
      "Please always inform your server of any allergies or intolerances before placing your order. Not all ingredients are listed on the menu and we cannot guarantee the total absence of allergens.",
  },
  {
    slug: "winter-lunch",
    title: "Winter Lunch Menu",
    intro:
      "Available from November 24th — served Tuesday to Friday, 12–4 PM. Seasonal winter dishes made with the best of island produce.",
    pdf: "/menus/24.11.2026%20-%20Winter%20Lunch%20Menu.pdf",
    banner: "/lunch-menu.jpg",
    sections: [
      {
        title: "Starters",
        items: [
          { name: "Sweet Potato, Coconut & Chilli Soup", description: "Sesame & soy crouton", price: "11", dietary: ["VG"] },
          { name: "King Scallops", description: "Coral sauce, broccoli purée, parma ham crumb", price: "15", dietary: ["GF"] },
          { name: "Smoked Salmon", description: "Pickled fennel, dill crème fraîche, lemon oil", price: "13", dietary: ["GF"] },
          { name: "Mushroom & Parmesan Arancini", description: "Beetroot ketchup", price: "12", dietary: ["V", "GF"] },
          { name: "Chicken Liver Parfait", description: "Focaccia crisps, rocket, lemon oil", price: "13" },
          { name: "Char Sui Pork", description: "Peanut dressing, puffed rind, coriander", price: "13", dietary: ["GF"] },
        ],
      },
      {
        title: "Mains",
        items: [
          { name: "Confit Salmon", description: "Roasted celeriac & capers, tarragon beurre blanc", price: "24", dietary: ["GF"] },
          { name: "Bang Bang Cauliflower", description: "Sticky coconut rice, blackbean salad, charred pickled corn", price: "17", dietary: ["VG"] },
          { name: "Beef Bourguignon", description: "Mushrooms, baby onions, parsnip purée, pancetta", price: "24", dietary: ["GF"] },
          { name: "Turkey Saltimbocca", description: "Parma ham, sage butter, parmentier potatoes", price: "22", dietary: ["GF"] },
          { name: "Seabass", description: "Saffron sauce, spinach, mussels", price: "26", dietary: ["GF"] },
          { name: "Steak Sandwich", description: "Gouda, caramelised red onion jam", price: "17", dietary: ["GF"] },
          { name: "Roast Butternut & Spinach Tagliatelle", description: "Tenderstem broccoli, crispy onions", price: "17", dietary: ["VG"] },
          { name: "Refuge Burger", description: "Beef tomato, lettuce, emmental cheese, burger sauce", price: "16" },
          { name: "Fillet Steak", description: "Served with a choice of cognac & peppercorn sauce, Café de Paris butter or chimichurri", price: "34", dietary: ["GF"] },
        ],
      },
      {
        title: "Desserts",
        items: [
          { name: "Apple & Cranberry Crumble", description: "Cinnamon ice cream", price: "7.95" },
          { name: "After 8 Cheesecake", price: "7.95" },
          { name: "Christmas Pudding Parfait", description: "Brandy buttercream, brandy snap tuile", price: "7.95" },
          { name: "Espresso Martini Affogato", description: "Kahlúa, vanilla Absolut, vanilla ice cream, double espresso", price: "12", dietary: ["GF"] },
          { name: "Pear Sorbet", price: "7.95", dietary: ["V", "GF"] },
          { name: "Cheeseboard", description: "Selection of cheeses & crackers, chutney", price: "12" },
        ],
      },
      {
        title: "Side Dishes",
        items: [
          { name: "Creamed Spinach", price: "5", dietary: ["GF"] },
          { name: "French Fries", price: "5", dietary: ["GF"] },
          { name: "Parmesan Fries", price: "6", dietary: ["GF"] },
          { name: "Sweet Potato Mash", price: "5", dietary: ["GF"] },
          { name: "Spiced Braised Red Cabbage", price: "5", dietary: ["GF"] },
          { name: "Sprouts & Bacon", description: "Chestnuts", price: "5", dietary: ["GF"] },
        ],
      },
    ],
    note:
      "Please always inform your server of any allergies or intolerances before placing your order. Not all ingredients are listed on the menu and we cannot guarantee the total absence of allergens.",
  },
  {
    slug: "winter-evening",
    title: "Winter Evening Menu",
    intro:
      "Available from November 24th — served Thursday to Saturday evening. Seasonal winter dishes, ethical and locally sourced wherever possible.",
    pdf: "/menus/24.11.2026%20-%20Winter%20Evening%20Menu.pdf",
    banner: "/evening-menu.jpg",
    sections: [
      {
        title: "Starters",
        items: [
          { name: "Sweet Potato, Coconut & Chilli Soup", description: "Sesame & soy crouton", price: "11", dietary: ["VG"] },
          { name: "King Scallops", description: "Coral sauce, broccoli purée, parma ham crumb", price: "15", dietary: ["GF"] },
          { name: "Smoked Salmon", description: "Pickled fennel, dill crème fraîche, lemon oil", price: "13", dietary: ["GF"] },
          { name: "Mushroom & Parmesan Arancini", description: "Beetroot ketchup", price: "12", dietary: ["V", "GF"] },
          { name: "Chicken Liver Parfait", description: "Focaccia crisps, rocket, lemon oil", price: "13" },
          { name: "Char Sui Pork", description: "Peanut dressing, puffed rind, coriander", price: "13", dietary: ["GF"] },
        ],
      },
      {
        title: "Mains",
        items: [
          { name: "Confit Salmon", description: "Roasted celeriac & capers, tarragon beurre blanc", price: "24", dietary: ["GF"] },
          { name: "Bang Bang Cauliflower", description: "Sticky coconut rice, blackbean salad, charred pickled corn", price: "17", dietary: ["VG"] },
          { name: "Beef Bourguignon", description: "Mushrooms, baby onions, parsnip purée, pancetta", price: "24", dietary: ["GF"] },
          { name: "Turkey Saltimbocca", description: "Parma ham, sage butter, parmentier potatoes", price: "22", dietary: ["GF"] },
          { name: "Seabass", description: "Saffron sauce, spinach, mussels", price: "26", dietary: ["GF"] },
          { name: "Duck Leg", description: "Braised leeks, mulled wine sauce", price: "24", dietary: ["GF"] },
          { name: "Roast Butternut & Spinach Tagliatelle", description: "Tenderstem broccoli, crispy onions", price: "17", dietary: ["VG"] },
          { name: "Refuge Burger", description: "Beef tomato, lettuce, emmental cheese, burger sauce", price: "16" },
          { name: "Fillet Steak", description: "Served with a choice of cognac & peppercorn sauce, Café de Paris butter or chimichurri", price: "34", dietary: ["GF"] },
        ],
      },
      {
        title: "Desserts",
        items: [
          { name: "Apple & Cranberry Crumble", description: "Cinnamon ice cream", price: "7.95" },
          { name: "After 8 Cheesecake", price: "7.95" },
          { name: "Christmas Pudding Parfait", description: "Brandy buttercream, brandy snap tuile", price: "7.95" },
          { name: "Espresso Martini Affogato", description: "Kahlúa, vanilla Absolut, vanilla ice cream, double espresso", price: "12", dietary: ["GF"] },
          { name: "Pear Sorbet", description: "Mulled wine sauce", price: "7.95" },
          { name: "Cheeseboard", description: "Selection of cheeses & crackers, chutney", price: "12" },
        ],
      },
      {
        title: "Side Dishes",
        items: [
          { name: "Creamed Spinach", price: "5", dietary: ["GF"] },
          { name: "French Fries", price: "5", dietary: ["GF"] },
          { name: "Parmesan Fries", price: "6", dietary: ["GF"] },
          { name: "Sweet Potato Mash", price: "5", dietary: ["GF"] },
          { name: "Spiced Braised Red Cabbage", price: "5", dietary: ["GF"] },
          { name: "Sprouts & Bacon", description: "Chestnuts", price: "5", dietary: ["GF"] },
        ],
      },
    ],
    note:
      "Please always inform your server of any allergies or intolerances before placing your order. Not all ingredients are listed on the menu and we cannot guarantee the total absence of allergens.",
  },
  {
    slug: "drinks",
    title: "Drinks Menu",
    intro:
      "Thoughtful drinks — cocktails, wines, spirits and coffee. Home of the island's finest espresso martini.",
    pdf: "/menus/24.11.2026%20-%20Drinks%20List.pdf",
    banner: "/Our%20Famous%20Espresso%20Martini.jpeg",
    sections: [
      {
        title: "Champagnes & Sparklings",
        subtitle: "125ml / 175ml / Bottle",
        items: [
          { name: "Durello Spumante Brut NV", description: "Veneto, Italy — fresh and lively, with crisp citrus, green apple and delicate floral notes, finishing with a refreshing sparkle.", price: "7.5 / 9 / 35", dietary: ["VG"] },
          { name: "Langlois-Château Brut Rosé NV", description: "Crémant de Loire AOC, France — traditional method fizz, summer berries, fresh cream, lifted white fruits & expressive on the finish.", price: "50 (Bottle)", dietary: ["VG"] },
          { name: "Gremillet Brut NV", description: "Champagne AOC, France — classic and refined, with notes of crisp apple, citrus and brioche, balanced by a fine, persistent fizz.", price: "12 / 16.5 / 65", dietary: ["V"] },
          { name: "Veuve Clicquot Brut NV", description: "Champagne AOC, France — pear, apple and toasted brioche with a beautifully fine mousse. Balanced, precise and timelessly elegant.", price: "105 (Bottle)" },
          { name: "Billecart Salmon Rosé", description: "Champagne AOC, France — wild strawberry, citrus zest and delicate florals. Silky texture with vibrant freshness and exceptional finesse.", price: "145 (Bottle)" },
          { name: "Dom Pérignon", description: "Champagne AOC, France — the scent of a heady flower, of jasmine, with candied zest, altogether vegetal and fruity, soft and grainy.", price: "395 (Bottle)" },
        ],
      },
      {
        title: "White Wines",
        subtitle: "125ml / 175ml / Bottle",
        items: [
          { name: "Sumo Cat Riesling", description: "Rheinhessen, Germany — crystalline notes of lime, green apple and white blossom.", price: "6 / 8 / 30", dietary: ["VG", "O"] },
          { name: "Conviviale Pinot Grigio", description: "Delle Venezie DOC, Italy — fresh pear, white peach and delicate floral aromas lead to a clean, lightly textured palate.", price: "7 / 8.5 / 33", dietary: ["VG"] },
          { name: "Cloud Factory Sauvignon Blanc", description: "Marlborough, New Zealand — bursting with passionfruit, gooseberry and fresh herbs.", price: "7.5 / 9.5 / 36", dietary: ["VG"] },
          { name: "Gavi di Gavi Sarotto", description: "Gavi di Gavi DOCG, Italy — refined and structured with notes of white flowers, almond and ripe lemon.", price: "8 / 10.5 / 40", dietary: ["VG"] },
          { name: "Howard's Folly Alvarinho", description: "Rías Baixas DO, Spain — zesty citrus, ripe peach and subtle floral notes, finishing with a clean mineral edge.", price: "47 (Bottle)", dietary: ["VG"] },
          { name: "Chablis Adrien Michaut", description: "Chablis AOC, Burgundy — green apple, lemon peel and flinty minerality. Focused and crisp northern Burgundy Chardonnay.", price: "58 (Bottle)", dietary: ["VG"] },
          { name: "Pouilly Fumé Renardie", description: "Pouilly-Fumé AOC, Loire Valley — white peach, citrus and subtle smoky flint. Textured yet vibrant, with a long mineral finish.", price: "60 (Bottle)", dietary: ["VG"] },
          { name: "Vallet Frères Bourgogne Blanc", description: "Bourgogne AOC, Burgundy — fresh orchard fruit layered with gentle citrus and subtle oak nuances.", price: "65 (Bottle)", dietary: ["VG"] },
        ],
      },
      {
        title: "Rosé & Dessert Wines",
        subtitle: "125ml / 175ml / Bottle",
        items: [
          { name: "La Grande Plage Rosé", description: "IGP Pays d'Oc, France — notes of wild strawberries and rosehips. A delicate and elegant style.", price: "7 / 9 / 35", dietary: ["VG"] },
          { name: "By Ott", description: "Côtes de Provence AOC, France — luminous and refined, revealing white peach, pink grapefruit and subtle herbal notes.", price: "55 (Bottle)", dietary: ["VG"] },
          { name: "Lieutenant de Sigalas Sauternes", description: "Sauternes AOC, Bordeaux — honeyed apricot, marmalade and exotic spice. Lusciously sweet yet lifted by bright acidity.", price: "45 (Bottle)" },
        ],
      },
      {
        title: "Red Wines",
        subtitle: "125ml / 175ml / Bottle",
        items: [
          { name: "Caliterra Merlot Reserva", description: "Colchagua Valley, Chile — ripe plum and black cherry layered with hints of cocoa and sweet spice.", price: "7.5 / 8.5 / 32", dietary: ["VG"] },
          { name: "Calusari Pinot Noir", description: "Viile Timișului, Romania — supple red cherry and raspberry notes with gentle spice. Soft tannins and fresh acidity.", price: "8 / 9 / 35", dietary: ["VG"] },
          { name: "Ederra Rioja Crianza", description: "Rioja DOC, Spain — ripe red berries layered with vanilla and sweet spice from oak ageing. Harmonious, medium-bodied and polished.", price: "8.5 / 10 / 39", dietary: ["VG"] },
          { name: "Don David Malbec", description: "Calchaquí Valley, Argentina — blackberry, dark chocolate and warm spice. Generous and concentrated with impressive depth.", price: "10 / 12 / 42", dietary: ["V"] },
          { name: "Howard's Folly Sonhador Tinto", description: "Alentejo, Portugal — smooth and expressive, with ripe red and dark fruit flavours, gentle spice and soft tannins.", price: "50 (Bottle)", dietary: ["VG"] },
          { name: "The Chocolate Block", description: "W.O Swartland, South Africa — a Rhône-inspired blend layered with dark berries, cocoa and savoury spice.", price: "60 (Bottle)", dietary: ["VG"] },
          { name: "Châteauneuf-du-Pape Chante Cigale", description: "Rhône Valley, France — powerful and aromatic, showing ripe blackberry, garrigue herbs and pepper. Full-bodied with velvety tannins.", price: "66 (Bottle)", dietary: ["VG", "O"] },
          { name: "Muga Reserva", description: "Rioja DOCa, Spain — complex layers of black cherry, cedar, tobacco and spice. Structured and age-worthy with beautifully integrated oak.", price: "70 (Bottle)" },
          { name: "S de Siran Margaux", description: "Margaux AOC, Bordeaux — perfumed cassis and violet aromas lead to a silky palate framed by refined tannins.", price: "85 (Bottle)" },
        ],
      },
      {
        title: "Champagne Cocktails",
        items: [
          { name: "French 75", description: "Bombay gin, lemon, sugar", price: "15" },
          { name: "Kir Royale", description: "Mûre Briottet", price: "15" },
          { name: "Champagne Cosmopolitan", description: "Absolut Citron, triple sec, lime, sugar, cranberry", price: "15" },
          { name: "Champagne Supernova", description: "Courvoisier VS, triple sec, lemon, sugar", price: "15" },
        ],
      },
      {
        title: "Spritz Cocktails",
        items: [
          { name: "Pink Grapefruit", description: "Pamplemousse Briottet", price: "13" },
          { name: "Hugo Spritz", description: "Elderflower Briottet, mint", price: "13" },
          { name: "Rhubarb & Blackcurrant", description: "Rhubarb & Mûre Briottet", price: "13" },
          { name: "Aperol Spritz", description: "Aperol", price: "13" },
          { name: "Dolce Vita No.1", description: "Dolce Vita No.1 aperitivo", price: "13" },
        ],
      },
      {
        title: "House Cocktails",
        subtitle: "2 for £18 — Thursday & Friday, 3–6 PM",
        items: [
          { name: "Courvoisier Sidecar", description: "Courvoisier VS, triple sec, sugar, lemon", price: "12" },
          { name: "Refuge Espresso Martini", description: "Absolut Vanilia vodka, Kahlúa, Racer Blend espresso", price: "12" },
          { name: "Beauty & the Beast", description: "Tequila, pineapple, strawberry, passionfruit, lemon", price: "11" },
          { name: "Amaretto & Plum Sake Sour", description: "Salizar amaretto, plum sake, lemon, sugar, egg", price: "14" },
          { name: "Margarita", description: "Tequila, triple sec, lime, agave", price: "12" },
          { name: "White Lady", description: "Beefeater gin, triple sec, sugar, lemon, egg", price: "11" },
          { name: "Bramble", description: "Beefeater gin, mûre Briottet, lemon, sugar", price: "10" },
          { name: "Negroni", description: "Tanqueray gin, Campari, Martini Rosso, bitters", price: "13" },
          { name: "Old Fashioned", description: "Buffalo Trace, orange bitters, sugar", price: "12" },
          { name: "Hemingway Daiquiri", description: "Bacardi white rum, grapefruit, lime, maraschino liqueur, sugar", price: "13" },
        ],
      },
      {
        title: "Mocktails",
        items: [
          { name: "Apple Hugo", description: "Apple, elderflower, lime, mint", price: "7" },
          { name: "Pink Grapefruit Cooler", description: "Grapefruit, lemon, sugar, soda", price: "7" },
          { name: "Strawberry Mule", description: "Strawberry, lime, apple, ginger ale", price: "7" },
          { name: "Clean Co. Gin Collins", description: "Alcohol-free gin, soda, lemon, sugar", price: "7" },
        ],
      },
      {
        title: "Whisky",
        subtitle: "50ml unless requested otherwise",
        items: [
          { name: "Hatozaki Blended Japanese Whisky", description: "Elegant Japanese blend offering delicate floral notes, light oak and hints of honeyed citrus.", price: "14" },
          { name: "Caisteal Chamuis Heavily Peated Blended Malt Scotch Whisky", description: "Bold and smoky Islay-style dram packed with peat smoke, sea salt and warming spice.", price: "15" },
          { name: "Glenfarclas 10 Year Old", description: "Classic Speyside single malt with rich sherry sweetness, dried fruit and gentle spice.", price: "17" },
        ],
      },
      {
        title: "Digestifs",
        subtitle: "50ml unless requested otherwise",
        items: [
          { name: "Maxime Trijol XO Cognac", description: "Deep notes of candied fruit, toasted oak and a long velvety finish.", price: "20" },
          { name: "Maxime Trijol V.S.O.P Cognac", description: "Well-balanced, showing dried fruit, vanilla and soft toasted almond.", price: "18" },
          { name: "Baron de Sigognac 20 Ans Armagnac", description: "Full-bodied with rich prune, caramelised fruit and warming oak spice.", price: "30" },
          { name: "Château du Breuil Calvados", description: "Elegant Normandy apple brandy with baked apple, caramel and delicate oak.", price: "14" },
        ],
      },
      {
        title: "Gin",
        items: [
          { name: "Bombay Sapphire", price: "5" },
          { name: "Fynoderee", price: "5" },
          { name: "Whitley Neill", price: "4" },
          { name: "Hendrick's", price: "5.5" },
          { name: "Tanqueray", price: "5" },
        ],
      },
      {
        title: "Vodka",
        items: [
          { name: "Absolut", price: "4" },
          { name: "Black Cow", price: "6" },
          { name: "Grey Goose", price: "6" },
          { name: "Mammoth", price: "6" },
        ],
      },
      {
        title: "Tequila",
        items: [
          { name: "El Sueño Silver", price: "5" },
          { name: "Cazcabel Coffee", price: "5" },
        ],
      },
      {
        title: "Rum",
        items: [
          { name: "Doorly's Gold 5yr", price: "5" },
          { name: "Mount Gay", price: "5" },
          { name: "Havana 7", price: "6" },
          { name: "Goslings", price: "5" },
          { name: "Bacardi", price: "4" },
        ],
      },
      {
        title: "Beers & Cider",
        items: [
          { name: "Peroni", price: "6" },
          { name: "Noam — Bavaria", price: "7" },
          { name: "Punk IPA", price: "6" },
          { name: "Guinness", price: "6" },
          { name: "Guinness 0.0", price: "6" },
          { name: "Krombacher 0.0", price: "6" },
          { name: "Magners", price: "6" },
        ],
      },
      {
        title: "Soft Drinks",
        subtitle: "From £2.95",
        items: [
          { name: "Coca Cola" },
          { name: "Diet Coke" },
          { name: "Sprite" },
          { name: "San Pellegrino" },
          { name: "Ginger Beer" },
          { name: "Orange Juice" },
          { name: "Cranberry Juice" },
          { name: "Apple Juice" },
          { name: "Pineapple Juice" },
          { name: "Elderflower Posh Pop" },
          { name: "Schweppes Ginger Ale" },
          { name: "Schweppes Tonic" },
          { name: "Schweppes Slimline" },
          { name: "Fever-Tree Mediterranean" },
          { name: "Big Tom Tomato Juice" },
          { name: "Schweppes Soda Water" },
        ],
      },
      {
        title: "Coffee & Hot Drinks",
        subtitle: "We proudly serve Conor Cummins Racer Blend coffee",
        items: [
          { name: "Cappuccino", price: "4.25" },
          { name: "Latte", price: "4.25" },
          { name: "Flat White", price: "4" },
          { name: "Americano", price: "4" },
          { name: "Cortado", price: "4" },
          { name: "Espresso", price: "3.5" },
          { name: "Double Espresso", price: "3.9" },
          { name: "Mocha", price: "4" },
          { name: "Macchiato", price: "4" },
          { name: "Chai Latte", price: "4.5" },
          { name: "Iced Coffee", description: "Double espresso, whole milk", price: "4" },
          { name: "Hot Chocolate", price: "4" },
        ],
      },
      {
        title: "Tea",
        items: [
          { name: "English Breakfast", price: "3.5" },
          { name: "Peppermint", price: "3.5" },
          { name: "Lemon & Ginger", price: "3.5" },
          { name: "Camomile", price: "3.5" },
          { name: "Decaf Yorkshire", price: "3.5" },
          { name: "Green", price: "3.5" },
          { name: "Earl Grey", price: "3.5" },
        ],
      },
      {
        title: "Extras",
        items: [
          { name: "Alternative Milk", description: "Oat", price: "0.50" },
          { name: "Syrups", description: "Vanilla or caramel", price: "0.50" },
        ],
      },
    ],
    note:
      "Some of our wines are at their best when they've had time to breathe — to pre-arrange a decanted wine, speak to one of our staff. Planning a gathering? We offer private hire for birthday celebrations, corporate functions and special occasions — ask at the bar for details.",
  },
];

export const dietaryLegend: Record<Dietary, string> = {
  V: "Vegetarian",
  VG: "Vegan",
  GF: "Gluten free",
  N: "Contains nuts",
  O: "Organic",
};
