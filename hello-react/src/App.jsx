import './App.css'
import TaskCard from './TaskCard.jsx'

function App() {
  const title = ["Build the website with static content", "Add a blog", "Design the mockup", "Get the approval from principal"];

  const work = ["Due","Completed"];

  return (
    <div className='flex justify-center mt-32 font-mono'>
      <div className='m-10 p-3 border-solid border-2 rounded'>
        <h1 className='text-3xl text-center mb-4 font-bold'>Pending</h1>
        <TaskCard Title={title[0]} duedate={" 10th April"} name={" Rohit S"} list={work[0]}/>
        <TaskCard Title={title[1]} duedate={" 22nd March"} name={" Rohit M"} list={work[0]}/>
      </div>
      <div className='m-10 p-3 border-solid border-2 rounded'>
        <h1 className='text-3xl text-center mb-4 font-bold '>Done</h1>
        <TaskCard Title={title[2]} duedate={" 10th April"} name={" Rohit M"} list={work[1]}/>
        <TaskCard Title={title[3]} duedate={" 20th April"} name={" Ajay S"} list={work[1]}/>
        
        
      </div>
    </div>
  );
}

export default App;
