import { useState } from "react";
import iconoFoto from "../../assets/iconoFoto.png"
import imagenPrev from "../../assets/imgPreview.png"
import { PostButton } from "./PostButton";

export function PostForm(){
    const [imgFile, setImgFile] = useState();
    const [imgPreview, setImgPreview] = useState(imagenPrev);
   
    function onFormSubmit(event){
        event.preventDefault();

    }

    const OnImgChange = (event)=> {
            event.preventDefault();
            const image = event.target.files[0];
            if(image.type.includes('image')){
                const reader = new FileReader()
                reader.readAsDataURL(image)

                reader.onload = function() {
                    setImgPreview(reader.result)
                }
                setImgFile(image);
            }else{
                console.log("Hubo un errorcito")
            }   
    }
    
    

    return(
        <form  className="mt-[50px] flex-col font-['Montserrat'] not-italic " onChange={onFormSubmit}>
            <h1 className="mb-[10px] font-extrabold text-4xl min-w-full">Publicar un aviso</h1>
            <hr className=" mb-[50px] bg"></hr>
            <label className="font-extrabold  text-4xl">Nombre de la mascota</label><br/>
            <div className="mb-[10px] border-b-4 pb-[7px] border-b-yellow-200 focus-within:border-yellow-400 
            py-2  w-[49%] ">
                <input className="mt-[10px] bg-white rounded-md" type="text" id="name" name="name"></input><br/>
            </div>
            
            <label className="font-medium text-xl items-end">Numero de contacto:</label><br/>
            <div className="mb-[10px] border-b-4 pb-[7px] border-b-yellow-200 focus-within:border-yellow-400
            py-2  w-[49%] ">
                <input className="mt-[10px] bg-white rounded-md" type="text" id="contact" name="contact"></input><br/>
            </div>
            <label className=" font-medium text-xl items-end">Descripcion detallada:</label><br/>
            <div className="mb-[10px] border-b-4 pb-[7px] border-b-yellow-200 focus-within:border-yellow-400 
            py-2  w-[93%] ">
                <textarea className=" min-h-[200px] min-w-[400px] mt-[10px] bg-white rounded-md" type="text"
                 id="description" name="description"></textarea><br/>
            </div>
            <label className="font-medium text-xl items-end ">Zona donde fue visto por ultima vez:</label><br/>
            <div className="mb-[10px] border-b-4 pb-[7px] border-b-yellow-200 focus-within:border-yellow-400 
            py-2  w-[49%] ">
                <input className="mt-[10px] bg-white rounded-md" type="text" id="location" name="location"></input><br/>
            </div>
            <div className=" mt-[30px] flex">
                <div className="p-4 max-w-[100px] max-h-[100px ] flex items-center flex-col">
                    <div className="relative mb-6">
                        <input className="relative z-[2] max-w-[90px] h-[90px]  cursor-pointer border-none 
                        opacity-0" type="file" id="img" name="testImage" onChange={OnImgChange}></input>
                        <button className="absolute flex top-0 left-0 w-full h-full z-[1] justify-center 
                        items-center cursor-pointer outline-none">
                            <i>
                                <img src={iconoFoto} alt="img-button" className=""/>
                            </i>
                    </button>
                    </div>
                </div>
                <img src={imgPreview} alt="imagen" className=" ml-12 rounded-md border-4 border-yellow-200
                 w-[150px] "></img>
            </div>
            <PostButton/>
        </form>
    );
}