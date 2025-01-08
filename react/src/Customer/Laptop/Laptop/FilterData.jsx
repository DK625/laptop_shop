import api from "../../../Config/api";

export const color = [
  "white",
  "Black",
  "Red",
  "marun",
  "Being",
  "Pink",
  "Green",
  "Yellow",
];



export const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White" },
      { value: "beige", label: "Beige" },
      { value: "blue", label: "Blue" },
      { value: "brown", label: "Brown" },
      { value: "green", label: "Green" },
      { value: "purple", label: "Purple" },
      {value:"yellow",label:"Yellow"}
    ],
  },

  // {
  //   id: "size",
  //   name: "Size",
  //   options: [
  //     { value: "S", label: "S" },
  //     { value: "M", label: "M" },
  //     { value: "L", label: "L" },
  //   ],
  // },
  
];

const getColor = async()=>{
  const res = await api.get('/colors')

  if(res?.data){
    filters[0].options = res.data.map((item)=>({value:item.name,label:item.name}))
  }
}

getColor()

export const singleFilter=[
  {
    id: "price",
    name: "Price",
    options: [
      { value: "100000-500000", label: "100k-500k VND" },
      { value: "500000-1000000", label: "500k-1tr VND" },
      { value: "1000000-10000000", label: "1tr-10tr VND" },
      { value: "10000000-50000000", label: "10tr-50tr VND" },
    ],
  },
  // {
  //   id: "disccout",
  //   name: "Disccount Range",
  //   options: [
  //     {
  //       value: "10",
  //       label: "10% And Above",
  //     },
  //     { value: "20", label: "20% And Above" },
  //     { value: "30", label: "30% And Above" },
  //     { value: "40", label: "40% And Above" },
  //     { value: "50", label: "50% And Above" },
  //     { value: "60", label: "60% And Above" },
  //     { value: "70", label: "70% And Above" },
  //     { value: "80", label: "80% And Above" },
  //   ],
  // },
  // {
  //   id: "stock",
  //   name: "Availability",
  //   options: [
  //     { value: "in_stock", label: "In Stock" },
  //     { value: "out_of_stock", label: "Out Of Stock" },
      
  //   ],
  // },
]

export const sortOptions = [
  
  { name: "Price: Low to High", query: "increase", current: false },
  { name: "Price: High to Low", query: "decrease", current: false },
];
