//logical operator
// && will return the first falsy value or the last value 
const posts =['post one','post two','post three']
posts.length>0 ?  console.log(posts[0] ) : console.log('no posts')

// || will return the first truthy value or the last value 
 let a;
 const b= 10 || 20;
 const d=12

if(b=== 20 && d===12){
    console.log('true')
}else
{
    console.log('false')
}
 console.log(b)
//  ? return the right side operand when the left operand is falsy or null or undefeodef
 let c;
 c=10 ?? 20;
 c= null ?? 20;
 c=undefined ?? 20;
 c=
console.log(c)
