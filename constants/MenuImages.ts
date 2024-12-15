type MenuItemTitle =
    | 'Espresso'
    | 'Latte'
    | 'Cappuccino'
    | 'Americano'
    | 'Mocha'
    | 'Macchiato'
    | 'Flat_White'
    | 'Irish_Coffee'
    | 'Iced_Coffee'
    | 'Affogato';

const MENU_IMAGES: Record<MenuItemTitle, string> = {
    Espresso: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG',
    Latte: 'https://images.unsplash.com/photo-1526516335728-756aa4d8b722?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    Cappuccino: 'https://images.unsplash.com/photo-1512569194555-106edf7c7e9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    Americano: 'https://images.unsplash.com/photo-1512569194555-106edf7c7e9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    Mocha: 'https://images.unsplash.com/photo-1526516335728-756aa4d8b722?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    Macchiato: 'https://images.unsplash.com/photo-1526516335728-756aa4d8b722?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    Flat_White: 'https://images.unsplash.com/photo-1512569194555-106edf7c7e9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    Irish_Coffee: 'https://images.unsplash.com/photo-1526516335728-756aa4d8b722?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    Iced_Coffee: 'https://images.unsplash.com/photo-1526516335728-756aa4d8b722?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    Affogato: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG',
};

export { MENU_IMAGES, type MenuItemTitle };