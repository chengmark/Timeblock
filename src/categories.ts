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
  },
  income: {
    title: 'income',
    icon: 'monetization-on',
    subCategories: [
      {
        title: 'salary',
        icon: 'local-atm'
      },
      {
        title: 'voucher',
        icon: 'payment'
      }
    ]
  }
}

export type Categories = keyof typeof CATEGORIES;
export type SubCategories = typeof CATEGORIES[Categories]['subCategories'][number]['title'];

export const getCategories = () => Object.keys(CATEGORIES)
export const getSubCategories = (category: Categories) => CATEGORIES[category].subCategories;
export const getCategoryIcon = (category: Categories) => CATEGORIES[category].icon;
export const getSubCategoryIcon = (category: Categories, subCategory: SubCategories) => CATEGORIES[category].subCategories.find(subCat => subCat.title === subCategory)?.icon

export default CATEGORIES