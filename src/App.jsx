import Column from "./components/column"
import data from "./data/data.json"


function App() {
  console.log(data.length);
  if(!data || data.length === 0) {
    return (
      <div>
        data is not avilable
      </div>
    )
  }

  return (
    <div className="wrapper">
      {data.map((value, index) => (
        <Column
          key={index}
          exercise={value.exercise}
          statistics={value.statistics}
          isNonIndex={value.exercise == "1"}
        />
      ))}
    </div>
  )
}

export default App
