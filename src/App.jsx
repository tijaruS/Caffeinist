import CoffeeForm from "./components/CoffeeForm";
import Hero from "./components/Hero";
import History from "./components/History";
import Layout from "./components/Layout";
import Stats from "./components/Stats";
import { useAuth } from "./context/AuthContext";

function App() {
  const { globalUser, globalData, isLoading } = useAuth();
  // console.log("console from app", globalData);
  const isAuthenticated = globalUser;
  const isData = globalData && !!Object.keys(globalData || {}).length;
  const authenticatedContent = (
    <>
      <Stats />
      <History />
    </>
  );
  return (
    <Layout>
      <Hero />
      <CoffeeForm isAuthenticated={isAuthenticated} />
      {isAuthenticated && isLoading && <p>Loading</p>}
      {isAuthenticated && isData && authenticatedContent}
    </Layout>
  );
}

export default App;
