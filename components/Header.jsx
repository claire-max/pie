import css from "../styles/Header.module.css";
import Logo from "../assets/logo-transparent-png.png";
import Image from "next/image";
import { UilShoppingBag, UilReceipt } from "@iconscout/react-unicons";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useStore } from "../store/store";

export default function Header () {
  const [Order, setOrder]= useState("")
  const items = useStore((state)=>state.cart.pizzas.length);

  useEffect(()=>{
    setOrder(localStorage.getItem("order"));
  }, []);

  return(
    <div className={css.header}>
     <div className={css.logo}>
     <Image src={Logo} alt="logo" width={70} height={60} />
        
    </div>

    <ul className={css.menu}>
        <li>
          <Link href="../">Home</Link>
        </li>
         <li>Menu</li>
        <li>Contact</li>
      </ul>

      <div className={css.rightSide}>
        <Link href = '/cart'>
          <div className={css.cart}>
            <UilShoppingBag size="35" color="#ffe398" />
            <div className={css.badge}>{items}</div>
          </div>
          </Link>
      
      {Order && (
        <Link href={`/order/${Order}`}>
          <div className={css.cart}>
            <UilReceipt size={35}/>
            {Order != "" && <div className={css.badge}>1
              </div>}

          </div>
        </Link>
      )}
          

        </div>
         </div>
   
  );

}