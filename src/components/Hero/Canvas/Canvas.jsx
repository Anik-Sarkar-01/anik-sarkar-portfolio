import React, { useRef, useState, useEffect } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import { GoTrash, GoDownload } from "react-icons/go";
import { BsFiletypeJson } from "react-icons/bs";
import { GoPencil } from "react-icons/go";
import { BsEraser } from "react-icons/bs";


const Canvas = () => {
  const canvasRef = useRef(null);
  const [eraseMode, setEraseMode] = useState(false);
  const [defaultSignature, setDefaultSignature] = useState([])
  const [color, setColor] = useState("#00ff99")

  useEffect(() => {
    fetch("/signature.json")
      .then(res => res.json())
      .then(data => setDefaultSignature(data))
  }, [])

  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.loadPaths(defaultSignature);
    }
  }, [defaultSignature]);

  const handlePenClick = () => {
    setEraseMode(false);
    canvasRef.current?.eraseMode(false);
  };

  const handleEraserClick = () => {
    setEraseMode(true);
    canvasRef.current?.eraseMode(true);
  };

  const handleClearClick = () => canvasRef.current?.clearCanvas();

  // unused button functionality
  // const handleUndoClick = () => canvasRef.current?.undo();
  // const handleRedoClick = () => canvasRef.current?.redo();
  // const handleResetClick = () => canvasRef.current?.resetCanvas();


  const handleSaveAsImage = async () => {
    try {
      const imageData = await canvasRef.current?.exportImage("png");
      const link = document.createElement("a");
      link.href = imageData;
      link.download = "canvas-drawing.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error("Image export failed", err);
    }
  };

  const handleSaveAsJson = async () => {
    try {
      const jsonData = await canvasRef.current?.exportPaths();
      const blob = new Blob([JSON.stringify(jsonData, null, 2)], {
        type: "application/json",
      });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "canvas-drawing.json";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error("JSON export failed", err);
    }
  };

  return (
    <div className="bg-[#0D1321] text-white p-10 space-y-10 rounded-xl">
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Try It Out</h2>

        {/* Tool Buttons */}
        <div className="relative">
          <div className="flex gap-2 text-black absolute items-center right-2 top-8 flex-col">
            <button className="btn bg-transparent w-fit h-fit p-0 border-none shadow-none">
              <input value={"#00ff99"} className="w-8 h-8" onChange={(e) => setColor(e.target.value)} type="color" name="" id="" />
            </button>
            <button
              className={`border btn p-2 w-fit h-fit rounded ${!eraseMode ? "bg-green-400 text-white border-2 border-green-200" : "hover:bg-green-400"
                }`}
              onClick={handlePenClick}
              disabled={!eraseMode}
            >
              <GoPencil></GoPencil>
            </button>
            <button
              className={`border btn p-2 w-fit h-fit rounded ${eraseMode ? "bg-green-400 text-white border-2 border-green-200" : "hover:bg-green-400"
                }`}
              onClick={handleEraserClick}
              disabled={eraseMode}
            >
              <BsEraser></BsEraser>
            </button>

            <button
              className="border btn p-2 w-fit h-fit rounded hover:bg-green-400"
              onClick={handleClearClick}
            >
              <GoTrash></GoTrash>
            </button>

            {/* Save Buttons */}
            <button
              className="border p-2 w-fit h-fit rounded btn hover:bg-green-400"
              onClick={handleSaveAsImage}
            >
              <GoDownload></GoDownload>
            </button>

            <button
              className="border p-2 w-fit h-fit rounded btn hover:bg-green-400"
              onClick={handleSaveAsJson}
            >
              <BsFiletypeJson></BsFiletypeJson>
            </button>




            {/* unused buttons */}

            {/* <button
              className="px-4 py-1 border rounded hover:bg-white/10"
              onClick={handleUndoClick}
            >
              Undo
            </button> */}
            {/* <button
              className="px-4 py-1 border rounded hover:bg-white/10"
              onClick={handleRedoClick}
            >
              Redo
            </button> */}
            {/* <button
              className="px-4 py-1 border rounded hover:bg-white/10"
              onClick={handleResetClick}
            >
              Reset
            </button> */}
          </div>

          {/* Canvas */}
          <ReactSketchCanvas
            ref={canvasRef}
            width="100%"
            height="300px"
            strokeWidth={3}
            strokeColor={color}
            canvasColor="transparent"
            className="rounded-lg bg-[#353B48]"
          />
        </div>
      </div>
    </div>
  );
};

export default Canvas;
