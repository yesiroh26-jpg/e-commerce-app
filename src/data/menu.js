// Generates a placeholder image entirely in-browser (an inline SVG data URI) —
// no network request at all, so it can never fail to load. Swap these for real
// food photos whenever you have them; just replace the string with a URL/path,
// same array shape (two images per item, used for the gallery on the details page).
function placeholder(label, bg) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='700' height='700'>
    <rect width='100%' height='100%' fill='#${bg}'/>
    <text x='50%' y='50%' font-family='sans-serif' font-size='42' fill='#FBF3E7' text-anchor='middle' dominant-baseline='middle'>${label}</text>
  </svg>`
  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

function placeholderPair(label, bg) {
  return [placeholder(label, bg), placeholder(label, '2A1D14')]
}

export const categories = ['Breakfast', 'Appetizers', 'Soups', 'Mains', 'Sides', 'Desserts', 'Drinks', 'Kids Menu']

// "region" reflects the Nigerian tribe/area a dish is most associated with —
// shown as a small tag on the menu so the spread of cuisines is visible.
export const menuItems = [
  // --- Breakfast ---
  {
    id: 'm33', name: 'Akara & Pap (Akamu)', category: 'Breakfast', region: 'Nigerian',
    price: 1500, rating: 4.7, reviews: 189, popular: true,
    images: ['/pap and akara.jpeg', '/pap and akara 2.jpeg'], get image() { return this.images[0] },
    description: 'Deep-fried bean cake fritters served with warm, lightly sweetened fermented corn pudding.',
  },
  {
    id: 'm34', name: 'Bread & Akara', category: 'Breakfast', region: 'Nigerian',
    price: 1300, rating: 4.4, reviews: 92, popular: false,
    images: ['/bread and akara.jpeg', '/bread and akara 2.jpeg'], get image() { return this.images[0] },
    description: 'Soft sliced bread with a bowl of smooth, deep-fried bean cake fritters — a classic Nigerian morning start.',
  },
  {
    id: 'm35', name: 'Yam & Egg Sauce', category: 'Breakfast', region: 'Nigerian',
    price: 1800, rating: 4.6, reviews: 134, popular: false,
    images: ['/yam and egg sauce.jpeg', '/yam and egg sauce 2.jpeg'], get image() { return this.images[0] },
    description: 'Boiled yam slices with a peppered tomato-and-egg sauce, cooked soft and rich.',
  },
  {
    id: 'm36', name: 'Indomie & Fried Egg', category: 'Breakfast', region: 'Nigerian',
    price: 1600, rating: 4.8, reviews: 267, popular: true,
    images: ['/indomie and egg.jpeg', '/indomie and egg 2.jpeg'], get image() { return this.images[0] },
    description: 'Nigeria\u2019s favorite quick meal — seasoned instant noodles topped with a fried egg.',
  },
  {
    id: 'm37', name: 'Moi Moi & Custard', category: 'Breakfast', region: 'Yoruba',
    price: 1500, rating: 4.3, reviews: 71, popular: false,
    images: placeholderPair('Moi Moi & Custard', '1B5E3C'), get image() { return this.images[0] },
    description: 'Steamed bean pudding paired with a warm cup of custard — a lighter breakfast option.',
  },

  // --- Appetizers ---
  {
    id: 'm1', name: 'Puff Puff', category: 'Appetizers', region: 'Nigerian',
    price: 1000, rating: 4.6, reviews: 214, popular: true,
    images: placeholderPair('Puff Puff', 'C1440E'), get image() { return this.images[0] },
    description: 'Soft, golden deep-fried dough balls, lightly sweetened. A street-food classic.',
  },
  {
    id: 'm2', name: 'Suya', category: 'Appetizers', region: 'Hausa',
    price: 2500, rating: 4.8, reviews: 356, popular: true,
    images: placeholderPair('Suya', '9A350A'), get image() { return this.images[0] },
    description: 'Skewered beef grilled over open flame, coated in a spiced groundnut (yaji) rub.',
  },
  {
    id: 'm3', name: 'Chin Chin', category: 'Appetizers', region: 'Nigerian',
    price: 1200, rating: 4.4, reviews: 98, popular: false,
    images: placeholderPair('Chin Chin', 'D9A441'), get image() { return this.images[0] },
    description: 'Crunchy fried pastry cubes, lightly sweetened — a favorite party snack.',
  },
  {
    id: 'm11', name: 'Akara', category: 'Appetizers', region: 'Yoruba',
    price: 1000, rating: 4.5, reviews: 142, popular: false,
    images: placeholderPair('Akara', '1B5E3C'), get image() { return this.images[0] },
    description: 'Deep-fried bean cake fritters, crisp outside and soft inside.',
  },
  {
    id: 'm12', name: 'Moin Moin', category: 'Appetizers', region: 'Yoruba',
    price: 1300, rating: 4.6, reviews: 187, popular: false,
    images: placeholderPair('Moin Moin', 'D9A441'), get image() { return this.images[0] },
    description: 'Steamed bean pudding blended with peppers and onions, wrapped and cooked soft.',
  },
  {
    id: 'm13', name: 'Meat Pie', category: 'Appetizers', region: 'Nigerian',
    price: 1200, rating: 4.7, reviews: 233, popular: true,
    images: placeholderPair('Meat Pie', '9A350A'), get image() { return this.images[0] },
    description: 'Flaky golden pastry filled with spiced minced meat, potatoes, and carrots.',
  },
  {
    id: 'm23', name: 'Abacha (African Salad)', category: 'Appetizers', region: 'Igbo',
    price: 2200, rating: 4.5, reviews: 88, popular: false,
    images: placeholderPair('Abacha', '1B5E3C'), get image() { return this.images[0] },
    description: 'Shredded cassava tossed in a palm-oil and potash dressing with garden egg leaves and fish.',
  },
  {
    id: 'm41', name: 'Spring Rolls', category: 'Appetizers', region: 'International',
    price: 1800, rating: 4.4, reviews: 76, popular: false,
    images: placeholderPair('Spring Rolls', 'C1440E'), get image() { return this.images[0] },
    description: 'Crispy fried rolls filled with seasoned vegetables, served with a dipping sauce.',
  },
  {
    id: 'm42', name: 'Chicken Wings', category: 'Appetizers', region: 'International',
    price: 2200, rating: 4.7, reviews: 198, popular: true,
    images: placeholderPair('Chicken Wings', '9A350A'), get image() { return this.images[0] },
    description: 'Fried chicken wings tossed in a spicy glaze, served with celery sticks.',
  },
  {
    id: 'm43', name: 'Garlic Bread', category: 'Appetizers', region: 'International',
    price: 1200, rating: 4.3, reviews: 54, popular: false,
    images: placeholderPair('Garlic Bread', 'D9A441'), get image() { return this.images[0] },
    description: 'Toasted bread with garlic butter and herbs, served warm.',
  },

  // --- Soups ---
  {
    id: 'm44', name: 'Chicken Soup', category: 'Soups', region: 'International',
    price: 2000, rating: 4.4, reviews: 61, popular: false,
    images: placeholderPair('Chicken Soup', '1B5E3C'), get image() { return this.images[0] },
    description: 'Light, comforting chicken broth with vegetables and herbs.',
  },
  {
    id: 'm45', name: 'Mushroom Soup', category: 'Soups', region: 'International',
    price: 2200, rating: 4.3, reviews: 47, popular: false,
    images: placeholderPair('Mushroom Soup', 'C1440E'), get image() { return this.images[0] },
    description: 'Creamy blended mushroom soup, served hot with a slice of bread.',
  },
  {
    id: 'm67', name: 'Tomato Soup', category: 'Soups', region: 'International',
    price: 1800, rating: 4.3, reviews: 39, popular: false,
    images: placeholderPair('Tomato Soup', 'D9A441'), get image() { return this.images[0] },
    description: 'A smooth, lightly seasoned tomato soup, served hot.',
  },
  {
    id: 'm68', name: 'Vegetable Soup', category: 'Soups', region: 'International',
    price: 2000, rating: 4.2, reviews: 33, popular: false,
    images: placeholderPair('Vegetable Soup', '1B5E3C'), get image() { return this.images[0] },
    description: 'A light broth loaded with mixed garden vegetables.',
  },
  {
    id: 'm69', name: 'Ogbono Soup', category: 'Soups', region: 'Igbo',
    price: 3500, rating: 4.6, reviews: 82, popular: false,
    images: placeholderPair('Ogbono Soup', '9A350A'), get image() { return this.images[0] },
    description: 'Thick, draw soup made from ground ogbono seeds with assorted meat and fish.',
  },
  {
    id: 'm70', name: 'Groundnut Soup', category: 'Soups', region: 'Hausa',
    price: 3200, rating: 4.5, reviews: 58, popular: false,
    images: placeholderPair('Groundnut Soup', 'D9A441'), get image() { return this.images[0] },
    description: 'A rich, nutty soup made from ground peanuts, slow-simmered with beef.',
  },

  // --- Mains ---
  {
    id: 'm4', name: 'Jollof Rice & Chicken', category: 'Mains', region: 'Nigerian',
    price: 4500, rating: 4.9, reviews: 512, popular: true,
    images: placeholderPair('Jollof Rice', 'C1440E'), get image() { return this.images[0] },
    description: 'Smoky tomato-pepper rice, slow-cooked, served with grilled chicken.',
  },
  {
    id: 'm5', name: 'Egusi Soup & Pounded Yam', category: 'Mains', region: 'Igbo',
    price: 5200, rating: 4.7, reviews: 289, popular: true,
    images: placeholderPair('Egusi Soup', '1B5E3C'), get image() { return this.images[0] },
    description: 'Ground melon-seed soup with leafy greens and assorted meat, served with pounded yam.',
  },
  {
    id: 'm6', name: 'Pepper Soup (Goat Meat)', category: 'Mains', region: 'Nigerian',
    price: 5500, rating: 4.6, reviews: 176, popular: false,
    images: placeholderPair('Pepper Soup', '9A350A'), get image() { return this.images[0] },
    description: 'A light, fiery broth of goat meat and native spices — warming and bold.',
  },
  {
    id: 'm14', name: 'Efo Riro & Semo', category: 'Mains', region: 'Yoruba',
    price: 4900, rating: 4.6, reviews: 154, popular: false,
    images: placeholderPair('Efo Riro', '1B5E3C'), get image() { return this.images[0] },
    description: 'Rich vegetable soup with assorted meat and fish, served with smooth semo swallow.',
  },
  {
    id: 'm15', name: 'Ofada Rice & Ayamase Sauce', category: 'Mains', region: 'Yoruba',
    price: 5000, rating: 4.8, reviews: 267, popular: true,
    images: placeholderPair('Ofada Rice', 'C1440E'), get image() { return this.images[0] },
    description: 'Local unpolished rice with a fiery green-pepper sauce and assorted meat.',
  },
  {
    id: 'm16', name: 'Nkwobi', category: 'Mains', region: 'Igbo',
    price: 5300, rating: 4.5, reviews: 118, popular: false,
    images: placeholderPair('Nkwobi', '9A350A'), get image() { return this.images[0] },
    description: 'Spiced and spicy cow foot in a thick palm-oil sauce, garnished with utazi leaf.',
  },
  {
    id: 'm17', name: 'Ewa Agoyin & Bread', category: 'Mains', region: 'Yoruba',
    price: 3200, rating: 4.4, reviews: 96, popular: false,
    images: placeholderPair('Ewa Agoyin', '1B5E3C'), get image() { return this.images[0] },
    description: 'Mashed beans served with a smoky pepper sauce and soft bread.',
  },
  {
    id: 'm18', name: 'Fried Rice & Turkey', category: 'Mains', region: 'Nigerian',
    price: 4800, rating: 4.7, reviews: 203, popular: false,
    images: placeholderPair('Fried Rice', 'D9A441'), get image() { return this.images[0] },
    description: 'Vegetable fried rice with mixed peppers, served with grilled turkey.',
  },
  {
    id: 'm24', name: 'Amala & Ewedu', category: 'Mains', region: 'Yoruba',
    price: 4300, rating: 4.6, reviews: 132, popular: false,
    images: placeholderPair('Amala & Ewedu', 'C1440E'), get image() { return this.images[0] },
    description: 'Smooth yam-flour swallow with a silky jute-leaf soup and gbegiri, served with assorted meat.',
  },
  {
    id: 'm25', name: 'Miyan Kuka & Tuwo Shinkafa', category: 'Mains', region: 'Hausa',
    price: 4600, rating: 4.5, reviews: 74, popular: false,
    images: placeholderPair('Miyan Kuka', '9A350A'), get image() { return this.images[0] },
    description: 'Baobab-leaf soup with beef and dawadawa, served with soft rice swallow.',
  },
  {
    id: 'm26', name: 'Afang Soup & Fufu', category: 'Mains', region: 'Efik/Ibibio',
    price: 5400, rating: 4.7, reviews: 91, popular: false,
    images: placeholderPair('Afang Soup', '1B5E3C'), get image() { return this.images[0] },
    description: 'Afang and waterleaf simmered with periwinkle and assorted meat, served with fufu.',
  },
  {
    id: 'm27', name: 'Banga Soup & Starch', category: 'Mains', region: 'Edo/Delta',
    price: 5100, rating: 4.6, reviews: 68, popular: false,
    images: placeholderPair('Banga Soup', 'D9A441'), get image() { return this.images[0] },
    description: 'Palm-fruit soup simmered with native spices and fish, served with starch.',
  },
  {
    id: 'm38', name: 'Margherita Pizza', category: 'Mains', region: 'International',
    price: 6000, rating: 4.5, reviews: 112, popular: false,
    images: placeholderPair('Margherita Pizza', 'C1440E'), get image() { return this.images[0] },
    description: 'Wood-fired pizza with tomato, mozzarella, and fresh basil — a familiar side option alongside the local menu.',
  },
  {
    id: 'm39', name: 'Classic Beef Burger & Fries', category: 'Mains', region: 'International',
    price: 5000, rating: 4.6, reviews: 143, popular: true,
    images: placeholderPair('Beef Burger', '9A350A'), get image() { return this.images[0] },
    description: 'Grilled beef patty, cheese, lettuce and tomato in a soft bun, served with fries.',
  },
  {
    id: 'm46', name: 'Grilled Chicken & Vegetables', category: 'Mains', region: 'International',
    price: 5500, rating: 4.6, reviews: 132, popular: false,
    images: placeholderPair('Grilled Chicken', 'D9A441'), get image() { return this.images[0] },
    description: 'Char-grilled chicken breast with a side of seasonal steamed vegetables.',
  },
  {
    id: 'm47', name: 'T-Bone Steak', category: 'Mains', region: 'International',
    price: 8000, rating: 4.8, reviews: 94, popular: true,
    images: placeholderPair('T-Bone Steak', 'C1440E'), get image() { return this.images[0] },
    description: 'Grilled T-bone steak cooked to your preference, served with mashed potatoes.',
  },
  {
    id: 'm48', name: 'Spaghetti Bolognese', category: 'Mains', region: 'International',
    price: 4500, rating: 4.5, reviews: 121, popular: false,
    images: placeholderPair('Spaghetti Bolognese', '9A350A'), get image() { return this.images[0] },
    description: 'Spaghetti tossed in a rich minced-beef tomato sauce, topped with parmesan.',
  },
  {
    id: 'm49', name: 'Chicken Alfredo', category: 'Mains', region: 'International',
    price: 4800, rating: 4.6, reviews: 108, popular: false,
    images: placeholderPair('Chicken Alfredo', '1B5E3C'), get image() { return this.images[0] },
    description: 'Fettuccine in a creamy parmesan sauce with grilled chicken strips.',
  },
  {
    id: 'm50', name: 'Grilled Fish & Rice', category: 'Mains', region: 'International',
    price: 5200, rating: 4.5, reviews: 87, popular: false,
    images: placeholderPair('Grilled Fish', 'D9A441'), get image() { return this.images[0] },
    description: 'Whole grilled fish seasoned with herbs, served with jollof or white rice.',
  },
  {
    id: 'm51', name: 'Sweet & Sour Chicken', category: 'Mains', region: 'International',
    price: 4700, rating: 4.6, reviews: 156, popular: true,
    images: placeholderPair('Sweet & Sour', 'C1440E'), get image() { return this.images[0] },
    description: 'Crispy chicken pieces tossed in a tangy sweet-and-sour sauce with peppers and onions.',
  },
  {
    id: 'm52', name: 'Special Fried Rice (Chinese-style)', category: 'Mains', region: 'International',
    price: 4600, rating: 4.7, reviews: 174, popular: false,
    images: placeholderPair('Chinese Fried Rice', '9A350A'), get image() { return this.images[0] },
    description: 'Wok-fried rice with prawns, egg, and mixed vegetables in a light soy seasoning.',
  },

  // --- Sides ---
  {
    id: 'm53', name: 'French Fries', category: 'Sides', region: 'International',
    price: 1500, rating: 4.5, reviews: 143, popular: true,
    images: placeholderPair('French Fries', 'D9A441'), get image() { return this.images[0] },
    description: 'Crispy golden fries, lightly salted.',
  },
  {
    id: 'm54', name: 'Coleslaw', category: 'Sides', region: 'International',
    price: 1000, rating: 4.2, reviews: 58, popular: false,
    images: placeholderPair('Coleslaw', '1B5E3C'), get image() { return this.images[0] },
    description: 'Fresh shredded cabbage and carrot in a light creamy dressing.',
  },
  {
    id: 'm55', name: 'Sauteed Vegetables', category: 'Sides', region: 'International',
    price: 1300, rating: 4.3, reviews: 41, popular: false,
    images: placeholderPair('Sauteed Vegetables', 'C1440E'), get image() { return this.images[0] },
    description: 'Mixed seasonal vegetables lightly sautéed in butter and garlic.',
  },
  {
    id: 'm56', name: 'Fried Plantain (Savory)', category: 'Sides', region: 'Nigerian',
    price: 1200, rating: 4.6, reviews: 112, popular: false,
    images: placeholderPair('Fried Plantain', '9A350A'), get image() { return this.images[0] },
    description: 'Ripe plantain slices fried golden — a classic side for any main.',
  },

  // --- Desserts ---
  {
    id: 'm7', name: 'Coconut Candy', category: 'Desserts', region: 'Nigerian',
    price: 800, rating: 4.5, reviews: 143, popular: false,
    images: placeholderPair('Coconut Candy', 'D9A441'), get image() { return this.images[0] },
    description: 'Chewy caramelized coconut bites, a simple and beloved treat.',
  },
  {
    id: 'm8', name: 'Fried Plantain (Dodo) with Ice Cream', category: 'Desserts', region: 'Nigerian',
    price: 1500, rating: 4.7, reviews: 201, popular: true,
    images: placeholderPair('Dodo & Ice Cream', 'C1440E'), get image() { return this.images[0] },
    description: 'Sweet fried plantain slices paired with a scoop of vanilla ice cream.',
  },
  {
    id: 'm19', name: 'Buns', category: 'Desserts', region: 'Nigerian',
    price: 700, rating: 4.3, reviews: 77, popular: false,
    images: placeholderPair('Buns', '1B5E3C'), get image() { return this.images[0] },
    description: 'Sweet fried dough bites, crisp outside, soft inside — a classic teatime snack.',
  },
  {
    id: 'm40', name: 'Vanilla Ice Cream Sundae', category: 'Desserts', region: 'International',
    price: 1800, rating: 4.5, reviews: 88, popular: false,
    images: placeholderPair('Ice Cream Sundae', 'D9A441'), get image() { return this.images[0] },
    description: 'Vanilla ice cream with chocolate drizzle and crushed nuts, served chilled.',
  },
  {
    id: 'm57', name: 'Cheesecake', category: 'Desserts', region: 'International',
    price: 2000, rating: 4.7, reviews: 132, popular: true,
    images: placeholderPair('Cheesecake', 'C1440E'), get image() { return this.images[0] },
    description: 'Creamy baked cheesecake on a buttery biscuit base, with a berry compote.',
  },
  {
    id: 'm58', name: 'Chocolate Cake', category: 'Desserts', region: 'International',
    price: 2200, rating: 4.6, reviews: 97, popular: false,
    images: placeholderPair('Chocolate Cake', '9A350A'), get image() { return this.images[0] },
    description: 'Rich, moist chocolate layer cake with chocolate ganache.',
  },
  {
    id: 'm59', name: 'Fresh Fruit Salad', category: 'Desserts', region: 'International',
    price: 1500, rating: 4.4, reviews: 66, popular: false,
    images: placeholderPair('Fruit Salad', '1B5E3C'), get image() { return this.images[0] },
    description: 'A refreshing mix of seasonal fruits, lightly chilled.',
  },

  // --- Drinks ---
  {
    id: 'm9', name: 'Chapman', category: 'Drinks', region: 'Nigerian',
    price: 1800, rating: 4.6, reviews: 167, popular: true,
    images: placeholderPair('Chapman', '1B5E3C'), get image() { return this.images[0] },
    description: 'Nigeria\u2019s signature mocktail — a fruity, fizzy blend served over ice.',
  },
  {
    id: 'm10', name: 'Zobo', category: 'Drinks', region: 'Nigerian',
    price: 1000, rating: 4.4, reviews: 122, popular: false,
    images: placeholderPair('Zobo', '9A350A'), get image() { return this.images[0] },
    description: 'Chilled hibiscus tea infused with ginger, pineapple, and cloves.',
  },
  {
    id: 'm20', name: 'Palm Wine', category: 'Drinks', region: 'Nigerian',
    price: 1500, rating: 4.5, reviews: 109, popular: false,
    images: placeholderPair('Palm Wine', 'D9A441'), get image() { return this.images[0] },
    description: 'Naturally fermented palm sap, mildly sweet with a light fizz. Served chilled.',
  },
  {
    id: 'm21', name: 'Kunu', category: 'Drinks', region: 'Hausa',
    price: 900, rating: 4.3, reviews: 64, popular: false,
    images: placeholderPair('Kunu', 'C1440E'), get image() { return this.images[0] },
    description: 'A smooth, spiced millet or sorghum drink, lightly sweetened.',
  },
  {
    id: 'm22', name: 'Chilled Malt Drink', category: 'Drinks', region: 'Nigerian',
    price: 1100, rating: 4.2, reviews: 85, popular: false,
    images: placeholderPair('Malt Drink', '2A1D14'), get image() { return this.images[0] },
    description: 'A rich, non-alcoholic malt beverage, served ice cold.',
  },
  {
    id: 'm28', name: 'Soft Drink (Coke / Fanta / Sprite)', category: 'Drinks', region: 'Nigerian',
    price: 600, rating: 4.3, reviews: 210, popular: true,
    images: placeholderPair('Soft Drink', 'C1440E'), get image() { return this.images[0] },
    description: 'Chilled bottled soft drink — choose Coke, Fanta, or Sprite at checkout notes.',
  },
  {
    id: 'm29', name: 'Fan Yogurt', category: 'Drinks', region: 'Nigerian',
    price: 900, rating: 4.4, reviews: 97, popular: false,
    images: placeholderPair('Yogurt', 'D9A441'), get image() { return this.images[0] },
    description: 'Cold sweetened yogurt drink, sold chilled in a sachet-style cup.',
  },
  {
    id: 'm30', name: 'Mango Smoothie', category: 'Drinks', region: 'Nigerian',
    price: 1600, rating: 4.6, reviews: 73, popular: false,
    images: placeholderPair('Mango Smoothie', 'C1440E'), get image() { return this.images[0] },
    description: 'Fresh mango blended thick and cold, no added syrup.',
  },
  {
    id: 'm31', name: 'Watermelon Smoothie', category: 'Drinks', region: 'Nigerian',
    price: 1600, rating: 4.5, reviews: 61, popular: false,
    images: placeholderPair('Watermelon Smoothie', '1B5E3C'), get image() { return this.images[0] },
    description: 'Chilled watermelon blended smooth with a hint of mint.',
  },
  {
    id: 'm75', name: 'Apple Smoothie', category: 'Drinks', region: 'International',
    price: 1600, rating: 4.4, reviews: 38, popular: false,
    images: placeholderPair('Apple Smoothie', 'D9A441'), get image() { return this.images[0] },
    description: 'Crisp apple blended smooth and cold, lightly sweetened.',
  },
  {
    id: 'm76', name: 'Pineapple Smoothie', category: 'Drinks', region: 'International',
    price: 1600, rating: 4.5, reviews: 44, popular: false,
    images: placeholderPair('Pineapple Smoothie', 'C1440E'), get image() { return this.images[0] },
    description: 'Sweet pineapple blended thick and chilled.',
  },
  {
    id: 'm77', name: 'Banana Smoothie', category: 'Drinks', region: 'International',
    price: 1500, rating: 4.5, reviews: 51, popular: false,
    images: placeholderPair('Banana Smoothie', '9A350A'), get image() { return this.images[0] },
    description: 'Creamy banana blended with a touch of honey.',
  },
  {
    id: 'm78', name: 'Mixed Berry Smoothie', category: 'Drinks', region: 'International',
    price: 1700, rating: 4.6, reviews: 47, popular: false,
    images: placeholderPair('Mixed Berry Smoothie', '1B5E3C'), get image() { return this.images[0] },
    description: 'Strawberries, blueberries, and raspberries blended cold and smooth.',
  },
  {
    id: 'm60', name: 'Fresh Orange Juice', category: 'Drinks', region: 'International',
    price: 1200, rating: 4.5, reviews: 79, popular: false,
    images: placeholderPair('Orange Juice', 'D9A441'), get image() { return this.images[0] },
    description: 'Freshly squeezed orange juice, served chilled.',
  },
  {
    id: 'm61', name: 'Chocolate Milkshake', category: 'Drinks', region: 'International',
    price: 1800, rating: 4.6, reviews: 93, popular: false,
    images: placeholderPair('Chocolate Milkshake', 'C1440E'), get image() { return this.images[0] },
    description: 'Thick chocolate milkshake topped with whipped cream.',
  },
  {
    id: 'm62', name: 'Coffee', category: 'Drinks', region: 'International',
    price: 1000, rating: 4.4, reviews: 104, popular: false,
    images: placeholderPair('Coffee', '9A350A'), get image() { return this.images[0] },
    description: 'Freshly brewed coffee, served hot or over ice.',
  },
  {
    id: 'm63', name: 'Chilled Beer', category: 'Drinks', region: 'Nigerian',
    price: 1500, rating: 4.5, reviews: 118, popular: true,
    images: placeholderPair('Chilled Beer', '2A1D14'), get image() { return this.images[0] },
    description: 'A cold local lager, served straight from the fridge.',
  },
  {
    id: 'm64', name: 'House Red Wine (Glass)', category: 'Drinks', region: 'International',
    price: 3000, rating: 4.4, reviews: 52, popular: false,
    images: placeholderPair('Red Wine', '9A350A'), get image() { return this.images[0] },
    description: 'A smooth house red, served by the glass.',
  },

  // --- Kids Menu ---
  {
    id: 'm65', name: 'Chicken Nuggets & Fries', category: 'Kids Menu', region: 'International',
    price: 2500, rating: 4.7, reviews: 88, popular: true,
    images: placeholderPair('Chicken Nuggets', 'D9A441'), get image() { return this.images[0] },
    description: 'Crispy chicken nuggets with a side of fries — a kid-friendly favorite.',
  },
  {
    id: 'm66', name: 'Mini Beef Burger', category: 'Kids Menu', region: 'International',
    price: 2500, rating: 4.6, reviews: 64, popular: false,
    images: placeholderPair('Mini Burger', 'C1440E'), get image() { return this.images[0] },
    description: 'A smaller beef burger with cheese, sized just right for younger guests.',
  },
  {
    id: 'm71', name: 'Mac & Cheese', category: 'Kids Menu', region: 'International',
    price: 2200, rating: 4.7, reviews: 91, popular: true,
    images: placeholderPair('Mac & Cheese', 'D9A441'), get image() { return this.images[0] },
    description: 'Creamy cheese sauce over macaroni pasta, baked until golden on top.',
  },
  {
    id: 'm72', name: 'Kids Cheese Pizza', category: 'Kids Menu', region: 'International',
    price: 2800, rating: 4.6, reviews: 57, popular: false,
    images: placeholderPair('Kids Pizza', '9A350A'), get image() { return this.images[0] },
    description: 'A small personal cheese pizza, just the right size for little appetites.',
  },
  {
    id: 'm73', name: 'Fish Fingers & Fries', category: 'Kids Menu', region: 'International',
    price: 2500, rating: 4.5, reviews: 48, popular: false,
    images: placeholderPair('Fish Fingers', '1B5E3C'), get image() { return this.images[0] },
    description: 'Crispy breaded fish fingers with a side of fries.',
  },
  {
    id: 'm74', name: 'Mini Pancakes', category: 'Kids Menu', region: 'International',
    price: 1800, rating: 4.6, reviews: 42, popular: false,
    images: placeholderPair('Mini Pancakes', 'C1440E'), get image() { return this.images[0] },
    description: 'Small fluffy pancakes drizzled with syrup.',
  },
]

export function getMenuItemById(id) {
  return menuItems.find((m) => m.id === id)
}
