
# Api call from frontend

- fetch

* header 
-- 'content-type' : 'application/json'
-- 'accept' : 'application/json'
```js

fetch('url', {
    headers: {

    },
    credentials: "include"
})
.then(async (res)=> {

    const results = await res.json()


})

```

- axios

```js


{
    name: "sam",
    phones: [
        123,
        3231,
    ],
    address: {
        city: 'perth'
    },
    profile_pic: [object Object]
}

const form  = new FormData()



form.append('name', "sam")
form.set('phones[0]', 123)
form.set('phones[1]', 3231)
form.set('address', JSON.stringtify({city: 'perth'}))



axios.get('url', {

}, {
    withCredentials: true
} ).then((res) => {

const results = res.data

})



```


- 

# Auth





# Gotchas


# 

