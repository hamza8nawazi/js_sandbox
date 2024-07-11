const d=new Date(2022, 1, 11, 20, 0, 0)
const month=d.getMonth()
const hour=d.getHours();

switch(month){
    case 1:
        console.log('it is january')
        break;
    case 2:
        console.log('it is february')
        break;
    case 3:
        console.log('it is march')
        break;
    default:
        console.log('it is not january ,february or march')
}

switch (true){
    case hour < 12:
        console.log('goodmorning')
        break;
    case hour < 18:
        console.log('goodafternoon')
        break;
    default:
        console.log('goodnight')
}