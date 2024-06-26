import "./App.css";
import { useState, useEffect } from "react";
import Account from "./components/Account";
import Auth from "./components/Auth";
import { supabase } from "./utils/supabase";

function App() {
  const [session, setSession] = useState<Record<string, unknown> | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <div className="container" style={{ padding: "50px 0 100px 0" }}>
      {!session ? (
        <Auth />
      ) : (
        <Account key={session.user.id} session={session} />
      )}
    </div>
  );
}

export default App;
