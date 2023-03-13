import React, { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import CardComponent from "../../components/CardComponent/Card";
import SearchInput from "../../components/searchInput/SearchInput";
import LoaderPosts from "./LoaderPosts";

export default function Posts() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:4000/api/posts')
      .then(res => res.json())
      .then(data => {
        setData(data)
        setLoading(false)
        data.map((i) => {
          const base64String = btoa(
            new Uint8Array(i.img.data.data).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ""
            )
          ); 
          setPrueba(`data:image/png;base64,${base64String}`);
          
        }) 
      })
      
      .catch((err) => console.log(err));
  }, []);

  function toBase64(arr) {
    //arr = new Uint8Array(arr) if it's an ArrayBuffer
    return btoa(
       arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
    );
 }

  return (
    <>
    {/* {loading && <LoaderPosts/>} */}
    <SearchInput/>
    <div  
    className="flex  py-20  justify-center  ">

    <div className="mr-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 lg:grid-cols-4">
    
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    {/* {data.map((i)=>{
      return(
        

        // <Card
       
        // name={i.name}
        // contact={i.contact}
        // image={`data:image/png;base64,${toBase64(i.img.data.data)}`}
        // location={i.location}
        // />
      )
    })} */}
    </div>
    
    </div>
    
    </>
  );
}
