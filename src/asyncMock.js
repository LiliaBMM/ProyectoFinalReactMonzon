const produto = [
    {
        id:'1',
        nombre:'Beauty Color Vision',
        precio:23,
        categoria:'maquillaje',
        img:'/imagenes/beauty color vision.PNG',
        stock: 10,
        descripcion:'Sombra de ojos',
    },
    {
        id:'2',
        nombre:'Blush',
        precio: 26,
        categoria:'maquillaje',
        img:'/imagenes/blush.PNG',
        stock: 18,
        descripcion:'Rubor',
    },
    {
        id:'3',
        nombre:'Cera en lápiz',
        precio: 16,
        categoria:'maquillaje',
        img:'/imagenes/cera en lapiz.PNG',
        stock: 8,
        descripcion:'Cera en lapiz para el estilizado de las cejas',
    },
    {
        id:'4',
        nombre:'Colos ushas',
        precio: 4,
        categoria:'skincare',
        img:'/imagenes/color ushas.PNG',
        stock: 8,
        descripcion:'Gloos cremoso y de colores brillante que humectan los labios',
    },
    {
        id:'5',
        nombre:'Concealer',
        precio: 30,
        categoria:'skincare',
        img:'/imagenes/concealer.PNG',
        stock: 5,
        descripcion:'Base en crema que cubre todas las imperfecciones, dejando un aspecto natural en tu piel',
    }
]

export const getProducto = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(produto)
        },200)
    })
}

export const getProductById = (produtoId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(produto.find(prod => prod.id === produtoId))
        },200)
    })
}

export const getProductByCategoria = (categoria) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(produto.filter(prod => prod.categoria === categoria))
        },200)
    })
}