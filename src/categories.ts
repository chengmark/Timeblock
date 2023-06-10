const CATEGORIES = {
  transport: {
    title: 'transport',
    icon: 'directions-car',
    subCategories: [
      {
        title: 'bus',
        icon: 'directions-bus'
      },
      {
        title: 'MTR',
        icon: 'train'
      },
      {
        title: 'taxi',
        icon: 'local-taxi'
      }
    ]
  },
  food: {
    title: 'food',
    icon: 'restaurant',
    subCategories: [
      {
        title: 'lunch',
        icon: 'rice-bowl'
      },
      {
        title: 'dinner',
        icon: 'dinner-dining'
      },
      {
        title: 'breakfast',
        icon: 'breakfast-dining'
      },
      {
        title: 'drinks',
        icon: 'local-cafe'
      },
      {
        title: 'dessert',
        icon: 'icecream'
      },
      {
        title: 'supper',
        icon: 'ramen-dining'
      }
    ]
  },
  shopping: {
    title: 'shopping',
    icon: 'shopping-bag',
    subCategories: [
      {
        title: 'snacks',
        icon: 'tapas'
      },
      {
        title: 'clothes',
        icon: 'checkroom' // tshirt
      },
      {
        title: 'electronics',
        icon: 'phone-android'
      },
    ]
  }
}

export type Categories = keyof typeof CATEGORIES;
export type SubCategories = typeof CATEGORIES[Categories]['subCategories'][number]['title'];

export const getSubCategories = (category: keyof typeof CATEGORIES) => CATEGORIES[category].subCategories;
export const getCategoryIcon = (category: keyof typeof CATEGORIES) => CATEGORIES[category].icon;

export default CATEGORIES