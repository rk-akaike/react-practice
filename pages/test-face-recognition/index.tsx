import Canvas from "./components/canvas";
import data from "./fixtures/data.json";

const TestFaceRecongition = () => {
  return (
    <div>
      {data.map((eachUseCaseData, index) => {
        return <Canvas key={index} data={eachUseCaseData} />;
      })}
    </div>
  );
};

export default TestFaceRecongition;
