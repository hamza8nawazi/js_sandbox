// falsy CSSFontFeatureValuesRule;
// -false
// -0
// - "" or '' (empty string)
// - null
// - undefined
// -NaN

// truthy values:
// -everything else that is not falsy
// -true
// -'0'(0 in a String)
// -" " (space in a String)
// -'false'(false in a string)
// - [](empty Array)
// -{}(empty Object)
// - function(){} (empty function)

const x= false;

if (x){
    console.log('this is truthy');
} else{
    console.log('this is falsy');
}

console.log(Boolean(x))

//truthy and falsy caveats

const children = 0;
if (!isNaN(children)){
    console.log(`you have ${children} children`);
} else{
    console.log('please enter number of children');
}

//checking for empty arrays
 const posts=[]                    //const posts=['post1','post2']
                                    //result = list posts
 if (posts.length >0){
    console.log('list posts');
 }else{
    console.log('no posts to list')
 }

  //checking for empty objects
  const user= {
    name:'brad'
  }; 
  
  if (Object.keys(user).length > 0){
    console.log('list user')
  } else{
    console.log('no user')
  }

  //loose equality (==)
  console.log(false==0);