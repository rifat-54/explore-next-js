import { NextResponse } from 'next/server'

 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    let isServicePage=request.nextUrl.pathname.startsWith('/service')
    const demodata={
        role:'admin',
        email:'safs@gial.com'
    }
    
    const cookeToken=request?.cookies?.get('nextjs-token')
    console.log('token-> ',cookeToken?.value);

    const isAdmin=demodata?.role==='admin'
    console.log('middle-> ',isServicePage,isAdmin);
    if(isServicePage && !isAdmin){
        return NextResponse.redirect(new URL('/login', request.url))
    }

    
  return NextResponse.next()
}
 
