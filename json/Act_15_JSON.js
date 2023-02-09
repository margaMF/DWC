const jsonString = `{
    "contenedores" : [
        {"tipo" : "grande", 
        "envase" : [
            {
                "tipo" : "grandeAncho",
                "contenido" : [
                    {"tipo" : "alimento", "nombre" : "agua"},
                    {"tipo" : "alimento", "nombre" : "leche"},
                    {"tipo" : "alimento", "nombre" : "aceite"},
                    {"tipo" : "alimento", "nombre" : "vinagre"},
                ]
            },

            {
                "tipo" : "grandeAlto",
                "contenido" : [
                    {"tipo" : "alimento", "nombre" : "agua"},
                    {"tipo" : "alimento", "nombre" : "leche"},
                    {"tipo" : "alimento", "nombre" : "aceite"},
                    {"tipo" : "alimento", "nombre" : "vinagre"},
                ]
            }
        ]
    },

    {"tipo" : "mediano", 
        "envase" : [
            {
                "tipo" : "medianoAncho",
                "contenido" : [
                    {"tipo" : "alimento", "nombre" : "agua"},
                    {"tipo" : "alimento", "nombre" : "leche"},
                    {"tipo" : "alimento", "nombre" : "aceite"},
                    {"tipo" : "alimento", "nombre" : "vinagre"},
                ]
            },

            {
                "tipo" : "medianoAlto",
                "contenido" : [
                    {"tipo" : "corrosivo", "nombre" : "lejia"},
                    {"tipo" : "corrosivo", "nombre" : "amoniaco"},
                    {"tipo" : "corrosivo", "nombre" : "gasolina"},
                    {"tipo" : "corrosivo", "nombre" : "aguarras"},
                    {"tipo" : "corrosivo", "nombre" : "alcohol"},
                    {"tipo" : "corrosivo", "nombre" : "jabon"},
                ]
            }
        ]
    },

    {"tipo" : "vertical", 
        "envase" : [
            {
                "tipo" : "medianoAlto",
                "contenido" : [
                    {"tipo" : "corrosivo", "nombre" : "lejia"},
                    {"tipo" : "corrosivo", "nombre" : "amoniaco"},
                    {"tipo" : "corrosivo", "nombre" : "gasolina"},
                    {"tipo" : "corrosivo", "nombre" : "aguarras"},
                    {"tipo" : "corrosivo", "nombre" : "alcohol"},
                    {"tipo" : "corrosivo", "nombre" : "jabon"},
                ]
            },

            {
                "tipo" : "grandeAlto",
                "contenido" : [
                    {"tipo" : "alimento", "nombre" : "agua"},
                    {"tipo" : "alimento", "nombre" : "leche"},
                    {"tipo" : "alimento", "nombre" : "aceite"},
                    {"tipo" : "alimento", "nombre" : "vinagre"},
                ]
            }
        ]
    }
    ]
}`;

let jsonObj = JSON.parse(jsonString);
console.log(jsonObj);