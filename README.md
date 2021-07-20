<h1 align="center"> Aplikasi Pengiriman Makanan</h1>


[![Express.js](https://img.shields.io/badge/Express.js-4.x-orange.svg?style=rounded-square)](https://expressjs.com/en/starter/installing.html)
[![Node.js](https://img.shields.io/badge/Node.js-v.10.16-green.svg?style=rounded-square)](https://nodejs.org/)

## Tools
1. <a href="https://nodejs.org/en/download/">Node Js</a>
2. Node_modules
3. <a href="https://www.getpostman.com/">Postman</a>
4. Web Server (contoh. localhost)

## tutorial
1. buka cmd ketik npm install
2. buat file baru dengan nama **.env**
3. jalankan Web Server dan MySQL 
4. buat database dengan nama 'aplikasipesanantarmakanan', dan import file [aplikasipesanantarmakanan.sql](aplikasipesanantarmakanan.sql) ke **phpmyadmin**
5. buka Postman
6. pilih HTTP Method dan enter request url.(contoh. localhost:8080/items)


## Set up .env file
buka .env file 
```
APP_PORT=8080
APP_URI=http://localhost:8080/
APP_KEY=
                                                     
DB_SERVER=localhost
DB_USER=root
DB_PASSWORD=
DB_DATABASE=aplikasipesanantarmakanan
```                            

## End Point Admin
**1. GET**
* `/carts/:id` 
* `/categories/:id`
* `/items/:id` 
* `/items/search?name_item=chicken` 
* `/items/asc?name_item=chicken`
* `/items/page?page=1&limits=5`
* `/items/showall`
* `/restaurants/:id` 
* `/restaurants/menu/richeese factory`
* `/users/:id` 

**2. POST**
* `/categories`
* `/items`
* `/restaurants`
* `/riviews`
* `/users`

**3. PUT**
* `/categories/:id`
* `/items/:id`
* `/restaurants/:id`
* `/riviews/:id`
* `/users/:id`

**4. DELETE**
* `/categories/:id`
* `/items/:id`
* `/restaurants/:id`
* `/users/:id`



## End Point Pelanggan
**1. GET**
* `/categories/:id`
* `/items/:id` 
* `/items/search?name_item=chicken` 
* `/items/asc?name_item=chicken`
* `/items/page?page=1&limits=5`
* `/items/showall`
* `/restaurants/:id` 
* `/restaurants/menu/richeese factory`

**2. POST**
* `/items`
* `/restaurants`
* `/users`

**3. PUT**
* `/items/:id`
* `/restaurants/:id`
* `/users/:id`

**4. DELETE**
* `/items/:id`
* `/restaurants/:id`
* `/users/:id`

## End Point Restoran
**1. GET**
* `/categories/:id`
* `/items/:id` 
* `/items/search?name_item=chicken` 
* `/items/asc?name_item=chicken`
* `/items/page?page=1&limits=5`
* `/items/showall`
* `/restaurants/:id` 
* `/restaurants/menu/richeese factory`
* `/carts/:id`

**2. POST**
* `/items`
* `/carts`
* `/users`

**3. PUT**
* `/items/:id`
* `/carts/:id`
* `/riviews/:id`
* `/users/:id`

**4. DELETE**
* `/items/:id`
* `/carts/:id`
* `/users/:id`
