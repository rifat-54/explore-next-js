
import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'

 
// This function can be marked `async` if using `await` inside
export async function middleware(req) {

    const token=await getToken({req})

    console.log(token);
    
        const isTokenOk=Boolean(token);

    const isAdminUser=token?.role=='admin';
    const isAdminSpesicRoutes=req.nextUrl.pathname.startsWith('/products/add')

    if(isAdminSpesicRoutes && !isAdminUser){
        return NextResponse.redirect(new URL('/api/auth/signin',req.url))
    }

    
    
    
    // let isServicePage=request.nextUrl.pathname.startsWith('/service')
    // const demodata={
    //     role:'admin',
    //     email:'safs@gial.com'
    // }
    
    // const cookeToken=request?.cookies?.get('nextjs-token')
    // console.log('token-> ',cookeToken?.value);

    // const isAdmin=demodata?.role==='admin'
    // console.log('middle-> ',isServicePage,isAdmin);
    // if(isServicePage && !isAdmin){
    //     return NextResponse.redirect(new URL('/login', request.url))
    // }

    
  return NextResponse.next()
}
 
