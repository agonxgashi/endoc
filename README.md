# endoc
**A free and open-source Endpoint Documentation tool**

**Built by Developers for Developers.**

---

*Note: This project is under heavy construction. As such, the API may change dramatically between major releases and documentation is lacking.*

## Instructions: 

1) Create a file on `/config` folder and name it `db-config.json`. Paste on file below code:

```JSON
{
    "Mongo_ConStr": "{Connection String to your MongoDB cluster}"
}
```

2) Navigate to `/client` folder to build Angular project. Run below command on your terminal: 
```Bash
ng build 
```

3) Navigate back to root folder and start node server using below command:

 ```Bash
node index.js
```
