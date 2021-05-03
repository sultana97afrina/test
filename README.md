QnA:

1.	How are you doing the scheduling?
      Using cron-module. It is a small task scheduler of jasascropt for node.
      
2.	Why did you use the database you chose to work with?
       I have used mongodb. In here one collection can hold different documents. It is easy to scale and uses the internal memory to store working set. That's how it enables faster access of data.
   
3.	When can you join us from?
        Immediately.

4.	Are you willing to come to our office at Ruby, Kolkata?
        Yes, if the transport system is regular.
        
        
        
        
        
 1. Reminder creation done.
 use "http://localhost:4500/user/createreminder" for creating reminder.(choose POST)
 json:{
    "name":"Abc",
    "email":"abc@gmail.com",
    "date":"2021/5/3 12:13",
    "description":"sending at 12:13"
}

2. Reminder Update done.
use "http://localhost:4500/user/updatereminder/{id}" for update.{id} the id from databse for example "608fa6c94d0c3a2704dbec5f". (choose PUT)
json: {
    "name":"Abc",
    "email":"abc@gmail.com",
    "date":"2021/5/3 12:25",
    "description":"sending at 12:25"
}

3. Reminder deletion  done.
use "http://localhost:4500/user/deletereminder/{id}" use the same id as update so that u can check. (choose DELETE)
