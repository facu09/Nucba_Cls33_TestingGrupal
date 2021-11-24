import React from 'react'
import { useState } from 'react'

const Test3 = () => {

    const [products, setProducts] = useState([]);
    const [users, setUsers] = useState([]);

  
    const addProducts = (allProducts) => {
        // Set allProducts into state
        setProducts(allProducts);

        console.log(products)

    }

    const addUsers = (allUsers) => {
        // Set allUsers into state, but EACH USER must have an autoincremental ID ( example: { name, age, id })
        // id must start at 1
        // definiciones
        let i = 1
    
        const nuevoArrayUsers = allUsers;

        nuevoArrayUsers.forEach(element => {
            //element es cada objeto, 
            //  y cuando el atributo no existe, la agrega al objeto.
            element['id']= i++;

        });

        console.log ("MARCA NUEVA, mostramos nuevoArrayUsers:");
        console.log (nuevoArrayUsers);

        setUsers(nuevoArrayUsers);

        // const nuevoArray = users.map(p => n = [...p], p.id = i++)
        // console.log (nuevoArray)
        // setProducts(...products, id)
    }

    const returnMixedArray = (propName) => {
        // Must return an array of users, which have a property with the name that comes by parameter,
        //and must have their respective products within that property,
        //the products are known by the userId of the product
    
        const nuevoArrayUsers = [...users];
         
        nuevoArrayUsers.forEach(user => {
            // estamos un el usuario 'id'

            //recorremos cada compra del arreglo products
            products.forEach(elemProd => {
                //Si el usuario 'id' tiene una compra
                if(user.id === elemProd.userId)  {
                   // user[propName] =  user[propName].flat (elemProd.products);
                   //funca :
                      user[propName] =  (elemProd.products);

                    // const newArray = [...new Set([user[propName] , (elemProd.products)])]
                    
                    // console.log ("MAAAAARCAAAAAA");
                    // console.log (newArray);
                    // user[propName] = newArray
                   //Array.prototype.push.apply(user[propName], elemProd.products)
                   // (user[propName]).push(elemProd.products);

                   //segun Juli
                    // p
                    // user
                    // const product = user[propName];
                    // user[propName] = [...product, ...p.products]


                } else {
                    // //no estoy seguro que vaya aca
                    // user[propName] = [];
                }

            });
            
        }); 

        console.log ("MARCA POSTA")
        console.log(nuevoArrayUsers)

        return [nuevoArrayUsers];
    }

    return {
        products,
        users,
        addProducts,
        addUsers,
        returnMixedArray
    }
}

export default Test3
