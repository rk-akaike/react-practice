const Home = () => {
  console.log("🚀 ~ Home ~ process.env.API_URL:", process.env.API_URL);
  console.log(
    "🚀 ~ Home ~ process.env.NEXT_PUBLIC_API_URL:",
    process.env.NEXT_PUBLIC_API_URL
  );
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
