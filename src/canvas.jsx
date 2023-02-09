import { useEffect, useRef } from "react";

const Canvas = ({ data }) => {
  console.log("🚀 ~ file: canvas.jsx:4 ~ Canvas ~ data", data);
  const canvasRef = useRef();
  const imageRef = useRef();

  useEffect(() => {
    var ctx = canvasRef.current.getContext("2d");
    const boxes = data.metadata.instances;
    ctx.drawImage(imageRef.current, 0, 0);
    for (const box of boxes) {
      let name = box.class_name;
      let [left, top, right, bot] = box.bbox;
      ctx.beginPath();
      ctx.lineWidth = 3;
      ctx.strokeStyle = "green";
      ctx.strokeRect(left, top, right - left, bot - top);
      ctx.font = "20px Arial";
      ctx.fillStyle = "red";
      ctx.fillText(name, left, top);
    }
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <canvas
        style={{ border: "1px solid #d3d3d3", width: "100%" }}
        ref={canvasRef}
        height={data.metadata.height}
        width={data.metadata.width}
      >
        Your browser does not support the HTML5 canvas tag.
      </canvas>
      <img
        style={{
          height: `${data.metadata.height}px`,
          width: `${data.metadata.width}px`,
        }}
        src={`data:image/jpg;base64,${data.image_string}`}
        alt="result"
      />
      <img
        style={{ display: "none" }}
        ref={imageRef}
        src={data.original_image}
        alt="initial"
      />
    </div>
  );
};

export default Canvas;
