import { useNavigate } from "react-router-dom";

export const Landing = () => {
  const navigate = useNavigate();
  return <div className="flex justify-center">
    <div className="pt-8 max-w-screen-lg">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex justify-center">
          <img src="/board.jpeg" className="max-w-99 border border-white-500" alt="chessboard" />
        </div>
        <div className="pt-16 pl-8 pr-8">
          <div className="flex justify-center">
            <h1 className="text-4xl font-bold text-white">Play Chess Online on the #1 Site!</h1>
          </div>

          <div className="mt-8 flex justify-center">
            <button onClick={() => {
              navigate("/game")
            }} className="px-8 py-4 text-2xl bg-green-500 hover:bg-green-700 text-white font-bold rounded">Play Online</button>
          </div>
        </div>
      </div>
    </div>
  </div>
}