import React from 'react'
const data = [
    {id:1, task: 'item 1', status:false, created_at: '2024-01-01'},
    {id:2, task: 'item 2', status:true, created_at: '2024-01-02'},
    {id:3, task: 'item 3', status:false, created_at: '2024-01-03'},
]
export default function Mytodos() {
  return (
    <main className='container-fluid py-5'>
        <div className='container'>
            <table className='table table-bordered '>
                  <thead>
                      <tr>
                          <th>Task</th>
                          <th>Created At</th>
                      </tr>
                  </thead>
                  <tbody>
                      {data.map(item => (
                          <tr key={item.id}>
                              <td className={`text-${item.status ? 'success' : 'danger'}`}>{item.task}</td>
                              <td>{item.created_at}</td>
                          </tr>
                      ))}
                  </tbody>
            </table>
      </div>
  </main>
  )
}
