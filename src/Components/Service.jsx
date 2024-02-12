import React from 'react'
import Nav from './Nav'
import Banner from './Banner'
import Footer from './Footer'

function Service() {
  const categories=[
    {
      pic:"src/assets/img/Category/beer.jpg",
      type:"Beer",
    },
    {
      pic:"src/assets/img/Category/chines.jpg",
      type:"Chines Food",
    },
    {
      pic:"src/assets/img/Category/indian.jpg",
      type:"Indian Food",
    },
    {
      pic:"src/assets/img/Category/italian.jpg",
      type:"Italian Food",
    },
    {
      pic:"src/assets/img/Category/japnies.jpg",
      type:"Japnies Food",
    },
    {
      pic:"src/assets/img/Category/juice.jpg",
      type:"Juice",
    },
    {
      pic:"src/assets/img/Category/moctails.jpg",
      type:"Mocktails",
    },
    {
      pic:"src/assets/img/Category/non.jpg",
      type:"Non-Veg",
    },
    {
      pic:"src/assets/img/Category/salaad.jpg",
      type:"Salaad",
    },
    
]

  const dataDisplay=categories.map((item)=>
    <div className='rounded-xl p-5 shadow-xl shadow-slate-700 cursor-pointer'>
      <img className='w-[350px] h-[500px] rounded-lg hover:scale-105  transition-all' src={item.pic} alt="" />
          <h1 className='text-center mt-5 text-2xl font-bold hover:scale-105  transition-all'>{item.type}</h1>
    </div>
  )
  return (
    <>
      <Nav />
      <Banner value="src\assets\img\Banner\service.jpg"/>
      <section className='mx-20'>
        <h1 className='text-4xl text-center font-bold mt-10'>Services</h1>
        <div className='flex justify-around flex-wrap mt-20 gap-10 '>
          {dataDisplay}
        </div>
        
      </section>
      <Footer />
    </>
  )
}

export default Service