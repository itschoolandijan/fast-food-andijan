/* =========================================================
   ANDIJON FAST FOOD — COMPLETE FRONTEND APPLICATION
   10 Categories | 45+ Products | 3 Languages (UZ/RU/EN)
   Andijon City & Region Delivery | Cart & Checkout | Dark Mode
   ========================================================= */

// 1. TRANSLATIONS DICTIONARY (UZ, RU, EN)
const translations = {
    uz: {
        ticker_text: "Andijon shahri bo‘ylab 100 000 so‘mdan yuqori buyurtmalarga yetkazib berish BEPUL!",
        nav_home: "Bosh sahifa",
        nav_menu: "Menyu",
        nav_promos: "Aksiyalar",
        nav_delivery: "Yetkazib berish",
        nav_about: "Biz haqimizda",
        nav_videos: "Jarayon",
        nav_contact: "Aloqa",
        nav_login: "Kirish",
        hero_badge: "🔥 ANDIJONDA №1 PREMIUM FAST FOOD",
        hero_title: "Haqiqiy Ta’m va Issiq Yetkazib Berish!",
        hero_desc: "Yangi uzilgan go‘sht, maxsus firma souslari va pechdan endi chiqqan issiq lavash hamda burgerlar 30 daqiqada eshigingizda.",
        hero_btn_order: "Buyurtma berish",
        hero_btn_promo: "Aksiyalarni ko‘rish",
        min: "daq",
        stat_delivery: "O‘rtacha yetkazish",
        stat_halal: "Halol va yangi go‘sht",
        stat_reviews: "15 000+ mamnun mijoz",
        hit_sales: "XIT SAVDO",
        hero_card_title: "Andijon Shohona Double Burger",
        video_ctrl: "Fon videosi",
        promo_sub: "MAXSUS TAKLIFLAR",
        promo_title: "Qaynoq Chegirmalar va 1+1 Aksiyalar",
        promo_desc: "Vaqt chegaralangan! Aksiya tugashidan oldin buyurtma bering va tejang.",
        countdown_label: "Haftalik Super Aksiya tugashiga qoldi:",
        days: "kun",
        hours: "soat",
        mins: "daq",
        secs: "son",
        menu_sub: "BIZNING MENYU",
        menu_title: "Mazali Taomlar Katalogi",
        menu_desc: "O‘zingizga yoqqan kategoriyani tanlang va bir zumda savatchaga qo‘shing",
        sort_by: "Saralash:",
        sort_default: "Ommabop",
        sort_cheap: "Arzonroq",
        sort_expensive: "Qimmatroq",
        sort_discount: "Chegirmali",
        sort_rating: "Yuqori reyting",
        add_cart: "Savatchaga",
        del_sub: "ANDIJON BO‘YLAB YETKAZIB BERISH",
        del_title: "Hududingizni tanlang — narx va vaqtni darhol biling",
        del_desc: "Biz Andijon shahrining barcha mahallalari hamda Andijon viloyatining tuman markazlariga maxsus termo-sumkalarda issiq holda yetkazib beramiz.",
        select_area_type: "Hudud turi:",
        andijon_city: "Andijon shahri",
        andijon_region: "Andijon viloyati tumanlari",
        select_mahalla: "Mahalla / Hududni tanlang:",
        del_price_lbl: "Yetkazish narxi",
        del_time_lbl: "Taxminiy vaqt",
        del_status_lbl: "Xizmat holati",
        del_admin_note: "Eslatma: Uzoq qishloq hududlariga yetkazib berish operator bilan kelishilgan holda amalga oshiriladi.",
        fast_couriers: "15+ Tezkor Kuryerlar",
        thermo_bag: "Termo-sumkada 75°C issiq holda",
        about_sub: "BIZ HAQIMIZDA",
        about_title: "Andijonning Eng Sevimli Fast Food Brendi",
        about_p1: "2018-yilda Andijon shahrida kichik oilaviy tamaddixona sifatida boshlangan faoliyatimiz bugungi kunda minglab hamshaharlarimizning ishonchini qozongan zamonaviy restoranlar tarmog‘iga aylandi.",
        about_p2: "Bizning asosiy maqsadimiz — har bir mijozga 100% halol, yangi so‘yilgan mol va tovuq go‘shtidan tayyorlangan, kimyoviy qo‘shimchalarsiz tabiiy taomlarni tezkor yetkazib berishdir.",
        years_exp: "Yillik Tajriba Andijonda",
        feat_1_t: "Yuqori Sifat Nazorati",
        feat_1_d: "Har kuni yangi mahsulotlar va ochiq oshxona standarti.",
        feat_2_t: "Maxsus Firma Retsepti",
        feat_2_d: "Faqat bizda mavjud bo‘lgan 12 xil mualliflik souslari.",
        feat_3_t: "Mijozlar Mamnuniyati",
        feat_3_d: "Har bir buyurtma sifat kafolati bilan jo‘natiladi.",
        vid_sub: "OCHIQ OSHXONA",
        vid_title: "Taomlarimiz Qanday Tayyorlanadi?",
        vid_desc: "Video ustiga bosing va oshpazlarimizning mahoratini yaqindan tomosha qiling",
        rev_sub: "MIJOZLAR FIKRI",
        rev_title: "Andijonliklar Biz Haqimizda Nima Deydi?",
        leave_review: "Fikr qoldiring",
        leave_review_sub: "Xizmatimiz va taomlarimiz haqida o‘z taassurotlaringiz bilan o‘rtoqlashing",
        your_name: "Ismingiz",
        rating_lbl: "Baholang (1-5 yulduz)",
        your_comment: "Fikringiz",
        submit_review: "Fikrni yuborish",
        footer_desc: "Andijon shahri va viloyati bo‘ylab eng mazali burger, lavash va pitsalarni tezkor yetkazib berish xizmati.",
        footer_nav: "Tezkor Havolalar",
        footer_cats: "Mashhur Kategoriyalar",
        footer_contact: "Aloqa va Manzil",
        footer_address: "Andijon shahri, Bobur shoh ko‘chasi, 45-uy (Mo‘ljal: Eski shahar)",
        footer_hours: "Har kuni: 09:00 dan 02:00 gacha",
        rights: "Barcha huquqlar himoyalangan.",
        cart_title: "Sizning Savatchangiz",
        cart_empty: "Savatchangiz hozircha bo‘sh. Menyudan mazali taom tanlang!",
        subtotal: "Mahsulotlar narxi:",
        total_savings: "Tejalgan summa (Chegirma):",
        delivery_fee: "Yetkazib berish:",
        grand_total: "Jami to‘lov:",
        checkout_btn: "Buyurtmani rasmiylashtirish",
        checkout_title: "Buyurtmani Rasmiylashtirish",
        customer_details: "1. Mijoz va Manzil Ma’lumotlari",
        full_name: "Ism va familiya *",
        phone_num: "Telefon raqami *",
        region_lbl: "Viloyat *",
        city_district: "Shahar yoki tuman *",
        mahalla_lbl: "Mahalla *",
        street_house: "Ko‘cha va uy raqami *",
        delivery_note: "Yetkazib berish izohi",
        payment_method: "2. To‘lov turini tanlang",
        pay_cash: "Naqd pul",
        pay_card: "Karta orqali (Terminal)",
        api_notice: "Diqqat: Click / Payme to‘lov shlyuzi hozirda API integratsiyasi kutilmoqda. Buyurtma 'To‘lov kutilmoqda (Onlayn API)' maqomi bilan ro‘yxatga olinadi.",
        order_summary: "Buyurtma tarkibi",
        confirm_order: "Buyurtmani tasdiqlash",
        order_accepted: "Buyurtmangiz qabul qilindi!",
        order_id: "Buyurtma raqami:",
        ok_btn: "Tushunarli",
        auth_login_title: "Tizimga kirish",
        tab_login: "Kirish",
        tab_register: "Ro‘yxatdan o‘tish",
        password_lbl: "Parol",
        email_opt: "Email (ixtiyoriy)",
        btn_login: "Kirish",
        btn_register: "Ro‘yxatdan o‘tish",
        btn_logout: "Chiqish (Logout)",
        demo_auth_note: "Frontend Demo rejimi faol. Haqiqiy autentifikatsiya uchun backend server ulanadi.",
        currency: "so‘m",
        free: "Bepul"
    },
    ru: {
        ticker_text: "Бесплатная доставка по городу Андижан при заказе от 100 000 сум!",
        nav_home: "Главная",
        nav_menu: "Меню",
        nav_promos: "Акции",
        nav_delivery: "Доставка",
        nav_about: "О нас",
        nav_videos: "Процесс",
        nav_contact: "Контакты",
        nav_login: "Войти",
        hero_badge: "🔥 №1 ПРЕМИУМ ФАСТ-ФУД В АНДИЖАНЕ",
        hero_title: "Настоящий Вкус и Горячая Доставка!",
        hero_desc: "Свежее мясо, фирменные соусы и горячие лаваши с бургерами прямо из печи у вашей двери за 30 минут.",
        hero_btn_order: "Заказать сейчас",
        hero_btn_promo: "Смотреть акции",
        min: "мин",
        stat_delivery: "Средняя доставка",
        stat_halal: "100% Халяль мясо",
        stat_reviews: "15 000+ довольных клиентов",
        hit_sales: "ХИТ ПРОДАЖ",
        hero_card_title: "Андижан Королевский Двойной Бургер",
        video_ctrl: "Фоновое видео",
        promo_sub: "СПЕЦПРЕДЛОЖЕНИЯ",
        promo_title: "Горячие Скидки и Акции 1+1",
        promo_desc: "Время ограничено! Успейте заказать до окончания акции.",
        countdown_label: "До конца недельной супер-акции:",
        days: "дн",
        hours: "час",
        mins: "мин",
        secs: "сек",
        menu_sub: "НАШЕ МЕНЮ",
        menu_title: "Каталог Вкусных Блюд",
        menu_desc: "Выберите категорию и добавьте любимые блюда в корзину",
        sort_by: "Сортировка:",
        sort_default: "Популярные",
        sort_cheap: "Дешевле",
        sort_expensive: "Дороже",
        sort_discount: "Со скидкой",
        sort_rating: "Высокий рейтинг",
        add_cart: "В корзину",
        del_sub: "ДОСТАВКА ПО АНДИЖАНУ",
        del_title: "Выберите район — узнайте цену и время доставки",
        del_desc: "Мы доставляем горячие блюда в термосумках по всем махаллям города Андижан и районным центрам области.",
        select_area_type: "Тип зоны:",
        andijon_city: "Город Андижан",
        andijon_region: "Районы Андижанской области",
        select_mahalla: "Выберите махаллю / район:",
        del_price_lbl: "Стоимость доставки",
        del_time_lbl: "Примерное время",
        del_status_lbl: "Статус службы",
        del_admin_note: "Примечание: Доставка в отдаленные села согласовывается с оператором.",
        fast_couriers: "15+ Быстрых курьеров",
        thermo_bag: "В термосумке при 75°C",
        about_sub: "О НАС",
        about_title: "Любимый Бренд Фаст-Фуда в Андижане",
        about_p1: "Начав в 2018 году как небольшое семейное кафе в Андижане, сегодня мы выросли в современную сеть ресторанов.",
        about_p2: "Наша главная цель — готовить из 100% свежего халяльного мяса без химических добавок и доставлять максимально быстро.",
        years_exp: "Лет опыта в Андижане",
        feat_1_t: "Строгий контроль качества",
        feat_1_d: "Ежедневные свежие поставки и открытая кухня.",
        feat_2_t: "Фирменные рецепты",
        feat_2_d: "12 уникальных авторских соусов собственного приготовления.",
        feat_3_t: "Довольные гости",
        feat_3_d: "Каждый заказ отправляется с гарантией свежести.",
        vid_sub: "ОТКРЫТАЯ КУХНЯ",
        vid_title: "Как Готовятся Наши Блюда?",
        vid_desc: "Нажмите на видео, чтобы увидеть мастерство наших поваров",
        rev_sub: "ОТЗЫВЫ КЛИЕНТОВ",
        rev_title: "Что Говорят Жители Андижана?",
        leave_review: "Оставить отзыв",
        leave_review_sub: "Поделитесь впечатлениями о нашей кухне и сервисе",
        your_name: "Ваше имя",
        rating_lbl: "Оценка (1-5 звезд)",
        your_comment: "Ваш отзыв",
        submit_review: "Отправить отзыв",
        footer_desc: "Быстрая доставка самых вкусных бургеров, лавашей и пиццы по городу Андижан и области.",
        footer_nav: "Быстрые ссылки",
        footer_cats: "Популярные категории",
        footer_contact: "Контакты и Адрес",
        footer_address: "г. Андижан, проспект Бабура, дом 45",
        footer_hours: "Ежедневно: с 09:00 до 02:00",
        rights: "Все права защищены.",
        cart_title: "Ваша Корзина",
        cart_empty: "Ваша корзина пуста. Выберите вкусные блюда из меню!",
        subtotal: "Сумма товаров:",
        total_savings: "Ваша экономия (Скидка):",
        delivery_fee: "Доставка:",
        grand_total: "Итого к оплате:",
        checkout_btn: "Оформить заказ",
        checkout_title: "Оформление Заказа",
        customer_details: "1. Данные клиента и адрес",
        full_name: "Имя и фамилия *",
        phone_num: "Номер телефона *",
        region_lbl: "Область *",
        city_district: "Город или район *",
        mahalla_lbl: "Махалля *",
        street_house: "Улица и номер дома *",
        delivery_note: "Комментарий к доставке",
        payment_method: "2. Выберите способ оплаты",
        pay_cash: "Наличными",
        pay_card: "Картой (Терминал)",
        api_notice: "Внимание: Платежный шлюз Click / Payme ожидает интеграции API. Заказ будет создан со статусом 'Ожидает онлайн-оплаты (API)'.",
        order_summary: "Состав заказа",
        confirm_order: "Подтвердить заказ",
        order_accepted: "Ваш заказ принят!",
        order_id: "Номер заказа:",
        ok_btn: "Понятно",
        auth_login_title: "Вход в аккаунт",
        tab_login: "Вход",
        tab_register: "Регистрация",
        password_lbl: "Пароль",
        email_opt: "Email (необязательно)",
        btn_login: "Войти",
        btn_register: "Зарегистрироваться",
        btn_logout: "Выйти",
        demo_auth_note: "Активен Frontend Demo режим. Для реальной авторизации требуется backend.",
        currency: "сум",
        free: "Бесплатно"
    },
    en: {
        ticker_text: "FREE delivery across Andijan city for orders over 100,000 UZS!",
        nav_home: "Home",
        nav_menu: "Menu",
        nav_promos: "Promotions",
        nav_delivery: "Delivery",
        nav_about: "About Us",
        nav_videos: "Kitchen",
        nav_contact: "Contact",
        nav_login: "Sign In",
        hero_badge: "🔥 #1 PREMIUM FAST FOOD IN ANDIJAN",
        hero_title: "Authentic Taste & Hot Fast Delivery!",
        hero_desc: "Fresh halal meat, signature house sauces, and oven-hot lavash & burgers delivered to your door in 30 minutes.",
        hero_btn_order: "Order Now",
        hero_btn_promo: "View Promos",
        min: "min",
        stat_delivery: "Avg. delivery",
        stat_halal: "100% Fresh Halal",
        stat_reviews: "15,000+ happy clients",
        hit_sales: "BESTSELLER",
        hero_card_title: "Andijan Royal Double Burger",
        video_ctrl: "Bg Video",
        promo_sub: "SPECIAL OFFERS",
        promo_title: "Hot Discounts & 1+1 Deals",
        promo_desc: "Limited time only! Order before the timer runs out and save big.",
        countdown_label: "Weekly Super Promo ends in:",
        days: "days",
        hours: "hrs",
        mins: "min",
        secs: "sec",
        menu_sub: "OUR MENU",
        menu_title: "Delicious Food Catalog",
        menu_desc: "Pick your favorite category and add meals to your cart instantly",
        sort_by: "Sort by:",
        sort_default: "Popular",
        sort_cheap: "Price: Low to High",
        sort_expensive: "Price: High to Low",
        sort_discount: "Discounted",
        sort_rating: "Top Rated",
        add_cart: "Add to Cart",
        del_sub: "ANDIJAN DELIVERY ZONES",
        del_title: "Select Your Area — Check Fee & Delivery Time",
        del_desc: "We deliver hot meals in thermal bags across all neighborhoods of Andijan city and district centers.",
        select_area_type: "Area Type:",
        andijon_city: "Andijan City",
        andijon_region: "Andijan Region Districts",
        select_mahalla: "Select Neighborhood / District:",
        del_price_lbl: "Delivery Fee",
        del_time_lbl: "Est. Time",
        del_status_lbl: "Service Status",
        del_admin_note: "Note: Delivery to remote rural areas is arranged via phone confirmation with our operator.",
        fast_couriers: "15+ Fast Couriers",
        thermo_bag: "Kept at 75°C in thermal bags",
        about_sub: "ABOUT US",
        about_title: "Andijan's Favorite Fast Food Brand",
        about_p1: "Started in 2018 as a small family eatery in Andijan, we have grown into a modern restaurant chain trusted by thousands.",
        about_p2: "Our mission is to serve 100% halal, freshly prepared beef and chicken dishes with zero artificial additives.",
        years_exp: "Years in Andijan",
        feat_1_t: "Strict Quality Control",
        feat_1_d: "Daily fresh ingredients and open-kitchen hygiene.",
        feat_2_t: "Signature Recipes",
        feat_2_d: "12 unique house sauces crafted by our chefs.",
        feat_3_t: "Customer Satisfaction",
        feat_3_d: "Every order is backed by our freshness guarantee.",
        vid_sub: "OPEN KITCHEN",
        vid_title: "How We Craft Your Meals",
        vid_desc: "Click any video to watch our chefs in action",
        rev_sub: "TESTIMONIALS",
        rev_title: "What Andijan Locals Say About Us",
        leave_review: "Leave a Review",
        leave_review_sub: "Share your experience with our food and delivery",
        your_name: "Your Name",
        rating_lbl: "Rating (1-5 stars)",
        your_comment: "Your Review",
        submit_review: "Submit Review",
        footer_desc: "Fast delivery of the tastiest burgers, lavash, and pizzas across Andijan city and region.",
        footer_nav: "Quick Links",
        footer_cats: "Popular Categories",
        footer_contact: "Contact & Address",
        footer_address: "45 Bobur Avenue, Andijan City",
        footer_hours: "Daily: 09:00 AM to 02:00 AM",
        rights: "All rights reserved.",
        cart_title: "Your Shopping Cart",
        cart_empty: "Your cart is currently empty. Add delicious meals from the menu!",
        subtotal: "Subtotal:",
        total_savings: "Total Savings:",
        delivery_fee: "Delivery Fee:",
        grand_total: "Grand Total:",
        checkout_btn: "Proceed to Checkout",
        checkout_title: "Complete Your Order",
        customer_details: "1. Customer & Address Details",
        full_name: "Full Name *",
        phone_num: "Phone Number *",
        region_lbl: "Region *",
        city_district: "City or District *",
        mahalla_lbl: "Neighborhood (Mahalla) *",
        street_house: "Street & House Number *",
        delivery_note: "Delivery Note",
        payment_method: "2. Select Payment Method",
        pay_cash: "Cash on Delivery",
        pay_card: "Card (POS Terminal)",
        api_notice: "Notice: Click / Payme gateway is awaiting API integration. Your order will be placed with 'Pending Online Payment (API)' status.",
        order_summary: "Order Summary",
        confirm_order: "Confirm Order",
        order_accepted: "Your Order is Confirmed!",
        order_id: "Order Number:",
        ok_btn: "Got It",
        auth_login_title: "Account Sign In",
        tab_login: "Sign In",
        tab_register: "Register",
        password_lbl: "Password",
        email_opt: "Email (optional)",
        btn_login: "Sign In",
        btn_register: "Create Account",
        btn_logout: "Log Out",
        demo_auth_note: "Frontend Demo Mode active. Real user authentication requires backend integration.",
        currency: "UZS",
        free: "Free"
    }
};

// 2. CATEGORIES (10 REQUIRED CATEGORIES)
const categoriesData = [
    { id: "all", icon: "🍽️", name: { uz: "Barchasi", ru: "Все блюда", en: "All Menu" } },
    { id: "lavash", icon: " 🍠", name: { uz: "Lavashlar", ru: "Лаваши", en: "Lavash Wraps" } },
    { id: "hotdog", icon: "🍤", name: { uz: "Hot-doglar", ru: "Хот-доги", en: "Hot Dogs" } },
    { id: "pizza", icon: "🍕", name: { uz: "Pitsalar", ru: "Пиццы", en: "Pizzas" } },
    { id: "burger", icon: "🍔", name: { uz: "Burgerlar", ru: "Бургеры", en: "Burgers" } },
    { id: "sets", icon: "🍱", name: { uz: "Setlar", ru: "Комбо Сеты", en: "Combo Sets" } },
    { id: "cold_drinks", icon: "🍹", name: { uz: "Salqin ichimliklar", ru: "Прохладительные", en: "Cold Drinks" } },
    { id: "fizzy_drinks", icon: "🍺", name: { uz: "Gazli ichimliklar", ru: "Газированные", en: "Fizzy Drinks" } },
    { id: "fries", icon: "🍟", name: { uz: "Fri kartoshka", ru: "Картофель фри", en: "French Fries" } },
    { id: "sauces", icon: "🍲", name: { uz: "Souslar", ru: "Соусы", en: "Sauces" } },
    { id: "desserts", icon: "🍰", name: { uz: "Desertlar", ru: "Десерты", en: "Desserts" } }
];

// 3. PRODUCTS DATABASE (Easily customizable image URLs & prices)
const productsData = [
    // --- 1. LAVASHLAR (5 items) ---
    {
        id: 101, category: "lavash",
        name: { uz: "Tandir Mol Go‘shtli Lavash", ru: "Тандыр Лаваш с Говядиной", en: "Tandoor Beef Lavash" },
        ingredients: { uz: "Tandir lavash xamiri, mol go‘shti, pomidor, bodring, chipslar, maxsus sous", ru: "Лаваш из тандыра, говядина, помидоры, огурцы, чипсы, фирменный соус", en: "Tandoor flatbread, grilled beef, tomatoes, cucumbers, crispy chips, signature sauce" },
        oldPrice: 38000, price: 32000, rating: 4.9,
        image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 102, category: "lavash",
        name: { uz: "Pishloqli Tovuq Lavash", ru: "Сырный Куриный Лаваш", en: "Cheesy Chicken Lavash" },
        ingredients: { uz: "Tovuq filesi, eritilgan Cheddar pishlog‘i, yangi sabzavotlar, sarimsoqli sous", ru: "Куриное филе, расплавленный сыр Чеддер, свежие овощи, чесночный соус", en: "Chicken fillet, melted Cheddar cheese, fresh veggies, garlic sauce" },
        oldPrice: 35000, price: 29000, rating: 4.8,
        image: "https://images.unsplash.com/photo-1644704170910-a0cdf183649b?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 103, category: "lavash",
        name: { uz: "Andijon Mini Lavash", ru: "Андижан Мини Лаваш", en: "Andijan Mini Lavash" },
        ingredients: { uz: "Mol go‘shti, pomidor, tuzlangan bodring, qizil va oq sous", ru: "Говядина, помидоры, соленые огурцы, красный и белый соус", en: "Beef, tomatoes, pickles, red & white house sauce" },
        oldPrice: null, price: 24000, rating: 4.7,
        image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 104, category: "lavash",
        name: { uz: "Achchiq Jalapeno Lavash", ru: "Острый Халапеньо Лаваш", en: "Spicy Jalapeno Lavash" },
        ingredients: { uz: "Mol go‘shti, achchiq jalapeno qalampiri, pishloq, chili sous", ru: "Говядина, острый перец халапеньо, сыр, соус чили", en: "Beef, spicy jalapeno peppers, cheese, chili sauce" },
        oldPrice: 40000, price: 34000, rating: 4.9,
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 105, category: "lavash",
        name: { uz: "Fitter Dietik Lavash", ru: "Фиттер Диетический Лаваш", en: "Fitter Light Lavash" },
        ingredients: { uz: "Grilda pishgan tovuq ko‘kragi, aysberg salati, pomidor, yogurt sousi", ru: "Куриная грудка гриль, салат айсберг, помидоры, йогуртовый соус", en: "Grilled chicken breast, iceberg lettuce, tomatoes, yogurt dressing" },
        oldPrice: null, price: 28000, rating: 4.8,
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=600&q=80"
    },

    // --- 2. HOT-DOGLAR (4 items) ---
    {
        id: 201, category: "hotdog",
        name: { uz: "Qirollik Double Hot-Dog", ru: "Королевский Двойной Хот-Дог", en: "Royal Double Hot Dog" },
        ingredients: { uz: "2 ta dudlangan sosiska, yumshoq bulochka, pishloq, xantal va ketchup", ru: "2 копченые сосиски, мягкая булочка, сыр, горчица и кетчуп", en: "2 smoked sausages, soft bun, melted cheese, mustard & ketchup" },
        oldPrice: 25000, price: 20000, rating: 4.8,
        image: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 202, category: "hotdog",
        name: { uz: "Kanada Pishloqli Hot-Dog", ru: "Канадский Сырный Хот-Дог", en: "Canadian Cheese Hot Dog" },
        ingredients: { uz: "Maxsus sosiska, qovurilgan piyoz, Cheddar pishloq sousi, tuzlangan bodring", ru: "Фирменная сосиска, жареный лук, сырный соус Чеддер, маринованные огурцы", en: "Signature sausage, crispy onions, Cheddar cheese sauce, pickles" },
        oldPrice: null, price: 18000, rating: 4.7,
        image: "https://images.unsplash.com/photo-1541214113241-21578d2d9b62?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 203, category: "hotdog",
        name: { uz: "Klassik Andijon Hot-Dog", ru: "Классический Андижан Хот-Дог", en: "Classic Andijan Hot Dog" },
        ingredients: { uz: "Tovuq sosiskasi, yangi karam salati, pomidor, mayonez va ketchup", ru: "Куриная сосиска, свежий салат, помидоры, майонез и кетчуп", en: "Chicken sausage, fresh slaw, tomatoes, mayo & ketchup" },
        oldPrice: null, price: 14000, rating: 4.6,
        image: "https://images.unsplash.com/photo-1612392062631-94dd858cba88?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 204, category: "hotdog",
        name: { uz: "Chili Meksika Hot-Dog", ru: "Чили Мексиканский Хот-Дог", en: "Chili Mexican Hot Dog" },
        ingredients: { uz: "Mol go‘shtli sosiska, achchiq qiyma, jalapeno, salsa sousi", ru: "Говяжья сосиска, острый фарш, халапеньо, соус сальса", en: "Beef sausage, spicy chili beef, jalapeno, salsa sauce" },
        oldPrice: 26000, price: 22000, rating: 4.9,
        image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=600&q=80"
    },

    // --- 3. PITSALAR (5 items) ---
    {
        id: 301, category: "pizza",
        name: { uz: "Pepperoni Pitsa (33 sm)", ru: "Пицца Пепперони (33 см)", en: "Pepperoni Pizza (33 cm)" },
        ingredients: { uz: "Halol dudlangan kolbasa, Mozzarella pishlog‘i, italyan tomat sousi", ru: "Халяль пепперони, сыр Моцарелла, итальянский томатный соус", en: "Halal pepperoni, Mozzarella cheese, Italian tomato sauce" },
        oldPrice: 85000, price: 68000, rating: 5.0,
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 302, category: "pizza",
        name: { uz: "Andijon Assorti Pitsa (33 sm)", ru: "Пицца Андижан Ассорти (33 см)", en: "Andijan Assorted Pizza (33 cm)" },
        ingredients: { uz: "Mol go‘shti, kurka go‘shti, qo‘ziqorin, zaytun, bulg‘or qalampiri, Mozzarella", ru: "Говядина, индейка, грибы, маслины, болгарский перец, Моцарелла", en: "Beef, smoked turkey, mushrooms, olives, bell peppers, Mozzarella" },
        oldPrice: 95000, price: 79000, rating: 4.9,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 303, category: "pizza",
        name: { uz: "4 Pishloqli Pitsa (30 sm)", ru: "Пицца 4 Сыра (30 см)", en: "Four Cheese Pizza (30 cm)" },
        ingredients: { uz: "Mozzarella, Cheddar, Parmesan, Dorblu pishloqlari va qaymoqli sous", ru: "Моцарелла, Чеддер, Пармезан, Дорблю и сливочный соус", en: "Mozzarella, Cheddar, Parmesan, Blue cheese & cream sauce" },
        oldPrice: null, price: 72000, rating: 4.8,
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 304, category: "pizza",
        name: { uz: "Tovuq va Qo‘ziqorinli Pitsa", ru: "Пицца Курица с Грибами", en: "Chicken & Mushroom Pizza" },
        ingredients: { uz: "Yumshoq tovuq filesi, shampinyon qo‘ziqorinlari, Mozzarella, Alfredo sousi", ru: "Нежное куриное филе, шампиньоны, Моцарелла, соус Альфредо", en: "Tender chicken fillet, champignon mushrooms, Mozzarella, Alfredo sauce" },
        oldPrice: 78000, price: 65000, rating: 4.8,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 305, category: "pizza",
        name: { uz: "Margarita Klassik (30 sm)", ru: "Маргарита Классик (30 см)", en: "Classic Margherita (30 cm)" },
        ingredients: { uz: "Yangi pomidorlar, ko‘p Mozzarella pishlog‘i, rayhon va zaytun moyi", ru: "Свежие томаты, много сыра Моцарелла, базилик и оливковое масло", en: "Fresh tomatoes, extra Mozzarella, fresh basil & olive oil" },
        oldPrice: null, price: 58000, rating: 4.7,
        image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&w=600&q=80"
    },

    // --- 4. BURGERLAR (5 items) ---
    {
        id: 401, category: "burger",
        name: { uz: "Andijon Shohona Double Burger", ru: "Андижан Королевский Двойной Бургер", en: "Andijan Royal Double Burger" },
        ingredients: { uz: "2 ta 100% mol go‘shtli kotlet, 2 qavat Cheddar, karamellangan piyoz, firma sousi", ru: "2 котлеты из 100% говядины, 2 слоя Чеддера, карамелизированный лук", en: "2x 100% beef patties, double Cheddar, caramelized onions, house sauce" },
        oldPrice: 48000, price: 36000, rating: 5.0,
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 402, category: "burger",
        name: { uz: "Klassik Chizburger", ru: "Классический Чизбургер", en: "Classic Cheeseburger" },
        ingredients: { uz: "Shirali mol go‘shti kotleti, Cheddar pishlog‘i, tuzlangan bodring, pomidor", ru: "Сочная говяжья котлета, сыр Чеддер, маринованные огурцы, помидор", en: "Juicy beef patty, Cheddar cheese, pickles, fresh tomato" },
        oldPrice: 32000, price: 27000, rating: 4.8,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 403, category: "burger",
        name: { uz: "Crispy Chicken Burger", ru: "Криспи Чикен Бургер", en: "Crispy Chicken Burger" },
        ingredients: { uz: "Qarsildoq panirovkadagi tovuq filesi, aysberg, pishloq va mayonez sousi", ru: "Хрустящее куриное филе, салат айсберг, сыр и сливочный соус", en: "Crispy breaded chicken fillet, iceberg lettuce, cheese & creamy sauce" },
        oldPrice: null, price: 28000, rating: 4.8,
        image: "https://images.unsplash.com/photo-1615297928064-24977384d0da?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 404, category: "burger",
        name: { uz: "BBQ Bekon Burger (Halol)", ru: "BBQ Бекон Бургер (Халяль)", en: "BBQ Beef Bacon Burger" },
        ingredients: { uz: "Mol go‘shti kotleti, dudlangan mol go‘shti bo‘laklari, BBQ sous, qovurilgan piyoz", ru: "Говяжья котлета, копченая говядина, соус BBQ, хрустящий лук", en: "Beef patty, smoked beef strips, smoky BBQ sauce, crispy onion rings" },
        oldPrice: 44000, price: 37000, rating: 4.9,
        image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 405, category: "burger",
        name: { uz: "Gamburger Original", ru: "Гамбургер Оригинал", en: "Original Hamburger" },
        ingredients: { uz: "Mol go‘shti kotleti, yangi salat bargi, pomidor, maxsus burger sousi", ru: "Говяжья котлета, свежий салат, помидор, фирменный соус", en: "Beef patty, fresh lettuce, tomato, signature burger sauce" },
        oldPrice: null, price: 24000, rating: 4.7,
        image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=600&q=80"
    },

    // --- 5. SETLAR (4 items) ---
    {
        id: 501, category: "sets",
        name: { uz: "1+1 Lavash Super Set", ru: "1+1 Лаваш Супер Сет", en: "1+1 Lavash Super Combo" },
        ingredients: { uz: "2 ta Tandir Mol Go‘shtli Lavash + 1 ta Katta Fri + 2 ta Cola (0.5L)", ru: "2 Тандыр Лаваша с говядиной + 1 Большой Фри + 2 Колы (0.5л)", en: "2x Tandoor Beef Lavash + 1 Large Fries + 2x Cola (0.5L)" },
        oldPrice: 92000, price: 69000, rating: 5.0,
        image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 502, category: "sets",
        name: { uz: "Oilaviy Pitsa & Burger Box", ru: "Семейный Пицца & Бургер Бокс", en: "Family Pizza & Burger Box" },
        ingredients: { uz: "1 ta Assorti Pitsa (33 sm) + 2 ta Chizburger + 2 ta Fri + 1.5L Ichimlik", ru: "1 Пицца Ассорти (33 см) + 2 Чизбургера + 2 Фри + Напиток 1.5л", en: "1 Assorted Pizza (33cm) + 2 Cheeseburgers + 2 Fries + 1.5L Drink" },
        oldPrice: 175000, price: 139000, rating: 4.9,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 503, category: "sets",
        name: { uz: "Talaba Combo Set", ru: "Студенческий Комбо Сет", en: "Student Value Combo" },
        ingredients: { uz: "1 ta Klassik Hot-Dog + O‘rta Fri + 1 ta Sous + 0.5L Gazli ichimlik", ru: "1 Классический Хот-Дог + Средний Фри + 1 Соус + Напиток 0.5л", en: "1 Classic Hot Dog + Medium Fries + 1 Sauce + 0.5L Fizzy Drink" },
        oldPrice: 36000, price: 28000, rating: 4.8,
        image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 504, category: "sets",
        name: { uz: "Do‘stlar Davrasi Set (4 kishilik)", ru: "Сет для Компании (на 4 персоны)", en: "Friends Party Set (For 4)" },
        ingredients: { uz: "4 ta Burger + 4 ta Fri kartoshka + 4 ta Sous + 1.5L Cola", ru: "4 Бургера + 4 Картошки фри + 4 Соуса + Кола 1.5л", en: "4 Burgers + 4 French Fries + 4 Sauces + 1.5L Cola" },
        oldPrice: 165000, price: 129000, rating: 4.9,
        image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=600&q=80"
    },

    // --- 6. SALQIN ICHIMLIKLAR (4 items) ---
    {
        id: 601, category: "cold_drinks",
        name: { uz: "Muzdek Moxito Klassik (0.4L)", ru: "Ледяной Мохито Классик (0.4л)", en: "Iced Classic Mojito (0.4L)" },
        ingredients: { uz: "Yangi yalpiz barglari, laym, muz kubiklari va tetiklantiruvchi sirop", ru: "Свежая мята, лайм, кубики льда и освежающий сироп", en: "Fresh mint leaves, lime, ice cubes & refreshing syrup" },
        oldPrice: 18000, price: 15000, rating: 4.9,
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 602, category: "cold_drinks",
        name: { uz: "Qulupnayli Limonaad (0.4L)", ru: "Клубничный Лимонад (0.4л)", en: "Strawberry Lemonade (0.4L)" },
        ingredients: { uz: "Tabiiy qulupnay pyuresi, limon sharbati, muz va gazlangan suv", ru: "Натуральное клубничное пюре, лимонный сок, лед и содовая", en: "Natural strawberry puree, lemon juice, ice & sparkling water" },
        oldPrice: null, price: 17000, rating: 4.8,
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 603, category: "cold_drinks",
        name: { uz: "O‘rik va Shaftolili Ice Tea", ru: "Айс Ти Персик и Абрикос", en: "Peach & Apricot Ice Tea" },
        ingredients: { uz: "Sovutilgan ko‘k choy, tabiiy shaftoli ekstrakti, limon va muz", ru: "Охлажденный зеленый чай, экстракт персика, лимон и лед", en: "Chilled green tea, natural peach extract, lemon & ice" },
        oldPrice: null, price: 14000, rating: 4.7,
        image: "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 604, category: "cold_drinks",
        name: { uz: "Tabiiy Apelsin Sharbati (0.3L)", ru: "Свежевыжатый Апельсиновый Сок", en: "Fresh Orange Juice (0.3L)" },
        ingredients: { uz: "100% yangi siqilgan shirin apelsinlar", ru: "100% свежевыжатые сладкие апельсины", en: "100% freshly squeezed sweet oranges" },
        oldPrice: 22000, price: 19000, rating: 4.9,
        image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80"
    },

    // --- 7. GAZLI ICHIMLIKLAR (4 items) ---
    {
        id: 701, category: "fizzy_drinks",
        name: { uz: "Coca-Cola (0.5L)", ru: "Coca-Cola (0.5л)", en: "Coca-Cola (0.5L)" },
        ingredients: { uz: "Muzdek gazlangan ichimlik 0.5 litr", ru: "Охлажденный газированный напиток 0.5 л", en: "Chilled carbonated soft drink 0.5L" },
        oldPrice: null, price: 9000, rating: 4.9,
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 702, category: "fizzy_drinks",
        name: { uz: "Fanta Apelsin (0.5L)", ru: "Fanta Апельсин (0.5л)", en: "Fanta Orange (0.5L)" },
        ingredients: { uz: "Apelsin ta’mli gazlangan ichimlik 0.5 litr", ru: "Апельсиновый газированный напиток 0.5 л", en: "Orange flavored carbonated drink 0.5L" },
        oldPrice: null, price: 9000, rating: 4.8,
        image: "https://images.unsplash.com/photo-1624517452488-04869289c4ca?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 703, category: "fizzy_drinks",
        name: { uz: "Sprite (0.5L)", ru: "Sprite (0.5л)", en: "Sprite (0.5L)" },
        ingredients: { uz: "Limon va laym ta’mli salqin gazli ichimlik", ru: "Освежающий напиток со вкусом лимона и лайма", en: "Crisp lemon-lime carbonated drink 0.5L" },
        oldPrice: null, price: 9000, rating: 4.8,
        image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 704, category: "fizzy_drinks",
        name: { uz: "Coca-Cola Oilaviy (1.5L)", ru: "Coca-Cola Семейная (1.5л)", en: "Coca-Cola Family (1.5L)" },
        ingredients: { uz: "Katta davralar uchun 1.5 litrli muzdek Coca-Cola", ru: "Охлажденная Coca-Cola 1.5 л для большой компании", en: "Chilled 1.5L bottle for family & friends" },
        oldPrice: 18000, price: 15000, rating: 4.9,
        image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&w=600&q=80"
    },

    // --- 8. FRI KARTOSHKA (4 items) ---
    {
        id: 801, category: "fries",
        name: { uz: "Katta Qarsildoq Fri", ru: "Большой Хрустящий Фри", en: "Large Crispy French Fries" },
        ingredients: { uz: "Saralangan kartoshka bo‘laklari, dengiz tuzi, oltinrang qovurilgan", ru: "Отборный картофель, морская соль, золотистая корочка", en: "Premium golden potato strips, lightly salted" },
        oldPrice: 18000, price: 15000, rating: 4.9,
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 802, category: "fries",
        name: { uz: "Pishloqli Fri (Cheese Fries)", ru: "Картофель Фри с Сыром", en: "Loaded Cheese Fries" },
        ingredients: { uz: "Issiq fri kartoshka ustida eritilgan issiq Cheddar pishloq sousi", ru: "Горячий картофель фри под расплавленным сырным соусом Чеддер", en: "Hot French fries topped with warm melted Cheddar sauce" },
        oldPrice: 23000, price: 19000, rating: 4.9,
        image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 803, category: "fries",
        name: { uz: "Qishloqcha Kartoshka (Wedges)", ru: "Картофель по-деревенски", en: "Seasoned Potato Wedges" },
        ingredients: { uz: "Ziravorlar va sarimsoq bilan pechda pishirilgan yirik kartoshka bo‘laklari", ru: "Крупные дольки картофеля со специями и чесноком", en: "Thick-cut potato wedges seasoned with herbs & garlic" },
        oldPrice: null, price: 17000, rating: 4.8,
        image: "https://images.unsplash.com/photo-1623238913973-21e45cced554?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 804, category: "fries",
        name: { uz: "Tovuq Naggetslari (9 dona)", ru: "Куриные Наггетсы (9 шт)", en: "Chicken Nuggets (9 pcs)" },
        ingredients: { uz: "100% tovuq ko‘kragidan tayyorlangan qarsildoq naggetslar", ru: "Хрустящие наггетсы из 100% куриного филе", en: "Crispy golden nuggets made from 100% chicken breast" },
        oldPrice: 26000, price: 22000, rating: 4.8,
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80"
    },

    // --- 9. SOUSLAR (4 items) ---
    {
        id: 901, category: "sauces",
        name: { uz: "Pishloqli Firma Sousi", ru: "Фирменный Сырный Соус", en: "Signature Cheese Sauce" },
        ingredients: { uz: "Cheddar pishlog‘i asosidagi qaymoqli issiq sous (50 gr)", ru: "Сливочный соус на основе сыра Чеддер (50 гр)", en: "Creamy Cheddar cheese dip (50g)" },
        oldPrice: null, price: 4000, rating: 4.9,
        image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 902, category: "sauces",
        name: { uz: "Sarimsoqli Oq Sous", ru: "Чесночный Белый Соус", en: "Creamy Garlic Sauce" },
        ingredients: { uz: "Yangi sarimsoq, ko‘katlar va mayin qaymoq asosidagi sous", ru: "Свежий чеснок, зелень и нежная сливочная основа", en: "Fresh garlic, herbs & smooth cream base" },
        oldPrice: null, price: 4000, rating: 4.8,
        image: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 903, category: "sauces",
        name: { uz: "Tomatli Ketchup", ru: "Томатный Кетчуп", en: "Classic Tomato Ketchup" },
        ingredients: { uz: "Pishgan shirin pomidorlardan tayyorlangan tabiiy ketchup", ru: "Натуральный кетчуп из спелых сладких томатов", en: "Rich ketchup made from vine-ripened tomatoes" },
        oldPrice: null, price: 3500, rating: 4.7,
        image: "https://images.unsplash.com/photo-1607532941433-304659e8198a?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 904, category: "sauces",
        name: { uz: "Achchiq Chili Sous", ru: "Острый Соус Чили", en: "Spicy Chili Sauce" },
        ingredients: { uz: "Achchiq qizil qalampir va sharqona ziravorlar uyg‘unligi", ru: "Острый красный перец и восточные специи", en: "Fiery red chili peppers blended with aromatic spices" },
        oldPrice: null, price: 4000, rating: 4.8,
        image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=600&q=80"
    },

    // --- 10. DESERTLAR (4 items) ---
    {
        id: 1001, category: "desserts",
        name: { uz: "Shokoladli Donat (Donut)", ru: "Шоколадный Пончик (Донат)", en: "Chocolate Glazed Donut" },
        ingredients: { uz: "Belgiya shokoladi bilan qoplangan yumshoq ponchik", ru: "Мягкий пончик, покрытый бельгийским шоколадом", en: "Fluffy donut topped with rich Belgian chocolate glaze" },
        oldPrice: 15000, price: 12000, rating: 4.9,
        image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 1002, category: "desserts",
        name: { uz: "Nyu-York Chizkeyk", ru: "Чизкейк Нью-Йорк", en: "New York Cheesecake" },
        ingredients: { uz: "Mayin tvorogli pishloq, qarsildoq pechenye asosi va qulupnay sousi", ru: "Нежный сливочный сыр, песочная основа и клубничный топпинг", en: "Creamy cheese filling on biscuit crust with berry glaze" },
        oldPrice: 25000, price: 21000, rating: 5.0,
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 1003, category: "desserts",
        name: { uz: "Qulupnayli Milkshake", ru: "Клубничный Милкшейк", en: "Strawberry Milkshake" },
        ingredients: { uz: "Plombir muzqaymoq, yangi sut va tabiiy qulupnay siropi", ru: "Пломбир, свежее молоко и натуральный клубничный сироп", en: "Vanilla ice cream blended with fresh milk & strawberries" },
        oldPrice: null, price: 19000, rating: 4.8,
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 1004, category: "desserts",
        name: { uz: "Issiq Shokoladli Brauni", ru: "Теплый Шоколадный Брауни", en: "Warm Chocolate Brownie" },
        ingredients: { uz: "Qora shokoladli kek va yong‘oq bo‘laklari", ru: "Шоколадный десерт с кусочками грецкого ореха", en: "Fudgy dark chocolate brownie with walnut pieces" },
        oldPrice: 22000, price: 18000, rating: 4.9,
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80"
    }
];

// 4. ANDIJON DELIVERY ZONES (Admin configurable prices & times)
const andijonDeliveryZones = {
    city: [
        { id: "bobur", name: "Bobur shoh ko‘chasi / Eski shahar", price: 10000, time: "20-30 daq", active: true },
        { id: "bogishamol", name: "Bog‘ishamol MFY", price: 12000, time: "25-35 daq", active: true },
        { id: "klara", name: "Yangi bozor / Klara Setkin", price: 10000, time: "20-30 daq", active: true },
        { id: "micro2", name: "2-kichik daha (Mikrorayon)", price: 12000, time: "25-35 daq", active: true },
        { id: "micro3", name: "3-kichik daha (Mikrorayon)", price: 12000, time: "25-35 daq", active: true },
        { id: "soy", name: "Soy MFY / Navoiy shoh ko‘chasi", price: 11000, time: "20-30 daq", active: true },
        { id: "jahon", name: "Jahon bozori hududi", price: 15000, time: "30-40 daq", active: true },
        { id: "shimoliy", name: "Shimoliy kichik daha", price: 14000, time: "30-40 daq", active: true }
    ],
    region: [
        { id: "andijon_tum", name: "Andijon tumani (Kuyganyor)", price: 18000, time: "35-45 daq", active: true },
        { id: "asaka", name: "Asaka tumani markazi", price: 25000, time: "45-60 daq", active: true },
        { id: "shahrixon", name: "Shahrixon tumani markazi", price: 30000, time: "50-65 daq", active: true },
        { id: "xojaobod", name: "Xo‘jaobod tumani", price: 25000, time: "45-60 daq", active: true },
        { id: "oltinkol", name: "Oltinko‘l tumani", price: 20000, time: "35-50 daq", active: true },
        { id: "jalaquduq", name: "Jalaquduq tumani", price: 28000, time: "45-60 daq", active: true },
        { id: "qorgontepa", name: "Qo‘rg‘ontepa tumani", price: 35000, time: "60-75 daq", active: true },
        { id: "marhamat", name: "Marhamat tumani", price: 35000, time: "60-75 daq", active: true },
        { id: "paxtaobod", name: "Paxtaobod tumani", price: 30000, time: "50-65 daq", active: true },
        { id: "baliqchi", name: "Baliqchi tumani", price: 35000, time: "60-75 daq", active: true },
        { id: "boston", name: "Bo‘ston tumani", price: 32000, time: "55-70 daq", active: true },
        { id: "buloqboshi", name: "Buloqboshi tumani", price: 25000, time: "45-60 daq", active: true },
        { id: "izboskan", name: "Izboskan tumani", price: 28000, time: "45-60 daq", active: true },
        { id: "ulugnor", name: "Ulug‘nor tumani", price: 45000, time: "70-90 daq", active: true },
        { id: "xonobod", name: "Xonobod shahri", price: 45000, time: "70-90 daq", active: true }
    ]
};

// 5. VIDEO GALLERY DATA
const kitchenVideos = [
    {
        title: { uz: "Shohona Burger Tayyorlanishi", ru: "Приготовление Королевского Бургера", en: "Crafting the Royal Burger" },
        thumb: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-juicy-burger-being-prepared-43615-large.mp4"
    },
    {
        title: { uz: "Tandir Lavash Qovurish Jarayoni", ru: "Обжарка Тандыр Лаваша", en: "Grilling Tandoor Lavash" },
        thumb: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-chef-preparing-food-in-the-kitchen-43619-large.mp4"
    },
    {
        title: { uz: "Issiq Pitsa Pechdan Chiqishi", ru: "Горячая Пицца из Печи", en: "Fresh Pizza Out of the Oven" },
        thumb: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-pizza-being-baked-in-an-oven-43622-large.mp4"
    },
    {
        title: { uz: "Qarsildoq Fri Tayyorlash", ru: "Приготовление Хрустящего Фри", en: "Crispy French Fries Station" },
        thumb: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-french-fries-being-fried-in-oil-43617-large.mp4"
    }
];

// 6. INITIAL REVIEWS
let reviewsData = [
    {
        name: "Jamshidbek Karimov",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
        rating: 5,
        text: "Bog‘ishamolga 25 daqiqada issiq holda yetkazib berishdi. Tandir lavashi Andijonda eng zo‘ri!",
        date: "2026-11-12"
    },
    {
        name: "Nilufar Abdullayeva",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
        rating: 5,
        text: "1+1 Lavash setiga buyurtma berdik, ham arzon ham juda to‘yimli ekan. Souslari juda mazali.",
        date: "2026-11-15"
    },
    {
        name: "Otabek Tursunov",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
        rating: 5,
        text: "Asaka tumaniga ham o‘z vaqtida yetib keldi. Pitsasi issiqligicha turibdi, rahmat jamoaga!",
        date: "2026-11-17"
    }
];

// =========================================================
// APPLICATION STATE (LocalStorage synced)
// =========================================================
let state = {
    lang: localStorage.getItem("aff_lang") || "uz",
    theme: localStorage.getItem("aff_theme") || "light",
    cart: JSON.parse(localStorage.getItem("aff_cart")) || [],
    user: JSON.parse(localStorage.getItem("aff_user")) || null,
    selectedCategory: "all",
    sortBy: "default",
    selectedDeliveryFee: 10000,
    selectedZoneName: "Bobur shoh ko‘chasi / Eski shahar"
};

// Format Currency Helper
function formatSum(amount) {
    const t = translations[state.lang];
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " " + t.currency;
}

// Show Toast Notification
function showToast(message) {
    const container = document.getElementById("toastContainer");
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color:#FFB800;"></i> <span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = "0";
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// =========================================================
// INITIALIZATION
// =========================================================
document.addEventListener("DOMContentLoaded", () => {
    // Hide loader
    setTimeout(() => {
        document.getElementById("loader").classList.add("fade-out");
    }, 600);

    applyTheme(state.theme);
    applyLanguage(state.lang);
    initDeliveryZones();
    renderPromotions();
    renderCategories();
    renderProducts();
    renderVideoGallery();
    renderReviews();
    updateCartUI();
    updateAuthUI();
    startPromoCountdown();
    setupEventListeners();
    setupScrollReveal();
});

// =========================================================
// THEME (DARK / LIGHT MODE)
// =========================================================
function applyTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("aff_theme", theme);
    const icon = document.getElementById("themeIcon");
    icon.className = theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
}

// =========================================================
// MULTI-LANGUAGE ENGINE (UZ / RU / EN)
// =========================================================
function applyLanguage(lang) {
    state.lang = lang;
    localStorage.setItem("aff_lang", lang);
    document.documentElement.lang = lang;

    const flags = { uz: "🇺🇿", ru: "🇷🇺", en: "🇬🇧" };
    document.getElementById("currentLangFlag").textContent = flags[lang];
    document.getElementById("currentLangCode").textContent = lang.toUpperCase();

    const dict = translations[lang];
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (dict[key]) el.textContent = dict[key];
    });

    // Re-render dynamic sections in selected language
    renderCategories();
    renderProducts();
    renderPromotions();
    renderVideoGallery();
    updateCartUI();
    updateAuthUI();
}

// =========================================================
// PROMOTIONS & COUNTDOWN
// =========================================================
function renderPromotions() {
    const promoGrid = document.getElementById("promoGrid");
    const promoItems = productsData.filter(p => p.oldPrice !== null).slice(0, 4);
    const t = translations[state.lang];

    promoGrid.innerHTML = promoItems.map(item => {
        const discountPct = Math.round(((item.oldPrice - item.price) / item.oldPrice) * 100);
        return `
            <div class="promo-card">
                <span class="promo-ribbon">-${discountPct}% AKSIYA</span>
                <img src="${item.image}" alt="${item.name[state.lang]}" loading="lazy">
                <div class="promo-body">
                    <div>
                        <h3>${item.name[state.lang]}</h3>
                        <p>${item.ingredients[state.lang]}</p>
                    </div>
                    <div class="promo-footer">
                        <div class="price-block">
                            <del>${formatSum(item.oldPrice)}</del>
                            <span class="current-price">${formatSum(item.price)}</span>
                        </div>
                        <button class="add-to-cart-btn" onclick="addToCart(${item.id})">
                            <i class="fa-solid fa-cart-plus"></i> ${t.add_cart}
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join("");
}

function startPromoCountdown() {
    // 2 days, 14 hours, 45 mins target
    let totalSeconds = 2 * 86400 + 14 * 3600 + 45 * 60;
    setInterval(() => {
        if (totalSeconds <= 0) totalSeconds = 172800;
        totalSeconds--;
        const d = Math.floor(totalSeconds / 86400);
        const h = Math.floor((totalSeconds % 86400) / 3600);
        const m = Math.floor((totalSeconds % 3600) / 60);
        const s = totalSeconds % 60;

        document.getElementById("cd-days").textContent = String(d).padStart(2, "0");
        document.getElementById("cd-hours").textContent = String(h).padStart(2, "0");
        document.getElementById("cd-mins").textContent = String(m).padStart(2, "0");
        document.getElementById("cd-secs").textContent = String(s).padStart(2, "0");
    }, 1000);
}

// =========================================================
// CATEGORIES & PRODUCTS RENDERING
// =========================================================
function renderCategories() {
    const tabsContainer = document.getElementById("categoryTabs");
    tabsContainer.innerHTML = categoriesData.map(cat => `
        <button class="cat-tab ${state.selectedCategory === cat.id ? "active" : ""}" onclick="selectCategory('${cat.id}')">
            <span>${cat.icon}</span>
            <span>${cat.name[state.lang]}</span>
        </button>
    `).join("");

    const activeCatObj = categoriesData.find(c => c.id === state.selectedCategory);
    if (activeCatObj) {
        document.getElementById("currentCategoryTitle").textContent = `${activeCatObj.icon} ${activeCatObj.name[state.lang]}`;
    }
}

function selectCategory(catId) {
    state.selectedCategory = catId;
    renderCategories();
    renderProducts();
}

function selectCategoryFromFooter(catId) {
    selectCategory(catId);
}

function renderProducts() {
    const grid = document.getElementById("productsGrid");
    const t = translations[state.lang];

    let filtered = state.selectedCategory === "all"
        ? [...productsData]
        : productsData.filter(p => p.category === state.selectedCategory);

    // Sorting
    if (state.sortBy === "price-asc") filtered.sort((a, b) => a.price - b.price);
    if (state.sortBy === "price-desc") filtered.sort((a, b) => b.price - a.price);
    if (state.sortBy === "rating") filtered.sort((a, b) => b.rating - a.rating);
    if (state.sortBy === "discount") filtered = filtered.filter(p => p.oldPrice !== null);

    document.getElementById("productCounter").textContent = `${filtered.length} ta`;

    grid.innerHTML = filtered.map(product => {
        const catObj = categoriesData.find(c => c.id === product.category);
        const discountPct = product.oldPrice
            ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
            : 0;

        return `
            <article class="product-card">
                <div class="product-img-wrap">
                    ${discountPct > 0 ? `<span class="badge-discount">-${discountPct}%</span>` : ""}
                    <span class="badge-rating"><i class="fa-solid fa-star"></i> ${product.rating}</span>
                    <img src="${product.image}" alt="${product.name[state.lang]}" loading="lazy">
                </div>
                <div class="product-body">
                    <div>
                        <span class="product-cat-label">${catObj ? catObj.name[state.lang] : ""}</span>
                        <h3 class="product-title">${product.name[state.lang]}</h3>
                        <p class="product-ingredients">${product.ingredients[state.lang]}</p>
                    </div>
                    <div class="product-bottom">
                        <div class="price-block">
                            ${product.oldPrice ? `<del>${formatSum(product.oldPrice)}</del>` : ""}
                            <span class="current-price">${formatSum(product.price)}</span>
                        </div>
                        <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                            <i class="fa-solid fa-plus"></i> ${t.add_cart}
                        </button>
                    </div>
                </div>
            </article>
        `;
    }).join("");
}

// =========================================================
// SHOPPING CART (LocalStorage + Discounts + Free Delivery > 100k)
// =========================================================
function addToCart(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;

    const existing = state.cart.find(item => item.id === productId);
    if (existing) {
        existing.qty += 1;
    } else {
        state.cart.push({ id: product.id, qty: 1 });
    }

    saveCart();
    updateCartUI();

    const cartBtn = document.getElementById("openCartBtn");
    cartBtn.classList.remove("bump");
    void cartBtn.offsetWidth;
    cartBtn.classList.add("bump");

    showToast(`${product.name[state.lang]} — savatchaga qo‘shildi!`);
}

function changeCartQty(productId, delta) {
    const item = state.cart.find(i => i.id === productId);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
        state.cart = state.cart.filter(i => i.id !== productId);
    }
    saveCart();
    updateCartUI();
}

function removeFromCart(productId) {
    state.cart = state.cart.filter(i => i.id !== productId);
    saveCart();
    updateCartUI();
}

function saveCart() {
    localStorage.setItem("aff_cart", JSON.stringify(state.cart));
}

function calculateCartTotals() {
    let subtotal = 0;
    let totalSavings = 0;
    let totalItems = 0;

    state.cart.forEach(cartItem => {
        const prod = productsData.find(p => p.id === cartItem.id);
        if (prod) {
            subtotal += prod.price * cartItem.qty;
            totalItems += cartItem.qty;
            if (prod.oldPrice) {
                totalSavings += (prod.oldPrice - prod.price) * cartItem.qty;
            }
        }
    });

    // Free delivery in Andijan city if subtotal >= 100,000 UZS
    const isFreeDelivery = subtotal >= 100000 && state.selectedDeliveryFee <= 15000;
    const deliveryFee = subtotal === 0 ? 0 : (isFreeDelivery ? 0 : state.selectedDeliveryFee);
    const grandTotal = subtotal + deliveryFee;

    return { subtotal, totalSavings, deliveryFee, grandTotal, totalItems, isFreeDelivery };
}

function updateCartUI() {
    const t = translations[state.lang];
    const container = document.getElementById("cartItemsContainer");
    const { subtotal, totalSavings, deliveryFee, grandTotal, totalItems, isFreeDelivery } = calculateCartTotals();

    document.getElementById("cartCount").textContent = totalItems;
    document.getElementById("mobileFloatTotal").textContent = formatSum(grandTotal);

    if (state.cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart-box">
                <i class="fa-solid fa-basket-shopping"></i>
                <p>${t.cart_empty}</p>
            </div>
        `;
        document.getElementById("proceedCheckoutBtn").disabled = true;
        document.getElementById("proceedCheckoutBtn").style.opacity = "0.5";
    } else {
        document.getElementById("proceedCheckoutBtn").disabled = false;
        document.getElementById("proceedCheckoutBtn").style.opacity = "1";

        container.innerHTML = state.cart.map(cartItem => {
            const prod = productsData.find(p => p.id === cartItem.id);
            if (!prod) return "";
            return `
                <div class="cart-item">
                    <img src="${prod.image}" alt="${prod.name[state.lang]}">
                    <div class="cart-item-details">
                        <h5>${prod.name[state.lang]}</h5>
                        <span class="cart-item-price">${formatSum(prod.price * cartItem.qty)}</span>
                        <div class="qty-controls">
                            <button class="qty-btn" onclick="changeCartQty(${prod.id}, -1)">-</button>
                            <span><strong>${cartItem.qty}</strong></span>
                            <button class="qty-btn" onclick="changeCartQty(${prod.id}, 1)">+</button>
                        </div>
                    </div>
                    <button class="remove-item-btn" onclick="removeFromCart(${prod.id})" title="O‘chirish">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            `;
        }).join("");
    }

    document.getElementById("cartSubtotal").textContent = formatSum(subtotal);
    document.getElementById("cartSavings").textContent = "-" + formatSum(totalSavings);
    document.getElementById("cartDeliveryFee").textContent = isFreeDelivery ? t.free : formatSum(deliveryFee);
    document.getElementById("cartGrandTotal").textContent = formatSum(grandTotal);
}

// =========================================================
// ANDIJON DELIVERY ZONE SELECTOR
// =========================================================
function initDeliveryZones() {
    const areaTypeSelect = document.getElementById("deliveryAreaType");
    const zoneSelect = document.getElementById("deliveryZoneSelect");
    const chkDistrictSelect = document.getElementById("chkDistrict");

    function populateZones(type) {
        const zones = andijonDeliveryZones[type];
        zoneSelect.innerHTML = zones.map(z => `<option value="${z.id}">${z.name}</option>`).join("");
        updateZoneDisplay(type, zones[0].id);
    }

    // Populate Checkout District Select with all Andijan zones
    const allZones = [
        ...andijonDeliveryZones.city.map(z => ({ ...z, group: "Andijon shahri" })),
        ...andijonDeliveryZones.region.map(z => ({ ...z, group: "Andijon viloyati" }))
    ];
    chkDistrictSelect.innerHTML = allZones.map(z =>
        `<option value="${z.id}" data-price="${z.price}">${z.group} — ${z.name} (${formatSum(z.price)})</option>`
    ).join("");

    chkDistrictSelect.addEventListener("change", (e) => {
        const opt = e.target.selectedOptions[0];
        state.selectedDeliveryFee = Number(opt.dataset.price);
        state.selectedZoneName = opt.textContent;
        updateCartUI();
        updateCheckoutSummary();
    });

    areaTypeSelect.addEventListener("change", (e) => populateZones(e.target.value));
    zoneSelect.addEventListener("change", (e) => updateZoneDisplay(areaTypeSelect.value, e.target.value));

    populateZones("city");
}

function updateZoneDisplay(type, zoneId) {
    const zone = andijonDeliveryZones[type].find(z => z.id === zoneId);
    if (!zone) return;

    state.selectedDeliveryFee = zone.price;
    state.selectedZoneName = zone.name;

    document.getElementById("zonePriceDisplay").textContent = formatSum(zone.price);
    document.getElementById("zoneTimeDisplay").textContent = zone.time;
    document.getElementById("zoneStatusDisplay").textContent = zone.active ? "Faol ✅" : "Vaqtincha yopiq";
    updateCartUI();
}

// =========================================================
// CHECKOUT & ORDER RECEIPT
// =========================================================
function openCheckoutModal() {
    if (state.cart.length === 0) return;
    closeCartDrawer();

    // Prefill user data if logged in
    if (state.user) {
        document.getElementById("chkName").value = state.user.name || "";
        document.getElementById("chkPhone").value = state.user.phone || "";
    }

    updateCheckoutSummary();
    document.getElementById("checkoutModal").classList.add("open");
}

function updateCheckoutSummary() {
    const t = translations[state.lang];
    const { subtotal, deliveryFee, grandTotal, isFreeDelivery } = calculateCartTotals();
    const list = document.getElementById("checkoutItemsList");

    list.innerHTML = state.cart.map(item => {
        const prod = productsData.find(p => p.id === item.id);
        return `
            <div class="chk-item-row">
                <span>${prod.name[state.lang]} × ${item.qty}</span>
                <strong>${formatSum(prod.price * item.qty)}</strong>
            </div>
        `;
    }).join("");

    document.getElementById("chkSubtotal").textContent = formatSum(subtotal);
    document.getElementById("chkDelivery").textContent = isFreeDelivery ? t.free : formatSum(deliveryFee);
    document.getElementById("chkGrandTotal").textContent = formatSum(grandTotal);
}

// =========================================================
// VIDEO GALLERY & REVIEWS
// =========================================================
function renderVideoGallery() {
    const grid = document.getElementById("videoGalleryGrid");
    grid.innerHTML = kitchenVideos.map((vid, idx) => `
        <div class="video-card" onclick="openVideoModal(${idx})">
            <img src="${vid.thumb}" alt="${vid.title[state.lang]}" loading="lazy">
            <div class="video-card-overlay">
                <div class="play-circle"><i class="fa-solid fa-play"></i></div>
                <h4>${vid.title[state.lang]}</h4>
            </div>
        </div>
    `).join("");
}

function openVideoModal(index) {
    const vid = kitchenVideos[index];
    const player = document.getElementById("lightboxVideoPlayer");
    player.src = vid.videoUrl;
    document.getElementById("lightboxVideoTitle").textContent = vid.title[state.lang];
    document.getElementById("videoLightbox").classList.add("open");
    player.play();
}

function renderReviews() {
    const grid = document.getElementById("reviewsGrid");
    grid.innerHTML = reviewsData.map(rev => {
        const stars = "★".repeat(rev.rating) + "☆".repeat(5 - rev.rating);
        return `
            <div class="review-card">
                <div class="rev-header">
                    <img src="${rev.avatar}" alt="${rev.name}" loading="lazy">
                    <div>
                        <h5>${rev.name}</h5>
                        <span class="rev-date">${rev.date}</span>
                    </div>
                </div>
                <div class="rev-stars">${stars}</div>
                <p class="rev-text">"${rev.text}"</p>
            </div>
        `;
    }).join("");
}

// =========================================================
// AUTHENTICATION (FRONTEND DEMO)
// =========================================================
function updateAuthUI() {
    const t = translations[state.lang];
    const btnText = document.getElementById("authBtnText");
    if (state.user) {
        btnText.textContent = state.user.name.split(" ")[0];
        document.getElementById("loginForm").classList.add("hidden");
        document.getElementById("registerForm").classList.add("hidden");
        document.querySelector(".auth-tabs").classList.add("hidden");
        document.getElementById("userProfileBox").classList.remove("hidden");
        document.getElementById("profileUserName").textContent = state.user.name;
        document.getElementById("profileUserPhone").textContent = state.user.phone;
    } else {
        btnText.textContent = t.nav_login;
        document.querySelector(".auth-tabs").classList.remove("hidden");
        document.getElementById("loginForm").classList.remove("hidden");
        document.getElementById("userProfileBox").classList.add("hidden");
    }
}

// =========================================================
// EVENT LISTENERS & INTERACTIONS
// =========================================================
function closeCartDrawer() {
    document.getElementById("cartDrawer").classList.remove("open");
    document.getElementById("cartBackdrop").classList.remove("open");
}

function setupEventListeners() {
    // Sticky Navbar
    window.addEventListener("scroll", () => {
        document.getElementById("navbar").classList.toggle("scrolled", window.scrollY > 40);
    });

    // Mobile Hamburger
    document.getElementById("hamburgerBtn").addEventListener("click", () => {
        document.getElementById("navLinks").classList.toggle("mobile-open");
    });

    // Language Dropdown
    const langBtn = document.getElementById("langBtn");
    const langMenu = document.getElementById("langMenu");
    langBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        langMenu.classList.toggle("show");
    });
    langMenu.querySelectorAll("button").forEach(btn => {
        btn.addEventListener("click", () => {
            applyLanguage(btn.dataset.lang);
            langMenu.classList.remove("show");
        });
    });
    document.addEventListener("click", () => langMenu.classList.remove("show"));

    // Theme Toggle
    document.getElementById("themeToggle").addEventListener("click", () => {
        applyTheme(state.theme === "light" ? "dark" : "light");
    });

    // Hero Video Toggle
    const heroVideo = document.getElementById("heroVideo");
    document.getElementById("toggleHeroVideo").addEventListener("click", () => {
        const icon = document.getElementById("heroVideoIcon");
        if (heroVideo.paused) {
            heroVideo.play();
            icon.className = "fa-solid fa-pause";
        } else {
            heroVideo.pause();
            icon.className = "fa-solid fa-play";
        }
    });

    // Live Search
    const searchOverlay = document.getElementById("searchOverlay");
    const searchInput = document.getElementById("liveSearchInput");
    const searchResults = document.getElementById("searchResults");

    document.getElementById("openSearchBtn").addEventListener("click", () => {
        searchOverlay.classList.add("active");
        searchInput.focus();
    });
    document.getElementById("closeSearchBtn").addEventListener("click", () => {
        searchOverlay.classList.remove("active");
    });

    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.trim().toLowerCase();
        if (!query) {
            searchResults.innerHTML = "";
            return;
        }
        const matches = productsData.filter(p =>
            p.name.uz.toLowerCase().includes(query) ||
            p.name.ru.toLowerCase().includes(query) ||
            p.name.en.toLowerCase().includes(query)
        );
        searchResults.innerHTML = matches.map(m => {
            const cat = categoriesData.find(c => c.id === m.category);
            return `
                <div class="search-item">
                    <img src="${m.image}" alt="${m.name[state.lang]}">
                    <div class="search-item-info">
                        <h5>${m.name[state.lang]}</h5>
                        <small>${cat ? cat.name[state.lang] : ""} • ${formatSum(m.price)}</small>
                    </div>
                    <button class="add-to-cart-btn" onclick="addToCart(${m.id})">+</button>
                </div>
            `;
        }).join("");
    });

    // Sort Select
    document.getElementById("sortSelect").addEventListener("change", (e) => {
        state.sortBy = e.target.value;
        renderProducts();
    });

    // Cart Drawer Open/Close
    const openCart = () => {
        document.getElementById("cartDrawer").classList.add("open");
        document.getElementById("cartBackdrop").classList.add("open");
    };
    document.getElementById("openCartBtn").addEventListener("click", openCart);
    document.getElementById("mobileFloatCart").addEventListener("click", openCart);
    document.getElementById("closeCartBtn").addEventListener("click", closeCartDrawer);
    document.getElementById("cartBackdrop").addEventListener("click", closeCartDrawer);

    // Checkout Modal
    document.getElementById("proceedCheckoutBtn").addEventListener("click", openCheckoutModal);
    document.getElementById("closeCheckoutModal").addEventListener("click", () => {
        document.getElementById("checkoutModal").classList.remove("open");
    });

    // Payment Type API Notice
    document.querySelectorAll("input[name='paymentType']").forEach(radio => {
        radio.addEventListener("change", (e) => {
            const isOnline = e.target.value === "click" || e.target.value === "payme";
            document.getElementById("onlinePayNotice").classList.toggle("hidden", !isOnline);
        });
    });

    // Submit Checkout Form
    document.getElementById("checkoutForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const { grandTotal } = calculateCartTotals();
        const payType = document.querySelector("input[name='paymentType']:checked").value;
        const orderId = "#AFF-" + Math.floor(1000 + Math.random() * 9000);

        const isOnlineApi = payType === "click" || payType === "payme";
        const statusBadge = document.getElementById("receiptStatusBadge");

        if (isOnlineApi) {
            statusBadge.className = "receipt-status pending-api";
            statusBadge.textContent = `⏳ To‘lov kutilmoqda (${payType.toUpperCase()} API integratsiyasi kutilmoqda)`;
        } else {
            statusBadge.className = "receipt-status paid-cash";
            statusBadge.textContent = `✅ Yetkazib berilganda to‘lanadi (${payType === "cash" ? "Naqd pul" : "Karta terminal"})`;
        }

        const itemsHtml = state.cart.map(i => {
            const p = productsData.find(pr => pr.id === i.id);
            return `<div>• ${p.name[state.lang]} × ${i.qty} = <strong>${formatSum(p.price * i.qty)}</strong></div>`;
        }).join("");

        document.getElementById("receiptOrderId").textContent = orderId;
        document.getElementById("receiptDetails").innerHTML = `
            <p><strong>Mijoz:</strong> ${document.getElementById("chkName").value}</p>
            <p><strong>Telefon:</strong> ${document.getElementById("chkPhone").value}</p>
            <p><strong>Manzil:</strong> ${document.getElementById("chkDistrict").selectedOptions[0].textContent}, ${document.getElementById("chkMahalla").value}, ${document.getElementById("chkAddress").value}</p>
            <hr style="margin:8px 0; opacity:0.2;">
            ${itemsHtml}
            <hr style="margin:8px 0; opacity:0.2;">
            <p style="font-size:1.05rem;"><strong>Jami summa: ${formatSum(grandTotal)}</strong></p>
        `;

        // Clear cart after order creation
        state.cart = [];
        saveCart();
        updateCartUI();

        document.getElementById("checkoutModal").classList.remove("open");
        document.getElementById("orderSuccessModal").classList.add("open");
    });

    document.getElementById("closeSuccessModal").addEventListener("click", () => {
        document.getElementById("orderSuccessModal").classList.remove("open");
    });

    // Auth Modal & Tabs
    document.getElementById("openAuthBtn").addEventListener("click", () => {
        document.getElementById("authModal").classList.add("open");
    });
    document.getElementById("closeAuthModal").addEventListener("click", () => {
        document.getElementById("authModal").classList.remove("open");
    });

    document.querySelectorAll(".auth-tab").forEach(tab => {
        tab.addEventListener("click", () => {
            document.querySelectorAll(".auth-tab").forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            const isLogin = tab.dataset.tab === "login";
            document.getElementById("loginForm").classList.toggle("hidden", !isLogin);
            document.getElementById("registerForm").classList.toggle("hidden", isLogin);
        });
    });

    document.getElementById("loginForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const phone = document.getElementById("loginPhone").value;
        state.user = { name: "Andijon Mijozi", phone };
        localStorage.setItem("aff_user", JSON.stringify(state.user));
        updateAuthUI();
        document.getElementById("authModal").classList.remove("open");
        showToast("Xush kelibsiz!");
    });

    document.getElementById("registerForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("regName").value;
        const phone = document.getElementById("regPhone").value;
        state.user = { name, phone };
        localStorage.setItem("aff_user", JSON.stringify(state.user));
        updateAuthUI();
        document.getElementById("authModal").classList.remove("open");
        showToast("Ro‘yxatdan o‘tish muvaffaqiyatli yakunlandi!");
    });

    document.getElementById("logoutBtn").addEventListener("click", () => {
        state.user = null;
        localStorage.removeItem("aff_user");
        updateAuthUI();
        showToast("Tizimdan chiqdingiz");
    });

    // Review Form & Star Rating
    const starIcons = document.querySelectorAll("#starRatingInput i");
    starIcons.forEach(star => {
        star.addEventListener("click", () => {
            const val = Number(star.dataset.val);
            document.getElementById("revRating").value = val;
            starIcons.forEach(s => s.classList.toggle("active", Number(s.dataset.val) <= val));
        });
    });

    document.getElementById("reviewForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const newRev = {
            name: document.getElementById("revName").value,
            avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
            rating: Number(document.getElementById("revRating").value),
            text: document.getElementById("revText").value,
            date: new Date().toISOString().split("T")[0]
        };
        reviewsData.unshift(newRev);
        renderReviews();
        e.target.reset();
        showToast("Fikringiz uchun rahmat!");
    });

    // Video Lightbox Close
    document.getElementById("closeVideoLightbox").addEventListener("click", () => {
        const player = document.getElementById("lightboxVideoPlayer");
        player.pause();
        player.src = "";
        document.getElementById("videoLightbox").classList.remove("open");
    });
}

// Scroll Reveal Observer
function setupScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}