export default function GameBoard({onSelectSquare, board}){


    // const [gameBoard, setGameBoard] = useState(initialGameBoard)

    // function handleSelect(rowIndex, colIndex){
    //     setGameBoard((prevGameBoard) => {
    //         const updatedGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
    //         updatedGameBoard[rowIndex][colIndex] = activePLayerSymbol
    //         return updatedGameBoard
    //     })

    //     onSelectSquare()
    // }

    return(
        <ol id="game-board">
            {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}