"use client";
import Head from "next/head";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import products from "../../product_id_names.json";
import top_rules from "../../top_rules.json";

export default function Home() {
  const [cartItems, setCartItems] = useState([]);
  const [suggestionProduct, setSuggestionProduct] = useState(null);
  useEffect(() => {}, [cartItems]);

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function getProduct(product_id) {
    let product = products.find((item) => item.product_id == product_id);
    return product;
  }

  const recommend = (product) => {
    let find_product = cartItems.find(
      (item) => item.product_id === product.product_id
    );

    if (!find_product) {
      setCartItems((prev) => [...prev, product]);
      // console.log(cartItems);

      var highest = null;
      console.log(product.product_id);
      top_rules.forEach((item) => {
        if (item.antecedents[0] == product.product_id) {
          if (highest == null) highest = item;
          else if (highest.lift < item.lift) highest = item;
          console.log(highest.lift, item.lift);
        }
      });

      if (highest == null) highest = top_rules[randomNumber(0, 77)];

      const suggestedProduct = getProduct(highest?.consequents[0]);

      setSuggestionProduct(suggestedProduct);
    }
    // alert(product.product_name);
  };

  const removeProduct = (product) => {
    const updatedCart = cartItems.filter(
      (item) => item.product_id !== product.product_id
    );

    // Set the updatedCart as the new cartItems
    setCartItems(updatedCart);

    if (updatedCart.length == 0) setSuggestionProduct(null);

    console.log(updatedCart);
  };

  return (
    <main className="">
      <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" class="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Xero Degrees
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  href="/"
                  class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/association_rules"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Association rules
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="max-w-screen-xl  mx-auto p-4 flex">
        <div class="w-3/4 overflow-y-auto ">
          <h1 class="text-3xl mb-3">Products</h1>

          <div style={{ overflowY: "scroll", maxHeight: "80vh" }}>
            {products.map((product) => (
              <div class="m-5 p-4 bg-gray-700 rounded-md">
                <div class="flex align-top">
                  <div class="w-2/12 sm:w-2/12 px-4">
                    <img
                      src="https://static.vecteezy.com/system/resources/thumbnails/006/050/745/small/fast-food-doodle-hand-drawn-set-free-vector.jpg"
                      alt="..."
                      class="shadow rounded max-w-full h-auto align-middle border-none"
                    />
                  </div>
                  <div class="flex flex-row w-full justify-between">
                    <div>
                      <h2 class="text-lg">{product.product_name} </h2>
                      <p class="text-slate-300">
                        Savor the Flavor: Where Every Bite Tells a Story.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => recommend(product)}
                      class="text-white h-10 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div class="w-1/4 p-4">
          <h1 class="text-3xl mb-3">Cart</h1>
          {cartItems.map((product) => (
            <div class="w-full mb-2 p-2 bg-gray-700 rounded-md">
              <div class="flex align-top">
                <div class="w-6/12 sm:w-6/12 px-4">
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/006/050/745/small/fast-food-doodle-hand-drawn-set-free-vector.jpg"
                    alt="..."
                    class="shadow rounded max-w-full h-auto align-middle border-none"
                  />
                </div>
                <div class="flex flex-row w-full justify-between">
                  <div>
                    <h2 class="text-sm line-clamp-2 mr-2 ">
                      {product.product_name}{" "}
                    </h2>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeProduct(product)}
                    class="text-white h-10 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  >
                    X
                  </button>
                </div>
              </div>
            </div>
          ))}

          {cartItems.length == 0 ? <h1>No products added</h1> : null}

          {suggestionProduct != null ? (
            <>
              <h1 class="text-3xl mb-3 mt-5">Suggestion</h1>
              <div class=" p-2 bg-gray-700 rounded-md">
                <div class="flex align-top">
                  <div class="w-6/12 sm:w-6/12 px-4">
                    <img
                      src="https://static.vecteezy.com/system/resources/thumbnails/006/050/745/small/fast-food-doodle-hand-drawn-set-free-vector.jpg"
                      alt="..."
                      class="shadow rounded max-w-full h-auto align-middle border-none"
                    />
                  </div>
                  <div class="flex flex-row w-full justify-between">
                    <div>
                      <h2 class="text-sm line-clamp-2 mr-2">
                        {suggestionProduct.product_name}{" "}
                      </h2>
                    </div>
                    <button
                      type="button"
                      onClick={() => recommend(suggestionProduct)}
                      class="text-white h-10 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </main>
  );
}
