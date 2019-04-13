# endoc
**A free and open-source Endpoint Documentation tool**

**Built by Developers for Developers.**

---

*Note: This project is under heavy construction. As such, the API may change dramatically between major releases and documentation is lacking.*

## Instructions to run tha application: 

1) Create a file on `/env` folder and name it `config.json`. Paste on this file the code below:

```JSON
{
  "Port": 3000,
  "DB": {
    "Mongo_ConStr": "<<YOUR_MONGODB_CON_STRING>>"
  },
  "JWT_SECRET": "<<YOUR_JWT_SECRET_KEY>>"
}
```

2) Application uses signed certificate to run over https. You can generate a self-signed certificate using `openssl`

On `/env` folder run below command:

```Bash
openssl req -nodes -new -x509 -keyout server.key -out server.cert
```

3) Navigate to `/client` folder to build Angular project. Run below command on your terminal: 
```Bash
ng build 
```

4) Navigate back to root folder and start node server using below command:

 ```Bash
node index.js
```

## Contact the developer: 

Feel free to contact me on  [Telegram](https://t.me/agonxgashi) or [Twitter](https://twitter.com/agonxgashi).
