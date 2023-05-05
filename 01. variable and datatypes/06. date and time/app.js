let x;
let d = new Date();
 x=d.getDate()
 x=d.getDay()
 x=d.getMonth()
 x=d.getTime()
 x=d.getFullYear()
 
 x=d.valueOf()

 x=`${d.getFullYear()} - ${d.getMonth()+1} - ${d.getDate()}`

 x=d.toLocaleString('default', {month :'short' })

 x= d.toLocaleString('default' ,{
    weekday : 'long',
    year : 'numeric',
    month : 'long',
    day : 'numeric',
    hour : 'numeric',
    minute: 'numeric',
    second : 'numeric', 
    timeZone: 'America/New_York' ,
});
console.log(x)