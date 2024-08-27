import './TaskCard.css';

export default function TaskCard({Title,duedate,name,list}){
    return (
        <div className='TaskItem'>
            <h2 className='text-xl font-medium mb-2'>{Title}</h2>
            <p className='text-sm'>{list} on:{duedate} </p>
            <p className='text-sm'>Assignee:{name}</p>
        </div>
    );
}