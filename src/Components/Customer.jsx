import React from "react";

function Customer() {
  const Customer = [
    {
      name: "John Doe",
      img: "src/assets/img/Customer/3.jpg",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis placeat commodi voluptatum deserunt velit recusandae saepe totam aut facilis culpa!",
    },
    {
        name: "Lilly",
        img: "src/assets/img/Customer/2.jpg",
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis placeat commodi voluptatum deserunt velit recusandae saepe totam aut facilis culpa!",
      },
      {
        name: "Billy",
        img: "src/assets/img/Customer/1.jpg",
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis placeat commodi voluptatum deserunt velit recusandae saepe totam aut facilis culpa!",
      },
      {
        name: "Emma",
        img: "src/assets/img/Customer/4.jpg",
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis placeat commodi voluptatum deserunt velit recusandae saepe totam aut facilis culpa!",
      },
  ];

  const display = Customer.map(item => (
    <div className="" key={item.name}>
      <img className="h-[270px] w-[270px] rounded-full" src={item.img} alt="" />
      <h1 className="text-xl font-semibold">{item.name}</h1>
      <p className="mt-2">{item.review}</p>
    </div>
  ));

  return (
    <>
      <section className="mt-10 mx-10">
        <h1 className="text-center font-bold text-4xl">Happy Customers</h1>
        <div className="flex mt-10 gap-4">{display}</div>
      </section>
    </>
  );
}

export default Customer;
