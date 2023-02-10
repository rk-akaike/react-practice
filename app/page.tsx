import Link from "next/link";

const App = () => {
  return (
    <div>
      <h1 className="title">
        <Link target="_blank" href="/test-face-recognition">
          TestFaceRecongition page!
        </Link>
      </h1>
    </div>
  );
};

export default App;
