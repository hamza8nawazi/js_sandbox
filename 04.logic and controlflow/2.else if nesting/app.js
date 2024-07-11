const d=new Date(8,21,2023,6,0,0);
const hour =d.getHours();

if (hour < 12){
    console.log('good morning')
} else if(hour < 18 ){
    console.log('good afternoon')
} else{
    console.log('good night')
}

// nested if

if (hour < 12){
    console.log('good morning');

    if(hour===6){
        console.log('wakeup!')
    }
} else if(hour < 18 ){
    console.log('good afternoon')
} else{
    console.log('good night')

    if (hour>=20){
        console.log('zzzzzzzzzz')
    }
}

if (hour>=7 && hour<15){
    console.log('this is work time!')
}
if (hour===6 || hour===20){
    console.log('brush your teeth!')
}