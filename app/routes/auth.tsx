import React, { useEffect } from 'react'
import { usePuterStore } from "~/lib/puter";
import { useLocation, useNavigate } from "react-router";

export const meta = () => [
  {title: 'Resumind | Auth',},
  {name: 'Description', content: 'Log into your account',}
]

const Auth = () => {
  const {isLoading, auth} = usePuterStore();
  const location = useLocation();
  const next = location.search.split('next=')[1];
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isAuthenticated) navigate(next);
  }, [auth.isAuthenticated, next]);

  const btnText = isLoading ? 'Signing you in...' : `Log${auth.isAuthenticated ? ' out' : 'in'}`

  return (
    <main className="bg-[url('/images/bg-auth.svg')] bg-cover min-h-screen flex items-center justify-center">
      <div className="gradient-border shadow-lg">
        <section className="flex flex-col gap-8 bg-white rounded-2xl p-10">
          <div className="flex flex-col items-center gap-2 text-center">
            <h1>Welcome</h1>
            <h2>Log In to Resume Your Journey </h2>
          </div>
          <div>
            <button className={`auth-button ${isLoading && 'animate-pulse'}`} onClick={isLoading ? () => {} : auth.isAuthenticated ? auth.signOut : auth.signIn}>
              <p>{btnText}</p>
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}
export default Auth
