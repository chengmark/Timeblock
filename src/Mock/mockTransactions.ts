import { Transaction } from "../Types/Transaction"

const mockTransactions:Transaction[] = [
  {
    "title": "Salary",
    "amount": 19000.00,
    "date": "2023-04-04",
    "category": "Salary"
  },
  {
    "title": "PANDA",
    "amount": -2000,
    "date": "2023-04-04",
    "category": "Repayment"
  },
  {
    "title": "LRT from Tin Yat to TSW",
    "amount": -5.1,
    "date": "2023-04-05",
    "category": "Transportation"
  },
  {
    "title": "MTR from TSW to TST",
    "amount": -15.5,
    "date": "2023-04-05",
    "category": "Transportation"
  },
  {
    "title": "2 bottle of drinks at 7-11",
    "amount": -16,
    "date": "2023-04-05",
    "category": "Food"
  },
  {
    "title": "Lunch at Ba Fang",
    "amount": -80,
    "date": "2023-04-05",
    "category": "Food"
  },
  {
    "title": "Toys",
    "amount": -480,
    "date": "2023-04-05",
    "category": "Entertainment"
  },
  {
    "title": "Hotel",
    "amount": -210,
    "date": "2023-04-05",
    "category": "Entertainment"
  },
  {
    "title": "Uniqlo",
    "amount": -598,
    "date": "2023-04-05",
    "category": "Others"
  },
  {
    "title": "GU",
    "amount": -774,
    "date": "2023-04-05",
    "category": "Others"
  },
  {
    "title": "MTR",
    "amount": -5.6,
    "date": "2023-04-05",
    "category": "Transportation"
  },
  {
    "title": "MTR to TSW station",
    "amount": -19.7,
    "date": "2023-04-05",
    "category": "Transportation"
  },
  {
    "title": "Bus to work",
    "amount": -24.7,
    "date": "2023-04-06",
    "category": "Transportation"
  },
  {
    "title": "Lunch",
    "amount": -33,
    "date": "2023-04-06",
    "category": "Food"
  },
  {
    "title": "MTR",
    "amount": -8.7,
    "date": "2023-04-06",
    "category": "Transportation"
  },
  {
    "title": "Meet Fresh",
    "amount": -98,
    "date": "2023-04-06",
    "category": "Food"
  },
  {
    "title": "Sam Gor",
    "amount": -101,
    "date": "2023-04-06",
    "category": "Food"
  },
  {
    "title": "Bus to Airport",
    "amount": -40,
    "date": "2023-04-06",
    "category": "Transportation"
  },
  {
    "title": "Thai Baht Exchange",
    "amount": -900,
    "date": "2023-04-08",
    "category": "Entertainment"
  },
  {
    "title": "Bus from Airport to Home",
    "amount": -18.9,
    "date": "2023-04-10",
    "category": "Transportation"
  },
  {
    "title": "Bus to work",
    "amount": -24.7,
    "date": "2023-04-11",
    "category": "Transportation"
  },
  {
    "title": "Lunch",
    "amount": -26,
    "date": "2023-04-11",
    "category": "Food"
  },
  {
    "title": "MTR to MK",
    "amount": -12.5,
    "date": "2023-04-11",
    "category": "Transportation"
  },
  {
    "title": "Dinner at Sukiya",
    "amount": -78,
    "date": "2023-04-11",
    "category": "Food"
  },
  {
    "title": "MTR to TSW",
    "amount": -19.7,
    "date": "2023-04-11",
    "category": "Transportation"
  },
  {
    "title": "Toy",
    "amount": -300,
    "date": "2023-04-11",
    "category": "Entertainment"
  },
  {
    "title": "Bus to work",
    "amount": -24.7,
    "date": "2023-04-12",
    "category": "Transportation"
  },
  {
    "title": "Coffee at 7-11",
    "amount": -17,
    "date": "2023-04-12",
    "category": "Food"
  },
  {
    "title": "Breakfast",
    "amount": -14,
    "date": "2023-04-12",
    "category": "Food"
  },
  {
    "title": "Lunch",
    "amount": -26,
    "date": "2023-04-12",
    "category": "Food"
  },
  {
    "title": "MTR to TST",
    "amount": -14.9,
    "date": "2023-04-12",
    "category": "Transportation"
  },
  {
    "title": "Bread at Welcome",
    "amount": -10,
    "date": "2023-04-12",
    "category": "Food"
  },
  {
    "title": "Perfume at Donki",
    "amount": -59.9,
    "date": "2023-04-12",
    "category": "Others"
  },
  {
    "title": "Dinner at Sushi Express",
    "amount": -136,
    "date": "2023-04-12",
    "category": "Food"
  },
  {
    "title": "Movie tickets",
    "amount": -102,
    "date": "2023-04-12",
    "category": "Entertainment"
  },
  {
    "title": "Popcorn set for Movie",
    "amount": -40,
    "date": "2023-04-12",
    "category": "Food"
  },
  {
    "title": "MTR from TST to TSW",
    "amount": -21.7,
    "date": "2023-04-12",
    "category": "Transportation"
  },
  {
    "title": "Bus to work",
    "amount": -24.7,
    "date": "2023-04-13",
    "category": "Transportation"
  },
  {
    "title": "Lunch",
    "amount": -33,
    "date": "2023-04-13",
    "category": "Food"
  },
  {
    "title": "MTR to YMT",
    "amount": -12.5,
    "date": "2023-04-13",
    "category": "Transportation"
  },
  {
    "title": "Dinner at KFC",
    "amount": -126,
    "date": "2023-04-13",
    "category": "Food"
  },
  {
    "title": "MTR to TSW",
    "amount": -20.6,
    "date": "2023-04-13",
    "category": "Transportation"
  },
  {
    "title": "Bus to work",
    "amount": -24.7,
    "date": "2023-04-14",
    "category": "Transportation"
  },
  {
    "title": "Lunch",
    "amount": -33,
    "date": "2023-04-14",
    "category": "Food"
  },
  {
    "title": "MTR to YMT",
    "amount": -12.5,
    "date": "2023-04-14",
    "category": "Transportation"
  },
  {
    "title": "Dinner at KFC",
    "amount": -147,
    "date": "2023-04-14",
    "category": "Food"
  },
  {
    "title": "MTR to TSW",
    "amount": -20.6,
    "date": "2023-04-14",
    "category": "Transportation"
  },
  {
    "title": "Bus",
    "amount": -24.7,
    "date": "2023-04-15",
    "category": "Transportation"
  },
  {
    "title": "MTR",
    "amount": -4.7,
    "date": "2023-04-15",
    "category": "Transportation"
  },
  {
    "title": "Toy",
    "amount": -58,
    "date": "2023-04-15",
    "category": "Entertainment"
  },
  {
    "title": "Lunch at Mos Burger",
    "amount": -106,
    "date": "2023-04-15",
    "category": "Food"
  },
  {
    "title": "MTR from Causeway Bay to TSW",
    "amount": -27.8,
    "date": "2023-04-15",
    "category": "Transportation"
  },
  {
    "title": "Hotel",
    "amount": -220,
    "date": "2023-04-15",
    "category": "Entertainment"
  },
  {
    "title": "Clothes at GU",
    "amount": -179,
    "date": "2023-04-15",
    "category": "Others"
  },
  {
    "title": "Clothes at Uniqlo",
    "amount": -178,
    "date": "2023-04-15",
    "category": "Others"
  }
].reverse()

export default mockTransactions